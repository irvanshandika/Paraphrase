// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPages from "./pages/MainPages";
import BlankPages from "./pages/BlankPages";
import Paraphrase from "./components/Paraphrase";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="/paraphrase" element={<Paraphrase />} />
        <Route path="*" element={<BlankPages />} />
      </Routes>
    </Router>
  );
}

export default App;
