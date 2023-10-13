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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Inputs_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Inputs/Dropdown */ \"(app-pages-browser)/./src/components/Inputs/Dropdown.js\");\n/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Inputs/Input */ \"(app-pages-browser)/./src/components/Inputs/Input.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./src/app/utils.js\");\n/* harmony import */ var _components_Inputs_File__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Inputs/File */ \"(app-pages-browser)/./src/components/Inputs/File.js\");\n/* harmony import */ var _components_Inputs_FileTypeIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Inputs/FileTypeIcon */ \"(app-pages-browser)/./src/components/Inputs/FileTypeIcon.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/api */ \"(app-pages-browser)/./src/api/api.js\");\n/* harmony import */ var _components_Modal_AddOrUpdateModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Modal/AddOrUpdateModal */ \"(app-pages-browser)/./src/components/Modal/AddOrUpdateModal.js\");\n/* harmony import */ var _components_TickMark_TickMark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/TickMark/TickMark */ \"(app-pages-browser)/./src/components/TickMark/TickMark.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst pageName = \"Job Details\";\nconst BasicInfoDetailsForm = (param)=>{\n    let { paramsID, userProfileImage } = param;\n    _s();\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"created\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const UpdateMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation)(_api_api__WEBPACK_IMPORTED_MODULE_7__.updateArtist);\n    const [uploadPANFile, setUploadPANFile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [artistDetails, setArtistDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        id: \"\",\n        EmployeeId: \"\",\n        firstName: \"\",\n        lastName: \"\",\n        dob: \"\",\n        gender: \"\",\n        workEmail: \"\",\n        HomeEmail: \"\",\n        anniversaryDate: \"\"\n    });\n    const handleFileData = (data)=>{\n        setUploadPANFile(data);\n    };\n    const deleteFile = (index)=>{\n        const updatedFileData = [\n            ...uploadPANFile\n        ];\n        updatedFileData.splice(index, 1);\n        setUploadPANFile(updatedFileData);\n    };\n    const handleChange = (fieldName, value)=>{\n        setFormData({\n            ...formData,\n            [fieldName]: value\n        });\n    };\n    const fetchArtist = async (paramsID)=>{\n        try {\n            const response = await fetch(\"http://localhost:8080/api/employeeBasicInfo/\".concat(paramsID));\n            const data = await response.json();\n            return data;\n        } catch (error) {\n            throw error;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async ()=>{\n        if (paramsID) {\n            try {\n                var _data;\n                const data = await fetchArtist(paramsID); // await here\n                // setArtistDetails(data?.data);\n                setFormData((_data = data) === null || _data === void 0 ? void 0 : _data.data);\n            // console.log(artistDetails);\n            // setFormData(data?.data)\n            } catch (error) {\n                console.error(\"Error fetching artist data:\", error);\n            }\n        }\n    }, [\n        formData\n    ]);\n    const mutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation)(async (formData)=>{\n        const response = await fetch(\"http://localhost:8080/api/employeeBasicInfo\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        });\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok\");\n        }\n        const data = await response.json();\n        return data;\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (paramsID && artistDetails.length !== 0) {\n            try {\n                await UpdateMutation.mutateAsync(formData);\n                setShowModal(true);\n                setAction(\"udpated\");\n            } catch (err) {\n                console.log(err);\n            }\n        } else {\n            try {\n                await mutation.mutateAsync(formData);\n                setShowModal(true);\n                setAction(\"created\");\n            } catch (error) {}\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Full Name :\",\n                placeholder: \"\",\n                type: \"text\",\n                value: formData.firstName,\n                onChange: (value)=>handleChange(\"employeeCode\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Mobile Number :\",\n                placeholder: \"\",\n                type: \"text\",\n                value: formData.lastName,\n                onChange: (value)=>handleChange(\"joiningDate\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Email  :\",\n                placeholder: \"\",\n                type: \"email\",\n                value: formData.HomeEmail,\n                onChange: (value)=>handleChange(\"beneficdesignationiaryName\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Email :\",\n                placeholder: \"\",\n                type: \"email\",\n                value: formData.workEmail,\n                onChange: (value)=>handleChange(\"jobOffered\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Date of Birth :\",\n                placeholder: \"\",\n                type: \"date\",\n                value: formData.dob,\n                onChange: (value)=>handleChange(\"probationPeriod\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Gender :\",\n                placeholder: \"\",\n                type: \"text\",\n                value: formData.gender,\n                onChange: (value)=>handleChange(\"probationPeriod\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Anversy Date :\",\n                placeholder: \"\",\n                type: \"date\",\n                value: formData.anniversaryDate,\n                onChange: (value)=>handleChange(\"probationPeriod\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-end px-80 mt-14\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: (e)=>handleSubmit(e),\n                            className: \"font-roboto text-white text-center text-[12px] bg-[#ce3434] h-12 w-1/3 mr-4\",\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                            lineNumber: 179,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"font-roboto text-white text-center text-[12px] bg-black h-12 w-1/3\",\n                            children: \"Submit for Approval\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                            lineNumber: 180,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                    lineNumber: 178,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 177,\n                columnNumber: 7\n            }, undefined),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal_AddOrUpdateModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                showModal: showModal,\n                setShowModal: setShowModal,\n                pageName: pageName,\n                action: action\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 184,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BasicInfoDetailsForm, \"Ulg7iQlmkcLiGZOdK8EVQJZvQAk=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation\n    ];\n});\n_c = BasicInfoDetailsForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BasicInfoDetailsForm);\nvar _c;\n$RefreshReg$(_c, \"BasicInfoDetailsForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYmFzaWNpbmZvcm1hdGlvbi9CYXNpY0luZm9EZXRhaWxzRm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDdUQ7QUFDVjtBQUNLO0FBQ047QUFDRDtBQUNhO0FBQ1E7QUFDSDtBQUNSO0FBQ2E7QUFDYjtBQUdyRCxNQUFNZ0IsV0FBVztBQUNqQixNQUFNQyx1QkFBdUI7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLGdCQUFnQixFQUFFOztJQUMxRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2tCLFdBQVdDLGFBQWEsR0FBR25CLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1vQixpQkFBaUJkLG1FQUFXQSxDQUFDRyxrREFBWUE7SUFDL0MsTUFBTSxDQUFDWSxlQUFlQyxpQkFBaUIsR0FBR3RCLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTSxDQUFDdUIsZUFBZUMsaUJBQWlCLEdBQUd4QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ3lCLFVBQVVDLFlBQVksR0FBRzFCLCtDQUFRQSxDQUFDO1FBQ3ZDMkIsSUFBSTtRQUNKQyxZQUFZO1FBQ1pDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxLQUFLO1FBQ0w5QixRQUFRO1FBQ1IrQixXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsaUJBQWlCO0lBZW5CO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCZCxpQkFBaUJjO0lBQ25CO0lBQ0EsTUFBTUMsYUFBYSxDQUFDQztRQUNsQixNQUFNQyxrQkFBa0I7ZUFBSWxCO1NBQWM7UUFDMUNrQixnQkFBZ0JDLE1BQU0sQ0FBQ0YsT0FBTztRQUM5QmhCLGlCQUFpQmlCO0lBQ25CO0lBRUEsTUFBTUUsZUFBZSxDQUFDQyxXQUFXQztRQUMvQmpCLFlBQVk7WUFDVixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ2lCLFVBQVUsRUFBRUM7UUFFZjtJQUNGO0lBQ0EsTUFBTW5DLGNBQWMsT0FBT007UUFDekIsSUFBSTtZQUNGLE1BQU04QixXQUFXLE1BQU1DLE1BQU0sK0NBQXdELE9BQVQvQjtZQUM1RSxNQUFNc0IsT0FBTyxNQUFNUSxTQUFTRSxJQUFJO1lBRWhDLE9BQU9WO1FBQ1QsRUFBRSxPQUFPVyxPQUFPO1lBQ2QsTUFBTUE7UUFDUjtJQUNGO0lBQ0FoRCxnREFBU0EsQ0FBQztRQUNSLElBQUllLFVBQVU7WUFDWixJQUFJO29CQUdVc0I7Z0JBRlosTUFBTUEsT0FBTyxNQUFNNUIsWUFBWU0sV0FBVyxhQUFhO2dCQUN2RCxnQ0FBZ0M7Z0JBQ2hDWSxhQUFZVSxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1BLElBQUk7WUFDdEIsOEJBQThCO1lBQzlCLDBCQUEwQjtZQUU1QixFQUFFLE9BQU9XLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO1lBQy9DO1FBQ0Y7SUFDRixHQUFHO1FBQUN0QjtLQUFTO0lBQ2IsTUFBTXdCLFdBQVczQyxtRUFBV0EsQ0FDMUIsT0FBT21CO1FBRUwsTUFBTW1CLFdBQVcsTUFBTUMsTUFBTSwrQ0FBK0M7WUFDMUVLLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDN0I7UUFDdkI7UUFDQSxJQUFJLENBQUNtQixTQUFTVyxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBRUEsTUFBTXBCLE9BQU8sTUFBTVEsU0FBU0UsSUFBSTtRQUNoQyxPQUFPVjtJQUNUO0lBR0YsTUFBTXFCLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTdDLFlBQVlTLGNBQWNxQyxNQUFNLEtBQUssR0FBRztZQUMxQyxJQUFJO2dCQUVGLE1BQU14QyxlQUFleUMsV0FBVyxDQUFDcEM7Z0JBQ2pDTixhQUFhO2dCQUNiRixVQUFVO1lBQ1osRUFBRSxPQUFPNkMsS0FBSztnQkFDWmQsUUFBUWUsR0FBRyxDQUFDRDtZQUNkO1FBQ0YsT0FBTztZQUNMLElBQUk7Z0JBQ0YsTUFBTWIsU0FBU1ksV0FBVyxDQUFDcEM7Z0JBQzNCTixhQUFhO2dCQUNiRixVQUFVO1lBQ1osRUFBRSxPQUFPOEIsT0FBTyxDQUNoQjtRQUNGO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDcEUsZ0VBQUtBO2dCQUFDcUUsT0FBTztnQkFBZUMsYUFBYTtnQkFBSUMsTUFBTTtnQkFBUXpCLE9BQU9sQixTQUFTSSxTQUFTO2dCQUFFd0MsVUFBVSxDQUFDMUIsUUFBVUYsYUFBYSxnQkFBZ0JFOzs7Ozs7MEJBQ3pJLDhEQUFDOUMsZ0VBQUtBO2dCQUFDcUUsT0FBTztnQkFBbUJDLGFBQWE7Z0JBQUlDLE1BQU07Z0JBQVF6QixPQUFPbEIsU0FBU0ssUUFBUTtnQkFBRXVDLFVBQVUsQ0FBQzFCLFFBQVVGLGFBQWEsZUFBZUU7Ozs7OzswQkFDM0ksOERBQUM5QyxnRUFBS0E7Z0JBQUNxRSxPQUFPO2dCQUFZQyxhQUFhO2dCQUFJQyxNQUFNO2dCQUFTekIsT0FBT2xCLFNBQVNRLFNBQVM7Z0JBQUVvQyxVQUFVLENBQUMxQixRQUFVRixhQUFhLDhCQUE4QkU7Ozs7OzswQkFDckosOERBQUM5QyxnRUFBS0E7Z0JBQUNxRSxPQUFPO2dCQUFXQyxhQUFhO2dCQUFJQyxNQUFNO2dCQUFTekIsT0FBT2xCLFNBQVNPLFNBQVM7Z0JBQUVxQyxVQUFVLENBQUMxQixRQUFVRixhQUFhLGNBQWNFOzs7Ozs7MEJBQ3BJLDhEQUFDOUMsZ0VBQUtBO2dCQUFDcUUsT0FBTztnQkFBbUJDLGFBQWE7Z0JBQUlDLE1BQU07Z0JBQVF6QixPQUFPbEIsU0FBU00sR0FBRztnQkFBRXNDLFVBQVUsQ0FBQzFCLFFBQVVGLGFBQWEsbUJBQW1CRTs7Ozs7OzBCQUMxSSw4REFBQzlDLGdFQUFLQTtnQkFBQ3FFLE9BQU87Z0JBQVlDLGFBQWE7Z0JBQUlDLE1BQU07Z0JBQVF6QixPQUFPbEIsU0FBU3hCLE1BQU07Z0JBQUVvRSxVQUFVLENBQUMxQixRQUFVRixhQUFhLG1CQUFtQkU7Ozs7OzswQkFDdEksOERBQUM5QyxnRUFBS0E7Z0JBQUNxRSxPQUFPO2dCQUFrQkMsYUFBYTtnQkFBSUMsTUFBTTtnQkFBUXpCLE9BQU9sQixTQUFTUyxlQUFlO2dCQUFFbUMsVUFBVSxDQUFDMUIsUUFBVUYsYUFBYSxtQkFBbUJFOzs7Ozs7MEJBMENySiw4REFBQ3FCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNLOzRCQUFPQyxTQUFTLENBQUNiLElBQU1ELGFBQWFDOzRCQUFJTyxXQUFVO3NDQUE4RTs7Ozs7O3NDQUNqSSw4REFBQ0s7NEJBQU9MLFdBQVU7c0NBQXFFOzs7Ozs7Ozs7Ozs7Ozs7OztZQUkxRi9DLDJCQUFhLDhEQUFDUiwwRUFBZ0JBO2dCQUFDUSxXQUFXQTtnQkFBV0MsY0FBY0E7Z0JBQWNQLFVBQVVBO2dCQUFVSSxRQUFRQTs7Ozs7Ozs7Ozs7O0FBR3BIO0dBM0tNSDs7UUFHbUJQLCtEQUFXQTtRQXFFakJBLCtEQUFXQTs7O0tBeEV4Qk87QUE2S04sK0RBQWVBLG9CQUFvQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Jhc2ljaW5mb3JtYXRpb24vQmFzaWNJbmZvRGV0YWlsc0Zvcm0uanM/ZjM5MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdAL2NvbXBvbmVudHMvSW5wdXRzL0Ryb3Bkb3duJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL0lucHV0cy9JbnB1dCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ2VuZGVyLCBwcm9vZkNhcmQgfSBmcm9tICcuLi91dGlscydcclxuaW1wb3J0IEZpbGUgZnJvbSAnQC9jb21wb25lbnRzL0lucHV0cy9GaWxlJ1xyXG5pbXBvcnQgeyBYTWFya0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xyXG5pbXBvcnQgeyBGaWxlVHlwZUljb24gfSBmcm9tICdAL2NvbXBvbmVudHMvSW5wdXRzL0ZpbGVUeXBlSWNvbic7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSdcclxuaW1wb3J0IHsgZmV0Y2hBcnRpc3QsIHVwZGF0ZUFydGlzdCB9IGZyb20gJ0AvYXBpL2FwaSdcclxuaW1wb3J0IEFkZE9yVXBkYXRlTW9kYWwgZnJvbSAnQC9jb21wb25lbnRzL01vZGFsL0FkZE9yVXBkYXRlTW9kYWwnXHJcbmltcG9ydCBUaWNrTWFyayBmcm9tICdAL2NvbXBvbmVudHMvVGlja01hcmsvVGlja01hcmsnXHJcblxyXG5cclxuY29uc3QgcGFnZU5hbWUgPSBcIkpvYiBEZXRhaWxzXCJcclxuY29uc3QgQmFzaWNJbmZvRGV0YWlsc0Zvcm0gPSAoeyBwYXJhbXNJRCwgdXNlclByb2ZpbGVJbWFnZSB9KSA9PiB7XHJcbiAgY29uc3QgW2FjdGlvbiwgc2V0QWN0aW9uXSA9IHVzZVN0YXRlKFwiY3JlYXRlZFwiKVxyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBVcGRhdGVNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHVwZGF0ZUFydGlzdCk7XHJcbiAgY29uc3QgW3VwbG9hZFBBTkZpbGUsIHNldFVwbG9hZFBBTkZpbGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthcnRpc3REZXRhaWxzLCBzZXRBcnRpc3REZXRhaWxzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgaWQ6IFwiXCIsXHJcbiAgICBFbXBsb3llZUlkOiBcIlwiLFxyXG4gICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICBkb2I6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwiXCIsXHJcbiAgICB3b3JrRW1haWw6IFwiXCIsXHJcbiAgICBIb21lRW1haWw6IFwiXCIsXHJcbiAgICBhbm5pdmVyc2FyeURhdGU6IFwiXCIsXHJcbiAgICAvLyBjYW5jZWxDaGVxdWU6IFwiXCIsXHJcbiAgICAvLyBjcmVhdGVkT246IDAsXHJcbiAgICAvLyB1cGRhdGVkT246IDAsXHJcbiAgICAvLyBpc0FjdGl2ZTogMCxcclxuICAgIC8vIGlzRGVsZXRlOiAwLFxyXG4gICAgLy8gcGFuSW1hZ2U6IFwiXCIsXHJcbiAgICAvLyBhZGRyZXNzUHJvb2Y6IFwiXCIsXHJcbiAgICAvLyBvdGhlckRvY3VtZW50OiBcIlwiLFxyXG4gICAgLy8gYXJ0aXN0U2x1ZzogXCJcIixcclxuICAgIC8vIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgLy8gaW5zdGFncmFtOiBcIlwiLFxyXG4gICAgLy8gcGludGVyZXN0OiBcIlwiLFxyXG4gICAgLy8geW91dHViZTogXCJcIixcclxuICAgIC8vIEFkZCBtb3JlIGZpZWxkcyBhcyBuZWVkZWRcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsZURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgc2V0VXBsb2FkUEFORmlsZShkYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IGRlbGV0ZUZpbGUgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRGaWxlRGF0YSA9IFsuLi51cGxvYWRQQU5GaWxlXTtcclxuICAgIHVwZGF0ZWRGaWxlRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgc2V0VXBsb2FkUEFORmlsZSh1cGRhdGVkRmlsZURhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChmaWVsZE5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICBbZmllbGROYW1lXTogdmFsdWUsXHJcbiAgICAgIC8vIG90aGVyIGZpZWxkcy4uLlxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBmZXRjaEFydGlzdCA9IGFzeW5jIChwYXJhbXNJRCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9lbXBsb3llZUJhc2ljSW5mby8ke3BhcmFtc0lEfWApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAocGFyYW1zSUQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBcnRpc3QocGFyYW1zSUQpOyAvLyBhd2FpdCBoZXJlXHJcbiAgICAgICAgLy8gc2V0QXJ0aXN0RGV0YWlscyhkYXRhPy5kYXRhKTtcclxuICAgICAgICBzZXRGb3JtRGF0YShkYXRhPy5kYXRhKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFydGlzdERldGFpbHMpO1xyXG4gICAgICAgIC8vIHNldEZvcm1EYXRhKGRhdGE/LmRhdGEpXHJcbiAgICBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhcnRpc3QgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbZm9ybURhdGFdKTtcclxuICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uKFxyXG4gICAgYXN5bmMgKGZvcm1EYXRhKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2VtcGxveWVlQmFzaWNJbmZvJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChwYXJhbXNJRCAmJiBhcnRpc3REZXRhaWxzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICB0cnkge1xyXG5cclxuICAgICAgICBhd2FpdCBVcGRhdGVNdXRhdGlvbi5tdXRhdGVBc3luYyhmb3JtRGF0YSlcclxuICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSlcclxuICAgICAgICBzZXRBY3Rpb24oXCJ1ZHBhdGVkXCIpXHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgbXV0YXRpb24ubXV0YXRlQXN5bmMoZm9ybURhdGEpO1xyXG4gICAgICAgIHNldFNob3dNb2RhbCh0cnVlKVxyXG4gICAgICAgIHNldEFjdGlvbihcImNyZWF0ZWRcIilcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiRnVsbCBOYW1lIDpcIn0gcGxhY2Vob2xkZXI9e1wiXCJ9IHR5cGU9e1widGV4dFwifSB2YWx1ZT17Zm9ybURhdGEuZmlyc3ROYW1lfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ2VtcGxveWVlQ29kZScsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIk1vYmlsZSBOdW1iZXIgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXtmb3JtRGF0YS5sYXN0TmFtZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdqb2luaW5nRGF0ZScsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkVtYWlsICA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcImVtYWlsXCJ9IHZhbHVlPXtmb3JtRGF0YS5Ib21lRW1haWx9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnYmVuZWZpY2Rlc2lnbmF0aW9uaWFyeU5hbWUnLCB2YWx1ZSl9IC8+XHJcbiAgICAgIDxJbnB1dCBsYWJlbD17XCJFbWFpbCA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcImVtYWlsXCJ9IHZhbHVlPXtmb3JtRGF0YS53b3JrRW1haWx9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnam9iT2ZmZXJlZCcsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkRhdGUgb2YgQmlydGggOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJkYXRlXCJ9IHZhbHVlPXtmb3JtRGF0YS5kb2J9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgncHJvYmF0aW9uUGVyaW9kJywgdmFsdWUpfSAvPlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiR2VuZGVyIDpcIn0gcGxhY2Vob2xkZXI9e1wiXCJ9IHR5cGU9e1widGV4dFwifSB2YWx1ZT17Zm9ybURhdGEuZ2VuZGVyfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ3Byb2JhdGlvblBlcmlvZCcsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkFudmVyc3kgRGF0ZSA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcImRhdGVcIn0gdmFsdWU9e2Zvcm1EYXRhLmFubml2ZXJzYXJ5RGF0ZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdwcm9iYXRpb25QZXJpb2QnLCB2YWx1ZSl9IC8+XHJcbiAgICAgIHsvKiA8SW5wdXQgbGFiZWw9e1wiRGF0ZSBvZiBCaXJ0aCA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcImRhdGVcIn0gdmFsdWU9e2Zvcm1EYXRhLmRvYn0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdkb2InLCB2YWx1ZSl9IC8+XHJcbiAgICAgIDxEcm9wZG93biBsYWJlbD17XCJHZW5kZXIgOlwifSBsaXN0PXtnZW5kZXJ9IHZhbHVlPXtmb3JtRGF0YS5hcnRpc3RHZW5kZXJ9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnYXJ0aXN0R2VuZGVyJywgdmFsdWUpfSAvPiAqL31cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdtdC0xNCc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LVsxNnB4XSBmb250LWJvbGQgZm9udC1yb2JvdG8nPlVwbG9hZCBEb2N1bWVudHM8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RmlsZSBsYWJlbD17XCJVcGxvYWQgUEFOIENhcmQgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJmaWxlXCJ9IG9uRmlsZUNoYW5nZT17aGFuZGxlRmlsZURhdGF9IC8+XHJcbiAgICAgIHt1cGxvYWRQQU5GaWxlLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYga2V5PXsxfSBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgbWwtNDQgbWItNSc+XHJcbiAgICAgICAgICB7dXBsb2FkUEFORmlsZS5tYXAoKGZpbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xMCB3LTEwIG1sLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTBcIj5cclxuICAgICAgICAgICAgICAgIDxYTWFya0ljb24gb25DbGljaz17KCkgPT4gZGVsZXRlRmlsZShpbmRleCl9IGNsYXNzTmFtZT1cInctNCBoLTQgZm9udC1ib2xkIGhvdmVyOmN1cnNvci1wb2ludGVyIHRleHQtcmVkLTYwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEZpbGVUeXBlSWNvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8RHJvcGRvd24gbGFiZWw9e1wiU2VsZWN0IEFkZHJlc3MgUHJvb2YgOlwifSBsaXN0PXtwcm9vZkNhcmR9IHZhbHVlPXtmb3JtRGF0YS5hZGRyZXNzUHJvb2Z9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnYWRkcmVzc1Byb29mJywgdmFsdWUpfSAvPlxyXG4gICAgICA8RmlsZSBsYWJlbD17XCJVcGxvYWQgRG9jdW1lbnQgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJmaWxlXCJ9IG9uRmlsZUNoYW5nZT17aGFuZGxlRmlsZURhdGF9IC8+ICovfVxyXG4gICAgICB7Lyoge2ZpbGVEYXRhLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IG1sLTQ0ICc+XHJcbiAgICAgICAgICB7ZmlsZURhdGEubWFwKChmaWxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTAgdy0xMCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8WE1hcmtJY29uIGNsYXNzTmFtZT1cInctNCBoLTQgZm9udC1ib2xkIGhvdmVyOmN1cnNvci1wb2ludGVyIHRleHQtcmVkLTYwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxGaWxlVHlwZUljb24gY2xhc3NOYW1lPVwiYmctWyNkZmYzZmZdXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICl9ICovfVxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J210LTE0Jz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1ib2xkIGZvbnQtcm9ib3RvJz5Tb2NpYWwgTWVkaWE8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiRmFjZWJvb2sgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXtmb3JtRGF0YS5mYWNlYm9va30gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdmYWNlYm9vaycsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkluc3RhZ3JhbSA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcInRleHRcIn0gdmFsdWU9e2Zvcm1EYXRhLmluc3RhZ3JhbX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdpbnN0YWdyYW0nLCB2YWx1ZSl9IC8+XHJcbiAgICAgIDxJbnB1dCBsYWJlbD17XCJQaW50ZXJlc3QgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXtmb3JtRGF0YS5waW50ZXJlc3R9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgncGludGVyZXN0JywgdmFsdWUpfSAvPlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiWW91dHViZSA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcInRleHRcIn0gdmFsdWU9e2Zvcm1EYXRhLnlvdXR1YmV9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgneW91dHViZScsIHZhbHVlKX0gLz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHB4LTgwIG10LTE0Jz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gY2xhc3NOYW1lPSdmb250LXJvYm90byB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHRleHQtWzEycHhdIGJnLVsjY2UzNDM0XSBoLTEyIHctMS8zIG1yLTQnPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmb250LXJvYm90byB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHRleHQtWzEycHhdIGJnLWJsYWNrIGgtMTIgdy0xLzMnPlN1Ym1pdCBmb3IgQXBwcm92YWw8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2hvd01vZGFsICYmIDxBZGRPclVwZGF0ZU1vZGFsIHNob3dNb2RhbD17c2hvd01vZGFsfSBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH0gcGFnZU5hbWU9e3BhZ2VOYW1lfSBhY3Rpb249e2FjdGlvbn0gLz59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljSW5mb0RldGFpbHNGb3JtIl0sIm5hbWVzIjpbIkRyb3Bkb3duIiwiSW5wdXQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2VuZGVyIiwicHJvb2ZDYXJkIiwiRmlsZSIsIlhNYXJrSWNvbiIsIkZpbGVUeXBlSWNvbiIsInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJmZXRjaEFydGlzdCIsInVwZGF0ZUFydGlzdCIsIkFkZE9yVXBkYXRlTW9kYWwiLCJUaWNrTWFyayIsInBhZ2VOYW1lIiwiQmFzaWNJbmZvRGV0YWlsc0Zvcm0iLCJwYXJhbXNJRCIsInVzZXJQcm9maWxlSW1hZ2UiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJVcGRhdGVNdXRhdGlvbiIsInVwbG9hZFBBTkZpbGUiLCJzZXRVcGxvYWRQQU5GaWxlIiwiYXJ0aXN0RGV0YWlscyIsInNldEFydGlzdERldGFpbHMiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaWQiLCJFbXBsb3llZUlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJkb2IiLCJ3b3JrRW1haWwiLCJIb21lRW1haWwiLCJhbm5pdmVyc2FyeURhdGUiLCJoYW5kbGVGaWxlRGF0YSIsImRhdGEiLCJkZWxldGVGaWxlIiwiaW5kZXgiLCJ1cGRhdGVkRmlsZURhdGEiLCJzcGxpY2UiLCJoYW5kbGVDaGFuZ2UiLCJmaWVsZE5hbWUiLCJ2YWx1ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibXV0YXRpb24iLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwibXV0YXRlQXN5bmMiLCJlcnIiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/basicinformation/BasicInfoDetailsForm.js\n"));

/***/ })

});