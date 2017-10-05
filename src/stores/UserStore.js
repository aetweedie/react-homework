import { EventEmitter } from 'events';
import AppDispatcher from '../Dispatcher';

let state = {
  loaded: false,
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
  console.warn(action.type + ' UserStore.js');
  if (action.type === 'USERS_LOADED') {
    setState({
      users: action.users
    });
  }
});

export default UserStore;
