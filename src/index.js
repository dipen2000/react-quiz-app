import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {
  QuestionsProvider,
  CategoryProvider,
  AnswersProvider,
} from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <QuestionsProvider>
        <CategoryProvider>
          <AnswersProvider>
            <App />
          </AnswersProvider>
        </CategoryProvider>
      </QuestionsProvider>
    </Router>
  </React.StrictMode>
);
