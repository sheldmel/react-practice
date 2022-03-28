webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\dmell\\OneDrive\\Desktop\\Projects\\React JS\\react-practice\\meetups-app\\pages\\index.js",
    _this = undefined;


var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'A First Meetup',
  image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2F2HE93Y2%2Fseattle-usa-9-jan-2022-a-lowrider-group-meetup-at-pike-place-market-as-tourists-and-locals-take-photos-late-in-the-day-classic-car-groups-have-been-taking-advantage-of-the-lack-of-people-in-downtown-to-drive-their-classic-cars-throughout-the-city-taking-photographs-credit-james-andersonalamy-live-news-2HE93Y2.jpg&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fseattle-usa-9-jan-2022-a-lowrider-group-meetup-at-pike-place-market-as-tourists-and-locals-take-photos-late-in-the-day-classic-car-groups-have-been-taking-advantage-of-the-lack-of-people-in-downtown-to-drive-their-classic-cars-throughout-the-city-taking-photographs-credit-james-andersonalamy-live-news-image456275430.html&tbnid=f7QR0LVhqopwjM&vet=12ahUKEwiOzqKdi-n2AhVfrXIEHZ2GDmkQMygqegUIARCJAg..i&docid=_94Cwxb-DDHm0M&w=1300&h=956&q=meetup%20place%20image&ved=2ahUKEwiOzqKdi-n2AhVfrXIEHZ2GDmkQMygqegUIARCJAg',
  address: '123 Abc street',
  description: 'This is the first meetup'
}, {
  id: 'm2',
  title: 'A Second Meetup',
  image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.brookfieldproperties.com%2Fcontent%2Fdam%2Fb2b%2Fretail%2Fblog%2F2021%2Fmeerkats%2FPerimeter%2520Mall%2520-%2520Meerkat%2520Meetup%2520-%25202.jpg&imgrefurl=https%3A%2F%2Fwww.brookfieldproperties.com%2Fen%2Four-businesses%2Fretail%2Fblog%2Fthe-art-of-shopping%2Fthe-meerkat-meetup.html&tbnid=DVqZP04vN_LsuM&vet=12ahUKEwiOzqKdi-n2AhVfrXIEHZ2GDmkQMygvegUIARCUAg..i&docid=JRJ_gRPQfbM18M&w=600&h=400&q=meetup%20place%20image&ved=2ahUKEwiOzqKdi-n2AhVfrXIEHZ2GDmkQMygvegUIARCUAg',
  address: '112 xqw street',
  description: 'This is the second meetup'
}];

var HomePage = function HomePage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: DUMMY_MEETUPS
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDbEI7QUFDSUMsSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGdCQUZYO0FBR0lDLE9BQUssRUFBRSxzN0JBSFg7QUFJSUMsU0FBTyxFQUFFLGdCQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQURrQixFQVFsQjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsaUJBRlg7QUFHSUMsT0FBSyxFQUFFLGloQkFIWDtBQUlJQyxTQUFPLEVBQUUsZ0JBSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBUmtCLENBQXRCOztBQWlCQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLHNCQUNFLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFJTjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxDQUpEOztLQUFNTSxRO0FBTVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYyNDUxZGU2ZmUxMmY4YzQwZjNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCdcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMScsXHJcbiAgICAgICAgdGl0bGU6ICdBIEZpcnN0IE1lZXR1cCcsXHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3d3dy5nb29nbGUuY29tL2ltZ3Jlcz9pbWd1cmw9aHR0cHMlM0ElMkYlMkZjOC5hbGFteS5jb20lMkZjb21wJTJGMkhFOTNZMiUyRnNlYXR0bGUtdXNhLTktamFuLTIwMjItYS1sb3dyaWRlci1ncm91cC1tZWV0dXAtYXQtcGlrZS1wbGFjZS1tYXJrZXQtYXMtdG91cmlzdHMtYW5kLWxvY2Fscy10YWtlLXBob3Rvcy1sYXRlLWluLXRoZS1kYXktY2xhc3NpYy1jYXItZ3JvdXBzLWhhdmUtYmVlbi10YWtpbmctYWR2YW50YWdlLW9mLXRoZS1sYWNrLW9mLXBlb3BsZS1pbi1kb3dudG93bi10by1kcml2ZS10aGVpci1jbGFzc2ljLWNhcnMtdGhyb3VnaG91dC10aGUtY2l0eS10YWtpbmctcGhvdG9ncmFwaHMtY3JlZGl0LWphbWVzLWFuZGVyc29uYWxhbXktbGl2ZS1uZXdzLTJIRTkzWTIuanBnJmltZ3JlZnVybD1odHRwcyUzQSUyRiUyRnd3dy5hbGFteS5jb20lMkZzZWF0dGxlLXVzYS05LWphbi0yMDIyLWEtbG93cmlkZXItZ3JvdXAtbWVldHVwLWF0LXBpa2UtcGxhY2UtbWFya2V0LWFzLXRvdXJpc3RzLWFuZC1sb2NhbHMtdGFrZS1waG90b3MtbGF0ZS1pbi10aGUtZGF5LWNsYXNzaWMtY2FyLWdyb3Vwcy1oYXZlLWJlZW4tdGFraW5nLWFkdmFudGFnZS1vZi10aGUtbGFjay1vZi1wZW9wbGUtaW4tZG93bnRvd24tdG8tZHJpdmUtdGhlaXItY2xhc3NpYy1jYXJzLXRocm91Z2hvdXQtdGhlLWNpdHktdGFraW5nLXBob3RvZ3JhcGhzLWNyZWRpdC1qYW1lcy1hbmRlcnNvbmFsYW15LWxpdmUtbmV3cy1pbWFnZTQ1NjI3NTQzMC5odG1sJnRibmlkPWY3UVIwTFZocW9wd2pNJnZldD0xMmFoVUtFd2lPenFLZGktbjJBaFZmclhJRUhaMkdEbWtRTXlncWVnVUlBUkNKQWcuLmkmZG9jaWQ9Xzk0Q3d4Yi1EREhtME0mdz0xMzAwJmg9OTU2JnE9bWVldHVwJTIwcGxhY2UlMjBpbWFnZSZ2ZWQ9MmFoVUtFd2lPenFLZGktbjJBaFZmclhJRUhaMkdEbWtRTXlncWVnVUlBUkNKQWcnLFxyXG4gICAgICAgIGFkZHJlc3M6ICcxMjMgQWJjIHN0cmVldCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHRoZSBmaXJzdCBtZWV0dXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTInLFxyXG4gICAgICAgIHRpdGxlOiAnQSBTZWNvbmQgTWVldHVwJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1ncmVzP2ltZ3VybD1odHRwcyUzQSUyRiUyRnd3dy5icm9va2ZpZWxkcHJvcGVydGllcy5jb20lMkZjb250ZW50JTJGZGFtJTJGYjJiJTJGcmV0YWlsJTJGYmxvZyUyRjIwMjElMkZtZWVya2F0cyUyRlBlcmltZXRlciUyNTIwTWFsbCUyNTIwLSUyNTIwTWVlcmthdCUyNTIwTWVldHVwJTI1MjAtJTI1MjAyLmpwZyZpbWdyZWZ1cmw9aHR0cHMlM0ElMkYlMkZ3d3cuYnJvb2tmaWVsZHByb3BlcnRpZXMuY29tJTJGZW4lMkZvdXItYnVzaW5lc3NlcyUyRnJldGFpbCUyRmJsb2clMkZ0aGUtYXJ0LW9mLXNob3BwaW5nJTJGdGhlLW1lZXJrYXQtbWVldHVwLmh0bWwmdGJuaWQ9RFZxWlAwNHZOX0xzdU0mdmV0PTEyYWhVS0V3aU96cUtkaS1uMkFoVmZyWElFSFoyR0Rta1FNeWd2ZWdVSUFSQ1VBZy4uaSZkb2NpZD1KUkpfZ1JQUWZiTTE4TSZ3PTYwMCZoPTQwMCZxPW1lZXR1cCUyMHBsYWNlJTIwaW1hZ2UmdmVkPTJhaFVLRXdpT3pxS2RpLW4yQWhWZnJYSUVIWjJHRG1rUU15Z3ZlZ1VJQVJDVUFnJyxcclxuICAgICAgICBhZGRyZXNzOiAnMTEyIHhxdyBzdHJlZXQnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgc2Vjb25kIG1lZXR1cCdcclxuICAgIH0sXHJcbl1cclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVldHVwTGlzdCBtZWV0dXBzID0ge0RVTU1ZX01FRVRVUFN9Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==