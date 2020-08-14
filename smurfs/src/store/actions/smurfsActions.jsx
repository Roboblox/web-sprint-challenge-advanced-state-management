import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_POKEMON_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_POKEMON_FAIL";

export const smurfsActions = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => {
        dispatch({
          type: FETCH_SMURFS_SUCCESS,
          payload: response.data.results,
        });
        console.log(response.data.results);
      })
      .catch((error) => {
        dispatch({ type: FETCH_SMURFS_FAIL, payload: error.message });
      });
  };
};
