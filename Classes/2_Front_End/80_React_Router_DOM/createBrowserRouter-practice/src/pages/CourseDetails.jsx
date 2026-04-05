import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const params = useParams();

  return <div>{params.courseId} Course Details</div>;
};

export default CourseDetails;
