import React from "react";
import { Redirect } from "react-router-dom";
import BundleContainer from "../containers/BundleContainer";
import Bundles from "./Bundles";
import { connect } from "react-redux";

// THIS COMPONENT SHOWS A SINGLE ENTRY

const ShowBundle = (props) => {
  debugger;
  let oneBundle = props.egg_bundles.filter(
    (bundle) => bundle.id === props.match.params.id
  )[0];
  debugger;

  return (
    <div className="flock-info-container">
      <h2 className="flock-info-name">
        Flock ( {oneBundle ? oneBundle.batch_number : null} )
      </h2>
    </div>
  );
};

export default connect()(ShowBundle);

{
  /* {flock ? null : <Redirect to="/flocks" />} */
}
