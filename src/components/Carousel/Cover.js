import React from "react";

const Cover = ({ coverSource, coverAltText }) => {
  return <img className="p-1" src={coverSource} alt={coverAltText} />;
};

export default Cover;
