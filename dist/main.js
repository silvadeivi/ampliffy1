/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 711:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Debugger = void 0;
var app_1 = __webpack_require__(755);
var Debugger = /** @class */ (function () {
    function Debugger() {
        this.container = document.createElement('div');
        this.container.id = 'debugger';
        app_1.app === null || app_1.app === void 0 ? void 0 : app_1.app.appendChild(this.container);
    }
    Debugger.prototype.update = function () {
        var _this = this;
        this.container.innerHTML = '';
        app_1.domObjects.map(function (current, index) {
            var object = document.createElement('div');
            object.classList.add('debug-element');
            object.innerHTML = current.name.toUpperCase() + '</br>Width: ' + current.width + '</br>Height: ' + current.height;
            _this.container.appendChild(object);
        });
    };
    Debugger.prototype.test = function () {
        return this.container;
    };
    return Debugger;
}());
exports.Debugger = Debugger;


/***/ }),

/***/ 755:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.debug = exports.domObjects = exports.app = void 0;
var Debugger_1 = __webpack_require__(711);
var app = document.getElementById('app');
exports.app = app;
var debug = new Debugger_1.Debugger();
exports.debug = debug;
var domObjects = [];
exports.domObjects = domObjects;


/***/ }),

/***/ 964:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.domObject = void 0;
var app_1 = __webpack_require__(755);
var resizeObserver_1 = __webpack_require__(796);
var domObject = /** @class */ (function () {
    function domObject() {
        var index = app_1.domObjects.length;
        this.id = 'element-' + index.toString();
        this.name = 'Elemento ' + index.toString();
        this.htmlElement = document.createElement('div');
        resizeObserver_1.resizeObserver.observe(this.htmlElement);
        app_1.debug.update();
    }
    domObject.prototype.render = function (content) {
        if (content === void 0) { content = ''; }
        this.htmlElement.classList.add('element');
        this.htmlElement.id = this.id;
        this.htmlElement.setAttribute('data-id', this.name);
        this.width = this.htmlElement.offsetWidth;
        this.height = this.htmlElement.offsetHeight;
        this.content = content;
        this.htmlElement.innerHTML = "".concat(this.content);
        app_1.app === null || app_1.app === void 0 ? void 0 : app_1.app.appendChild(this.htmlElement);
    };
    domObject.prototype.update = function (content) {
        this.content = content;
        this.htmlElement.innerHTML = "".concat(this.content);
    };
    return domObject;
}());
exports.domObject = domObject;


/***/ }),

/***/ 796:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resizeObserver = void 0;
var app_1 = __webpack_require__(755);
var resizeObserver = new ResizeObserver(function (entries) {
    entries.map(function (current, index) {
        app_1.domObjects[index].width = current.contentRect.width;
        app_1.domObjects[index].height = current.contentRect.height;
    });
    app_1.debug.update();
});
exports.resizeObserver = resizeObserver;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var app_1 = __webpack_require__(755);
var domObject_1 = __webpack_require__(964);
var docelement1 = new domObject_1.domObject;
docelement1.render('Lorem Ipsumo dolor sit ammet');
app_1.domObjects.push(docelement1);
docelement1.render('Otro text diferente');
docelement1.update('Cambio de texto por otro adicional via objeto');
console.log('Objects Array');
console.log(app_1.domObjects);

})();

/******/ })()
;