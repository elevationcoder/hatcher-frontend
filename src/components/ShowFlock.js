import React from "react";

const ShowFlock = (props) => {
  return (
    <div>
      <li>
        Flock Name: {props.showFlock.name} :: Breed: {props.showFlock.breed} ::{" "}
        Number in Flock: {props.showFlock.quantity} :: Primary Diet:{" "}
        {props.showFlock.diet}
      </li>
    </div>
  );
};

export default ShowFlock;
