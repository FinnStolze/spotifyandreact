import { RECEIVED_TOKEN } from "../actions/types";
import history from "../history";

const INITIAL_STATE = {
  token: null,
  signedIn: null
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVED_TOKEN:
      history.push("/");
      return { ...state, token: action.payload, signedIn: true };

    default:
      return state;
  }
};
