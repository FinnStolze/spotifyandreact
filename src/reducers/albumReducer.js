import { GET_ALBUMS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return action.payload;
    default:
      return state;
  }
};
