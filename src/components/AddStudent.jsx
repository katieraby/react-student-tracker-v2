import React, { Component } from "react";

class AddStudent extends Component {
  state = {
    name: "",
    startingCohort: 0
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const objToPost = { ...this.state };
    this.props.postStudent(objToPost);
    this.setState({ name: "", startingCohort: 0 });
  };

  render() {
    return (
      <div className="add-student-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              value={this.state.name}
              name="name"
              type="text"
              onChange={this.handleInput}
            ></input>
          </label>
          <label>
            Starting Cohort:
            <input
              value={this.state.startingCohort}
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
