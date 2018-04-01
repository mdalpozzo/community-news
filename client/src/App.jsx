import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NavBar from './comps/NavBar.jsx';
import Stories from './comps/Stories.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    };
  }

  componentWillMount() {
    const { location: { pathname } } = window;
    const zipcode = Number(pathname.slice(0, -1).split('/').pop());
    $.get('http://localhost:8000/zipcode', { zipcode }, (stories) => {
      this.setState({
        stories,
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
          <Stories stories={this.state.stories} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
