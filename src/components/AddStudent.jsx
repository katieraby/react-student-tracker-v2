import React, { Component } from 'react';

class AddStudent extends Component {
  state = {
    name: '',
    startingCohort: 0
  };

  handleInput = event => {
    /*
    event.target.name equal to the name of the state we want to set
    event.target.value which is going to be the input on change which we can use to set the state with
    */

    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const objToPost = { ...this.state };

    console.log(objToPost);
  };

  render() {
    console.log(this.state.name);
    console.log(this.state.startingCohort);
    return (
      <div className="add-student-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input name="name" type="text" onChange={this.handleInput}></input>
          </label>
          <label>
            Starting Cohort:
            <input
              name="startingCohort"
              type="number"
              onChange={this.handleInput}
            ></input>
          </label>
          <button>Add Student</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
