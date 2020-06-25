import React from "react";
import { Redirect } from "react-router-dom";
import BundleContainer from "../containers/BundleContainer";
import { connect } from "react-redux";

// THIS COMPONENT SHOWS A SINGLE ENTRY

const ShowFlock = (props) => {
  let flock = props.flocks.filter(
    (flock) => flock.id == props.match.params.id
  )[0];

  return (
    <div className="flock-info-container">
      {/* Line 18 is for future dev purposes */}
      {/* {flock ? null : <Redirect to="/flocks" />} */}
      <h2 className="flock-info-name">Flock ( {flock ? flock.name : null} )</h2>
      <li className="flock-info-item">Breed __ {flock ? flock.breed : null}</li>
      <li className="flock-info-item">
        Number in Flock __ {flock ? flock.quantity : null}
      </li>
      <li className="flock-info-item">
        Primary Diet __ {flock ? flock.diet : null}
      </li>
      <br />
      <div className="flocks-bundle-container">
        <BundleContainer flock={flock} />
      </div>
    </div>
  );
};

export default connect()(ShowFlock);
