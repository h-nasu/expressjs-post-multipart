webpackHotUpdate(0,{

/***/ 257:
/*!********************************************!*\
  !*** ./src/client/app/CameraComponent.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 77), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 85), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 87), React = __webpack_require__(/*! react */ 150); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
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
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CameraComponent).call(this, props));
	
	    _this.videoElement = document.createElement("video");
	    _this.audioSelect = document.createElement("select");
	    _this.videoSelect = document.createElement("select");
	    _this.state = {
	      videoElement: document.createElement("video"),
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
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.start();
	    }
	  }, {
	    key: "gotSources",
	    value: function gotSources(sourceInfos) {
	      for (var i = 0; i !== sourceInfos.length; ++i) {
	        var sourceInfo = sourceInfos[i];
	        var option = document.createElement('option');
	        option.value = sourceInfo.id;
	        if (sourceInfo.kind === 'audio') {
	          option.text = sourceInfo.label || 'microphone ' + (this.audioSelect.length + 1);
	          this.audioSelect.appendChild(option);
	        } else if (sourceInfo.kind === 'video') {
	          option.text = sourceInfo.label || 'camera ' + (this.videoSelect.length + 1);
	          this.videoSelect.appendChild(option);
	        } else {
	          console.log('Some other kind of source: ', sourceInfo);
	        }
	      }
	    }
	  }, {
	    key: "successCallback",
	    value: function successCallback(stream) {
	      window.stream = stream; // make stream available to console
	      this.state.videoElement.src = window.URL.createObjectURL(stream);
	      this.state.videoElement.play();
	    }
	  }, {
	    key: "errorCallback",
	    value: function errorCallback(error) {
	      console.log('navigator.getUserMedia error: ', error);
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      if (window.stream) {
	        this.state.videoElement.src = null;
	        window.stream.stop();
	      }
	      var audioSource = this.audioSelect.value;
	      var videoSource = this.videoSelect.value;
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
	    key: "captureImage",
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
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        this.state.videoElement,
	        _react2.default.createElement(
	          "button",
	          { id: "capture", onClick: this.captureImage },
	          "Capture"
	        ),
	        _react2.default.createElement(
	          "div",
	          { id: "output" },
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
//# sourceMappingURL=0.7f980ca217469b7cce16.hot-update.js.map