import { createContext, useContext, useState } from "react";

const AnswersContext = createContext();

const useAnswers = () => useContext(AnswersContext);

const AnswersProvider = ({ children }) => {
  const [answerState, setAnswer] = useState({});
  return (
    <AnswersContext.Provider value={{ answerState, setAnswer }}>
      {children}
    </AnswersContext.Provider>
  );
};

export { AnswersProvider, useAnswers };
