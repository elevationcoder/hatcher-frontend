import React from "react";

const FlockList = (props) => {
  return (
    <div>
      {props.flocks.map((flock) => (
        <li>
          {flock.name} - {flock.breed}
        </li>
      ))}
    </div>
  );
};

export default FlockList;
