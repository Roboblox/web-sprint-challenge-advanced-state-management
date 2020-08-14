import React, { Component } from "react";
import "./App.css";
import Smurfs from "./components/Smurfs.jsx";
import AddSmurf from "./components/AddSmurf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <AddSmurf />
        <Smurfs />
      </div>
    );
  }
}

export default App;
