import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QuestionsProvider } from "./context/QuestionsContext/QuestionsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <QuestionsProvider>
        <App />
      </QuestionsProvider>
    </Router>
  </React.StrictMode>
);
