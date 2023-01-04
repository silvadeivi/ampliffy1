"use strict";
var app = document.getElementById('app');
var domObjects = [];
var domObject = /** @class */ (function () {
    function domObject() {
        var index = domObjects.length;
        var element = document.createElement('div');
        var name = 'element-' + index.toString();
        element.classList.add('element');
        element.id = name;
        app === null || app === void 0 ? void 0 : app.appendChild(element);
        domObjects.push({ index: index, name: name });
        console.log(domObjects);
    }
    return domObject;
}());
var docelement1 = new domObject;
