import React from "react";
import Student from "./Student";

const AllStudents = ({ allStudents, removeStudentData }) => {
  return (
    <div className="p-5 flex flex-col gap-5">
      {allStudents.map((student, idx) => {
        return <Student key={idx} student={student} removeStudentData={removeStudentData} />;
      })}
    </div>
  );
};

export default AllStudents;
