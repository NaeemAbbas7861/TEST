function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unapproved-unapprovedrider-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/ridersadmin/unapproved/unapproved.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/ridersadmin/unapproved/unapproved.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminRidersadminUnapprovedUnapprovedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button> \r\n    </ion-buttons>\r\n    <ion-back-button  color=\"dark\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n    <ion-title  color=\"dark\" class=\"ion-text-center\">Disabled</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\"  color=\"light\">\r\n\r\n  <ion-card *ngFor= \"let rider of riders\">\r\n    <ion-item>\r\n    <ion-label><b>{{rider.firstName }}  {{rider.lastName }} </b></ion-label>\r\n    <ion-button size=\"small\"  color='success'  (click)=\"ApprovedRider(rider.id)\">Activate</ion-button>\r\n  </ion-item>\r\n  \r\n    <ion-card-content>\r\n      <!-- <p> First Name: {{login.firstname}}</p>\r\n      <p>Number: {{shop.contact}}</p>\r\n      <p>Owner CNIC: {{shop.ownerCNIC}} </p>\r\n      <p>NDN No: {{shop.ndN_Number}}</p>\r\n      <p>latitude: {{shop.latitude}}</p>\r\n      <p>longitude: {{shop.longitude}}</p>\r\n      <p>Address: {{shop.address}}</p> -->\r\n     \r\n      <p> Name: {{rider.firstName}} {{rider.lastName}}</p>\r\n      <p> Email address: {{rider.email_Address}}</p>\r\n      <p> Address:  {{rider.address}}</p>\r\n      <p> Number:{{rider.contact_Number}} </p>\r\n      <p> CNIC: {{rider.cnic}}  </p>\r\n      <ion-img *ngIf=\"!rider.cniC_Image\"   class=\"input ion-padding-vertical\"  src=\"../../assets/images/noimage.jpg\"></ion-img>\r\n      <ion-img *ngIf=\"rider.cniC_Image\"   class=\"input ion-padding-horizontal\" [src]=\"resourceURL + rider.cniC_Image\" class=\"Image\"></ion-img>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div *ngIf=\"NotRiderFound\">\r\n    <ion-text  class=\"mid ion-justify-content-center\" > No rider found</ion-text>\r\n  </div>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  \r\n</ion-content>";
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
  "./src/app/superAdmin/ridersadmin/unapproved/unapproved.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/superAdmin/ridersadmin/unapproved/unapproved.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminRidersadminUnapprovedUnapprovedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".Image {\n  height: 150px;\n  width: 230px;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n  padding-left: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi9yaWRlcnNhZG1pbi91bmFwcHJvdmVkL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcc3VwZXJBZG1pblxccmlkZXJzYWRtaW5cXHVuYXBwcm92ZWRcXHVuYXBwcm92ZWQucGFnZS5zY3NzIiwic3JjL2FwcC9zdXBlckFkbWluL3JpZGVyc2FkbWluL3VuYXBwcm92ZWQvdW5hcHByb3ZlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zdXBlckFkbWluL3JpZGVyc2FkbWluL3VuYXBwcm92ZWQvdW5hcHByb3ZlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSW1hZ2V7XHJcblxyXG4gICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG59XHJcbi5taWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XHJcbiAgICBcclxufSIsIi5JbWFnZSB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAyMzBweDtcbn1cblxuLm1pZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/superAdmin/ridersadmin/unapproved/unapprovedrider.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/superAdmin/ridersadmin/unapproved/unapprovedrider.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: UnapprovedRiderPageModule */

  /***/
  function srcAppSuperAdminRidersadminUnapprovedUnapprovedriderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnapprovedRiderPageModule", function () {
      return UnapprovedRiderPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _unapprovedrider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./unapprovedrider.page */
    "./src/app/superAdmin/ridersadmin/unapproved/unapprovedrider.page.ts");

    var routes = [{
      path: '',
      component: _unapprovedrider_page__WEBPACK_IMPORTED_MODULE_6__["UnapprovedRiderPage"]
    }];

    var UnapprovedRiderPageModule = function UnapprovedRiderPageModule() {
      _classCallCheck(this, UnapprovedRiderPageModule);
    };

    UnapprovedRiderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_unapprovedrider_page__WEBPACK_IMPORTED_MODULE_6__["UnapprovedRiderPage"]]
    })], UnapprovedRiderPageModule);
    /***/
  },

  /***/
  "./src/app/superAdmin/ridersadmin/unapproved/unapprovedrider.page.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/superAdmin/ridersadmin/unapproved/unapprovedrider.page.ts ***!
    \***************************************************************************/

  /*! exports provided: UnapprovedRiderPage */

  /***/
  function srcAppSuperAdminRidersadminUnapprovedUnapprovedriderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnapprovedRiderPage", function () {
      return UnapprovedRiderPage;
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


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts"); //import * as moment from 'moment';


    var UnapprovedRiderPage = /*#__PURE__*/function () {
      function UnapprovedRiderPage(route, api, loadingController, router, //  private events: Events,
      toastService) {
        _classCallCheck(this, UnapprovedRiderPage);

        this.route = route;
        this.api = api;
        this.loadingController = loadingController;
        this.router = router;
        this.toastService = toastService;
        this.NotRiderFound = false;
        this.resourceURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].RESOURCE_URL; // this.today = moment().format('YYYY-MM-DD');
      }

      _createClass(UnapprovedRiderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.GetUnApprovedRider();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.GetUnApprovedRider();
          this.doRefresh(this.event);
        }
      }, {
        key: "GetUnApprovedRider",
        value: function GetUnApprovedRider() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: 'Loading'
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    _context2.next = 7;
                    return this.api.GetUnApprovedRider().subscribe(function (res) {
                      console.log(res);
                      _this.riders = res;

                      if (_this.riders.length <= 0) {
                        _this.NotRiderFound = true;
                      }

                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "navigate",
        value: function navigate(id) {
          this.router.navigateByUrl('superadmin/riders/' + id + '/products');
        }
      }, {
        key: "ApprovedRider",
        value: function ApprovedRider(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

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
                    return this.api.ChangeRiderstatus(id).subscribe(function (res) {
                      console.log(res);
                      _this2.riders = res;

                      _this2.toastService.create('Rider Approval request succeded');

                      _this2.GetUnApprovedRider();

                      _this2.doRefresh(event); //   this.events.publish('unapprovedCount', this.doctors.length);


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
        key: "doRefresh",
        value: function doRefresh(event) {
          console.log('Begin async operation');
          this.ngOnInit();
          setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
          }, 1000);
        }
      }]);

      return UnapprovedRiderPage;
    }();

    UnapprovedRiderPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }];
    };

    UnapprovedRiderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-approved',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./unapproved.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/ridersadmin/unapproved/unapproved.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./unapproved.page.scss */
      "./src/app/superAdmin/ridersadmin/unapproved/unapproved.page.scss"))["default"]]
    })], UnapprovedRiderPage);
    /***/
  }
}]);
//# sourceMappingURL=unapproved-unapprovedrider-module-es5.js.map