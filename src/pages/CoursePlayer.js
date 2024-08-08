import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import TabsComponent from "../components/TabsComponent";
import CourseContent from "../components/CourseContent";
import "./CoursePlayer.css";

function CoursePlayer() {
  return (
    <div className="course-player">
      <div className="video-section">
        <VideoPlayer />
        <TabsComponent />
      </div>
      <CourseContent />
    </div>
  );
}

export default CoursePlayer;
