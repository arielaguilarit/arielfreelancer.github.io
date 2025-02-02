import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalCss from "./global.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalCss />
    <App />
  </React.StrictMode>
);
