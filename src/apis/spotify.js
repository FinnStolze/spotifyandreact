import axios from "axios";

// restful request to server
export default token => {
  return axios.create({
    baseURL: "https://api.spotify.com/v1",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
