import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
import axios from 'axios';

import NavBar from './comps/NavBar.jsx';
import Stories from './comps/Stories.jsx';
import ToolBar from './comps/ToolBar.jsx';
import * as actions from './actions/actions';
import store from './store/store';

class App extends React.Component {
  componentWillMount() {
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
            hoodClickHandler={this.props.fetchStories}
          />
          <Stories />
          <div id="placeholder">Top Stories in Bay Area</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (state.stories);

const mapActionsToProps = (dispatch) => {
  bindActionCreators({
    fetchStories: actions.fetchStories,
  }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(App);
// connect(null, actions.fetchStories)(StoriesTop);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
