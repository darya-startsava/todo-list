import { combineReducers, createStore } from 'redux';
import nameReducer from './components/home/reducer';
import taskReducer from './components/taskList/reducer';
import tabsReducer from './components/tabs/reducer'

const store = createStore(combineReducers({ name: nameReducer, tasks: taskReducer, selectedTab:tabsReducer }));

export default store;
