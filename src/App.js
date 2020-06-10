import React, { Component } from "react";
import { connect } from "react-redux";
import fetchFlocks from "./actions/fetchFlocks";
class App extends Component {
  componentDidMount() {
    this.props.fetchFlocks({
      type: "FETCH_FLOCKS",
      payload: { name: "Black Sussex" },
    });
  }
  render() {
    return <div className="App">App</div>;
  }
}

export default connect(null, { fetchFlocks })(App);
