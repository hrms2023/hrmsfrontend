"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/bankdetails/page",{

/***/ "(app-pages-browser)/./src/components/Cards/BasicInformationCard.js":
/*!******************************************************!*\
  !*** ./src/components/Cards/BasicInformationCard.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_PencilIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/PencilIcon */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/PencilIcon.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst BasicInformationCard = (param)=>{\n    let { style, bankDetails, setSingleBankDetails } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    let lastPart;\n    const bankInfoLabes = [\n        \"Profile Picutre\",\n        \"Full Name\",\n        \"Mobile Number\",\n        \"Email\",\n        \"Email\",\n        \"Date of Birth\",\n        \"Gender\",\n        \"anniversary date\"\n    ];\n    if (bankDetails) {\n        const parts = bankDetails.uploadCancelCheque.split(\"/\");\n        lastPart = parts[parts.length - 1];\n    }\n    const bankInfo = {\n        id: \"3f65676a-5e08-4cfc-932c-eefcab3905b9\",\n        \"EmployeeId\": \"564fb1f7-47c9-4f5a-8973-cac94af42815\",\n        \"firstName\": \"John\",\n        \"lastName\": \"Doe\",\n        \"dob\": \"1990-01-15\",\n        \"gender\": \"Male\",\n        \"workEmail\": \"john.doe@example.com\",\n        \"HomeEmail\": \"john.home@example.com\",\n        \"anniversaryDate\": \"2022-07-20\"\n    };\n    const navigateToForm = (e)=>{\n        e.preventDefault();\n        router.push(\"/basicinformation/\".concat(bankInfo.id, \"/\").concat(bankInfo.id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3 mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-sm p-3 bg-[#f2f2f2] border-[#f2f2f2] rounded-lg shadow \".concat(style),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-between px-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mb-2 text-[12px] font-roboto tracking-tight text-gray-900 font-style: italic\",\n                                children: \"Default Basic basickInfo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_PencilIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onClick: (e)=>navigateToForm(e),\n                            className: \"h-4 w-4 hover:cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col m-1\",\n                            children: bankInfoLabes.map((list, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"text-[12px] font-semibold  p-1.5\",\n                                    children: \"\".concat(list, \" :\")\n                                }, index, false, {\n                                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col m-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"text-[12px] font-roboto font-medium p-1.5\",\n                                    children: bankInfo.accountType\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"text-[12px] font-roboto font-medium p-1.5\",\n                                    children: bankInfo.bankName\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"text-[12px] font-roboto font-medium p-1.5\",\n                                    children: bankInfo.beneficiaryName\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"text-[12px] font-roboto font-medium p-1.5\",\n                                    children: bankInfo.accountNumber\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"text-[12px] font-roboto font-medium p-1.5\",\n                                    children: bankInfo.ifscCode\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    onClick: ()=>window.open(bankDetails.uploadCancelCheque),\n                                    className: \"text-[12px] font-roboto font-medium p-1.5 hover:cursor-pointer\",\n                                    children: lastPart\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-[12px] font-roboto p-1.5 text-[#279847]\",\n                                    children: \"View File\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\components\\\\Cards\\\\BasicInformationCard.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, undefined);\n};\n_s(BasicInformationCard, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = BasicInformationCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BasicInformationCard);\nvar _c;\n$RefreshReg$(_c, \"BasicInformationCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhcmRzL0Jhc2ljSW5mb3JtYXRpb25DYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5RDtBQUNiO0FBQ2xCO0FBRTFCLE1BQU1HLHVCQUF1QjtRQUFDLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxvQkFBb0IsRUFBRTs7SUFFdEUsTUFBTUMsU0FBU04sMERBQVNBO0lBRXhCLElBQUlPO0lBQ0osTUFBTUMsZ0JBQWdCO1FBQ2xCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDSDtJQUNELElBQUlKLGFBQWE7UUFDYixNQUFNSyxRQUFRTCxZQUFZTSxrQkFBa0IsQ0FBQ0MsS0FBSyxDQUFDO1FBQ25ESixXQUFXRSxLQUFLLENBQUNBLE1BQU1HLE1BQU0sR0FBRyxFQUFFO0lBQ3RDO0lBQ0EsTUFBTUMsV0FBVztRQUNiQyxJQUFJO1FBQ0osY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZO1FBQ1osT0FBTztRQUNQLFVBQVU7UUFDVixhQUFhO1FBQ2IsYUFBYTtRQUNiLG1CQUFtQjtJQUN2QjtJQUVBLE1BQU1DLGlCQUFpQixDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQlgsT0FBT1ksSUFBSSxDQUFDLHFCQUFvQ0wsT0FBZkEsU0FBU0MsRUFBRSxFQUFDLEtBQWUsT0FBWkQsU0FBU0MsRUFBRTtJQUMvRDtJQUNBLHFCQUNJLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUNHQyxXQUFXLGdFQUFzRSxPQUFOakI7OzhCQUUzRSw4REFBQ2dCO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7c0NBQ0csNEVBQUNDO2dDQUFLRixXQUFVOzBDQUErRTs7Ozs7Ozs7Ozs7c0NBSW5HLDhEQUFDckIsa0ZBQVVBOzRCQUNQd0IsU0FBUyxDQUFDUCxJQUFNRCxlQUFlQzs0QkFDL0JJLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFHbEIsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1ZaLGNBQWNnQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3RCLDhEQUFDQztvQ0FBZVAsV0FBVTs4Q0FDckIsR0FBUSxPQUFMSyxNQUFLO21DQURKQzs7Ozs7Ozs7OztzQ0FLakIsOERBQUNQOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ087b0NBQUdQLFdBQVU7OENBQ1RQLFNBQVNlLFdBQVc7Ozs7Ozs4Q0FFekIsOERBQUNEO29DQUFHUCxXQUFVOzhDQUNUUCxTQUFTZ0IsUUFBUTs7Ozs7OzhDQUV0Qiw4REFBQ0Y7b0NBQUdQLFdBQVU7OENBQ1RQLFNBQVNpQixlQUFlOzs7Ozs7OENBRTdCLDhEQUFDSDtvQ0FBR1AsV0FBVTs4Q0FDVFAsU0FBU2tCLGFBQWE7Ozs7Ozs4Q0FFM0IsOERBQUNKO29DQUFHUCxXQUFVOzhDQUNUUCxTQUFTbUIsUUFBUTs7Ozs7OzhDQUV0Qiw4REFBQ0w7b0NBQ0dKLFNBQVMsSUFBTVUsT0FBT0MsSUFBSSxDQUFDOUIsWUFBWU0sa0JBQWtCO29DQUN6RFUsV0FBVTs4Q0FFVGI7Ozs7Ozs4Q0FFTCw4REFBQ2U7b0NBQUtGLFdBQVU7OENBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2RjtHQXpGTWxCOztRQUVhRixzREFBU0E7OztLQUZ0QkU7QUEyRk4sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkcy9CYXNpY0luZm9ybWF0aW9uQ2FyZC5qcz8yMmZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlbmNpbEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQmFzaWNJbmZvcm1hdGlvbkNhcmQgPSAoeyBzdHlsZSwgYmFua0RldGFpbHMsIHNldFNpbmdsZUJhbmtEZXRhaWxzIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGxldCBsYXN0UGFydDtcclxuICAgIGNvbnN0IGJhbmtJbmZvTGFiZXMgPSBbXHJcbiAgICAgICAgXCJQcm9maWxlIFBpY3V0cmVcIixcclxuICAgICAgICBcIkZ1bGwgTmFtZVwiLFxyXG4gICAgICAgIFwiTW9iaWxlIE51bWJlclwiLFxyXG4gICAgICAgIFwiRW1haWxcIixcclxuICAgICAgICBcIkVtYWlsXCIsXHJcbiAgICAgICAgXCJEYXRlIG9mIEJpcnRoXCIsXHJcbiAgICAgICAgXCJHZW5kZXJcIixcclxuICAgICAgICBcImFubml2ZXJzYXJ5IGRhdGVcIixcclxuICAgIF07XHJcbiAgICBpZiAoYmFua0RldGFpbHMpIHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IGJhbmtEZXRhaWxzLnVwbG9hZENhbmNlbENoZXF1ZS5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgbGFzdFBhcnQgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJhbmtJbmZvID0ge1xyXG4gICAgICAgIGlkOiBcIjNmNjU2NzZhLTVlMDgtNGNmYy05MzJjLWVlZmNhYjM5MDViOVwiLFxyXG4gICAgICAgIFwiRW1wbG95ZWVJZFwiOiBcIjU2NGZiMWY3LTQ3YzktNGY1YS04OTczLWNhYzk0YWY0MjgxNVwiLFxyXG4gICAgICAgIFwiZmlyc3ROYW1lXCI6IFwiSm9oblwiLFxyXG4gICAgICAgIFwibGFzdE5hbWVcIjogXCJEb2VcIixcclxuICAgICAgICBcImRvYlwiOiBcIjE5OTAtMDEtMTVcIixcclxuICAgICAgICBcImdlbmRlclwiOiBcIk1hbGVcIixcclxuICAgICAgICBcIndvcmtFbWFpbFwiOiBcImpvaG4uZG9lQGV4YW1wbGUuY29tXCIsXHJcbiAgICAgICAgXCJIb21lRW1haWxcIjogXCJqb2huLmhvbWVAZXhhbXBsZS5jb21cIixcclxuICAgICAgICBcImFubml2ZXJzYXJ5RGF0ZVwiOiBcIjIwMjItMDctMjBcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5hdmlnYXRlVG9Gb3JtID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICByb3V0ZXIucHVzaChgL2Jhc2ljaW5mb3JtYXRpb24vJHtiYW5rSW5mby5pZH0vJHtiYW5rSW5mby5pZH1gKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBtdC0yXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1heC13LXNtIHAtMyBiZy1bI2YyZjJmMl0gYm9yZGVyLVsjZjJmMmYyXSByb3VuZGVkLWxnIHNoYWRvdyAke3N0eWxlfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWItMiB0ZXh0LVsxMnB4XSBmb250LXJvYm90byB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIGZvbnQtc3R5bGU6IGl0YWxpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdCBCYXNpYyBiYXNpY2tJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBlbmNpbEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG5hdmlnYXRlVG9Gb3JtKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IGhvdmVyOmN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtiYW5rSW5mb0xhYmVzLm1hcCgobGlzdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0ZXh0LVsxMnB4XSBmb250LXNlbWlib2xkICBwLTEuNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtsaXN0fSA6YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRleHQtWzEycHhdIGZvbnQtcm9ib3RvIGZvbnQtbWVkaXVtIHAtMS41XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmFua0luZm8uYWNjb3VudFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LVsxMnB4XSBmb250LXJvYm90byBmb250LW1lZGl1bSBwLTEuNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JhbmtJbmZvLmJhbmtOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGV4dC1bMTJweF0gZm9udC1yb2JvdG8gZm9udC1tZWRpdW0gcC0xLjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYW5rSW5mby5iZW5lZmljaWFyeU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LVsxMnB4XSBmb250LXJvYm90byBmb250LW1lZGl1bSBwLTEuNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JhbmtJbmZvLmFjY291bnROdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LVsxMnB4XSBmb250LXJvYm90byBmb250LW1lZGl1bSBwLTEuNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JhbmtJbmZvLmlmc2NDb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGJhbmtEZXRhaWxzLnVwbG9hZENhbmNlbENoZXF1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsxMnB4XSBmb250LXJvYm90byBmb250LW1lZGl1bSBwLTEuNSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYXN0UGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTJweF0gZm9udC1yb2JvdG8gcC0xLjUgdGV4dC1bIzI3OTg0N11cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgRmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzaWNJbmZvcm1hdGlvbkNhcmQ7XHJcbiJdLCJuYW1lcyI6WyJQZW5jaWxJY29uIiwidXNlUm91dGVyIiwiUmVhY3QiLCJCYXNpY0luZm9ybWF0aW9uQ2FyZCIsInN0eWxlIiwiYmFua0RldGFpbHMiLCJzZXRTaW5nbGVCYW5rRGV0YWlscyIsInJvdXRlciIsImxhc3RQYXJ0IiwiYmFua0luZm9MYWJlcyIsInBhcnRzIiwidXBsb2FkQ2FuY2VsQ2hlcXVlIiwic3BsaXQiLCJsZW5ndGgiLCJiYW5rSW5mbyIsImlkIiwibmF2aWdhdGVUb0Zvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsInNwYW4iLCJvbkNsaWNrIiwibWFwIiwibGlzdCIsImluZGV4IiwidWwiLCJhY2NvdW50VHlwZSIsImJhbmtOYW1lIiwiYmVuZWZpY2lhcnlOYW1lIiwiYWNjb3VudE51bWJlciIsImlmc2NDb2RlIiwid2luZG93Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Cards/BasicInformationCard.js\n"));

/***/ })

});