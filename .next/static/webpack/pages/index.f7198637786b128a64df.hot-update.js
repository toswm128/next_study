/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _defineProperty; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzP2FkZTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/defineProperty.js\n");

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n\n\nvar useInput = function useInput() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var onChange = function onChange(e) {\n    setValue(e.target.value);\n    console.log(value);\n  };\n\n  return {\n    value: value,\n    onChange: onChange\n  };\n};\n\n_s(useInput, \"dBtK6I2q1m3rcfzPBa0nrbv/iCI=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useInput);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlSW5wdXQuanM/ZGYzYSJdLCJuYW1lcyI6WyJ1c2VJbnB1dCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDS0MsK0NBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNkQyxLQURjO0FBQUEsTUFDUEMsUUFETzs7QUFFckIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3BCRixZQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTSixLQUFWLENBQVI7QUFDQUssV0FBTyxDQUFDQyxHQUFSLENBQVlOLEtBQVo7QUFDRCxHQUhEOztBQUlBLFNBQU87QUFBRUEsU0FBSyxFQUFMQSxLQUFGO0FBQVNFLFlBQVEsRUFBUkE7QUFBVCxHQUFQO0FBQ0QsQ0FQRDs7R0FBTUosUTs7QUFTTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL2hvb2tzL3VzZUlucHV0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVzZUlucHV0ID0gKCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIH07XG4gIHJldHVybiB7IHZhbHVlLCBvbkNoYW5nZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useInput.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macbook_Documents_GitHub_next_study_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbook_Documents_GitHub_next_study_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbook_Documents_GitHub_next_study_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbook_Documents_GitHub_next_study_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_macbook_Documents_GitHub_next_study_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbook/Documents/GitHub/next_study/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_macbook_Documents_GitHub_next_study_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar ProfileLink = function ProfileLink(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n      href: \"/p/[profile]\",\n      as: \"/p/\".concat(props.profile),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n        children: [\"Go to \", props.profile, \"'s profile\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = ProfileLink;\n\nvar Index = function Index(props) {\n  _s();\n\n  var text = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.default)(\"\");\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        children: [\"Friends List \", props.profiles[0]]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this), props.profiles.map(function (profile, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ProfileLink, {\n          profile: profile\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", _objectSpread({\n      type: \"text\"\n    }, text), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Index, \"stxBtrTzRBCccYTjF88HJCXf5BY=\", false, function () {\n  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.default];\n});\n\n_c2 = Index;\nIndex.getInitialProps = /*#__PURE__*/(0,_Users_macbook_Documents_GitHub_next_study_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_macbook_Documents_GitHub_next_study_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n  var res;\n  return _Users_macbook_Documents_GitHub_next_study_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          res = [{\n            name: \"minsu\"\n          }, {\n            name: \"pepsi\"\n          }, {\n            name: \"haha\"\n          }, {\n            name: \"sogong\"\n          }, {\n            name: \"whatIsThis\"\n          }, {\n            name: \"hello\"\n          }, {\n            name: \"math\"\n          }]; // const res = await fetch(\"https://uinames.com/api/?amount=10\");\n          // const data = await res.json();\n\n          return _context.abrupt(\"return\", {\n            profiles: res.map(function (profile) {\n              return profile.name;\n            })\n          });\n\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProfileLink\");\n$RefreshReg$(_c2, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJQcm9maWxlTGluayIsInByb3BzIiwicHJvZmlsZSIsIkluZGV4IiwidGV4dCIsInVzZUlucHV0IiwicHJvZmlsZXMiLCJtYXAiLCJpbmRleCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEtBQUs7QUFBQSxzQkFDdkI7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksZ0JBQVY7QUFBNEIsUUFBRSxlQUFRQSxLQUFLLENBQUNDLE9BQWQsQ0FBOUI7QUFBQSw2QkFDRTtBQUFBLDZCQUFVRCxLQUFLLENBQUNDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHVCO0FBQUEsQ0FBekI7O0tBQU1GLFc7O0FBUU4sSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQUYsS0FBSyxFQUFJO0FBQUE7O0FBQ3JCLE1BQU1HLElBQUksR0FBR0Msd0RBQVEsQ0FBQyxFQUFELENBQXJCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyx1REFBRDtBQUFBLDhCQUNFO0FBQUEsb0NBQWtCSixLQUFLLENBQUNLLFFBQU4sQ0FBZSxDQUFmLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUdMLEtBQUssQ0FBQ0ssUUFBTixDQUFlQyxHQUFmLENBQW1CLFVBQUNMLE9BQUQsRUFBVU0sS0FBVjtBQUFBLDRCQUNsQiw4REFBQyxXQUFEO0FBQXlCLGlCQUFPLEVBQUVOO0FBQWxDLFdBQWtCTSxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURrQjtBQUFBLE9BQW5CLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFPLFVBQUksRUFBQztBQUFaLE9BQXVCSixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQSxrQkFERjtBQVdELENBYkQ7O0dBQU1ELEs7VUFDU0Usb0Q7OztNQURURixLO0FBZU5BLEtBQUssQ0FBQ00sZUFBTix3U0FBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCQyxhQURnQixHQUNWLENBQ1Y7QUFBRUMsZ0JBQUksRUFBRTtBQUFSLFdBRFUsRUFFVjtBQUFFQSxnQkFBSSxFQUFFO0FBQVIsV0FGVSxFQUdWO0FBQUVBLGdCQUFJLEVBQUU7QUFBUixXQUhVLEVBSVY7QUFBRUEsZ0JBQUksRUFBRTtBQUFSLFdBSlUsRUFLVjtBQUFFQSxnQkFBSSxFQUFFO0FBQVIsV0FMVSxFQU1WO0FBQUVBLGdCQUFJLEVBQUU7QUFBUixXQU5VLEVBT1Y7QUFBRUEsZ0JBQUksRUFBRTtBQUFSLFdBUFUsQ0FEVSxFQVV0QjtBQUNBOztBQVhzQiwyQ0FhZjtBQUNMTCxvQkFBUSxFQUFFSSxHQUFHLENBQUNILEdBQUosQ0FBUSxVQUFBTCxPQUFPO0FBQUEscUJBQUlBLE9BQU8sQ0FBQ1MsSUFBWjtBQUFBLGFBQWY7QUFETCxXQWJlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCO0FBa0JBLCtEQUFlUixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xuXG5jb25zdCBQcm9maWxlTGluayA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8TGluayBocmVmPXtgL3AvW3Byb2ZpbGVdYH0gYXM9e2AvcC8ke3Byb3BzLnByb2ZpbGV9YH0+XG4gICAgICA8YT5HbyB0byB7cHJvcHMucHJvZmlsZX0ncyBwcm9maWxlPC9hPlxuICAgIDwvTGluaz5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IHtcbiAgY29uc3QgdGV4dCA9IHVzZUlucHV0KFwiXCIpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+RnJpZW5kcyBMaXN0IHtwcm9wcy5wcm9maWxlc1swXX08L2gxPlxuICAgICAgICB7cHJvcHMucHJvZmlsZXMubWFwKChwcm9maWxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxQcm9maWxlTGluayBrZXk9e2luZGV4fSBwcm9maWxlPXtwcm9maWxlfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnRleHR9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlcyA9IFtcbiAgICB7IG5hbWU6IFwibWluc3VcIiB9LFxuICAgIHsgbmFtZTogXCJwZXBzaVwiIH0sXG4gICAgeyBuYW1lOiBcImhhaGFcIiB9LFxuICAgIHsgbmFtZTogXCJzb2dvbmdcIiB9LFxuICAgIHsgbmFtZTogXCJ3aGF0SXNUaGlzXCIgfSxcbiAgICB7IG5hbWU6IFwiaGVsbG9cIiB9LFxuICAgIHsgbmFtZTogXCJtYXRoXCIgfSxcbiAgXTtcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3VpbmFtZXMuY29tL2FwaS8/YW1vdW50PTEwXCIpO1xuICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb2ZpbGVzOiByZXMubWFwKHByb2ZpbGUgPT4gcHJvZmlsZS5uYW1lKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});