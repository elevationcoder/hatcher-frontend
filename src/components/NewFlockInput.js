import React, { Component } from "react";
import { connect } from "react-redux";
import { addFlock } from "../actions/addFlock";
class NewFlockInput extends Component {
  state = {
    name: "",
    breed: "",
    quantity: "",
    diet: "",
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addFlock(this.state);
  };
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
}

export default connect(null, { addFlock })(NewFlockInput);
