webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //HYDRATE는 next-redux-wrapper를 쓸 때 필요한 액션인데요. 
//HYDRATE는
// 리엑트에서 서버사이드 렌더링을 실행한 HTML 결과물을 받아온 뒤, 
//브라우저에서 이것을 다시 리액트 트리에 맞게 파싱하는 행위이다.
//불변객체 -> 객체를 참조해서 수정 하면 안된다. -->교체 가능 read만 가능.
//reducer는 (이전상태,액션)=>return 다음상태로 교체
//next.js에서 생성한 redux store와 client에서 생성한 redux store는 다르기 때문에 이 둘을 합쳐야 한다.
//서버에서 생성한 스토어의 상태를 HYDRATE라는 액션을 통해서 스토어를 클라이언트에 합쳐주는 작업이 필요한것이다.
//action.payload에는 서버에서 생성한 스토어의 상태가 담겨있다
// 이 둘을 합쳐 새로운 클라이언트의 리덕스 스토어의 상태를 만든다.

var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  //서버사이드렌더링을 위해서 
  index: function index() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2hDO0FBQ0FDLE9BQUssRUFBRSxpQkFBd0I7QUFBQSxRQUF2QkMsS0FBdUIsdUVBQWYsRUFBZTtBQUFBLFFBQVhDLE1BQVc7O0FBQzNCLFlBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFdBQUtDLDBEQUFMO0FBQ0lDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJKLE1BQXZCO0FBQ0EsK0NBQVlELEtBQVosR0FBc0JDLE1BQU0sQ0FBQ0ssT0FBN0I7O0FBQ0o7QUFBUyxlQUFPTixLQUFQO0FBSmI7QUFNSCxHQVQrQjtBQVVoQ08sTUFBSSxFQUFKQSw2Q0FWZ0M7QUFXaENDLE1BQUksRUFBSkEsNkNBQUlBO0FBWDRCLENBQUQsQ0FBbkM7QUFhZVgsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45NDdkNWQxMGI1NWFlZDgzMDMyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbi8vSFlEUkFUReuKlCBuZXh0LXJlZHV4LXdyYXBwZXLrpbwg7JO4IOuVjCDtlYTsmpTtlZwg7JWh7IWY7J24642w7JqULiBcclxuLy9IWURSQVRF64qUXHJcbi8vIOumrOyXke2KuOyXkOyEnCDshJzrsoTsgqzsnbTrk5wg66CM642U66eB7J2EIOyLpO2Wie2VnCBIVE1MIOqysOqzvOusvOydhCDrsJvslYTsmKgg65KkLCBcclxuLy/ruIzrnbzsmrDsoIDsl5DshJwg7J206rKD7J2EIOuLpOyLnCDrpqzslaHtirgg7Yq466as7JeQIOunnuqyjCDtjIzsi7HtlZjripQg7ZaJ7JyE7J2064ukLlxyXG5cclxuLy/rtojrs4DqsJ3ssrQgLT4g6rCd7LK066W8IOywuOyhsO2VtOyEnCDsiJjsoJUg7ZWY66m0IOyViOuQnOuLpC4gLS0+6rWQ7LK0IOqwgOuKpSByZWFk66eMIOqwgOuKpS5cclxuLy9yZWR1Y2Vy64qUICjsnbTsoITsg4Htg5ws7JWh7IWYKT0+cmV0dXJuIOuLpOydjOyDge2DnOuhnCDqtZDssrRcclxuXHJcbi8vbmV4dC5qc+yXkOyEnCDsg53shLHtlZwgcmVkdXggc3RvcmXsmYAgY2xpZW507JeQ7IScIOyDneyEse2VnCByZWR1eCBzdG9yZeuKlCDri6TrpbTquLAg65WM66y47JeQIOydtCDrkZjsnYQg7ZWp7LOQ7JW8IO2VnOuLpC5cclxuLy/shJzrsoTsl5DshJwg7IOd7ISx7ZWcIOyKpO2GoOyWtOydmCDsg4Htg5zrpbwgSFlEUkFUReudvOuKlCDslaHshZjsnYQg7Ya17ZW07IScIOyKpO2GoOyWtOulvCDtgbTrnbzsnbTslrjtirjsl5Ag7ZWp7LOQ7KO864qUIOyekeyXheydtCDtlYTsmpTtlZzqsoPsnbTri6QuXHJcbi8vYWN0aW9uLnBheWxvYWTsl5DripQg7ISc67KE7JeQ7IScIOyDneyEse2VnCDsiqTthqDslrTsnZgg7IOB7YOc6rCAIOuLtOqyqOyeiOuLpFxyXG4vLyDsnbQg65GY7J2EIO2VqeyzkCDsg4jroZzsmrQg7YG065287J207Ja47Yq47J2YIOumrOuNleyKpCDsiqTthqDslrTsnZgg7IOB7YOc66W8IOunjOuToOuLpC5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgLy/shJzrsoTsgqzsnbTrk5zroIzrjZTrp4HsnYQg7JyE7ZW07IScIFxyXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcixcclxuICAgIHBvc3RcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=