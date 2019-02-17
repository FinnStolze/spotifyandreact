import React from "react";
import { receiveToken } from "../actions";
import { connect } from "react-redux";

const RedirectedPage = props => {
  const url = window.location.href;
  const access_token = url.match(/#(?:access_token)=([\S\s]*?)&/)[1];
  props.receiveToken(access_token);

  return <div>Redirecting...</div>;
};

export default connect(
  null,
  { receiveToken }
)(RedirectedPage);
