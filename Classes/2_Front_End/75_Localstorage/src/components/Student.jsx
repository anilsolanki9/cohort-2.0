import React from "react";

const Student = ({ student, removeStudentData }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full items-center justify-between bg-Muted px-5 py-3 pr-10 rounded-2xl relative group">
      <div
        onClick={() => {
          removeStudentData(student);
        }}
        className="bg-red-500 absolute -top-1 -right-1 w-6 h-6 flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer active:scale-90 select-none"
      >
        X
      </div>
      <div>
        <h2 className="text-3xl font-semibold">{student.name}</h2>
        <div className="flex gap-6">
          <h3>
            Maths: <span className="text-xl font-bold text-shadow-xs text-shadow-black">{student.mathsMarks}</span>
          </h3>
          <h3>
            Physics: <span className="text-xl font-bold text-shadow-xs text-shadow-black">{student.physicsMarks}</span>
          </h3>
          <h3>
            Chemistry: <span className="text-xl font-bold text-shadow-xs text-shadow-black">{student.chemistryMarks}</span>
          </h3>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="text-center">
          <h3>Total Marks</h3>
          <div className="text-2xl font-bold text-shadow-xs text-shadow-black">{student.mathsMarks + student.physicsMarks + student.chemistryMarks}</div>
        </div>
        <div className="text-center">
          <h3>Percentage %</h3>
          <div className="text-2xl font-bold  text-shadow-xs text-shadow-black">{((student.mathsMarks + student.physicsMarks + student.chemistryMarks) / 3).toFixed(1)}%</div>
        </div>
      </div>
    </div>
  );
};

export default Student;
