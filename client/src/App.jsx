import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NavBar from './comps/NavBar.jsx';
import Stories from './comps/Stories.jsx';
import ToolBar from './comps/ToolBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      topStories: [],
      currentPageStories: [],
      mainFeedTitle: '',
    };
  }

  componentWillMount() {
    const { location: { pathname } } = window;
    const zipcode = pathname.slice(0, -1).split('/').pop();
    $.get('http://localhost:8000/zipcode', { zipcode }, (stories) => {
      const topStories = stories.slice(0, 5);
      this.setState({
        stories,
        topStories,
        currentPageStories: topStories,
        mainFeedTitle: `Community News From YOUR Hood (${zipcode})`,
      });
    });
  }

  hoodClickHandler(e) {
    const zipcode = e.target.id || 94121;
    $.get('http://localhost:8000/zipcode', { zipcode }, (stories) => {
      const topStories = stories.slice(0, 5);
      this.setState({
        stories,
        topStories,
        currentPageStories: topStories,
        mainFeedTitle: `Community News From YOUR Hood (${zipcode})`,
      });
    });
  }
  
  cityClickHandler(e) {
    // console.log('this here e thing:', e.target.id);
    const city = e.target.value || 'San Francisco';
    $.get('http://localhost:8000/city', { city }, (stories) => {
      const topStories = stories.slice(0, 5);
      this.setState({
        stories,
        topStories,
        currentPageStories: topStories,
        mainFeedTitle: `Community News From ${city}`,
      });
    });
  }

  countyClickHandler(e) {
    // console.log('this here e thing:', e.target.id);
    const county = e.target.value || 'Bay Area';
    $.get('http://localhost:8000/county', { county }, (stories) => {
      const topStories = stories.slice(0, 5);
      this.setState({
        stories,
        topStories,
        currentPageStories: topStories,
        mainFeedTitle: `Community News From ${county}`,
      });
    });
  }

  stateClickHandler(e) {
    // console.log('this here e thing:', e.target.id);
    const state = e.target.value || 'California';
    $.get('http://localhost:8000/state', { state }, (stories) => {
      const topStories = stories.slice(0, 5);
      this.setState({
        stories,
        topStories,
        currentPageStories: topStories,
        mainFeedTitle: `Community News From ${state}`,
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div id="main-body">
          <ToolBar stateClickHandler={this.stateClickHandler.bind(this)} cityClickHandler={this.cityClickHandler.bind(this)} countyClickHandler={this.countyClickHandler.bind(this)} hoodClickHandler={this.hoodClickHandler.bind(this)} />
          <Stories stories={this.state.currentPageStories} mainFeedTitle={this.state.mainFeedTitle} />
          <div id="placeholder">Top Stories in Bay Area</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
