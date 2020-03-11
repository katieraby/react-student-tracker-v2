import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import SortStudent from './SortStudent';

class Students extends Component {
  state = {
    studentData: [],
    blockToSort: '',
    sortByAscOrDesc: '',
    selectedSortBy: '',
    isLoaded: false
  };

  componentDidMount() {
    this.fetchStudentData();
  }

  fetchStudentData() {
    axios
      .get(
        'https://nc-student-tracker.herokuapp.com/api/students?graduated=false'
      )
      .then(({ data }) => {
        console.log(data);
        this.setState({ studentData: data.students, isLoaded: true });
      });
  }

  render() {
    return (
      <section>
        <h2>Students</h2>
        <AddStudent />
        <SortStudent />
        {this.state.isLoaded ? (
          <StudentList studentData={this.state.studentData} />
        ) : null}
      </section>
    );
  }
}

export default Students;
