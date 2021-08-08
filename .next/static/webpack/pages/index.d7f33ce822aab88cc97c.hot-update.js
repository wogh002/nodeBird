webpackHotUpdate_N_E("pages/index",{

/***/ "./components/loginForm.jsx":
/*!**********************************!*\
  !*** ./components/loginForm.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\dlals\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\node-bird\\components\\loginForm.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var LoginForm = function LoginForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1]; // 컴포넌트의 props로 넘겨주는 함수는 useCallback() 꼭 사용합시다!


  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref) {
    var target = _ref.target;
    setId(target.value);
  }, []);
  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref2) {
    var target = _ref2.target;
    setPassword(target.value);
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    console.log(id, password);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        htmlFor: "user-id",
        children: "\uC544\uC774\uB514"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        name: "user-id",
        id: "user-id",
        value: id,
        onChange: onChangeId,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        htmlFor: "user-password",
        children: "\uD328\uC2A4\uC6CC\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        name: "user-password",
        id: "user-password",
        type: "password",
        value: password,
        onChange: onChangePassword,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        type: "primary",
        htmlType: "submit",
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/signup",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(LoginForm, "I5iOMnFaRmkFOFA5bU/NwwjXFPs=");

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbkZvcm0uanN4Il0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsInVzZVN0YXRlIiwiaWQiLCJzZXRJZCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJvbkNoYW5nZUlkIiwidXNlQ2FsbGJhY2siLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvblN1Ym1pdEZvcm0iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLGtCQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQTVCO0FBQUEsTUFBT0MsRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0EsbUJBQWdDRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPRyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCLGlCQUZzQixDQUd0Qjs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyx5REFBVyxDQUFDLGdCQUFnQjtBQUFBLFFBQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUM3Q0wsU0FBSyxDQUFDSyxNQUFNLENBQUNDLEtBQVIsQ0FBTDtBQUNELEdBRjZCLEVBRTNCLEVBRjJCLENBQTlCO0FBR0EsTUFBTUMsZ0JBQWdCLEdBQUdILHlEQUFXLENBQUMsaUJBQWdCO0FBQUEsUUFBYkMsTUFBYSxTQUFiQSxNQUFhO0FBQ25ESCxlQUFXLENBQUNHLE1BQU0sQ0FBQ0MsS0FBUixDQUFYO0FBQ0QsR0FGbUMsRUFFakMsRUFGaUMsQ0FBcEM7QUFHQSxNQUFNRSxZQUFZLEdBQUdKLHlEQUFXLENBQUMsWUFBTTtBQUNyQ0ssV0FBTyxDQUFDQyxHQUFSLENBQVlYLEVBQVosRUFBZUUsUUFBZjtBQUNELEdBRitCLEVBRTdCLEVBRjZCLENBQWhDO0FBR0Esc0JBQ0UscUVBQUMseUNBQUQ7QUFBTSxZQUFRLEVBQUVPLFlBQWhCO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRTtBQUFPLGVBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSxxRUFBQywwQ0FBRDtBQUNFLFlBQUksRUFBQyxTQURQO0FBRUUsVUFBRSxFQUFDLFNBRkw7QUFHRSxhQUFLLEVBQUVULEVBSFQ7QUFJRSxnQkFBUSxFQUFFSSxVQUpaO0FBS0UsZ0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFZRTtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFLHFFQUFDLDBDQUFEO0FBQ0UsWUFBSSxFQUFDLGVBRFA7QUFFRSxVQUFFLEVBQUMsZUFGTDtBQUdFLFlBQUksRUFBQyxVQUhQO0FBSUUsYUFBSyxFQUFFRixRQUpUO0FBS0UsZ0JBQVEsRUFBRU0sZ0JBTFo7QUFNRSxnQkFBUTtBQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixlQXdCRTtBQUFBLDhCQUNFLHFFQUFDLDJDQUFEO0FBQVEsWUFBSSxFQUFDLFNBQWI7QUFBdUIsZ0JBQVEsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFBLCtCQUNFO0FBQUEsaUNBQ0UscUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFDRCxDQWxERDs7R0FBTVYsUzs7S0FBQUEsUztBQW9EU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDdmMzNjZTgyMmFhYjg4Y2M5N2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8g7Lu07Y+s64SM7Yq47J2YIHByb3Bz66GcIOuEmOqyqOyjvOuKlCDtlajsiJjripQgdXNlQ2FsbGJhY2soKSDqvK0g7IKs7Jqp7ZWp7Iuc64ukIVxyXG4gIGNvbnN0IG9uQ2hhbmdlSWQgPSB1c2VDYWxsYmFjaygoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgc2V0SWQodGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKCh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZCh0YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCxwYXNzd29yZCk7XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXHJcbiAgICAgICAgICBpZD1cInVzZXItaWRcIlxyXG4gICAgICAgICAgdmFsdWU9e2lkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSWR9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPu2MqOyKpOybjOuTnDwvbGFiZWw+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICBpZD1cInVzZXItcGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEJ1dHRvbj7tmozsm5DqsIDsnoU8L0J1dHRvbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=