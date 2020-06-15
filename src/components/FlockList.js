import React from "react";
import ShowFlock from "./ShowFlock";
import { Route, Link } from "react-router-dom";
const FlockList = (props) => {
  return (
    <div>
      {props.flocks.map((flock) => (
        <div>
          <ul>
            <li key={flock.id}>
              <Link to={`/flocks/${flock.id}`}>{flock.name}</Link>
              <ul>
                <li>{flock.breed}</li>
                <li>{flock.quantity}</li>
                <li>{flock.diet}</li>
              </ul>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FlockList;
