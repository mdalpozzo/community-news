import React from 'react';

function StoryEntry(props) {
  return (
    <div className="story-entry">
      <img src={props.story.photo_url} alt="user post" />
      <div className="story-teaser">
        <span className="story-title">{props.story.title}</span>
        <span className="story-author">by {props.story.author}</span>
        <span className="story-intro">{props.story.text}</span>
        <div className="ratings">
          <div className="upvotes" onClick={props.upvoteHandler}>
            <img src="rock-on.png" alt="upvotes" />
            <span>{props.story.upvotes}</span>
          </div>
          <div className="nominations" onClick={props.nominationHandler}>
            <img src="nominate.png" alt="nominations" />
            <span>{props.story.nominations}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryEntry;
