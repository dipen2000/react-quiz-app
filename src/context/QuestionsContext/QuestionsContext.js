import { createContext, useContext, useState } from "react";
import { questionsData } from "../../data/questionsData";

const QuestionsContext = createContext();

const useQuestions = () => useContext(QuestionsContext);

const QuestionsProvider = ({ children }) => {
  const [questionsState, setquestions] = useState(questionsData);
  return (
    <QuestionsContext.Provider value={{ questionsState }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export { QuestionsProvider, useQuestions };
