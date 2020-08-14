import React from "react";
import { connect } from "react-redux";
import "./smurfs.css";

const SmurfCard = (props) => {
  return (
    <div className="box">
      <h2>Smurf Name: {props.smurf.name}</h2>
      <p>Smurf Age: {props.smurf.age}</p>
      <p>Smurf Height: {props.smurf.height}cm</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(SmurfCard);
