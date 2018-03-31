import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NavBar from './comps/NavBar.jsx';
import Stories from './comps/Stories.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <NavBar />
        <Stories stories={this.state.stories} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
