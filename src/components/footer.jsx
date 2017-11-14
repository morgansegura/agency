import React, { Component } from "react";
import { browserHistory } from 'react-router';
export default class Footer extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="footer">
        <footer>
          <h1>This is the Footer.</h1>
        </footer>
      </div>
    );
  }
}