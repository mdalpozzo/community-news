import React from 'react';
import StoryEntry from './StoryEntry.jsx'

function Stories(props) {
  return (
    <div id="stories">
      {props.stories.map((story, i) => <StoryEntry story={story} key={i} />)}
    </div>
  );
}

export default Stories;
