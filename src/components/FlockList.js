import React from "react";

const FlockList = (props) => {
  return (
    <div>
      {props.flocks.map((flock) => (
        <li key={flock.id}>
          {flock.name} - {flock.breed}
        </li>
      ))}
    </div>
  );
};

export default FlockList;
