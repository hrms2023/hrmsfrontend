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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Inputs_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Inputs/Dropdown */ \"(app-pages-browser)/./src/components/Inputs/Dropdown.js\");\n/* harmony import */ var _components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Inputs/Input */ \"(app-pages-browser)/./src/components/Inputs/Input.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./src/app/utils.js\");\n/* harmony import */ var _components_Inputs_File__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Inputs/File */ \"(app-pages-browser)/./src/components/Inputs/File.js\");\n/* harmony import */ var _components_Inputs_FileTypeIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Inputs/FileTypeIcon */ \"(app-pages-browser)/./src/components/Inputs/FileTypeIcon.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/lib/useMutation.mjs\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/api */ \"(app-pages-browser)/./src/api/api.js\");\n/* harmony import */ var _components_Modal_AddOrUpdateModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Modal/AddOrUpdateModal */ \"(app-pages-browser)/./src/components/Modal/AddOrUpdateModal.js\");\n/* harmony import */ var _components_TickMark_TickMark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/TickMark/TickMark */ \"(app-pages-browser)/./src/components/TickMark/TickMark.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api */ \"(app-pages-browser)/./src/app/basicinformation/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst pageName = \"Job Details\";\nconst BasicInfoDetailsForm = (param)=>{\n    let { paramsID, userProfileImage } = param;\n    _s();\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"created\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const UpdateMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.useMutation)(_api_api__WEBPACK_IMPORTED_MODULE_7__.updateArtist);\n    const [uploadPANFile, setUploadPANFile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [artistDetails, setArtistDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        id: \"\",\n        EmployeeId: \"\",\n        firstName: \"\",\n        lastName: \"\",\n        dob: \"\",\n        gender: \"\",\n        workEmail: \"\",\n        HomeEmail: \"\",\n        anniversaryDate: \"\"\n    });\n    const handleFileData = (data)=>{\n        setUploadPANFile(data);\n    };\n    const deleteFile = (index)=>{\n        const updatedFileData = [\n            ...uploadPANFile\n        ];\n        updatedFileData.splice(index, 1);\n        setUploadPANFile(updatedFileData);\n    };\n    const handleChange = (fieldName, value)=>{\n        setFormData({\n            ...formData,\n            [fieldName]: value\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            if (paramsID) {\n                try {\n                    var _data;\n                    const data = await (0,_api__WEBPACK_IMPORTED_MODULE_10__.fetchArtist)(paramsID);\n                    // Assuming the data structure matches your formData state, set the state here\n                    setArtistDetails((_data = data) === null || _data === void 0 ? void 0 : _data.data);\n                    // console.log(artistDetails);\n                    // setFormData(data?.data)\n                    // You can also check the data in the console\n                    console.log(\"Fetched data:\", data);\n                } catch (error) {\n                    console.error(\"Error fetching artist data:\", error);\n                }\n            }\n        };\n        fetchData(); // Call the fetchData function when the component mounts or paramsID changes\n    }, [\n        paramsID\n    ]);\n    const mutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.useMutation)(async (formData)=>{\n        const response = await fetch(\"http://localhost:8080/api/employeeBasicInfo\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        });\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok\");\n        }\n        const data = await response.json();\n        return data;\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (paramsID && artistDetails.length !== 0) {\n            try {\n                await UpdateMutation.mutateAsync(formData);\n                setShowModal(true);\n                setAction(\"udpated\");\n            } catch (err) {\n                console.log(err);\n            }\n        } else {\n            try {\n                await mutation.mutateAsync(formData);\n                setShowModal(true);\n                setAction(\"created\");\n            } catch (error) {}\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Full Name :\",\n                type: \"text\",\n                value: formData.firstName,\n                onChange: (value)=>handleChange(\"firstName\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Mobile Number :\",\n                placeholder: \"\",\n                type: \"text\",\n                value: formData.lastName,\n                onChange: (value)=>handleChange(\"joiningDate\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Email  :\",\n                placeholder: \"\",\n                type: \"email\",\n                value: formData.HomeEmail,\n                onChange: (value)=>handleChange(\"beneficdesignationiaryName\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Email :\",\n                placeholder: \"\",\n                type: \"email\",\n                value: formData.workEmail,\n                onChange: (value)=>handleChange(\"jobOffered\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Date of Birth :\",\n                placeholder: \"\",\n                type: \"text\",\n                value: formData.dob,\n                onChange: (value)=>handleChange(\"probationPeriod\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Gender :\",\n                placeholder: \"\",\n                type: \"text\",\n                value: formData.gender,\n                onChange: (value)=>handleChange(\"probationPeriod\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Inputs_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                label: \"Anversy Date :\",\n                placeholder: \"\",\n                type: \"date\",\n                value: formData.anniversaryDate,\n                onChange: (value)=>handleChange(\"probationPeriod\", value)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-end px-80 mt-14\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: (e)=>handleSubmit(e),\n                            className: \"font-roboto text-white text-center text-[12px] bg-[#ce3434] h-12 w-1/3 mr-4\",\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                            lineNumber: 179,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"font-roboto text-white text-center text-[12px] bg-black h-12 w-1/3\",\n                            children: \"Submit for Approval\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                            lineNumber: 180,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                    lineNumber: 178,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 177,\n                columnNumber: 7\n            }, undefined),\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal_AddOrUpdateModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                showModal: showModal,\n                setShowModal: setShowModal,\n                pageName: pageName,\n                action: action\n            }, void 0, false, {\n                fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n                lineNumber: 184,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\nextTraining\\\\creatinn\\\\src\\\\app\\\\basicinformation\\\\BasicInfoDetailsForm.js\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BasicInfoDetailsForm, \"Ulg7iQlmkcLiGZOdK8EVQJZvQAk=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.useMutation,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.useMutation\n    ];\n});\n_c = BasicInfoDetailsForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BasicInfoDetailsForm);\nvar _c;\n$RefreshReg$(_c, \"BasicInfoDetailsForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYmFzaWNpbmZvcm1hdGlvbi9CYXNpY0luZm9EZXRhaWxzRm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBQ1Y7QUFDSztBQUNOO0FBQ0Q7QUFDYTtBQUNRO0FBQ0g7QUFDckI7QUFDMEI7QUFDYjtBQUNsQjtBQUduQyxNQUFNZ0IsV0FBVztBQUNqQixNQUFNQyx1QkFBdUI7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLGdCQUFnQixFQUFFOztJQUMxRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2tCLFdBQVdDLGFBQWEsR0FBR25CLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1vQixpQkFBaUJkLG1FQUFXQSxDQUFDRSxrREFBWUE7SUFDL0MsTUFBTSxDQUFDYSxlQUFlQyxpQkFBaUIsR0FBR3RCLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTSxDQUFDdUIsZUFBZUMsaUJBQWlCLEdBQUd4QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ3lCLFVBQVVDLFlBQVksR0FBRzFCLCtDQUFRQSxDQUFDO1FBQ3ZDMkIsSUFBSTtRQUNKQyxZQUFZO1FBQ1pDLFdBQVc7UUFDWEMsVUFBVTtRQUNWQyxLQUFLO1FBQ0w5QixRQUFRO1FBQ1IrQixXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsaUJBQWlCO0lBZW5CO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCZCxpQkFBaUJjO0lBQ25CO0lBQ0EsTUFBTUMsYUFBYSxDQUFDQztRQUNsQixNQUFNQyxrQkFBa0I7ZUFBSWxCO1NBQWM7UUFDMUNrQixnQkFBZ0JDLE1BQU0sQ0FBQ0YsT0FBTztRQUM5QmhCLGlCQUFpQmlCO0lBQ25CO0lBRUEsTUFBTUUsZUFBZSxDQUFDQyxXQUFXQztRQUMvQmpCLFlBQVk7WUFDVixHQUFHRCxRQUFRO1lBQ1gsQ0FBQ2lCLFVBQVUsRUFBRUM7UUFFZjtJ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LE9BQU9sQixTQUFTUyxlQUFlO2dCQUFFbUMsVUFBVSxDQUFDMUIsUUFBVUYsYUFBYSxtQkFBbUJFOzs7Ozs7MEJBMENySiw4REFBQ3NCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNLOzRCQUFPQyxTQUFTLENBQUNaLElBQU1ELGFBQWFDOzRCQUFJTSxXQUFVO3NDQUE4RTs7Ozs7O3NDQUNqSSw4REFBQ0s7NEJBQU9MLFdBQVU7c0NBQXFFOzs7Ozs7Ozs7Ozs7Ozs7OztZQUkxRmhELDJCQUFhLDhEQUFDVCwwRUFBZ0JBO2dCQUFDUyxXQUFXQTtnQkFBV0MsY0FBY0E7Z0JBQWNQLFVBQVVBO2dCQUFVSSxRQUFRQTs7Ozs7Ozs7Ozs7O0FBR3BIO0dBMUtNSDs7UUFHbUJQLCtEQUFXQTtRQW1FakJBLCtEQUFXQTs7O0tBdEV4Qk87QUE0S04sK0RBQWVBLG9CQUFvQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Jhc2ljaW5mb3JtYXRpb24vQmFzaWNJbmZvRGV0YWlsc0Zvcm0uanM/ZjM5MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdAL2NvbXBvbmVudHMvSW5wdXRzL0Ryb3Bkb3duJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL0lucHV0cy9JbnB1dCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ2VuZGVyLCBwcm9vZkNhcmQgfSBmcm9tICcuLi91dGlscydcclxuaW1wb3J0IEZpbGUgZnJvbSAnQC9jb21wb25lbnRzL0lucHV0cy9GaWxlJ1xyXG5pbXBvcnQgeyBYTWFya0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xyXG5pbXBvcnQgeyBGaWxlVHlwZUljb24gfSBmcm9tICdAL2NvbXBvbmVudHMvSW5wdXRzL0ZpbGVUeXBlSWNvbic7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSdcclxuaW1wb3J0IHsgdXBkYXRlQXJ0aXN0IH0gZnJvbSAnQC9hcGkvYXBpJ1xyXG5pbXBvcnQgQWRkT3JVcGRhdGVNb2RhbCBmcm9tICdAL2NvbXBvbmVudHMvTW9kYWwvQWRkT3JVcGRhdGVNb2RhbCdcclxuaW1wb3J0IFRpY2tNYXJrIGZyb20gJ0AvY29tcG9uZW50cy9UaWNrTWFyay9UaWNrTWFyaydcclxuaW1wb3J0IHsgZmV0Y2hBcnRpc3QgfSBmcm9tICcuL2FwaSdcclxuXHJcblxyXG5jb25zdCBwYWdlTmFtZSA9IFwiSm9iIERldGFpbHNcIlxyXG5jb25zdCBCYXNpY0luZm9EZXRhaWxzRm9ybSA9ICh7IHBhcmFtc0lELCB1c2VyUHJvZmlsZUltYWdlIH0pID0+IHtcclxuICBjb25zdCBbYWN0aW9uLCBzZXRBY3Rpb25dID0gdXNlU3RhdGUoXCJjcmVhdGVkXCIpXHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFVwZGF0ZU11dGF0aW9uID0gdXNlTXV0YXRpb24odXBkYXRlQXJ0aXN0KTtcclxuICBjb25zdCBbdXBsb2FkUEFORmlsZSwgc2V0VXBsb2FkUEFORmlsZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FydGlzdERldGFpbHMsIHNldEFydGlzdERldGFpbHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpZDogXCJcIixcclxuICAgIEVtcGxveWVlSWQ6IFwiXCIsXHJcbiAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICBsYXN0TmFtZTogXCJcIixcclxuICAgIGRvYjogXCJcIixcclxuICAgIGdlbmRlcjogXCJcIixcclxuICAgIHdvcmtFbWFpbDogXCJcIixcclxuICAgIEhvbWVFbWFpbDogXCJcIixcclxuICAgIGFubml2ZXJzYXJ5RGF0ZTogXCJcIixcclxuICAgIC8vIGNhbmNlbENoZXF1ZTogXCJcIixcclxuICAgIC8vIGNyZWF0ZWRPbjogMCxcclxuICAgIC8vIHVwZGF0ZWRPbjogMCxcclxuICAgIC8vIGlzQWN0aXZlOiAwLFxyXG4gICAgLy8gaXNEZWxldGU6IDAsXHJcbiAgICAvLyBwYW5JbWFnZTogXCJcIixcclxuICAgIC8vIGFkZHJlc3NQcm9vZjogXCJcIixcclxuICAgIC8vIG90aGVyRG9jdW1lbnQ6IFwiXCIsXHJcbiAgICAvLyBhcnRpc3RTbHVnOiBcIlwiLFxyXG4gICAgLy8gZmFjZWJvb2s6IFwiXCIsXHJcbiAgICAvLyBpbnN0YWdyYW06IFwiXCIsXHJcbiAgICAvLyBwaW50ZXJlc3Q6IFwiXCIsXHJcbiAgICAvLyB5b3V0dWJlOiBcIlwiLFxyXG4gICAgLy8gQWRkIG1vcmUgZmllbGRzIGFzIG5lZWRlZFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWxlRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXRVcGxvYWRQQU5GaWxlKGRhdGEpO1xyXG4gIH07XHJcbiAgY29uc3QgZGVsZXRlRmlsZSA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZEZpbGVEYXRhID0gWy4uLnVwbG9hZFBBTkZpbGVdO1xyXG4gICAgdXBkYXRlZEZpbGVEYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRVcGxvYWRQQU5GaWxlKHVwZGF0ZWRGaWxlRGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGZpZWxkTmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtmaWVsZE5hbWVdOiB2YWx1ZSxcclxuICAgICAgLy8gb3RoZXIgZmllbGRzLi4uXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAocGFyYW1zSUQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoQXJ0aXN0KHBhcmFtc0lEKTtcclxuICAgICAgICAgIC8vIEFzc3VtaW5nIHRoZSBkYXRhIHN0cnVjdHVyZSBtYXRjaGVzIHlvdXIgZm9ybURhdGEgc3RhdGUsIHNldCB0aGUgc3RhdGUgaGVyZVxyXG4gICAgICAgICAgc2V0QXJ0aXN0RGV0YWlscyhkYXRhPy5kYXRhKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFydGlzdERldGFpbHMpO1xyXG4gICAgICAgICAgLy8gc2V0Rm9ybURhdGEoZGF0YT8uZGF0YSlcclxuXHJcbiAgICAgICAgICAvLyBZb3UgY2FuIGFsc28gY2hlY2sgdGhlIGRhdGEgaW4gdGhlIGNvbnNvbGVcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGVkIGRhdGE6JywgZGF0YSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFydGlzdCBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7IC8vIENhbGwgdGhlIGZldGNoRGF0YSBmdW5jdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzIG9yIHBhcmFtc0lEIGNoYW5nZXNcclxuXHJcbiAgfSwgW3BhcmFtc0lEXSk7XHJcbiAgY29uc3QgbXV0YXRpb24gPSB1c2VNdXRhdGlvbihcclxuICAgIGFzeW5jIChmb3JtRGF0YSkgPT4ge1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9lbXBsb3llZUJhc2ljSW5mbycsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAocGFyYW1zSUQgJiYgYXJ0aXN0RGV0YWlscy5sZW5ndGggIT09IDApIHtcclxuICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgYXdhaXQgVXBkYXRlTXV0YXRpb24ubXV0YXRlQXN5bmMoZm9ybURhdGEpXHJcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpXHJcbiAgICAgICAgc2V0QWN0aW9uKFwidWRwYXRlZFwiKVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IG11dGF0aW9uLm11dGF0ZUFzeW5jKGZvcm1EYXRhKTtcclxuICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSlcclxuICAgICAgICBzZXRBY3Rpb24oXCJjcmVhdGVkXCIpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkZ1bGwgTmFtZSA6XCJ9IHR5cGU9e1widGV4dFwifSB2YWx1ZT17Zm9ybURhdGEuZmlyc3ROYW1lfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ2ZpcnN0TmFtZScsIHZhbHVlKX0gLz5cclxuXHJcbiAgICAgIDxJbnB1dCBsYWJlbD17XCJNb2JpbGUgTnVtYmVyIDpcIn0gcGxhY2Vob2xkZXI9e1wiXCJ9IHR5cGU9e1widGV4dFwifSB2YWx1ZT17Zm9ybURhdGEubGFzdE5hbWV9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnam9pbmluZ0RhdGUnLCB2YWx1ZSl9IC8+XHJcbiAgICAgIDxJbnB1dCBsYWJlbD17XCJFbWFpbCAgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJlbWFpbFwifSB2YWx1ZT17Zm9ybURhdGEuSG9tZUVtYWlsfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ2JlbmVmaWNkZXNpZ25hdGlvbmlhcnlOYW1lJywgdmFsdWUpfSAvPlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiRW1haWwgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJlbWFpbFwifSB2YWx1ZT17Zm9ybURhdGEud29ya0VtYWlsfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ2pvYk9mZmVyZWQnLCB2YWx1ZSl9IC8+XHJcbiAgICAgIDxJbnB1dCBsYWJlbD17XCJEYXRlIG9mIEJpcnRoIDpcIn0gcGxhY2Vob2xkZXI9e1wiXCJ9IHR5cGU9e1widGV4dFwifSB2YWx1ZT17Zm9ybURhdGEuZG9ifSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ3Byb2JhdGlvblBlcmlvZCcsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkdlbmRlciA6XCJ9IHBsYWNlaG9sZGVyPXtcIlwifSB0eXBlPXtcInRleHRcIn0gdmFsdWU9e2Zvcm1EYXRhLmdlbmRlcn0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKCdwcm9iYXRpb25QZXJpb2QnLCB2YWx1ZSl9IC8+XHJcbiAgICAgIDxJbnB1dCBsYWJlbD17XCJBbnZlcnN5IERhdGUgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJkYXRlXCJ9IHZhbHVlPXtmb3JtRGF0YS5hbm5pdmVyc2FyeURhdGV9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgncHJvYmF0aW9uUGVyaW9kJywgdmFsdWUpfSAvPlxyXG4gICAgICB7LyogPElucHV0IGxhYmVsPXtcIkRhdGUgb2YgQmlydGggOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJkYXRlXCJ9IHZhbHVlPXtmb3JtRGF0YS5kb2J9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnZG9iJywgdmFsdWUpfSAvPlxyXG4gICAgICA8RHJvcGRvd24gbGFiZWw9e1wiR2VuZGVyIDpcIn0gbGlzdD17Z2VuZGVyfSB2YWx1ZT17Zm9ybURhdGEuYXJ0aXN0R2VuZGVyfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ2FydGlzdEdlbmRlcicsIHZhbHVlKX0gLz4gKi99XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nbXQtMTQnPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1bMTZweF0gZm9udC1ib2xkIGZvbnQtcm9ib3RvJz5VcGxvYWQgRG9jdW1lbnRzPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZpbGUgbGFiZWw9e1wiVXBsb2FkIFBBTiBDYXJkIDpcIn0gcGxhY2Vob2xkZXI9e1wiXCJ9IHR5cGU9e1wiZmlsZVwifSBvbkZpbGVDaGFuZ2U9e2hhbmRsZUZpbGVEYXRhfSAvPlxyXG4gICAgICB7dXBsb2FkUEFORmlsZS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGtleT17MX0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IG1sLTQ0IG1iLTUnPlxyXG4gICAgICAgICAge3VwbG9hZFBBTkZpbGUubWFwKChmaWxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTAgdy0xMCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8WE1hcmtJY29uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUZpbGUoaW5kZXgpfSBjbGFzc05hbWU9XCJ3LTQgaC00IGZvbnQtYm9sZCBob3ZlcjpjdXJzb3ItcG9pbnRlciB0ZXh0LXJlZC02MDBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxGaWxlVHlwZUljb24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPERyb3Bkb3duIGxhYmVsPXtcIlNlbGVjdCBBZGRyZXNzIFByb29mIDpcIn0gbGlzdD17cHJvb2ZDYXJkfSB2YWx1ZT17Zm9ybURhdGEuYWRkcmVzc1Byb29mfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ2FkZHJlc3NQcm9vZicsIHZhbHVlKX0gLz5cclxuICAgICAgPEZpbGUgbGFiZWw9e1wiVXBsb2FkIERvY3VtZW50IDpcIn0gcGxhY2Vob2xkZXI9e1wiXCJ9IHR5cGU9e1wiZmlsZVwifSBvbkZpbGVDaGFuZ2U9e2hhbmRsZUZpbGVEYXRhfSAvPiAqL31cclxuICAgICAgey8qIHtmaWxlRGF0YS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBtbC00NCAnPlxyXG4gICAgICAgICAge2ZpbGVEYXRhLm1hcCgoZmlsZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTEwIHctMTAgbWwtMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPFhNYXJrSWNvbiBjbGFzc05hbWU9XCJ3LTQgaC00IGZvbnQtYm9sZCBob3ZlcjpjdXJzb3ItcG9pbnRlciB0ZXh0LXJlZC02MDBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8RmlsZVR5cGVJY29uIGNsYXNzTmFtZT1cImJnLVsjZGZmM2ZmXVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICApfSAqL31cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdtdC0xNCc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtYm9sZCBmb250LXJvYm90byc+U29jaWFsIE1lZGlhPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIkZhY2Vib29rIDpcIn0gcGxhY2Vob2xkZXI9e1wiXCJ9IHR5cGU9e1widGV4dFwifSB2YWx1ZT17Zm9ybURhdGEuZmFjZWJvb2t9IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnZmFjZWJvb2snLCB2YWx1ZSl9IC8+XHJcbiAgICAgIDxJbnB1dCBsYWJlbD17XCJJbnN0YWdyYW0gOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXtmb3JtRGF0YS5pbnN0YWdyYW19IG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUNoYW5nZSgnaW5zdGFncmFtJywgdmFsdWUpfSAvPlxyXG4gICAgICA8SW5wdXQgbGFiZWw9e1wiUGludGVyZXN0IDpcIn0gcGxhY2Vob2xkZXI9e1wiXCJ9IHR5cGU9e1widGV4dFwifSB2YWx1ZT17Zm9ybURhdGEucGludGVyZXN0fSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ3BpbnRlcmVzdCcsIHZhbHVlKX0gLz5cclxuICAgICAgPElucHV0IGxhYmVsPXtcIllvdXR1YmUgOlwifSBwbGFjZWhvbGRlcj17XCJcIn0gdHlwZT17XCJ0ZXh0XCJ9IHZhbHVlPXtmb3JtRGF0YS55b3V0dWJlfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVDaGFuZ2UoJ3lvdXR1YmUnLCB2YWx1ZSl9IC8+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBweC04MCBtdC0xNCc+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9IGNsYXNzTmFtZT0nZm9udC1yb2JvdG8gdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciB0ZXh0LVsxMnB4XSBiZy1bI2NlMzQzNF0gaC0xMiB3LTEvMyBtci00Jz5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZm9udC1yb2JvdG8gdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciB0ZXh0LVsxMnB4XSBiZy1ibGFjayBoLTEyIHctMS8zJz5TdWJtaXQgZm9yIEFwcHJvdmFsPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3Nob3dNb2RhbCAmJiA8QWRkT3JVcGRhdGVNb2RhbCBzaG93TW9kYWw9e3Nob3dNb2RhbH0gc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9IHBhZ2VOYW1lPXtwYWdlTmFtZX0gYWN0aW9uPXthY3Rpb259IC8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNpY0luZm9EZXRhaWxzRm9ybSJdLCJuYW1lcyI6WyJEcm9wZG93biIsIklucHV0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdlbmRlciIsInByb29mQ2FyZCIsIkZpbGUiLCJYTWFya0ljb24iLCJGaWxlVHlwZUljb24iLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwidXBkYXRlQXJ0aXN0IiwiQWRkT3JVcGRhdGVNb2RhbCIsIlRpY2tNYXJrIiwiZmV0Y2hBcnRpc3QiLCJwYWdlTmFtZSIsIkJhc2ljSW5mb0RldGFpbHNGb3JtIiwicGFyYW1zSUQiLCJ1c2VyUHJvZmlsZUltYWdlIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiVXBkYXRlTXV0YXRpb24iLCJ1cGxvYWRQQU5GaWxlIiwic2V0VXBsb2FkUEFORmlsZSIsImFydGlzdERldGFpbHMiLCJzZXRBcnRpc3REZXRhaWxzIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImlkIiwiRW1wbG95ZWVJZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZG9iIiwid29ya0VtYWlsIiwiSG9tZUVtYWlsIiwiYW5uaXZlcnNhcnlEYXRlIiwiaGFuZGxlRmlsZURhdGEiLCJkYXRhIiwiZGVsZXRlRmlsZSIsImluZGV4IiwidXBkYXRlZEZpbGVEYXRhIiwic3BsaWNlIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGROYW1lIiwidmFsdWUiLCJmZXRjaERhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtdXRhdGlvbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwianNvbiIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsIm11dGF0ZUFzeW5jIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/basicinformation/BasicInfoDetailsForm.js\n"));

/***/ })

});