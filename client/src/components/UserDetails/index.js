import React, { Component } from 'react';

class UserDetails extends Component {

  renderUser() {
    const user = this.props.user;
    document.title = `${user.firstName} ${user.surname}`;
    const friends = this.props.friends.directFriends;
    const suggested = this.props.friends.suggestedFriends;
    const fof = this.props.friends.friendsOfFriends;
    return (
      <div>
        <h2>Welcome {user.firstName}</h2>
        <h3>Info</h3>
        <ul>
          <li>First name: {user.firstName}</li>
          <li>Last name: {user.surname}</li>
          <li>Age: {user.age}</li>
          <li>Gender: {user.gender}</li>
        </ul>
        <h3>Friends</h3>
        <ul>
          {this.renderFriends(friends)}
        </ul>
        <h3>Suggested Friends</h3>
        <ul>
          {this.renderFriends(suggested)}
        </ul>
        <h3>People you may know</h3>
        <ul>
          {this.renderFriends(fof)}
        </ul>
      </div>
    );
  }

  renderFriends(friends) {
    return friends.map((friend) => {
      return <li key={friend.id}>{friend.firstName} {friend.surname}</li>
    });
  }

  render() {
    return (
      <div>
        {this.renderUser()}
      </div>
    );
  }
}

export default UserDetails;
