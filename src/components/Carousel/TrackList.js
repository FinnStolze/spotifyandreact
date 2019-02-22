import React from "react";
import { connect } from "react-redux";
import TrackListItem from "./TrackListItem";
import { playTrack } from "../../actions";

class TrackList extends React.Component {
  onSelectTrack = track => {
    this.props.playTrack(this.props.token, track.uri);
  };

  render() {
    return (
      <ul
        style={{ overflowY: "scroll", height: "300px" }}
        className="list-group list-group-flush"
      >
        {this.props.tracks.map(track => {
          return (
            <TrackListItem
              onSelectTrack={this.onSelectTrack}
              key={track.uri}
              track={track}
            />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.auth.token
  };
};

export default connect(
  mapStateToProps,
  { playTrack }
)(TrackList);
