import UserServiceActions from '../actions/UserServiceActions';

let DataFetcher = {
  loadUsers() {
    var users = [
    {
      firstName: 'Alan',
      lastName: 'Tweedie',
      address: '2870 Madison Ln.'
    },
    {
      firstName: 'Bill',
      lastName: 'Jones',
      address: '123 Main St.'
    }
  ];
    UserServiceActions.loadUsers(users);
  }
};

export default DataFetcher;
