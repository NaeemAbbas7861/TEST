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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["items-item-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/order/items/item.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/order/items/item.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopOwnerOrderItemsItemPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button  style=\"color: black\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\"  style=\"color: black\">Order items</ion-title>\r\n    <ion-back-button   style=\"color: black\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n<ion-content  class=\"ion-padding\"  color=\"light\" >\r\n\r\n  <ion-card >\r\n    <div style=\"overflow-x:auto; padding-left: 5px; \" >\r\n      <table *ngIf = \"items\" >\r\n        <tr>\r\n          <td><B>product</B></td>\r\n          <td><b>price </b></td>\r\n          <td><b>Quantity</b></td>\r\n          <td><b>Total</b></td>\r\n        </tr>\r\n        <tr *ngFor= \"let item of items.orderItems\">\r\n          <td> {{item.product.title}}</td>\r\n          <td> {{item.product.price - (item.product.price/100)*item.product.discount}}</td>\r\n          <td> {{item.quantity}}</td>\r\n          <td> {{(item.product.price - (item.product.price/100)*item.product.discount) *item.quantity  }}</td>\r\n        </tr>\r\n        <tr *ngIf=\"!returnDiscount\">\r\n          <td><b>Return Product RS:</b></td>\r\n          <td *ngIf=\"items.returnDiscount > 0 \"> {{items.returnDiscount}}</td>\r\n          <td *ngIf=\"items.returnDiscount <= 0 \">0 </td>\r\n          <td><b>Shipping Amount:</b></td>\r\n          <td>{{items.deliveryCharges}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><b>Total Net Amount:</b></td>\r\n          <td>{{items.totalAmmount - items.returnDiscount + items.deliveryCharges }}</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </ion-card>\r\n  <ion-card *ngIf = \"items\">\r\n    <ion-item>\r\n      Customer Details\r\n    </ion-item>\r\n    <ion-card-content>\r\n      <p> Name: {{items.user.firstName}} {{items.user.lastName}} </p>\r\n      <p> Contact: 0{{items.user.contact_Number}}</p>\r\n      <p> email: {{items.user.email_Address}}</p>\r\n      <p> Delivery Address: {{items.delieveryAddress}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card  *ngIf=\"(type === 'pending' || type === 'complete') && items \" >\r\n    <ion-item>\r\n      Riders Details\r\n    </ion-item>\r\n    <ion-card-content>\r\n      <p> Name: {{items.rider.firstName}} {{items.rider.lastName}} </p>\r\n      <p> Contact: 0{{items.user.contact_Number}}</p>\r\n      <p> Address: {{items.rider.address}}</p>\r\n      <p> Cnic: {{items.rider.cnic}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n\r\n  <div style=\"min-height: 300px;\" >\r\n    <div   #mapElement class=\"map\" style=\"min-height: 300px;\"></div>\r\n  </div>\r\n  \r\n\r\n  <!-- <div style=\"text-align: center;\" *ngIf = \"items\">\r\n    User Details <br>\r\n  Name: {{items.user.firstName}} {{items.user.lastName}} <br>\r\n  Contact: {{items.user.contact_Number}}<br>\r\n \r\n  </div> -->\r\n \r\n\r\n\r\n  <div style=\"text-align:center;\" >\r\n    <ion-button (click)=\" CancelOrder(items.id)\" *ngIf=\"type === 'new' && items\" >Cancel Order</ion-button>\r\n  </div>\r\n  \r\n\r\n</ion-content>\r\n";
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
  "./src/app/shopOwner/order/items/item.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/shopOwner/order/items/item.module.ts ***!
    \******************************************************/

  /*! exports provided: ItemsPageModule */

  /***/
  function srcAppShopOwnerOrderItemsItemModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function () {
      return ItemsPageModule;
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


    var _item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./item.page */
    "./src/app/shopOwner/order/items/item.page.ts");

    var routes = [{
      path: '',
      component: _item_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]
    }];

    var ItemsPageModule = function ItemsPageModule() {
      _classCallCheck(this, ItemsPageModule);
    };

    ItemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_item_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]]
    })], ItemsPageModule);
    /***/
  },

  /***/
  "./src/app/shopOwner/order/items/item.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/shopOwner/order/items/item.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopOwnerOrderItemsItemPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".success {\n  color: green;\n}\n\n.fail {\n  color: red;\n}\n\n.map {\n  height: 100%;\n  width: 100%;\n}\n\n.map1 {\n  height: 200px;\n  width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcE93bmVyL29yZGVyL2l0ZW1zL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcc2hvcE93bmVyXFxvcmRlclxcaXRlbXNcXGl0ZW0ucGFnZS5zY3NzIiwic3JjL2FwcC9zaG9wT3duZXIvb3JkZXIvaXRlbXMvaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3Nob3BPd25lci9vcmRlci9pdGVtcy9pdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWNjZXNzIHtcclxuICAgIGNvbG9yOiBncmVlblxyXG59XHJcbi5mYWlsIHtcclxuICAgIGNvbG9yOnJlZFxyXG59XHJcbi5tYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5tYXAxIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgfSIsIi5zdWNjZXNzIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZmFpbCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFwMSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAzNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shopOwner/order/items/item.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/shopOwner/order/items/item.page.ts ***!
    \****************************************************/

  /*! exports provided: ItemsPage */

  /***/
  function srcAppShopOwnerOrderItemsItemPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsPage", function () {
      return ItemsPage;
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


    var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts"); //import * as moment from 'moment';


    var ItemsPage = /*#__PURE__*/function () {
      function ItemsPage(route, orderservice, loadingController, //  private events: Events,
      router, toastService) {
        _classCallCheck(this, ItemsPage);

        this.route = route;
        this.orderservice = orderservice;
        this.loadingController = loadingController;
        this.router = router;
        this.toastService = toastService;
        this.id = this.route.snapshot.paramMap.get('id');
        this.type = this.route.snapshot.paramMap.get('type'); // this.today = moment().format('YYYY-MM-DD');
      }

      _createClass(ItemsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.GetOrderItems(this.id);
        }
      }, {
        key: "GetOrderItems",
        value: function GetOrderItems(id) {
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
                    return this.orderservice.GetOrder(id).subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        _this2.Latitude = res.customerLat;
                        _this2.Longitude = res.customerLong;
                        console.log(res);
                        _this2.items = res;
                        console.warn(res);

                        _this2.loadMap();
                      } else {
                        loading.dismiss();

                        _this2.toastService.create(res.Message, "danger");
                      }
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
        key: "loadMap",
        value: function loadMap() {
          this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: {
              lat: this.Latitude,
              lng: this.Longitude
            },
            zoom: 15
          });
          this.myMarker = new google.maps.Marker({
            position: {
              lat: this.Latitude,
              lng: this.Longitude
            },
            draggable: false
          });
          this.map.setCenter(this.myMarker.position);
          this.myMarker.setMap(this.map); // google.maps.event.addListener(this.myMarker, "dragend", function(evt) {
          // this.Latitude = evt.latLng.lat().toFixed(3);
          // this.Longitude = evt.latLng.lng().toFixed(3);
          // }); 
        }
      }, {
        key: "CancelOrder",
        value: function CancelOrder(id, status) {
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
                    status = 3;
                    _context3.next = 8;
                    return this.orderservice.CancelOrder(id, status).subscribe(function (res) {
                      loading.dismiss();
                      _this3.items = res;
                      console.warn(res);

                      _this3.toastService.create('Order Cancel request succeded');

                      _this3.router.navigate(['shopowner/order/new']);

                      (function (err) {
                        console.log(err);
                        loading.dismiss();
                      });
                    });

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ItemsPage;
    }();

    ItemsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", {
      "static": true
    })], ItemsPage.prototype, "mapElement", void 0);
    ItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myshops',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/order/items/item.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item.page.scss */
      "./src/app/shopOwner/order/items/item.page.scss"))["default"]]
    })], ItemsPage);
    /***/
  }
}]);
//# sourceMappingURL=items-item-module-es5.js.map