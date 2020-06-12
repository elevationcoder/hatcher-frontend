import React, { Component } from "react";
import FlockList from "../components/FlockList";
import NewFlockInput from "../components/NewFlockInput";
import ShowFlock from "../components/ShowFlock";
import { connect } from "react-redux";
import fetchFlocks from "../actions/fetchFlocks";
import { Route, Switch } from "react-router-dom";

class FlocksContainer extends Component {
  componentDidMount() {
    console.log(fetchFlocks());
    this.props.fetchFlocks();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/flocks/new" component={NewFlockInput} />
          <Route
            path="/flocks/:id"
            render={(routerProps) => (
              <ShowFlock {...routerProps} flocks={this.props.flocks} />
            )}
          />
          <Route
            exact
            path="/flocks"
            render={(routerProps) => (
              <FlockList {...routerProps} flocks={this.props.flocks} />
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

export default connect(mapStateToProps, { fetchFlocks })(FlocksContainer);
