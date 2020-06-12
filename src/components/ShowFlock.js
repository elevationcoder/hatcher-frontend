import React from "react";
import { Redirect } from "react-router-dom";
import BundleContainer from "../containers/BundleContainer";
import Bundles from "./Bundles";
const ShowFlock = (props) => {
  console.log(props);

  let flock = props.flocks[props.match.params.id - 1];
  console.log(flock);

  return (
    <div>
      {/* {flock ? null : <Redirect to="/flocks" />} */}
      <h2>Flock ( {flock ? flock.name : null} )</h2>
      <li>Breed __ {flock ? flock.breed : null}</li>
      <li>Number in Flock __ {flock ? flock.quantity : null}</li>
      <li>Primary Diet __ {flock ? flock.diet : null}</li>
      <ul>
        Egg Bundles __{" "}
        {flock
          ? flock.egg_bundles.map((bundles) => (
              <li>Batch Number: {bundles.batch_number}</li>
            ))
          : "You haven't added a new bundle yet!"}
        {/* <li>
          <Bundles />
        </li> */}
      </ul>
      <BundleContainer flock={flock} />
    </div>
  );
};

export default ShowFlock;
