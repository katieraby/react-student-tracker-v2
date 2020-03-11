import React from "react";
import StudentCard from "./StudentCard";

const StudentList = props => {
  return (
    <div>
      <ul className="list-container">
        {props.studentData.map(student => {
          return <StudentCard student={student} />;
        })}
      </ul>
    </div>
  );
};

export default StudentList;
