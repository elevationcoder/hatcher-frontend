import React, { Component } from "react";
import { connect } from "react-redux";
import { addFlock } from "../actions/addFlock";

// THIS COMPONENT IS RESPONSIBLE FOR
// RENDERING NEW FLOCK ENTRY AND UPDATING API AND STORE

class NewFlockInput extends Component {
  state = {
    name: "",
    breed: "",
    quantity: "",
    diet: "",
  }; // THIS STATE IS NOT EXPORTED

  // FORM CONTROL METHODS

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addFlock(this.state);
    this.setState({
      name: "",
      breed: "",
      quantity: "",
      diet: "",
    });
  };

  // START OF FORM RENDERING
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} className="flock-input-form">
          <input
            onChange={this.handleOnChange}
            name="name"
            type="text"
            placeholder="Enter flock name"
            value={this.state.name}
          />
          <br />
          <input
            onChange={this.handleOnChange}
            name="breed"
            type="text"
            placeholder="Enter breed"
            value={this.state.breed}
          />
          <br />
          <input
            onChange={this.handleOnChange}
            name="quantity"
            type="text"
            placeholder="Enter flock quantity"
            value={this.state.quantity}
          />
          <br />
          <input
            onChange={this.handleOnChange}
            name="diet"
            type="text"
            placeholder="Enter diet"
            value={this.state.diet}
          />
          <br />
          <input type="submit" value="Add Flock" />
        </form>
      </div>
    );
  }
  // END OF FORM RENDERING
}

// NO THIS.STATE SENT TO STORE

export default connect(null, { addFlock })(NewFlockInput);

// addFlock ACTION CAN BE FOUND IN THE addFlock.js
//FILE UNDER THE ACTIONS FOLDER
