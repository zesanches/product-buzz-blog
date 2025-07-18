"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "(pages-dir-browser)/./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(pages-dir-browser)/./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(pages-dir-browser)/./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,X!=!lucide-react */ \"(pages-dir-browser)/__barrel_optimize__?names=Menu,X!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var _ThemeToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeToggle */ \"(pages-dir-browser)/./src/components/ThemeToggle.tsx\");\n/* harmony import */ var _hooks_use_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/use-mobile */ \"(pages-dir-browser)/./src/hooks/use-mobile.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Header = (param)=>{\n    let { token } = param;\n    _s();\n    const isMobile = (0,_hooks_use_mobile__WEBPACK_IMPORTED_MODULE_4__.useIsMobile)();\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMenu = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"border-b sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 py-4 flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"text-2xl font-bold tracking-tight\",\n                    children: \"ProductBuzz\"\n                }, void 0, false, {\n                    fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: toggleMenu,\n                    className: \"block md:hidden p-2\",\n                    children: isMenuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__.X, {\n                        size: 24\n                    }, void 0, false, {\n                        fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 27\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n                        size: 24\n                    }, void 0, false, {\n                        fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 45\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined),\n                isMobile && isMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-16 left-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md z-50\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"flex flex-col p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                className: \"py-2 text-foreground/80 hover:text-foreground transition-colors\",\n                                onClick: toggleMenu,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/about\",\n                                className: \"py-2 text-foreground/80 hover:text-foreground transition-colors\",\n                                onClick: toggleMenu,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/contact\",\n                                className: \"py-2 text-foreground/80 hover:text-foreground transition-colors\",\n                                onClick: toggleMenu,\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, undefined),\n                            token && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/admin\",\n                                className: \"py-2 text-foreground/80 hover:text-foreground transition-colors\",\n                                onClick: toggleMenu,\n                                children: \"Admin\"\n                            }, void 0, false, {\n                                fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"py-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ThemeToggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, undefined),\n                !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex items-center gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"text-foreground/80 hover:text-foreground transition-colors\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/about\",\n                            className: \"text-foreground/80 hover:text-foreground transition-colors\",\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/contact\",\n                            className: \"text-foreground/80 hover:text-foreground transition-colors\",\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, undefined),\n                        user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/admin\",\n                            className: \"text-foreground/80 hover:text-foreground transition-colors\",\n                            children: \"Admin\"\n                        }, void 0, false, {\n                            fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ThemeToggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, undefined),\n                isMobile && !isMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ThemeToggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 37\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/jose/dev/product-buzz-blog/src/components/Header.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"+x7eg/96vuBRaUAL+9Hv3N7Qkp8=\", false, function() {\n    return [\n        _hooks_use_mobile__WEBPACK_IMPORTED_MODULE_4__.useIsMobile\n    ];\n});\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFDVTtBQUNDO0FBQ1M7QUFnQmpELE1BQU1NLFNBQVM7UUFBQyxFQUFFQyxLQUFLLEVBQVM7O0lBQzlCLE1BQU1DLFdBQVdILDhEQUFXQTtJQUM1QixNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVcsYUFBYTtRQUNqQkQsY0FBYyxDQUFDRDtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDRztRQUFPQyxXQUFVO2tCQUNoQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNaLGtEQUFJQTtvQkFBQ2MsTUFBSztvQkFBSUYsV0FBVTs4QkFBb0M7Ozs7OztnQkFJNURMLDBCQUNDLDhEQUFDUTtvQkFBT0MsU0FBU047b0JBQVlFLFdBQVU7OEJBQ3BDSiwyQkFBYSw4REFBQ04seUVBQUNBO3dCQUFDZSxNQUFNOzs7OztrREFBUyw4REFBQ2hCLDRFQUFJQTt3QkFBQ2dCLE1BQU07Ozs7Ozs7Ozs7O2dCQUkvQ1YsWUFBWUMsNEJBQ1gsOERBQUNLO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDTTt3QkFBSU4sV0FBVTs7MENBQ2IsOERBQUNaLGtEQUFJQTtnQ0FDSGMsTUFBSztnQ0FDTEYsV0FBVTtnQ0FDVkksU0FBU047MENBQ1Y7Ozs7OzswQ0FHRCw4REFBQ1Ysa0RBQUlBO2dDQUNIYyxNQUFLO2dDQUNMRixXQUFVO2dDQUNWSSxTQUFTTjswQ0FDVjs7Ozs7OzBDQUdELDhEQUFDVixrREFBSUE7Z0NBQ0hjLE1BQUs7Z0NBQ0xGLFdBQVU7Z0NBQ1ZJLFNBQVNOOzBDQUNWOzs7Ozs7NEJBR0FKLHVCQUNDLDhEQUFDTixrREFBSUE7Z0NBQ0hjLE1BQUs7Z0NBQ0xGLFdBQVU7Z0NBQ1ZJLFNBQVNOOzBDQUNWOzs7Ozs7MENBSUgsOERBQUNHO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDVCxvREFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFNbkIsQ0FBQ0ksMEJBQ0EsOERBQUNXO29CQUFJTixXQUFVOztzQ0FDYiw4REFBQ1osa0RBQUlBOzRCQUNIYyxNQUFLOzRCQUNMRixXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNaLGtEQUFJQTs0QkFDSGMsTUFBSzs0QkFDTEYsV0FBVTtzQ0FDWDs7Ozs7O3NDQUdELDhEQUFDWixrREFBSUE7NEJBQ0hjLE1BQUs7NEJBQ0xGLFdBQVU7c0NBQ1g7Ozs7Ozt3QkFHQU8sc0JBQ0MsOERBQUNuQixrREFBSUE7NEJBQ0hjLE1BQUs7NEJBQ0xGLFdBQVU7c0NBQ1g7Ozs7OztzQ0FJSCw4REFBQ1Qsb0RBQVdBOzs7Ozs7Ozs7OztnQkFJZkksWUFBWSxDQUFDQyw0QkFBYyw4REFBQ0wsb0RBQVdBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhEO0dBakdNRTs7UUFDYUQsMERBQVdBOzs7S0FEeEJDO0FBbUdOLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyIvaG9tZS9qb3NlL2Rldi9wcm9kdWN0LWJ1enotYmxvZy9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBNZW51LCBYIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IFRoZW1lVG9nZ2xlIGZyb20gXCIuL1RoZW1lVG9nZ2xlXCI7XG5pbXBvcnQgeyB1c2VJc01vYmlsZSB9IGZyb20gXCJAL2hvb2tzL3VzZS1tb2JpbGVcIjtcbmltcG9ydCB7XG4gIFNlbGVjdCxcbiAgU2VsZWN0Q29udGVudCxcbiAgU2VsZWN0R3JvdXAsXG4gIFNlbGVjdEl0ZW0sXG4gIFNlbGVjdExhYmVsLFxuICBTZWxlY3RUcmlnZ2VyLFxuICBTZWxlY3RWYWx1ZSxcbn0gZnJvbSBcIi4vdWkvc2VsZWN0XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIkAvY29udGV4dHMvQXV0aENvbnRleHRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdG9rZW46IHN0cmluZyB8IG51bGw7XG59O1xuXG5jb25zdCBIZWFkZXIgPSAoeyB0b2tlbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBpc01vYmlsZSA9IHVzZUlzTW9iaWxlKCk7XG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJib3JkZXItYiBzdGlja3kgdG9wLTAgei00MCB3LWZ1bGwgYmctYmFja2dyb3VuZC85NSBiYWNrZHJvcC1ibHVyIHN1cHBvcnRzLVtiYWNrZHJvcC1maWx0ZXJdOmJnLWJhY2tncm91bmQvNjBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodFwiPlxuICAgICAgICAgIFByb2R1Y3RCdXp6XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICB7aXNNb2JpbGUgJiYgKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTWVudX0gY2xhc3NOYW1lPVwiYmxvY2sgbWQ6aGlkZGVuIHAtMlwiPlxuICAgICAgICAgICAge2lzTWVudU9wZW4gPyA8WCBzaXplPXsyNH0gLz4gOiA8TWVudSBzaXplPXsyNH0gLz59XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG5cbiAgICAgICAge2lzTW9iaWxlICYmIGlzTWVudU9wZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTE2IGxlZnQtMCB3LWZ1bGwgYmctYmFja2dyb3VuZC85NSBiYWNrZHJvcC1ibHVyIHN1cHBvcnRzLVtiYWNrZHJvcC1maWx0ZXJdOmJnLWJhY2tncm91bmQvNjAgc2hhZG93LW1kIHotNTBcIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTRcIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWZvcmVncm91bmQvODAgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9hYm91dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWZvcmVncm91bmQvODAgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvY29udGFjdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWZvcmVncm91bmQvODAgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHt0b2tlbiAmJiAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW5cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWZvcmVncm91bmQvODAgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWRtaW5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiPlxuICAgICAgICAgICAgICAgIDxUaGVtZVRvZ2dsZSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHshaXNNb2JpbGUgJiYgKFxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTZcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kLzgwIGhvdmVyOnRleHQtZm9yZWdyb3VuZCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWJvdXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWZvcmVncm91bmQvODAgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCIvY29udGFjdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZC84MCBob3Zlcjp0ZXh0LWZvcmVncm91bmQgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7dXNlciAmJiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kLzgwIGhvdmVyOnRleHQtZm9yZWdyb3VuZCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBZG1pblxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFRoZW1lVG9nZ2xlIC8+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge2lzTW9iaWxlICYmICFpc01lbnVPcGVuICYmIDxUaGVtZVRvZ2dsZSAvPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsIk1lbnUiLCJYIiwiVGhlbWVUb2dnbGUiLCJ1c2VJc01vYmlsZSIsIkhlYWRlciIsInRva2VuIiwiaXNNb2JpbGUiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsInRvZ2dsZU1lbnUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwiYnV0dG9uIiwib25DbGljayIsInNpemUiLCJuYXYiLCJ1c2VyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./src/components/Header.tsx\n"));

/***/ })

});