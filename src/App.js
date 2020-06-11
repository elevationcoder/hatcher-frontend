import React, { Component } from "react";
import { connect } from "react-redux";
import FlocksContainer from "./containers/flockContainer";
import NewFlockInput from "./components/NewFlockInput";
class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <FlocksContainer />
        <NewFlockInput />
      </div>
    );
  }
}

export default connect()(App);
