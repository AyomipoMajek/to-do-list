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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Poppins, sans-serif;\r\n}\r\n\r\nbody {\r\n  box-sizing: border-box;\r\n  border-style: solid;\r\n  border-radius: 10px;\r\n  border-color: #cbcbcb;\r\n  margin-top: 80px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  line-height: 40px;\r\n  background-color: rgb(106, 96, 133);\r\n  box-shadow: 5px 5px 7px rgb(49, 46, 46);\r\n}\r\n\r\nh1 {\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n  background-color: #cbcbcb;\r\n  border-radius: 8px 8px 0 0;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 10px;\r\n  background: #fff;\r\n  padding-left: 5px;\r\n  padding-bottom: 10px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n}\r\n\r\n.fa-arrows-rotate {\r\n  padding-right: 5px;\r\n}\r\n\r\nform input {\r\n  width: 95%;\r\n  height: 100%;\r\n  font-style: italic;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nform button {\r\n  outline: none;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\nform i {\r\n  font-size: 16px;\r\n}\r\n\r\n.each {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: #fff;\r\n  border: none;\r\n}\r\n\r\n#tasks {\r\n  width: 100%;\r\n  height: 10px;\r\n  margin: 0 10px;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 17px;\r\n  padding: 10px 8px;\r\n}\r\n\r\n.item {\r\n  height: 15px;\r\n  width: 20px;\r\n  position: relative;\r\n}\r\n\r\n.goes {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid gray;\r\n  background-color: transparent;\r\n  margin-left: 5px;\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  margin-right: 10px;\r\n}\r\n\r\n.item #checked {\r\n  color: blue;\r\n  display: none;\r\n  font-size: 15px;\r\n}\r\n\r\n.it i {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.it .white {\r\n  display: none;\r\n}\r\n\r\n#trash {\r\n  display: none;\r\n}\r\n\r\n.ic #trash {\r\n  display: block;\r\n  margin-right: 5px;\r\n}\r\n\r\n.ic #more {\r\n  display: none;\r\n}\r\n\r\n.come {\r\n  text-align: center;\r\n  background-color: rgb(203 203 203);\r\n  border-radius: 0 0 8px 8px;\r\n  padding: 8px;\r\n}\r\n\r\n#clear {\r\n  background: transparent;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.check .goes {\r\n  display: none;\r\n}\r\n\r\n.check #checked {\r\n  display: block;\r\n  margin-left: 7px;\r\n}\r\n\r\n.line {\r\n  text-decoration: line-through;\r\n}\r\n\r\n#worr {\r\n  padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    border-radius: 16px;\r\n    border-color: #cbcbcb;\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    line-height: 60px;\r\n    background-color: rgb(106, 96, 133);\r\n    box-shadow: 8px 8px 10px rgb(49, 46, 46);\r\n  }\r\n\r\n  h1 {\r\n    font-size: 30px;\r\n    border-bottom: solid;\r\n    border-color: #cbcbcb;\r\n    background-color: #cbcbcb;\r\n    border-radius: 15px 15px 0 0;\r\n    padding: 10px;\r\n  }\r\n\r\n  form {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-top: 15px;\r\n    background: #fff;\r\n    padding-left: 5px;\r\n    padding-bottom: 15px;\r\n    border-bottom: solid;\r\n    border-color: #cbcbcb;\r\n  }\r\n\r\n  form input {\r\n    width: 95%;\r\n    height: 100%;\r\n    font-style: italic;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 15px;\r\n    padding-left: 20px;\r\n  }\r\n\r\n  .each {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  #tasks {\r\n    margin: 0 30px;\r\n    outline: none;\r\n    border: none;\r\n    font-size: 25px;\r\n    padding-bottom: 20px;\r\n    padding-top: 25px;\r\n  }\r\n\r\n  .goes {\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .fa-ellipsis-vertical {\r\n    margin-right: 20px;\r\n  }\r\n\r\n  #clear {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .come {\r\n    border-radius: 0 0 15px 15px;\r\n    padding: 10px;\r\n  }\r\n\r\n  .check #checked {\r\n    margin-left: 23px;\r\n  }\r\n\r\n  .ic #trash {\r\n    margin-right: 15px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,mCAAmC;EACnC,uCAAuC;AACzC;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,oBAAoB;EACpB,qBAAqB;EACrB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,aAAa;EACb,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,MAAM;AACR;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,mCAAmC;IACnC,wCAAwC;EAC1C;;EAEA;IACE,eAAe;IACf,oBAAoB;IACpB,qBAAqB;IACrB,yBAAyB;IACzB,4BAA4B;IAC5B,aAAa;EACf;;EAEA;IACE,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,oBAAoB;IACpB,qBAAqB;EACvB;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,cAAc;IACd,aAAa;IACb,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,4BAA4B;IAC5B,aAAa;EACf;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;EACpB;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Poppins, sans-serif;\r\n}\r\n\r\nbody {\r\n  box-sizing: border-box;\r\n  border-style: solid;\r\n  border-radius: 10px;\r\n  border-color: #cbcbcb;\r\n  margin-top: 80px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  line-height: 40px;\r\n  background-color: rgb(106, 96, 133);\r\n  box-shadow: 5px 5px 7px rgb(49, 46, 46);\r\n}\r\n\r\nh1 {\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n  background-color: #cbcbcb;\r\n  border-radius: 8px 8px 0 0;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 10px;\r\n  background: #fff;\r\n  padding-left: 5px;\r\n  padding-bottom: 10px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n}\r\n\r\n.fa-arrows-rotate {\r\n  padding-right: 5px;\r\n}\r\n\r\nform input {\r\n  width: 95%;\r\n  height: 100%;\r\n  font-style: italic;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nform button {\r\n  outline: none;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\nform i {\r\n  font-size: 16px;\r\n}\r\n\r\n.each {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: #fff;\r\n  border: none;\r\n}\r\n\r\n#tasks {\r\n  width: 100%;\r\n  height: 10px;\r\n  margin: 0 10px;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 17px;\r\n  padding: 10px 8px;\r\n}\r\n\r\n.item {\r\n  height: 15px;\r\n  width: 20px;\r\n  position: relative;\r\n}\r\n\r\n.goes {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid gray;\r\n  background-color: transparent;\r\n  margin-left: 5px;\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  margin-right: 10px;\r\n}\r\n\r\n.item #checked {\r\n  color: blue;\r\n  display: none;\r\n  font-size: 15px;\r\n}\r\n\r\n.it i {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.it .white {\r\n  display: none;\r\n}\r\n\r\n#trash {\r\n  display: none;\r\n}\r\n\r\n.ic #trash {\r\n  display: block;\r\n  margin-right: 5px;\r\n}\r\n\r\n.ic #more {\r\n  display: none;\r\n}\r\n\r\n.come {\r\n  text-align: center;\r\n  background-color: rgb(203 203 203);\r\n  border-radius: 0 0 8px 8px;\r\n  padding: 8px;\r\n}\r\n\r\n#clear {\r\n  background: transparent;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.check .goes {\r\n  display: none;\r\n}\r\n\r\n.check #checked {\r\n  display: block;\r\n  margin-left: 7px;\r\n}\r\n\r\n.line {\r\n  text-decoration: line-through;\r\n}\r\n\r\n#worr {\r\n  padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    border-radius: 16px;\r\n    border-color: #cbcbcb;\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    line-height: 60px;\r\n    background-color: rgb(106, 96, 133);\r\n    box-shadow: 8px 8px 10px rgb(49, 46, 46);\r\n  }\r\n\r\n  h1 {\r\n    font-size: 30px;\r\n    border-bottom: solid;\r\n    border-color: #cbcbcb;\r\n    background-color: #cbcbcb;\r\n    border-radius: 15px 15px 0 0;\r\n    padding: 10px;\r\n  }\r\n\r\n  form {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-top: 15px;\r\n    background: #fff;\r\n    padding-left: 5px;\r\n    padding-bottom: 15px;\r\n    border-bottom: solid;\r\n    border-color: #cbcbcb;\r\n  }\r\n\r\n  form input {\r\n    width: 95%;\r\n    height: 100%;\r\n    font-style: italic;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 15px;\r\n    padding-left: 20px;\r\n  }\r\n\r\n  .each {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  #tasks {\r\n    margin: 0 30px;\r\n    outline: none;\r\n    border: none;\r\n    font-size: 25px;\r\n    padding-bottom: 20px;\r\n    padding-top: 25px;\r\n  }\r\n\r\n  .goes {\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .fa-ellipsis-vertical {\r\n    margin-right: 20px;\r\n  }\r\n\r\n  #clear {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .come {\r\n    border-radius: 0 0 15px 15px;\r\n    padding: 10px;\r\n  }\r\n\r\n  .check #checked {\r\n    margin-left: 23px;\r\n  }\r\n\r\n  .ic #trash {\r\n    margin-right: 15px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGUvY2hlY2tlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZS9mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlL2xvY2Fsc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZS9tYXJrb25yZWxvYWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGUvc2hvd0l0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjY2JjYmNiO1xcclxcbiAgbWFyZ2luLXRvcDogODBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA2LCA5NiwgMTMzKTtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggN3B4IHJnYig0OSwgNDYsIDQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6ICNjYmNiY2I7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JjYmNiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjY2JjYmNiO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtYXJyb3dzLXJvdGF0ZSB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQge1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVhY2gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3Mge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5nb2VzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWVsbGlwc2lzLXZlcnRpY2FsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0gI2NoZWNrZWQge1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXQgaSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLml0IC53aGl0ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdHJhc2gge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmljICN0cmFzaCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaWMgI21vcmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMyAyMDMgMjAzKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXIge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2sgLmdvZXMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrICNjaGVja2VkIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbiN3b3JyIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2NiY2JjYjtcXHJcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDYsIDk2LCAxMzMpO1xcclxcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDEwcHggcmdiKDQ5LCA0NiwgNDYpO1xcclxcbiAgfVxcclxcblxcclxcbiAgaDEge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNjYmNiY2I7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmNiY2I7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb3JtIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2NiY2JjYjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvcm0gaW5wdXQge1xcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5lYWNoIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Rhc2tzIHtcXHJcXG4gICAgbWFyZ2luOiAwIDMwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ29lcyB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLWVsbGlwc2lzLXZlcnRpY2FsIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2NsZWFyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbWUge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNoZWNrICNjaGVja2VkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaWMgI3RyYXNoIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtF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XCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItY29sb3I6ICNjYmNiY2I7XFxyXFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDYsIDk2LCAxMzMpO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCA3cHggcmdiKDQ5LCA0NiwgNDYpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2NiY2JjYjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmNiY2I7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6ICNjYmNiY2I7XFxyXFxufVxcclxcblxcclxcbi5mYS1hcnJvd3Mtcm90YXRlIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGkge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWFjaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0YXNrcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdvZXMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZWxsaXBzaXMtdmVydGljYWwge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSAjY2hlY2tlZCB7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5pdCBpIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXQgLndoaXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0cmFzaCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaWMgI3RyYXNoIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pYyAjbW9yZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzIDIwMyAyMDMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVjayAuZ29lcyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2sgI2NoZWNrZWQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuI3dvcnIge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjY2JjYmNiO1xcclxcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNiwgOTYsIDEzMyk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDhweCA4cHggMTBweCByZ2IoNDksIDQ2LCA0Nik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2NiY2JjYjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiY2JjYjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvcm0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjY2JjYmNiO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9ybSBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmVhY2gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdGFza3Mge1xcclxcbiAgICBtYXJnaW46IDAgMzBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5nb2VzIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtZWxsaXBzaXMtdmVydGljYWwge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY2xlYXIge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2hlY2sgI2NoZWNrZWQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjNweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pYyAjdHJhc2gge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBmb3JtIGZyb20gJy4vbW9kdWxlL2Zvcm0nO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmZvcm0oKTtcclxuIiwiaW1wb3J0IHVwZGF0ZUxvY2FsU3RvcmFnZSBmcm9tICcuL2xvY2Fsc3RvcmFnZSc7XHJcblxyXG5jb25zdCBjaGVja2VyID0gKHRlLCBibywgdG8pID0+IHtcclxuLy8gY2hlY2tcclxuICBiby5mb3JFYWNoKChlLCBuKSA9PiB7XHJcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSBlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdjaGVjaycpO1xyXG4gICAgICBjb25zdCBncmFuZCA9IGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBjb25zdCBsaW5lID0gZ3JhbmQucXVlcnlTZWxlY3RvcignI3Rhc2tzJyk7XHJcbiAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG4gICAgICBncmFuZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXBsZXRlZCcpO1xyXG5cclxuICAgICAgdGUuZm9yRWFjaCgodCwgYikgPT4ge1xyXG4gICAgICAgIGlmIChiID09PSBuKSB7XHJcbiAgICAgICAgICB0LmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIHVuY2hlY2tcclxuICB0by5mb3JFYWNoKChlLCBuKSA9PiB7XHJcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSBlLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVjaycpO1xyXG4gICAgICBjb25zdCBncmFuZCA9IGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBjb25zdCBsaW5lID0gZ3JhbmQucXVlcnlTZWxlY3RvcignI3Rhc2tzJyk7XHJcbiAgICAgIGxpbmUuY2xhc3NMaXN0LnJlbW92ZSgnbGluZScpO1xyXG4gICAgICBncmFuZC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgIHRlLmZvckVhY2goKHQsIGIpID0+IHtcclxuICAgICAgICBpZiAoYiA9PT0gbikge1xyXG4gICAgICAgICAgdC5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrZXI7IiwiaW1wb3J0IHVwZGF0ZUxvY2FsU3RvcmFnZSBmcm9tICcuL2xvY2Fsc3RvcmFnZS5qcyc7XHJcbi8vIGltcG9ydCBkZWxldGVUYXNrIGZyb20gJy4vZGVsZXRlVGFzay5qcyc7XHJcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vc2hvd0l0ZW0uanMnO1xyXG5pbXBvcnQgY2hlY2tlciBmcm9tICcuL2NoZWNrZXIuanMnO1xyXG5pbXBvcnQgTU9SIGZyb20gJy4vbWFya29ucmVsb2FkLmpzJztcclxuXHJcbmNvbnN0IGZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XHJcblxyXG4gIC8vIGNyZWF0ZWQgYW4gYXJyYXlcclxuICBsZXQgdGFza3MgPSBbXTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIGNyZWF0ZWQgYW4gb2JqZWN0XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3QgdGFzayA9IHtcclxuICAgICAgZGVzY3JpcHRpb246IGlucHV0LnZhbHVlLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBpbmRleDogdGFza3MubGVuZ3RoICsgMSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gYWRkIHRhc2tzXHJcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgbGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIHRhc2tzLm1hcCgodGFzaykgPT4gZGlzcGxheSh0YXNrLCBsaXN0KSk7XHJcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuXHJcbiAgICBNT1IodGFza3MpO1xyXG5cclxuICAgIC8vIGVkaXQgdGFzayBhbmQgY2hhbmdlIGljb25cclxuICAgIGNvbnN0IHBlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtb3JlJyk7XHJcbiAgICBwZW4uZm9yRWFjaCgocCwgeSkgPT4ge1xyXG4gICAgICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAvLyBjaGFuZ2UgdGhlIGljb25cclxuICAgICAgICBwLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWMnKTtcclxuICAgICAgICBjb25zdCBncmFuZCA9IHAucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgbGlzdFxyXG4gICAgICAgIGNvbnN0IHRpbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3RyYXNoJyk7XHJcbiAgICAgICAgdGltZXMuZm9yRWFjaCgodGltZSwgbikgPT4ge1xyXG4gICAgICAgICAgdGltZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGltZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRhc2tzLmZvckVhY2goKHQsIG0pID0+IHtcclxuICAgICAgICAgICAgICBpZiAobiA9PT0gbSkge1xyXG4gICAgICAgICAgICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRlZSkgPT4gdGVlLmluZGV4ICE9PSB0LmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcclxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZWluZGV4c1xyXG4gICAgICAgICAgICAgICAgdGFza3MuZm9yRWFjaCgodGVwLCBudW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGVwLmluZGV4ID0gbnVtICsgMTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgaW5wdXQgdG8gcmVhZG9ubHlcclxuICAgICAgICBjb25zdCBlZGl0ID0gZ3JhbmQucXVlcnlTZWxlY3RvcignI3Rhc2tzJyk7XHJcbiAgICAgICAgZWRpdC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XHJcbiAgICAgICAgZWRpdC5mb2N1cygpO1xyXG5cclxuICAgICAgICAvLyBjaGFuZ2UgdGhlIGRlc2NyaXB0aW9uIGluIGFycmF5IGFuZCBMU1xyXG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0YXNrcy5mb3JFYWNoKChlLCB6KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh5ID09PSB6KSB7XHJcbiAgICAgICAgICAgICAgZS5kZXNjcmlwdGlvbiA9IGVkaXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIG9mZiB0aGUgZWRpdCBmdW5jdGlvblxyXG4gICAgICAgIGNvbnN0IHdvcnIgPSBncmFuZC5xdWVyeVNlbGVjdG9yKCcjd29ycicpO1xyXG4gICAgICAgIHdvcnIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHAucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpYycpO1xyXG4gICAgICAgICAgZWRpdC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2hlY2sgb24gYnV0dG9uXHJcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29lcycpO1xyXG4gICAgY29uc3QgY2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjaGVja2VkJyk7XHJcbiAgICBjaGVja2VyKHRhc2tzLCBib3gsIGNoZWNrZWQpO1xyXG5cclxuICAgIC8vIHJlbW92ZSBhbGwgbWFya2VkIHRhc2tzXHJcbiAgICBjb25zdCBjbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21lJyk7XHJcbiAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgZWFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb21wbGV0ZWQnKTtcclxuICAgICAgZWFjaC5mb3JFYWNoKChlLyogLCBuICovKSA9PiB7XHJcbiAgICAgICAgaWYgKGUuaWQgPT09ICdjb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgICBlLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodCkgPT4gdC5jb21wbGV0ZWQgIT09IHRydWUpO1xyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGZvciByZWxvYWRcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGNvbnN0IHJlc2hvdyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlJykpIHx8IFtdO1xyXG4gICAgdGFza3MucHVzaCguLi50YXNrcywgLi4ucmVzaG93KTtcclxuICAgIHRhc2tzLm1hcCgodGFzaykgPT4gZGlzcGxheSh0YXNrLCBsaXN0KSk7XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG5cclxuICAgIC8vIGVkaXQgdGFza1xyXG4gICAgY29uc3QgcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21vcmUnKTtcclxuICAgIHBlbi5mb3JFYWNoKChwLCB5KSA9PiB7XHJcbiAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIC8vIGNoYW5nZSB0aGUgaWNvblxyXG4gICAgICAgIHAucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpYycpO1xyXG4gICAgICAgIGNvbnN0IGdyYW5kID0gcC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0YXNrXHJcbiAgICAgICAgY29uc3QgdGltZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdHJhc2gnKTtcclxuICAgICAgICB0aW1lcy5mb3JFYWNoKCh0aW1lLCBuKSA9PiB7XHJcbiAgICAgICAgICB0aW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aW1lLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGFza3MuZm9yRWFjaCgodCwgbSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChuID09PSBtKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodGVlKSA9PiB0ZWUuaW5kZXggIT09IHQuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlaW5kZXhzXHJcbiAgICAgICAgICAgICAgICB0YXNrcy5mb3JFYWNoKCh0ZXAsIG51bSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0ZXAuaW5kZXggPSBudW0gKyAxO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBpbnB1dCB0byByZWFkb25seVxyXG4gICAgICAgIGNvbnN0IGVkaXQgPSBncmFuZC5xdWVyeVNlbGVjdG9yKCcjdGFza3MnKTtcclxuICAgICAgICBlZGl0LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcclxuICAgICAgICBlZGl0LmZvY3VzKCk7XHJcblxyXG4gICAgICAgIC8vIGNoYW5nZSB0aGUgZGVzY3JpcHRpb24gaW4gYXJyYXkgYW5kIExTXHJcbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuICAgICAgICAgIHRhc2tzLmZvckVhY2goKGUsIHopID0+IHtcclxuICAgICAgICAgICAgaWYgKHkgPT09IHopIHtcclxuICAgICAgICAgICAgICBlLmRlc2NyaXB0aW9uID0gZWRpdC52YWx1ZTtcclxuICAgICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gb2ZmIHRoZSBlZGl0IGZ1bmN0aW9uXHJcbiAgICAgICAgY29uc3Qgd29yciA9IGdyYW5kLnF1ZXJ5U2VsZWN0b3IoJyN3b3JyJyk7XHJcbiAgICAgICAgd29yci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgcC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgZWRpdC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBjaGVjayBvbiBidXR0b25cclxuICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvZXMnKTtcclxuICAgICAgY29uc3QgY2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjaGVja2VkJyk7XHJcbiAgICAgIGNoZWNrZXIodGFza3MsIGJveCwgY2hlY2tlZCk7XHJcblxyXG4gICAgICAvLyByZW1vdmUgYWxsIG1hcmtlZCB0YXNrc1xyXG4gICAgICBjb25zdCBjbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21lJyk7XHJcbiAgICAgIGNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVhY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29tcGxldGVkJyk7XHJcbiAgICAgICAgZWFjaC5mb3JFYWNoKChlLyogLCBuICovKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZS5pZCA9PT0gJ2NvbXBsZXRlZCcpIHtcclxuICAgICAgICAgICAgZS5yZW1vdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKCh0KSA9PiB0LmNvbXBsZXRlZCAhPT0gdHJ1ZSk7XHJcbiAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIE1PUih0YXNrcyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm07IiwiY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKHRhc2tzKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JlJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUxvY2FsU3RvcmFnZTsiLCJjb25zdCBNT1IgPSAodGFza3MpID0+IHtcclxuICB0YXNrcy5mb3JFYWNoKChlbGVtZW50LCBuKSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0YXNrcycpO1xyXG4gICAgICB0YXNrLmZvckVhY2goKHRhc2ssIHYpID0+IHtcclxuICAgICAgICBpZiAobiA9PT0gdikge1xyXG4gICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XHJcbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXNrLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgIHBhcmVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgICAgY29uc3QgY2hlY2sgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLml0ZW0nKTtcclxuICAgICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1PUjsiLCJjb25zdCBkaXNwbGF5ID0gKGFycmF5LCBsaXN0KSA9PiB7XHJcbiAgY29uc3QgdmlldyA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgZGF0YS1jb21wbGV0ZWQgPScke2FycmF5LmNvbXBsZXRlZH0nPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2dvZXMnPjwvZGl2PlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2hlY2tcIiBpZD0nY2hlY2tlZCc+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvcm0gaWQ9d29ycj5cclxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrc1wiIHZhbHVlPSBcIiR7YXJyYXkuZGVzY3JpcHRpb259XCIgcmVhZG9ubHkgPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uc1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbFwiIGlkPVwibW9yZVwiPjwvaT5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2hcIiBpZD1cInRyYXNoXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5gO1xyXG5cclxuICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaXRlbS5jbGFzc0xpc3QuYWRkKCdlYWNoJyk7XHJcbiAgaXRlbS5pbm5lckhUTUwgPSB2aWV3O1xyXG4gIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9