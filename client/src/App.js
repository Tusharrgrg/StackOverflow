import "./App.css";
import AllRoutes from "./Routes";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AllRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
