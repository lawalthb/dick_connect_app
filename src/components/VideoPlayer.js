// components/VideoPlayer.js
'use client';
import React from 'react';

const VideoPlayer = ({
  src = 'https://connectinc.app/wp-content/uploads/2021/04/Connect_final_01.mp4',
}) => {
  return (
    <div className="w-full mx-auto aspect-video overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
