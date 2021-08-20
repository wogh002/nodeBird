webpackHotUpdate_N_E("pages/index",{

/***/ "./components/followButton.jsx":
/*!*************************************!*\
  !*** ./components/followButton.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\dlals\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\node-bird\\components\\followButton.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unFollowLoading = _useSelector.unFollowLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var isFollowing = me && me.Followings.find(function (v) {
    return v.id === post.User.id;
  }); //true 면 이미 팔로잉중

  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: followLoading || unFollowLoading,
    onClick: onClick,
    children: isFollowing ? "unFollow" : "Follow"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, _this);
};

_s(FollowButton, "HDAjTQZFJalbuCbtgQk7cChBFOo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    Image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb2xsb3dCdXR0b24uanN4Il0sIm5hbWVzIjpbIkZvbGxvd0J1dHRvbiIsInBvc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZm9sbG93TG9hZGluZyIsInVuRm9sbG93TG9hZGluZyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpc0ZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJmaW5kIiwidiIsImlkIiwiVXNlciIsIm9uQ2xpY2siLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwiZGF0YSIsIkZPTExPV19SRVFVRVNUIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJjb250ZW50Iiwic3RyaW5nIiwib2JqZWN0IiwiSW1hZ2UiLCJhcnJheU9mIiwiQ29tbWVudHMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUMvQixxQkFBK0NDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBQU4sQ0FBMUQ7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSO0FBQUEsTUFBWUMsYUFBWixnQkFBWUEsYUFBWjtBQUFBLE1BQTJCQyxlQUEzQixnQkFBMkJBLGVBQTNCOztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxXQUFXLEdBQUdMLEVBQUUsSUFBSUEsRUFBRSxDQUFDTSxVQUFILENBQWNDLElBQWQsQ0FBbUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTYixJQUFJLENBQUNjLElBQUwsQ0FBVUQsRUFBdkI7QUFBQSxHQUFwQixDQUExQixDQUgrQixDQUkvQjs7QUFDQSxNQUFNRSxPQUFPLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUM5QixRQUFJUCxXQUFKLEVBQWlCO0FBQ2JGLGNBQVEsQ0FBQztBQUNMVSxZQUFJLEVBQUVDLCtEQUREO0FBRUxDLFlBQUksRUFBRW5CLElBQUksQ0FBQ2MsSUFBTCxDQUFVRDtBQUZYLE9BQUQsQ0FBUjtBQUlILEtBTEQsTUFNSztBQUNETixjQUFRLENBQUM7QUFDTFUsWUFBSSxFQUFFRyw2REFERDtBQUVMRCxZQUFJLEVBQUVuQixJQUFJLENBQUNjLElBQUwsQ0FBVUQ7QUFGWCxPQUFELENBQVI7QUFJSDtBQUVKLEdBZDBCLEVBY3hCLENBQUNKLFdBQUQsQ0Fkd0IsQ0FBM0I7QUFlQSxzQkFDSSxxRUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBRUosYUFBYSxJQUFJQyxlQUFsQztBQUFtRCxXQUFPLEVBQUVTLE9BQTVEO0FBQUEsY0FDS04sV0FBVyxHQUFHLFVBQUgsR0FBZ0I7QUFEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0F6QkQ7O0dBQU1WLFk7VUFDNkNFLHVELEVBQzlCTyx1RDs7O0tBRmZULFk7QUEwQk5BLFlBQVksQ0FBQ3NCLFNBQWIsR0FBeUI7QUFDckJyQixNQUFJLEVBQUVzQixpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ2xCVixNQUFFLEVBQUVTLGlEQUFTLENBQUNFLE1BREk7QUFFbEJDLFdBQU8sRUFBRUgsaURBQVMsQ0FBQ0ksTUFGRDtBQUdsQlosUUFBSSxFQUFFUSxpREFBUyxDQUFDSyxNQUhFO0FBSWxCQyxTQUFLLEVBQUVOLGlEQUFTLENBQUNPLE9BQVYsQ0FBa0JQLGlEQUFTLENBQUNLLE1BQTVCLENBSlc7QUFLbEJHLFlBQVEsRUFBRVIsaURBQVMsQ0FBQ08sT0FBVixDQUFrQlAsaURBQVMsQ0FBQ0ssTUFBNUI7QUFMUSxHQUFoQixFQU1ISTtBQVBrQixDQUF6QjtBQVNlaEMsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGQxMDI2NjlhZTkxNGNmNjQ3ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5jb25zdCBGb2xsb3dCdXR0b24gPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IHsgbWUsIGZvbGxvd0xvYWRpbmcsIHVuRm9sbG93TG9hZGluZyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lICYmIG1lLkZvbGxvd2luZ3MuZmluZCh2ID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZCk7XHJcbiAgICAvL3RydWUg66m0IOydtOuvuCDtjJTroZzsnonspJFcclxuICAgIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzRm9sbG93aW5nKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LlVzZXIuaWQsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW2lzRm9sbG93aW5nXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17Zm9sbG93TG9hZGluZyB8fCB1bkZvbGxvd0xvYWRpbmd9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICB7aXNGb2xsb3dpbmcgPyBcInVuRm9sbG93XCIgOiBcIkZvbGxvd1wifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxufVxyXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgSW1hZ2U6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93QnV0dG9uOyJdLCJzb3VyY2VSb290IjoiIn0=