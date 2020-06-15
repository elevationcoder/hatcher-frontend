import React, { Component } from "react";

import { connect } from "react-redux";

class HomePageContainer extends Component {
  render() {
    return <div className="homepage-container">Home Page</div>;
  }
}

export default connect()(HomePageContainer);
