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
	
	var _BaseComponent2 = __webpack_require__(/*! ./BaseComponent.jsx */ 258);
	
	var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//export default class CameraComponent extends React.Component {
	var CameraComponent = function (_BaseComponent) {
	  _inherits(CameraComponent, _BaseComponent);
	
	  function CameraComponent(props) {
	    _classCallCheck(this, CameraComponent);
	
	    //this.videoElement = React.createElement("video");
	    //this.gotSources = this.gotSources.bind(this);
	    //this.successCallback = this.successCallback.bind(this);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CameraComponent).call(this, props));
	
	    _this._bind('_gotSources', '_successCallback', '_errorCallback', '_start', '_captureImage');
	
	    _this.audioSelect = [];
	    _this.videoSelect = [];
	    _this.state = {
	      videoSrc: '',
	      captures: []
	    };
	    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
	
	    if (typeof MediaStreamTrack === 'undefined' || typeof MediaStreamTrack.getSources === 'undefined') {
	      alert('This browser does not support MediaStreamTrack.\n\nTry Chrome.');
	    } else {
	      MediaStreamTrack.getSources(_this.gotSources);
	    }
	
	    return _this;
	  }
	
	  _createClass(CameraComponent, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.start();
	    }
	  }, {
	    key: '_gotSources',
	    value: function _gotSources(sourceInfos) {
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
	    key: '_successCallback',
	    value: function _successCallback(stream) {
	      window.stream = stream; // make stream available to console
	      this.setState({ videoSrc: window.URL.createObjectURL(stream) });
	      this._video.play();
	      //console.log(this.audioSelect);
	      //console.log(this.videoSelect);
	      //this.videoElement.play();
	    }
	  }, {
	    key: '_errorCallback',
	    value: function _errorCallback(error) {
	      console.log('navigator.getUserMedia error: ', error);
	    }
	  }, {
	    key: '_start',
	    value: function _start() {
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
	      navigator.getUserMedia(constraints, this._successCallback, this._errorCallback);
	    }
	  }, {
	    key: '_captureImage',
	    value: function _captureImage() {
	      var scale = this.props.scale;
	      var canvas = _react2.default.createElement("canvas");
	      canvas.width = this._video.videoWidth * scale;
	      canvas.height = this._video.videoHeight * scale;
	      canvas.getContext('2d').drawImage(this._video, 0, 0, canvas.width, canvas.height);
	
	      var img = _react2.default.createElement("img");
	      img.src = canvas.toDataURL();
	      //document.querySelector('#output').appendChild(img);
	      //this.state.captures.push(img);
	      this.setState({ captures: this.state.captures.push(img) });
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
	}(_BaseComponent3.default);
	
	exports.default = CameraComponent;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 254); if (makeExportsHot(module, __webpack_require__(/*! react */ 150))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CameraComponent.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 4)(module)))

/***/ }

})
//# sourceMappingURL=0.23b5e2024d672d4d1ff3.hot-update.js.map