import React from "react";
import "./PopularCourses.css";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Branding 101",
    date: "Jul 1, 2020",
    image:
      "https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722124800&semt=sph",
  },
  {
    title: "Developing an Operating Budget",
    date: "Jul 18, 2020",
    image:
      "https://www.voicesofyouth.org/sites/voy/files/images/2022-03/educ.jpg",
  },
  {
    title: "Advocacy",
    date: "Aug 27, 2020",
    image:
      "https://academicworld.co.in/wp-content/uploads/2022/07/Aws-Education-scaled-1.jpg",
  },
  {
    title: "Creating a Theory of Change",
    date: "Dec 23, 2019",
    image:
      "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg",
  },
  {
    title: "Advocacy",
    date: "Aug 27, 2020",
    image:
      "https://academicworld.co.in/wp-content/uploads/2022/07/Aws-Education-scaled-1.jpg",
  },
  {
    title: "Developing an Operating Budget",
    date: "Jul 18, 2020",
    image:
      "https://www.voicesofyouth.org/sites/voy/files/images/2022-03/educ.jpg",
  },
  {
    title: "Advocacy",
    date: "Aug 27, 2020",
    image:
      "https://academicworld.co.in/wp-content/uploads/2022/07/Aws-Education-scaled-1.jpg",
  },
  {
    title: "Creating a Theory of Change",
    date: "Dec 23, 2019",
    image:
      "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg",
  },
];

const PopularCourses = () => (
  <div className="course-wrapper">
    <h1>Popular Courses</h1>
    <div className="courses-grid">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
    <div className="course-footer">
      <a href="#">Shaw All Courses</a>
    </div>
  </div>
);

export default PopularCourses;
