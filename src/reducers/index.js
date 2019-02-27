import { combineReducers } from "redux";
import receiveToken from "./receiveToken";
import albumReducer from "./albumReducer";
import playerReducer from "./playerReducer";
import indexReducer from "./indexReducer";

export default combineReducers({
  auth: receiveToken,
  albums: albumReducer,
  player: playerReducer,
  index: indexReducer
});
