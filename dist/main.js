/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Franklin Gothic Medium\\\", \\\"Arial Narrow\\\", Arial, sans-serif;\\n  min-height: 100vh;\\n  display: flex;\\n  background-color: #fff;\\n}\\n\\nul {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbutton {\\n  border: none;\\n  outline: none;\\n  background-color: transparent;\\n  cursor: pointer;\\n}\\n\\n.app {\\n  border: 1px solid #ccc;\\n  width: 35%;\\n  margin: auto;\\n}\\n\\n.flex-row {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.header {\\n  padding: 10px 15px;\\n  border-bottom: 1px solid #ccc;\\n  background-color: rgb(248, 248, 248);\\n}\\n\\nh1 {\\n  font-size: 1rem;\\n}\\n\\ni {\\n  color: rgb(168, 166, 166);\\n  font-weight: 300;\\n  font-size: 0.7rem;\\n}\\n\\n.fa-level-down-alt {\\n  transform: rotate(90deg);\\n}\\n\\n.form {\\n  border-bottom: 1px solid #ccc;\\n  padding: 0 5px;\\n}\\n\\n::placeholder {\\n  color: #b3bac5;\\n  font-style: italic;\\n}\\n\\n.input {\\n  flex-grow: 1;\\n  margin-right: 5px;\\n  height: 30px;\\n  border: none;\\n  outline: none;\\n  padding: 10px 15px;\\n  font-size: 1rem;\\n  font-style: italic;\\n  color: #999;\\n}\\n\\n.todo {\\n  padding: 10px 0 10px 15px;\\n  border-bottom: 1px solid #ccc;\\n  transition: 0.5s;\\n}\\n\\n.todo-text {\\n  border: none;\\n  outline: none;\\n  flex-grow: 1;\\n  font-size: 1rem;\\n  background-color: transparent;\\n}\\n\\n.todo-text:focus {\\n  text-decoration: none;\\n  color: #000;\\n}\\n\\n.checkbox {\\n  margin-right: 10px;\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n  color: #999;\\n}\\n\\n.dots {\\n  cursor: all-scroll;\\n  height: 150%;\\n  font-size: 1.1rem;\\n  padding: 10px;\\n}\\n\\n.dots:hover {\\n  color: #000;\\n}\\n\\n.footer {\\n  background-color: rgb(240, 235, 235);\\n  width: 100%;\\n  height: 50px;\\n}\\n\\n.clear-btn {\\n  width: 50%;\\n  margin: 0 auto;\\n  color: rgb(116, 112, 112);\\n  font-size: 1rem;\\n}\\n\\n.clear-btn:hover {\\n  color: #000;\\n  text-decoration: underline;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"removeTodo\": () => (/* binding */ removeTodo),\n/* harmony export */   \"clearCompleted\": () => (/* binding */ clearCompleted)\n/* harmony export */ });\n/* harmony import */ var _renderList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderList.js */ \"./src/renderList.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\nfunction addTodo(event) {\n  event.preventDefault();\n  const input = event.target.children[0];\n  const todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getFromStorage)('TodoList');\n  todos.push({ index: todos.length, description: input.value, completed: false });\n  input.value = '';\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveToStorage)('TodoList', todos);\n  (0,_renderList_js__WEBPACK_IMPORTED_MODULE_0__.default)(todos);\n}\n\nfunction removeTodo(event) {\n if (event.target.dataset.type === 'deleteBtn') {\n   const todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getFromStorage)('TodoList');\n   todos.splice(event.target.parentNode.id, 1);\n   const modifiedIndex = todos.map((el, index) => ({ ...el, index }));\n   (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveToStorage)('TodoList', modifiedIndex);\n   (0,_renderList_js__WEBPACK_IMPORTED_MODULE_0__.default)(modifiedIndex);\n }\n}\n\n\nfunction clearCompleted() {\n const todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getFromStorage)('TodoList');\n (0,_renderList_js__WEBPACK_IMPORTED_MODULE_0__.default)(todos.filter((todo) => !todo.completed));\n}\n\n//# sourceURL=webpack://to-do-list-app/./src/crud.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragStart\": () => (/* binding */ dragStart),\n/* harmony export */   \"dragEnd\": () => (/* binding */ dragEnd),\n/* harmony export */   \"dragEnter\": () => (/* binding */ dragEnter),\n/* harmony export */   \"dragLeave\": () => (/* binding */ dragLeave),\n/* harmony export */   \"allowDrop\": () => (/* binding */ allowDrop),\n/* harmony export */   \"drop\": () => (/* binding */ drop)\n/* harmony export */ });\n\nlet current = null;\nlet targetItem = null;\n\nfunction dragStart() {\n  current = this;\n  current.classList.add('current-active');\n}\n\nfunction dragEnd() {\n  current.classList.remove('current-active');\n  current = null;\n}\n\nfunction dragEnter(event) {\n  event.preventDefault();\n}\n\nfunction dragLeave() {\n  targetItem = null;\n}\n\nfunction allowDrop(event) {\n  event.preventDefault();\n}\n\nfunction drop(event) {\n  targetItem = document.getElementById(event.target.parentNode.id);\n  current.parentElement.insertBefore(current, targetItem);\n  const children = Array.from(current.parentElement.children);\n  const updatedList = children.map((el, index) => ({\n    index, completed: el.children[0].checked, description: el.children[1].value,\n  }\n  ));\n  localStorage.setItem('TodoList', JSON.stringify(updatedList));\n}\n\n//# sourceURL=webpack://to-do-list-app/./src/drag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderList.js */ \"./src/renderList.js\");\n/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud.js */ \"./src/crud.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nconst storage = 'TodoList';\nlet todoList = [];\n\nconst form = document.getElementById('form');\nform.addEventListener('submit', _crud_js__WEBPACK_IMPORTED_MODULE_1__.addTodo);\n\nconst clearBtn = document.getElementById('clear-btn');\nclearBtn.addEventListener('click', _crud_js__WEBPACK_IMPORTED_MODULE_1__.clearCompleted);\n\nconst list = document.getElementById('list');\nlist.addEventListener('click', _crud_js__WEBPACK_IMPORTED_MODULE_1__.removeTodo);\nwindow.addEventListener('DOMContentLoaded', () => {\n  if (localStorage.getItem('TodoList')) {\n    todoList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getFromStorage)(storage);\n  } else {\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveToStorage)(storage, todoList);\n  }\n  (0,_renderList_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getFromStorage)(storage));\n});\n\n//# sourceURL=webpack://to-do-list-app/./src/index.js?");

/***/ }),

/***/ "./src/renderList.js":
/*!***************************!*\
  !*** ./src/renderList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderList)\n/* harmony export */ });\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag.js */ \"./src/drag.js\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n\nfunction renderList(arr) {\n const list = document.getElementById('list');\n\n list.innerHTML = arr.map((item) => `<li class=\"flex-row todo\" draggable=\"true\" id=\"${item.index}\">\n                                     <input type=\"checkbox\" class=\"checkbox\" data-id=\"${item.index}\"  ${item.completed ? 'checked' : ''}>\n                                     <input type=\"text\" value=\"${item.description}\" data-index=\"${item.index}\" draggable=\"false\" class=\"todo-text ${item.completed ? 'completed' : ''}\">\n                                     <i class=\"fas fa-ellipsis-v dots\" data-id=\"${item.index}\"></i>\n                                     <i class=\"fas fa-trash deleteBtn\" data-type=\"deleteBtn\" data-trash=\"${item.index}\"></i>\n                                     </li>`).join('');\n\n list.addEventListener('dragenter', _drag_js__WEBPACK_IMPORTED_MODULE_0__.dragEnter);\n\n document.querySelectorAll('.todo').forEach((t) => {\n   t.addEventListener('dragstart', _drag_js__WEBPACK_IMPORTED_MODULE_0__.dragStart);\n   t.addEventListener('dragend', _drag_js__WEBPACK_IMPORTED_MODULE_0__.dragEnd);\n   t.addEventListener('dragenter', _drag_js__WEBPACK_IMPORTED_MODULE_0__.dragEnter);\n   t.addEventListener('dragleave', _drag_js__WEBPACK_IMPORTED_MODULE_0__.dragLeave);\n   t.addEventListener('drop', _drag_js__WEBPACK_IMPORTED_MODULE_0__.drop);\n   t.addEventListener('dragover', _drag_js__WEBPACK_IMPORTED_MODULE_0__.allowDrop);\n });\n\n document.querySelectorAll('.todo-text').forEach((text) => {\n   const trash = document.querySelector(`[data-trash='${text.dataset.index}']`);\n   text.addEventListener('focus', (event) => {\n     document.querySelectorAll('.todo').forEach((t) => {\n       t.style.backgroundColor = '#fff';\n     });\n     event.target.parentNode.style.backgroundColor = '#fea';\n     trash.classList.add('active');\n   });\n\n   text.addEventListener('blur', () => {\n     document.querySelectorAll('.todo').forEach((t) => {\n       t.style.backgroundColor = '#fff';\n     });\n     setTimeout(() => trash.classList.remove('active'), 100);\n   });\n\n   text.addEventListener('input', (event) => {\n     const editable = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getFromStorage)('TodoList');\n     editable[event.target.dataset.index].description = event.target.value;\n     (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveToStorage)('TodoList', editable);\n   });\n });\n\n const checkboxes = document.querySelectorAll('.checkbox');\n checkboxes.forEach((chbox) => {\n   chbox.addEventListener('change', _status_js__WEBPACK_IMPORTED_MODULE_1__.default);\n });\n}\n\n//# sourceURL=webpack://to-do-list-app/./src/renderList.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateStatus)\n/* harmony export */ });\nfunction updateStatus(event) {\n  event.target.nextElementSibling.classList.toggle('completed');\n  const status = JSON.parse(localStorage.getItem('TodoList'));\n  status[event.target.dataset.id].completed = event.target.checked;\n  localStorage.setItem('TodoList', JSON.stringify(status));\n}\n\n\n//# sourceURL=webpack://to-do-list-app/./src/status.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFromStorage\": () => (/* binding */ getFromStorage),\n/* harmony export */   \"saveToStorage\": () => (/* binding */ saveToStorage)\n/* harmony export */ });\nconst getFromStorage = (name) => JSON.parse(localStorage.getItem(name));\n\nconst saveToStorage = (name, data) => localStorage.setItem(name, JSON.stringify(data));\n\n//# sourceURL=webpack://to-do-list-app/./src/storage.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;