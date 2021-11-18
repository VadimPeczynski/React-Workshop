import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import React, { Suspense } from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import configureAppStore from "./redux/configureAppStore";
import { Provider } from "react-redux";
import "./i18n";

const store = configureAppStore();
render(
  <Suspense fallback="...is loading">
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
