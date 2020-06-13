import React, { Component } from "react";
import NewBundleInput from "../components/NewBundleInput";
import Bundles from "../components/Bundles";
import { connect } from "react-redux";
class BundleContainer extends Component {
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

const mapStateToProps = (state) => {
  return {
    flocks: state.flocks,
  };
};

export default connect(mapStateToProps)(BundleContainer);
