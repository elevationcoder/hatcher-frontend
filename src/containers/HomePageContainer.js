import React, { Component } from "react";
import FlockList from "../components/FlockList";
import NewFlockInput from "../components/NewFlockInput";
import ShowFlock from "../components/ShowFlock";
import { connect } from "react-redux";
import fetchFlocks from "../actions/fetchFlocks";
import fetchBundles from "../actions/fetchBundles";
import ShowBundle from "../components/ShowBundle";
import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../stylesheets/bundleStyles.css";
class FlocksContainer extends Component {
  componentDidMount() {
    console.log(fetchFlocks());
    this.props.fetchFlocks();
    // this.props.fetchBundles();
  }

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <Switch>
          <Route
            path="/egg_bundles/"
            render={(routerProps) => (
              <ShowBundle {...routerProps} bundles={this.props.egg_bundles} />
            )}
          />
          <Route
            path="/egg_bundles/"
            render={(routerProps) => (
              <ShowBundle {...routerProps} bundles={this.props.egg_bundles} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flocks: state.flocks,
  };
};

export default connect(mapStateToProps, { fetchFlocks, fetchBundles })(
  FlocksContainer
);
