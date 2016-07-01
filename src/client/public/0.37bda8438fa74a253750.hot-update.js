webpackHotUpdate(0,{

/***/ 258:
/*!******************************************!*\
  !*** ./src/client/app/BaseComponent.jsx ***!
  \******************************************/
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
	
	var BaseComponent = function (_React$Component) {
	  _inherits(BaseComponent, _React$Component);
	
	  function BaseComponent() {
	    _classCallCheck(this, BaseComponent);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseComponent).apply(this, arguments));
	  }
	
	  _createClass(BaseComponent, [{
	    key: '_bind',
	    value: function _bind() {
	      var _this2 = this;
	
	      for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
	        methods[_key] = arguments[_key];
	      }
	
	      methods.forEach(function (method) {
	        return _this2[method] = _this2[method].bind(_this2);
	      });
	    }
	  }, {
	    key: '_checkStatus',
	    value: function _checkStatus(response) {
	      if (response.status >= 200 && response.status < 300) {
	        return response;
	      } else {
	        var error = new Error(response.statusText);
	        error.response = response;
	        throw error;
	      }
	    }
	  }, {
	    key: '_parseJSON',
	    value: function _parseJSON(response) {
	      return response.json();
	    }
	  }, {
	    key: '_dataURItoBlob',
	    value: function _dataURItoBlob(dataURI) {
	      // convert base64/URLEncoded data component to raw binary data held in a string
	      var byteString;
	      if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]);
	
	      // separate out the mime component
	      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
	
	      // write the bytes of the string to a typed array
	      var ia = new Uint8Array(byteString.length);
	      for (var i = 0; i < byteString.length; i++) {
	        ia[i] = byteString.charCodeAt(i);
	      }
	
	      return new Blob([ia], { type: mimeString });
	    }
	  }]);
	
	  return BaseComponent;
	}(_react2.default.Component);
	
	exports.default = BaseComponent;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 254); if (makeExportsHot(module, __webpack_require__(/*! react */ 150))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "BaseComponent.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 4)(module)))

/***/ }

})
//# sourceMappingURL=0.37bda8438fa74a253750.hot-update.js.map