import React, { Component } from "react";
import { connect } from "react-redux";
import FlocksContainer from "./containers/flockContainer";
import NewFlockInput from "./components/NewFlockInput";
import "./stylesheets/bundleStyles.css";
class App extends Component {
  // componentDidUpdate()
  render() {
    return (
      <div className="App">
        <FlocksContainer />
      </div>
    );
  }
}

export default connect()(App);
