import React, { Component } from "react";
import { browserHistory } from 'react-router';
export default class Footer extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="container">
          <h1>This is the Footer.</h1>
        </div>
      </footer>
    );
  }
}