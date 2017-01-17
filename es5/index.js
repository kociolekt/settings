'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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