import React from 'react';

class SortStudent extends React.Component {
  state = {
    sortBy: ''
  };

  handleInput = event => {
    this.setState({ sortBy: event.target.value }, () => {
      this.props.changeSortBy(this.state.sortBy);
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Sort by:
            <select defaultValue="default" onChange={this.handleInput}>
              <option value="default" disabled>
                Choose sort by query
              </option>
              <option value="name">Name</option>
              <option value="startingCohort">Starting Cohort</option>
            </select>
          </label>
        </form>
        <button onClick={this.props.toggleOrderBy}>
          {this.props.ascOrDesc === 'asc' ? 'Descending' : 'Ascending'}
        </button>
      </div>
    );
  }
}

export default SortStudent;
