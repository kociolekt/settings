(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var defaults = {};

var Settings = function () {
  function Settings() {
    _classCallCheck(this, Settings);

    if (Settings.singletonInstance) {
      return Settings.singletonInstance;
    }

    Settings.singletonInstance = this;

    this.load();
  }

  _createClass(Settings, [{
    key: 'load',
    value: function load() {
      this.settings = Object.assign({}, defaults, JSON.parse(localStorage.getItem('settings')));
    }
  }, {
    key: 'save',
    value: function save() {
      localStorage.setItem('settings', JSON.stringify(this.settings));
    }
  }, {
    key: 'option',
    value: function option(key, value) {
      if (value != null) {
        this.settings[key] = value;
        //console.log(this.settings);
        this.save();
      }
      return this.settings[key];
    }
  }]);

  return Settings;
}();

exports.default = Settings;

},{}],2:[function(require,module,exports){
'use strict';

var _index = require('./es5/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = new _index2.default();
// Set option
settings.option('option1', 'lorem ipsum');

// Get option
console.log(settings.option('option1')); // lorem ipsum

},{"./es5/index":1}]},{},[2]);
