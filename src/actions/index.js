// ActionsCreators
import {
  LOGIN_USER,
  RECEIVED_TOKEN,
  GET_ALBUMS,
  PLAY_TRACK,
  PAUSE_TRACK
} from "./types";
import axios from "axios";

export const loginUser = () => {
  let loginUrl = new URL("https://accounts.spotify.com/authorize?");

  loginUrl.searchParams.append("client_id", "43c8bd59b2ec4dd0b807352b209b6636");
  loginUrl.searchParams.append("response_type", "token");
  loginUrl.searchParams.append(
    "redirect_uri",
    process.env.PUBLIC_URL
      ? "http://finnstolze.github.io/spotifyandreact"
      : "http://localhost:3000"
  );
  loginUrl.searchParams.append(
    "scope",
    "user-modify-playback-state streaming user-read-playback-state"
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
    payload: response.data.items
  });
};

export const changeIndex = (albumIndex, trackIndex = 0) => {
  return {
    type: "CHANGE_INDEX",
    payload: { albumIndex, trackIndex }
  };
};

export const nextTrack = (TrackIndex, activeAlbum, token) => async dispatch => {
  const nextTrackIndex =
    TrackIndex === activeAlbum.length - 1 ? 0 : TrackIndex + 1;

  const currentTrackUri = activeAlbum[TrackIndex].uri;
  await axios({
    method: "put",
    baseURL: "https://api.spotify.com/v1/me/player/play?",
    params: {
      device_id: "8823f9501fd02a23671d4b6e3260d078e835ccde"
    },
    headers: {
      authorization: `Bearer ${token}`
    },
    data: {
      uris: [currentTrackUri],
      offset: { position: 0 }
    }
  });

  dispatch({
    type: "NEXT_TRACK",
    payload: nextTrackIndex
  });
};

export const prevTrack = (TrackIndex, activeAlbum, token) => async dispatch => {
  const nextTrackIndex =
    TrackIndex === 0 ? activeAlbum.length - 1 : TrackIndex - 1;

  const currentTrackUri = activeAlbum[TrackIndex].uri;
  await axios({
    method: "put",
    baseURL: "https://api.spotify.com/v1/me/player/play?",
    params: {
      device_id: "8823f9501fd02a23671d4b6e3260d078e835ccde"
    },
    headers: {
      authorization: `Bearer ${token}`
    },
    data: {
      uris: [currentTrackUri],
      offset: { position: 0 }
    }
  });

  dispatch({
    type: "PREV_TRACK",
    payload: nextTrackIndex
  });
};

export const playTrack = (token, currentTracks, position) => async dispatch => {
  const currentTrackUri = currentTracks[position].uri;
  await axios({
    method: "put",
    baseURL: "https://api.spotify.com/v1/me/player/play?",
    params: {
      device_id: "8823f9501fd02a23671d4b6e3260d078e835ccde"
    },
    headers: {
      authorization: `Bearer ${token}`
    },
    data: {
      uris: [currentTrackUri],
      offset: { position: 0 }
    }
  });

  const response = await axios({
    method: "get",
    url: " 	https://api.spotify.com/v1/me/player",
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  dispatch({
    type: PLAY_TRACK,
    payload: response.data.item
  });
};

export const pauseTrack = (token, currentTrackUri) => async dispatch => {
  const spotify = axios.create({
    baseURL: "https://api.spotify.com/v1/me/player",
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  await spotify.put("/pause");

  dispatch({
    type: PAUSE_TRACK
  });
};
