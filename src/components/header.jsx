import React, { Component } from "react";
import { browserHistory } from 'react-router';
export default class Header extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      
      <header id="header" className="container">
        <div className="header">        
          <h2>
            <span className="logo">
              <img src='/src/images/icon-logo.png' />
            </span>
            <a href="#">agency</a>
          </h2>
          <nav>
            <li><a href="#">Tours</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </nav>
        </div>
      </header>
    );
  }
}