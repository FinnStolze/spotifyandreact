import React from "react";
import { connect } from "react-redux";
import { redirectForAuth } from "../actions";

class SpotifyAuth extends React.Component {
  onLogin = () => {
    this.props.redirectForAuth();
  };
  renderButton() {
    if (!this.props.signedIn) {
      return (
        <button
          onClick={this.onLogin}
          type="button"
          className="btn btn-success"
        >
          Login with Spotify
        </button>
      );
    }
    return (
      <button type="button" className="btn btn-danger">
        Logout
      </button>
    );
  }
  render() {
    return this.renderButton();
  }
}

const mapStateToProps = state => {
  return { signedIn: state.auth.signedIn };
};

export default connect(
  mapStateToProps,
  { redirectForAuth }
)(SpotifyAuth);
