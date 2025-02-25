import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Atualização para React Router v6
import './App.css';
import Linktree from "./pages/Linktree/Linktree";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/linktree" element={<Linktree />} />
      </Routes>
    </Router>
  );
}

export default App;
