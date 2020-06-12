import React, { Component } from "react";
import NewBundleInput from "../components/NewBundleInput";
import Bundles from "../components/Bundles";
class BundleContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <NewBundleInput />
        <Bundles />
      </div>
    );
  }
}

export default BundleContainer;
