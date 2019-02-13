// ActionsCreators
import { LOGIN_USER } from "./types";

export const loginUser = () => {
  let loginUrl = new URL("https://accounts.spotify.com/authorize?");

  loginUrl.searchParams.append("client_id", "43c8bd59b2ec4dd0b807352b209b6636");
  loginUrl.searchParams.append("response_type", "token");
  loginUrl.searchParams.append(
    "redirect_uri",
    "http://localhost:3000/redirectedpage"
  );

  window.location = loginUrl.href;

  // return { type: LOGIN_USER };
};

export const receiveToken = acessToken => {
  return { type: "RECEIVED_TOKEN", payload: acessToken };
};
