import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { NavRoutes } from "./routes/NavRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavRoutes />
    </div>
  );
}

export default App;
