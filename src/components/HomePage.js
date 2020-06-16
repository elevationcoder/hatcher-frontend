import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <br />
        <h1>Hatch Tracker</h1>
        <h3>Incubation recorder for Chicken Farmers</h3>
        <div className="chicken-image">
          <img src="https://morningchores.com/wp-content/uploads/2019/02/About-Rhode-Island-Red-Chickens-One-of-the-Most-Popular-Breeds-FB.jpg" />
        </div>
      </div>
    );
  }
}

export default HomePage;
