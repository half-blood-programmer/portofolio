"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/bio",{

/***/ "./pages/bio/stat.js":
/*!***************************!*\
  !*** ./pages/bio/stat.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/paragraph */ \"./components/paragraph.js\");\n/* harmony import */ var _nivo_stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nivo/stream */ \"./node_modules/@nivo/stream/dist/nivo-stream.es.js\");\n/* harmony import */ var _nivo_bump__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nivo/bump */ \"./node_modules/@nivo/bump/dist/nivo-bump.es.js\");\n/* harmony import */ var _nivo_radar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nivo/radar */ \"./node_modules/@nivo/radar/dist/nivo-radar.es.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar Statistic = function(param) {\n    var statData = param.statData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            sx: {\n                height: \"280px\",\n                bgColor: \"#fffef5eb\",\n                borderRadius: \"10px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nivo_radar__WEBPACK_IMPORTED_MODULE_4__.ResponsiveRadar, {\n                data: statData,\n                keys: [\n                    \"stats\"\n                ],\n                indexBy: \"id\",\n                valueFormat: \">-.2f\",\n                margin: {\n                    top: 70,\n                    right: 80,\n                    bottom: 40,\n                    left: 80\n                },\n                borderColor: {\n                    from: \"color\"\n                },\n                gridLabelOffset: 36,\n                dotSize: 10,\n                dotColor: {\n                    theme: \"background\"\n                },\n                dotBorderWidth: 2,\n                colors: {\n                    scheme: \"accent\"\n                },\n                blendMode: \"multiply\",\n                motionConfig: \"wobbly\",\n                sliceTooltip: \"id\",\n                fill: {\n                    from: \"color\",\n                    modifiers: [\n                        [\n                            \"darker\",\n                            0.1\n                        ],\n                        [\n                            \"opacity\",\n                            0.1\n                        ], \n                    ]\n                }\n            }, void 0, false, {\n                fileName: \"I:\\\\PROJECT\\\\portofolio\\\\portofolio-next\\\\pages\\\\bio\\\\stat.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"I:\\\\PROJECT\\\\portofolio\\\\portofolio-next\\\\pages\\\\bio\\\\stat.js\",\n            lineNumber: 18,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_c = Statistic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statistic);\nvar _c;\n$RefreshReg$(_c, \"Statistic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9iaW8vc3RhdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQVMwQjtBQUN5QjtBQUNIO0FBQ0E7QUFDRjtBQUU5QyxJQUFNWSxTQUFTLEdBQUc7UUFBR0MsUUFBUSxTQUFSQSxRQUFRO3lCQUMzQjtrQkFDRSw0RUFBQ1AsaURBQUc7WUFDRlEsRUFBRSxFQUFFO2dCQUNGQyxNQUFNLEVBQUUsT0FBTztnQkFDZkMsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCQyxZQUFZLEVBQUUsTUFBTTthQUNyQjtzQkFFRCw0RUFBQ04sd0RBQWU7Z0JBQ2RPLElBQUksRUFBRUwsUUFBUTtnQkFDZE0sSUFBSSxFQUFFO29CQUFDLE9BQU87aUJBQUM7Z0JBQ2ZDLE9BQU8sRUFBQyxJQUFJO2dCQUNaQyxXQUFXLEVBQUMsT0FBTztnQkFDbkJDLE1BQU0sRUFBRTtvQkFBRUMsR0FBRyxFQUFFLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxFQUFFO29CQUFFQyxNQUFNLEVBQUUsRUFBRTtvQkFBRUMsSUFBSSxFQUFFLEVBQUU7aUJBQUU7Z0JBQ3BEQyxXQUFXLEVBQUU7b0JBQUVDLElBQUksRUFBRSxPQUFPO2lCQUFFO2dCQUM5QkMsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CQyxPQUFPLEVBQUUsRUFBRTtnQkFDWEMsUUFBUSxFQUFFO29CQUFFQyxLQUFLLEVBQUUsWUFBWTtpQkFBRTtnQkFDakNDLGNBQWMsRUFBRSxDQUFDO2dCQUNqQkMsTUFBTSxFQUFFO29CQUFFQyxNQUFNLEVBQUUsUUFBUTtpQkFBRTtnQkFDNUJDLFNBQVMsRUFBQyxVQUFVO2dCQUNwQkMsWUFBWSxFQUFDLFFBQVE7Z0JBQ3JCQyxZQUFZLEVBQUMsSUFBSTtnQkFDakJDLElBQUksRUFBRTtvQkFDSlgsSUFBSSxFQUFFLE9BQU87b0JBQ2JZLFNBQVMsRUFBRTt3QkFDVDs0QkFBQyxRQUFRO0FBQUUsK0JBQUc7eUJBQUM7d0JBQ2Y7NEJBQUMsU0FBUztBQUFFLCtCQUFHO3lCQUFDO3FCQUNqQjtpQkFDRjs7Ozs7cUJBQ0Q7Ozs7O2lCQUNFO3FCQUNMO0NBQ0o7QUFsQ0s1QixLQUFBQSxTQUFTO0FBb0NmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmlvL3N0YXQuanM/OTQ3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFjY29yZGlvbixcclxuICBBY2NvcmRpb25CdXR0b24sXHJcbiAgQWNjb3JkaW9uSWNvbixcclxuICBBY2NvcmRpb25JdGVtLFxyXG4gIEFjY29yZGlvblBhbmVsLFxyXG4gIEJhZGdlLFxyXG4gIEJveCxcclxuICBIZWFkaW5nLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTdHJlYW0gfSBmcm9tIFwiQG5pdm8vc3RyZWFtXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVBcmVhQnVtcCB9IGZyb20gXCJAbml2by9idW1wXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVSYWRhciB9IGZyb20gXCJAbml2by9yYWRhclwiO1xyXG5cclxuY29uc3QgU3RhdGlzdGljID0gKHsgc3RhdERhdGEgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICA8Qm94XHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgaGVpZ2h0OiBcIjI4MHB4XCIsXHJcbiAgICAgICAgYmdDb2xvcjogXCIjZmZmZWY1ZWJcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8UmVzcG9uc2l2ZVJhZGFyXHJcbiAgICAgICAgZGF0YT17c3RhdERhdGF9XHJcbiAgICAgICAga2V5cz17W1wic3RhdHNcIl19XHJcbiAgICAgICAgaW5kZXhCeT1cImlkXCJcclxuICAgICAgICB2YWx1ZUZvcm1hdD1cIj4tLjJmXCJcclxuICAgICAgICBtYXJnaW49e3sgdG9wOiA3MCwgcmlnaHQ6IDgwLCBib3R0b206IDQwLCBsZWZ0OiA4MCB9fVxyXG4gICAgICAgIGJvcmRlckNvbG9yPXt7IGZyb206IFwiY29sb3JcIiB9fVxyXG4gICAgICAgIGdyaWRMYWJlbE9mZnNldD17MzZ9XHJcbiAgICAgICAgZG90U2l6ZT17MTB9XHJcbiAgICAgICAgZG90Q29sb3I9e3sgdGhlbWU6IFwiYmFja2dyb3VuZFwiIH19XHJcbiAgICAgICAgZG90Qm9yZGVyV2lkdGg9ezJ9XHJcbiAgICAgICAgY29sb3JzPXt7IHNjaGVtZTogXCJhY2NlbnRcIiB9fVxyXG4gICAgICAgIGJsZW5kTW9kZT1cIm11bHRpcGx5XCJcclxuICAgICAgICBtb3Rpb25Db25maWc9XCJ3b2JibHlcIlxyXG4gICAgICAgIHNsaWNlVG9vbHRpcD1cImlkXCJcclxuICAgICAgICBmaWxsPXt7XHJcbiAgICAgICAgICBmcm9tOiBcImNvbG9yXCIsXHJcbiAgICAgICAgICBtb2RpZmllcnM6IFtcclxuICAgICAgICAgICAgW1wiZGFya2VyXCIsIDAuMV0sXHJcbiAgICAgICAgICAgIFtcIm9wYWNpdHlcIiwgMC4xXSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvQm94PlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdGlzdGljO1xyXG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiQWNjb3JkaW9uQnV0dG9uIiwiQWNjb3JkaW9uSWNvbiIsIkFjY29yZGlvbkl0ZW0iLCJBY2NvcmRpb25QYW5lbCIsIkJhZGdlIiwiQm94IiwiSGVhZGluZyIsIlBhcmFncmFwaCIsIlJlc3BvbnNpdmVTdHJlYW0iLCJSZXNwb25zaXZlQXJlYUJ1bXAiLCJSZXNwb25zaXZlUmFkYXIiLCJTdGF0aXN0aWMiLCJzdGF0RGF0YSIsInN4IiwiaGVpZ2h0IiwiYmdDb2xvciIsImJvcmRlclJhZGl1cyIsImRhdGEiLCJrZXlzIiwiaW5kZXhCeSIsInZhbHVlRm9ybWF0IiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiYm9yZGVyQ29sb3IiLCJmcm9tIiwiZ3JpZExhYmVsT2Zmc2V0IiwiZG90U2l6ZSIsImRvdENvbG9yIiwidGhlbWUiLCJkb3RCb3JkZXJXaWR0aCIsImNvbG9ycyIsInNjaGVtZSIsImJsZW5kTW9kZSIsIm1vdGlvbkNvbmZpZyIsInNsaWNlVG9vbHRpcCIsImZpbGwiLCJtb2RpZmllcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/bio/stat.js\n"));

/***/ })

});