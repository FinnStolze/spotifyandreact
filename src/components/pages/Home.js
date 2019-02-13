import React from "react";
import { Link } from "react-router-dom";
import SpotifyAuth from "../SpotfiyAuth";
import { getAlbums } from "../../actions";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    if (this.props.isSignedIn) {
      this.props.getAlbums(this.props.token);
    }
  }
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

const mapStateToProps = state => {
  return { token: state.auth.token, isSignedIn: state.auth.signedIn };
};

export default connect(
  mapStateToProps,
  { getAlbums }
)(Home);
