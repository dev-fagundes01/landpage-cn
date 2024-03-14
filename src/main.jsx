import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import GlobalStyles from "../styles/globalStyles.js";
import "../styles/globalStyles.js";
import "../styles/index.css";
import "../styles/app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
