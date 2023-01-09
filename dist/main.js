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
            object.innerHTML = current.name + '</br>Width: ' + current.width + '</br>Height: ' + current.height + '</br>Visible: ' + current.visibility;
            _this.container.appendChild(object);
        });
    };
    return Debugger;
}());
exports.Debugger = Debugger;
;


/***/ }),

/***/ 652:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Input = void 0;
var Input = /** @class */ (function () {
    function Input() {
        this.container = document.createElement('form');
        this.input = document.createElement('textarea');
    }
    Input.prototype.render = function (target, container) {
        var _this = this;
        var htmlForm = container.appendChild(this.container);
        var button = document.createElement('button');
        this.target = target;
        this.input.value = target.content;
        button.type = 'submit';
        button.innerHTML = 'Submit';
        htmlForm.appendChild(this.input);
        htmlForm.appendChild(button);
        htmlForm.addEventListener('submit', function (e) {
            e.preventDefault();
            target.update(_this.input.value);
        });
    };
    return Input;
}());
exports.Input = Input;


/***/ }),

/***/ 755:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mainContent = exports.domObjects = exports.debug = exports.app = void 0;
var Debugger_1 = __webpack_require__(711);
var app = document.getElementById('app');
exports.app = app;
var mainContent = document.createElement('div');
exports.mainContent = mainContent;
mainContent.id = "main";
app.append(mainContent);
var debug = new Debugger_1.Debugger;
exports.debug = debug;
var domObjects = [];
exports.domObjects = domObjects;


/***/ }),

/***/ 886:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Menu = void 0;
var app_1 = __webpack_require__(755);
var Inputs_1 = __webpack_require__(652);
var Menu = /** @class */ (function () {
    function Menu() {
        var _this = this;
        this.container = document.createElement('div');
        var button = document.createElement('button');
        button.append(icon('edit', ''));
        button.append(icon('arrow-down', 'close'));
        this.container.id = 'forms-menu';
        app_1.app.appendChild(this.container);
        var htmlButton = this.container.appendChild(button);
        htmlButton.addEventListener('click', function () {
            console.log(_this.container);
            if (_this.container.classList.contains('active')) {
                _this.container.classList.remove('active');
            }
            else {
                _this.container.classList.add('active');
            }
            ;
        });
        app_1.domObjects.map(function (current, index) {
            var input = new Inputs_1.Input;
            input.render(current, _this.container);
        });
    }
    return Menu;
}());
exports.Menu = Menu;
function icon(icon, classes) {
    if (classes === void 0) { classes = ''; }
    var svg;
    switch (icon) {
        case 'arrow-down': {
            svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>';
            break;
        }
        case 'edit': {
            svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z"/></svg>';
            break;
        }
        default: {
            throw console.error('No icon selected for icon function call');
        }
    }
    var domIcon = document.createElement('i');
    domIcon.classList.add('icon');
    if (classes) {
        var classesArr = classes.split(' ');
        classesArr.forEach(function (cssclass) {
            domIcon.classList.add(cssclass);
        });
    }
    domIcon.innerHTML = svg;
    return domIcon;
}


/***/ }),

/***/ 964:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.domObject = void 0;
var app_1 = __webpack_require__(755);
var resizeObserver_1 = __webpack_require__(796);
var visibleObserver_1 = __webpack_require__(442);
var domObject = /** @class */ (function () {
    function domObject(id, name, htmlElement, content) {
        if (id === void 0) { id = ''; }
        if (name === void 0) { name = ''; }
        if (htmlElement === void 0) { htmlElement = document.createElement('div'); }
        if (content === void 0) { content = ''; }
        var index = app_1.domObjects.length;
        this.id = id != null ? 'element-' + index.toString() : id;
        this.name = name != null ? 'Elemento ' + index.toString() : name;
        this.htmlElement = htmlElement != null ? document.createElement('div') : htmlElement;
        this.content = content != null ? '' : content;
        //dataBind(this.htmlElement, this);
        resizeObserver_1.resizeObserver.observe(this.htmlElement);
        app_1.debug.update();
        app_1.domObjects.push(this);
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
        app_1.mainContent === null || app_1.mainContent === void 0 ? void 0 : app_1.mainContent.appendChild(this.htmlElement);
        visibleObserver_1.intersectionObserver.observe(this.htmlElement);
    };
    domObject.prototype.update = function (content) {
        this.content = content;
        this.htmlElement.innerHTML = "".concat(this.content);
    };
    return domObject;
}());
exports.domObject = domObject;


/***/ }),

/***/ 833:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.historical = void 0;
var app_1 = __webpack_require__(755);
var History = /** @class */ (function () {
    function History() {
        this.items = [];
        this.divHistory = document.createElement('div');
        this.divHistory.id = 'history';
        app_1.app.append(this.divHistory);
    }
    History.prototype.updateItem = function (historyItem) {
        this.items.push(historyItem);
        this.render();
    };
    History.prototype.render = function () {
        var _this = this;
        var domItemElements = '';
        this.items.map(function (item) {
            var domItemElement = document.createElement('div');
            domItemElement.classList.add('history-item');
            domItemElement.innerHTML = "\n                <span><strong>Element:</strong> ".concat(item.element.name, "</br></span>\n                <span><strong>Fecha:</strong> ").concat(item.date, "</br></span>\n                <span><strong>Observer:</strong> ").concat(item.observer, "</br></span>\n            ");
            _this.divHistory.append(domItemElement);
            _this.divHistory.scrollTop = _this.divHistory.scrollHeight;
        });
    };
    return History;
}());
exports.historical = new History;


/***/ }),

/***/ 796:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resizeObserver = void 0;
var app_1 = __webpack_require__(755);
var history_1 = __webpack_require__(833);
var resizeObserver = new ResizeObserver(function (entries) {
    entries.map(function (current, index) {
        app_1.domObjects.filter(function (obj) {
            if (current.target === obj.htmlElement) {
                obj.width = current.contentRect.width;
                obj.height = current.contentRect.height;
                history_1.historical.updateItem({
                    element: obj,
                    date: new Date(),
                    observer: "Resize: ".concat(obj.width, " ").concat(obj.height)
                });
            }
        });
    });
    app_1.debug.update();
});
exports.resizeObserver = resizeObserver;


/***/ }),

/***/ 442:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.intersectionObserver = void 0;
var app_1 = __webpack_require__(755);
var history_1 = __webpack_require__(833);
var intersectionObserver = new IntersectionObserver(function (entries) {
    //if (entries[0].intersectionRatio <= 0) return;
    entries.map(function (current, index) {
        app_1.domObjects.filter(function (obj) {
            //obj.visibility = (current.target === obj.htmlElement);
            console.log(current);
            if (current.target === obj.htmlElement) {
                obj.visibility = current.isIntersecting;
                history_1.historical.updateItem({
                    element: obj,
                    date: new Date(),
                    observer: 'Visible ' + obj.visibility
                });
            }
        });
    });
    app_1.debug.update();
});
exports.intersectionObserver = intersectionObserver;


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
var domObject_1 = __webpack_require__(964);
var configMenu_1 = __webpack_require__(886);
var docelement1 = new domObject_1.domObject;
var docelement2 = new domObject_1.domObject;
docelement1.render('Texto del elemento 1.');
docelement2.render('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget diam at quam tincidunt bibendum. Nulla nec tellus ac dui imperdiet euismod eu sit amet felis.');
var menu = new configMenu_1.Menu();

})();

/******/ })()
;