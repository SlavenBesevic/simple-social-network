import React, { Component } from 'react';

import Login from '../Login';

class Error extends Component {
  render() {
    return (
      <div>
        <Login />
        <h3>User not found!</h3>
      </div>
    );
  }
}

export default Error;
