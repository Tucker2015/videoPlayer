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
      src: 'https://live.ktinternet.net/tbvr/hls/tbvr.m3u8',
      type: 'application/x-mpegURL',
    },
  ],
};

const App = () =>
<div className="frame">
  <p>Test</p>
  <div >
  <div class="vjs-error-display vjs-modal-dialog" aria-describedby="vjs_video_3_component_364_description" aria-hidden="false" aria-label="Modal Window" role="dialog"><p class="vjs-modal-dialog-description vjs-control-text" id="vjs_video_3_component_364_description">This is a modal window.</p><div class="vjs-modal-dialog-content" role="document">The media could not iled or because the format is not supported.</div></div>
    <Videojs {...videoJsOptions} />
  </div>
  <script src="videojs.errors.js"></script>
  <link href="videojs.errors.css" rel="stylesheet"></link>
  </div>
render(<App />, document.getElementById('root'));
