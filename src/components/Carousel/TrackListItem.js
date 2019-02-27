import React from "react";

const TrackListItem = ({ track, trackIndex, onSelectTrack, textColor }) => {
  return (
    <li
      onClick={() => onSelectTrack(trackIndex)}
      className={`list-group-item bg-dark ${textColor}`}
      style={{ cursor: "pointer" }}
    >
      {track.name}
    </li>
  );
};

export default TrackListItem;
