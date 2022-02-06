import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./store/reducers/reducer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger"

const logAction = store => {
  return next => {
    return action => {
      const result =next(action);
      console.log(`Caught in the middleware ${JSON.stringify(result)}`);
      return result
    };
  };
  };


  
  
// const store = createStore(reducer, applyMiddleware(thunk));
const store = createStore(reducer, applyMiddleware(thunk,logger,logAction));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);






// const store = createStore(reducers,applyMiddleware(logAction));







