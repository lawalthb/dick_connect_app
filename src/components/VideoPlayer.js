import React, { useState } from 'react';
import PlayIcon from '@/Images/Icons/PlayIcon.svg';
import { getYouTubeVideoId } from './Utils/methods';

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const isYouTube = src.includes('youtube');
  const videoId = getYouTubeVideoId(src);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full mx-auto aspect-video overflow-hidden shadow-lg relative">
      {isYouTube ? (
        <>
          {isPlaying ? (
            <iframe
              className="w-full h-full rounded-[10px]"
              src={`${src}?autoplay=1&mute=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full relative">
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="Video thumbnail"
                className="w-full h-full object-cover rounded-[10px]"
              />
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlay}
              >
                <div className="w-[196px] h-[190px] rounded-full bg-white border-4 hover:border-[#A20030] flex items-center justify-center hover:scale-105 transition-transform">
                  <PlayIcon />
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <video
          src={src}
          autoPlay
          muted
          controls
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
