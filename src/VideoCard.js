import React, { useState, useRef } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader.js";
import VideoFooter from "./VideoFooter";

function VideoCard({ url, channel, avatarSrc, likes, shares, song }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const vidoeRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      // stop
      vidoeRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // play
      vidoeRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        className="videoCard__player"
        ref={vidoeRef}
        onClick={onVideoPress}
        src={url}
        alt="IG reel video"
        loop
      />
      <VideoFooter
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        likes={likes}
        shares={shares}
      />
    </div>
  );
}

export default VideoCard;
