import React from 'react';

function NavBar() {
  return (
    <div id="nav-bar">
      <img src="community-news-logo.png" alt="community-news-logo" />
      <div className="search">
        <form>
          <button type="submit" style={{ backgroundImage: 'url(http://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey-md.png)', backgroundSize: 'cover' }} />
          <input type="text" placeholder="search for inspiring community stories" name="search" />
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

export default NavBar;
