import React from 'react';
import '../../styles/Cover.css';
import coverVideo from '../../assets/videos/coverVideo.mp4';

export const Cover = () => {
  return (
      <div id="home" className="cover-container" >
          <video className="video" src={coverVideo} autoPlay loop muted />
          <h1>Juan Espinosa</h1>
          <p>Electronic Engineer | Software Developer</p>
      </div>
  )
}
