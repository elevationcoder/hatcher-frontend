import React from "react";
import { Redirect } from "react-router-dom";
import BundleContainer from "../containers/BundleContainer";
import Bundles from "./Bundles";
import { connect } from "react-redux";

// THIS COMPONENT SHOWS A SINGLE ENTRY

const ShowFlock = (props) => {
  let flock = props.flocks.filter(
    (flock) => flock.id == props.match.params.id
  )[0];

  return (
    <div>
      {/* {flock ? null : <Redirect to="/flocks" />} */}
      <h2>Flock ( {flock ? flock.name : null} )</h2>
      <li>Breed __ {flock ? flock.breed : null}</li>
      <li>Number in Flock __ {flock ? flock.quantity : null}</li>
      <li>Primary Diet __ {flock ? flock.diet : null}</li>
      {/* <ul>
        Egg Bundles __{" "}
        {flock
          ? flock.egg_bundles.map((bundles, ind) => (
              <li key={ind}>Batch Number: {bundles.batch_number}</li>
            ))
          : "You haven't added a new bundle yet!"} */}
      {/* <li>
          <Bundles />
        </li> */}
      {/* </ul> */}
      <br />
      <BundleContainer flock={flock} />
    </div>
  );
};

export default connect()(ShowFlock);
