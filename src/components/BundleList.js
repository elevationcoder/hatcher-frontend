import React from "react";
import ShowFlock from "./ShowFlock";
import { Route, Link } from "react-router-dom";
const BundleList = (props) => {
  return (
    <div>
      {props.egg_bundles &&
        props.flocks.egg_bundles.map((bundles) => (
          <div>
            <ul>
              <li key={bundles.id}>
                <Link to={`/egg_bundles/${bundles.id}`}>
                  {bundles.batch_number}
                </Link>
              </li>
              <li>Initial Temp: {bundles.init_temp}</li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default BundleList;
