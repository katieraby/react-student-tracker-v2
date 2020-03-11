import React from "react";
import { Link } from "@reach/router";

const NavBar = props => {
  return (
    <nav>
      <Link to="/">Students</Link>
      <Link to="/graduates">Graduates</Link>
    </nav>
  );
};

export default NavBar;
