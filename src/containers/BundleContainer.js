import React, { Component } from "react";
import NewBundleInput from "../components/NewBundleInput";
import Bundles from "../components/Bundles";
import { connect } from "react-redux";
import fetchBundles from "../actions/fetchBundles";
import BundleList from "../components/BundleList";
class BundleContainer extends Component {
  render() {
    return (
      <div>
        <NewBundleInput flock={this.props.flock} />
        <div className="render-bundles">
          <Bundles
            egg_bundles={this.props.flock && this.props.flock.egg_bundles}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchBundles })(BundleContainer);
