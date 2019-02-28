import { RECEIVED_TOKEN, GET_DEVICE_IDS } from "../actions/types";

const INITIAL_STATE = {
  token: null,
  signedIn: null,
  device_id: ""
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVED_TOKEN:
      return { ...state, token: action.payload, signedIn: true };
    case GET_DEVICE_IDS:
      return { ...state, device_id: action.payload };

    default:
      return state;
  }
};
