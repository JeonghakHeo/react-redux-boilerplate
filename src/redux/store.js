import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { usersReducer } from './reducers/usersReducer';
import { productsReducer } from './reducers/productsReducer';

const middleware = [thunk]

const reducer = combineReducers({
  users: usersReducer,
  products: productsReducer
})

const store = configureStore(
  {reducer},
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

export default store