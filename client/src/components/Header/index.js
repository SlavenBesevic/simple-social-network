import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title"><Link to="/">Simple Social Network</Link></h1>
      </header>
    );
  }
}

export default Header;
