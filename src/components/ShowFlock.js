import React from "react";

const ShowFlock = (props) => {
  console.log(props);

  let flock = props.flocks[props.match.params.id - 1];
  console.log(flock);

  return (
    <div>
      Flock / Name ( {flock ? flock.name : null} )
      <li>Breed __ {flock ? flock.breed : null}</li>
      <li>Number in Flock __ {flock ? flock.quantity : null}</li>
      <li>Primary Diet __ {flock ? flock.diet : null}</li>
    </div>
  );
};

export default ShowFlock;
