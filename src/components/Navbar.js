import React from "react";
import SpotifyAuth from "./SpotfiyAuth";

const Navbar = () => {
  return (
    <nav className="navbar navbar-white bg-dark shadow-lg rounded">
      <div className="navbar-brand text-white">AlbumCarousel</div>
      <SpotifyAuth />
    </nav>
  );
};

export default Navbar;
