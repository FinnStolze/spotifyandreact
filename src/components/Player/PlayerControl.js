import React from "react";
import { connect } from "react-redux";
import { playTrack, pauseTrack, nextTrack, prevTrack } from "../../actions";

class PlayerControl extends React.Component {
  onPlay = () => {
    this.props.playTrack(
      this.props.token,
      this.props.activeAlbum,
      this.props.index.trackIndex
    );
  };
  onPause = () => {
    this.props.pauseTrack(this.props.token);
  };
  onNext = () => {
    this.props.nextTrack(
      this.props.index.trackIndex,
      this.props.activeAlbum,
      this.props.token
    );
  };
  onPrev = () => {
    this.props.prevTrack(
      this.props.index.trackIndex,
      this.props.activeAlbum,
      this.props.token
    );
  };
  onIndexChange = () => {
    this.props.playTrack(
      this.props.token,
      this.props.activeAlbum,
      this.props.index.trackIndex
    );
  };

  render() {
    return (
      <div>
        <div onChange={this.onIndexChange} value={this.props.index.albumIndex}>
          Album Index: {this.props.index.albumIndex}
        </div>
        <div onChange={this.onIndexChange} value={this.props.index.trackIndex}>
          Track Index: {this.props.index.trackIndex}
        </div>

        <button onClick={this.onPlay} className="btn btn-success m-2">
          Play
        </button>
        <button onClick={this.onPause} className="btn btn-danger m-2">
          ||
        </button>
        <button onClick={this.onPrev} className="btn btn-info m-2">
          prev
        </button>
        <button onClick={this.onNext} className="btn btn-info m-2">
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
    index: state.index
  };
};

export default connect(
  mapStateToProps,
  { playTrack, pauseTrack, nextTrack, prevTrack }
)(PlayerControl);
