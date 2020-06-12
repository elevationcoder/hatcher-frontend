import React, { Component } from "react";
import NewBundleInput from "../components/NewBundleInput";
import Bundles from "../components/Bundles";
class BundleContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <NewBundleInput flock={this.props.flock} />
        <Bundles
          egg_bundles={this.props.flock && this.props.flock.egg_bundles}
        />
      </div>
    );
  }
}

export default BundleContainer;
