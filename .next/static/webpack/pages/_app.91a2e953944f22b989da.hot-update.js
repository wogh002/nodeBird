webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");



 //HYDRATE는 next-redux-wrapper를 쓸 때 필요한 액션인데요. 
//HYDRATE는
// 리엑트에서 서버사이드 렌더링을 실행한 HTML 결과물을 받아온 뒤, 
//브라우저에서 이것을 다시 리액트 트리에 맞게 파싱하는 행위이다.
//불변객체 -> 객체를 참조해서 수정 하면 안된다. -->교체 가능 read만 가능.
//다른 컴포넌트에서 getServerSideProps 해준 정보 HYDRATE에 있다.
// const rootReducer = combineReducers({
//     index: (state = {}, action) => {
//         switch (action.type) {
//             case HYDRATE:
//                 console.log('HYDRATE', action);
//                 return { ...state, ...action.payload }
//             default: return state;
//         }
//     },
//     user,
//     post
// });
//reducer는 (이전상태,액션)=>return 다음상태로 교체
//next.js에서 생성한 redux store와 client에서 생성한 redux store는 다르기 때문에 이 둘을 합쳐야 한다.

var rootReducer = function rootReducer(state, action) {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      {
        console.log("HYDRATE", action);
        return action.payload;
      }

    default:
      {
        var combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNuQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLQywwREFBTDtBQUFjO0FBQ1ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJKLE1BQXZCO0FBQ0EsZUFBT0EsTUFBTSxDQUFDSyxPQUFkO0FBQ0g7O0FBQ0Q7QUFBUztBQUNMLFlBQU1DLGVBQWUsR0FBR0MsNkRBQWUsQ0FBQztBQUNwQ0MsY0FBSSxFQUFKQSw2Q0FEb0M7QUFFcENDLGNBQUksRUFBSkEsNkNBQUlBO0FBRmdDLFNBQUQsQ0FBdkM7QUFJQSxlQUFPSCxlQUFlLENBQUNQLEtBQUQsRUFBUUMsTUFBUixDQUF0QjtBQUNIO0FBWEw7QUFhSCxDQWREOztBQWVlRiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjkxYTJlOTUzOTQ0ZjIyYjk4OWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuLy9IWURSQVRF64qUIG5leHQtcmVkdXgtd3JhcHBlcuulvCDsk7gg65WMIO2VhOyalO2VnCDslaHshZjsnbjrjbDsmpQuIFxyXG4vL0hZRFJBVEXripRcclxuLy8g66as7JeR7Yq47JeQ7IScIOyEnOuyhOyCrOydtOuTnCDroIzrjZTrp4HsnYQg7Iuk7ZaJ7ZWcIEhUTUwg6rKw6rO866y87J2EIOuwm+yVhOyYqCDrkqQsIFxyXG4vL+u4jOudvOyasOyggOyXkOyEnCDsnbTqsoPsnYQg64uk7IucIOumrOyVoe2KuCDtirjrpqzsl5Ag66ee6rKMIO2MjOyLse2VmOuKlCDtlonsnITsnbTri6QuXHJcblxyXG4vL+u2iOuzgOqwneyytCAtPiDqsJ3ssrTrpbwg7LC47KGw7ZW07IScIOyImOyglSDtlZjrqbQg7JWI65Cc64ukLiAtLT7qtZDssrQg6rCA64qlIHJlYWTrp4wg6rCA64qlLlxyXG5cclxuXHJcbi8v64uk66W4IOy7tO2PrOuEjO2KuOyXkOyEnCBnZXRTZXJ2ZXJTaWRlUHJvcHMg7ZW07KSAIOygleuztCBIWURSQVRF7JeQIOyeiOuLpC5cclxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4vLyAgICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuLy8gICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbi8vICAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9XHJcbi8vICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LFxyXG4vLyAgICAgdXNlcixcclxuLy8gICAgIHBvc3RcclxuLy8gfSk7XHJcblxyXG4vL3JlZHVjZXLripQgKOydtOyghOyDge2DnCzslaHshZgpPT5yZXR1cm4g64uk7J2M7IOB7YOc66GcIOq1kOyytFxyXG4vL25leHQuanPsl5DshJwg7IOd7ISx7ZWcIHJlZHV4IHN0b3Jl7JmAIGNsaWVudOyXkOyEnCDsg53shLHtlZwgcmVkdXggc3RvcmXripQg64uk66W06riwIOuVjOusuOyXkCDsnbQg65GY7J2EIO2VqeyzkOyVvCDtlZzri6QuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgIHBvc3QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=