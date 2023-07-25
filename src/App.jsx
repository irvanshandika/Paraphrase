// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPages from "./pages/MainPages";
import BlankPages from "./pages/BlankPages";
import Paraphrase from "./components/Paraphrase";
import NavigasiBar from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavigasiBar />
      <Router>
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/paraphrase" element={<Paraphrase />} />
          <Route path="*" element={<BlankPages />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
