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
// next-redux-wrapper는 유저가 페이지를 요청할때마다 리덕스 스토어를 생성해야 하기 때문에 configureStore함수를 정의해서 넘기는것이다.

var loggerMiddleware = function loggerMiddleware(_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;
  return function (next) {
    return function (action) {
      console.log(action); //콘솔에 내가 하는 액션마다 찍힘.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOlsibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwicm9vdFNhZ2EiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBOztBQUNBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxRQUFiLFFBQWFBLFFBQWI7QUFBQSxTQUE0QixVQUFDQyxJQUFEO0FBQUEsV0FBVSxVQUFDQyxNQUFELEVBQVk7QUFDdkVDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaLEVBRHVFLENBQ2xEO0FBQ3JCO0FBQ0E7QUFDQTs7QUFDQSxhQUFPRCxJQUFJLENBQUNDLE1BQUQsQ0FBWDtBQUNILEtBTm9EO0FBQUEsR0FBNUI7QUFBQSxDQUF6Qjs7QUFPQSxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekI7QUFDQTtBQUNBLE1BQU1DLGNBQWMsR0FBR0MsZ0VBQW9CLEVBQTNDO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsRUFBaUJSLGdCQUFqQixDQUFwQixDQUp5QixDQUkrQjtBQUN4RDs7QUFDQSxNQUFNVyxRQUFRLEdBQUcsUUFDWEMsU0FEVyxDQUM4QjtBQUQ5QixJQUVYQyxvRkFBbUIsQ0FBQ0MscURBQWUsTUFBZixTQUFtQkosV0FBbkIsQ0FBRCxDQUZ6QixDQU55QixDQVFrQzs7QUFFM0QsTUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDQyxpREFBRCxFQUFjTixRQUFkLENBQXpCO0FBQ0FJLE9BQUssQ0FBQ0csUUFBTixHQUFpQlYsY0FBYyxDQUFDVyxHQUFmLENBQW1CQyw4Q0FBbkIsQ0FBakI7QUFDQSxTQUFPTCxLQUFQO0FBQ0gsQ0FiRCxDLENBZUE7OztBQUNBLElBQU1NLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ2YsY0FBRCxFQUFpQjtBQUMxQ2dCLE9BQUs7QUFEcUMsQ0FBakIsQ0FBN0I7QUFJZUYsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41ZTk2NzA2MTcwYTQzMGI5NTcwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcIkByZWR1eC1zYWdhL2NvcmVcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbi8vY29tcG9zZVdpdGhEZXZUb29scyDqsJzrsJzsnpAg64+E6rWs7JeQ7IScIOuztOydtOqyjFxyXG5cclxuLy8gbmV4dC1yZWR1eC13cmFwcGVy64qUIOycoOyggOqwgCDtjpjsnbTsp4Drpbwg7JqU7LKt7ZWg65WM66eI64ukIOumrOuNleyKpCDsiqTthqDslrTrpbwg7IOd7ISx7ZW07JW8IO2VmOq4sCDrlYzrrLjsl5AgY29uZmlndXJlU3RvcmXtlajsiJjrpbwg7KCV7J2Y7ZW07IScIOuEmOq4sOuKlOqyg+ydtOuLpC5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTsgLy/svZjshpTsl5Ag64K06rCAIO2VmOuKlCDslaHshZjrp4jri6Qg7LCN7Z6YLlxyXG4gICAgLy8gbmV4dCDripQg7JWh7IWY7J2EIOuLpOydjCDrr7jrk6Tsm6jslrTsl5Dqsowg7KCE64us7ZWY64qUIO2VqOyImOyeheuLiOuLpC4gbmV4dChhY3Rpb24pIOydtOufsCDtmJXtg5zroZwg7IKs7Jqp7ZWp64uI64ukLlxyXG4gICAgLy8g66eM7JW9IOuLpOydjCDrr7jrk6Tsm6jslrTqsIAg7JeG64uk66m0IOumrOuTgOyEnOyXkOqyjCDslaHshZjsnYQg7KCE64us7ZW07KSN64uI64ukLiBcclxuICAgIC8v66eM7JW97JeQIG5leHQg66W8IO2YuOy2nO2VmOyngCDslYrqsowg65Cc64uk66m0IOyVoeyFmOydtCDrrLTsi5zsspjrpqzrkJjslrQg66as65OA7ISc7JeQ6rKM66GcIOyghOuLrOuQmOyngCDslYrsirXri4jri6QuXHJcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59XHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgLy9kaXNwYXRjaCgpIO2bhCDsgqzqsIAgb3Ig7I297YGsIO2YuOy2nOuQjFxyXG4gICAgLy9taWRkbGV3YXJl656APyDrpqzrjZXsiqTsnZgg6riw64ql7J2EIOyXheq4gCFcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTsgLy/sgqzqsIAgb3Ig7I297YGsICjrr7jrk6Tsm6jslrQp64Sj7J6QIFxyXG4gICAgLy/rpqzrjZXsiqTsnZgg6riw64ql7J20IO2ZleyepSDrkJzqsowgZW5oYW5jZXJcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSAvL+uwsO2PrOyaqSBcclxuICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgLy/qsJzrsJzsmqlcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbi8vY3JlYXRlV3JhcHBlciA9PiBuZXh07JeQIHJlZHV4IOy2lOqwgC5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyJdLCJzb3VyY2VSb290IjoiIn0=