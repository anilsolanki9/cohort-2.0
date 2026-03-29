import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AddStudentForm from "./components/AddStudentForm";
import SearchBar from "./components/SearchBar";
import AllStudents from "./components/AllStudents";

const App = () => {
  const [allStudents, setAllStudents] = useState(localStorage.getItem("allStudents") ? JSON.parse(localStorage.getItem("allStudents")) : []);

  const [query, setQuery] = useState("");
  const [formMode, setFormMode] = useState(false);
  const [condition, setCondition] = useState("all");

  let filteredAllStudents = allStudents
    .filter((student) => {
      if (condition === "passed") return student.mathsMarks >= 33 && student.physicsMarks >= 33 && student.chemistryMarks >= 33;
      if (condition === "failed") return (student.mathsMarks < 33 || student.physicsMarks < 33 || student.chemistryMarks < 33) && (student.mathsMarks + student.chemistryMarks + student.physicsMarks) / 3 < 33;
      return true; // "all"
    })
    .filter((student) => {
      if (query.trim() == "") return true;
      else {
        return student.name.toLowerCase().includes(query.trim().toLowerCase());
      }
    });

  function addStudent(student) {
    setAllStudents([...allStudents, { name: student.name, mathsMarks: +student.mathsMarks, physicsMarks: +student.physicsMarks, chemistryMarks: +student.chemistryMarks }]);
  }

  function removeStudentData(student) {
    let indexToDelete = allStudents.indexOf(student);

    let newAllStudents = [...allStudents];
    newAllStudents.splice(indexToDelete, 1);
    setAllStudents(newAllStudents);
  }

  useEffect(() => {
    localStorage.setItem("allStudents", JSON.stringify(allStudents));
  }, [allStudents]);

  return (
    <div className="min-h-screen bg-Bg text-TxtPri">
      <Navbar setFormMode={setFormMode} />
      {formMode ? <AddStudentForm setFormMode={setFormMode} addStudent={addStudent} /> : ""}
      <SearchBar setQuery={setQuery} setCondition={setCondition} />
      <AllStudents allStudents={filteredAllStudents} removeStudentData={removeStudentData} />
    </div>
  );
};

export default App;
