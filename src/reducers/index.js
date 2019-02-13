import { combineReducers } from "redux";
import receiveToken from "./receiveToken";

export default combineReducers({ auth: receiveToken });
