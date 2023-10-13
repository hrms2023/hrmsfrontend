"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/basicinformation/[...slug]/page",{

/***/ "(app-pages-browser)/./src/app/basicinformation/BasicInfoDetailsForm.js":
/*!**********************************************************!*\
  !*** ./src/app/basicinformation/BasicInfoDetailsForm.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Inputs_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Inputs/Dropdown */ \"(app-pages-browser)/./src/components/Inputs/Dropdown.js\");\n/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Inputs/Input */ \"(app-pages-browser)/./src/components/Inputs/Input.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./src/app/utils.js\");\n/* harmony import */ var _components_Inputs_File__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Inputs/File */ \"(app-pages-browser)/./src/components/Inputs/File.js\");\n/* harmony import */ var _components_Inputs_FileTypeIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Inputs/FileTypeIcon */ \"(app-pages-browser)/./src/components/Inputs/FileTypeIcon.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/api */ \"(app-pages-browser)/./src/api/api.js\");\n/* harmony import */ var _components_Modal_AddOrUpdateModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Modal/AddOrUpdateModal */ \"(app-pages-browser)/./src/components/Modal/AddOrUpdateModal.js\");\n/* harmony import */ var _components_TickMark_TickMark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/TickMark/TickMark */ \"(app-pages-browser)/./src/components/TickMark/TickMark.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api */ \"(app-pages-browser)/./src/app/basicinformation/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst pageName = \"Job Details\";\nconst BasicInfoDetailsForm = (param)=>{\n    let { paramsID, userProfileImage } = param;\n    _s();\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"created\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const UpdateMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.useMutation)(_api_api__WEBPACK_IMPORTED_MODULE_7__.updateArtist);\n    const [uploadPANFile, setUploadPANFile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [artistDetails, setArtistDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        id: \"\",\n        EmployeeId: \"\",\n        firstName: \"\",\n        lastName: \"\",\n        dob: \"\",\n        gender: \"\",\n        workEmail: \"\",\n        HomeEmail: \"\",\n        anniversaryDate: \"\"\n    });\n    const handleFileData = (data)=>{\n        setUploadPANFile(data);\n    };\n    const deleteFile = (index)=>{\n        const updatedFileData = [\n            ...uploadPANFile\n        ];\n        updatedFileData.splice(index, 1);\n        setUploadPANFile(updatedFileData);\n    };\n    const handleChange = (fieldName, value)=>{\n        setFormData({\n            ...formData,\n            [fieldName]: value\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (paramsID) {\n                try {\n                    var _data, _data1;\n                    const data = await (0,_api__WEBPACK_IMPORTED_MODULE_10__.fetchArtist)(paramsID);\n                    // Assuming the data structure matches your formData state, set the state here\n                    setArtistDetails((_data = data) === null || _data === void 0 ? void 0 : _data.data);\n                    console.log(artistDetails);\n                    setFormData((_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.data);\n                    // You can also check the data in the console\n                    console.log(\"Fetched data:\", data);\n                } catch (error) {\n                    console.error(\"Error fetching artist data:\", error);\n                }\n            }\n        };\n        fetchData(); // Call the fetchData function when the component mounts or paramsID changes\n    }, [\n        paramsID\n    ]);\n    const mutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.useMutation)(async (formData)=>{\n        const response = await fetch(\"http://localhost:8080/api/employeeBasicInfo\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        });\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok\");\n        }\n        const data = await response.json();\n        return data;\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (paramsID && artistDetails.length !== 0) {\n            try {\n                await UpdateMutation.mutateAsync(formData);\n                setShowModal(true);\n                setAction(\"udpated\");\n            } catch (err) {\n                console.log(err);\n            }\n        } else {\n            try {\n                await mutation.mutateAsync(formData);\n                setShowModal(true);\n                setAction(\"created\");\n            } catch (error) {}\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Full Name :\",\n                type: \"text\",\n                value: formData.firstName,\n                onChange: (value)=>handleChange(\"firstName\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Mobile Number :\",\n                placeholder: \"\",\n                type: \"text\",\n                value: formData.lastName,\n                onChange: (value)=>handleChange(\"joiningDate\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Email  :\",\n                placeholder: \"\",\n                type: \"email\",\n                value: formData.HomeEmail,\n                onChange: (value)=>handleChange(\"beneficdesignationiaryName\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Email :\",\n                placeholder: \"\",\n                type: \"email\",\n                value: formData.workEmail,\n                onChange: (value)=>handleChange(\"jobOffered\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Date of Birth :\",\n                placeholder: \"\",\n                type: \"text\",\n                value: formData.dob,\n                onChange: (value)=>handleChange(\"probationPeriod\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Gender :\",\n                placeholder: \"\",\n                type: \"text\",\n                value: formData.gender,\n                onChange: (value)=>handleChange(\"probationPeriod\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Anversy Date :\",\n                placeholder: \"\",\n                type: \"date\",\n                value: formData.anniversaryDate,\n                onChange: (value)=>handleChange(\"probationPeriod\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-end px-80 mt-14\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: (e)=>handleSubmit(e),\n                            className: \"font-roboto text-white text-center text-[12px] bg-[#ce3434] h-12 w-1/3 mr-4\",\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                            lineNumber: 179,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"font-roboto text-white text-center text-[12px] bg-black h-12 w-1/3\",\n                            children: \"Submit for Approval\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                            lineNumber: 180,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                    lineNumber: 178,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 177,\n                columnNumber: 7\n            }, undefined),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal_AddOrUpdateModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                showModal: showModal,\n                setShowModal: setShowModal,\n                pageName: pageName,\n                action: action\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 184,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BasicInfoDetailsForm, \"Ulg7iQlmkcLiGZOdK8EVQJZvQAk=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.useMutation,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.useMutation\n    ];\n});\n_c = BasicInfoDetailsForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BasicInfoDetailsForm);\nvar _c;\n$RefreshReg$(_c, \"BasicInfoDetailsForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYmFzaWNpbmZvcm1hdGlvbi9CYXNpY0luZm9EZXRhaWxzRm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBQ1Y7QUFDSztBQUNOO0FBQ0Q7QUFDYTtBQUNRO0FBQ0g7QUFDckI7QUFDMEI7QUFDYjtBQUNsQjtBQUduQyxNQUFNZ0IsV0FBVztBQUNqQixNQUFNQyx1QkFBdUI7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLGdCQUFnQixFQUFFOztJQUMxRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2tCLFdBQVdDLGFBQWEsR0FBR25CLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1vQixpQkFBaUJkLG1FQUFXQSxDQUFDRSxrREFBWUE7SUFDL0MsTUFBTSxDQUFDYSxlQUFlQyxpQkFBaUIsR0FBR3RCLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTSxDQUFDdUIsZUFBZUMsaUJBQWlCLEdBQUd4QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ3lCLFVBQVVDLFlBQVksR0FBRzFCLCtDQUFRQSxDQUFDO1FBQ3ZDMkIsSUFBSTtRQUNKQyxZQUFZO1FBQ1pDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxLQUFLO1FBQ0w5QixRQUFRO1FBQ1IrQixXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsaUJBQWlCO0lBZW5CO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCZCxpQkFBaUJjO0lBQ25CO0lBQ0EsTUFBTUMsYUFBYSxDQUFDQztRQUNsQixNQUFNQyxrQkFBa0I7ZUFBSWxCO1NBQWM7UUFDMUNrQixnQkFBZ0JDLE1BQU0sQ0FBQ0YsT0FBTztRQUM5QmhCLGlCQUFpQmlCO0lBQ25CO0lBRUEsTUFBTUUsZUFBZSxDQUFDQyxXQUFXQztRQUMvQmpCLFlBQVk7WUFDVixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ2lCLFVBQVUsRUFBRUM7UUFFZjtJ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QTtnQkFBQ3NFLE9BQU87Z0JBQWtCRyxhQUFhO2dCQUFJRixNQUFNO2dCQUFRekIsT0FBT2xCLFNBQVNTLGVBQWU7Z0JBQUVtQyxVQUFVLENBQUMxQixRQUFVRixhQUFhLG1CQUFtQkU7Ozs7OzswQkEwQ3JKLDhEQUFDc0I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0s7NEJBQU9DLFNBQVMsQ0FBQ1osSUFBTUQsYUFBYUM7NEJBQUlNLFdBQVU7c0NBQThFOzs7Ozs7c0NBQ2pJLDhEQUFDSzs0QkFBT0wsV0FBVTtzQ0FBcUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSTFGaEQsMkJBQWEsOERBQUNULDBFQUFnQkE7Z0JBQUNTLFdBQVdBO2dCQUFXQyxjQUFjQTtnQkFBY1AsVUFBVUE7Z0JBQVVJLFFBQVFBOzs7Ozs7Ozs7Ozs7QUFHcEg7R0ExS01IOztRQUdtQlAsK0RBQVdBO1FBbUVqQkEsK0RBQVdBOzs7S0F0RXhCTztBQTRLTiwrREFBZUEsb0JBQW9CQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYmFzaWNpbmZvcm1hdGlvbi9CYXNpY0luZm9EZXRhaWxzRm9ybS5qcz9mMzkyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ0AvY29tcG9uZW50cy9JbnB1dHMvRHJvcGRvd24nXHJcbmltcG9ydCBJbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvSW5wdXRzL0lucHV0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZW5kZXIsIHByb29mQ2FyZCB9IGZyb20gJy4uL3V0aWxzJ1xyXG5pbXBvcnQgRmlsZSBmcm9tICdAL2NvbXBvbmVudHMvSW5wdXRzL0ZpbGUnXHJcbmltcG9ydCB7IFhNYXJrSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XHJcbmltcG9ydCB7IEZpbGVUeXBlSWNvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9JbnB1dHMvRmlsZVR5cGVJY29uJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5J1xyXG5pbXBvcnQgeyB1cGRhdGVBcnRpc3QgfSBmcm9tICdAL2FwaS9hcGknXHJcbmltcG9ydCBBZGRPclVwZGF0ZU1vZGFsIGZyb20gJ0AvY29tcG9uZW50cy9Nb2RhbC9BZGRPclVwZGF0ZU1vZGFsJ1xyXG5pbXBvcnQgVGlja01hcmsgZnJvbSAnQC9jb21wb25lbnRzL1RpY2tNYXJrL1RpY2tNYXJrJ1xyXG5pbXBvcnQgeyBmZXRjaEFydGlzdCB9IGZyb20gJy4vYXBpJ1xyXG5cclxuXHJcbmNvbnN0IHBhZ2VOYW1lID0gXCJKb2IgRGV0YWlsc1wiXHJcbmNvbnN0IEJhc2ljSW5mb0RldGFpbHNGb3JtID0gKHsgcGFyYW1zSUQsIHVzZXJQcm9maWxlSW1hZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFthY3Rpb24sIHNldEFjdGlvbl0gPSB1c2VTdGF0ZShcImNyZWF0ZWRcIilcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgVXBkYXRlTXV0YXRpb24gPSB1c2VNdXRhdGlvbih1cGRhdGVBcnRpc3QpO1xyXG4gIGNvbnN0IFt1cGxvYWRQQU5GaWxlLCBzZXRVcGxvYWRQQU5GaWxlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXJ0aXN0RGV0YWlscywgc2V0QXJ0aXN0RGV0YWlsc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGlkOiBcIlwiLFxyXG4gICAgRW1wbG95ZWVJZDogXCJcIixcclxuICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgZG9iOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIlwiLFxyXG4gICAgd29ya0VtYWlsOiBcIlwiLFxyXG4gICAgSG9tZUVtYWlsOiBcIlwiLFxyXG4gICAgYW5uaXZlcnNhcnlEYXRlOiBcIlwiLFxyXG4gICAgLy8gY2FuY2VsQ2hlcXVlOiBcIlwiLFxyXG4gICAgLy8gY3JlYXRlZE9uOiAwLFxyXG4gICAgLy8gdXBkYXRlZE9uOiAwLFxyXG4gICAgLy8gaXNBY3RpdmU6IDAsXHJcbiAgICAvLyBpc0RlbGV0ZTogMCxcclxuICAgIC8vIHBhbkltYWdlOiBcIlwiLFxyXG4gICAgLy8gYWRkcmVzc1Byb29mOiBcIlwiLFxyXG4gICAgLy8gb3RoZXJEb2N1bWVudDogXCJcIixcclxuICAgIC8vIGFydGlzdFNsdWc6IFwiXCIsXHJcbiAgICAvLyBmYWNlYm9vazogXCJcIixcclxuICAgIC8vIGluc3RhZ3JhbTogXCJcIixcclxuICAgIC8vIHBpbnRlcmVzdDogXCJcIixcclxuICAgIC8vIHlvdXR1YmU6IFwiXCIsXHJcbiAgICAvLyBBZGQgbW9yZSBmaWVsZHMgYXMgbmVlZGVkXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbGVEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIHNldFVwbG9hZFBBTkZpbGUoZGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBkZWxldGVGaWxlID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkRmlsZURhdGEgPSBbLi4udXBsb2FkUEFORmlsZV07XHJcbiAgICB1cGRhdGVkRmlsZURhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHNldFVwbG9hZFBBTkZpbGUodXBkYXRlZEZpbGVEYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZmllbGROYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW2ZpZWxkTmFtZV06IHZhbHVlLFxyXG4gICAgICAvLyBvdGhlciBmaWVsZHMuLi5cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChwYXJhbXNJRCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBcnRpc3QocGFyYW1zSUQpO1xyXG4gICAgICAgICAgLy8gQXNzdW1pbmcgdGhlIGRhdGEgc3RydWN0dXJlIG1hdGNoZXMgeW91ciBmb3JtRGF0YSBzdGF0ZSwgc2V0IHRoZSBzdGF0ZSBoZXJlXHJcbiAgICAgICAgICBzZXRBcnRpc3REZXRhaWxzKGRhdGE/LmRhdGEpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYXJ0aXN0RGV0YWlscyk7XHJcbiAgICAgICAgICBzZXRGb3JtRGF0YShkYXRhPy5kYXRhKVxyXG5cclxuICAgICAgICAgIC8vIFlvdSBjYW4gYWxzbyBjaGVjayB0aGUgZGF0YSBpbiB0aGUgY29uc29sZVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoZWQgZGF0YTonLCBkYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYXJ0aXN0IGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTsgLy8gQ2FsbCB0aGUgZmV0Y2hEYXRhIGZ1bmN0aW9uIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHMgb3IgcGFyYW1zSUQgY2hhbmdlc1xyXG5cclxuICB9LCBbcGFyYW1zSURdKTtcclxuICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uKFxyXG4gICAgYXN5bmMgKGZvcm1EYXRhKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2VtcGxveWVlQmFzaWNJbmZvJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChwYXJhbXNJRCAmJiBhcnRpc3REZXRhaWxzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICB0cnkge1xyXG5cclxuICAgICAgICBhd2FpdCBVcGRhdGVNdXRhdGlvbi5tdXRhdGVBc3luYyhmb3JtRGF0YSlcclxuICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSlcclxuICAgICAgICBzZXRBY3Rpb24oXCJ1ZHBhdGVkXCIpXHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgbXV0YXRpb24ubXV0YXRlQXN5bmMoZm9ybURhdGEpO1xyXG4gICAgICAgIHNldFNob3dNb2RhbCh0cnVlKVxyXG4gICAgICAgIHNldEFjdGlvbihcImNyZWF0ZWRcIilcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiRnVsbCBOYW1lIDpcIn0gdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXtmb3JtRGF0YS5maXJzdE5hbWV9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnZmlyc3ROYW1lJywgdmFsdWUpfSAvPlxyXG5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIk1vYmlsZSBOdW1iZXIgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXtmb3JtRGF0YS5sYXN0TmFtZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdqb2luaW5nRGF0ZScsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkVtYWlsICA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcImVtYWlsXCJ9IHZhbHVlPXtmb3JtRGF0YS5Ib21lRW1haWx9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnYmVuZWZpY2Rlc2lnbmF0aW9uaWFyeU5hbWUnLCB2YWx1ZSl9IC8+XHJcbiAgICAgIDxJbnB1dCBsYWJlbD17XCJFbWFpbCA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcImVtYWlsXCJ9IHZhbHVlPXtmb3JtRGF0YS53b3JrRW1haWx9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnam9iT2ZmZXJlZCcsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkRhdGUgb2YgQmlydGggOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXtmb3JtRGF0YS5kb2J9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgncHJvYmF0aW9uUGVyaW9kJywgdmFsdWUpfSAvPlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiR2VuZGVyIDpcIn0gcGxhY2Vob2xkZXI9e1wiXCJ9IHR5cGU9e1widGV4dFwifSB2YWx1ZT17Zm9ybURhdGEuZ2VuZGVyfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ3Byb2JhdGlvblBlcmlvZCcsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkFudmVyc3kgRGF0ZSA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcImRhdGVcIn0gdmFsdWU9e2Zvcm1EYXRhLmFubml2ZXJzYXJ5RGF0ZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdwcm9iYXRpb25QZXJpb2QnLCB2YWx1ZSl9IC8+XHJcbiAgICAgIHsvKiA8SW5wdXQgbGFiZWw9e1wiRGF0ZSBvZiBCaXJ0aCA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcImRhdGVcIn0gdmFsdWU9e2Zvcm1EYXRhLmRvYn0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdkb2InLCB2YWx1ZSl9IC8+XHJcbiAgICAgIDxEcm9wZG93biBsYWJlbD17XCJHZW5kZXIgOlwifSBsaXN0PXtnZW5kZXJ9IHZhbHVlPXtmb3JtRGF0YS5hcnRpc3RHZW5kZXJ9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnYXJ0aXN0R2VuZGVyJywgdmFsdWUpfSAvPiAqL31cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdtdC0xNCc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LVsxNnB4XSBmb250LWJvbGQgZm9udC1yb2JvdG8nPlVwbG9hZCBEb2N1bWVudHM8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RmlsZSBsYWJlbD17XCJVcGxvYWQgUEFOIENhcmQgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJmaWxlXCJ9IG9uRmlsZUNoYW5nZT17aGFuZGxlRmlsZURhdGF9IC8+XHJcbiAgICAgIHt1cGxvYWRQQU5GaWxlLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYga2V5PXsxfSBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgbWwtNDQgbWItNSc+XHJcbiAgICAgICAgICB7dXBsb2FkUEFORmlsZS5tYXAoKGZpbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xMCB3LTEwIG1sLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTBcIj5cclxuICAgICAgICAgICAgICAgIDxYTWFya0ljb24gb25DbGljaz17KCkgPT4gZGVsZXRlRmlsZShpbmRleCl9IGNsYXNzTmFtZT1cInctNCBoLTQgZm9udC1ib2xkIGhvdmVyOmN1cnNvci1wb2ludGVyIHRleHQtcmVkLTYwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEZpbGVUeXBlSWNvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8RHJvcGRvd24gbGFiZWw9e1wiU2VsZWN0IEFkZHJlc3MgUHJvb2YgOlwifSBsaXN0PXtwcm9vZkNhcmR9IHZhbHVlPXtmb3JtRGF0YS5hZGRyZXNzUHJvb2Z9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnYWRkcmVzc1Byb29mJywgdmFsdWUpfSAvPlxyXG4gICAgICA8RmlsZSBsYWJlbD17XCJVcGxvYWQgRG9jdW1lbnQgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJmaWxlXCJ9IG9uRmlsZUNoYW5nZT17aGFuZGxlRmlsZURhdGF9IC8+ICovfVxyXG4gICAgICB7Lyoge2ZpbGVEYXRhLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IG1sLTQ0ICc+XHJcbiAgICAgICAgICB7ZmlsZURhdGEubWFwKChmaWxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTAgdy0xMCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8WE1hcmtJY29uIGNsYXNzTmFtZT1cInctNCBoLTQgZm9udC1ib2xkIGhvdmVyOmN1cnNvci1wb2ludGVyIHRleHQtcmVkLTYwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxGaWxlVHlwZUljb24gY2xhc3NOYW1lPVwiYmctWyNkZmYzZmZdXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICl9ICovfVxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J210LTE0Jz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1ib2xkIGZvbnQtcm9ib3RvJz5Tb2NpYWwgTWVkaWE8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiRmFjZWJvb2sgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXtmb3JtRGF0YS5mYWNlYm9va30gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdmYWNlYm9vaycsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkluc3RhZ3JhbSA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcInRleHRcIn0gdmFsdWU9e2Zvcm1EYXRhLmluc3RhZ3JhbX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdpbnN0YWdyYW0nLCB2YWx1ZSl9IC8+XHJcbiAgICAgIDxJbnB1dCBsYWJlbD17XCJQaW50ZXJlc3QgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXtmb3JtRGF0YS5waW50ZXJlc3R9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgncGludGVyZXN0JywgdmFsdWUpfSAvPlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiWW91dHViZSA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcInRleHRcIn0gdmFsdWU9e2Zvcm1EYXRhLnlvdXR1YmV9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgneW91dHViZScsIHZhbHVlKX0gLz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHB4LTgwIG10LTE0Jz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gY2xhc3NOYW1lPSdmb250LXJvYm90byB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHRleHQtWzEycHhdIGJnLVsjY2UzNDM0XSBoLTEyIHctMS8zIG1yLTQnPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmb250LXJvYm90byB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHRleHQtWzEycHhdIGJnLWJsYWNrIGgtMTIgdy0xLzMnPlN1Ym1pdCBmb3IgQXBwcm92YWw8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2hvd01vZGFsICYmIDxBZGRPclVwZGF0ZU1vZGFsIHNob3dNb2RhbD17c2hvd01vZGFsfSBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH0gcGFnZU5hbWU9e3BhZ2VOYW1lfSBhY3Rpb249e2FjdGlvbn0gLz59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljSW5mb0RldGFpbHNGb3JtIl0sIm5hbWVzIjpbIkRyb3Bkb3duIiwiSW5wdXQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2VuZGVyIiwicHJvb2ZDYXJkIiwiRmlsZSIsIlhNYXJrSWNvbiIsIkZpbGVUeXBlSWNvbiIsInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJ1cGRhdGVBcnRpc3QiLCJBZGRPclVwZGF0ZU1vZGFsIiwiVGlja01hcmsiLCJmZXRjaEFydGlzdCIsInBhZ2VOYW1lIiwiQmFzaWNJbmZvRGV0YWlsc0Zvcm0iLCJwYXJhbXNJRCIsInVzZXJQcm9maWxlSW1hZ2UiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJVcGRhdGVNdXRhdGlvbiIsInVwbG9hZFBBTkZpbGUiLCJzZXRVcGxvYWRQQU5GaWxlIiwiYXJ0aXN0RGV0YWlscyIsInNldEFydGlzdERldGFpbHMiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaWQiLCJFbXBsb3llZUlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJkb2IiLCJ3b3JrRW1haWwiLCJIb21lRW1haWwiLCJhbm5pdmVyc2FyeURhdGUiLCJoYW5kbGVGaWxlRGF0YSIsImRhdGEiLCJkZWxldGVGaWxlIiwiaW5kZXgiLCJ1cGRhdGVkRmlsZURhdGEiLCJzcGxpY2UiLCJoYW5kbGVDaGFuZ2UiLCJmaWVsZE5hbWUiLCJ2YWx1ZSIsImZldGNoRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm11dGF0aW9uIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwibXV0YXRlQXN5bmMiLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/basicinformation/BasicInfoDetailsForm.js\n"));

/***/ })

});