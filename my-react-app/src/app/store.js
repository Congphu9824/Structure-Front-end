// src/app/store.js
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // 👈 Fix lỗi ở đây
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
