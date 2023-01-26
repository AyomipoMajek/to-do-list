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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Poppins, sans-serif;\r\n}\r\n\r\nbody {\r\n  box-sizing: border-box;\r\n  border-style: solid;\r\n  border-radius: 10px;\r\n  border-color: #cbcbcb;\r\n  margin-top: 80px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  line-height: 40px;\r\n  background-color: rgb(106, 96, 133);\r\n  box-shadow: 5px 5px 7px rgb(49, 46, 46);\r\n}\r\n\r\nh1 {\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n  background-color: #cbcbcb;\r\n  border-radius: 8px 8px 0 0;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 10px;\r\n  background: #fff;\r\n  padding-left: 5px;\r\n  padding-bottom: 10px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n}\r\n\r\n.fa-arrows-rotate {\r\n  padding-right: 5px;\r\n}\r\n\r\nform input {\r\n  width: 95%;\r\n  height: 100%;\r\n  font-style: italic;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nform button {\r\n  outline: none;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\nform i {\r\n  font-size: 16px;\r\n}\r\n\r\n.each {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: #fff;\r\n  border: none;\r\n}\r\n\r\n#tasks {\r\n  width: 100%;\r\n  height: 10px;\r\n  margin: 0 10px;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 17px;\r\n  padding: 10px 8px;\r\n}\r\n\r\n.item {\r\n  height: 15px;\r\n  width: 20px;\r\n  position: relative;\r\n}\r\n\r\n.goes {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid gray;\r\n  background-color: transparent;\r\n  margin-left: 5px;\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  margin-right: 10px;\r\n}\r\n\r\n.item #checked {\r\n  color: blue;\r\n  display: none;\r\n  font-size: 15px;\r\n}\r\n\r\n.it i {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.it .white {\r\n  display: none;\r\n}\r\n\r\n#trash {\r\n  display: none;\r\n}\r\n\r\n.ic #trash {\r\n  display: block;\r\n  margin-right: 5px;\r\n}\r\n\r\n.ic #more {\r\n  display: none;\r\n}\r\n\r\n.come {\r\n  text-align: center;\r\n  background-color: rgb(203 203 203);\r\n  border-radius: 0 0 8px 8px;\r\n  padding: 8px;\r\n}\r\n\r\n#clear {\r\n  background: transparent;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.check .goes {\r\n  display: none;\r\n}\r\n\r\n.check #checked {\r\n  display: block;\r\n  margin-left: 7px;\r\n}\r\n\r\n.line {\r\n  text-decoration: line-through;\r\n}\r\n\r\n#worr {\r\n  padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    border-radius: 16px;\r\n    border-color: #cbcbcb;\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    line-height: 60px;\r\n    background-color: rgb(106, 96, 133);\r\n    box-shadow: 8px 8px 10px rgb(49, 46, 46);\r\n  }\r\n\r\n  h1 {\r\n    font-size: 30px;\r\n    border-bottom: solid;\r\n    border-color: #cbcbcb;\r\n    background-color: #cbcbcb;\r\n    border-radius: 15px 15px 0 0;\r\n    padding: 10px;\r\n  }\r\n\r\n  form {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-top: 15px;\r\n    background: #fff;\r\n    padding-left: 5px;\r\n    padding-bottom: 15px;\r\n    border-bottom: solid;\r\n    border-color: #cbcbcb;\r\n  }\r\n\r\n  form input {\r\n    width: 95%;\r\n    height: 100%;\r\n    font-style: italic;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 15px;\r\n    padding-left: 20px;\r\n  }\r\n\r\n  .each {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  #tasks {\r\n    margin: 0 30px;\r\n    outline: none;\r\n    border: none;\r\n    font-size: 25px;\r\n    padding-bottom: 30px;\r\n  }\r\n\r\n  .goes {\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .fa-ellipsis-vertical {\r\n    margin-right: 20px;\r\n  }\r\n\r\n  #clear {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .come {\r\n    border-radius: 0 0 15px 15px;\r\n    padding: 10px;\r\n  }\r\n\r\n  .check #checked {\r\n    margin-left: 23px;\r\n  }\r\n\r\n  .ic #trash {\r\n    margin-right: 15px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,mCAAmC;EACnC,uCAAuC;AACzC;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,oBAAoB;EACpB,qBAAqB;EACrB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,aAAa;EACb,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,MAAM;AACR;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,mCAAmC;IACnC,wCAAwC;EAC1C;;EAEA;IACE,eAAe;IACf,oBAAoB;IACpB,qBAAqB;IACrB,yBAAyB;IACzB,4BAA4B;IAC5B,aAAa;EACf;;EAEA;IACE,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,oBAAoB;IACpB,qBAAqB;EACvB;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,cAAc;IACd,aAAa;IACb,YAAY;IACZ,eAAe;IACf,oBAAoB;EACtB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,4BAA4B;IAC5B,aAAa;EACf;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;EACpB;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Poppins, sans-serif;\r\n}\r\n\r\nbody {\r\n  box-sizing: border-box;\r\n  border-style: solid;\r\n  border-radius: 10px;\r\n  border-color: #cbcbcb;\r\n  margin-top: 80px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  line-height: 40px;\r\n  background-color: rgb(106, 96, 133);\r\n  box-shadow: 5px 5px 7px rgb(49, 46, 46);\r\n}\r\n\r\nh1 {\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n  background-color: #cbcbcb;\r\n  border-radius: 8px 8px 0 0;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 10px;\r\n  background: #fff;\r\n  padding-left: 5px;\r\n  padding-bottom: 10px;\r\n  border-bottom: solid;\r\n  border-color: #cbcbcb;\r\n}\r\n\r\n.fa-arrows-rotate {\r\n  padding-right: 5px;\r\n}\r\n\r\nform input {\r\n  width: 95%;\r\n  height: 100%;\r\n  font-style: italic;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nform button {\r\n  outline: none;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\nform i {\r\n  font-size: 16px;\r\n}\r\n\r\n.each {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: #fff;\r\n  border: none;\r\n}\r\n\r\n#tasks {\r\n  width: 100%;\r\n  height: 10px;\r\n  margin: 0 10px;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 17px;\r\n  padding: 10px 8px;\r\n}\r\n\r\n.item {\r\n  height: 15px;\r\n  width: 20px;\r\n  position: relative;\r\n}\r\n\r\n.goes {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px solid gray;\r\n  background-color: transparent;\r\n  margin-left: 5px;\r\n}\r\n\r\n.fa-ellipsis-vertical {\r\n  margin-right: 10px;\r\n}\r\n\r\n.item #checked {\r\n  color: blue;\r\n  display: none;\r\n  font-size: 15px;\r\n}\r\n\r\n.it i {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.it .white {\r\n  display: none;\r\n}\r\n\r\n#trash {\r\n  display: none;\r\n}\r\n\r\n.ic #trash {\r\n  display: block;\r\n  margin-right: 5px;\r\n}\r\n\r\n.ic #more {\r\n  display: none;\r\n}\r\n\r\n.come {\r\n  text-align: center;\r\n  background-color: rgb(203 203 203);\r\n  border-radius: 0 0 8px 8px;\r\n  padding: 8px;\r\n}\r\n\r\n#clear {\r\n  background: transparent;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.check .goes {\r\n  display: none;\r\n}\r\n\r\n.check #checked {\r\n  display: block;\r\n  margin-left: 7px;\r\n}\r\n\r\n.line {\r\n  text-decoration: line-through;\r\n}\r\n\r\n#worr {\r\n  padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    border-radius: 16px;\r\n    border-color: #cbcbcb;\r\n    margin-top: 80px;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    line-height: 60px;\r\n    background-color: rgb(106, 96, 133);\r\n    box-shadow: 8px 8px 10px rgb(49, 46, 46);\r\n  }\r\n\r\n  h1 {\r\n    font-size: 30px;\r\n    border-bottom: solid;\r\n    border-color: #cbcbcb;\r\n    background-color: #cbcbcb;\r\n    border-radius: 15px 15px 0 0;\r\n    padding: 10px;\r\n  }\r\n\r\n  form {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-top: 15px;\r\n    background: #fff;\r\n    padding-left: 5px;\r\n    padding-bottom: 15px;\r\n    border-bottom: solid;\r\n    border-color: #cbcbcb;\r\n  }\r\n\r\n  form input {\r\n    width: 95%;\r\n    height: 100%;\r\n    font-style: italic;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 15px;\r\n    padding-left: 20px;\r\n  }\r\n\r\n  .each {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  #tasks {\r\n    margin: 0 30px;\r\n    outline: none;\r\n    border: none;\r\n    font-size: 25px;\r\n    padding-bottom: 30px;\r\n  }\r\n\r\n  .goes {\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .fa-ellipsis-vertical {\r\n    margin-right: 20px;\r\n  }\r\n\r\n  #clear {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .come {\r\n    border-radius: 0 0 15px 15px;\r\n    padding: 10px;\r\n  }\r\n\r\n  .check #checked {\r\n    margin-left: 23px;\r\n  }\r\n\r\n  .ic #trash {\r\n    margin-right: 15px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZS9jaGVja2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGUvbG9jYWxzdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlL21hcmtvbnJlbG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZS9zaG93SXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItY29sb3I6ICNjYmNiY2I7XFxyXFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDYsIDk2LCAxMzMpO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCA3cHggcmdiKDQ5LCA0NiwgNDYpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2NiY2JjYjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmNiY2I7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6ICNjYmNiY2I7XFxyXFxufVxcclxcblxcclxcbi5mYS1hcnJvd3Mtcm90YXRlIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGkge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWFjaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0YXNrcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdvZXMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZWxsaXBzaXMtdmVydGljYWwge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSAjY2hlY2tlZCB7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5pdCBpIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXQgLndoaXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0cmFzaCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaWMgI3RyYXNoIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pYyAjbW9yZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzIDIwMyAyMDMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVjayAuZ29lcyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2sgI2NoZWNrZWQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuI3dvcnIge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjY2JjYmNiO1xcclxcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNiwgOTYsIDEzMyk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDhweCA4cHggMTBweCByZ2IoNDksIDQ2LCA0Nik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2NiY2JjYjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiY2JjYjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvcm0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjY2JjYmNiO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9ybSBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmVhY2gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdGFza3Mge1xcclxcbiAgICBtYXJnaW46IDAgMzBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdvZXMge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS1lbGxpcHNpcy12ZXJ0aWNhbCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjbGVhciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21lIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jaGVjayAjY2hlY2tlZCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyM3B4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljICN0cmFzaCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUNB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ZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXItY29sb3I6ICNjYmNiY2I7XFxyXFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDYsIDk2LCAxMzMpO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCA3cHggcmdiKDQ5LCA0NiwgNDYpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2NiY2JjYjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmNiY2I7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6ICNjYmNiY2I7XFxyXFxufVxcclxcblxcclxcbi5mYS1hcnJvd3Mtcm90YXRlIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGkge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWFjaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0YXNrcyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTBweDtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdvZXMge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZWxsaXBzaXMtdmVydGljYWwge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSAjY2hlY2tlZCB7XFxyXFxuICBjb2xvcjogYmx1ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5pdCBpIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXQgLndoaXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0cmFzaCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaWMgI3RyYXNoIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pYyAjbW9yZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAzIDIwMyAyMDMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVjayAuZ29lcyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2sgI2NoZWNrZWQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuI3dvcnIge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjY2JjYmNiO1xcclxcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNiwgOTYsIDEzMyk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDhweCA4cHggMTBweCByZ2IoNDksIDQ2LCA0Nik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2NiY2JjYjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiY2JjYjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvcm0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjY2JjYmNiO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9ybSBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmVhY2gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjdGFza3Mge1xcclxcbiAgICBtYXJnaW46IDAgMzBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdvZXMge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS1lbGxpcHNpcy12ZXJ0aWNhbCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjbGVhciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21lIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jaGVjayAjY2hlY2tlZCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyM3B4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljICN0cmFzaCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGZvcm0gZnJvbSAnLi9tb2R1bGUvZm9ybSc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuZm9ybSgpO1xyXG4iLCJpbXBvcnQgdXBkYXRlTG9jYWxTdG9yYWdlIGZyb20gJy4vbG9jYWxzdG9yYWdlJztcclxuXHJcbmNvbnN0IGNoZWNrZXIgPSAodGUsIGJvLCB0bykgPT4ge1xyXG4vLyBjaGVja1xyXG4gIGJvLmZvckVhY2goKGUsIG4pID0+IHtcclxuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IGUucGFyZW50RWxlbWVudDtcclxuICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XHJcbiAgICAgIGNvbnN0IGdyYW5kID0gZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGxpbmUgPSBncmFuZC5xdWVyeVNlbGVjdG9yKCcjdGFza3MnKTtcclxuICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XHJcbiAgICAgIGdyYW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tcGxldGVkJyk7XHJcblxyXG4gICAgICB0ZS5mb3JFYWNoKCh0LCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGIgPT09IG4pIHtcclxuICAgICAgICAgIHQuY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gdW5jaGVja1xyXG4gIHRvLmZvckVhY2goKGUsIG4pID0+IHtcclxuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IGUucGFyZW50RWxlbWVudDtcclxuICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrJyk7XHJcbiAgICAgIGNvbnN0IGdyYW5kID0gZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGxpbmUgPSBncmFuZC5xdWVyeVNlbGVjdG9yKCcjdGFza3MnKTtcclxuICAgICAgbGluZS5jbGFzc0xpc3QucmVtb3ZlKCdsaW5lJyk7XHJcbiAgICAgIGdyYW5kLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgdGUuZm9yRWFjaCgodCwgYikgPT4ge1xyXG4gICAgICAgIGlmIChiID09PSBuKSB7XHJcbiAgICAgICAgICB0LmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tlcjsiLCJpbXBvcnQgdXBkYXRlTG9jYWxTdG9yYWdlIGZyb20gJy4vbG9jYWxzdG9yYWdlLmpzJztcclxuLy8gaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSAnLi9kZWxldGVUYXNrLmpzJztcclxuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9zaG93SXRlbS5qcyc7XHJcbmltcG9ydCBjaGVja2VyIGZyb20gJy4vY2hlY2tlci5qcyc7XHJcbmltcG9ydCBNT1IgZnJvbSAnLi9tYXJrb25yZWxvYWQuanMnO1xyXG5cclxuY29uc3QgZm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcclxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcclxuXHJcbiAgLy8gY3JlYXRlZCBhbiBhcnJheVxyXG4gIGxldCB0YXNrcyA9IFtdO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gY3JlYXRlZCBhbiBvYmplY3RcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpIHsgcmV0dXJuOyB9XHJcbiAgICBjb25zdCB0YXNrID0ge1xyXG4gICAgICBkZXNjcmlwdGlvbjogaW5wdXQudmFsdWUsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGluZGV4OiB0YXNrcy5sZW5ndGggKyAxLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBhZGQgdGFza3NcclxuICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGFza3MubWFwKCh0YXNrKSA9PiBkaXNwbGF5KHRhc2ssIGxpc3QpKTtcclxuICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG5cclxuICAgIE1PUih0YXNrcyk7XHJcblxyXG4gICAgLy8gZWRpdCB0YXNrIGFuZCBjaGFuZ2UgaWNvblxyXG4gICAgY29uc3QgcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21vcmUnKTtcclxuICAgIHBlbi5mb3JFYWNoKChwLCB5KSA9PiB7XHJcbiAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIC8vIGNoYW5nZSB0aGUgaWNvblxyXG4gICAgICAgIHAucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpYycpO1xyXG4gICAgICAgIGNvbnN0IGdyYW5kID0gcC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBsaXN0XHJcbiAgICAgICAgY29uc3QgdGltZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdHJhc2gnKTtcclxuICAgICAgICB0aW1lcy5mb3JFYWNoKCh0aW1lLCBuKSA9PiB7XHJcbiAgICAgICAgICB0aW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aW1lLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGFza3MuZm9yRWFjaCgodCwgbSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChuID09PSBtKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodGVlKSA9PiB0ZWUuaW5kZXggIT09IHQuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza3MpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlaW5kZXhzXHJcbiAgICAgICAgICAgICAgICB0YXNrcy5mb3JFYWNoKCh0ZXAsIG51bSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0ZXAuaW5kZXggPSBudW0gKyAxO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBpbnB1dCB0byByZWFkb25seVxyXG4gICAgICAgIGNvbnN0IGVkaXQgPSBncmFuZC5xdWVyeVNlbGVjdG9yKCcjdGFza3MnKTtcclxuICAgICAgICBlZGl0LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcclxuICAgICAgICBlZGl0LmZvY3VzKCk7XHJcblxyXG4gICAgICAgIC8vIGNoYW5nZSB0aGUgZGVzY3JpcHRpb24gaW4gYXJyYXkgYW5kIExTXHJcbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuICAgICAgICAgIHRhc2tzLmZvckVhY2goKGUsIHopID0+IHtcclxuICAgICAgICAgICAgaWYgKHkgPT09IHopIHtcclxuICAgICAgICAgICAgICBlLmRlc2NyaXB0aW9uID0gZWRpdC52YWx1ZTtcclxuICAgICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodGFza3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gb2ZmIHRoZSBlZGl0IGZ1bmN0aW9uXHJcbiAgICAgICAgY29uc3Qgd29yciA9IGdyYW5kLnF1ZXJ5U2VsZWN0b3IoJyN3b3JyJyk7XHJcbiAgICAgICAgd29yci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgcC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ljJyk7XHJcbiAgICAgICAgICBlZGl0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjaGVjayBvbiBidXR0b25cclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb2VzJyk7XHJcbiAgICBjb25zdCBjaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NoZWNrZWQnKTtcclxuICAgIGNoZWNrZXIodGFza3MsIGJveCwgY2hlY2tlZCk7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGFsbCBtYXJrZWQgdGFza3NcclxuICAgIGNvbnN0IGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbWUnKTtcclxuICAgIGNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBlYWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbXBsZXRlZCcpO1xyXG4gICAgICBlYWNoLmZvckVhY2goKGUvKiAsIG4gKi8pID0+IHtcclxuICAgICAgICBpZiAoZS5pZCA9PT0gJ2NvbXBsZXRlZCcpIHtcclxuICAgICAgICAgIGUucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKCh0KSA9PiB0LmNvbXBsZXRlZCAhPT0gdHJ1ZSk7XHJcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRhc2tzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gZm9yIHJlbG9hZFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzaG93ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmUnKSkgfHwgW107XHJcbiAgICB0YXNrcy5wdXNoKC4uLnRhc2tzLCAuLi5yZXNob3cpO1xyXG4gICAgdGFza3MubWFwKCh0YXNrKSA9PiBkaXNwbGF5KHRhc2ssIGxpc3QpKTtcclxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0YXNrcyk7XHJcblxyXG4gICAgLy8gZWRpdCB0YXNrXHJcbiAgICBjb25zdCBwZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbW9yZScpO1xyXG4gICAgcGVuLmZvckVhY2goKHAsIHkpID0+IHtcclxuICAgICAgcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgLy8gY2hhbmdlIHRoZSBpY29uXHJcbiAgICAgICAgcC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ljJyk7XHJcbiAgICAgICAgY29uc3QgZ3JhbmQgPSBwLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIHRhc2tcclxuICAgICAgICBjb25zdCB0aW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0cmFzaCcpO1xyXG4gICAgICAgIHRpbWVzLmZvckVhY2goKHRpbWUsIG4pID0+IHtcclxuICAgICAgICAgIHRpbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRpbWUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKCh0LCBtKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKG4gPT09IG0pIHtcclxuICAgICAgICAgICAgICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKCh0ZWUpID0+IHRlZS5pbmRleCAhPT0gdC5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2VpbmRleHNcclxuICAgICAgICAgICAgICAgIHRhc2tzLmZvckVhY2goKHRlcCwgbnVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRlcC5pbmRleCA9IG51bSArIDE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIGlucHV0IHRvIHJlYWRvbmx5XHJcbiAgICAgICAgY29uc3QgZWRpdCA9IGdyYW5kLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcycpO1xyXG4gICAgICAgIGVkaXQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xyXG4gICAgICAgIGVkaXQuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgLy8gY2hhbmdlIHRoZSBkZXNjcmlwdGlvbiBpbiBhcnJheSBhbmQgTFNcclxuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGFza3MuZm9yRWFjaCgoZSwgeikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeSA9PT0geikge1xyXG4gICAgICAgICAgICAgIGUuZGVzY3JpcHRpb24gPSBlZGl0LnZhbHVlO1xyXG4gICAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBvZmYgdGhlIGVkaXQgZnVuY3Rpb25cclxuICAgICAgICBjb25zdCB3b3JyID0gZ3JhbmQucXVlcnlTZWxlY3RvcignI3dvcnInKTtcclxuICAgICAgICB3b3JyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBwLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hhbmdlJyk7XHJcbiAgICAgICAgICBlZGl0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGNoZWNrIG9uIGJ1dHRvblxyXG4gICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29lcycpO1xyXG4gICAgICBjb25zdCBjaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NoZWNrZWQnKTtcclxuICAgICAgY2hlY2tlcih0YXNrcywgYm94LCBjaGVja2VkKTtcclxuXHJcbiAgICAgIC8vIHJlbW92ZSBhbGwgbWFya2VkIHRhc2tzXHJcbiAgICAgIGNvbnN0IGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbWUnKTtcclxuICAgICAgY2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWFjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb21wbGV0ZWQnKTtcclxuICAgICAgICBlYWNoLmZvckVhY2goKGUvKiAsIG4gKi8pID0+IHtcclxuICAgICAgICAgIGlmIChlLmlkID09PSAnY29tcGxldGVkJykge1xyXG4gICAgICAgICAgICBlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHQpID0+IHQuY29tcGxldGVkICE9PSB0cnVlKTtcclxuICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSh0YXNrcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgTU9SKHRhc2tzKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybTsiLCJjb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAodGFza3MpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmUnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlTG9jYWxTdG9yYWdlOyIsImNvbnN0IE1PUiA9ICh0YXNrcykgPT4ge1xyXG4gIHRhc2tzLmZvckVhY2goKGVsZW1lbnQsIG4pID0+IHtcclxuICAgIGlmIChlbGVtZW50LmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Rhc2tzJyk7XHJcbiAgICAgIHRhc2suZm9yRWFjaCgodGFzaywgdikgPT4ge1xyXG4gICAgICAgIGlmIChuID09PSB2KSB7XHJcbiAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcclxuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRhc2sucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgcGFyZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICBjb25zdCBjaGVjayA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbScpO1xyXG4gICAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTU9SOyIsImNvbnN0IGRpc3BsYXkgPSAoYXJyYXksIGxpc3QpID0+IHtcclxuICBjb25zdCB2aWV3ID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1cIiBkYXRhLWNvbXBsZXRlZCA9JyR7YXJyYXkuY29tcGxldGVkfSc+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nZ29lcyc+PC9kaXY+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVja1wiIGlkPSdjaGVja2VkJz48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9ybSBpZD13b3JyPlxyXG4gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tzXCIgdmFsdWU9IFwiJHthcnJheS5kZXNjcmlwdGlvbn1cIiByZWFkb25seSA+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGRpdiBjbGFzcz1cImljb25zXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVsbGlwc2lzLXZlcnRpY2FsXCIgaWQ9XCJtb3JlXCI+PC9pPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaFwiIGlkPVwidHJhc2hcIj48L2k+XHJcbiAgICAgIDwvZGl2PmA7XHJcblxyXG4gIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2VhY2gnKTtcclxuICBpdGVtLmlubmVySFRNTCA9IHZpZXc7XHJcbiAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=