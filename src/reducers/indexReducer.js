import { NEXT_TRACK, PREV_TRACK, CHANGE_INDEX } from "../actions/types";

const INITIAL_STATE = {
  trackIndex: 0,
  albumIndex: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_INDEX:
      return action.payload;
    case NEXT_TRACK:
      return { ...state, trackIndex: action.payload };
    case PREV_TRACK:
      return { ...state, trackIndex: action.payload };
    default:
      return state;
  }
};
