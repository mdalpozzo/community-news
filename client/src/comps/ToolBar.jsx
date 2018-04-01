import React from 'react';

function ToolBar(props) {
  return (
    <div id="toolbar">
      <div className="new-story">
        <h1>Write an Article</h1>
        <span>
          Everyone's voice needs to be heard to build a strong community
          and every member has a duty to contribute their ideas!
        </span>
      </div>
      <div className="toolbar-button" onClick={props.hoodClickHandler}>
        <span>Your Hood</span>
      </div>
      <div className="toolbar-button" onClick={props.cityClickHandler}>
        <span>Your City</span>
      </div>
      <div className="toolbar-button" onClick={props.countyClickHandler}>
        <span>Your County</span>
      </div>
      <div className="toolbar-button" onClick={props.stateClickHandler}>
        <span>Your State</span>
      </div>
    </div>
  );
}

export default ToolBar;
