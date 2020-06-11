import React, { Component } from "react";
import FlockList from "../components/FlockList";
import NewFlockInput from "../components/NewFlockInput";
import { connect } from "react-redux";
import fetchFlocks from "../actions/fetchFlocks";
class FlocksContainer extends Component {
  componentDidMount() {
    this.props.fetchFlocks();
  }
  render() {
    return (
      <div>
        <FlockList flocks={this.props.flocks} />
        <NewFlockInput />
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
