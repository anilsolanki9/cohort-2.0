import React, { useState } from "react";

const AddStudentForm = ({ setFormMode, addStudent }) => {
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    mathsMarks: "",
    physicsMarks: "",
    chemistryMarks: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    addStudent(studentDetails);
    setFormMode(false);
  }

  function closeFormBtnHandler() {
    setFormMode(false);
  }

  return (
    <div className="fixed z-100 top-0 left-0 w-full h-full bg-black/60 backdrop-blur-xl flex justify-center items-center">
      <button onClick={closeFormBtnHandler} className="bg-red-400 px-4 py-1 rounded-lg font-bold absolute top-5 right-5 cursor-pointer active:scale-95">
        Close
      </button>
      <form onSubmit={submitHandler} className="flex flex-col bg-Muted rounded-2xl w-150 px-10 py-5 text-3xl space-y-3">
        <h1 className="text-4xl font-bold">Student Details</h1>

        <input
          value={studentDetails.name}
          onChange={(e) => {
            setStudentDetails((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
          className="border-none outline-none bg-Surface px-5 py-3 rounded-lg focus:ring-2 ring-TxtPri transition-all duration-200"
          type="text"
          id="name"
          placeholder="Student name"
        />

        <input
          value={studentDetails.mathsMarks}
          onChange={(e) => {
            setStudentDetails((prev) => {
              return { ...prev, mathsMarks: e.target.value };
            });
          }}
          className="border-none outline-none bg-Surface px-5 py-3 rounded-lg focus:ring-2 ring-TxtPri transition-all duration-200"
          type="text"
          name=""
          id="marks1"
          placeholder="Maths marks"
        />

        <input
          value={studentDetails.physicsMarks}
          onChange={(e) => {
            setStudentDetails((prev) => {
              return { ...prev, physicsMarks: e.target.value };
            });
          }}
          className="border-none outline-none bg-Surface px-5 py-3 rounded-lg focus:ring-2 ring-TxtPri transition-all duration-200"
          type="text"
          name=""
          id="marks2"
          placeholder="Physics marks"
        />

        <input
          value={studentDetails.chemistryMarks}
          onChange={(e) => {
            setStudentDetails((prev) => {
              return { ...prev, chemistryMarks: e.target.value };
            });
          }}
          className="border-none outline-none bg-Surface px-5 py-3 rounded-lg focus:ring-2 ring-TxtPri transition-all duration-200"
          type="text"
          name=""
          id="marks3"
          placeholder="Chemistry marks"
        />

        <button className="bg-TxtPri text-Bg font-bold rounded-2xl active:scale-95 select-none cursor-pointer text-center py-2 transition-all duration-200" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
