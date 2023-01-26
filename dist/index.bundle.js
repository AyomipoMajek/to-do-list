"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Poppins, sans-serif;\r\n}\r\n\r\nbody {\r\n  box-sizing: border-box;\r\n  border-style: solid;\r\n  border-radius: 10px;\r\n  border-color: #cbcbcb;\r\n  margin-top: 80px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  line-height: 40px;\r\n  background-color: rgb(106, 96, 133);\r\n  box-shadow: 5px 5px 7px rgb(49, 46, 46);\r\n}\r\n\r\nh1 {\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n  background-color: #cbcbcb;\r\n  border-radius: 8px 8px 0 0;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 10px;\r\n  background: #fff;\r\n  padding-left: 5px;\r\n  padding-bottom: 10px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n}\r\n\r\n.fa-arrows-rotate {\r\n  padding-right: 5px;\r\n}\r\n\r\nform input {\r\n  width: 95%;\r\n  height: 100%;\r\n  font-style: italic;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nform button {\r\n  outline: none;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\nform i {\r\n  font-size: 16px;\r\n}\r\n\r\n.each {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: #fff;\r\n  border: none;\r\n}\r\n\r\n#tasks {\r\n  width: 100%;\r\n  height: 10px;\r\n  margin: 0 10px;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 17px;\r\n  padding: 10px 8px;\r\n}\r\n\r\n.item {\r\n  height: 15px;\r\n  width: 20px;\r\n  position: relative;\r\n}\r\n\r\n.goes {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid gray;\r\n  background-color: transparent;\r\n  margin-left: 5px;\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  margin-right: 10px;\r\n}\r\n\r\n.item #checked {\r\n  color: blue;\r\n  display: none;\r\n  font-size: 15px;\r\n}\r\n\r\n.it i {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.it .white {\r\n  display: none;\r\n}\r\n\r\n#trash {\r\n  display: none;\r\n}\r\n\r\n.ic #trash {\r\n  display: block;\r\n  margin-right: 5px;\r\n}\r\n\r\n.ic #more {\r\n  display: none;\r\n}\r\n\r\n.come {\r\n  text-align: center;\r\n  background-color: rgb(203 203 203);\r\n  border-radius: 0 0 8px 8px;\r\n  padding: 8px;\r\n}\r\n\r\n#clear {\r\n  background: transparent;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.check .goes {\r\n  display: none;\r\n}\r\n\r\n.check #checked {\r\n  display: block;\r\n  margin-left: 7px;\r\n}\r\n\r\n.line {\r\n  text-decoration: line-through;\r\n}\r\n\r\n#worr {\r\n  padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px){\r\nbody {\r\n  border-radius: 16px;\r\n  border-color: #cbcbcb;\r\n  margin-top: 80px;\r\n  margin-left: 50px;\r\n  margin-right: 50px;\r\n  line-height: 60px;\r\n  background-color: rgb(106, 96, 133);\r\n  box-shadow: 8px 8px 10px rgb(49, 46, 46);\r\n}\r\n\r\nh1 {\r\n  font-size: 30px;\r\n  padding-left: 20px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n  background-color: #cbcbcb;\r\n  border-radius: 15px 15px 0 0;\r\n  padding: 10px;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 15px;\r\n  background: #fff;\r\n  padding-left: 5px;\r\n  padding-bottom: 15px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n}\r\n\r\nform input {\r\n  width: 95%;\r\n  height: 100%;\r\n  font-style: italic;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 15px;\r\n  padding-left: 20px;\r\n}\r\n\r\n.each {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#tasks {\r\n  margin: 0 30px;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 25px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.goes {\r\n  margin-left: 20px;\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  margin-right: 20px;\r\n}\r\n\r\n#clear {\r\n  font-size: 20px;\r\n}\r\n\r\n.come {\r\n  border-radius: 0 0 15px 15px;\r\n  padding: 10px;\r\n}\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,mCAAmC;EACnC,uCAAuC;AACzC;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,oBAAoB;EACpB,qBAAqB;EACrB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,aAAa;EACb,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,MAAM;AACR;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;AACA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,mCAAmC;EACnC,wCAAwC;AAC1C;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,qBAAqB;EACrB,yBAAyB;EACzB,4BAA4B;EAC5B,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,YAAY;EACZ,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,4BAA4B;EAC5B,aAAa;AACf;;AAEA","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Poppins, sans-serif;\r\n}\r\n\r\nbody {\r\n  box-sizing: border-box;\r\n  border-style: solid;\r\n  border-radius: 10px;\r\n  border-color: #cbcbcb;\r\n  margin-top: 80px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  line-height: 40px;\r\n  background-color: rgb(106, 96, 133);\r\n  box-shadow: 5px 5px 7px rgb(49, 46, 46);\r\n}\r\n\r\nh1 {\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n  background-color: #cbcbcb;\r\n  border-radius: 8px 8px 0 0;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 10px;\r\n  background: #fff;\r\n  padding-left: 5px;\r\n  padding-bottom: 10px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n}\r\n\r\n.fa-arrows-rotate {\r\n  padding-right: 5px;\r\n}\r\n\r\nform input {\r\n  width: 95%;\r\n  height: 100%;\r\n  font-style: italic;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nform button {\r\n  outline: none;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\nform i {\r\n  font-size: 16px;\r\n}\r\n\r\n.each {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: #fff;\r\n  border: none;\r\n}\r\n\r\n#tasks {\r\n  width: 100%;\r\n  height: 10px;\r\n  margin: 0 10px;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 17px;\r\n  padding: 10px 8px;\r\n}\r\n\r\n.item {\r\n  height: 15px;\r\n  width: 20px;\r\n  position: relative;\r\n}\r\n\r\n.goes {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid gray;\r\n  background-color: transparent;\r\n  margin-left: 5px;\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  margin-right: 10px;\r\n}\r\n\r\n.item #checked {\r\n  color: blue;\r\n  display: none;\r\n  font-size: 15px;\r\n}\r\n\r\n.it i {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.it .white {\r\n  display: none;\r\n}\r\n\r\n#trash {\r\n  display: none;\r\n}\r\n\r\n.ic #trash {\r\n  display: block;\r\n  margin-right: 5px;\r\n}\r\n\r\n.ic #more {\r\n  display: none;\r\n}\r\n\r\n.come {\r\n  text-align: center;\r\n  background-color: rgb(203 203 203);\r\n  border-radius: 0 0 8px 8px;\r\n  padding: 8px;\r\n}\r\n\r\n#clear {\r\n  background: transparent;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.check .goes {\r\n  display: none;\r\n}\r\n\r\n.check #checked {\r\n  display: block;\r\n  margin-left: 7px;\r\n}\r\n\r\n.line {\r\n  text-decoration: line-through;\r\n}\r\n\r\n#worr {\r\n  padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px){\r\nbody {\r\n  border-radius: 16px;\r\n  border-color: #cbcbcb;\r\n  margin-top: 80px;\r\n  margin-left: 50px;\r\n  margin-right: 50px;\r\n  line-height: 60px;\r\n  background-color: rgb(106, 96, 133);\r\n  box-shadow: 8px 8px 10px rgb(49, 46, 46);\r\n}\r\n\r\nh1 {\r\n  font-size: 30px;\r\n  padding-left: 20px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n  background-color: #cbcbcb;\r\n  border-radius: 15px 15px 0 0;\r\n  padding: 10px;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 15px;\r\n  background: #fff;\r\n  padding-left: 5px;\r\n  padding-bottom: 15px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n}\r\n\r\nform input {\r\n  width: 95%;\r\n  height: 100%;\r\n  font-style: italic;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 15px;\r\n  padding-left: 20px;\r\n}\r\n\r\n.each {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#tasks {\r\n  margin: 0 30px;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 25px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.goes {\r\n  margin-left: 20px;\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  margin-right: 20px;\r\n}\r\n\r\n#clear {\r\n  font-size: 20px;\r\n}\r\n\r\n.come {\r\n  border-radius: 0 0 15px 15px;\r\n  padding: 10px;\r\n}\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/form */ "./src/module/form.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_module_form__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/module/checker.js":
/*!*******************************!*\
  !*** ./src/module/checker.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ "./src/module/localstorage.js");


const checker = (te, bo, to) => {
// check
  bo.forEach((e, n) => {
    e.addEventListener('click', () => {
      const parent = e.parentElement;
      parent.classList.add('check');
      const grand = e.parentElement.parentElement;
      const line = grand.querySelector('#tasks');
      line.classList.add('line');
      grand.setAttribute('id', 'completed');

      te.forEach((t, b) => {
        if (b === n) {
          t.completed = true;
        }
        (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__["default"])(te);
      });
    });
  });

  // uncheck
  to.forEach((e, n) => {
    e.addEventListener('click', () => {
      const parent = e.parentElement;
      parent.classList.remove('check');
      const grand = e.parentElement.parentElement;
      const line = grand.querySelector('#tasks');
      line.classList.remove('line');
      grand.removeAttribute('id');
      te.forEach((t, b) => {
        if (b === n) {
          t.completed = false;
        }
        (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__["default"])(te);
      });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checker);

/***/ }),

/***/ "./src/module/form.js":
/*!****************************!*\
  !*** ./src/module/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.js */ "./src/module/localstorage.js");
/* harmony import */ var _showItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showItem.js */ "./src/module/showItem.js");
/* harmony import */ var _checker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checker.js */ "./src/module/checker.js");
/* harmony import */ var _markonreload_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markonreload.js */ "./src/module/markonreload.js");

// import deleteTask from './deleteTask.js';




const form = () => {
  const form = document.querySelector('.form');
  const list = document.querySelector('.list');

  // created an array
  let tasks = [];

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // created an object
    const input = document.querySelector('input');
    if (input.value === '') { return; }
    const task = {
      description: input.value,
      completed: false,
      index: tasks.length + 1,
    };

    // add tasks
    tasks.push(task);
    list.innerHTML = '';
    tasks.map((task) => (0,_showItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(task, list));
    input.value = '';
    (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks);

    (0,_markonreload_js__WEBPACK_IMPORTED_MODULE_3__["default"])(tasks);

    // edit task and change icon
    const pen = document.querySelectorAll('#more');
    pen.forEach((p, y) => {
      p.addEventListener('click', () => {
      // change the icon
        p.parentElement.classList.add('ic');
        const grand = p.parentElement.parentElement;

        // remove list
        const times = document.querySelectorAll('#trash');
        times.forEach((time, n) => {
          time.addEventListener('click', () => {
            time.parentElement.parentElement.remove();
            tasks.forEach((t, m) => {
              if (n === m) {
                tasks = tasks.filter((tee) => tee.index !== t.index);
                console.log(tasks);
                // changeindexs
                tasks.forEach((tep, num) => {
                  tep.index = num + 1;
                });
                (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks);
              }
            });
          });
        });

        // set the input to readonly
        const edit = grand.querySelector('#tasks');
        edit.removeAttribute('readonly');
        edit.focus();

        // change the description in array and LS
        edit.addEventListener('keyup', () => {
          tasks.forEach((e, z) => {
            if (y === z) {
              e.description = edit.value;
              (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks);
            }
          });
        });

        // off the edit function
        const worr = grand.querySelector('#worr');
        worr.addEventListener('submit', (e) => {
          e.preventDefault();
          p.parentElement.classList.remove('ic');
          edit.setAttribute('readonly', 'readonly');
        });
      });
    });

    // check on button
    const box = document.querySelectorAll('.goes');
    const checked = document.querySelectorAll('#checked');
    (0,_checker_js__WEBPACK_IMPORTED_MODULE_2__["default"])(tasks, box, checked);

    // remove all marked tasks
    const clear = document.querySelector('.come');
    clear.addEventListener('click', () => {
      const each = document.querySelectorAll('#completed');
      each.forEach((e/* , n */) => {
        if (e.id === 'completed') {
          e.remove();
        }
        tasks = tasks.filter((t) => t.completed !== true);
        (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks);
      });
    });
  });

  // for reload
  window.addEventListener('load', () => {
    const reshow = JSON.parse(localStorage.getItem('store')) || [];
    tasks.push(...tasks, ...reshow);
    tasks.map((task) => (0,_showItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(task, list));
    (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks);

    // edit task
    const pen = document.querySelectorAll('#more');
    pen.forEach((p, y) => {
      p.addEventListener('click', () => {
      // change the icon
        p.parentElement.classList.add('ic');
        const grand = p.parentElement.parentElement;

        // remove task
        const times = document.querySelectorAll('#trash');
        times.forEach((time, n) => {
          time.addEventListener('click', () => {
            time.parentElement.parentElement.remove();
            tasks.forEach((t, m) => {
              if (n === m) {
                tasks = tasks.filter((tee) => tee.index !== t.index);
                // changeindexs
                tasks.forEach((tep, num) => {
                  tep.index = num + 1;
                });
                (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks);
              }
            });
          });
        });

        // set the input to readonly
        const edit = grand.querySelector('#tasks');
        edit.removeAttribute('readonly');
        edit.focus();

        // change the description in array and LS
        edit.addEventListener('keyup', () => {
          tasks.forEach((e, z) => {
            if (y === z) {
              e.description = edit.value;
              (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks);
            }
          });
        });

        // off the edit function
        const worr = grand.querySelector('#worr');
        worr.addEventListener('submit', (e) => {
          e.preventDefault();
          p.parentElement.classList.remove('change');
          edit.setAttribute('readonly', 'readonly');
        });
      });
      // check on button
      const box = document.querySelectorAll('.goes');
      const checked = document.querySelectorAll('#checked');
      (0,_checker_js__WEBPACK_IMPORTED_MODULE_2__["default"])(tasks, box, checked);

      // remove all marked tasks
      const clear = document.querySelector('.come');
      clear.addEventListener('click', () => {
        const each = document.querySelectorAll('#completed');
        each.forEach((e/* , n */) => {
          if (e.id === 'completed') {
            e.remove();
          }
          tasks = tasks.filter((t) => t.completed !== true);
          (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks);
        });
      });

      (0,_markonreload_js__WEBPACK_IMPORTED_MODULE_3__["default"])(tasks);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/module/localstorage.js":
/*!************************************!*\
  !*** ./src/module/localstorage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateLocalStorage = (tasks) => {
  localStorage.setItem('store', JSON.stringify(tasks));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLocalStorage);

/***/ }),

/***/ "./src/module/markonreload.js":
/*!************************************!*\
  !*** ./src/module/markonreload.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const MOR = (tasks) => {
  tasks.forEach((element, n) => {
    if (element.completed === true) {
      const task = document.querySelectorAll('#tasks');
      task.forEach((task, v) => {
        if (n === v) {
          task.classList.add('line');
          const parent = task.parentElement.parentElement;
          parent.setAttribute('id', 'completed');
          const check = parent.querySelector('.item');
          check.classList.add('check');
        }
      });
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MOR);

/***/ }),

/***/ "./src/module/showItem.js":
/*!********************************!*\
  !*** ./src/module/showItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const display = (array, list) => {
  const view = `
    <div class="item" data-completed ='${array.completed}'>
        <div class='goes'></div>
        <i class="fa-solid fa-check" id='checked'></i>
      </div>
      <form id=worr>
         <input type="text" id="tasks" value= "${array.description}" readonly >
      </form>
      <div class="icons">
          <i class="fa-solid fa-ellipsis-vertical" id="more"></i>
          <i class="fa-solid fa-trash" id="trash"></i>
      </div>`;

  const item = document.createElement('div');
  item.classList.add('each');
  item.innerHTML = view;
  list.appendChild(item);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBQWlCO0FBQ2pCLGdCQUFnQiw0REFBa0I7QUFDbEM7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw0REFBa0I7QUFDaEM7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFPO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDREQUFrQjtBQUM1QixTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSw0REFBRztBQUNULEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDeExuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7QUNKakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxHQUFHOzs7Ozs7Ozs7Ozs7OztBQ2pCbEI7QUFDQTtBQUNBLHlDQUF5QyxnQkFBZ0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsa0JBQWtCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlL2NoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGUvZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZS9sb2NhbHN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGUvbWFya29ucmVsb2FkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlL3Nob3dJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2NiY2JjYjtcXHJcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNiwgOTYsIDEzMyk7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDdweCByZ2IoNDksIDQ2LCA0Nik7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjY2JjYmNiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiY2JjYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2NiY2JjYjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWFycm93cy1yb3RhdGUge1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0IHtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbiB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaSB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5lYWNoIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgcGFkZGluZzogMTBweCA4cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ29lcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mYS1lbGxpcHNpcy12ZXJ0aWNhbCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtICNjaGVja2VkIHtcXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0IGkge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5pdCAud2hpdGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RyYXNoIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pYyAjdHJhc2gge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljICNtb3JlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21lIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDMgMjAzIDIwMyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrIC5nb2VzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVjayAjY2hlY2tlZCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5saW5lIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4jd29yciB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xcclxcbmJvZHkge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2NiY2JjYjtcXHJcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNiwgOTYsIDEzMyk7XFxyXFxuICBib3gtc2hhZG93OiA4cHggOHB4IDEwcHggcmdiKDQ5LCA0NiwgNDYpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2NiY2JjYjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmNiY2I7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6ICNjYmNiY2I7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQge1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5lYWNoIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3Mge1xcclxcbiAgbWFyZ2luOiAwIDMwcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5nb2VzIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZWxsaXBzaXMtdmVydGljYWwge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXIge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE1BQU07QUFDUjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtBQUNmOztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItY29sb3I6ICNjYmNiY2I7XFxyXFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDYsIDk2LCAxMzMpO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCA3cHggcmdiKDQ5LCA0NiwgNDYpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2NiY2JjYjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmNiY2I7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6ICNjYmNiY2I7XFxyXFxufVxcclxcblxcclxcbi5mYS1hcnJvd3Mtcm90YXRlIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGkge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWFjaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0YXNrcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdvZXMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZWxsaXBzaXMtdmVydGljYWwge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSAjY2hlY2tlZCB7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5pdCBpIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXQgLndoaXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0cmFzaCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaWMgI3RyYXNoIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pYyAjbW9yZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzIDIwMyAyMDMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVjayAuZ29lcyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2sgI2NoZWNrZWQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuI3dvcnIge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcXHJcXG5ib2R5IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICBib3JkZXItY29sb3I6ICNjYmNiY2I7XFxyXFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDYsIDk2LCAxMzMpO1xcclxcbiAgYm94LXNoYWRvdzogOHB4IDhweCAxMHB4IHJnYig0OSwgNDYsIDQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6ICNjYmNiY2I7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JjYmNiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjY2JjYmNiO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0IHtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWFjaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzIHtcXHJcXG4gIG1hcmdpbjogMCAzMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ29lcyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWVsbGlwc2lzLXZlcnRpY2FsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZm9ybSBmcm9tICcuL21vZHVsZS9mb3JtJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5mb3JtKCk7XHJcbiIsImltcG9ydCB1cGRhdGVMb2NhbFN0b3JhZ2UgZnJvbSAnLi9sb2NhbHN0b3JhZ2UnO1xyXG5cclxuY29uc3QgY2hlY2tlciA9ICh0ZSwgYm8sIHRvKSA9PiB7XHJcbi8vIGNoZWNrXHJcbiAgYm8uZm9yRWFjaCgoZSwgbikgPT4ge1xyXG4gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcclxuICAgICAgY29uc3QgZ3JhbmQgPSBlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgY29uc3QgbGluZSA9IGdyYW5kLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcycpO1xyXG4gICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcclxuICAgICAgZ3JhbmQuc2V0QXR0cmlidXRlKCdpZCcsICdjb21wbGV0ZWQnKTtcclxuXHJcbiAgICAgIHRlLmZvckVhY2goKHQsIGIpID0+IHtcclxuICAgICAgICBpZiAoYiA9PT0gbikge1xyXG4gICAgICAgICAgdC5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyB1bmNoZWNrXHJcbiAgdG8uZm9yRWFjaCgoZSwgbikgPT4ge1xyXG4gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2snKTtcclxuICAgICAgY29uc3QgZ3JhbmQgPSBlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgY29uc3QgbGluZSA9IGdyYW5kLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcycpO1xyXG4gICAgICBsaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ2xpbmUnKTtcclxuICAgICAgZ3JhbmQucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICB0ZS5mb3JFYWNoKCh0LCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGIgPT09IG4pIHtcclxuICAgICAgICAgIHQuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGVja2VyOyIsImltcG9ydCB1cGRhdGVMb2NhbFN0b3JhZ2UgZnJvbSAnLi9sb2NhbHN0b3JhZ2UuanMnO1xyXG4vLyBpbXBvcnQgZGVsZXRlVGFzayBmcm9tICcuL2RlbGV0ZVRhc2suanMnO1xyXG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL3Nob3dJdGVtLmpzJztcclxuaW1wb3J0IGNoZWNrZXIgZnJvbSAnLi9jaGVja2VyLmpzJztcclxuaW1wb3J0IE1PUiBmcm9tICcuL21hcmtvbnJlbG9hZC5qcyc7XHJcblxyXG5jb25zdCBmb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xyXG5cclxuICAvLyBjcmVhdGVkIGFuIGFycmF5XHJcbiAgbGV0IHRhc2tzID0gW107XHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBjcmVhdGVkIGFuIG9iamVjdFxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IHRhc2sgPSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiBpbnB1dC52YWx1ZSxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgaW5kZXg6IHRhc2tzLmxlbmd0aCArIDEsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGFkZCB0YXNrc1xyXG4gICAgdGFza3MucHVzaCh0YXNrKTtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0YXNrcy5tYXAoKHRhc2spID0+IGRpc3BsYXkodGFzaywgbGlzdCkpO1xyXG4gICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0YXNrcyk7XHJcblxyXG4gICAgTU9SKHRhc2tzKTtcclxuXHJcbiAgICAvLyBlZGl0IHRhc2sgYW5kIGNoYW5nZSBpY29uXHJcbiAgICBjb25zdCBwZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbW9yZScpO1xyXG4gICAgcGVuLmZvckVhY2goKHAsIHkpID0+IHtcclxuICAgICAgcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgLy8gY2hhbmdlIHRoZSBpY29uXHJcbiAgICAgICAgcC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ljJyk7XHJcbiAgICAgICAgY29uc3QgZ3JhbmQgPSBwLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGxpc3RcclxuICAgICAgICBjb25zdCB0aW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0cmFzaCcpO1xyXG4gICAgICAgIHRpbWVzLmZvckVhY2goKHRpbWUsIG4pID0+IHtcclxuICAgICAgICAgIHRpbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRpbWUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKCh0LCBtKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG4gPT09IG0pIHtcclxuICAgICAgICAgICAgICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKCh0ZWUpID0+IHRlZS5pbmRleCAhPT0gdC5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2VpbmRleHNcclxuICAgICAgICAgICAgICAgIHRhc2tzLmZvckVhY2goKHRlcCwgbnVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRlcC5pbmRleCA9IG51bSArIDE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIGlucHV0IHRvIHJlYWRvbmx5XHJcbiAgICAgICAgY29uc3QgZWRpdCA9IGdyYW5kLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcycpO1xyXG4gICAgICAgIGVkaXQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xyXG4gICAgICAgIGVkaXQuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgLy8gY2hhbmdlIHRoZSBkZXNjcmlwdGlvbiBpbiBhcnJheSBhbmQgTFNcclxuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGFza3MuZm9yRWFjaCgoZSwgeikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeSA9PT0geikge1xyXG4gICAgICAgICAgICAgIGUuZGVzY3JpcHRpb24gPSBlZGl0LnZhbHVlO1xyXG4gICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBvZmYgdGhlIGVkaXQgZnVuY3Rpb25cclxuICAgICAgICBjb25zdCB3b3JyID0gZ3JhbmQucXVlcnlTZWxlY3RvcignI3dvcnInKTtcclxuICAgICAgICB3b3JyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBwLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaWMnKTtcclxuICAgICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNoZWNrIG9uIGJ1dHRvblxyXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvZXMnKTtcclxuICAgIGNvbnN0IGNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2hlY2tlZCcpO1xyXG4gICAgY2hlY2tlcih0YXNrcywgYm94LCBjaGVja2VkKTtcclxuXHJcbiAgICAvLyByZW1vdmUgYWxsIG1hcmtlZCB0YXNrc1xyXG4gICAgY29uc3QgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tZScpO1xyXG4gICAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29tcGxldGVkJyk7XHJcbiAgICAgIGVhY2guZm9yRWFjaCgoZS8qICwgbiAqLykgPT4ge1xyXG4gICAgICAgIGlmIChlLmlkID09PSAnY29tcGxldGVkJykge1xyXG4gICAgICAgICAgZS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHQpID0+IHQuY29tcGxldGVkICE9PSB0cnVlKTtcclxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBmb3IgcmVsb2FkXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNob3cgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZScpKSB8fCBbXTtcclxuICAgIHRhc2tzLnB1c2goLi4udGFza3MsIC4uLnJlc2hvdyk7XHJcbiAgICB0YXNrcy5tYXAoKHRhc2spID0+IGRpc3BsYXkodGFzaywgbGlzdCkpO1xyXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuXHJcbiAgICAvLyBlZGl0IHRhc2tcclxuICAgIGNvbnN0IHBlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtb3JlJyk7XHJcbiAgICBwZW4uZm9yRWFjaCgocCwgeSkgPT4ge1xyXG4gICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAvLyBjaGFuZ2UgdGhlIGljb25cclxuICAgICAgICBwLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWMnKTtcclxuICAgICAgICBjb25zdCBncmFuZCA9IHAucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGFza1xyXG4gICAgICAgIGNvbnN0IHRpbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3RyYXNoJyk7XHJcbiAgICAgICAgdGltZXMuZm9yRWFjaCgodGltZSwgbikgPT4ge1xyXG4gICAgICAgICAgdGltZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGltZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRhc2tzLmZvckVhY2goKHQsIG0pID0+IHtcclxuICAgICAgICAgICAgICBpZiAobiA9PT0gbSkge1xyXG4gICAgICAgICAgICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRlZSkgPT4gdGVlLmluZGV4ICE9PSB0LmluZGV4KTtcclxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZWluZGV4c1xyXG4gICAgICAgICAgICAgICAgdGFza3MuZm9yRWFjaCgodGVwLCBudW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGVwLmluZGV4ID0gbnVtICsgMTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgaW5wdXQgdG8gcmVhZG9ubHlcclxuICAgICAgICBjb25zdCBlZGl0ID0gZ3JhbmQucXVlcnlTZWxlY3RvcignI3Rhc2tzJyk7XHJcbiAgICAgICAgZWRpdC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XHJcbiAgICAgICAgZWRpdC5mb2N1cygpO1xyXG5cclxuICAgICAgICAvLyBjaGFuZ2UgdGhlIGRlc2NyaXB0aW9uIGluIGFycmF5IGFuZCBMU1xyXG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0YXNrcy5mb3JFYWNoKChlLCB6KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh5ID09PSB6KSB7XHJcbiAgICAgICAgICAgICAgZS5kZXNjcmlwdGlvbiA9IGVkaXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIG9mZiB0aGUgZWRpdCBmdW5jdGlvblxyXG4gICAgICAgIGNvbnN0IHdvcnIgPSBncmFuZC5xdWVyeVNlbGVjdG9yKCcjd29ycicpO1xyXG4gICAgICAgIHdvcnIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHAucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaGFuZ2UnKTtcclxuICAgICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gY2hlY2sgb24gYnV0dG9uXHJcbiAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb2VzJyk7XHJcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2hlY2tlZCcpO1xyXG4gICAgICBjaGVja2VyKHRhc2tzLCBib3gsIGNoZWNrZWQpO1xyXG5cclxuICAgICAgLy8gcmVtb3ZlIGFsbCBtYXJrZWQgdGFza3NcclxuICAgICAgY29uc3QgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tZScpO1xyXG4gICAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBlYWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbXBsZXRlZCcpO1xyXG4gICAgICAgIGVhY2guZm9yRWFjaCgoZS8qICwgbiAqLykgPT4ge1xyXG4gICAgICAgICAgaWYgKGUuaWQgPT09ICdjb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgICAgIGUucmVtb3ZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodCkgPT4gdC5jb21wbGV0ZWQgIT09IHRydWUpO1xyXG4gICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBNT1IodGFza3MpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtOyIsImNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9ICh0YXNrcykgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZScsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVMb2NhbFN0b3JhZ2U7IiwiY29uc3QgTU9SID0gKHRhc2tzKSA9PiB7XHJcbiAgdGFza3MuZm9yRWFjaCgoZWxlbWVudCwgbikgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQuY29tcGxldGVkID09PSB0cnVlKSB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdGFza3MnKTtcclxuICAgICAgdGFzay5mb3JFYWNoKCh0YXNrLCB2KSA9PiB7XHJcbiAgICAgICAgaWYgKG4gPT09IHYpIHtcclxuICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gdGFzay5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICBwYXJlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb21wbGV0ZWQnKTtcclxuICAgICAgICAgIGNvbnN0IGNoZWNrID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtJyk7XHJcbiAgICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNT1I7IiwiY29uc3QgZGlzcGxheSA9IChhcnJheSwgbGlzdCkgPT4ge1xyXG4gIGNvbnN0IHZpZXcgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIGRhdGEtY29tcGxldGVkID0nJHthcnJheS5jb21wbGV0ZWR9Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdnb2VzJz48L2Rpdj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZWNrXCIgaWQ9J2NoZWNrZWQnPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb3JtIGlkPXdvcnI+XHJcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFza3NcIiB2YWx1ZT0gXCIke2FycmF5LmRlc2NyaXB0aW9ufVwiIHJlYWRvbmx5ID5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvbnNcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWxcIiBpZD1cIm1vcmVcIj48L2k+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCIgaWQ9XCJ0cmFzaFwiPjwvaT5cclxuICAgICAgPC9kaXY+YDtcclxuXHJcbiAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZWFjaCcpO1xyXG4gIGl0ZW0uaW5uZXJIVE1MID0gdmlldztcclxuICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==