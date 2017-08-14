(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.view = new _view2.default();
    }

    _createClass(App, [{
        key: 'init',
        value: function init() {
            this.view.render();
        }
    }]);

    return App;
}();

var app = new App();

window.addEventListener('load', function () {
    return app.init();
});

},{"./view":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var slider = exports.slider = function slider(startVal) {
    return "<input type=\"range\" id=\"timeRange\" value=\"" + startVal + "\">";
};

var mapTemplate = exports.mapTemplate = function mapTemplate(slideVal) {
    return "<div>map will be taking in the slider val somehow i guess: " + slideVal + "</div>";
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templates = require('./templates');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View() {
        _classCallCheck(this, View);

        //templates
        this.map = document.getElementById('map');
        this.slider = document.getElementById('slider');
    }

    _createClass(View, [{
        key: 'render',
        value: function render() {
            var _this = this;

            //initial templates
            this.slider.innerHTML = (0, _templates.slider)(0);
            this.map.innerHTML = (0, _templates.mapTemplate)(0);

            //events
            var range = document.getElementById('timeRange');
            range.addEventListener('input', function () {
                _this.renderMap(range.value);
            });
        }
    }, {
        key: 'renderMap',
        value: function renderMap(val) {
            this.map.innerHTML = (0, _templates.mapTemplate)(val);
        }
    }]);

    return View;
}();

exports.default = View;

},{"./templates":2}]},{},[1]);
