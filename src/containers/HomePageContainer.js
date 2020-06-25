import React, { Component } from "react";
import fetchBundles from "../actions/fetchBundles";
import { connect } from "react-redux";
import ShowBundle from "../components/ShowBundle";
import BundleList from "../components/BundleList";
import { Route, Switch } from "react-router-dom";
import Bundles from "../components/Bundles";

class HomePageContainer extends Component {
  componentDidMount() {
    console.log(fetchBundles());
    this.props.fetchBundles();
  }
  render() {
    return (
      <div className="show-bundle-container">
        <br />
        <Switch>
          <Route
            exact
            path="/egg_bundles"
            render={(routerProps) => (
              <Bundles {...routerProps} egg_bundles={this.props.egg_bundles} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    egg_bundles: state.egg_bundles,
  };
};

export default connect(mapStateToProps, { fetchBundles })(HomePageContainer);
