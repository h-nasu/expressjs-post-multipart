import React from 'react';
import BaseComponent from './BaseComponent.jsx';

import fetch from 'isomorphic-fetch';

export default class CameraComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('_gotSources', '_successCallback', '_errorCallback', '_start', '_captureImage');

    this.haveMedia = false;
    this.audioSelect = [];
    this.videoSelect = [];
    this.cimg = [];
    this.state = {
      videoSrc: '',
      //captures: [],
      showResSrc: ()=>(null)
    };
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    if (typeof MediaStreamTrack === 'undefined' ||
        typeof MediaStreamTrack.getSources === 'undefined') {
      alert('This browser does not support MediaStreamTrack.\n\nTry Chrome.');
    } else {
      MediaStreamTrack.getSources(this._gotSources);
      this.haveMedia = true;
    }

  }

  componentDidMount() {
    if (this.haveMedia) {
      this._start();
    }
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

    setInterval(()=>{
      this._captureImage();
    }, 2000);
    
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


  _captureImage(e) {

    if (this.haveMedia) {
      var scale = this.props.scale;
      var canvas = document.createElement("canvas");
      canvas.width = this._video.videoWidth * scale;
      canvas.height = this._video.videoHeight * scale;
      canvas.getContext('2d')
            .drawImage(this._video, 0, 0, canvas.width, canvas.height);
      var imgSrc = canvas.toDataURL('image/jpeg');
      //const img = ()=>(<img src={imgSrc} />);
      imgSrc = this._dataURItoBlob(imgSrc);
    } else {
      e.preventDefault();
      var imgSrc = e.target.files[0];
    }
    
    

    var data = new FormData();
    data.append('tmpfile', imgSrc);

    fetch('/api', {
      method: 'post',
      body: data
    }).then(this._checkStatus).then(this._parseJSON)
    .then( (res)=>{
      console.log(res);
      if (res.image_ids.length > 0 ) {
        var ResSrc = ()=>(null);
        switch(res.image_ids[0]){
          case 1:
            ResSrc = ()=>(<iframe width="560" height="315" src="https://www.youtube.com/embed/5PN6owrZxMI?autoplay=1" frameborder="0" allowfullscreen></iframe>); 
            break;
          case 2:
            ResSrc = ()=>(<img src="images/monalisa.jpg"  />);
            break;
          default:
            break;
        }
        //if (ResSrc && res.score > 10) {
        if (ResSrc) {
          this.setState({showResSrc:ResSrc});
          return;
        }
      }
      this.setState({showResSrc: ()=>(null)});
    } ).catch( (err)=>{
      console.log(err);
    } );
  }

  render() {
    return (
      <div>
        {this.haveMedia ?
          <video muted="true" autoplay="" ref={(r) => this._video = r} src={this.state.videoSrc}></video>
          :
          <form>
            <input type="file" accept="image/*" capture="camera" onChange={this._captureImage} />
          </form>
        }
        <div style={this.haveMedia ? styles.imageOnTop : null}>
          {this.state.showResSrc()}
        </div>

      </div>
    );
  }

}

const styles = {
  imageOnTop: {
    position: 'fixed',
    top: 0
  }
};

