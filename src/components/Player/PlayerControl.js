import React from "react";
import { connect } from "react-redux";
import { playTrack, pauseTrack, nextTrack, prevTrack } from "../../actions";

class PlayerControl extends React.Component {
  onPlay = () => {
    this.props.playTrack(
      this.props.token,
      this.props.activeAlbum,
      this.props.index.trackIndex,
      this.props.device_id
    );
  };
  onPause = () => {
    this.props.pauseTrack(this.props.token);
  };
  onNext = () => {
    this.props.nextTrack(
      this.props.index.trackIndex,
      this.props.activeAlbum,
      this.props.token,
      this.props.device_id
    );
  };
  onPrev = () => {
    this.props.prevTrack(
      this.props.index.trackIndex,
      this.props.activeAlbum,
      this.props.token,
      this.props.device_id
    );
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.index.albumIndex !== this.props.index.albumIndex ||
      prevProps.index.trackIndex !== this.props.index.trackIndex
    ) {
      this.props.playTrack(
        this.props.token,
        this.props.activeAlbum,
        this.props.index.trackIndex,
        this.props.device_id
      );
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onPlay} className="btn btn-success m-1">
          Play
        </button>
        <button onClick={this.onPause} className="btn btn-danger m-1">
          ||
        </button>
        <button onClick={this.onPrev} className="btn btn-info m-1">
          prev
        </button>
        <button onClick={this.onNext} className="btn btn-info m-1">
          next
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const activeAlbum = state.albums[state.index.albumIndex].album.tracks.items;
  return {
    token: state.auth.token,
    activeAlbum: activeAlbum,
    index: state.index,
    device_id: state.auth.device_id
  };
};

export default connect(
  mapStateToProps,
  { playTrack, pauseTrack, nextTrack, prevTrack }
)(PlayerControl);
