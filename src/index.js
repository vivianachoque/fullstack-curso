import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  return (
    <div>
      <Header course = "Half Stack application development"/>
      <Content part1 = "Fundamentals of React" exercises1 = {10} part2 = "Using props to pass data" exercises2 = {7} part3 = "State of a component" exercises3 = {14} />
      <Total exercises1 = {10}  exercises2 = {7}  exercises3 = {14} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
