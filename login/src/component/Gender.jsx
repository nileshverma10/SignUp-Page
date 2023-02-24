import React from "react";
import "./Gender.css";

const Gender = (props) => (
  <select {...props} className="genselect">
    <option>Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
);

export default Gender;
