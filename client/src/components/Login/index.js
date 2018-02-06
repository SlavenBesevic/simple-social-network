import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const regex = /^[0-9]+$/;
    const userId = document.getElementById('userId').value;

    // NOVO
    if (userId === "") {
      document.getElementById('errorMassage').innerHTML = "Please enter your ID!";
      return;
    }
    if (!regex.test(userId)) {
      document.getElementById('errorMassage').innerHTML = "You've entered the wrong ID! ID is integer.";
      return;
    }
    this.props.history.push(`/${userId}`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" id="userId" placeholder="Enter user ID" />
          <button type="submit">Login</button>
        </form>
        <h4 id="errorMassage"></h4>
      </div>
    );
  }
}

export default withRouter(Login);
