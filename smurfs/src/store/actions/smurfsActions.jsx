import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const fetchSmurfs = (props) => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        dispatch({
          type: FETCH_SMURFS_SUCCESS,
          payload: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        dispatch({ type: FETCH_SMURFS_FAIL, payload: error.message });
      });
  };
};

export const POST_SMURFS_START = "POST_SMURFS_START";
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
export const POST_SMURFS_FAIL = "POST_SMURFS_FAIL";

export const postSmurfs = (props) => {
  return (dispatch) => {
    dispatch({ type: POST_SMURFS_START });
    axios
      .post("http://localhost:3333/smurfs", props)
      .then((res) => {
        dispatch({ type: POST_SMURFS_START });
        dispatch({
          type: POST_SMURFS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: POST_SMURFS_FAIL });
      });
  };
};
