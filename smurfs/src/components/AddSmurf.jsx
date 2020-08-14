import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfs } from "./../store/actions/smurfsActions";
import "./smurfs.css";

const Form = (props) => {
  const [newSmurf, setNewSmurf] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
    });
  };
  function addNewSmurf(e) {
    e.preventDefault();
    props.postSmurfs(newSmurf);
  }

  return (
    <div>
      <form onSubmit={(e) => addNewSmurf(e)}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Smurf Name *"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            min="0"
            placeholder="Age"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="height"
            min="0"
            placeholder="Height"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newSmurf: {
      name: state.name,
      age: state.age,
      height: state.height,
    },
    isPosting: state.isPosting,
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { postSmurfs })(Form);
