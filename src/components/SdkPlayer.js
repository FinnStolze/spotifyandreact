import React from "react";
import { connect } from "react-redux";
import { getDeviceIds } from "../actions";

class SdkPlayer extends React.Component {
  componentDidMount() {
    const token = this.props.token;
    this.props.getDeviceIds(this.props.token);
    window.onSpotifyWebPlaybackSDKReady = () => {
      this.player = new window.Spotify.Player({
        name: "Album Carousel",
        getOAuthToken: cb => {
          cb(token);
        }
      });
      // Error handling
      // Error handling
      this.player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });
      this.player.addListener("authentication_error", ({ message }) => {
        console.error(message);
      });
      this.player.addListener("account_error", ({ message }) => {
        console.error(message);
      });
      this.player.addListener("playback_error", ({ message }) => {
        console.error(message);
      });

      // Playback status updates
      this.player.addListener("player_state_changed", state => {
        console.log(state);
      });

      // Ready
      this.player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        this.props.getDeviceIds(device_id);
      });

      // Not Ready
      this.player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      // Connect to the player!
      this.player.connect().then(success => {
        if (success) {
          console.log(
            "The Web Playback SDK successfully connected to Spotify!"
          );
        }
      });
    };
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => {
  return { token: state.auth.token };
};

export default connect(
  mapStateToProps,
  { getDeviceIds }
)(SdkPlayer);
