import React, { Component } from "react";
import { connect } from "react-redux";
import FlocksContainer from "./containers/flockContainer";
class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <FlocksContainer />
      </div>
    );
  }
}

export default connect()(App);
