// ActionsCreators
import {
  REDIRECT_FOR_AUTH,
  RECEIVED_TOKEN,
  GET_ALBUMS,
  PLAY_TRACK,
  PAUSE_TRACK,
  GET_DEVICE_IDS,
  NEXT_TRACK,
  PREV_TRACK,
  CHANGE_INDEX
} from "./types";
import spotify from "../apis/spotify";

export const redirectForAuth = () => {
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

  return { type: REDIRECT_FOR_AUTH };
};

export const receiveToken = acessToken => {
  return { type: RECEIVED_TOKEN, payload: acessToken };
};

export const getAlbums = token => async dispatch => {
  const response = await spotify(token).get("me/albums");

  dispatch({
    type: GET_ALBUMS,
    payload: response.data.items
  });
};

export const changeIndex = (albumIndex, trackIndex = 0) => {
  return {
    type: CHANGE_INDEX,
    payload: { albumIndex, trackIndex }
  };
};

export const nextTrack = (
  TrackIndex,
  activeAlbum,
  token,
  device_id
) => async dispatch => {
  const nextTrackIndex =
    TrackIndex === activeAlbum.length - 1 ? 0 : TrackIndex + 1;
  const currentTrackUri = activeAlbum[TrackIndex].uri;

  const url = `me/player/play?&device_id=${device_id}`;
  const data = { uris: [currentTrackUri], offset: { position: 0 } };
  await spotify(token).put(url, data);
  dispatch({
    type: NEXT_TRACK,
    payload: nextTrackIndex
  });
};

export const prevTrack = (
  TrackIndex,
  activeAlbum,
  token,
  device_id
) => async dispatch => {
  const nextTrackIndex =
    TrackIndex === 0 ? activeAlbum.length - 1 : TrackIndex - 1;

  const currentTrackUri = activeAlbum[TrackIndex].uri;

  const url = `me/player/play?&device_id=${device_id}`;
  const data = { uris: [currentTrackUri], offset: { position: 0 } };
  await spotify(token).put(url, data);

  dispatch({
    type: PREV_TRACK,
    payload: nextTrackIndex
  });
};

export const playTrack = (
  token,
  currentTracks,
  position,
  device_id
) => async dispatch => {
  const currentTrackUri = currentTracks[position].uri;

  const url = `me/player/play?&device_id=${device_id}`;
  const data = { uris: [currentTrackUri], offset: { position: 0 } };
  await spotify(token).put(url, data);

  dispatch({
    type: PLAY_TRACK
  });
};

export const pauseTrack = (token, currentTrackUri) => async dispatch => {
  const url = "me/player/pause";
  await spotify(token).put(url);

  dispatch({
    type: PAUSE_TRACK
  });
};

export const getDeviceIds = device_id => {
  return {
    type: GET_DEVICE_IDS,
    payload: device_id
  };
};
