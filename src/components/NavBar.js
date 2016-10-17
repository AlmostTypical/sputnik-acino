import React from 'react';

const NavBar = React.createClass({
  render: function () {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img alt="Acino International" src="./assets/images/logo.gif" />
          </a>
          <div className="navbar-text navbar-right">
            <ul className="lang-bar">
              <li><a className="navbar-link" href="#">ENG</a></li>
              <li><a className="navbar-link" href="#">DEU</a></li>
            </ul>
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#head-navbar">
              <span className="icon-bar"> </span>
              <span className="icon-bar"> </span>
              <span className="icon-bar"> </span>
            </button>
            <div className="collapse navbar-collapse" id="head-navbar">
              <ul className="mainmenu-bar">
                <li><a className="navbar-link" href="#">ABOUT US</a></li>
                <li><a className="navbar-link" href="#">OUR BUSINESS</a></li>
                <li><a className="navbar-link" href="#">NEWS</a></li>
                <li><a className="navbar-link" href="#">CAREER</a></li>
                <li><a className="navbar-link" href="#">CONTACT US</a></li>
                <span><a className="fa fa-search"> </a></span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default NavBar;