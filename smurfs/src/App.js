import React, { Component } from "react";
import "./App.css";
import Smurfs from "./components/Smurfs.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <Smurfs />
      </div>
    );
  }
}

export default App;
