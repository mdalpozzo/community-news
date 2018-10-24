import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
import Register from './comps/auth/Register.jsx';
import Login from './comps/auth/Login.jsx';

import * as actions from './actions/actions';
import store from './store/store';

class App extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          {/* <Route path="/" component={Landing} /> */}
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          <Footer />
        </div>
      </Router>
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
