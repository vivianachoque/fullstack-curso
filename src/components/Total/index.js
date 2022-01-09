import React from "react";

const Total = (props) => {

  return (
    <span>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </span>
  );
};
export default Total;
