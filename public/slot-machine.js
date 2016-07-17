var home =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Machine = __webpack_require__(1);
	
	var _Machine2 = _interopRequireDefault(_Machine);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var symbols = ['A', 'A', 'A', 'D', 'E'];
	
	var machine = new _Machine2.default(20, symbols);
	
	document.getElementById('start').addEventListener('click', function () {
	  return machine.startAnimation();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Reel = __webpack_require__(2);
	
	var _Reel2 = _interopRequireDefault(_Reel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Machine = function () {
	  function Machine(length, symbols) {
	    _classCallCheck(this, Machine);
	
	    this.symbols = symbols;
	    this.symbolsInReel = length;
	
	    this.init();
	  }
	
	  _createClass(Machine, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      var nodes = this._getNodesArray(document.querySelectorAll('[data-reel]'));
	      this.reels = nodes.map(function (el) {
	        return _this.createReel(_this.symbolsInReel, el, _this.symbols);
	      });
	    }
	  }, {
	    key: 'createReel',
	    value: function createReel(length, node, symbols) {
	      return new _Reel2.default(length, node, symbols);
	    }
	  }, {
	    key: 'startAnimation',
	    value: function startAnimation() {
	      this.result = this.reels.map(function (reel) {
	        return reel.animate();
	      });
	
	      if (this.checkResult(this.result)) {
	        document.body.style.backgroundColor = 'green';
	      } else {
	        document.body.style.backgroundColor = '#ececec';
	      }
	
	      console.log(this.checkResult(this.reels));
	    }
	  }, {
	    key: '_getNodesArray',
	    value: function _getNodesArray(nodeList) {
	      return Array.prototype.map.call(nodeList, function (el) {
	        return el;
	      });
	    }
	  }, {
	    key: 'checkResult',
	    value: function checkResult(resultArray) {
	      var isWin = false;
	      for (var i = 0; i < resultArray.length - 1; i++) {
	        isWin = resultArray[i] === resultArray[i + 1];
	        if (isWin === false) break;
	      }
	      return isWin;
	    }
	  }]);
	
	  return Machine;
	}();
	
	exports.default = Machine;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ReelElement = __webpack_require__(3);
	
	var _ReelElement2 = _interopRequireDefault(_ReelElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Reel = function () {
	  function Reel(countOfElements, node, symbols) {
	    _classCallCheck(this, Reel);
	
	    this.countOfElements = countOfElements;
	    this.node = node;
	    this.arrayOfSymbols = symbols;
	    this.id = node.getAttribute('data-reel');
	    this.symbolHeight = 200;
	    this.currentSymbolPosition = 1;
	    this.realArrayOfSymbols = this._createSymbolsArray();
	
	    this.init();
	  }
	
	  _createClass(Reel, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      var container = this.node.appendChild(document.createElement('div'));
	
	      this.realArrayOfSymbols.map(function (symbol) {
	        return _this._createElement(symbol, container);
	      });
	
	      this.node.appendChild(container.cloneNode(true));
	
	      this.node.scrollTop = this.symbolHeight / 2;
	      this.isAnimating = false;
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      if (this.isAnimating) return;
	      this.isAnimating = true;
	
	      var self = this,
	          duration = 1500,
	
	      // delay = 250 * this.id,
	      elementsToScroll = Math.random() * 4 + 15 | 0,
	          node = this.node,
	          currentScroll = this.node.scrollTop;
	
	      this.currentSymbolPosition += elementsToScroll;
	      this.currentSymbolPosition = this.currentSymbolPosition > this.realArrayOfSymbols.length - 1 ? this.currentSymbolPosition - this.realArrayOfSymbols.length : this.currentSymbolPosition;
	
	      this.animateHelper({
	        duration: duration,
	        timing: self.timingFunction,
	        draw: function draw(progress) {
	          if (node.scrollTop > node.scrollTopMax / 2) {
	            currentScroll = currentScroll - self.node.scrollTopMax / 2 - self.symbolHeight;
	            // ++self.currentSymbolPosition;
	          }
	
	          var scrollTop = elementsToScroll * self.symbolHeight * progress;
	          node.scrollTop = currentScroll + scrollTop;
	        }
	      });
	
	      return this.getCurrentSymbol();
	    }
	  }, {
	    key: 'timingFunction',
	    value: function timingFunction(timeFraction) {
	      return Math.pow(timeFraction, 2);
	    }
	  }, {
	    key: 'animateHelper',
	    value: function animateHelper(options) {
	      var self = this;
	
	      var start = performance.now();
	
	      requestAnimationFrame(function animate(time) {
	        var timeFraction = (time - start) / options.duration;
	        if (timeFraction > 1) timeFraction = 1;
	
	        var progress = options.timing(timeFraction);
	        options.draw(progress);
	
	        if (timeFraction < 1) {
	          requestAnimationFrame(animate);
	        } else {
	          self.isAnimating = false;
	        }
	      });
	    }
	  }, {
	    key: '_createSymbolsArray',
	    value: function _createSymbolsArray() {
	      var arr = [],
	          divisionResult = Math.ceil(this.countOfElements / this.arrayOfSymbols.length);
	
	      for (var i = 0; i < divisionResult; i++) {
	        var _arr;
	
	        (_arr = arr).push.apply(_arr, _toConsumableArray(this.arrayOfSymbols));
	      }
	      arr = arr.length > this.countOfElements ? arr.slice(0, this.countOfElements) : arr;
	
	      return arr.sort(function () {
	        return Math.random() - .5;
	      });
	    }
	  }, {
	    key: '_createElement',
	    value: function _createElement(symbol, destination) {
	      return new _ReelElement2.default(symbol, destination, this.symbolHeight);
	    }
	  }, {
	    key: 'getCurrentSymbol',
	    value: function getCurrentSymbol() {
	      return this.realArrayOfSymbols[this.currentSymbolPosition];
	    }
	  }]);
	
	  return Reel;
	}();
	
	exports.default = Reel;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ReelElement = function () {
	  function ReelElement(symbol, destination, symbolHeight) {
	    _classCallCheck(this, ReelElement);
	
	    this.symbol = symbol;
	    this.destination = destination;
	    this.symbolHeight = symbolHeight;
	
	    this.init();
	  }
	
	  _createClass(ReelElement, [{
	    key: 'init',
	    value: function init() {
	      var path = 'url(\'static/assets/symbol' + this.symbol + '.png\')';
	
	      var div = document.createElement('div');
	      div.className = "machine__symbol";
	      div.setAttribute('data-symbol', this.symbol);
	      div.style.backgroundImage = path;
	      div.style.height = this.symbolHeight + 'px';
	
	      this.destination.appendChild(div);
	    }
	  }]);
	
	  return ReelElement;
	}();
	
	exports.default = ReelElement;

/***/ }
/******/ ]);
//# sourceMappingURL=slot-machine.js.map