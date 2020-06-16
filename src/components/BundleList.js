import React from "react";
import ShowFlock from "./ShowFlock";
import { Route, Link } from "react-router-dom";
const BundleList = (props) => {
  // debugger;
  return (
    <div>
      {props.egg_bundles.map((bundles) => (
        <div>
          <ul>
            <li key={bundles.id}>
              <Link to={`/egg_bundles/${bundles.id}`}>
                {bundles.batch_number}
              </Link>
            </li>
            <li>Breed: {bundles.breed}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BundleList;
