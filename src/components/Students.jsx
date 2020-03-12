import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import SortStudent from './SortStudent';

class Students extends Component {
  state = {
    studentData: [],
    blockToSort: '',
    sortByAscOrDesc: 'asc',
    selectedSortBy: '',
    isLoaded: false,
    studentToAdd: {}
  };

  componentDidMount = () => {
    this.fetchStudentData();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.studentToAdd !== this.state.studentToAdd) {
      this.fetchStudentData();
    }

    if (prevState.sortByAscOrDesc !== this.state.sortByAscOrDesc) {
      this.fetchStudentData();
    }
  };

  fetchStudentData = () => {
    axios
      .get(
        'https://nc-student-tracker.herokuapp.com/api/students?graduated=false',
        { params: { order: this.state.sortByAscOrDesc } }
      )
      .then(({ data }) => {
        // console.log(data);
        this.setState({ studentData: data.students, isLoaded: true });
      });
  };

  postStudent = objToPost => {
    axios
      .post('https://nc-student-tracker.herokuapp.com/api/students', objToPost)
      .then(({ data }) => {
        this.setState({ studentToAdd: data });
      });
  };

  toggleOrderBy = event => {
    if (this.state.sortByAscOrDesc === 'asc') {
      this.setState({ sortByAscOrDesc: 'desc' });
    } else {
      this.setState({ sortByAscOrDesc: 'asc' });
    }

    // this.setState({ sortByAscOrDesc: event.target.value });
  };

  render() {
    console.log(this.state.sortByAscOrDesc);
    return (
      <section>
        <h2>Students</h2>
        <AddStudent postStudent={this.postStudent} />
        <SortStudent
          toggleOrderBy={this.toggleOrderBy}
          ascOrDesc={this.state.sortByAscOrDesc}
        />
        {this.state.isLoaded ? (
          <StudentList studentData={this.state.studentData} />
        ) : null}
      </section>
    );
  }
}

export default Students;
