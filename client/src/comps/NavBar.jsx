import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div id="nav-bar">
        <img src="images/community-news-logo.png" alt="community-news-logo" />
        <div className="search">
          <form>
            <input type="text" placeholder="search for inspiring community stories" name="search" />
            <button
              type="submit"
              style={{
                backgroundImage:
                  'url(http://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey-md.png)',
                backgroundSize: 'cover',
              }}
            />
          </form>
        </div>
        <div id="title">Community News</div>
        <div id="nav-buttons">
          <button className="nav-button">Top Stories</button>
          <button className="nav-button">Your Stories</button>
          <button className="nav-button">Contact</button>
          <button className="nav-button">Settings</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
