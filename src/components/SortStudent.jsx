import React from "react";

const SortStudent = props => {
  return (
    <div>
      Sort by: <button onClick={props.toggleOrderBy}>Desc</button>
    </div>
  );
};

export default SortStudent;
