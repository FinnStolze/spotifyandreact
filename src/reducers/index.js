import { combineReducers } from "redux";
import receiveToken from "./receiveToken";
import albumReducer from "./albumReducer";
import indexReducer from "./indexReducer";

export default combineReducers({
  auth: receiveToken,
  albums: albumReducer,
  index: indexReducer
});
