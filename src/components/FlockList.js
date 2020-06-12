import React from "react";
import ShowFlock from "./ShowFlock";
import { Route, Link } from "react-router-dom";
const FlockList = (props) => {
  return (
    <div>
      {props.flocks.map((flock) => (
        <li key={flock.id}>
          <Link to={`/flocks/${flock.id}`}>{flock.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default FlockList;
