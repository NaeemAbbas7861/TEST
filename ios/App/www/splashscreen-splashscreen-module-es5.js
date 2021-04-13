function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splashscreen-splashscreen-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/splashscreen/splashscreen.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splashscreen/splashscreen.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSplashscreenSplashscreenPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"container ion-text-center\">\n    <img src=\"assets/images/revised-option-1 (1).png\" >\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/splashscreen/splashscreen-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/splashscreen/splashscreen-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: SplashscreenPageRoutingModule */

  /***/
  function srcAppSplashscreenSplashscreenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashscreenPageRoutingModule", function () {
      return SplashscreenPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _splashscreen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./splashscreen.page */
    "./src/app/splashscreen/splashscreen.page.ts");

    var routes = [{
      path: '',
      component: _splashscreen_page__WEBPACK_IMPORTED_MODULE_3__["SplashscreenPage"]
    }];

    var SplashscreenPageRoutingModule = function SplashscreenPageRoutingModule() {
      _classCallCheck(this, SplashscreenPageRoutingModule);
    };

    SplashscreenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SplashscreenPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/splashscreen/splashscreen.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/splashscreen/splashscreen.module.ts ***!
    \*****************************************************/

  /*! exports provided: SplashscreenPageModule */

  /***/
  function srcAppSplashscreenSplashscreenModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashscreenPageModule", function () {
      return SplashscreenPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./splashscreen-routing.module */
    "./src/app/splashscreen/splashscreen-routing.module.ts");
    /* harmony import */


    var _splashscreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./splashscreen.page */
    "./src/app/splashscreen/splashscreen.page.ts");

    var SplashscreenPageModule = function SplashscreenPageModule() {
      _classCallCheck(this, SplashscreenPageModule);
    };

    SplashscreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashscreenPageRoutingModule"]],
      declarations: [_splashscreen_page__WEBPACK_IMPORTED_MODULE_6__["SplashscreenPage"]]
    })], SplashscreenPageModule);
    /***/
  },

  /***/
  "./src/app/splashscreen/splashscreen.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/splashscreen/splashscreen.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSplashscreenSplashscreenPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: black;\n}\n\n@-webkit-keyframes slide-in-blurred-top {\n  0% {\n    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);\n    transform-origin: 50% 0;\n    filter: blur(40px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slide-in-blurred-top {\n  0% {\n    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);\n    transform-origin: 50% 0;\n    filter: blur(40px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n\n.container {\n  -webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n  animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;\n}\n\n.container img {\n  height: 100px;\n  margin-top: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BsYXNoc2NyZWVuL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcc3BsYXNoc2NyZWVuXFxzcGxhc2hzY3JlZW4ucGFnZS5zY3NzIiwic3JjL2FwcC9zcGxhc2hzY3JlZW4vc3BsYXNoc2NyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFBd0M7SUFBZ0Usc0RBQUE7SUFBb0YsdUJBQUE7SUFBaUQsa0JBQUE7SUFBa0IsVUFBQTtFQ1U3UDtFRFZ1UTtJQUF5RCw0Q0FBQTtJQUE2RSx5QkFBQTtJQUFnRCxlQUFBO0lBQWUsVUFBQTtFQ21CNWM7QUFDRjs7QURwQnlkO0VBQWdDO0lBQWdFLHNEQUFBO0lBQW9GLHVCQUFBO0lBQWlELGtCQUFBO0lBQWtCLFVBQUE7RUM4QjlzQjtFRDlCd3RCO0lBQXlELDRDQUFBO0lBQTZFLHlCQUFBO0lBQWdELGVBQUE7SUFBZSxVQUFBO0VDdUM3NUI7QUFDRjs7QUR2Q0E7RUFDSSxnRkFBQTtFQUFrRix3RUFBQTtBQzBDdEY7O0FEekNJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUMyQ1IiLCJmaWxlIjoic3JjL2FwcC9zcGxhc2hzY3JlZW4vc3BsYXNoc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tYmx1cnJlZC10b3B7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwMHB4KSBzY2FsZVkoMi41KSBzY2FsZVgoLjIpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAwcHgpIHNjYWxlWSgyLjUpIHNjYWxlWCguMik7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSAwO3RyYW5zZm9ybS1vcmlnaW46NTAlIDA7LXdlYmtpdC1maWx0ZXI6Ymx1cig0MHB4KTtmaWx0ZXI6Ymx1cig0MHB4KTtvcGFjaXR5OjB9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlWSgxKSBzY2FsZVgoMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGVZKDEpIHNjYWxlWCgxKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LXdlYmtpdC1maWx0ZXI6Ymx1cigwKTtmaWx0ZXI6Ymx1cigwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc2xpZGUtaW4tYmx1cnJlZC10b3B7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwMHB4KSBzY2FsZVkoMi41KSBzY2FsZVgoLjIpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAwcHgpIHNjYWxlWSgyLjUpIHNjYWxlWCguMik7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSAwO3RyYW5zZm9ybS1vcmlnaW46NTAlIDA7LXdlYmtpdC1maWx0ZXI6Ymx1cig0MHB4KTtmaWx0ZXI6Ymx1cig0MHB4KTtvcGFjaXR5OjB9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlWSgxKSBzY2FsZVgoMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGVZKDEpIHNjYWxlWCgxKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LXdlYmtpdC1maWx0ZXI6Ymx1cigwKTtmaWx0ZXI6Ymx1cigwKTtvcGFjaXR5OjF9fVxyXG4uY29udGFpbmVye1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246c2xpZGUtaW4tYmx1cnJlZC10b3AgLjZzIGN1YmljLWJlemllciguMjMsMS4wMDAsLjMyLDEuMDAwKSBib3RoO2FuaW1hdGlvbjpzbGlkZS1pbi1ibHVycmVkLXRvcCAuNnMgY3ViaWMtYmV6aWVyKC4yMywxLjAwMCwuMzIsMS4wMDApIGJvdGg7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3MCU7XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi1ibHVycmVkLXRvcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSBzY2FsZVkoMi41KSBzY2FsZVgoMC4yKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgc2NhbGVZKDIuNSkgc2NhbGVYKDAuMik7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig0MHB4KTtcbiAgICBmaWx0ZXI6IGJsdXIoNDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZVkoMSkgc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZVkoMSkgc2NhbGVYKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDApO1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWJsdXJyZWQtdG9wIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHNjYWxlWSgyLjUpIHNjYWxlWCgwLjIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSBzY2FsZVkoMi41KSBzY2FsZVgoMC4yKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDQwcHgpO1xuICAgIGZpbHRlcjogYmx1cig0MHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlWSgxKSBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlWSgxKSBzY2FsZVgoMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMCk7XG4gICAgZmlsdGVyOiBibHVyKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250YWluZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4tYmx1cnJlZC10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi1ibHVycmVkLXRvcCAwLjZzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSBib3RoO1xufVxuLmNvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiA3MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/splashscreen/splashscreen.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/splashscreen/splashscreen.page.ts ***!
    \***************************************************/

  /*! exports provided: SplashscreenPage */

  /***/
  function srcAppSplashscreenSplashscreenPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashscreenPage", function () {
      return SplashscreenPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var SplashscreenPage = /*#__PURE__*/function () {
      function SplashscreenPage(route, storage) {
        var _this = this;

        _classCallCheck(this, SplashscreenPage);

        this.route = route;
        this.storage = storage;
        setTimeout(function () {
          _this.storage.get("User").then(function (value) {
            if (!value) {
              _this.route.navigateByUrl('/home');
            } else if (value.RoleName == 'Customer') {
              _this.route.navigateByUrl('/home');
            } else if (value.RoleName == 'ShopOwner') {
              _this.route.navigateByUrl('/shopowner/dashboard');
            } else if (value.RoleName == 'SuperAdmin') {
              _this.route.navigateByUrl('/superadmin/dashboard');
            } else {
              _this.route.navigateByUrl('/home');
            }
          });
        }, 2000);
      }

      _createClass(SplashscreenPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SplashscreenPage;
    }();

    SplashscreenPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    SplashscreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-splashscreen',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./splashscreen.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/splashscreen/splashscreen.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./splashscreen.page.scss */
      "./src/app/splashscreen/splashscreen.page.scss"))["default"]]
    })], SplashscreenPage);
    /***/
  }
}]);
//# sourceMappingURL=splashscreen-splashscreen-module-es5.js.map