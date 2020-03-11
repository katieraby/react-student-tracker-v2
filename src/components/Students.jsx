import React, { Component } from "react";
import StudentList from "./StudentList";

class Students extends Component {
  state = {
    studentData: [
      {
        _id: "5e5e2ac3ca5ef400176fb0b2",
        name: "bnm,,.",
        startingCohort: -1,
        currentBlock: "fun"
      },
      {
        _id: "5e5e2ac4ca5ef400176fb0b3",
        name: "bnm,,.",
        startingCohort: -1,
        currentBlock: "fun"
      },
      {
        _id: "5e4ffd58af95d600172e1220",
        name: "aldi",
        startingCohort: 1,
        currentBlock: "proj"
      },
      {
        _id: "5e57f15e97fcf80017bef416",
        name: "anisa",
        startingCohort: 1,
        currentBlock: "be"
      },
      {
        _id: "5e57f16597fcf80017bef417",
        name: "anisa",
        startingCohort: 1,
        currentBlock: "proj"
      },
      {
        _id: "5e57f16797fcf80017bef418",
        name: "anisa",
        startingCohort: 1,
        currentBlock: "fun"
      },
      {
        _id: "5e57f16897fcf80017bef419",
        name: "anisa",
        startingCohort: 1,
        currentBlock: "proj"
      },
      {
        _id: "5e57f16997fcf80017bef41a",
        name: "anisa",
        startingCohort: 1,
        currentBlock: "be"
      },
      {
        _id: "5e57f18197fcf80017bef41b",
        name: "anisa",
        startingCohort: 1,
        currentBlock: "fun"
      },
      {
        _id: "5e57fb3197fcf80017bef41f",
        name: "Luna",
        startingCohort: 1,
        currentBlock: "fe"
      },
      {
        _id: "5e58f270454c580017a69958",
        name: "Leroy Jenkins",
        startingCohort: 1,
        currentBlock: "be"
      },
      {
        _id: "5e5e2a90ca5ef400176fb0a7",
        name: "Hello",
        startingCohort: 1,
        currentBlock: "fun"
      },
      {
        _id: "5e5e2a9cca5ef400176fb0a8",
        name: "Hello, it's me, Mrio",
        startingCohort: 1,
        currentBlock: "fun"
      },
      {
        _id: "5e5e2af5ca5ef400176fb0b8",
        name: "Sleenenex",
        startingCohort: 1,
        currentBlock: "fun"
      },
      {
        _id: "5e6656ff35f5010017161f3a",
        name: "new student!",
        startingCohort: 1,
        currentBlock: "fun"
      },
      {
        _id: "5e6657b135f5010017161f3e",
        name: "gdfad",
        startingCohort: 1,
        currentBlock: "fun"
      },
      {
        _id: "5e66580d35f5010017161f3f",
        name: "gdfad",
        startingCohort: 1,
        currentBlock: "fun"
      },
      {
        _id: "5e6658ab35f5010017161f40",
        name: "gdfad",
        startingCohort: 1,
        currentBlock: "fun"
      },
      {
        _id: "5e66599535f5010017161f41",
        name: "gdfad",
        startingCohort: 1,
        currentBlock: "fun"
      }
    ],
    blockToSort: "",
    sortByAscOrDesc: "",
    selectedSortBy: ""
  };

  render() {
    return (
      <section>
        <h2>Students</h2>
        <StudentList studentData={this.state.studentData} />
      </section>
    );
  }
}

export default Students;
