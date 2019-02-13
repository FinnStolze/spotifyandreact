import { GET_ALBUMS } from "../actions/types";

const INITIAL_STATE = {
  albums: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return { ...state, albums: action.payload };
    default:
      return state;
  }
};
