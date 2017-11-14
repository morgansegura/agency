import React, { Component } from "react";
import { browserHistory } from 'react-router';
export default class Header extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="header" className="container">
        <header>
          <h2><a href="#">Mountain Travel</a></h2>
          <nav>
            <li><a href="#">Tours</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </nav>
        </header>
      </div>
    );
  }
}