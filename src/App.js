import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    fetch("http://localhost:3001/egg_bundles/1")
      .then((resp) => resp.json())
      .then((data) => console.log(data.flocks));
  }
  render() {
    return <div className="App">App</div>;
  }
}

export default App;
