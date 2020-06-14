import React, { Component } from "react";
import NewBundleInput from "../components/NewBundleInput";
import Bundles from "../components/Bundles";
import { connect } from "react-redux";
import "../styles.css";
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

const mapStateToProps = (state) => {
  return {
    flocks: state.flocks,
  };
};

export default connect(mapStateToProps)(BundleContainer);
