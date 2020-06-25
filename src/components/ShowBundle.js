import React from "react";
import { Redirect } from "react-router-dom";
import BundleContainer from "../containers/BundleContainer";
import Bundles from "./Bundles";
import { connect } from "react-redux";

// THIS COMPONENT SHOWS A SINGLE ENTRY

const ShowBundle = ({ eggBundle }) => {
  return (
    <div className="flock-info-container">
      <h2 className="flock-info-name">
        Bundle: ( {eggBundle ? eggBundle.batch_number : null} )
      </h2>
      <ul>
        <li>Amount to incubate: {eggBundle ? eggBundle.amount : null}</li>
        <li>
          Incubation start date: {eggBundle ? eggBundle.start_date : null}
        </li>
        <li>
          Initial Temp. (Days 1-18): {eggBundle ? eggBundle.init_temp : null}
        </li>
        <li>
          Initial Humidity (Days 1-18):{" "}
          {eggBundle ? eggBundle.init_humid : null}
        </li>
        <li>
          Amount fertilized (at Day 7):{" "}
          {eggBundle ? eggBundle.amount_fertilized : null}
        </li>
        <li>
          Lockdown Temp. (Days 19-21):{" "}
          {eggBundle ? eggBundle.lockdown_temp : null}
        </li>
        <li>
          Lockdown Humidity (Days 19-21):{" "}
          {eggBundle ? eggBundle.lockdown_humid : null}
        </li>
        <li>First hatch date: {eggBundle ? eggBundle.first_hatch : null}</li>
        <li>
          Total amount hatched (Day 26):{" "}
          {eggBundle ? eggBundle.amount_hatched : null}
        </li>
      </ul>
    </div>
  );
};

export default connect()(ShowBundle);
