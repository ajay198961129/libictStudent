import React from "react";
import "./CourseDetails.css";

function CourseDetails() {
  return (
    <div className="course-details-wrapper">
      <div className="course-details-content">
        <div className="course-title-wrapper">
          <div className="course-title-left">
            <h1>Planning for Monitoring and Evaluation</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias placeat totam possimus voluptate dignissimos,
              consequuntur sit exercitationem nobis beatae iste. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Hic eaque omnis
              aperiam, praesentium itaque quas ipsum porro veritatis in
              consequatur.
            </p>
            <a href="#">Enroll Now</a>
          </div>
          <img
            src="https://courses.philanthropyu.org/asset-v1:FHI360+MonitoringEvaluation_101+1_1.0_20180416_20180527+type@asset+block@tamarcus-brown-131428__1__copy.jpg"
            alt=""
          />
        </div>
        <div className="course-details-body">
          <div className="course-details-body-left">
            <h2>Description</h2>
            <p>
              What does your organization want to accomplish? Whether your goal
              is to combat deforestation or to provide sustainable livelihoods,
              your team needs to know which financial resources are available to
              them. In other words, your team needs an accurate and effective
              operating budget.
            </p>
            <h3>Course Content</h3>
            <div className="course-content-wraper">
              <div className="course-content-item">
                <h3>Chapter I</h3>
                <ol>
                  <li> Introduction to Budgeting</li>
                  <li>Types of Budgets</li>
                </ol>
              </div>
              <div className="course-content-item">
                <h3>Chapter II</h3>
                <ol>
                  <li>Budgeting Methods</li>
                </ol>
              </div>
              <div className="course-content-item">
                <h3>Chapter III</h3>
                <ol>
                  <li>Budgeting Processes</li>
                </ol>
              </div>
            </div>
            <h2>Who Should Take This Course?</h2>
            <p>
              This course is designed for a wide-range of professionals working
              in the development, nonprofit, social enterprise, or humanitarian
              sectors. Project managers, department managers, or anyone involved
              with the financial management of their organization will find this
              course helpful.
            </p>
            <h2>Certification</h2>
            <p>
              The University is a non-degree, diploma or credit granting
              initiative. Philanthropy U, Inc. is the concept developer and
              sponsor of the initiative. Learners are not entitled to earn
              college or other academic credit.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
