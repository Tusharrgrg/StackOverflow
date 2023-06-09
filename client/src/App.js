import { useEffect } from "react";
import "./App.css";
import AllRoutes from "./Routes";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { fetchAllQuestions } from "./actions/question";
import { useDispatch } from "react-redux";
function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllQuestions())
  },[dispatch])

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
