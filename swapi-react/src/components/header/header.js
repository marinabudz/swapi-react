import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href=""> STAR</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href=""> PEOPLE</a>
        </li>
        <li>
          <a href=""> PLANETS</a>
        </li>
        <li>
          <a href=""> STARSHIPS</a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
