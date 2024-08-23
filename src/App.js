import React, { useEffect, useState } from "react";
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
import Profile from "./pages/Profile";
import NotFound from "./pages/404";

function App() {
  const userId = localStorage.getItem("userId");
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    if (userId != null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, [userId]);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/course-details/:courseId" element={<CourseDetails />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/course-player/:courseId"
            element={isLogin ? <CoursePlayer /> : <Login />}
          />
          <Route
            path="/mycourse"
            element={isLogin ? <MyCourse /> : <Login />}
          />
          <Route path="/profile" element={isLogin ? <Profile /> : <Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
