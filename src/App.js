import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Students from "./components/Students";
import Graduates from "./components/Graduates";

function App() {
  return (
    <main>
      <Header />
      <NavBar />
      <Router>
        <Students path="/" />
        <Graduates path="/graduates" />
      </Router>
    </main>
  );
}

export default App;
