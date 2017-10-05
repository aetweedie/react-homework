import AppDispatcher from '../Dispatcher';
import DataFetcher from '../utils/DataFetcher';

let UserActionCreators = {
  loadUsers() {
    AppDispatcher.dispatch({type: 'SHOW_USERS'});
    DataFetcher.loadUsers();
  }
};

export default UserActionCreators;
