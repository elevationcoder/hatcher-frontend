import React from "react";

const Bundles = (props) => {
  return (
    <div className="egg-bundle-container">
      <h3>Egg Bundles</h3>
      {props.egg_bundles &&
        props.egg_bundles.map((bundle, ind) => (
          <ul className="bundle-info" key={ind}>
            <li>
              Bundle Number:{" "}
              <span className="bundle-info-number">{bundle.batch_number}</span>
            </li>
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
              <span className="bundle-info-number">{bundle.lockdown_temp}</span>
            </li>
            <li>
              Lockdown Humidity (Days 18-21)
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
          </ul>
        ))}
    </div>
  );
};

export default Bundles;
