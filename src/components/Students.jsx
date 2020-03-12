import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import SortStudent from './SortStudent';

class Students extends Component {
  state = {
    studentData: [],
    blockToSort: '',
    orderByAscOrDesc: 'asc',
    sortBy: 'startingCohort',
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

    if (prevState.orderByAscOrDesc !== this.state.orderByAscOrDesc) {
      this.fetchStudentData();
    }

    if (prevState.sortBy !== this.state.sortBy) {
      this.fetchStudentData();
    }
  };

  fetchStudentData = () => {
    axios
      .get(
        'https://nc-student-tracker.herokuapp.com/api/students?graduated=false',
        {
          params: {
            order: this.state.orderByAscOrDesc,
            sort_by: this.state.sortBy
          }
        }
      )
      .then(({ data }) => {
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
    if (this.state.orderByAscOrDesc === 'asc') {
      this.setState({ orderByAscOrDesc: 'desc' });
    } else {
      this.setState({ orderByAscOrDesc: 'asc' });
    }
  };

  changeSortBy = sortByQuery => {
    this.setState({ sortBy: sortByQuery });
  };

  render() {
    return (
      <section>
        <h2>Students</h2>
        <AddStudent postStudent={this.postStudent} />
        <SortStudent
          toggleOrderBy={this.toggleOrderBy}
          ascOrDesc={this.state.orderByAscOrDesc}
          changeSortBy={this.changeSortBy}
        />
        {this.state.isLoaded ? (
          <StudentList studentData={this.state.studentData} />
        ) : null}
      </section>
    );
  }
}

export default Students;
