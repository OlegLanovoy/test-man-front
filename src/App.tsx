// import React from "react";

import Profile from "./components/auth/author/Profile";

import "./App.css";
import AuthForm from "./components/auth/AuthForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reminder from "./components/reminder/Reminder";
import MainPage from "./components/main/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
