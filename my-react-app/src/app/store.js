// src/app/store.js
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; //
import rootReducer from "./reducers";

// allows you to monitor and debug state
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Initialize Redux store, which helps the application manage state.
// Apply middleware like redux-thunk to support asynchronous actions
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
