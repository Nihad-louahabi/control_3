import './App.css';
import { BrowserRouter, Router, Routes } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/UserSlice";
import { getTodos } from "./redux/TodoSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <BrowserRouter>
    <Router>
      <div className="App">
        <Acceuil />
      </div>
    </Router>
  </BrowserRouter>
  );
}

export default App;
