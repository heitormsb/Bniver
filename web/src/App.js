import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/index";
import Tome from "./pages/Tome";

function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tome" element={<Tome />} />
      </Routes>
    </Router>
  );
}

export default App;
