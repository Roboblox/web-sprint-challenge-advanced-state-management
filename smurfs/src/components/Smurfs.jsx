import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./smurfs.css";
import SmurfCard from "./SmurfCard";
import { fetchSmurfs, postSmurfs } from "../store/actions/smurfsActions";

const Smurfs = (props) => {
  useEffect(() => {
    // call an action creator that will be in charge of fetching data
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      <section>
        {props.isLoading ? <h4>Loading Smurf now...</h4> : null}
        {props.smurfs &&
          props.smurfs.map((smurf) => {
            return <SmurfCard key={smurf.id} smurf={smurf} />;
          })}
        {props.error ? (
          <p style={{ color: "red" }}>
            Uh oh... something happened 😟 {props.error}
          </p>
        ) : null}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs, postSmurfs })(Smurfs);
