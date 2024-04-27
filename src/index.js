import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./Components/store/store";
import { Provider } from "react-redux";
import TodoApp from "./Components/TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);
