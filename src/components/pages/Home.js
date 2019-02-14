import React from "react";
import { Link } from "react-router-dom";
import SpotifyAuth from "../SpotfiyAuth";
import CarouselStrap from "../CarouselStrap";
import { connect } from "react-redux";
import { getAlbums } from "../../actions";

class Home extends React.Component {
  render() {
    return (
      <div className="bg-light text-dark">
        <nav className="navbar navbar-white bg-dark">
          <Link to="/" className="navbar-brand text-white">
            home
          </Link>
          <SpotifyAuth />
        </nav>
        {this.props.isSignedIn ? <CarouselStrap /> : <div> </div>}
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
