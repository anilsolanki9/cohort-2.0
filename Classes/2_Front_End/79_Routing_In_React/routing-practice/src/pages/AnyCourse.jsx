import React from "react";
import { Link, useParams } from "react-router-dom";

const About = () => {
  const params = useParams();

  return (
    <div className="bg-black/80 text-white/80 min-h-[calc(100vh-60px)] flex justify-center items-center text-7xl">
      <div>
        <h2>{params.courseName} Course Page</h2>
        <Link className="text-xl" to={`/cources/${params.courseName}/details`}>
          Course Details
        </Link>
      </div>
    </div>
  );
};

export default About;
