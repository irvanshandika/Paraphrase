import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPages from "./pages/MainPages";
import BlankPages from "./pages/BlankPages";
import Paraphrase from "./components/Paraphrase";
import Footer from "./components/Footer";

function App() {
  AOS.init();
  return (
    <div>
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
