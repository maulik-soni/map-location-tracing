import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import mapStore from './mapStore';

const middlewares = [thunk];

const store = createStore(
	combineReducers({
    mapStore
  }),
	compose(applyMiddleware(...middlewares))
)

export default store;