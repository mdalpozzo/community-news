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
import TopStoriesBar from './comps/TopStoriesBar.jsx';
import Footer from './comps/Footer.jsx';
import Landing from './comps/Landing.jsx';

import * as actions from './actions/actions';
import store from './store/store';

class App extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <div>
        <NavBar />
        <Landing />
        {/* <ToolBar />
        <Stories />
        <TopStoriesBar /> */}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => state.stories;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchStories: actions.fetchStories,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
