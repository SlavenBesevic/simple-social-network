import React, { Component } from 'react';

import Login from '../Login';

class Error extends Component {
  render() {
    return (
      <div>
        <Login />
        <h4 id="errorMassage">User not found!</h4>
      </div>
    );
  }
}

export default Error;
