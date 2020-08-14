import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./smurfs.css";

import { fetchSmurfs } from "../store/actions/smurfsActions";

const Smurfs = (props) => {
  useEffect(() => {
    // call an action creator that will be in charge of fetching data
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      <nav>
        <h1 id="title">I Love Smurfette 🚀 🪐 </h1>
      </nav>
      <section>
        {props.isLoading ? <h4>Loading Smurf now...</h4> : null}
        {props.error ? (
          <p style={{ color: "red" }}>
            Uh oh... something happened 😟 {props.error}
          </p>
        ) : null}
        {props.smurfs.length > 0 ? (
          <div className="box">
            {props.smurfs.map((smurf) => (
              <h2 key={smurf.name}>{smurf.name}</h2>
            ))}
          </div>
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

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
