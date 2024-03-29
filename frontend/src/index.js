import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store.js";
import { Provider } from "react-redux";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
// import { options } from "../../backend/app.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);
