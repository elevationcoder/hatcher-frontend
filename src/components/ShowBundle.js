import React from "react";
import { Redirect } from "react-router-dom";
import BundleContainer from "../containers/BundleContainer";
import Bundles from "./Bundles";
import { connect } from "react-redux";

// THIS COMPONENT SHOWS A SINGLE ENTRY

const ShowBundle = (props) => {
  // debugger;
  let oneBundle = props.egg_bundles.filter(
    (bundle) => bundle.id == props.match.params.id
  )[0];
  // debugger;

  return (
    <div className="flock-info-container">
      {/* {flock ? null : <Redirect to="/flocks" />} */}
      <h2 className="flock-info-name">
        Flock ( {oneBundle ? oneBundle.batch_number : null} )
      </h2>
      {/* <li className="flock-info-item">Breed __ {flock ? flock.breed : null}</li>
      <li className="flock-info-item">
        Number in Flock __ {flock ? flock.quantity : null}
      </li>
      <li className="flock-info-item">
        Primary Diet __ {flock ? flock.diet : null}
      </li> */}
      <br />
      {/* <div className="flocks-bundle-container">
        <BundleContainer flock={flock} />
      </div> */}
    </div>
  );
};

export default connect()(ShowBundle);
