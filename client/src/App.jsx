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

  upvoteHandler(e) {
    if (e.target.alt === 'upvotes') {
      e.target.nextSibling.innerHTML = Number(e.target.nextSibling.innerHTML) + 1;
    } else if (isNaN(e.target.innerHTML) === false) {
      e.target.innerHTML = Number(e.target.innerHTML) + 1;
    } else {
      e.target.getElementByTagName('span').innerHTML = Number(e.target.getElementByTagName('span').innerHTML) + 1;
    }
  }

  nominationHandler(e) {
    if (e.target.alt === 'nominations') {
      e.target.nextSibling.innerHTML = Number(e.target.nextSibling.innerHTML) + 1;
    } else if (isNaN(e.target.innerHTML) === false) {
      e.target.innerHTML = Number(e.target.innerHTML) + 1;
    } else {
      e.target.getElementByTagName('span').innerHTML = Number(e.target.getElementByTagName('span').innerHTML) + 1;
    }
  }

  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div id="main-body">
          <ToolBar
            stateClickHandler={this.stateClickHandler.bind(this)}
            cityClickHandler={this.cityClickHandler.bind(this)}
            countyClickHandler={this.countyClickHandler.bind(this)}
            hoodClickHandler={this.hoodClickHandler.bind(this)}
          />
          <Stories
            stories={this.state.currentPageStories}
            mainFeedTitle={this.state.mainFeedTitle}
            upvoteHandler={this.upvoteHandler.bind(this)}
            nominationHandler={this.nominationHandler.bind(this)}
          />
          <div id="placeholder">Top Stories in Bay Area</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
