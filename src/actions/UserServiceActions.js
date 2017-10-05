import AppDispatcher from '../Dispatcher';

let UserServiceActions = {
  loadUsers(users) {
    AppDispatcher.dispatch({
      type: 'USERS_LOADED',
      users: users
    });
  }
};

export default UserServiceActions;
