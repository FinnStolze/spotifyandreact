import { GET_CURRENT_TRACK } from "../actions/types";

const INITIAL_STATE = {
  currentTracks: [],
  position: 0
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_TRACK:
      return { ...state, currentTrack: action.payload };
    case "CURRENT_ALBUM_TRACKS":
      return { ...state, currentTracks: action.payload };
    case "CHANGE_POSITION":
      return { ...state, position: action.payload };
    default:
      return state;
  }
};
