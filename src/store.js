import { combineReducers, createStore } from 'redux';
import nameReducer from './components/home/reducer';
import taskReducer from './components/todoList/reducer';

const store = createStore(combineReducers({ name: nameReducer, tasks: taskReducer }));

export default store;
