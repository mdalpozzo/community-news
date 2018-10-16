import React from 'react';

function StoryEditor(props) {
  return (
    <div id="StoryEditor">
      <form>
        <label htmlFor="storyTitle">
          Story Title:
          <input id="storyTitle" name="username" type="text" />
        </label>
        <label htmlFor="body">
          Body:
          <input id="body" name="username" type="text" />
        </label>
      </form>
    </div>
  );
}
