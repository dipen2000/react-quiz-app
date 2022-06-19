import { createContext, useContext, useState } from "react";

const AnswersContext = createContext();

const useAnswers = () => useContext(AnswersContext);

const initialState = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
};

const AnswersProvider = ({ children }) => {
  const [answerState, setAnswer] = useState(
    JSON.parse(sessionStorage.getItem("answers")) || initialState
  );
  return (
    <AnswersContext.Provider value={{ answerState, setAnswer }}>
      {children}
    </AnswersContext.Provider>
  );
};

export { AnswersProvider, useAnswers };
