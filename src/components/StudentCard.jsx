import React from 'react';

const StudentCard = props => {
  const { _id, name, startingCohort, currentBlock } = props.student;
  return (
    <li className="studentlist-item">
      <div>
        <h3>{name}</h3>
        <p>{_id}</p>
      </div>
      <div className="card-segment">
        <p>{startingCohort}</p>
        <p>{currentBlock}</p>
      </div>
      <label>
        Graduate: <input type="checkbox"></input>
      </label>
    </li>
  );
};

export default StudentCard;
