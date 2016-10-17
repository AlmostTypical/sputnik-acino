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
            <div className="mainmenu-bar">
              <a className="fa fa-search pull-right"> </a>
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#headnav">
                <span className="icon-bar"> </span>
                <span className="icon-bar"> </span>
                <span className="icon-bar"> </span>
              </button>
              <div className="collapse navbar-collapse" id="headnav">
                <ul className="mainmenu-text">
                  <li><a className="navbar-link" href="#">ABOUT US</a></li>
                  <li><a className="navbar-link" href="#">OUR BUSINESS</a></li>
                  <li><a className="navbar-link" href="#">NEWS</a></li>
                  <li><a className="navbar-link" href="#">CAREER</a></li>
                  <li><a className="navbar-link" href="#">CONTACT US</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default NavBar;