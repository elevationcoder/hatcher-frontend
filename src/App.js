import React, { Component } from "react";
import { connect } from "react-redux";
import fetchFlocks from "./actions/fetchFlocks";
class App extends Component {
  componentDidMount() {}
  render() {
    return <div className="App">App</div>;
  }
}

export default connect()(App);
