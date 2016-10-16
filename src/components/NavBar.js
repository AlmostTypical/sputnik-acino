import React from 'react';

const NavBar = React.createClass({
  render: function () {
    return (
      <div>
        <span>
          <img src="./assets/images/logo.gif" />
          <ul className="nav lang">
            <li>ENG</li>
            <li>DEU</li>
          </ul>
          <ul className="nav list">
            <li>ABOUT US</li>
            <li>OUR BUSINESS</li>
            <li>NEWS</li>
            <li>CAREER</li>
            <li>CONTACT US</li>
          </ul>
        </span>
      </div>
    )
  }
});

export default NavBar;