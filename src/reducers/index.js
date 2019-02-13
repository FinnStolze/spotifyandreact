import { combineReducers } from "redux";
import receiveToken from "./receiveToken";
import albumReducer from "./albumReducer";

export default combineReducers({ auth: receiveToken, albums: albumReducer });
