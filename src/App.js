import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { NavRoutes } from "./routes/NavRoutes";
import { useAnswers } from "./context/answersContext";

function App() {
  const { answerState } = useAnswers();
  console.log(answerState);
  return (
    <div className="App">
      <Navbar />
      <NavRoutes />
    </div>
  );
}

export default App;
