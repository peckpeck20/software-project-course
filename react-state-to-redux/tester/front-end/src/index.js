import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { addCandidate } from "./actions/actionTypes";
import { allReducers } from "./reducers/reducers";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// REDUX STORE STATE
console.log("Redux store");
console.log(store.getState());
console.log("====================================");

//  store.dispatch(addCandidate({
//      name : 'tester',
//      age : 12
//  }))
store.dispatch(addCandidate("jose"));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
