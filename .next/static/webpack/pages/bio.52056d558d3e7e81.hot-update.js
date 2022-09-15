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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/paragraph */ \"./components/paragraph.js\");\n/* harmony import */ var _nivo_stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nivo/stream */ \"./node_modules/@nivo/stream/dist/nivo-stream.es.js\");\n/* harmony import */ var _nivo_bump__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nivo/bump */ \"./node_modules/@nivo/bump/dist/nivo-bump.es.js\");\n/* harmony import */ var _nivo_radar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nivo/radar */ \"./node_modules/@nivo/radar/dist/nivo-radar.es.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar Statistic = function(param) {\n    var statData = param.statData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            sx: {\n                height: \"280px\",\n                bgColor: \"#fffef5eb\",\n                borderRadius: \"10px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nivo_radar__WEBPACK_IMPORTED_MODULE_4__.ResponsiveRadar, {\n                data: statData,\n                keys: [\n                    \"stats\"\n                ],\n                indexBy: \"id\",\n                valueFormat: \">-.3f\",\n                margin: {\n                    top: 70,\n                    right: 80,\n                    bottom: 40,\n                    left: 80\n                },\n                borderColor: {\n                    from: \"color\"\n                },\n                gridLabelOffset: 36,\n                dotSize: 10,\n                dotColor: {\n                    theme: \"background\"\n                },\n                dotBorderWidth: 2,\n                colors: {\n                    scheme: \"nivo\"\n                },\n                blendMode: \"multiply\",\n                motionConfig: \"wobbly\"\n            }, void 0, false, {\n                fileName: \"I:\\\\PROJECT\\\\portofolio\\\\portofolio-next\\\\pages\\\\bio\\\\stat.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"I:\\\\PROJECT\\\\portofolio\\\\portofolio-next\\\\pages\\\\bio\\\\stat.js\",\n            lineNumber: 18,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_c = Statistic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statistic);\nvar _c;\n$RefreshReg$(_c, \"Statistic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9iaW8vc3RhdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQVMwQjtBQUN5QjtBQUNIO0FBQ0E7QUFDRjtBQUU5QyxJQUFNWSxTQUFTLEdBQUc7UUFBR0MsUUFBUSxTQUFSQSxRQUFRO3lCQUMzQjtrQkFDRSw0RUFBQ1AsaURBQUc7WUFDRlEsRUFBRSxFQUFFO2dCQUNGQyxNQUFNLEVBQUUsT0FBTztnQkFDZkMsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCQyxZQUFZLEVBQUUsTUFBTTthQUNyQjtzQkFFRCw0RUFBQ04sd0RBQWU7Z0JBQ2RPLElBQUksRUFBRUwsUUFBUTtnQkFDZE0sSUFBSSxFQUFFO29CQUFDLE9BQU87aUJBQUM7Z0JBQ2ZDLE9BQU8sRUFBQyxJQUFJO2dCQUNaQyxXQUFXLEVBQUMsT0FBTztnQkFDbkJDLE1BQU0sRUFBRTtvQkFBRUMsR0FBRyxFQUFFLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxFQUFFO29CQUFFQyxNQUFNLEVBQUUsRUFBRTtvQkFBRUMsSUFBSSxFQUFFLEVBQUU7aUJBQUU7Z0JBQ3BEQyxXQUFXLEVBQUU7b0JBQUVDLElBQUksRUFBRSxPQUFPO2lCQUFFO2dCQUM5QkMsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CQyxPQUFPLEVBQUUsRUFBRTtnQkFDWEMsUUFBUSxFQUFFO29CQUFFQyxLQUFLLEVBQUUsWUFBWTtpQkFBRTtnQkFDakNDLGNBQWMsRUFBRSxDQUFDO2dCQUNqQkMsTUFBTSxFQUFFO29CQUFFQyxNQUFNLEVBQUUsTUFBTTtpQkFBRTtnQkFDMUJDLFNBQVMsRUFBQyxVQUFVO2dCQUNwQkMsWUFBWSxFQUFDLFFBQVE7Ozs7O3FCQUNyQjs7Ozs7aUJBQ0U7cUJBQ0w7Q0FDSjtBQTFCS3pCLEtBQUFBLFNBQVM7QUE0QmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9iaW8vc3RhdC5qcz85NDdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWNjb3JkaW9uLFxyXG4gIEFjY29yZGlvbkJ1dHRvbixcclxuICBBY2NvcmRpb25JY29uLFxyXG4gIEFjY29yZGlvbkl0ZW0sXHJcbiAgQWNjb3JkaW9uUGFuZWwsXHJcbiAgQmFkZ2UsXHJcbiAgQm94LFxyXG4gIEhlYWRpbmcsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYXJhZ3JhcGhcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVN0cmVhbSB9IGZyb20gXCJAbml2by9zdHJlYW1cIjtcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZUFyZWFCdW1wIH0gZnJvbSBcIkBuaXZvL2J1bXBcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVJhZGFyIH0gZnJvbSBcIkBuaXZvL3JhZGFyXCI7XHJcblxyXG5jb25zdCBTdGF0aXN0aWMgPSAoeyBzdGF0RGF0YSB9KSA9PiAoXHJcbiAgPD5cclxuICAgIDxCb3hcclxuICAgICAgc3g9e3tcclxuICAgICAgICBoZWlnaHQ6IFwiMjgwcHhcIixcclxuICAgICAgICBiZ0NvbG9yOiBcIiNmZmZlZjVlYlwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxSZXNwb25zaXZlUmFkYXJcclxuICAgICAgICBkYXRhPXtzdGF0RGF0YX1cclxuICAgICAgICBrZXlzPXtbXCJzdGF0c1wiXX1cclxuICAgICAgICBpbmRleEJ5PVwiaWRcIlxyXG4gICAgICAgIHZhbHVlRm9ybWF0PVwiPi0uM2ZcIlxyXG4gICAgICAgIG1hcmdpbj17eyB0b3A6IDcwLCByaWdodDogODAsIGJvdHRvbTogNDAsIGxlZnQ6IDgwIH19XHJcbiAgICAgICAgYm9yZGVyQ29sb3I9e3sgZnJvbTogXCJjb2xvclwiIH19XHJcbiAgICAgICAgZ3JpZExhYmVsT2Zmc2V0PXszNn1cclxuICAgICAgICBkb3RTaXplPXsxMH1cclxuICAgICAgICBkb3RDb2xvcj17eyB0aGVtZTogXCJiYWNrZ3JvdW5kXCIgfX1cclxuICAgICAgICBkb3RCb3JkZXJXaWR0aD17Mn1cclxuICAgICAgICBjb2xvcnM9e3sgc2NoZW1lOiBcIm5pdm9cIiB9fVxyXG4gICAgICAgIGJsZW5kTW9kZT1cIm11bHRpcGx5XCJcclxuICAgICAgICBtb3Rpb25Db25maWc9XCJ3b2JibHlcIlxyXG4gICAgICAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWM7XHJcbiJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJBY2NvcmRpb25CdXR0b24iLCJBY2NvcmRpb25JY29uIiwiQWNjb3JkaW9uSXRlbSIsIkFjY29yZGlvblBhbmVsIiwiQmFkZ2UiLCJCb3giLCJIZWFkaW5nIiwiUGFyYWdyYXBoIiwiUmVzcG9uc2l2ZVN0cmVhbSIsIlJlc3BvbnNpdmVBcmVhQnVtcCIsIlJlc3BvbnNpdmVSYWRhciIsIlN0YXRpc3RpYyIsInN0YXREYXRhIiwic3giLCJoZWlnaHQiLCJiZ0NvbG9yIiwiYm9yZGVyUmFkaXVzIiwiZGF0YSIsImtleXMiLCJpbmRleEJ5IiwidmFsdWVGb3JtYXQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJib3JkZXJDb2xvciIsImZyb20iLCJncmlkTGFiZWxPZmZzZXQiLCJkb3RTaXplIiwiZG90Q29sb3IiLCJ0aGVtZSIsImRvdEJvcmRlcldpZHRoIiwiY29sb3JzIiwic2NoZW1lIiwiYmxlbmRNb2RlIiwibW90aW9uQ29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/bio/stat.js\n"));

/***/ })

});