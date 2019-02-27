import React from "react";
import { connect } from "react-redux";
import TrackListItem from "./TrackListItem";
import { changeIndex } from "../../actions";

class TrackList extends React.Component {
  onSelectTrack = trackIndex => {
    this.props.changeIndex(this.props.albumIndex, trackIndex);
  };

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.tracks.map((track, trackIndex) => {
          return (
            <TrackListItem
              onSelectTrack={this.onSelectTrack}
              trackIndex={trackIndex}
              track={track}
              key={track.uri}
              textColor={
                trackIndex === this.props.trackIndex
                  ? "text-muted"
                  : "text-light"
              }
            />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    albumIndex: state.index.albumIndex,
    trackIndex: state.index.trackIndex
  };
};

export default connect(
  mapStateToProps,
  { changeIndex }
)(TrackList);
