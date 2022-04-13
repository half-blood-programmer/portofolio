"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/voxel-dog.js":
/*!*********************************!*\
  !*** ./components/voxel-dog.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelDog = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCamerPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResisze = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            //640 -> 240\n            //8 -> 6\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCamerPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, \"/dog.glb\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCamerPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"resize\", handleWindowResisze, false);\n        return function() {\n            window.removeEventListener(\"resize\", handleWindowResisze, false);\n        };\n    }, [\n        renderer,\n        handleWindowResisze\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        mt: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size)/2)\",\n            mt: \"calc(0px - var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"I:\\\\PROJECT\\\\portofolio\\\\portofolio-1\\\\components\\\\voxel-dog.js\",\n            lineNumber: 133,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"I:\\\\PROJECT\\\\portofolio\\\\portofolio-1\\\\components\\\\voxel-dog.js\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, _this));\n};\n_s(VoxelDog, \"scy/XNMrVAbrqYX6aGQ0PqsPWZ4=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FBSzlDLENBQUM7R0FySUtuRSxRQUFRO0tBQVJBLFFBQVE7QUF1SWQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZveGVsLWRvZy5qcz9jZjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBTcGlubmVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcclxuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gXCIuLi9saWIvbW9kZWxcIjtcclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgpIHtcclxuICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgNCkpO1xyXG59XHJcblxyXG5jb25zdCBWb3hlbERvZyA9ICgpID0+IHtcclxuICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW19jYW1lcmEsIHNldENhbWVyYV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt0YXJnZXRdID0gdXNlU3RhdGUobmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKSk7XHJcbiAgY29uc3QgW2luaXRpYWxDYW1lclBvc2l0aW9uXSA9IHVzZVN0YXRlKFxyXG4gICAgbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgIDIwICogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXHJcbiAgICAgIDEwLFxyXG4gICAgICAyMCAqIE1hdGguY29zKDAuMiAqIE1hdGguUEkpXHJcbiAgICApXHJcbiAgKTtcclxuICBjb25zdCBbc2NlbmVdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpO1xyXG4gIGNvbnN0IFtfY29udHJvbHMsIHNldENvbnRyb2xzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2lzemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyO1xyXG4gICAgaWYgKGNvbnRhaW5lciAmJiByZW5kZXJlcikge1xyXG4gICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGg7XHJcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKTtcclxuICAgIH1cclxuICB9LCBbcmVuZGVyZXJdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXI7XHJcbiAgICBpZiAoY29udGFpbmVyICYmICFyZW5kZXJlcikge1xyXG4gICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGg7XHJcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgYWxwaGE6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcclxuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSCk7XHJcbiAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKTtcclxuXHJcbiAgICAgIC8vNjQwIC0+IDI0MFxyXG4gICAgICAvLzggLT4gNlxyXG4gICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1ICsgNC44O1xyXG4gICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxyXG4gICAgICAgIC1zY2FsZSxcclxuICAgICAgICBzY2FsZSxcclxuICAgICAgICBzY2FsZSxcclxuICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgMC4wMSxcclxuICAgICAgICA1MDAwMFxyXG4gICAgICApO1xyXG4gICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJQb3NpdGlvbik7XHJcbiAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KTtcclxuICAgICAgc2V0Q2FtZXJhKGNhbWVyYSk7XHJcblxyXG4gICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLCAxKTtcclxuICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XHJcblxyXG4gICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlO1xyXG4gICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKTtcclxuXHJcbiAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsIFwiL2RvZy5nbGJcIiwge1xyXG4gICAgICAgIHJlY2VpdmVTaGFkb3c6IGZhbHNlLFxyXG4gICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlLFxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBhbmltYXRlKCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IHJlcSA9IG51bGw7XHJcbiAgICAgIGxldCBmcmFtZSA9IDA7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWU7XHJcblxyXG4gICAgICAgIGlmIChmcmFtZSA8PSAxMDApIHtcclxuICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJQb3NpdGlvbjtcclxuICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lIC8gMTIwKSAqIE1hdGguUEkgKiAyMDtcclxuXHJcbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwO1xyXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPVxyXG4gICAgICAgICAgICBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZCk7XHJcbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9XHJcbiAgICAgICAgICAgIHAueiAqIE1hdGguY29zKHJvdFNwZWVkKSAtIHAueCAqIE1hdGguc2luKHJvdFNwZWVkKTtcclxuICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udHJvbHMudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSk7XHJcbiAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1Jlc2lzemUsIGZhbHNlKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1Jlc2lzemUsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgfSwgW3JlbmRlcmVyLCBoYW5kbGVXaW5kb3dSZXNpc3plXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHJlZj17cmVmQ29udGFpbmVyfVxyXG4gICAgICBjbGFzc05hbWU9XCJ2b3hlbC1kb2dcIlxyXG4gICAgICBtPVwiYXV0b1wiXHJcbiAgICAgIG10PXtbXCItMjBweFwiLCBcIi02MHB4XCIsIFwiLTEyMHB4XCJdfVxyXG4gICAgICBtYj17W1wiLTQwcHhcIiwgXCItMTQwcHhcIiwgXCItMjAwcHhcIl19XHJcbiAgICAgIHc9e1syODAsIDQ4MCwgNjQwXX1cclxuICAgICAgaD17WzI4MCwgNDgwLCA2NDBdfVxyXG4gICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgID5cclxuICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgIDxTcGlubmVyXHJcbiAgICAgICAgICBzaXplPVwieGxcIlxyXG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICBsZWZ0PVwiNTAlXCJcclxuICAgICAgICAgIHRvcD1cIjUwJVwiXHJcbiAgICAgICAgICBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKS8yKVwiXHJcbiAgICAgICAgICBtdD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSlcIlxyXG4gICAgICAgID48L1NwaW5uZXI+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm94ZWxEb2c7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIlZveGVsRG9nIiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlZlY3RvcjMiLCJ0YXJnZXQiLCJzaW4iLCJQSSIsImNvcyIsImluaXRpYWxDYW1lclBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiaGFuZGxlV2luZG93UmVzaXN6ZSIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsIm10IiwibWIiLCJ3IiwiaCIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n");

/***/ })

});