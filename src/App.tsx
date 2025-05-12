// import React from "react";
import { User } from "./components/User";
import Profile from "./components/auth/author/Profile";

import "./App.css";
import AuthForm from "./components/auth/AuthForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
