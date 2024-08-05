import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <div className="course-info">
        <h2>{course.title}</h2>
        <p className="course-instructor">Taught by Jessica Jackley</p>
        <Link to="/course-details">View Course</Link>
      </div>
    </div>
  );
};

export default CourseCard;
