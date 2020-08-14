import React from "react";
import { connect } from "react-redux";
import "./smurfs.css";

const SmurfCard = (props) => {
  const smurfLink = "/profile/" + props.smurf.id;

  return (
    <div>
      <div>
        Name: {props.smurf.name} <br />
        Age: {props.smurf.age} <br />
        Height: {props.smurf.height}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(SmurfCard);
