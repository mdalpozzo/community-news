import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { updateVote, updateNomination } from '../actions/actions';

function StoryEntry(props) {
  const onVoteClick = (e) => {
    const ID = e.target.closest('.story-entry').getAttribute('data-id');
    let voteCount = null;
    if (e.target.alt === 'upvotes') {
      voteCount = e.target.nextSibling.innerHTML;
    } else if (isNaN(e.target.innerHTML) === false) {
      voteCount = e.target.innerHTML;
    } else {
      voteCount = e.target.getElementsByTagName('span').innerHTML;
    }
    props.updateVote(ID, voteCount);
  };

  const onNominationClick = (e) => {
    const ID = e.target.closest('.story-entry').getAttribute('data-id');
    let nomCount = null;
    if (e.target.alt === 'nominations') {
      nomCount = e.target.nextSibling.innerHTML;
    } else if (isNaN(e.target.innerHTML) === false) {
      nomCount = e.target.innerHTML;
    } else {
      nomCount = e.target.getElementByTagName('span').innerHTML;
    }
    props.updateNomination(ID, nomCount);
  };

  return (
    <div className="story-entry" data-id={props.story._id}>
      <img src={props.story.photo_url} alt="user post" />
      <div className="story-teaser">
        <span className="story-title">{props.story.title}</span>
        <span className="story-author">by {props.story.author}</span>
        <span className="story-intro">{props.story.text}</span>
        <div className="ratings">
          <div className="upvotes" onClick={onVoteClick}>
            <img src="rock-on.png" alt="upvotes" />
            <span>{props.story.upvotes}</span>
          </div>
          <div className="nominations" onClick={onNominationClick}>
            <img src="nominate.png" alt="nominations" />
            <span>{props.story.nominations}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => (state.stories);

export default connect(mapStateToProps, { updateVote, updateNomination })(StoryEntry);
