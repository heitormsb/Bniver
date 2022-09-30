import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/index";
import EnigmaFuncao from "./pages/EnigmaFuncao";
import EnigmaCoord from "./pages/EnigmaCoord";
import EnigmaCruz from "./pages/EnigmaCruz";
import Tome from "./pages/Tome";

function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/forma" element={<EnigmaFuncao />} />
        <Route exact path="/coord" element={<EnigmaCoord />} />
        <Route exact path="/tau" element={<EnigmaCruz />} />
      </Routes>
    </Router>
  );
}

export default App;
