import React, { Component } from "react";
import FlockList from "../components/FlockList";
import NewFlockInput from "../components/NewFlockInput";
import { connect } from "react-redux";
import fetchFlocks from "../actions/fetchFlocks";
import { Route } from "react-router-dom";
class FlocksContainer extends Component {
  componentDidMount() {
    this.props.fetchFlocks();
  }

  render() {
    return (
      <div>
        <Route path="/flocks/new" component={NewFlockInput} />
        <Route
          path="/flocks"
          render={() => <FlockList flocks={this.props.flocks} />}
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

export default connect(mapStateToProps, { fetchFlocks })(FlocksContainer);
