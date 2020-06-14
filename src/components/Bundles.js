import React from "react";
import deleteBundle from "../actions/deleteBundle";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
// THIS COMPONENT SHOWS SPECIFIC BUNDLE
import editBundle from "../actions/editBundle";
const Bundles = (props) => {
  const handleDelete = (bundle) => {
    props.deleteBundle(bundle.id, bundle.flock_id);
  };

  const handleDivClick = (event) => {};
  return (
    <div className="egg-bundle-container">
      <h3>Egg Bundles</h3>
      {props.egg_bundles &&
        props.egg_bundles.map((bundle, ind) => (
          // START OF INFO FIELD
          <div
            onClick={(event) => console.log(event.egg_bundles)}
            className="bundle-card"
          >
            <ul className="bundle-info" key={ind}>
              <h3>
                Bundle Number:{" "}
                <span className="bundle-info-number">
                  {bundle.batch_number}
                </span>
              </h3>
              <li>
                Bundle Amount(eggs):{" "}
                <span className="bundle-info-number">{bundle.amount}</span>
              </li>
              <li>
                Start of Incubation:{" "}
                <span className="bundle-info-number">{bundle.start_date}</span>
              </li>
              <li>
                Initial Temp. (Days 1-18):{" "}
                <span className="bundle-info-number">{bundle.init_temp}</span>
              </li>
              <li>
                Initial Humidity (Days 1-18):{" "}
                <span className="bundle-info-number">{bundle.init_humid}</span>
              </li>
              <li>
                Amount Fertilized:{" "}
                <span className="bundle-info-number">
                  {bundle.amount_fertilized}
                </span>
              </li>
              <li>
                Lockdown Temp. (Days 18-21):{" "}
                <span className="bundle-info-number">
                  {bundle.lockdown_temp}
                </span>
              </li>
              <li>
                Lockdown Humidity (Days 18-21):{" "}
                <span className="bundle-info-number">
                  {bundle.lockdown_humid}
                </span>
              </li>
              <li>
                Date of First Hatch:{" "}
                <span className="bundle-info-number">{bundle.first_hatch}</span>
              </li>
              <li>
                Amount Hatched:{" "}
                <span className="bundle-info-number">
                  {bundle.amount_hatched}
                </span>
              </li>
              {/* <NavLink
                to="/flocks/new"
                exact
                // style={link}
                // activeStyle={{
                //   background: "darkblue",
                // }}
              >
                Add New Flock
              </NavLink> */}
              <button onClick={() => handleDelete(bundle)}>Delete</button>
            </ul>
          </div>
        ))}
      {/* END OF INFO FIELD */}
    </div>
  );
};

export default connect(null, { deleteBundle, editBundle })(Bundles);
