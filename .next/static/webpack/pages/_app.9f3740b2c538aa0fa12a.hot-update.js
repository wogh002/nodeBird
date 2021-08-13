webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);



 //composeWithDevTools 개발자 도구에서 보이게
//react에 redux를 붙이는건 react app에서는 단 하나의 redux store만 존재하므로 어렵지 않다.
// next-redux-wrapper는 유저가 페이지를 요청할때마다 리덕스 스토어를 생성해야 하기 때문에 configureStore함수를 정의해서 넘기는것이다.

var configureStore = function configureStore() {
  //dispatch() 후 사가 or 썽크 호출됌
  //middleware 리덕스의 기능을 업글!
  var middlewares = []; //사가 or 썽크 넣자 
  //리덕스의 기능이 확장 된게 enhancer

  var enhancer = false ? undefined //배포용 
  : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, middlewares)); //개발용

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer);
  return store;
}; //createWrapper => next에 redux 추가.


var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QjtBQUNBO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEVBQXBCLENBSHlCLENBR0Q7QUFDeEI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFFBQ1hDLFNBRFcsQ0FDOEI7QUFEOUIsSUFFWEMsb0ZBQW1CLENBQUNDLHFEQUFlLE1BQWYsU0FBbUJKLFdBQW5CLENBQUQsQ0FGekIsQ0FMeUIsQ0FPa0M7O0FBQzNELE1BQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsaURBQUQsRUFBY04sUUFBZCxDQUF6QjtBQUNBLFNBQU9JLEtBQVA7QUFDSCxDQVZELEMsQ0FZQTs7O0FBQ0EsSUFBTUcsT0FBTyxHQUFHQyx3RUFBYSxDQUFDVixjQUFELEVBQWlCO0FBQzFDVyxPQUFLO0FBRHFDLENBQWpCLENBQTdCO0FBSWVGLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOWYzNzQwYjJjNTM4YWEwZmExMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuLy9jb21wb3NlV2l0aERldlRvb2xzIOqwnOuwnOyekCDrj4Tqtazsl5DshJwg67O07J206rKMXHJcbi8vcmVhY3Tsl5AgcmVkdXjrpbwg67aZ7J2064qU6rG0IHJlYWN0IGFwcOyXkOyEnOuKlCDri6gg7ZWY64KY7J2YIHJlZHV4IHN0b3Jl66eMIOyhtOyerO2VmOuvgOuhnCDslrTroLXsp4Ag7JWK64ukLlxyXG4vLyBuZXh0LXJlZHV4LXdyYXBwZXLripQg7Jyg7KCA6rCAIO2OmOydtOyngOulvCDsmpTssq3tlaDrlYzrp4jri6Qg66as642V7IqkIOyKpO2GoOyWtOulvCDsg53shLHtlbTslbwg7ZWY6riwIOuVjOusuOyXkCBjb25maWd1cmVTdG9yZe2VqOyImOulvCDsoJXsnZjtlbTshJwg64SY6riw64qU6rKD7J2064ukLlxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIC8vZGlzcGF0Y2goKSDtm4Qg7IKs6rCAIG9yIOyNve2BrCDtmLjstpzrkIxcclxuICAgIC8vbWlkZGxld2FyZSDrpqzrjZXsiqTsnZgg6riw64ql7J2EIOyXheq4gCFcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW107IC8v7IKs6rCAIG9yIOyNve2BrCDrhKPsnpAgXHJcbiAgICAvL+umrOuNleyKpOydmCDquLDriqXsnbQg7ZmV7J6lIOuQnOqyjCBlbmhhbmNlclxyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpIC8v67Cw7Y+s7JqpIFxyXG4gICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSAvL+qwnOuwnOyaqVxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG4vL2NyZWF0ZVdyYXBwZXIgPT4gbmV4dOyXkCByZWR1eCDstpTqsIAuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiXSwic291cmNlUm9vdCI6IiJ9