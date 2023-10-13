"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/basicinformation/page",{

/***/ "(app-pages-browser)/./src/app/basicinformation/BasicInfoDetailsForm.js":
/*!**********************************************************!*\
  !*** ./src/app/basicinformation/BasicInfoDetailsForm.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Inputs_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Inputs/Dropdown */ \"(app-pages-browser)/./src/components/Inputs/Dropdown.js\");\n/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Inputs/Input */ \"(app-pages-browser)/./src/components/Inputs/Input.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./src/app/utils.js\");\n/* harmony import */ var _components_Inputs_File__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Inputs/File */ \"(app-pages-browser)/./src/components/Inputs/File.js\");\n/* harmony import */ var _components_Inputs_FileTypeIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Inputs/FileTypeIcon */ \"(app-pages-browser)/./src/components/Inputs/FileTypeIcon.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/api */ \"(app-pages-browser)/./src/api/api.js\");\n/* harmony import */ var _components_Modal_AddOrUpdateModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Modal/AddOrUpdateModal */ \"(app-pages-browser)/./src/components/Modal/AddOrUpdateModal.js\");\n/* harmony import */ var _components_TickMark_TickMark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/TickMark/TickMark */ \"(app-pages-browser)/./src/components/TickMark/TickMark.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst pageName = \"Job Details\";\nconst BasicInfoDetailsForm = (param)=>{\n    let { paramsID, userProfileImage } = param;\n    _s();\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"created\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const UpdateMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation)(_api_api__WEBPACK_IMPORTED_MODULE_7__.updateArtist);\n    const [uploadPANFile, setUploadPANFile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [artistDetails, setArtistDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        id: \"\",\n        EmployeeId: \"\",\n        firstName: \"\",\n        lastName: \"\",\n        dob: \"\",\n        gender: \"\",\n        workEmail: \"\",\n        HomeEmail: \"\",\n        anniversaryDate: \"\"\n    });\n    const handleFileData = (data)=>{\n        setUploadPANFile(data);\n    };\n    const deleteFile = (index)=>{\n        const updatedFileData = [\n            ...uploadPANFile\n        ];\n        updatedFileData.splice(index, 1);\n        setUploadPANFile(updatedFileData);\n    };\n    const handleChange = (fieldName, value)=>{\n        setFormData({\n            ...formData,\n            [fieldName]: value\n        });\n    };\n    const fetchArtist = async (paramsID)=>{\n        try {\n            const response = await fetch(\"http://localhost:8080/api/employeeBasicInfo/\".concat(paramsID));\n            const data = await response.json();\n            return data;\n        } catch (error) {\n            throw error;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async ()=>{\n        if (paramsID) {\n            var _data;\n            const data = await fetchArtist(paramsID);\n            setFormData((_data = data) === null || _data === void 0 ? void 0 : _data.data);\n        }\n    }, [\n        formData\n    ]);\n    const mutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation)(async (formData)=>{\n        const response = await fetch(\"http://localhost:8080/api/employeeBasicInfo\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        });\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok\");\n        }\n        const data = await response.json();\n        return data;\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (paramsID && artistDetails.length !== 0) {\n            try {\n                await UpdateMutation.mutateAsync(formData);\n                setShowModal(true);\n                setAction(\"udpated\");\n            } catch (err) {\n                console.log(err);\n            }\n        } else {\n            try {\n                await mutation.mutateAsync(formData);\n                setShowModal(true);\n                setAction(\"created\");\n            } catch (error) {}\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Full Name :\",\n                placeholder: \"\",\n                type: \"text\",\n                value: formData.firstName,\n                onChange: (value)=>handleChange(\"employeeCode\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Mobile Number :\",\n                placeholder: \"\",\n                type: \"text\",\n                value: formData.lastName,\n                onChange: (value)=>handleChange(\"joiningDate\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Email  :\",\n                placeholder: \"\",\n                type: \"email\",\n                value: formData.HomeEmail,\n                onChange: (value)=>handleChange(\"beneficdesignationiaryName\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Email :\",\n                placeholder: \"\",\n                type: \"email\",\n                value: formData.workEmail,\n                onChange: (value)=>handleChange(\"jobOffered\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Date of Birth :\",\n                placeholder: \"\",\n                type: \"date\",\n                value: formData.dob,\n                onChange: (value)=>handleChange(\"probationPeriod\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Gender :\",\n                placeholder: \"\",\n                type: \"text\",\n                value: formData.gender,\n                onChange: (value)=>handleChange(\"probationPeriod\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Anversy Date :\",\n                placeholder: \"\",\n                type: \"date\",\n                value: formData.anniversaryDate,\n                onChange: (value)=>handleChange(\"probationPeriod\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-end px-80 mt-14\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: (e)=>handleSubmit(e),\n                            className: \"font-roboto text-white text-center text-[12px] bg-[#ce3434] h-12 w-1/3 mr-4\",\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                            lineNumber: 171,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"font-roboto text-white text-center text-[12px] bg-black h-12 w-1/3\",\n                            children: \"Submit for Approval\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                            lineNumber: 172,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                    lineNumber: 170,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, undefined),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal_AddOrUpdateModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                showModal: showModal,\n                setShowModal: setShowModal,\n                pageName: pageName,\n                action: action\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 176,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n        lineNumber: 120,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BasicInfoDetailsForm, \"Ulg7iQlmkcLiGZOdK8EVQJZvQAk=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation\n    ];\n});\n_c = BasicInfoDetailsForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BasicInfoDetailsForm);\nvar _c;\n$RefreshReg$(_c, \"BasicInfoDetailsForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYmFzaWNpbmZvcm1hdGlvbi9CYXNpY0luZm9EZXRhaWxzRm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDdUQ7QUFDVjtBQUNLO0FBQ047QUFDRDtBQUNhO0FBQ1E7QUFDSDtBQUNSO0FBQ2E7QUFDYjtBQUdyRCxNQUFNZ0IsV0FBVztBQUNqQixNQUFNQyx1QkFBdUI7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLGdCQUFnQixFQUFFOztJQUMxRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2tCLFdBQVdDLGFBQWEsR0FBR25CLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1vQixpQkFBaUJkLG1FQUFXQSxDQUFDRyxrREFBWUE7SUFDL0MsTUFBTSxDQUFDWSxlQUFlQyxpQkFBaUIsR0FBR3RCLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTSxDQUFDdUIsZUFBZUMsaUJBQWlCLEdBQUd4QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ3lCLFVBQVVDLFlBQVksR0FBRzFCLCtDQUFRQSxDQUFDO1FBQ3ZDMkIsSUFBSTtRQUNKQyxZQUFZO1FBQ1pDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxLQUFLO1FBQ0w5QixRQUFRO1FBQ1IrQixXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsaUJBQWlCO0lBZW5CO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCZCxpQkFBaUJjO0lBQ25CO0lBQ0EsTUFBTUMsYUFBYSxDQUFDQztRQUNsQixNQUFNQyxrQkFBa0I7ZUFBSWxCO1NBQWM7UUFDMUNrQixnQkFBZ0JDLE1BQU0sQ0FBQ0YsT0FBTztRQUM5QmhCLGlCQUFpQmlCO0lBQ25CO0lBRUEsTUFBTUUsZUFBZSxDQUFDQyxXQUFXQztRQUMvQmpCLFlBQVk7WUFDVixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ2lCLFVBQVUsRUFBRUM7UUFFZjtJQUNGO0lBQ0Es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LG1CQUFtQkU7Ozs7OzswQkEwQ3JKLDhEQUFDcUI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0s7NEJBQU9DLFNBQVMsQ0FBQ2QsSUFBTUQsYUFBYUM7NEJBQUlRLFdBQVU7c0NBQThFOzs7Ozs7c0NBQ2pJLDhEQUFDSzs0QkFBT0wsV0FBVTtzQ0FBcUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSTFGL0MsMkJBQWEsOERBQUNSLDBFQUFnQkE7Z0JBQUNRLFdBQVdBO2dCQUFXQyxjQUFjQTtnQkFBY1AsVUFBVUE7Z0JBQVVJLFFBQVFBOzs7Ozs7Ozs7Ozs7QUFHcEg7R0FuS01IOztRQUdtQlAsK0RBQVdBO1FBNkRqQkEsK0RBQVdBOzs7S0FoRXhCTztBQXFLTiwrREFBZUEsb0JBQW9CQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYmFzaWNpbmZvcm1hdGlvbi9CYXNpY0luZm9EZXRhaWxzRm9ybS5qcz9mMzkyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ0AvY29tcG9uZW50cy9JbnB1dHMvRHJvcGRvd24nXHJcbmltcG9ydCBJbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvSW5wdXRzL0lucHV0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZW5kZXIsIHByb29mQ2FyZCB9IGZyb20gJy4uL3V0aWxzJ1xyXG5pbXBvcnQgRmlsZSBmcm9tICdAL2NvbXBvbmVudHMvSW5wdXRzL0ZpbGUnXHJcbmltcG9ydCB7IFhNYXJrSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XHJcbmltcG9ydCB7IEZpbGVUeXBlSWNvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9JbnB1dHMvRmlsZVR5cGVJY29uJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5J1xyXG5pbXBvcnQgeyBmZXRjaEFydGlzdCwgdXBkYXRlQXJ0aXN0IH0gZnJvbSAnQC9hcGkvYXBpJ1xyXG5pbXBvcnQgQWRkT3JVcGRhdGVNb2RhbCBmcm9tICdAL2NvbXBvbmVudHMvTW9kYWwvQWRkT3JVcGRhdGVNb2RhbCdcclxuaW1wb3J0IFRpY2tNYXJrIGZyb20gJ0AvY29tcG9uZW50cy9UaWNrTWFyay9UaWNrTWFyaydcclxuXHJcblxyXG5jb25zdCBwYWdlTmFtZSA9IFwiSm9iIERldGFpbHNcIlxyXG5jb25zdCBCYXNpY0luZm9EZXRhaWxzRm9ybSA9ICh7IHBhcmFtc0lELCB1c2VyUHJvZmlsZUltYWdlIH0pID0+IHtcclxuICBjb25zdCBbYWN0aW9uLCBzZXRBY3Rpb25dID0gdXNlU3RhdGUoXCJjcmVhdGVkXCIpXHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFVwZGF0ZU11dGF0aW9uID0gdXNlTXV0YXRpb24odXBkYXRlQXJ0aXN0KTtcclxuICBjb25zdCBbdXBsb2FkUEFORmlsZSwgc2V0VXBsb2FkUEFORmlsZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FydGlzdERldGFpbHMsIHNldEFydGlzdERldGFpbHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpZDogXCJcIixcclxuICAgIEVtcGxveWVlSWQ6IFwiXCIsXHJcbiAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICBsYXN0TmFtZTogXCJcIixcclxuICAgIGRvYjogXCJcIixcclxuICAgIGdlbmRlcjogXCJcIixcclxuICAgIHdvcmtFbWFpbDogXCJcIixcclxuICAgIEhvbWVFbWFpbDogXCJcIixcclxuICAgIGFubml2ZXJzYXJ5RGF0ZTogXCJcIixcclxuICAgIC8vIGNhbmNlbENoZXF1ZTogXCJcIixcclxuICAgIC8vIGNyZWF0ZWRPbjogMCxcclxuICAgIC8vIHVwZGF0ZWRPbjogMCxcclxuICAgIC8vIGlzQWN0aXZlOiAwLFxyXG4gICAgLy8gaXNEZWxldGU6IDAsXHJcbiAgICAvLyBwYW5JbWFnZTogXCJcIixcclxuICAgIC8vIGFkZHJlc3NQcm9vZjogXCJcIixcclxuICAgIC8vIG90aGVyRG9jdW1lbnQ6IFwiXCIsXHJcbiAgICAvLyBhcnRpc3RTbHVnOiBcIlwiLFxyXG4gICAgLy8gZmFjZWJvb2s6IFwiXCIsXHJcbiAgICAvLyBpbnN0YWdyYW06IFwiXCIsXHJcbiAgICAvLyBwaW50ZXJlc3Q6IFwiXCIsXHJcbiAgICAvLyB5b3V0dWJlOiBcIlwiLFxyXG4gICAgLy8gQWRkIG1vcmUgZmllbGRzIGFzIG5lZWRlZFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWxlRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXRVcGxvYWRQQU5GaWxlKGRhdGEpO1xyXG4gIH07XHJcbiAgY29uc3QgZGVsZXRlRmlsZSA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZEZpbGVEYXRhID0gWy4uLnVwbG9hZFBBTkZpbGVdO1xyXG4gICAgdXBkYXRlZEZpbGVEYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRVcGxvYWRQQU5GaWxlKHVwZGF0ZWRGaWxlRGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGZpZWxkTmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtmaWVsZE5hbWVdOiB2YWx1ZSxcclxuICAgICAgLy8gb3RoZXIgZmllbGRzLi4uXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGZldGNoQXJ0aXN0ID0gYXN5bmMgKHBhcmFtc0lEKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2VtcGxveWVlQmFzaWNJbmZvLyR7cGFyYW1zSUR9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGlmIChwYXJhbXNJRCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFydGlzdChwYXJhbXNJRCk7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoZGF0YT8uZGF0YSlcclxuICAgIH1cclxuICB9LCBbZm9ybURhdGFdKTtcclxuICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uKFxyXG4gICAgYXN5bmMgKGZvcm1EYXRhKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2VtcGxveWVlQmFzaWNJbmZvJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChwYXJhbXNJRCAmJiBhcnRpc3REZXRhaWxzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICB0cnkge1xyXG5cclxuICAgICAgICBhd2FpdCBVcGRhdGVNdXRhdGlvbi5tdXRhdGVBc3luYyhmb3JtRGF0YSlcclxuICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSlcclxuICAgICAgICBzZXRBY3Rpb24oXCJ1ZHBhdGVkXCIpXHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgbXV0YXRpb24ubXV0YXRlQXN5bmMoZm9ybURhdGEpO1xyXG4gICAgICAgIHNldFNob3dNb2RhbCh0cnVlKVxyXG4gICAgICAgIHNldEFjdGlvbihcImNyZWF0ZWRcIilcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiRnVsbCBOYW1lIDpcIn0gcGxhY2Vob2xkZXI9e1wiXCJ9IHR5cGU9e1widGV4dFwifSB2YWx1ZT17Zm9ybURhdGEuZmlyc3ROYW1lfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ2VtcGxveWVlQ29kZScsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIk1vYmlsZSBOdW1iZXIgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXtmb3JtRGF0YS5sYXN0TmFtZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdqb2luaW5nRGF0ZScsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkVtYWlsICA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcImVtYWlsXCJ9IHZhbHVlPXtmb3JtRGF0YS5Ib21lRW1haWx9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnYmVuZWZpY2Rlc2lnbmF0aW9uaWFyeU5hbWUnLCB2YWx1ZSl9IC8+XHJcbiAgICAgIDxJbnB1dCBsYWJlbD17XCJFbWFpbCA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcImVtYWlsXCJ9IHZhbHVlPXtmb3JtRGF0YS53b3JrRW1haWx9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnam9iT2ZmZXJlZCcsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkRhdGUgb2YgQmlydGggOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJkYXRlXCJ9IHZhbHVlPXtmb3JtRGF0YS5kb2J9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgncHJvYmF0aW9uUGVyaW9kJywgdmFsdWUpfSAvPlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiR2VuZGVyIDpcIn0gcGxhY2Vob2xkZXI9e1wiXCJ9IHR5cGU9e1widGV4dFwifSB2YWx1ZT17Zm9ybURhdGEuZ2VuZGVyfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ3Byb2JhdGlvblBlcmlvZCcsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkFudmVyc3kgRGF0ZSA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcImRhdGVcIn0gdmFsdWU9e2Zvcm1EYXRhLmFubml2ZXJzYXJ5RGF0ZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdwcm9iYXRpb25QZXJpb2QnLCB2YWx1ZSl9IC8+XHJcbiAgICAgIHsvKiA8SW5wdXQgbGFiZWw9e1wiRGF0ZSBvZiBCaXJ0aCA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcImRhdGVcIn0gdmFsdWU9e2Zvcm1EYXRhLmRvYn0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdkb2InLCB2YWx1ZSl9IC8+XHJcbiAgICAgIDxEcm9wZG93biBsYWJlbD17XCJHZW5kZXIgOlwifSBsaXN0PXtnZW5kZXJ9IHZhbHVlPXtmb3JtRGF0YS5hcnRpc3RHZW5kZXJ9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnYXJ0aXN0R2VuZGVyJywgdmFsdWUpfSAvPiAqL31cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdtdC0xNCc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LVsxNnB4XSBmb250LWJvbGQgZm9udC1yb2JvdG8nPlVwbG9hZCBEb2N1bWVudHM8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RmlsZSBsYWJlbD17XCJVcGxvYWQgUEFOIENhcmQgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJmaWxlXCJ9IG9uRmlsZUNoYW5nZT17aGFuZGxlRmlsZURhdGF9IC8+XHJcbiAgICAgIHt1cGxvYWRQQU5GaWxlLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYga2V5PXsxfSBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgbWwtNDQgbWItNSc+XHJcbiAgICAgICAgICB7dXBsb2FkUEFORmlsZS5tYXAoKGZpbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xMCB3LTEwIG1sLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTBcIj5cclxuICAgICAgICAgICAgICAgIDxYTWFya0ljb24gb25DbGljaz17KCkgPT4gZGVsZXRlRmlsZShpbmRleCl9IGNsYXNzTmFtZT1cInctNCBoLTQgZm9udC1ib2xkIGhvdmVyOmN1cnNvci1wb2ludGVyIHRleHQtcmVkLTYwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEZpbGVUeXBlSWNvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8RHJvcGRvd24gbGFiZWw9e1wiU2VsZWN0IEFkZHJlc3MgUHJvb2YgOlwifSBsaXN0PXtwcm9vZkNhcmR9IHZhbHVlPXtmb3JtRGF0YS5hZGRyZXNzUHJvb2Z9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnYWRkcmVzc1Byb29mJywgdmFsdWUpfSAvPlxyXG4gICAgICA8RmlsZSBsYWJlbD17XCJVcGxvYWQgRG9jdW1lbnQgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJmaWxlXCJ9IG9uRmlsZUNoYW5nZT17aGFuZGxlRmlsZURhdGF9IC8+ICovfVxyXG4gICAgICB7Lyoge2ZpbGVEYXRhLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IG1sLTQ0ICc+XHJcbiAgICAgICAgICB7ZmlsZURhdGEubWFwKChmaWxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTAgdy0xMCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8WE1hcmtJY29uIGNsYXNzTmFtZT1cInctNCBoLTQgZm9udC1ib2xkIGhvdmVyOmN1cnNvci1wb2ludGVyIHRleHQtcmVkLTYwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxGaWxlVHlwZUljb24gY2xhc3NOYW1lPVwiYmctWyNkZmYzZmZdXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICl9ICovfVxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J210LTE0Jz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1ib2xkIGZvbnQtcm9ib3RvJz5Tb2NpYWwgTWVkaWE8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiRmFjZWJvb2sgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXtmb3JtRGF0YS5mYWNlYm9va30gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdmYWNlYm9vaycsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkluc3RhZ3JhbSA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcInRleHRcIn0gdmFsdWU9e2Zvcm1EYXRhLmluc3RhZ3JhbX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdpbnN0YWdyYW0nLCB2YWx1ZSl9IC8+XHJcbiAgICAgIDxJbnB1dCBsYWJlbD17XCJQaW50ZXJlc3QgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXtmb3JtRGF0YS5waW50ZXJlc3R9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgncGludGVyZXN0JywgdmFsdWUpfSAvPlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiWW91dHViZSA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcInRleHRcIn0gdmFsdWU9e2Zvcm1EYXRhLnlvdXR1YmV9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgneW91dHViZScsIHZhbHVlKX0gLz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHB4LTgwIG10LTE0Jz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gY2xhc3NOYW1lPSdmb250LXJvYm90byB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHRleHQtWzEycHhdIGJnLVsjY2UzNDM0XSBoLTEyIHctMS8zIG1yLTQnPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmb250LXJvYm90byB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHRleHQtWzEycHhdIGJnLWJsYWNrIGgtMTIgdy0xLzMnPlN1Ym1pdCBmb3IgQXBwcm92YWw8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2hvd01vZGFsICYmIDxBZGRPclVwZGF0ZU1vZGFsIHNob3dNb2RhbD17c2hvd01vZGFsfSBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH0gcGFnZU5hbWU9e3BhZ2VOYW1lfSBhY3Rpb249e2FjdGlvbn0gLz59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljSW5mb0RldGFpbHNGb3JtIl0sIm5hbWVzIjpbIkRyb3Bkb3duIiwiSW5wdXQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2VuZGVyIiwicHJvb2ZDYXJkIiwiRmlsZSIsIlhNYXJrSWNvbiIsIkZpbGVUeXBlSWNvbiIsInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJmZXRjaEFydGlzdCIsInVwZGF0ZUFydGlzdCIsIkFkZE9yVXBkYXRlTW9kYWwiLCJUaWNrTWFyayIsInBhZ2VOYW1lIiwiQmFzaWNJbmZvRGV0YWlsc0Zvcm0iLCJwYXJhbXNJRCIsInVzZXJQcm9maWxlSW1hZ2UiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJVcGRhdGVNdXRhdGlvbiIsInVwbG9hZFBBTkZpbGUiLCJzZXRVcGxvYWRQQU5GaWxlIiwiYXJ0aXN0RGV0YWlscyIsInNldEFydGlzdERldGFpbHMiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaWQiLCJFbXBsb3llZUlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJkb2IiLCJ3b3JrRW1haWwiLCJIb21lRW1haWwiLCJhbm5pdmVyc2FyeURhdGUiLCJoYW5kbGVGaWxlRGF0YSIsImRhdGEiLCJkZWxldGVGaWxlIiwiaW5kZXgiLCJ1cGRhdGVkRmlsZURhdGEiLCJzcGxpY2UiLCJoYW5kbGVDaGFuZ2UiLCJmaWVsZE5hbWUiLCJ2YWx1ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJtdXRhdGlvbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJtdXRhdGVBc3luYyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/basicinformation/BasicInfoDetailsForm.js\n"));

/***/ })

});