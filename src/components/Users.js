import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import UserActionCreators from '../actions/UserActionCreators';

class Users extends Component {

  constructor() {
    super();
    this.state = UserStore.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    UserStore.addChangeListener(this.handleChange);
    UserActionCreators.loadUsers();
  }

  handleChange() {
    this.setState(UserStore.getState());
  }

  handleSubmit(e) {
    let name;
    console.log(this.state.value);
    this.setState({[name]: e.target.value});
    e.preventDefault();
  }

  showUsers() {
    return this.state.users.map((user) => {
      if (user) {
        return <div><li>{user.firstName} {user.lastName} {user.address}</li><button>Delete User</button><button>Update User</button></div>;
      } else {
        return;
      }
    });
  }

  render() {
    return (
      <div>
        <h1>User list</h1>
        <ul>{this.showUsers()}</ul>
        <div>
          <form name='user' onSubmit={this.handleSubmit}>
            <input type='text' name='firstName' value={name.firstName} onChange={this.handleChange} />
            <input type='text' name='lastName' value={user.lastName} onChange={this.handleChange} />
            <input type='text' name='address' value={user.address} onChange={this.handleChange} />
            <input type='submit' value='Add a new user'/>
          </form>
        </div>
      </div>
    );
  }
}

export default Users;
