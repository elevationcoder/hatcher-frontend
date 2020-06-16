import React from "react";
import ShowFlock from "./ShowFlock";
import { Route, Link } from "react-router-dom";
const BundleList = (props) => {
  debugger;
  return (
    <div>
      {props.map((bundles) => (
        <li key={bundles.id}>
          <Link to={`/egg_bundles/${bundles.id}`}>{bundles.batch_number}</Link>
        </li>
      ))}
    </div>
  );
};

export default BundleList;
