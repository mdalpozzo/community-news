import React from 'react';

function StoryEntry(props) {
  return (
    <div className="story-entry">
      <img src={props.story.photo_url} alt="user post" />
      <div className="story-teaser">
        <span className="story-title">{props.story.title}</span>
        <span className="story-author">by {props.story.author}</span>
        <span className="story-intro">{props.story.text}</span>
        <span className="upvotes">upvotes: {props.story.upvotes}</span>
        <span className="nominations">nominations: {props.story.nominations}</span>
      </div>
    </div>
  );
}

export default StoryEntry;
