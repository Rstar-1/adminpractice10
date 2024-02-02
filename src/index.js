import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/assets/scss/Index.scss";
import "../src/assets/scss/Font.scss";
import "../src/assets/scss/Structure.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

reportWebVitals();
