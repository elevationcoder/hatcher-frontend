import React from "react";
import ShowFlock from "./ShowFlock";
const FlockList = (props) => {
  return (
    <div>
      {props.flocks.map((flock) => (
        <div key={flock.id}>
          <ShowFlock showFlock={flock} />
        </div>
      ))}
    </div>
  );
};

export default FlockList;
