import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {
  QuestionsProvider,
  CategoryProvider,
  AnswersProvider,
  AuthProvider,
} from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <QuestionsProvider>
          <CategoryProvider>
            <AnswersProvider>
              <App />
            </AnswersProvider>
          </CategoryProvider>
        </QuestionsProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
