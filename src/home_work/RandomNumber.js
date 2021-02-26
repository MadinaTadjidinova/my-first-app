import React from "react";

function RandomNumber(props) {
  return <h1>{Math.floor(Math.random(props.min) * Math.floor(props.max))}</h1>;
}

export default RandomNumber;
