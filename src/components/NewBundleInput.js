import React, { Component } from "react";
import { connect } from "react-redux";
class NewBundleInput extends Component {
  state = {
    batch_number: "",
    batch_number: "",
    batch_number: "",
    batch_number: "",
    batch_number: "",
    batch_number: "",
    batch_number: "",
    batch_number: "",
    batch_number: "",
    batch_number: "",
  };
  render() {
    return (
      <div className="new-bundle-container">
        <h3>Add a New Bundle Below</h3>
        <form className="new-bundle-input">
          <label>Select Breed: </label>
          <select className="breed-dropdown">
            <option>White Leghorn</option>
            <option>Rhode Island Red</option>
            <option>Black Sussex</option>
            <option>Brown Links</option>
            <option>Cornish Hen</option>
            <option>Plymouth Rock</option>
          </select>
          <br />
          <br />
          <div className="bundle-form-field">
            <input type="text" placeholder="Bundle Number" />
            <input type="text" placeholder="Amount to be Incubated" />
            <input type="text" placeholder="Incubation Start Date" />
            <input type="text" placeholder="Initial Temp (Days 1-18)" />
            <input type="text" placeholder="Initial Humidity (Days 1-18)" />
            <input type="text" placeholder="Amount Fertilized" />
            <input type="text" placeholder="Lockdown Temp" />
            <input type="text" placeholder="Lockdown Humidity" />
            <input type="text" placeholder="First Hatch Date" />
            <input type="text" placeholder="Amount Hatched" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null)(NewBundleInput);
