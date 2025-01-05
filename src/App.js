import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ELibrary from "./pages/ELibrary";
import LeadPastor from "./pages/LeadPastor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/library" element={<ELibrary />} />
        <Route path="/pastor" element={<LeadPastor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
