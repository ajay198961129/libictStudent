import React from "react";
import "./MyCourse.css";
import { Link } from "react-router-dom";

function MyCourse() {
  return (
    <div className="main-content">
      <h2>My Courses</h2>
      <div className="mycourse-wrapper">
        <img
          src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg"
          alt=""
        />
        <div className="mycourse-content">
          <h3>Branding 101</h3>
          <div className="mycourse-footer">
            <div className="mycourse-footer-content">
              <p>Amos Sando</p>
              <p>Website Development</p>
            </div>
            <div className="mycourse-action">
              <Link to="/course-player">Resume Course</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCourse;
