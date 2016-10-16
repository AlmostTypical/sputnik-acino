import React from 'react';

const NavBar = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="nav">
          <img src="./assets/images/logo.gif" className="logo" />
          <div>
            <ul className="lang">
              <li>ENG</li>
              <li>DEU</li>
            </ul>
            <ul className="main-menu">
              <li>ABOUT US</li>
              <li>OUR BUSINESS</li>
              <li>NEWS</li>
              <li>CAREER</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

export default NavBar;