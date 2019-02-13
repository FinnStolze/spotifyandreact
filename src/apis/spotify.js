import axios from "axios";

// restful request to server
export default axios.create({
  baseURL: "https://accounts.spotify.com",
  params: {
    client_id: "43c8bd59b2ec4dd0b807352b209b6636",
    response_type: "code",
    redirect_uri: "http://localhost:3000/redirectedpage"
  }
});
