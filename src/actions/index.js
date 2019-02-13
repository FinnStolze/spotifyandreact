// ActionsCreators
import { LOGIN_USER, RECEIVED_TOKEN, GET_ALBUMS } from "./types";
import axios from "axios";

export const loginUser = () => {
  let loginUrl = new URL("https://accounts.spotify.com/authorize?");

  loginUrl.searchParams.append("client_id", "43c8bd59b2ec4dd0b807352b209b6636");
  loginUrl.searchParams.append("response_type", "token");
  loginUrl.searchParams.append(
    "redirect_uri",
    "http://localhost:3000/redirectedpage"
  );
  loginUrl.searchParams.append(
    "scope",
    "user-read-private user-read-email user-library-read"
  );

  window.location = loginUrl.href;

  return { type: LOGIN_USER };
};

export const receiveToken = acessToken => {
  return { type: RECEIVED_TOKEN, payload: acessToken };
};

export const getAlbums = token => async dispatch => {
  const spotify = axios.create({
    baseURL: "https://api.spotify.com/v1",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const response = await spotify.get("me/albums");

  dispatch({
    type: GET_ALBUMS,
    payload: response.data.items[0].album.images[0].url
  });
};
