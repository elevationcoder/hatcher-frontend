import React from "react";
import ShowFlock from "./ShowFlock";
import { Route, Link } from "react-router-dom";
import "../stylesheets/bundleStyles.css";
const FlockList = (props) => {
  return (
    <div>
      <br />
      <br />
      {props.flocks.map((flock) => (
        <div className="flock-card">
          <ul>
            <li key={flock.id}>
              <label>Name: </label>
              <Link to={`/flocks/${flock.id}`}> {flock.name}</Link>
            </li>
            <li>Breed: {flock.breed}</li>
            <li>Quantity: {flock.quantity}</li>
            <li>Primary Diet: {flock.diet}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FlockList;
