import React from "react";
import { Link } from "react-router-dom";
import SpotifyAuth from "../SpotfiyAuth";
import Carousel from "../Carousel";

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-white bg-dark">
          <Link to="/" className="navbar-brand text-white">
            home
          </Link>
          <SpotifyAuth />
        </nav>
        <Carousel />
      </div>
    );
  }
}

export default Home;
