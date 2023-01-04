"use strict";
var app = document.getElementById('app');
var domObjects = [];
var resizeObserver = new ResizeObserver(function (entries) {
    console.log(entries);
});
var domObject = /** @class */ (function () {
    function domObject() {
        var index = domObjects.length;
        var element = document.createElement('div');
        var name = 'element-' + index.toString();
        element.classList.add('element');
        element.id = name;
        app === null || app === void 0 ? void 0 : app.appendChild(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        domObjects.push({ name: name, width: width, height: height });
        //domObjects.map(outputArray);
        console.log(domObjects);
        resizeObserver.observe(element);
    }
    return domObject;
}());
var docelement1 = new domObject;
