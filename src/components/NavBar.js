import React from 'react';

const NavBar = React.createClass({
  render: function () {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img alt="Acino International" src="./assets/images/logo.gif" />
            </a>
          </div>
          <div className="navbar-text navbar-right">
            <ul className="lang-bar">
              <a className="navbar-link" href="#">ENG</a>
              <a className="navbar-link" href="#">DEU</a>
            </ul>
            <ul className="mainmenu-bar">
              <a className="navbar-link" href="#">ABOUT US</a>
              <a className="navbar-link" href="#">OUR BUSINESS</a>
              <a className="navbar-link" href="#">NEWS</a>
              <a className="navbar-link" href="#">CAREER</a>
              <a className="navbar-link" href="#">CONTACT US</a>
              <a className="fa fa-search"></a>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

export default NavBar;