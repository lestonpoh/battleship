/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, `
.overlay{
    display:none;
    z-index: 1;
    width:100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left:0;
    background-color:black;
    opacity: 0.5;
}

.restart-popup{
    visibility: hidden;
    background-color: white;
    z-index: 2;
    position:absolute;
    top: 30%;
    bottom: 30%;
    left:30%;
    right:30%;
    border-radius: 10px;
    margin:auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
}
#restart{
    border: none;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    padding:20px;
    border-radius: 10px;
    background-color: green;
    margin:50px
}

#restart:active{
    transform: scale(0.95);
}

.boards{
    /* width:80%;
    margin:auto; */
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
}

.board{
    margin:50px;
    display:grid;
    grid-template-columns: repeat(10,50px);
    grid-template-rows: repeat(10,50px);
    border:1px solid black
}

.square{
    border: 1px solid rgb(112, 111, 111);
}

#playerTwoBoard .hover:hover{
    cursor: pointer;
    transform: scale(1.1);
    background-color: rgb(173, 173, 173);
}

.hit{
    background-color: rgb(235, 193, 193);
}

.missed{
    background-color: rgb(185, 215, 241);
}

.sunk{
    background-color: rgb(92, 75, 75)
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,YAAY;IACZ,UAAU;IACV,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,MAAM;IACN,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,UAAU;IACV,iBAAiB;IACjB,QAAQ;IACR,WAAW;IACX,QAAQ;IACR,SAAS;IACT,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB;AACJ;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI;kBACc;IACd,YAAY;IACZ,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sCAAsC;IACtC,mCAAmC;IACnC;AACJ;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,qBAAqB;IACrB,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI;AACJ","sourcesContent":["\n.overlay{\n    display:none;\n    z-index: 1;\n    width:100vw;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left:0;\n    background-color:black;\n    opacity: 0.5;\n}\n\n.restart-popup{\n    visibility: hidden;\n    background-color: white;\n    z-index: 2;\n    position:absolute;\n    top: 30%;\n    bottom: 30%;\n    left:30%;\n    right:30%;\n    border-radius: 10px;\n    margin:auto;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    font-weight: bold;\n}\n#restart{\n    border: none;\n    color: white;\n    font-size: 2rem;\n    font-weight: bold;\n    padding:20px;\n    border-radius: 10px;\n    background-color: green;\n    margin:50px\n}\n\n#restart:active{\n    transform: scale(0.95);\n}\n\n.boards{\n    /* width:80%;\n    margin:auto; */\n    display:flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.board{\n    margin:50px;\n    display:grid;\n    grid-template-columns: repeat(10,50px);\n    grid-template-rows: repeat(10,50px);\n    border:1px solid black\n}\n\n.square{\n    border: 1px solid rgb(112, 111, 111);\n}\n\n#playerTwoBoard .hover:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n    background-color: rgb(173, 173, 173);\n}\n\n.hit{\n    background-color: rgb(235, 193, 193);\n}\n\n.missed{\n    background-color: rgb(185, 215, 241);\n}\n\n.sunk{\n    background-color: rgb(92, 75, 75)\n}\n"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderBoards: () => (/* binding */ renderBoards)
/* harmony export */ });

const renderBoards = (p1,p2)=>{
    hidePopUp()
    const boards = document.querySelector(".boards")
    boards.innerHTML = ""
    const playerOneBoard = document.createElement("div")
    playerOneBoard.classList = "board"
    playerOneBoard.setAttribute("id","playerOneBoard")
    boards.appendChild(playerOneBoard)
    const playerTwoBoard = document.createElement("div")
    playerTwoBoard.classList = "board"
    playerTwoBoard.setAttribute("id","playerTwoBoard")
    boards.appendChild(playerTwoBoard)

    p1.gameBoard.board.forEach((row,rowId)=>{
        row.forEach((e,columnId)=>{
            const square = document.createElement("div")
            square.classList = "square"
            square.setAttribute("id",`${columnId},${rowId}`)
            playerOneBoard.appendChild(square)
        })
    })

    p2.gameBoard.board.forEach((row,rowId)=>{
        row.forEach((e,columnId)=>{
            const square = document.createElement("div")
            square.classList = "square hover"
            square.setAttribute("id",`${columnId},${rowId},player2`)
            playerTwoBoard.appendChild(square)

            square.addEventListener("click",squareOnClick)

            function squareOnClick(e){
                const squareId = e.target.id
                const x = squareId.split(",")[0]
                const y = squareId.split(",")[1]
                if (p1.attack(p2,x,y)){
                    e.target.classList.add("hit")
                    hitShip(p1,p2,x,y)
                }else{
                    e.target.classList.add("missed")
                    
                }
                console.log(p2.gameBoard.board)
                e.target.classList.remove("hover")
                e.target.removeEventListener("click",squareOnClick)
                
                // p2.randomAttack(p1)
            }
        })
    })
}

const hitShip = (attackingPlayer,player,x,y)=>{
    let shipX = player.gameBoard.board[y][x].x
    let shipY = player.gameBoard.board[y][x].y
    
    // if one ship is sunk
    if (player.gameBoard.board[shipY][shipX].ship.isSunk()){
        player.gameBoard.board[shipY][shipX].shipPositions.forEach((e)=>{
            const sunkSquares = document.getElementById(`${e},player2`)
            sunkSquares.classList.add("sunk")
        })
    }

    // if all ship are sunk
    if (player.gameBoard.areAllSunk()){
        showPopup(attackingPlayer)
    }


}

const showPopup = (winner)=>{
    const overlay =  document.querySelector(".overlay")
    overlay.style.display = "revert"
    const popUp = document.querySelector(".restart-popup")
    document.querySelector(".winner").textContent = `${winner.name} WIN!`
    popUp.style.visibility = "visible"
}

const hidePopUp = ()=>{
    const overlay =  document.querySelector(".overlay")
    overlay.style.display = "none"
    const popUp = document.querySelector(".restart-popup")
    document.querySelector(".winner").textContent = ""
    popUp.style.visibility = "hide"

}




/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const Game = ()=>{
    const p1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)("Player 1")
    const p2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)("Player 2")
    p2.populateShip()
    

    ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderBoards)(p1,p2)

}



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


const Gameboard = () => {

    const board = []
    for (let i=0;i<10;i++){
        board[i]=[]
        for (let j=0;j<10;j++){
            board[i].push("empty")
        }
    }

    const placeShip = (x,y,length) => {
        let ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(length)
        let shipPositions = []

        if (x+length >= 10) return false;

        for (let i=0;i<length;i++){
            if (board[y][x+i] !== "empty"){
                return false
            }
        }

        for (let i=x;i<x+length;i++){
            board[y][i] = {x,y,hit:false}
            shipPositions.push(`${i},${y}`)
        }
        board[y][x] = {ship,shipPositions, x, y, hit:false}
    }

    const receiveAttack = (x,y) => {
        if (board[y][x] === "empty"){
            board[y][x] = "miss"
            return false
        }else{
            let shipX = board[y][x].x
            let shipY = board[y][x].y
            board[shipY][shipX].ship.hit()
            board[y][x].hit = true
            return true
        }

    }

    const areAllSunk = ()=>{
        let allSunk = true
        for (let i=0;i<10;i++){
            board[i].forEach((square)=>{
                if (square === "empty" || square === "miss") return
                if (board[square.y][square.x].ship.isSunk() === false){
                    allSunk = false
                }
            })
            
        }
        return allSunk
    }


    return {
        board,
        placeShip,
        receiveAttack,
        areAllSunk
    }

}






/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const Player = (name)=>{
    let gameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)()

    const attack = (player,x,y)=>{
        return player.gameBoard.receiveAttack(x,y)

    }

    const randomAttack = (player)=>{
        let attackSuccess = false
        
        while (attackSuccess === false){
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            if (player.gameBoard.board[y][x] ===  "empty" ||
            player.gameBoard.board[y][x].hit === false) {
                player.gameBoard.receiveAttack(x,y)
                attackSuccess = true   
            }
            
        }
    }

    const populateShip = ()=>{
        gameBoard.placeShip(2,2,2)
        // gameBoard.placeShip(3,3,2)
        // gameBoard.placeShip(2,5,4)
        // gameBoard.placeShip(3,7,4)
    }

    return {
        name,
        gameBoard,
        attack,
        randomAttack,
        populateShip
    }
}



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (length) => {

    let hitCount = 0

    const hit = () => {
        hitCount+=1
    }

    const isSunk = () =>{
        if (hitCount >= length){
            return true
        }else{
            return false
        }
    }

    return {length, hit, isSunk }
}




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_game__WEBPACK_IMPORTED_MODULE_0__.Game)()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4ub3ZlcmxheXtcbiAgICBkaXNwbGF5Om5vbmU7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDoxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDowO1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4ucmVzdGFydC1wb3B1cHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6IDMwJTtcbiAgICBib3R0b206IDMwJTtcbiAgICBsZWZ0OjMwJTtcbiAgICByaWdodDozMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46YXV0bztcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNyZXN0YXJ0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6MjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIG1hcmdpbjo1MHB4XG59XG5cbiNyZXN0YXJ0OmFjdGl2ZXtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4uYm9hcmRze1xuICAgIC8qIHdpZHRoOjgwJTtcbiAgICBtYXJnaW46YXV0bzsgKi9cbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm9hcmR7XG4gICAgbWFyZ2luOjUwcHg7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDUwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLDUwcHgpO1xuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2tcbn1cblxuLnNxdWFyZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTEyLCAxMTEsIDExMSk7XG59XG5cbiNwbGF5ZXJUd29Cb2FyZCAuaG92ZXI6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAxNzMsIDE3Myk7XG59XG5cbi5oaXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMTkzLCAxOTMpO1xufVxuXG4ubWlzc2Vke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDIxNSwgMjQxKTtcbn1cblxuLnN1bmt7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA3NSwgNzUpXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sTUFBTTtJQUNOLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO2tCQUNjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkM7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0k7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ub3ZlcmxheXtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDoxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ucmVzdGFydC1wb3B1cHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBib3R0b206IDMwJTtcXG4gICAgbGVmdDozMCU7XFxuICAgIHJpZ2h0OjMwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiNyZXN0YXJ0e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzoyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgbWFyZ2luOjUwcHhcXG59XFxuXFxuI3Jlc3RhcnQ6YWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG5cXG4uYm9hcmRze1xcbiAgICAvKiB3aWR0aDo4MCU7XFxuICAgIG1hcmdpbjphdXRvOyAqL1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHtcXG4gICAgbWFyZ2luOjUwcHg7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLDUwcHgpO1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrXFxufVxcblxcbi5zcXVhcmV7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDExMSwgMTExKTtcXG59XFxuXFxuI3BsYXllclR3b0JvYXJkIC5ob3Zlcjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDE3MywgMTczKTtcXG59XFxuXFxuLmhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMTkzLCAxOTMpO1xcbn1cXG5cXG4ubWlzc2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAyMTUsIDI0MSk7XFxufVxcblxcbi5zdW5re1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDc1LCA3NSlcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuY29uc3QgcmVuZGVyQm9hcmRzID0gKHAxLHAyKT0+e1xuICAgIGhpZGVQb3BVcCgpXG4gICAgY29uc3QgYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZHNcIilcbiAgICBib2FyZHMuaW5uZXJIVE1MID0gXCJcIlxuICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHBsYXllck9uZUJvYXJkLmNsYXNzTGlzdCA9IFwiYm9hcmRcIlxuICAgIHBsYXllck9uZUJvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsXCJwbGF5ZXJPbmVCb2FyZFwiKVxuICAgIGJvYXJkcy5hcHBlbmRDaGlsZChwbGF5ZXJPbmVCb2FyZClcbiAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwbGF5ZXJUd29Cb2FyZC5jbGFzc0xpc3QgPSBcImJvYXJkXCJcbiAgICBwbGF5ZXJUd29Cb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwicGxheWVyVHdvQm9hcmRcIilcbiAgICBib2FyZHMuYXBwZW5kQ2hpbGQocGxheWVyVHdvQm9hcmQpXG5cbiAgICBwMS5nYW1lQm9hcmQuYm9hcmQuZm9yRWFjaCgocm93LHJvd0lkKT0+e1xuICAgICAgICByb3cuZm9yRWFjaCgoZSxjb2x1bW5JZCk9PntcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QgPSBcInNxdWFyZVwiXG4gICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiaWRcIixgJHtjb2x1bW5JZH0sJHtyb3dJZH1gKVxuICAgICAgICAgICAgcGxheWVyT25lQm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBwMi5nYW1lQm9hcmQuYm9hcmQuZm9yRWFjaCgocm93LHJvd0lkKT0+e1xuICAgICAgICByb3cuZm9yRWFjaCgoZSxjb2x1bW5JZCk9PntcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QgPSBcInNxdWFyZSBob3ZlclwiXG4gICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiaWRcIixgJHtjb2x1bW5JZH0sJHtyb3dJZH0scGxheWVyMmApXG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpXG5cbiAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixzcXVhcmVPbkNsaWNrKVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzcXVhcmVPbkNsaWNrKGUpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUlkID0gZS50YXJnZXQuaWRcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gc3F1YXJlSWQuc3BsaXQoXCIsXCIpWzBdXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHNxdWFyZUlkLnNwbGl0KFwiLFwiKVsxXVxuICAgICAgICAgICAgICAgIGlmIChwMS5hdHRhY2socDIseCx5KSl7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXRcIilcbiAgICAgICAgICAgICAgICAgICAgaGl0U2hpcChwMSxwMix4LHkpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIilcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHAyLmdhbWVCb2FyZC5ib2FyZClcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIilcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixzcXVhcmVPbkNsaWNrKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHAyLnJhbmRvbUF0dGFjayhwMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5jb25zdCBoaXRTaGlwID0gKGF0dGFja2luZ1BsYXllcixwbGF5ZXIseCx5KT0+e1xuICAgIGxldCBzaGlwWCA9IHBsYXllci5nYW1lQm9hcmQuYm9hcmRbeV1beF0ueFxuICAgIGxldCBzaGlwWSA9IHBsYXllci5nYW1lQm9hcmQuYm9hcmRbeV1beF0ueVxuICAgIFxuICAgIC8vIGlmIG9uZSBzaGlwIGlzIHN1bmtcbiAgICBpZiAocGxheWVyLmdhbWVCb2FyZC5ib2FyZFtzaGlwWV1bc2hpcFhdLnNoaXAuaXNTdW5rKCkpe1xuICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkW3NoaXBZXVtzaGlwWF0uc2hpcFBvc2l0aW9ucy5mb3JFYWNoKChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3Vua1NxdWFyZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlfSxwbGF5ZXIyYClcbiAgICAgICAgICAgIHN1bmtTcXVhcmVzLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gaWYgYWxsIHNoaXAgYXJlIHN1bmtcbiAgICBpZiAocGxheWVyLmdhbWVCb2FyZC5hcmVBbGxTdW5rKCkpe1xuICAgICAgICBzaG93UG9wdXAoYXR0YWNraW5nUGxheWVyKVxuICAgIH1cblxuXG59XG5cbmNvbnN0IHNob3dQb3B1cCA9ICh3aW5uZXIpPT57XG4gICAgY29uc3Qgb3ZlcmxheSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIilcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcInJldmVydFwiXG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnQtcG9wdXBcIilcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lclwiKS50ZXh0Q29udGVudCA9IGAke3dpbm5lci5uYW1lfSBXSU4hYFxuICAgIHBvcFVwLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxufVxuXG5jb25zdCBoaWRlUG9wVXAgPSAoKT0+e1xuICAgIGNvbnN0IG92ZXJsYXkgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydC1wb3B1cFwiKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyXCIpLnRleHRDb250ZW50ID0gXCJcIlxuICAgIHBvcFVwLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGVcIlxuXG59XG5cblxuZXhwb3J0IHtyZW5kZXJCb2FyZHN9IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyByZW5kZXJCb2FyZHMgfSBmcm9tIFwiLi9kb21cIjtcblxuY29uc3QgR2FtZSA9ICgpPT57XG4gICAgY29uc3QgcDEgPSBQbGF5ZXIoXCJQbGF5ZXIgMVwiKVxuICAgIGNvbnN0IHAyID0gUGxheWVyKFwiUGxheWVyIDJcIilcbiAgICBwMi5wb3B1bGF0ZVNoaXAoKVxuICAgIFxuXG4gICAgcmVuZGVyQm9hcmRzKHAxLHAyKVxuXG59XG5cbmV4cG9ydCB7IEdhbWUgfSIsImltcG9ydCAgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiXG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGJvYXJkID0gW11cbiAgICBmb3IgKGxldCBpPTA7aTwxMDtpKyspe1xuICAgICAgICBib2FyZFtpXT1bXVxuICAgICAgICBmb3IgKGxldCBqPTA7ajwxMDtqKyspe1xuICAgICAgICAgICAgYm9hcmRbaV0ucHVzaChcImVtcHR5XCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoeCx5LGxlbmd0aCkgPT4ge1xuICAgICAgICBsZXQgc2hpcCA9IFNoaXAobGVuZ3RoKVxuICAgICAgICBsZXQgc2hpcFBvc2l0aW9ucyA9IFtdXG5cbiAgICAgICAgaWYgKHgrbGVuZ3RoID49IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaT0wO2k8bGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZiAoYm9hcmRbeV1beCtpXSAhPT0gXCJlbXB0eVwiKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGk9eDtpPHgrbGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBib2FyZFt5XVtpXSA9IHt4LHksaGl0OmZhbHNlfVxuICAgICAgICAgICAgc2hpcFBvc2l0aW9ucy5wdXNoKGAke2l9LCR7eX1gKVxuICAgICAgICB9XG4gICAgICAgIGJvYXJkW3ldW3hdID0ge3NoaXAsc2hpcFBvc2l0aW9ucywgeCwgeSwgaGl0OmZhbHNlfVxuICAgIH1cblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCx5KSA9PiB7XG4gICAgICAgIGlmIChib2FyZFt5XVt4XSA9PT0gXCJlbXB0eVwiKXtcbiAgICAgICAgICAgIGJvYXJkW3ldW3hdID0gXCJtaXNzXCJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBzaGlwWCA9IGJvYXJkW3ldW3hdLnhcbiAgICAgICAgICAgIGxldCBzaGlwWSA9IGJvYXJkW3ldW3hdLnlcbiAgICAgICAgICAgIGJvYXJkW3NoaXBZXVtzaGlwWF0uc2hpcC5oaXQoKVxuICAgICAgICAgICAgYm9hcmRbeV1beF0uaGl0ID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgYXJlQWxsU3VuayA9ICgpPT57XG4gICAgICAgIGxldCBhbGxTdW5rID0gdHJ1ZVxuICAgICAgICBmb3IgKGxldCBpPTA7aTwxMDtpKyspe1xuICAgICAgICAgICAgYm9hcmRbaV0uZm9yRWFjaCgoc3F1YXJlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChzcXVhcmUgPT09IFwiZW1wdHlcIiB8fCBzcXVhcmUgPT09IFwibWlzc1wiKSByZXR1cm5cbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbc3F1YXJlLnldW3NxdWFyZS54XS5zaGlwLmlzU3VuaygpID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIGFsbFN1bmsgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxsU3Vua1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYXJlQWxsU3Vua1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCB7R2FtZWJvYXJkfVxuXG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gKG5hbWUpPT57XG4gICAgbGV0IGdhbWVCb2FyZCA9IEdhbWVib2FyZCgpXG5cbiAgICBjb25zdCBhdHRhY2sgPSAocGxheWVyLHgseSk9PntcbiAgICAgICAgcmV0dXJuIHBsYXllci5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayh4LHkpXG5cbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21BdHRhY2sgPSAocGxheWVyKT0+e1xuICAgICAgICBsZXQgYXR0YWNrU3VjY2VzcyA9IGZhbHNlXG4gICAgICAgIFxuICAgICAgICB3aGlsZSAoYXR0YWNrU3VjY2VzcyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkW3ldW3hdID09PSAgXCJlbXB0eVwiIHx8XG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkW3ldW3hdLmhpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soeCx5KVxuICAgICAgICAgICAgICAgIGF0dGFja1N1Y2Nlc3MgPSB0cnVlICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBvcHVsYXRlU2hpcCA9ICgpPT57XG4gICAgICAgIGdhbWVCb2FyZC5wbGFjZVNoaXAoMiwyLDIpXG4gICAgICAgIC8vIGdhbWVCb2FyZC5wbGFjZVNoaXAoMywzLDIpXG4gICAgICAgIC8vIGdhbWVCb2FyZC5wbGFjZVNoaXAoMiw1LDQpXG4gICAgICAgIC8vIGdhbWVCb2FyZC5wbGFjZVNoaXAoMyw3LDQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZ2FtZUJvYXJkLFxuICAgICAgICBhdHRhY2ssXG4gICAgICAgIHJhbmRvbUF0dGFjayxcbiAgICAgICAgcG9wdWxhdGVTaGlwXG4gICAgfVxufVxuXG5leHBvcnQge1BsYXllcn0iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuXG4gICAgbGV0IGhpdENvdW50ID0gMFxuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRDb3VudCs9MVxuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+e1xuICAgICAgICBpZiAoaGl0Q291bnQgPj0gbGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge2xlbmd0aCwgaGl0LCBpc1N1bmsgfVxufVxuXG5leHBvcnQge1NoaXB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuR2FtZSgpXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9