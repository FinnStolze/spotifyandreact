import React from "react";
import { connect } from "react-redux";
import { playTrack, activateDevice, pauseTrack, getDeviceId } from "../actions";

class SdkPlayer extends React.Component {
  componentDidMount() {
    const token = this.props.auth.token;
    window.onSpotifyWebPlaybackSDKReady = () => {
      this.player = new window.Spotify.Player({
        name: "Finns Player",
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

  onPlay = () => {
    this.props.playTrack(this.props.auth.token, this.props.uri);
  };
  onPause = () => {
    this.props.pauseTrack(this.props.auth.token, this.props.uri);
  };
  onActivate = () => {
    this.props.activateDevice(this.props.auth.token, this.props.uri);
  };

  render() {
    return (
      <div>
        <button onClick={this.onActivate}> Activate </button>
        <button onClick={this.onPlay}> Play </button>
        <button onClick={this.onPause}> Pause </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth, uri: "spotify:track:2J3XzDLjbXkny8qhr33zTh" };
};

export default connect(
  mapStateToProps,
  { playTrack, getDeviceId, pauseTrack }
)(SdkPlayer);
