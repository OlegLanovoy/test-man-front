// import React from "react";

import Profile from "./components/profile/Profile";

import "./App.css";
import AuthForm from "./components/auth/AuthForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reminder from "./components/reminder/Reminder";
import MainPage from "./components/main";
import CreatePost from "./components/create-post/CreatePost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
