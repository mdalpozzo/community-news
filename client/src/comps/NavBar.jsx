import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      // <div id="nav-bar">
      //   <img src="images/community-news-logo.png" alt="community-news-logo" />
      //   <div className="search">
      //     <form>
      //       <input type="text" placeholder="search for inspiring community stories" name="search" />
      //       <button
      //         type="submit"
      //         style={{
      //           backgroundImage:
      //             'url(http://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey-md.png)',
      //           backgroundSize: 'cover',
      //         }}
      //       />
      //     </form>
      //   </div>
      //   <div id="title">Community News</div>
      //   <div id="nav-buttons">
      //     <button className="nav-button">Top Stories</button>
      //     <button className="nav-button">Your Stories</button>
      //     <button className="nav-button">Contact</button>
      //     <button className="nav-button">Settings</button>
      //   </div>
      // </div>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Community News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Top Stories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    );
  }
}

export default NavBar;
