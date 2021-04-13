function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrdersOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button  style=\"color: black\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\"  style=\"color: black\">My Orders</ion-title>\r\n    <ion-back-button   style=\"color: black\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n  </ion-toolbar>\r\n </ion-header>\r\n\r\n<ion-content padding color=\"light\" *ngFor=\"order\">\r\n  <ion-item margin-bottom no-padding lines=\"none\" *ngFor=\"let order of orders\" class=\"card\" (click)=\"open(order)\">\r\n    <ion-row align-items-center>\r\n      <ion-col size=\"2\">\r\n        <img [src]=\"order.product.image[0]\">\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-row>\r\n          <ion-text>\r\n            <h5 class=\"title\" no-margin><strong>{{order.product.name}}</strong></h5>\r\n          </ion-text>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-text>\r\n            <h6 no-margin class=\"sub\">{{order.status}}</h6>\r\n          </ion-text>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col float-right size=\"2\">\r\n        <ion-icon class=\"item-icon mycolor\" name=\"arrow-dropright\" float-right mode=\"ios\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-item>\r\n</ion-content>\r\n\r\n\r\n<ion-content class=\"ion-padding\" color=\"light\" >\r\n  <div class=\"mid\" *ngIf=\"isloggedin\" >\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n      <button class=\"circle\">\r\n        <ion-icon name=\"cart\" size=\"large\"></ion-icon>\r\n      </button>\r\n    </ion-row>\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n      <ion-text><strong>Your are not logged in </strong></ion-text>\r\n    </ion-row>\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n      <ion-button fill=\"clear\" color=\"primary\" (click)=\"browse()\">Please login and view your Order History</ion-button>\r\n    </ion-row>\r\n  </div>\r\n <div *ngIf=\"orders\">\r\n  <ion-card  *ngFor=\"let orders of orders\">\r\n    <ion-item>\r\n      <ion-text>Order ID :{{orders.id}} </ion-text>  \r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-button color=\"mycolor1\" routerLink = \"/shopowner/order/{{orders.orderStatus}}/{{orders.id}}/items\" >View Order</ion-button>\r\n      <ion-button *ngIf=\"orders.orderStatus=='0'\"  color=\"mycolor1\" (click)=\"CancelorderStatus(orders.id)\" > Cancel Order</ion-button>\r\n      <div *ngIf=\"orders.orderStatus=='1' || orders.orderStatus=='2'\">\r\n        <ion-button *ngIf=\" orders.isReceived===null || orders.isReceived==false\" style=\"font-size: 12px;\" color=\"mycolor1\" (click)=\"presentAlertConfirm(orders.id)\"> Mark as received</ion-button>\r\n    </div>\r\n    </ion-item>\r\n    <ion-card-content >\r\n       <p *ngIf=\"orders.orderStatus=='2'\" > Status: <span style=\"color: green;\"><b>Received</b></span></p>\r\n      <p *ngIf=\"orders.orderStatus=='0'\" > Status: <span style=\"color: lightcoral;\">New</span></p>\r\n      <p *ngIf=\"orders.orderStatus=='1'\" > Status: <span style=\"color: lightcoral;\">Pending</span></p>\r\n      <!-- <p *ngIf=\"\" > Status: <span sty le=\"color: lightcoral;\">Pending</span></p> -->\r\n      <p *ngIf=\"orders.orderStatus=='3'\">Status: <span style=\"color: red;\"><b>Cancelled</b></span> </p>\r\n       <p> Placement Date:  {{orders.orderPlacementDate |date:'d-M-yy, h:mm a' }} </p>\r\n       <p>Order Code  :{{orders.orderCode}} </p>\r\n       <p>Total  Amount :{{orders.totalAmmount - orders.returnDiscount }}</p>\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n</div>\r\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n  <ion-refresher-content></ion-refresher-content>\r\n</ion-refresher>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/orders/orders.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.module.ts ***!
    \*****************************************/

  /*! exports provided: OrdersPageModule */

  /***/
  function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function () {
      return OrdersPageModule;
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


    var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./orders.page */
    "./src/app/orders/orders.page.ts");
    /* harmony import */


    var _orderinfo_orderinfo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../orderinfo/orderinfo.page */
    "./src/app/orderinfo/orderinfo.page.ts");
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
      component: _orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]
    }];

    var OrdersPageModule = function OrdersPageModule() {
      _classCallCheck(this, OrdersPageModule);
    };

    OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"], _orderinfo_orderinfo_page__WEBPACK_IMPORTED_MODULE_7__["OrderinfoPage"]],
      entryComponents: [_orderinfo_orderinfo_page__WEBPACK_IMPORTED_MODULE_7__["OrderinfoPage"]]
    })], OrdersPageModule);
    /***/
  },

  /***/
  "./src/app/orders/orders.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrdersOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu {\n  color: white !important;\n}\n\n.card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.item-icon {\n  font-size: 32px;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcb3JkZXJzXFxvcmRlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5zdWJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLml0ZW0taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG4ubWlkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbn0iLCIubWVudSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDAuM3B4IHNvbGlkICNkMmQyZDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zdWIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pdGVtLWljb24ge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5taWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/orders/orders.page.ts":
  /*!***************************************!*\
    !*** ./src/app/orders/orders.page.ts ***!
    \***************************************/

  /*! exports provided: OrdersPage */

  /***/
  function srcAppOrdersOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
      return OrdersPage;
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


    var _functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../functions.service */
    "./src/app/functions.service.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _orderinfo_orderinfo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../orderinfo/orderinfo.page */
    "./src/app/orderinfo/orderinfo.page.ts");
    /* harmony import */


    var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/shared.service */
    "./src/app/services/shared.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */


    var OrdersPage = /*#__PURE__*/function () {
      function OrdersPage(menuCtrl, modalController, fun, dataService, orderservice, loadingController, toastService, route, router, storage, sharedservice, alertController) {
        _classCallCheck(this, OrdersPage);

        this.menuCtrl = menuCtrl;
        this.modalController = modalController;
        this.fun = fun;
        this.dataService = dataService;
        this.orderservice = orderservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.route = route;
        this.router = router;
        this.storage = storage;
        this.sharedservice = sharedservice;
        this.alertController = alertController;
        this.isloggedin = false; //this.orders = dataService.orders;
      }

      _createClass(OrdersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.updateSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["interval"])(120000).subscribe(function (val) {
            _this.ionViewDidEnter();
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.storage.get("IsLoggedIn").then(function (value) {
                      if (value == true) {
                        _this2.isloggedin == true;

                        _this2.GetCustomerOrder(_this2.sid);
                      }

                      console.log(value);

                      if (value == null) {
                        _this2.toastService.create("Plese login and view orders details", 'danger');
                      }
                    });

                  case 2:
                    this.menuCtrl.enable(false, 'end');
                    this.menuCtrl.enable(true, 'start');

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "open",
        value: function open(order) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _orderinfo_orderinfo_page__WEBPACK_IMPORTED_MODULE_5__["OrderinfoPage"],
                      componentProps: {
                        value: order
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "GetCustomerOrder",
        value: function GetCustomerOrder(sid) {
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
                    return this.orderservice.GetCustomerOrder(this.sharedservice.user.sid).subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        console.log(res);
                        _this3.orders = res;
                      } else {
                        loading.dismiss();

                        _this3.toastService.create(res.Message, "danger");
                      }
                    });

                  case 7:
                    (function (err) {
                      loading.dismiss();
                      console.log(err);

                      _this3.toastService.create(err, 'danger');
                    });

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm(sid) {
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
                      message: 'Do you want to mark this Order as Received?',
                      buttons: [{
                        text: 'Yes',
                        handler: function handler() {
                          _this4.MarksReceived(sid);

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
      }, {
        key: "MarksReceived",
        value: function MarksReceived(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 2:
                    loading = _context5.sent;
                    _context5.next = 5;
                    return loading.present();

                  case 5:
                    _context5.next = 7;
                    return this.orderservice.MarksReceived(id).subscribe(function (res) {
                      loading.dismiss();

                      _this5.doRefresh(event);

                      console.log(res); // this.toastService.create(res.Message, "danger");
                    });

                  case 7:
                    (function (err) {
                      loading.dismiss();
                      console.log(err);

                      _this5.toastService.create(err, 'danger');
                    });

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "browse",
        value: function browse() {
          this.router.navigateByUrl("login");
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.ngOnInit();
          this.ionViewDidEnter();
          setTimeout(function () {
            event.target.complete();
          }, 1000);
        }
      }, {
        key: "CancelorderStatus",
        value: function CancelorderStatus(sid) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertController.create({
                      header: 'Are you Sure?',
                      message: 'Do you want to cancel this Order?',
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          _this6.CancelOrder(sid, status);
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
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "CancelOrder",
        value: function CancelOrder(id, status) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 2:
                    loading = _context7.sent;
                    _context7.next = 5;
                    return loading.present();

                  case 5:
                    status = 3;
                    _context7.next = 8;
                    return this.orderservice.CancelOrder(id, status).subscribe(function (res) {
                      loading.dismiss();
                      console.warn(res);

                      _this7.toastService.create('Order Cancel request succeded');

                      _this7.router.navigate(['orders']);

                      _this7.doRefresh(event);

                      (function (err) {
                        console.log(err);
                        loading.dismiss();
                      });
                    });

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return OrdersPage;
    }();

    OrdersPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
      }, {
        type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./orders.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./orders.page.scss */
      "./src/app/orders/orders.page.scss"))["default"]]
    })], OrdersPage);
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
        var _this8;

        _classCallCheck(this, OrderService);

        _this8 = _super.call(this, http);
        _this8.http = http;
        _this8.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        _this8.API_ORDER = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "order/");
        _this8.API_EARNING = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "earning/");
        _this8.API_RETURNDISCOUNT = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "returnedproduct/");
        return _this8;
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (this.toast) {
                      this.toast.dismiss();
                    }

                    _context8.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      color: color,
                      duration: ok ? null : duration,
                      position: 'bottom'
                    });

                  case 3:
                    this.toast = _context8.sent;
                    this.toast.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
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
//# sourceMappingURL=orders-orders-module-es5.js.map