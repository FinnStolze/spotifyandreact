import { axios } from "axios";

// restful request to server
export default axios.create({
  baseURL: "https://localhost:3001"
});
