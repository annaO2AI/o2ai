import React from 'react';

const VideoPlayer: React.FC<{ src: string; poster?: string }> = ({ src, poster }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <video
        className="w-full h-auto rounded-lg shadow-lg"
        controls
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;