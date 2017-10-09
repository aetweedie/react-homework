import { EventEmitter } from 'events';
import AppDispatcher from '../Dispatcher';

let state = {
  users: []
};

let events = new EventEmitter();

let setState = (newState) => {
  Object.assign(state, newState);
  events.emit('CHANGE');
};

let UserStore = {
  getState() {
    return state;
  },
  addChangeListener(fun) {
    events.addListener('CHANGE', fun);
  }
};

UserStore.dispatchToken = AppDispatcher.register((action) => {
  if (action.type === 'USERS_LOADED') {
    setState({
      users: action.users
    });
  }
});

export default UserStore;
