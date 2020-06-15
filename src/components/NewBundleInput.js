import React, { Component } from "react";
import addBundle from "../actions/addBundle";
import { connect } from "react-redux";
// THIS COMPONENT IS USED TO RENDER NEW BUNDLE FORM
// IS RESPONSIBLE FOR ADDING A NEW INSTANCE AND UPDATING STORE
// AND API

class NewBundleInput extends Component {
  state = {
    batch_number: "",
    amount: "",
    amount_fertilized: "",
    amount_hatched: "",
    start_date: "",
    first_hatch: "",
    init_temp: "",
    init_humid: "",
    lockdown_temp: "",
    lockdown_humid: "",
  };
  // FORM CONTROL METHODS
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    // debugger;
    this.props.addBundle(this.state, this.props.flock.id);
    this.setState({
      batch_number: "",
      amount: "",
      amount_fertilized: "",
      amount_hatched: "",
      start_date: "",
      first_hatch: "",
      init_temp: "",
      init_humid: "",
      lockdown_temp: "",
      lockdown_humid: "",
    });
  };

  // BEGIN RENDER OF FORM FIELD

  render() {
    return (
      <div className="new-bundle-container">
        <h2>Add a New Bundle Below</h2>
        <form onSubmit={this.handleOnSubmit} className="new-bundle-input-form">
          <label>Incubation Start Date and Time: </label>
          {/* <br /> */}
          <input
            name="start_date"
            type="datetime-local"
            value={this.state.start_date}
            onChange={this.handleOnChange}
          />
          <br />
          <label>First Egg Hatch Date and Time: </label>
          {/* <br /> */}
          <input
            name="first_hatch"
            type="datetime-local"
            placeholder="First Hatch Date"
            value={this.state.first_hatch}
            onChange={this.handleOnChange}
          />
          {/* <br /> */}
          {/* <br /> */}
          <div className="bundle-input-form-field">
            <input
              name="batch_number"
              type="text"
              placeholder="Bundle Number"
              value={this.state.batch_number}
              onChange={this.handleOnChange}
            />
            <input
              name="amount"
              type="text"
              placeholder="Amount to be Incubated"
              value={this.state.amount}
              onChange={this.handleOnChange}
            />
            {/* <br /> */}
            <input
              name="init_temp"
              type="text"
              placeholder="Initial Temp (Days 1-18)"
              value={this.state.init_temp}
              onChange={this.handleOnChange}
            />
            <input
              name="init_humid"
              type="text"
              placeholder="Initial Humidity (Days 1-18)"
              value={this.state.init_humid}
              onChange={this.handleOnChange}
            />
            {/* <br /> */}
            <input
              name="amount_fertilized"
              type="text"
              placeholder="Amount Fertilized"
              value={this.state.amount_fertilized}
              onChange={this.handleOnChange}
            />
            <input
              name="lockdown_temp"
              type="text"
              placeholder="Lockdown Temp"
              value={this.state.lockdown_temp}
              onChange={this.handleOnChange}
            />
            {/* <br /> */}
            <input
              name="lockdown_humid"
              type="text"
              placeholder="Lockdown Humidity"
              value={this.state.lockdown_humid}
              onChange={this.handleOnChange}
            />

            <input
              name="amount_hatched"
              type="text"
              placeholder="Amount Hatched"
              value={this.state.amount_hatched}
              onChange={this.handleOnChange}
            />
          </div>
          <input type="submit" value="Add Bundle" />
        </form>
      </div>
      // END OF FORM FIELD
    );
  }
}

const mapStateToProps = (state) => {
  return {
    egg_bundles: state.egg_bundles,
  };
};

export default connect(mapStateToProps, { addBundle })(NewBundleInput);

/* <label>Select Breed: </label>
          <select name="breed"className="breed-dropdown">
            <option>White Leghorn</option>
            <option>Rhode Island Red</option>
            <option>Black Sussex</option>
            <option>Brown Links</option>
            <option>Cornish Hen</option>
            <option>Plymouth Rock</option>
          </select> */
