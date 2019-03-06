import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStories, updateVote } from '../actions/actions';
import StoryEntry from './StoryEntry.jsx';
import SmallStoryEntry from './SmallStoryEntry.jsx';

class Landing extends Component {
  componentWillMount() {
    this.props.fetchStories();
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.didInvalidate === true) {
      this.props.fetchStories();
    }
  }

  render() {
    if (this.props.stories.filterBy.topStories.items.length === 0) return null;

    return (
      <div className="landing">
        <img
          className="landing-background"
          src="images/neighborhood.jpeg"
          alt="neighborhood houses"
        />
        <div className="dark-overlay landing-inner text-light">
          <div className="headline col-md-12 text-center">
            <h1 className="display-3">Community News</h1>
            <p className="lead"> Stories from your neighborhood </p>
          </div>
          <br />
          <hr className="separator" />
          <div className="main-stories-container">
            <div className="main-stories-1">
              <StoryEntry story={this.props.stories.filterBy.topStories.items[0]} />
            </div>
            <div className="secondary-stories">
              <div className="main-stories-small">
                <SmallStoryEntry story={this.props.stories.filterBy.topStories.items[1]} />
              </div>
              <div className="main-stories-small">
                <SmallStoryEntry story={this.props.stories.filterBy.topStories.items[2]} />
              </div>
              <div className="main-stories-small">
                <SmallStoryEntry story={this.props.stories.filterBy.topStories.items[3]} />
              </div>
            </div>
          </div>
          <br />
          <br />
          <hr className="separator" />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
  fetchStories: PropTypes.func.isRequired,
  stories: PropTypes.shape({
    filterBy: PropTypes.shape({
      topStories: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
          author: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
          county: PropTypes.string.isRequired,
          _id: PropTypes.string.isRequired,
          nominations: PropTypes.number.isRequired,
          photo_url: PropTypes.string.isRequired,
          state: PropTypes.string.isRequired,
          tag: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          upvotes: PropTypes.number.isRequired,
          zipcode: PropTypes.number.isRequired,
        })),
      }),
    }).isRequired,
  }).isRequired,
  // errors: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchStories,
      updateVote,
    },
    dispatch,
  );

const mapStateToProps = state => ({
  auth: state.auth,
  stories: state.stories,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);
