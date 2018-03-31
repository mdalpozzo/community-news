import React from 'react';
import StoryEntry from './StoryEntry.jsx'

function Stories() {
  return(
    <div id="stories">
      {props.stories.map(story => <StoryEntry story={story} />)}
    </div>
  );
}

export default Stories;
