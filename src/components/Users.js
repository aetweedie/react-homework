import React, { Component } from 'react';
import UserStore from '../stores/UserStore';
import UserActionCreators from '../actions/UserActionCreators';

class Users extends Component {

  constructor() {
    super();
    this.state = UserStore.getState();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    UserStore.addChangeListener(this.handleChange);
    UserActionCreators.loadUsers();
  }

  showUsers() {
    return this.state.users.map((users) => {
      if (users) {
        return (<li key={users.firstName + users.lastName}>{users.firstName} {users.lastName} {users.address}<button onClick={this.handleDelete()}>Delete User</button><button onClick={this.updateData()}>Update User</button></li>);
      } else {
        return;
      }
    });
  }

  handleChange(e) {
    if (e) {
        e.preventDefault();
        let users = this.state.users;
        let name = e.target.name;
        let value = e.target.value;

        this.state.newUser[name] = value;
    }
  }

  updateData(users) {
    this.state.users.splice(users, 1);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newUser.firstName && this.state.newUser.lastName && this.state.newUser.address) {
      let users = this.state.users;
      users.push(this.state.newUser);
      this.setState({
        users: users,
        newUser: {},
      });
    }
  }

  handleDelete(users) {
    this.updateData(users);
  }

  render() {
    return (
      <div>
        <div className="page-content">
          <div className="header">
            <h1>List of Users</h1>
          </div>
          <ul>{this.showUsers()}</ul>
          <div>
            <form name='user' onSubmit={this.handleSubmit} className="input-box">
              <input type='text' name='firstName' value={this.state.users["firstName"]} onChange={this.handleChange.bind(this)} placeholder="First Name"/>
              <input type='text' name='lastName' value={this.state.users["lastName"]} onChange={this.handleChange.bind(this)} placeholder="Last Name"/>
              <input type='text' name='address' value={this.state.users["address"]} onChange={this.handleChange.bind(this)} placeholder="Address"/>
              <input type='submit' value='Add a new user'/>
            </form>
          </div>
      </div>
        <footer>Written by Alan Tweedie   </footer>
      </div>
    );
  }
}

export default Users;
