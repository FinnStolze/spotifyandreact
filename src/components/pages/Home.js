import React from "react";
import { Link } from "react-router-dom";
import "../../styles.css";
import SpotifyAuth from "../SpotfiyAuth";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-white bg-dark">
          <Link to="/" className="navbar-brand text-white">
            home
          </Link>
          <SpotifyAuth />
        </nav>
      </div>
    );
  }
}
