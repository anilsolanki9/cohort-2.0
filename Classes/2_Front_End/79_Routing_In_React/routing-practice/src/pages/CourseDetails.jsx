import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const params = useParams();

  return <div className="bg-black/80 text-white/80 min-h-[calc(100vh-60px)] flex justify-center items-center text-7xl">{params.courseName} Course Details Page</div>;
};

export default About;
