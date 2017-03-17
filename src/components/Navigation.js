import React, { Component } from 'react';
import { IndexLink } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand">Movie Boy</IndexLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
