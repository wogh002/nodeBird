webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/userProfile.jsx":
/*!************************************!*\
  !*** ./components/userProfile.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\dlals\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\node-bird\\components\\userProfile.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var UserProfile = function UserProfile(_ref) {
  _s();

  var setIsLoggedIn = _ref.setIsLoggedIn;
  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return setIsLoggedIn(false);
  }, []); //리액트에서 배열로 jsx 사용시 key 값 필수

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: ["\uC9F9\uC9F9 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 32
      }, _this), "0"]
    }, "twit", true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: ["\uD314\uB85C\uC789", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 38
      }, _this), "0"]
    }, "followings", true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [" \uD314\uB85C\uC6CC ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 39
      }, _this), "0"]
    }, "followers", true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this)],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        children: "zc"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, _this),
      title: "Zero cho"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onLogout,
      children: "\uB85C\uADF8\uC544\uC6C3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_s(UserProfile, "4lyPt0ewRsDd3EEmqzLs9S68stg=");

_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VyUHJvZmlsZS5qc3giXSwibmFtZXMiOlsiVXNlclByb2ZpbGUiLCJzZXRJc0xvZ2dlZEluIiwib25Mb2dvdXQiLCJ1c2VDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7QUFDdkMsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDO0FBQUEsV0FBS0YsYUFBYSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxHQUFELEVBQTJCLEVBQTNCLENBQTVCLENBRHVDLENBRXZDOztBQUNBLHNCQUNJLHFFQUFDLHlDQUFEO0FBQU0sV0FBTyxFQUFFLGNBQ1g7QUFBQSwrQ0FBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFuQjtBQUFBLE9BQVMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFcsZUFFWDtBQUFBLG9EQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXpCO0FBQUEsT0FBUyxZQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGVyxlQUdYO0FBQUEsc0RBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBMUI7QUFBQSxPQUFTLFdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhXLENBQWY7QUFBQSw0QkFLSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDSSxZQUFNLGVBQ0YscUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUjtBQUlJLFdBQUssRUFBQztBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixlQVdJLHFFQUFDLDJDQUFEO0FBQVEsYUFBTyxFQUFFQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0FsQkQ7O0dBQU1GLFc7O0tBQUFBLFc7QUFvQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZjI0ZTgzY2Q3ZjAzYmExZDRiNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlQ2FsbGJhY2t9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICh7IHNldElzTG9nZ2VkSW4gfSkgPT4ge1xyXG4gICAgY29uc3Qgb25Mb2dvdXQgPSB1c2VDYWxsYmFjaygoKT0+IHNldElzTG9nZ2VkSW4oZmFsc2UpLFtdKTtcclxuICAgIC8v66as7JWh7Yq47JeQ7IScIOuwsOyXtOuhnCBqc3gg7IKs7Jqp7IucIGtleSDqsJIg7ZWE7IiYXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+7Ke57Ke5IDxiciAvPjA8L2Rpdj4sXHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nc1wiPu2MlOuhnOyeiTxiciAvPjA8L2Rpdj4sXHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93ZXJzXCI+IO2MlOuhnOybjCA8YnIgLz4wPC9kaXY+LFxyXG4gICAgICAgIF19PlxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXI+emM8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiWmVybyBjaG9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uTG9nb3V0fT7roZzqt7jslYTsm4M8L0J1dHRvbj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=