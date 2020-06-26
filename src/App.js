import React, { Component } from "react";
import { connect } from "react-redux";
import FlocksContainer from "./containers/flockContainer";
import NewFlockInput from "./components/NewFlockInput";
import HomePageContainer from "./containers/HomePageContainer";
import HomePage from "./components/HomePage";
import "./stylesheets/bundleStyles.css";
import { Route, Switch } from "react-router-dom";
class App extends Component {
  // componentDidUpdate()
  render() {
    return (
      <div className="App">
        <FlocksContainer />
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}

export default App;
