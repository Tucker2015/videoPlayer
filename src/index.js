import React from 'react';
import { render } from 'react-dom';
import Videojs from './video.js';
import './index.css';
import 'videojs-errors';



 


const videoJsOptions = {
  autoplay: true,
  width: 600,
  height: 300,
  fluid_: false,
  controls: true,
  image: './logo.png',
  poster: './poster.jpg',
  sources: [
    {
      src: 'https://live.ktinternet.net/mbr/hls/mbr.m3u8',
      type: 'application/x-mpegURL',
    },
  ],
};

const App = () =>
<div className="frame">
  <p>Test</p>
  <div >
    <Videojs {...videoJsOptions} />
  </div>
  <script src="videojs.errors.js"></script>
  <link href="videojs.errors.css" rel="stylesheet"></link>
  </div>
render(<App />, document.getElementById('root'));
