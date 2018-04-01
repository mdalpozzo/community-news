import React from 'react';
import StoryEntry from './StoryEntry.jsx'

function Stories(props) {
  return (
    <div id="stories">
      <h1>{props.mainFeedTitle}</h1>
      {props.stories.map((story, i) => <StoryEntry story={story} key={i} />)}
    </div>
  );
}

export default Stories;
