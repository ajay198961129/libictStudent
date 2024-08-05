import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
import About from "./pages/About";
import CourseDetails from "./pages/CourseDetails";
import CoursePlayer from "./pages/CoursePlayer";
import MyCourse from "./pages/MyCourse";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/course-player" element={<CoursePlayer />} />
          <Route path="/mycourse" element={<MyCourse />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
