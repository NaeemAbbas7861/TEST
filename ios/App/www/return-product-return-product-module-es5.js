function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["return-product-return-product-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/return-product/return-product.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/return-product/return-product.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminReturnProductReturnProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"dark\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" >\n      <ion-back-button text=\"\" color=\"dark\" icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"dark\" class=\"ion-text-center\">Returnable Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title> \n        RETURN PRODUCT LIST\n        </ion-card-title>   \n    </ion-card-header>\n  </ion-card>\n\n<ion-card  *ngFor=\"let returnproduct of returnproduct\">\n  <ion-card-header>\n    <ion-item>\n    <ion-card-title> \n     {{returnproduct.name}}\n      </ion-card-title>\n      <ion-icon slot =\"end\" name=\"pencil-outline\" routerLink = \"edit/{{returnproduct.id}}\" ></ion-icon>\n      <ion-icon slot=\"end\"  style=\"color: lightcoral;\" name=\"trash\" (click)=\"presentAlertConfirm(returnproduct.id)\"></ion-icon>\n    </ion-item>\n  </ion-card-header>\n  <ion-card-content>\n    <strong>Price :{{returnproduct.price}}</strong>\n  </ion-card-content>\n</ion-card>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button routerLink = \"add\" color=\"white\">\n    <ion-icon  name=\"add\" size=\"large\" style=\"color: #e9b006;\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/services/order.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/order.service.ts ***!
    \*******************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
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


    var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./base.service */
    "./src/app/services/base.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var OrderService = /*#__PURE__*/function (_base_service__WEBPAC) {
      _inherits(OrderService, _base_service__WEBPAC);

      var _super = _createSuper(OrderService);

      // private readonly API_PRODUCT = `${environment.BASE_URL}product/`
      function OrderService(http) {
        var _this;

        _classCallCheck(this, OrderService);

        _this = _super.call(this, http);
        _this.http = http;
        _this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        _this.API_ORDER = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "order/");
        _this.API_EARNING = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "earning/");
        _this.API_RETURNDISCOUNT = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "returnedproduct/");
        return _this;
      }

      _createClass(OrderService, [{
        key: "GetCustomerOrders",
        value: function GetCustomerOrders(id) {
          var url = "".concat(this.API_ORDER, "user/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "Getreturnedproduct",
        value: function Getreturnedproduct() {
          var url = "".concat(this.API_RETURNDISCOUNT);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetReturnedProductbyId",
        value: function GetReturnedProductbyId(id) {
          var url = "".concat(this.API_RETURNDISCOUNT).concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "DeleteProduct",
        value: function DeleteProduct(id) {
          var url = "".concat(this.API_RETURNDISCOUNT).concat(id);
          return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "postreturnedProduct",
        value: function postreturnedProduct(data) {
          var url = "".concat(this.API_RETURNDISCOUNT);
          return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "EditProduct",
        value: function EditProduct(id, data) {
          var url = "".concat(this.API_RETURNDISCOUNT).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetOrderItems",
        value: function GetOrderItems(id) {
          var url = "".concat(this.API_ORDER).concat(id, "/orderitems");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "Allorders",
        value: function Allorders() {
          var url = "".concat(this.API_ORDER);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "riderDashboard",
        value: function riderDashboard(id) {
          var url = "".concat(this.API_ORDER, "rider/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetOrder",
        value: function GetOrder(id) {
          var url = "".concat(this.API_ORDER).concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetCustomerOrder",
        value: function GetCustomerOrder(id) {
          var url = "".concat(this.API_ORDER, "customer/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetUserShopOrders",
        value: function GetUserShopOrders(id) {
          // const url = `${this.API_ORDER}usershop/${id}`;
          var url = "".concat(this.API_ORDER);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetNewUserShopOrders",
        value: function GetNewUserShopOrders(id) {
          var url = "".concat(this.API_ORDER, "usershop/").concat(id, "/0"); ///const url = `${this.API_ORDER}`;

          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetPendingUserShopOrders",
        value: function GetPendingUserShopOrders(id) {
          var url = "".concat(this.API_ORDER, "usershop/").concat(id, "/1");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetCompleteUserShopOrders",
        value: function GetCompleteUserShopOrders(id) {
          var url = "".concat(this.API_ORDER, "usershop/").concat(id, "/2");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetCancelUserShopOrders",
        value: function GetCancelUserShopOrders(id) {
          var url = "".concat(this.API_ORDER, "usershop/").concat(id, "/3");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetNewRiderOrders",
        value: function GetNewRiderOrders(lat, lng) {
          var url = "".concat(this.API_ORDER).concat(lat, "/").concat(lng);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetRiderOrdersByStatus",
        value: function GetRiderOrdersByStatus(id, status) {
          var url = "".concat(this.API_ORDER, "rider/").concat(id, "/").concat(status);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "PostOrder",
        value: function PostOrder(data) {
          var url = "".concat(this.API_ORDER);
          return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "PutOrder",
        value: function PutOrder(id, data) {
          var url = "".concat(this.API_ORDER).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "MarksReceived",
        value: function MarksReceived(id) {
          var url = "".concat(this.API_ORDER).concat(id, "/markreceived");
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "AcceptOrder",
        value: function AcceptOrder(id, riderid, status) {
          var url = "".concat(this.API_ORDER).concat(id, "/").concat(riderid, "/").concat(status);
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "CancelOrder",
        value: function CancelOrder(id, status) {
          var url = "".concat(this.API_ORDER).concat(id, "/changestatus/").concat(status);
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "OrderCompletionCode",
        value: function OrderCompletionCode(id, ordercode, status) {
          var url = "".concat(this.API_ORDER, "complete/").concat(id, "/").concat(ordercode, "/").concat(status);
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetEarning",
        value: function GetEarning(date) {
          var url = "".concat(this.API_EARNING, "superadmin/").concat(date);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetEarningDatetoDate",
        value: function GetEarningDatetoDate(date, date1) {
          var url = "".concat(this.API_EARNING, "superadmin/").concat(date, "/").concat(date1);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "DownloadEarningDatetoDate",
        value: function DownloadEarningDatetoDate(date, date1) {
          var url = "".concat(this.API_EARNING, "downloadcsv/").concat(date, "/").concat(date1);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopEarning",
        value: function GetShopEarning(id, date) {
          var url = "".concat(this.API_EARNING, "shopowner/").concat(id, "/").concat(date);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "ChangePaymentStatus",
        value: function ChangePaymentStatus(id, status, panelty) {
          var url = "".concat(this.API_ORDER, "PaymentStatus/").concat(id, "/").concat(status, "/").concat(panelty);
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }]);

      return OrderService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

    OrderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OrderService);
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
  "./src/app/superAdmin/return-product/return-product-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/superAdmin/return-product/return-product-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ReturnProductPageRoutingModule */

  /***/
  function srcAppSuperAdminReturnProductReturnProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReturnProductPageRoutingModule", function () {
      return ReturnProductPageRoutingModule;
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


    var _return_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./return-product.page */
    "./src/app/superAdmin/return-product/return-product.page.ts");

    var routes = [{
      path: '',
      component: _return_product_page__WEBPACK_IMPORTED_MODULE_3__["ReturnProductPage"]
    }, {
      path: 'add',
      loadChildren: './add/addprodcut.module#ReturnAddprodcutPageModule'
    }, {
      path: 'edit/:id',
      loadChildren: './edit/editprodcut.module#ReturnEditprodcutPageModule'
    }];

    var ReturnProductPageRoutingModule = function ReturnProductPageRoutingModule() {
      _classCallCheck(this, ReturnProductPageRoutingModule);
    };

    ReturnProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReturnProductPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/superAdmin/return-product/return-product.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/superAdmin/return-product/return-product.module.ts ***!
    \********************************************************************/

  /*! exports provided: ReturnProductPageModule */

  /***/
  function srcAppSuperAdminReturnProductReturnProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReturnProductPageModule", function () {
      return ReturnProductPageModule;
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


    var _return_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./return-product-routing.module */
    "./src/app/superAdmin/return-product/return-product-routing.module.ts");
    /* harmony import */


    var _return_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./return-product.page */
    "./src/app/superAdmin/return-product/return-product.page.ts");

    var ReturnProductPageModule = function ReturnProductPageModule() {
      _classCallCheck(this, ReturnProductPageModule);
    };

    ReturnProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _return_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReturnProductPageRoutingModule"]],
      declarations: [_return_product_page__WEBPACK_IMPORTED_MODULE_6__["ReturnProductPage"]]
    })], ReturnProductPageModule);
    /***/
  },

  /***/
  "./src/app/superAdmin/return-product/return-product.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/superAdmin/return-product/return-product.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminReturnProductReturnProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vcmV0dXJuLXByb2R1Y3QvcmV0dXJuLXByb2R1Y3QucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/superAdmin/return-product/return-product.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/superAdmin/return-product/return-product.page.ts ***!
    \******************************************************************/

  /*! exports provided: ReturnProductPage */

  /***/
  function srcAppSuperAdminReturnProductReturnProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReturnProductPage", function () {
      return ReturnProductPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/order.service */
    "./src/app/services/order.service.ts");

    var ReturnProductPage = /*#__PURE__*/function () {
      function ReturnProductPage(router, OrderService, loadingController, toastService, alertController) {
        _classCallCheck(this, ReturnProductPage);

        this.router = router;
        this.OrderService = OrderService;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.alertController = alertController;
      }

      _createClass(ReturnProductPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.getGroups();
        }
      }, {
        key: "preventDefault",
        value: function preventDefault(e) {
          e.preventDefault();
        }
      }, {
        key: "getGroups",
        value: function getGroups() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    _context2.next = 7;
                    return this.OrderService.Getreturnedproduct().subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        console.log(res);
                        _this2.returnproduct = res; //  this.ngOnInit();
                      } else {
                        loading.dismiss();

                        _this2.toastService.create(res.Message, "danger");
                      }
                    }, function (err) {
                      loading.dismiss();

                      _this2.toastService.create(err, "danger");
                    });

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // async DeleteGroup(id) {
        //   const loading = await this.loadingController.create({ message: "Loading" });
        //   await loading.present();
        //   await this.OrderService.Getreturnedproduct(id).subscribe(
        //     res => {
        //       loading.dismiss();
        //         this.getGroups();
        //         this.toastService.create("Successfully deleted", "success");
        //     },
        //     err => {
        //       loading.dismiss();
        //       this.toastService.create(err, "danger");
        //     }
        //   );
        // }

      }, {
        key: "DeleteGroup",
        value: function DeleteGroup(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    _context3.next = 7;
                    return this.OrderService.DeleteProduct(id).subscribe(function (res) {
                      loading.dismiss();

                      _this3.getGroups();

                      _this3.toastService.create("Successfully deleted", "success");
                    }, function (err) {
                      loading.dismiss();

                      _this3.toastService.create(err, "danger");
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
        key: "presentAlertConfirm",
        value: function presentAlertConfirm(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Are you Sure?',
                      message: 'Do you want to Delete this Product?',
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          _this4.DeleteGroup(id);

                          console.log('Confirm Okay:');
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return ReturnProductPage;
    }();

    ReturnProductPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    ReturnProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-return-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./return-product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/return-product/return-product.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./return-product.page.scss */
      "./src/app/superAdmin/return-product/return-product.page.scss"))["default"]]
    })], ReturnProductPage);
    /***/
  }
}]);
//# sourceMappingURL=return-product-return-product-module-es5.js.map