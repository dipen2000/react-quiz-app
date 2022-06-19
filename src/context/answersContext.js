import { createContext, useContext, useState } from "react";

const AnswersContext = createContext();

const useAnswers = () => useContext(AnswersContext);

const AnswersProvider = ({ children }) => {
  const [answerState, setAnswer] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  return (
    <AnswersContext.Provider value={{ answerState, setAnswer }}>
      {children}
    </AnswersContext.Provider>
  );
};

export { AnswersProvider, useAnswers };
