import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_FAIL,
} from "../actions/smurfsActions";

const initialState = {
  smurfs: [],
  newSmurf: {
    name: "",
    age: null,
    height: "",
  },
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case POST_SMURFS_START:
      return {
        ...state,
        isPosting: true,
      };
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        isPosting: false,
        smurfs: action.payload,
        postError: "",
      };
    case POST_SMURFS_FAIL:
      return {
        ...state,
        isPosting: false,
        postError: action.payload,
      };
    default:
      return state;
  }
};
