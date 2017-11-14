import React, { Component } from "react";
import { browserHistory } from 'react-router';
export default class Header extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="header">
        This is the Header.
      </div>
    );
  }
}