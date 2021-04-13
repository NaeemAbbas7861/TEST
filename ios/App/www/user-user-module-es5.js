function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/user/user.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/user/user.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminUserUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"dark\"></ion-menu-button> \n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" color=\"dark\">Users</ion-title>\n    <ion-back-button  color=\"dark\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"ion-padding\"  color=\"light\"  >\n  <div>\n    \n        <div [ngSwitch]=\"type\" *ngIf=\"activeCustomer\">\n          <ion-list *ngSwitchCase=\"'ActiveCustomer'\">\n            <ion-item>\n              <ion-label ><b>Active Customer</b></ion-label>\n            </ion-item>\n          <ion-item *ngFor=\"let  activeCustomer of activeCustomer\"> \n              <h6  style=\"font-size: 14px;\">  {{ activeCustomer.firstName }} {{activeCustomer.lastName}}</h6><br>           \n              <ion-button  color=\"mytheme\" size=\"small\" color=\"danger\" slot=\"end\" (click)= \"UpdateUserStatus(activeCustomer.id)\">Disable</ion-button>\n            </ion-item>\n          </ion-list>\n        </div>\n        <div [ngSwitch]=\"type\" *ngIf=\"users\">\n          <ion-list *ngSwitchCase=\"'users'\">\n            <ion-item>\n              <ion-label ><b>All Users</b></ion-label>\n            </ion-item>\n          <ion-item *ngFor=\"let  user of users\"> \n               <h6 style=\"font-size: 14px;\">  {{ user.firstName }} {{user.lastName}}</h6><br>   \n               <ion-button *ngIf=\"user.isDisabled===false \"  color=\"mytheme\" size=\"small\" color=\"success\" slot=\"end\" (click)=\"UpdateUserStatus(user.id)\"> Disabled</ion-button>\n               <ion-button *ngIf=\"user.isDisabled===true \" color=\"mytheme\" size=\"small\" color=\"danger\" slot=\"end\" (click)=\"UpdateUserStatus(user.id)\"> Active</ion-button>\n               <ion-button *ngIf=\"user.isDisabled===null \" color=\"mytheme\" size=\"small\" color=\"danger\" slot=\"end\" (click)=\"UpdateUserStatus(user.id)\"> Active</ion-button>\n             \n                </ion-item>\n          </ion-list>\n        </div>\n\n        <div [ngSwitch]=\"type\" *ngIf=\"disabledCustomer\">\n            <ion-list *ngSwitchCase=\"'DisabledCustomer'\">\n              <ion-item>\n                <ion-label ><b>Disable Customer</b></ion-label>\n              </ion-item>\n              <ion-item *ngFor=\"let disabledCustomer of disabledCustomer\"> \n                <h6 style=\"font-size: 14px;\">  {{ disabledCustomer.firstName }} {{disabledCustomer.lastName}}</h6><br> \n                <ion-button  color=\"mytheme\" size=\"small\" color=\"success\" slot=\"end\" (click)=\"UpdateUserStatus(disabledCustomer.id)\"> Active</ion-button>\n              </ion-item>\n            </ion-list>\n          </div>\n\n          <div [ngSwitch]=\"type\" *ngIf=\"activeShopowner\">\n              <ion-list *ngSwitchCase=\"'ActiveShopowner'\">\n                <ion-item>\n                  <ion-label ><b>Active Shopowner</b></ion-label>\n                </ion-item>\n                <ion-item *ngFor=\"let activeShopowner of activeShopowner\"> \n                  <h6 style=\"font-size: 14px;\">  {{ activeShopowner.firstName }} {{activeShopowner.lastName}}</h6><br>\n                  <ion-button  color=\"mytheme\" size=\"small\" color=\"danger\" slot=\"end\" (click)=\"UpdateUserStatus(activeShopowner.id)\" >Disable</ion-button>\n                </ion-item>\n              </ion-list>\n          </div>\n\n          <div [ngSwitch]=\"type\" *ngIf=\"disabledShopOwner\">\n                <ion-list *ngSwitchCase=\"'DisabledShopOwner'\">\n                  <ion-item>\n                    <ion-label ><b>Disable ShopOwner</b></ion-label>\n                  </ion-item>\n                  <ion-item *ngFor=\"let disabledShopOwner of disabledShopOwner\"> \n                    <h6 style=\"font-size: 14px;\">  {{ disabledShopOwner.firstName }} {{disabledShopOwner.lastName}}</h6><br>\n                    <ion-button  color=\"mytheme\" size=\"small\" color=\"success\" slot=\"end\" (click)=\"UpdateUserStatus(disabledShopOwner.id)\"> Active</ion-button>\n                  </ion-item>\n                </ion-list>\n          </div>\n  </div>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n\n\n<div>\n  <ion-segment [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\"  slot=\"end\"  value=\"users\"  class=\"segment23\" >\n    <ion-segment-button value=\"users\"> <ion-icon name=\"people-outline\" size=\"large\"  ></ion-icon></ion-segment-button>\n    <ion-segment-button value=\"ActiveCustomer\"> <ion-icon name=\"person-add-outline\" size=\"large\"  ></ion-icon></ion-segment-button>\n    <ion-segment-button value=\"DisabledCustomer\">  <ion-icon name=\"person-remove-outline\" size=\"large\" class=\"segment23\"  ></ion-icon></ion-segment-button>\n   </ion-segment>\n</div>\n\n<div>\n  <ion-segment [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\"  slot=\"end\" >\n    <ion-segment-button value=\"ActiveShopowner\">  <ion-icon name=\"medkit-outline\" size=\"large\"  ></ion-icon></ion-segment-button>\n    <ion-segment-button   value=\"DisabledShopOwner\" >   <ion-icon name=\"remove-circle-outline\"  size=\"large\"></ion-icon></ion-segment-button>\n  </ion-segment>\n</div>\n";
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.toast) {
                      this.toast.dismiss();
                    }

                    _context.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      color: color,
                      duration: ok ? null : duration,
                      position: 'bottom'
                    });

                  case 3:
                    this.toast = _context.sent;
                    this.toast.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
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
  },

  /***/
  "./src/app/superAdmin/user/user-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/superAdmin/user/user-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: UserPageRoutingModule */

  /***/
  function srcAppSuperAdminUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function () {
      return UserPageRoutingModule;
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


    var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/superAdmin/user/user.page.ts");

    var routes = [{
      path: '',
      component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }];

    var UserPageRoutingModule = function UserPageRoutingModule() {
      _classCallCheck(this, UserPageRoutingModule);
    };

    UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/superAdmin/user/user.module.ts":
  /*!************************************************!*\
    !*** ./src/app/superAdmin/user/user.module.ts ***!
    \************************************************/

  /*! exports provided: UserPageModule */

  /***/
  function srcAppSuperAdminUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
      return UserPageModule;
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


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/superAdmin/user/user-routing.module.ts");
    /* harmony import */


    var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/superAdmin/user/user.page.ts");

    var UserPageModule = function UserPageModule() {
      _classCallCheck(this, UserPageModule);
    };

    UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]],
      declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })], UserPageModule);
    /***/
  },

  /***/
  "./src/app/superAdmin/user/user.page.scss":
  /*!************************************************!*\
    !*** ./src/app/superAdmin/user/user.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminUserUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input {\n  font-size: 10px;\n  color: #080808;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi91c2VyL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcc3VwZXJBZG1pblxcdXNlclxcdXNlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1cGVyQWRtaW4vdXNlci91c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7RUFDQSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zdXBlckFkbWluL3VzZXIvdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOnJnYig4LCA4LCA4KTtcclxufSIsIi5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICMwODA4MDg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/superAdmin/user/user.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/superAdmin/user/user.page.ts ***!
    \**********************************************/

  /*! exports provided: UserPage */

  /***/
  function srcAppSuperAdminUserUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPage", function () {
      return UserPage;
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");

    var UserPage = /*#__PURE__*/function () {
      function UserPage(loadingController, route, api, toastServices) {
        _classCallCheck(this, UserPage);

        this.loadingController = loadingController;
        this.route = route;
        this.api = api;
        this.toastServices = toastServices;
        this.filtercart = [];
      }

      _createClass(UserPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.getCustomer();

                  case 2:
                    _context2.next = 4;
                    return this.GetShopOwner();

                  case 4:
                    _context2.next = 6;
                    return this.GetAllUser();

                  case 6:
                    this.type = 'users';

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getCustomer",
        value: function getCustomer() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create({
                      message: 'Loading'
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    _context3.next = 7;
                    return this.api.GetUserData(3).subscribe(function (res) {
                      console.log(res, "Customers");
                      _this.customer = res; // this.products = this.shop.products.filter(x=>x.quantity > 0);

                      _this.disabledCustomer = _this.customer.filter(function (x) {
                        return x.isDisabled == true;
                      });
                      console.log(_this.activeCustomer);
                      _this.activeCustomer = _this.customer.filter(function (x) {
                        return x.isDisabled != true;
                      });
                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "GetShopOwner",
        value: function GetShopOwner() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      message: 'Loading'
                    });

                  case 2:
                    loading = _context4.sent;
                    _context4.next = 5;
                    return loading.present();

                  case 5:
                    _context4.next = 7;
                    return this.api.GetUserData(2).subscribe(function (res) {
                      console.log(res, "shopowner");
                      _this2.shopowner = res;
                      _this2.disabledShopOwner = _this2.shopowner.filter(function (x) {
                        return x.isDisabled == true;
                      });
                      console.log("Disabled Shopowners", _this2.disabledShopOwner);
                      _this2.activeShopowner = _this2.shopowner.filter(function (x) {
                        return x.isDisabled != true;
                      });
                      console.log("Active Shopowners", _this2.activeShopowner);
                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "GetAllUser",
        value: function GetAllUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingController.create({
                      message: 'Loading'
                    });

                  case 2:
                    loading = _context5.sent;
                    _context5.next = 5;
                    return loading.present();

                  case 5:
                    _context5.next = 7;
                    return this.api.GetAllUser().subscribe(function (res) {
                      console.log(res, "Riders");
                      _this3.users = res;
                      console.log(_this3.users); // this.disabledShopOwner     = this.shopowner.filter(x=> x.isDisabled==true);
                      // console.log("Disabled Shopowners", this.disabledShopOwner );
                      // this.activeShopowner= this.shopowner.filter(x=> x.isDisabled!=true );
                      // console.log("Active Shopowners",this.activeShopowner);

                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.ngOnInit();
          setTimeout(function () {
            event.target.complete();
          }, 1000);
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {}
      }, {
        key: "UpdateUserStatus",
        value: function UpdateUserStatus(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingController.create({
                      message: 'Loading'
                    });

                  case 2:
                    loading = _context6.sent;
                    _context6.next = 5;
                    return loading.present();

                  case 5:
                    _context6.next = 7;
                    return this.api.UpdateUserStatus(id).subscribe(function (res) {
                      console.log(res);

                      _this4.toastServices.create('Changed successfully');

                      _this4.doRefresh(event);

                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return UserPage;
    }();

    UserPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }];
    };

    UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/user/user.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user.page.scss */
      "./src/app/superAdmin/user/user.page.scss"))["default"]]
    })], UserPage);
    /***/
  }
}]);
//# sourceMappingURL=user-user-module-es5.js.map