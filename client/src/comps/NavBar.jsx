import React from 'react';

function NavBar() {
  return (
    <div id="nav-bar">
      <div id="logo">LOGO</div>
      <div className="search">
        <form>
          <input type="text" placeholder="search for inspiring community stories" name="search" />
          <button type="submit">Search</button>
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
