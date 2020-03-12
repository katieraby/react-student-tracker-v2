import React from 'react';

const SortStudent = props => {
  return (
    <div>
      Sort by:{' '}
      <button onClick={props.toggleOrderBy}>
        {props.ascOrDesc === 'asc' ? 'Descending' : 'Ascending'}
      </button>
    </div>
  );
};

export default SortStudent;
