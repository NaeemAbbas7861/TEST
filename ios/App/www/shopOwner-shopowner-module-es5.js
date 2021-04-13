function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopOwner-shopowner-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/dashboard.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/dashboard.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopOwnerDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\"   style=\"color: black\">Dashboard</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content fullscreen  *ngIf=\"data\">\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-img src=\"/assets/shapes.svg\"></ion-img>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\r\n      <ion-card-title>Welcome to ShopOwner Dashboard</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <p>Your Profile has been created</p>\r\n    </ion-card-content>\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col size-md=\"6\" size-xs=\"12\"  (click)=\" Onclick()\" >\r\n            <ion-card class=\"card-pink\" >\r\n              <ion-card-header>\r\n                <ion-icon  name=\"create-outline\" style=\"margin-left: 40%; color: white;\" size=\"large\"></ion-icon><br>\r\n                <ion-card-title style=\"color: white; text-align: center;\" > Add new Shop</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n          \r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-1\" (click)=\" Onclick1()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{data.activeShops}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Active Shops</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-2\" (click)=\" Onclick1()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{data.deactiveShops}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Deactive Shops</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-3\"(click)=\" Onclick3()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{data.products}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Products</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-4\"  (click)=\"OrdersClick()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{data.newOrders}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Ner Orders</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  </ion-card>\r\n</ion-content>";
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
  "./src/app/shopOwner/shopowner-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shopOwner/shopowner-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ShopOwnerRoutingModule */

  /***/
  function srcAppShopOwnerShopownerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopOwnerRoutingModule", function () {
      return ShopOwnerRoutingModule;
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


    var _shopowner_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shopowner.page */
    "./src/app/shopOwner/shopowner.page.ts");

    var routes = [{
      path: 'dashboard',
      component: _shopowner_page__WEBPACK_IMPORTED_MODULE_3__["ShopOwnerPage"]
    }, //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#ShopOwnerDashBoardPage'
    }, {
      path: 'order/:type',
      loadChildren: './order/order.module#OwnerOrderPageModule'
    }, {
      path: 'order/:new',
      loadChildren: './order/order.module#OwnerOrderPageModule'
    }, {
      path: 'order/:update',
      loadChildren: './order/order.module#OwnerOrderPageModule'
    }, {
      path: 'order/:cancel',
      loadChildren: './order/order.module#OwnerOrderPageModule'
    }, {
      path: 'shops',
      loadChildren: './shop/ownershop.module#OwnerShopPageModule'
    }, {
      path: 'list-of-product',
      loadChildren: './list-of-product/list-of-product.module#ListOfProductPageModule'
    }];

    var ShopOwnerRoutingModule = function ShopOwnerRoutingModule() {
      _classCallCheck(this, ShopOwnerRoutingModule);
    };

    ShopOwnerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ShopOwnerRoutingModule);
    /***/
  },

  /***/
  "./src/app/shopOwner/shopowner.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/shopOwner/shopowner.module.ts ***!
    \***********************************************/

  /*! exports provided: ShopOwnerPageModule */

  /***/
  function srcAppShopOwnerShopownerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopOwnerPageModule", function () {
      return ShopOwnerPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shopowner_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shopowner.page */
    "./src/app/shopOwner/shopowner.page.ts");
    /* harmony import */


    var _shopowner_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shopowner-routing.module */
    "./src/app/shopOwner/shopowner-routing.module.ts");

    var ShopOwnerPageModule = function ShopOwnerPageModule() {
      _classCallCheck(this, ShopOwnerPageModule);
    };

    ShopOwnerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _shopowner_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopOwnerRoutingModule"]],
      declarations: [_shopowner_page__WEBPACK_IMPORTED_MODULE_4__["ShopOwnerPage"]]
    })], ShopOwnerPageModule);
    /***/
  },

  /***/
  "./src/app/shopOwner/shopowner.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/shopOwner/shopowner.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopOwnerShopownerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "page-home .logouticon {\n  margin-left: 9px;\n}\npage-home .headerImg {\n  position: relative;\n  left: 35%;\n  padding-bottom: 11%;\n}\npage-home .toolbar-background-md {\n  border-color: #00000008;\n  background: #00000008;\n}\npage-home .item-md {\n  border-radius: 13px;\n  border: solid 1px #70707040;\n  padding-left: 16px;\n  padding-right: 0;\n  position: relative;\n  font-size: 1.6rem;\n  font-weight: normal;\n  text-transform: none;\n  color: #000;\n  background-color: #fff;\n  box-shadow: #a6bad33d 2px 3px 13px;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\npage-home .bar-button-default-md, page-home .bar-button-clear-md-default, page-home .bar-button-md-default {\n  color: #2a80b9;\n  background-color: transparent;\n}\npage-home ion-input {\n  padding-left: 22px;\n  position: static;\n}\npage-home .col {\n  padding: 1px;\n}\npage-home .welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\npage-home .largeIcon {\n  justify-content: center;\n}\npage-home .mygrid {\n  padding-top: 35px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n}\npage-home .myrow {\n  padding-left: 18px;\n  padding-right: 55px;\n}\npage-home .myBTNs {\n  background: #8E44AD;\n  color: white;\n  margin: 1%;\n  border-radius: 6px;\n  box-shadow: #a6bad37d 5px 6px 17px;\n}\npage-home .largeIcon {\n  padding-top: 8%;\n  padding-left: 12px;\n  font-size: 25px;\n}\npage-home .myHeader {\n  position: relative;\n  position: relative;\n  margin-top: 7px;\n  font-size: 17px;\n  font-weight: bold;\n  margin-bottom: 20px;\n  margin-left: 12px;\n  padding-bottom: 22%;\n  padding-top: 6px;\n}\npage-home .textalign {\n  text-align: end;\n}\npage-home .myBTNs1 {\n  background: #FD79A8;\n  color: white;\n  position: relative;\n  left: 35px;\n  margin: 2px;\n  border-radius: 6px;\n  box-shadow: #a6bad37d 5px 6px 17px;\n}\npage-home .myDiv {\n  background: #00000008;\n  margin-bottom: 31px;\n}\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/* Set the color on all ion-button elements */\n.card-pink {\n  background-color: #e9b006;\n  --color: white;\n}\n.card-pink-1 {\n  background-color: #17a2b8;\n  --color: white;\n}\n.card-pink-2 {\n  background-color: #f76371;\n  --color: white;\n}\n.card-pink-3 {\n  background-color: #7a8188;\n  --color: white;\n}\n.card-pink-4 {\n  background-color: #6f42c1;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcE93bmVyL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcc2hvcE93bmVyXFxzaG9wb3duZXIucGFnZS5zY3NzIiwic3JjL2FwcC9zaG9wT3duZXIvc2hvcG93bmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGdCQUFBO0FDRFI7QURJSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDRlI7QURNSTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7QUNKUjtBRFFJO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUVBLGtDQUFBO0VBRUEsK0RBQUE7QUNOUjtBRFNJO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0FDUFI7QURXSztFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7QUNUUjtBRFlJO0VBQ0ksWUFBQTtBQ1ZSO0FEYUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDWFI7QURhTTtFQUNJLHVCQUFBO0FDWFY7QURlSTtFQUVJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDZFI7QURrQkk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDaEJSO0FEb0JJO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBRUEsa0NBQUE7QUNuQlI7QURzQkk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDcEJSO0FEdUJJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3JCUjtBRHdCSTtFQUNJLGVBQUE7QUN0QlI7QUQ0Qkk7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQ0FBQTtBQzFCUjtBRCtCSTtFQUNJLHFCQUFBO0VBRUEsbUJBQUE7QUM5QlI7QURrQ0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDL0JSO0FEa0NNLDZDQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUMvQlI7QURpQ007RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUM5QlI7QURpQ007RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUM5QlI7QURnQ007RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUM3QlI7QUQrQk07RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUM1QlIiLCJmaWxlIjoic3JjL2FwcC9zaG9wT3duZXIvc2hvcG93bmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtaG9tZSB7XHJcblxyXG4gICAgLmxvZ291dGljb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlYWRlckltZ3tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMzUlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMSU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLnRvb2xiYXItYmFja2dyb3VuZC1tZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAgIzAwMDAwMDA4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICAjMDAwMDAwMDg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLml0ZW0tbWQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzcwNzA3MDQwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICNhNmJhZDMzZCAycHggM3B4IDEzcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmFyLWJ1dHRvbi1kZWZhdWx0LW1kLCAuYmFyLWJ1dHRvbi1jbGVhci1tZC1kZWZhdWx0LCAuYmFyLWJ1dHRvbi1tZC1kZWZhdWx0IHtcclxuICAgICAgICBjb2xvcjogIzJhODBiOTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbCB7XHJcbiAgICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuICAgICAgLmxhcmdlSWNvbntcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLm15Z3JpZHtcclxuICAgIFxyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5teXJvd3tcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNTVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAubXlCVE5ze1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4RTQ0QUQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbjogMSU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogI2E2YmFkMzNkIDJweCAzcHggMTNweDtcclxuICAgICAgICBib3gtc2hhZG93OiAjYTZiYWQzN2QgNXB4IDZweCAxN3B4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubGFyZ2VJY29ue1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4JTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubXlIZWFkZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIyJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnRleHRhbGlnbntcclxuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgLm15QlROczF7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZENzlBODtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDM1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogI2E2YmFkMzNkIDJweCAzcHggMTNweDtcclxuICAgICAgICBib3gtc2hhZG93OiAjYTZiYWQzN2QgNXB4IDZweCAxN3B4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLm15RGl2e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzAwMDAwMDA4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMxcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIC53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKiBTZXQgdGhlIGNvbG9yIG9uIGFsbCBpb24tYnV0dG9uIGVsZW1lbnRzICovXHJcbiAgICAgIC5jYXJkLXBpbmsge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWIwMDY7XHJcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtcGluay0xIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY2FyZC1waW5rLTIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzYzNzE7XHJcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtcGluay0zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E4MTg4O1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkLXBpbmstNCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZmNDJjMTtcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAiLCJwYWdlLWhvbWUgLmxvZ291dGljb24ge1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxucGFnZS1ob21lIC5oZWFkZXJJbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDM1JTtcbiAgcGFkZGluZy1ib3R0b206IDExJTtcbn1cbnBhZ2UtaG9tZSAudG9vbGJhci1iYWNrZ3JvdW5kLW1kIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwMDg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwODtcbn1cbnBhZ2UtaG9tZSAuaXRlbS1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICM3MDcwNzA0MDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogI2E2YmFkMzNkIDJweCAzcHggMTNweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cbnBhZ2UtaG9tZSAuYmFyLWJ1dHRvbi1kZWZhdWx0LW1kLCBwYWdlLWhvbWUgLmJhci1idXR0b24tY2xlYXItbWQtZGVmYXVsdCwgcGFnZS1ob21lIC5iYXItYnV0dG9uLW1kLWRlZmF1bHQge1xuICBjb2xvcjogIzJhODBiOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5wYWdlLWhvbWUgaW9uLWlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxucGFnZS1ob21lIC5jb2wge1xuICBwYWRkaW5nOiAxcHg7XG59XG5wYWdlLWhvbWUgLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbnBhZ2UtaG9tZSAubGFyZ2VJY29uIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5wYWdlLWhvbWUgLm15Z3JpZCB7XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxucGFnZS1ob21lIC5teXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgcGFkZGluZy1yaWdodDogNTVweDtcbn1cbnBhZ2UtaG9tZSAubXlCVE5zIHtcbiAgYmFja2dyb3VuZDogIzhFNDRBRDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDElO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogI2E2YmFkMzNkIDJweCAzcHggMTNweDtcbiAgYm94LXNoYWRvdzogI2E2YmFkMzdkIDVweCA2cHggMTdweDtcbn1cbnBhZ2UtaG9tZSAubGFyZ2VJY29uIHtcbiAgcGFkZGluZy10b3A6IDglO1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbnBhZ2UtaG9tZSAubXlIZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDIyJTtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cbnBhZ2UtaG9tZSAudGV4dGFsaWduIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxucGFnZS1ob21lIC5teUJUTnMxIHtcbiAgYmFja2dyb3VuZDogI0ZENzlBODtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDM1cHg7XG4gIG1hcmdpbjogMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogI2E2YmFkMzNkIDJweCAzcHggMTNweDtcbiAgYm94LXNoYWRvdzogI2E2YmFkMzdkIDVweCA2cHggMTdweDtcbn1cbnBhZ2UtaG9tZSAubXlEaXYge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDg7XG4gIG1hcmdpbi1ib3R0b206IDMxcHg7XG59XG5cbi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIFNldCB0aGUgY29sb3Igb24gYWxsIGlvbi1idXR0b24gZWxlbWVudHMgKi9cbi5jYXJkLXBpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTliMDA2O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQtcGluay0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLXBpbmstMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNzYzNzE7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZC1waW5rLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E4MTg4O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQtcGluay00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmNDJjMTtcbiAgLS1jb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shopOwner/shopowner.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/shopOwner/shopowner.page.ts ***!
    \*********************************************/

  /*! exports provided: ShopOwnerPage */

  /***/
  function srcAppShopOwnerShopownerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopOwnerPage", function () {
      return ShopOwnerPage;
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


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/shared.service */
    "./src/app/services/shared.service.ts");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ShopOwnerPage = /*#__PURE__*/function () {
      function ShopOwnerPage(sharedservice, loginservice, toastService, loadingController, router) {
        _classCallCheck(this, ShopOwnerPage);

        this.sharedservice = sharedservice;
        this.loginservice = loginservice;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.router = router;
      }

      _createClass(ShopOwnerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {//this.GetShopOwnerData(this.sharedservice.user.sid);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.GetShopOwnerData(this.sharedservice.user.sid);
        }
      }, {
        key: "GetShopOwnerData",
        value: function GetShopOwnerData(id) {
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
                    return this.loginservice.GetShopOwnerData(id).subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        loading.dismiss();
                        console.log(res);
                        _this.data = res;
                      } else {
                        loading.dismiss();

                        _this.toastService.create(res.Message, "danger");
                      }
                    }, function (err) {
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
        key: "Onclick",
        value: function Onclick() {
          this.router.navigateByUrl('shopowner/shops/add');
        }
      }, {
        key: "OrdersClick",
        value: function OrdersClick() {
          this.router.navigateByUrl('shopowner/order/new');
        }
      }, {
        key: "Onclick1",
        value: function Onclick1() {
          this.router.navigateByUrl('shopowner/shops');
        }
      }, {
        key: "Onclick3",
        value: function Onclick3() {
          this.router.navigateByUrl('shopowner/list-of-product');
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.ionViewDidEnter();
          this.ngOnInit();
          setTimeout(function () {
            event.target.complete();
          }, 1000);
        }
      }]);

      return ShopOwnerPage;
    }();

    ShopOwnerPage.ctorParameters = function () {
      return [{
        type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    ShopOwnerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-superadmin",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/dashboard.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shopowner.page.scss */
      "./src/app/shopOwner/shopowner.page.scss"))["default"]]
    })], ShopOwnerPage);
    /***/
  }
}]);
//# sourceMappingURL=shopOwner-shopowner-module-es5.js.map