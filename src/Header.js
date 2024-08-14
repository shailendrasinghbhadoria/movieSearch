import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/todolist">To-Do Work</Link>&nbsp;
      </nav>
    </div>
  );
}

export default Header;
