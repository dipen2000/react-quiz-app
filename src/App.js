import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { NavRoutes } from "./routes/NavRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavRoutes />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
