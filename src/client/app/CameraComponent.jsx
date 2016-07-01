import React from 'react';
import BaseComponent from './BaseComponent.jsx';

import fetch from 'isomorphic-fetch';

export default class CameraComponent extends BaseComponent {
  constructor(props) {
    super(props);
    //this.videoElement = React.createElement("video");
    //this.gotSources = this.gotSources.bind(this);
    this._bind('_gotSources', '_successCallback', '_errorCallback', '_start', '_captureImage');


    this.audioSelect = [];
    this.videoSelect = [];
    this.cimg = [];
    this.state = {
      videoSrc: '',
      captures: []
    };
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    if (typeof MediaStreamTrack === 'undefined' ||
        typeof MediaStreamTrack.getSources === 'undefined') {
      alert('This browser does not support MediaStreamTrack.\n\nTry Chrome.');
    } else {
      MediaStreamTrack.getSources(this._gotSources);
    }

  }


  componentDidMount() {
    this._start()
  }
  
  _gotSources(sourceInfos) {
    for (var i = 0; i !== sourceInfos.length; ++i) {
      var sourceInfo = sourceInfos[i];
      if (sourceInfo.kind === 'audio') {
        this.audioSelect.push(sourceInfo.id);
      } else if (sourceInfo.kind === 'video') {
        this.videoSelect.push(sourceInfo.id);
      } else {
        console.log('Some other kind of source: ', sourceInfo);
      }
    }
  }

  _successCallback(stream) {
    window.stream = stream; // make stream available to console
    this.setState({videoSrc: window.URL.createObjectURL(stream)});
    this._video.play();
  }

  _errorCallback(error) {
    console.log('navigator.getUserMedia error: ', error);
  }

  _start() {
    if (window.stream) {
      this.state.videoSrc = null;
      window.stream.stop();
    }
    var audioSource = this.audioSelect[0];
    var videoSource = this.videoSelect[0];
    var constraints = {
      audio: {
        optional: [{
          sourceId: audioSource
        }]
      },
      video: {
        optional: [{
          sourceId: videoSource
        }]
      }
    };
    navigator.getUserMedia(constraints, this._successCallback, this._errorCallback);
  }


  _captureImage() {
    var scale = this.props.scale;
    var canvas = document.createElement("canvas");
    canvas.width = this._video.videoWidth * scale;
    canvas.height = this._video.videoHeight * scale;
    canvas.getContext('2d')
          .drawImage(this._video, 0, 0, canvas.width, canvas.height);

    var imgSrc = canvas.toDataURL('image/jpeg');
    const img = ()=>(<img src={imgSrc} />);
    

    var data = new FormData();
    data.append('tmpfile', this._dataURItoBlob(imgSrc));

    //fetch('http://local.co:4212/index/searcher', {
    fetch('http://localhost:3000/api', {
      method: 'post',
      body: data
    }).then(this._checkStatus).then(this._parseJSON)
    .then( (res)=>{
      console.log(res);
    } ).catch( (err)=>{
      console.log(err);
    } );
    
    this.cimg.push(img);
    this.setState({ captures: this.cimg });
  }

  render() {
    return (
      <div>
        <video muted="true" autoplay="" ref={(r) => this._video = r} src={this.state.videoSrc}></video>
        <button id="capture" onClick={this._captureImage}>Capture</button>
        <div id="output">
          {this.state.captures.map(function(img){
            return img();
          })}
        </div>
      </div>
    );
  }

}

