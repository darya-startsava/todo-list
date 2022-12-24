import { combineReducers, createStore } from "redux";
import enterNameReducer from './components/home/reducer';

const store = createStore(combineReducers({ name: enterNameReducer }));

export default store;