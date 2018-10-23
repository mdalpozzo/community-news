import React, { Component } from 'react';

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
          <a className="navbar-brand" href="landing.html">
            Community News
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="profiles.html">
                  {' '}
                  Developers
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Top Stories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
