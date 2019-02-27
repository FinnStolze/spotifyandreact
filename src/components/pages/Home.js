import React from "react";
import { Link } from "react-router-dom";
import SpotifyAuth from "../SpotfiyAuth";
import CarouselStrap from "../Carousel/CarouselStrap";
import { connect } from "react-redux";
import SdkPlayer from "../SdkPlayer";

class Home extends React.Component {
  render() {
    return (
      <div className="bg-light text-dark">
        <nav className="navbar navbar-white bg-dark shadow-lg rounded">
          <Link to="/" className="navbar-brand text-white">
            AlbumCarousel
          </Link>
          <SpotifyAuth />
        </nav>
        {this.props.isSignedIn ? (
          <div>
            <div className="row justify-content-center p-3" />
            <CarouselStrap /> <br />
            <SdkPlayer />
            <footer className="footer p-1 bg-dark shadow-lg rounded text-light text-right text-muted m-1">
              Created by Finn Stolze
            </footer>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.signedIn };
};
export default connect(
  mapStateToProps,
  {}
)(Home);
