import React, { Component } from 'react';
import Login from './components/Login';
export default class Page extends Component {
  render() {
    return (
      <div>
          <Login onLoginSuccess={this.props.onLoginSuccess}/>
      </div>
    )
  }
}
