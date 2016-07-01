webpackHotUpdate(0,{

/***/ 257:
/*!********************************************!*\
  !*** ./src/client/app/CameraComponent.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 77), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 85), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 87), React = __webpack_require__(/*! react */ 150); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 150);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CameraComponent = function (_React$Component) {
	  _inherits(CameraComponent, _React$Component);
	
	  function CameraComponent(props) {
	    _classCallCheck(this, CameraComponent);
	
	    //this.onChange = this.onChange.bind(this);
	    //this.videoElement = React.createElement("video");
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CameraComponent).call(this, props));
	
	    _this.gotSources = _this.gotSources.bind(_this);
	    _this.successCallback = _this.successCallback.bind(_this);
	    _this.audioSelect = [];
	    _this.videoSelect = [];
	    _this.state = {
	      videoSrc: '',
	      captures: []
	    };
	    //this.initElements();
	    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
	
	    if (typeof MediaStreamTrack === 'undefined' || typeof MediaStreamTrack.getSources === 'undefined') {
	      alert('This browser does not support MediaStreamTrack.\n\nTry Chrome.');
	    } else {
	      MediaStreamTrack.getSources(_this.gotSources);
	    }
	
	    //this.start();
	
	    return _this;
	  }
	
	  /*
	  initElements() {
	    this.state.video = document.createElement("video");
	    this.state.audioSelect = document.createElement("select");
	    this.state.audioSelect = document.createElement("select");
	  }
	  */
	
	  _createClass(CameraComponent, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.start();
	    }
	  }, {
	    key: 'gotSources',
	    value: function gotSources(sourceInfos) {
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
	  }, {
	    key: 'successCallback',
	    value: function successCallback(stream) {
	      window.stream = stream; // make stream available to console
	      this.setState({ videoSrc: window.URL.createObjectURL(stream) });
	      this._video.play();
	      console.log(this.audioSelect);
	      console.log(this.videoSelect);
	      //this.videoElement.play();
	    }
	  }, {
	    key: 'errorCallback',
	    value: function errorCallback(error) {
	      console.log('navigator.getUserMedia error: ', error);
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      if (window.stream) {
	        this.state.videoSrc = null;
	        window.stream.stop();
	      }
	      var audioSource = this.audioSelect[0];
	      //var audioSource = 0;
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
	      navigator.getUserMedia(constraints, this.successCallback, this.errorCallback);
	    }
	  }, {
	    key: 'captureImage',
	    value: function captureImage() {
	      var scale = this.props.scale;
	      var canvas = document.createElement("canvas");
	      canvas.width = this.videoElement.videoWidth * scale;
	      canvas.height = this.videoElement.videoHeight * scale;
	      canvas.getContext('2d').drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
	
	      var img = document.createElement("img");
	      img.src = canvas.toDataURL();
	      //document.querySelector('#output').appendChild(img);
	      this.state.captures.push(img);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('video', { muted: 'true', autoplay: '', ref: function ref(r) {
	            return _this2._video = r;
	          }, src: this.state.videoSrc }),
	        _react2.default.createElement(
	          'button',
	          { id: 'capture', onClick: this.captureImage },
	          'Capture'
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'output' },
	          this.state.captures.map(function (img) {
	            return img;
	          })
	        )
	      );
	    }
	  }]);
	
	  return CameraComponent;
	}(_react2.default.Component);
	
	exports.default = CameraComponent;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 254); if (makeExportsHot(module, __webpack_require__(/*! react */ 150))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CameraComponent.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 4)(module)))

/***/ }

})
//# sourceMappingURL=0.fc5dac0c9c12a40ae783.hot-update.js.map