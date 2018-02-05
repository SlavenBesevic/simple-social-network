import React, { Component } from 'react';
import axios from 'axios';

import Error from '../Error';
import UserDetails from '../UserDetails';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: 0
    }

    this.fetchUser = this.fetchUser.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  componentWillMount() {
    this.fetchUser(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchUser(nextProps);
  }

  renderPage() {
    if (this.state.response === 200) {
      return this.renderUser();
    }
    if (this.state.response === 404) {
      return this.renderError();
    }
    return (
      <div>Loading user...</div>
    );
  }

  renderError() {
    return (
      <Error />
    );
  }

  renderUser() {
    return (
      <UserDetails user={this.state.user} friends={this.state.friends} />
    );
  }

  async fetchUser(props) {
    try {
      const userId = props.match.params.id;
      const user = await axios.get(`http://localhost:5000/ssn-api/users/${userId}`);
      const friends = await axios.get(`http://localhost:5000/ssn-api/users/${userId}/friends`);
      this.setState({
        response: 200,
        user: user.data.user,
        friends: friends.data.allFriends
      });
    }
    catch(err) {
      if (err.response.status === 404) {
        this.setState({
          response: 404
        });
      }
    }
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}

export default User;
