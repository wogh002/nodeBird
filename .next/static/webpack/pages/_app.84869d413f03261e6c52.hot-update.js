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
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux-saga/core */ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");





 //composeWithDevTools 개발자 도구에서 보이게
//react에 redux를 붙이는건 react app에서는 단 하나의 redux store만 존재하므로 어렵지 않다.
// next-redux-wrapper는 유저가 페이지를 요청할때마다 리덕스 스토어를 생성해야 하기 때문에 configureStore함수를 정의해서 넘기는것이다.

var loggerMiddleware = function loggerMiddleware(_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;
  return function (next) {
    return function (action) {
      // next 는 액션을 다음 미들웨어에게 전달하는 함수입니다. next(action) 이런 형태로 사용합니다.
      // 만약 다음 미들웨어가 없다면 리듀서에게 액션을 전달해줍니다. 
      //만약에 next 를 호출하지 않게 된다면 액션이 무시처리되어 리듀서에게로 전달되지 않습니다.
      return next(action);
    };
  };
};

var configureStore = function configureStore() {
  //dispatch() 후 사가 or 썽크 호출됌
  //middleware란? 리덕스의 기능을 업글!
  var sagaMiddleware = Object(_redux_saga_core__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var middlewares = [sagaMiddleware, loggerMiddleware]; //사가 or 썽크 (미들웨어)넣자 
  //리덕스의 기능이 확장 된게 enhancer

  var enhancer = false ? undefined //배포용 
  : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, middlewares)); //개발용

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOlsibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiYWN0aW9uIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJyb290U2FnYSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsUUFBYixRQUFhQSxRQUFiO0FBQUEsU0FBNEIsVUFBQ0MsSUFBRDtBQUFBLFdBQVUsVUFBQ0MsTUFBRCxFQUFZO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLGFBQU9ELElBQUksQ0FBQ0MsTUFBRCxDQUFYO0FBQ0gsS0FMb0Q7QUFBQSxHQUE1QjtBQUFBLENBQXpCOztBQU1BLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QjtBQUNBO0FBQ0EsTUFBTUMsY0FBYyxHQUFHQyxnRUFBb0IsRUFBM0M7QUFDQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxFQUFpQk4sZ0JBQWpCLENBQXBCLENBSnlCLENBSStCO0FBQ3hEOztBQUNBLE1BQU1TLFFBQVEsR0FBRyxRQUNYQyxTQURXLENBQzhCO0FBRDlCLElBRVhDLG9GQUFtQixDQUFDQyxxREFBZSxNQUFmLFNBQW1CSixXQUFuQixDQUFELENBRnpCLENBTnlCLENBUWtDOztBQUUzRCxNQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFELEVBQWNOLFFBQWQsQ0FBekI7QUFDQUksT0FBSyxDQUFDRyxRQUFOLEdBQWlCVixjQUFjLENBQUNXLEdBQWYsQ0FBbUJDLDhDQUFuQixDQUFqQjtBQUNBLFNBQU9MLEtBQVA7QUFDSCxDQWJELEMsQ0FlQTs7O0FBQ0EsSUFBTU0sT0FBTyxHQUFHQyx3RUFBYSxDQUFDZixjQUFELEVBQWlCO0FBQzFDZ0IsT0FBSztBQURxQyxDQUFqQixDQUE3QjtBQUllRixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg0ODY5ZDQxM2YwMzI2MWU2YzUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwiQHJlZHV4LXNhZ2EvY29yZVwiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuLy9jb21wb3NlV2l0aERldlRvb2xzIOqwnOuwnOyekCDrj4Tqtazsl5DshJwg67O07J206rKMXHJcbi8vcmVhY3Tsl5AgcmVkdXjrpbwg67aZ7J2064qU6rG0IHJlYWN0IGFwcOyXkOyEnOuKlCDri6gg7ZWY64KY7J2YIHJlZHV4IHN0b3Jl66eMIOyhtOyerO2VmOuvgOuhnCDslrTroLXsp4Ag7JWK64ukLlxyXG4vLyBuZXh0LXJlZHV4LXdyYXBwZXLripQg7Jyg7KCA6rCAIO2OmOydtOyngOulvCDsmpTssq3tlaDrlYzrp4jri6Qg66as642V7IqkIOyKpO2GoOyWtOulvCDsg53shLHtlbTslbwg7ZWY6riwIOuVjOusuOyXkCBjb25maWd1cmVTdG9yZe2VqOyImOulvCDsoJXsnZjtlbTshJwg64SY6riw64qU6rKD7J2064ukLlxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgICAvLyBuZXh0IOuKlCDslaHshZjsnYQg64uk7J2MIOuvuOuTpOybqOyWtOyXkOqyjCDsoITri6ztlZjripQg7ZWo7IiY7J6F64uI64ukLiBuZXh0KGFjdGlvbikg7J2065+wIO2Yle2DnOuhnCDsgqzsmqntlanri4jri6QuXHJcbiAgICAvLyDrp4zslb0g64uk7J2MIOuvuOuTpOybqOyWtOqwgCDsl4bri6TrqbQg66as65OA7ISc7JeQ6rKMIOyVoeyFmOydhCDsoITri6ztlbTspI3ri4jri6QuIFxyXG4gICAgLy/rp4zslb3sl5AgbmV4dCDrpbwg7Zi47Lac7ZWY7KeAIOyViuqyjCDrkJzri6TrqbQg7JWh7IWY7J20IOustOyLnOyymOumrOuQmOyWtCDrpqzrk4DshJzsl5DqsozroZwg7KCE64us65CY7KeAIOyViuyKteuLiOuLpC5cclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn1cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICAvL2Rpc3BhdGNoKCkg7ZuEIOyCrOqwgCBvciDsjb3tgawg7Zi47Lac65CMXHJcbiAgICAvL21pZGRsZXdhcmXrnoA/IOumrOuNleyKpOydmCDquLDriqXsnYQg7JeF6riAIVxyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdOyAvL+yCrOqwgCBvciDsjb3tgawgKOuvuOuTpOybqOyWtCnrhKPsnpAgXHJcbiAgICAvL+umrOuNleyKpOydmCDquLDriqXsnbQg7ZmV7J6lIOuQnOqyjCBlbmhhbmNlclxyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpIC8v67Cw7Y+s7JqpIFxyXG4gICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSAvL+qwnOuwnOyaqVxyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuLy9jcmVhdGVXcmFwcGVyID0+IG5leHTsl5AgcmVkdXgg7LaU6rCALlxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==