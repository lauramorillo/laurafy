import React from "react";
import ReactAudioPlayer from "react-audio-player";

function Player(props) {
  return (
    <ReactAudioPlayer style={{ width: "100%" }} src={props.src} autoPlay controls />
  )
}

export default Player