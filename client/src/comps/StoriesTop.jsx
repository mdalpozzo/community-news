import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
import axios from 'axios';

import NavBar from './NavBar.jsx';
import Stories from './Stories.jsx';
import ToolBar from './ToolBar.jsx';
import * as actions from '../actions/actions';
import store from '../store/store';

class StoriesTop extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     stories: [],
  //     filterBy: {
  //       topStories: {
  //         isFetching: null,
  //         didInvalidate: null,
  //         items: [],
  //       },
  //     },
  //     currentPageStories: [],
  //     geoScope: '',
  //   };
  // }

  // componentWillMount() {
  //   // console.log('HELKJD', this.props);
  //   const { location: { pathname } } = window;
  //   const zipcode = pathname.slice(0, -1).split('/').pop();
  //   // $.get('http://localhost:8000/zipcode', { zipcode }, (stories) => {
  //   //   const filterBy.topStories.items = stories.slice(0, 5);
  //   //   this.setState({
  //   //     stories,
  //   //     filterBy.topStories.items,
  //   //     currentPageStories: filterBy.topStories.items,
  //   //     geoScope: zipcode,
  //   //   });
  //   // });
  //   actions.fetchStories(zipcode);
  // }

  componentWillMount() {
    console.log('props', this.props.fetchStories);
    this.props.fetchStories('94121');
    // axios.get('http://localhost:8000/zipcode?ID=94121')
    //   .then(res => console.log(res));
  }

  hoodClickHandler(e) {
    const zipcode = e.target.id || 94121;
    $.get('http://localhost:8000/zipcode', { zipcode }, (stories) => {
      this.setState({
        stories,
        filterBy: {
          topStories: {
            items: stories.slice(0, 5),
          },
        },
        currentPageStories: stories.slice(0, 5),
        geoScope: zipcode,
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
            // stateClickHandler={this.stateClickHandler.bind(this)}
            // cityClickHandler={this.cityClickHandler.bind(this)}
            // countyClickHandler={this.countyClickHandler.bind(this)}
            // hoodClickHandler={this.hoodClickHandler.bind(this)}
            hoodClickHandler={this.props.fetchStories}
          />
          {/* <Stories
            stories={this.state.currentPageStories}
            geoScope={this.state.geoScope}
            upvoteHandler={this.upvoteHandler.bind(this)}
            nominationHandler={this.nominationHandler.bind(this)}
          /> */}
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

export default connect(mapStateToProps, mapActionsToProps)(StoriesTop);
// connect(null, actions.fetchStories)(StoriesTop);

ReactDOM.render(
  <Provider store={store}>
    <StoriesTop />
  </Provider>,
  document.getElementById('App'),
);
