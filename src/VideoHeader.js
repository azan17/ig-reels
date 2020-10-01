import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import "./VideoHeader.css";

function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIcon />
      <h3>Reels</h3>
      <CameraAltIcon />
    </div>
  );
}

export default VideoHeader;
