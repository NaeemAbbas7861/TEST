function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["passwordreset-passwordreset-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/passwordreset/passwordreset.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/passwordreset/passwordreset.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPasswordresetPasswordresetPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n\r\n  <ion-header padding style=\"background: black;\" class=\"mybg head\">\r\n    <ion-toolbar color=\"dark\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button   style=\"color: white\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>  \r\n    <ion-row class=\"ion-justify-content-center\" style=\"background: black; height: 140px;\">\r\n      <ion-img src=\"assets/images/logo.png\" class=\"head-image\"></ion-img>\r\n    </ion-row>\r\n  </ion-header>\r\n\r\n<ion-content class=\"ion-padding \">\r\n  <ion-text><h3  class=\"title ion-no-margin ion-margin-bottom ion-text-center\" style=\"font-family: 'Times New Roman', Times, serif; font-weight: bold; font-size: 18px;\">Forgot your password?</h3></ion-text>\r\n  <ion-grid>\r\n    \r\n    <ion-row>\r\n      <ion-col>\r\n        <form [formGroup]=\"fg\">\r\n        <ion-label><ion-text class=\"small\" style=\"font-family: 'Times New Roman', Times, serif;  font-size: 16px;\">Type your Contact Number</ion-text></ion-label><br>\r\n        <ion-input  type=\"text\" placeholder=\"Enter Contact Number\" formControlName=\"MobileNumber\" [(ngModel)]=\"email\" class=\"input ion-clearInput ion-padding-horizontal ion-padding-top\" ></ion-input>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.mobileNumber\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"fg.get('MobileNumber').hasError(validation.type) && (fg.get('MobileNumber').dirty || fg.get('MobileNumber').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </form>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" color=\"mycolor1\" [disabled]=\"!fg.valid\" (click)=\"reset()\"><strong class=\"white\">Reset Password</strong></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/passwordreset/passwordreset.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/passwordreset/passwordreset.module.ts ***!
    \*******************************************************/

  /*! exports provided: PasswordresetPageModule */

  /***/
  function srcAppPasswordresetPasswordresetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordresetPageModule", function () {
      return PasswordresetPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _passwordreset_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./passwordreset.page */
    "./src/app/passwordreset/passwordreset.page.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */


    var routes = [{
      path: '',
      component: _passwordreset_page__WEBPACK_IMPORTED_MODULE_5__["PasswordresetPage"]
    }, {
      path: ':id/otp',
      loadChildren: './otp_verify/otp_verifyreset.module#OtpverifyresetPageModule'
    }];

    var PasswordresetPageModule = function PasswordresetPageModule() {
      _classCallCheck(this, PasswordresetPageModule);
    };

    PasswordresetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      declarations: [_passwordreset_page__WEBPACK_IMPORTED_MODULE_5__["PasswordresetPage"]]
    })], PasswordresetPageModule);
    /***/
  },

  /***/
  "./src/app/passwordreset/passwordreset.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/passwordreset/passwordreset.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPasswordresetPasswordresetPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".head {\n  min-height: 21vh !important;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n}\n\n.small {\n  font-size: 15px;\n  color: black;\n}\n\n.white {\n  color: white;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n  margin-top: 10px;\n}\n\n.title {\n  font-size: 18px;\n  color: #070707;\n}\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmRyZXNldC9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHBhc3N3b3JkcmVzZXRcXHBhc3N3b3JkcmVzZXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYXNzd29yZHJlc2V0L3Bhc3N3b3JkcmVzZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSjs7QURDQTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0dKOztBREFBO0VBQ0ksWUFBQTtBQ0dKOztBRERBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNLSjs7QURGQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFzc3dvcmRyZXNldC9wYXNzd29yZHJlc2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcclxuICAgIG1pbi1oZWlnaHQ6IDIxdmggIWltcG9ydGFudDtcclxufVxyXG4uaGVhZC1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBcclxufVxyXG4ud2hpdGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAgIzA3MDcwNztcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgIiwiLmhlYWQge1xuICBtaW4taGVpZ2h0OiAyMXZoICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogMTgwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMwNzA3MDc7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/passwordreset/passwordreset.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/passwordreset/passwordreset.page.ts ***!
    \*****************************************************/

  /*! exports provided: PasswordresetPage */

  /***/
  function srcAppPasswordresetPasswordresetPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordresetPage", function () {
      return PasswordresetPage;
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


    var _functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../functions.service */
    "./src/app/functions.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/shared.service */
    "./src/app/services/shared.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */


    var PasswordresetPage = /*#__PURE__*/function () {
      function PasswordresetPage(fun, menuCtrl, loginservice, storage, router, toasterservice, loadingController, sharedservice, formBuilder) {
        _classCallCheck(this, PasswordresetPage);

        this.fun = fun;
        this.menuCtrl = menuCtrl;
        this.loginservice = loginservice;
        this.storage = storage;
        this.router = router;
        this.toasterservice = toasterservice;
        this.loadingController = loadingController;
        this.sharedservice = sharedservice;
        this.formBuilder = formBuilder;
        this.email = ""; // else{
        //   this.fun.presentToast('Wrong Input!', true, 'bottom', 2100);
        // }

        this.validation_messages = {
          mobileNumber: [{
            type: "pattern",
            message: "Number is like 03xxxxxxxxx and length must be 11"
          }]
        };
      }

      _createClass(PasswordresetPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fg = this.formBuilder.group({
            MobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern("^0[03][0-9]{9}$")]))
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menuCtrl.enable(false, 'start');
          this.menuCtrl.enable(false, 'end');
        }
      }, {
        key: "reset",
        value: function reset() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // if(this.fun.validateEmail(this.email)){
                    this.fg.value.MobileNumber = this.fg.value.MobileNumber.substring(1, 11);
                    _context.next = 3;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 3:
                    loading = _context.sent;
                    _context.next = 6;
                    return loading.present();

                  case 6:
                    _context.next = 8;
                    return this.loginservice.forgotPassword(JSON.stringify(this.fg.value.MobileNumber)) //(JSON.stringify(this.fg.value.MobileNumber))
                    .subscribe(function (res) {
                      if (res) {
                        _this.id = res;
                        console.log(_this.id);
                        loading.dismiss();

                        _this.toasterservice.create("Code is sent to your email and number", 'success');

                        _this.router.navigate(['passwordreset/' + res + '/otp']);
                      } else {
                        loading.dismiss();

                        _this.toasterservice.create("error occored", 'danger');
                      }
                    }, function (err) {
                      loading.dismiss();

                      _this.toasterservice.create("Please enter a valid number", 'danger');
                    });

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return PasswordresetPage;
    }();

    PasswordresetPage.ctorParameters = function () {
      return [{
        type: _functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
      }];
    };

    PasswordresetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-passwordreset',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./passwordreset.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/passwordreset/passwordreset.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./passwordreset.page.scss */
      "./src/app/passwordreset/passwordreset.page.scss"))["default"]]
    })], PasswordresetPage);
    /***/
  },

  /***/
  "./src/app/services/toast.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/toast.service.ts ***!
    \*******************************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ToastService = /*#__PURE__*/function () {
      function ToastService(toastCtrl) {
        _classCallCheck(this, ToastService);

        this.toastCtrl = toastCtrl;
      }

      _createClass(ToastService, [{
        key: "create",
        value: function create(message) {
          var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
          var ok = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3000;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.toast) {
                      this.toast.dismiss();
                    }

                    _context2.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      color: color,
                      duration: ok ? null : duration,
                      position: 'bottom'
                    });

                  case 3:
                    this.toast = _context2.sent;
                    this.toast.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ToastService;
    }();

    ToastService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ToastService);
    /***/
  }
}]);
//# sourceMappingURL=passwordreset-passwordreset-module-es5.js.map