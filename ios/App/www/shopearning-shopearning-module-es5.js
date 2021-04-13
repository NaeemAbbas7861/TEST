function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopearning-shopearning-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/shopearning/shopearning.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/shopearning/shopearning.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminShopearningShopearningPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-back-button color=\"dark\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n    <ion-title color=\"dark\" class=\"ion-text-center\">Shop Earning</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" *ngIf=\"RoleName=='SuperAdmin' && earning \" >\r\n  <ion-item>\r\n    <ion-datetime displayFormat=\"MM, YYYY\" [min]=\"minDate\" [max]=\"maxDate\" [(ngModel)]=\"selectDateString\">\r\n    </ion-datetime>\r\n    <!-- <ion-button  slot=\"end\"  (click)=\"GetShopEarning(id,selectDateString)\" color=\"light\"  style=\" width: 50px; height: 30px; font-size: 14px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: bold; border-color: black;\"><ion-text color=\"mycolor1\" style=\"border-top-color: black;\">Search</ion-text></ion-button>    -->\r\n    <!-- <ion-button slot=\"end\" expand=\"round\" color=\"white\" style=\"border-radius: 1px;border-color: black;\"><ion-text color=\"dark\" style=\"font-size: 16px; font-family: Georgia, 'Times New Roman', Times, serif;\">Search</ion-text></ion-button> -->\r\n    <ion-button slot=\"end\" (click)=\"GetShopEarning(id,selectDateString)\" color=\"white\">\r\n      <ion-icon name=\"search-outline\" (click)=\"GetShopEarning(id,selectDateString)\" color=\"dark\"></ion-icon>\r\n    </ion-button>\r\n\r\n  </ion-item>\r\n  <ion-card>\r\n    <ion-card-content  style=\"color: black;\">\r\n      <p>Total Order Place: {{earning.totalOrders}}</p>\r\n      <p>Total Amount: {{earning.totalAmount}}</p>\r\n      <p>Shop Owner Amount: {{earning.shopAmount}}</p>\r\n      <p>Company Amount: {{earning.companyAmount}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card *ngIf=\"orders\">\r\n    <ion-item>Payment Detail</ion-item>\r\n    <ion-card-content style=\"color: black;\">\r\n      <p>Account Type: {{accountdetails.shop.accountType}}</p>\r\n      <p *ngIf=\"accountdetails.shop.accountType== 'Bank'\"> Bank Name: {{accountdetails.shop.bankName}}</p>\r\n      <p>Account Number: {{accountdetails.shop.accountNumber}}</p>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div style=\"overflow-x:auto; padding-left: 5px;\" >\r\n    <table style=\"border: black; border-radius: 2px;\">\r\n      <tr>\r\n        <th> Order id</th>\r\n        <th> Order Date</th>\r\n       <th> Order Amount</th>\r\n        <th> Payment Status</th>\r\n        <th>Payment (Action)</th>\r\n      </tr>\r\n      <tr *ngFor=\"let orders of earning.orders\">\r\n        <td >{{orders.id}}</td>\r\n        <td>{{orders.orderPlacementDate | date}} </td>\r\n        <td>{{orders.totalAmmount}}</td>\r\n        <td *ngIf=\"orders.paymentStatus=='1' \">Pending</td>\r\n        <td *ngIf=\"orders.paymentStatus=='2'\">Received From Customer</td>\r\n        <td *ngIf=\"orders.paymentStatus=='3'\">Delievered to Shop Owner</td>\r\n        <td *ngIf=\"orders.paymentStatus=='1' || orders.paymentStatus=='2'\" ><ion-icon style=\"padding-left: 5px;\" size=\"large\" name=\"cash-outline\" (click)=\"ChangePaymentStatus(orders.id,orders.paymentStatus)\" color=\"success\"></ion-icon></td>\r\n        <td *ngIf=\"orders.paymentStatus=='3'\">No Action</td>\r\n     \r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n</ion-content>\r\n\r\n<ion-content class=\"ion-padding\" *ngIf=\"earning && RoleName=='ShopOwner'\" >\r\n  <ion-item>\r\n    <ion-datetime displayFormat=\"MM, YYYY\" [min]=\"minDate\" [max]=\"maxDate\" [(ngModel)]=\"selectDateString\">\r\n    </ion-datetime>\r\n    <ion-button slot=\"end\" (click)=\"GetShopEarning(id,selectDateString)\" color=\"white\">\r\n    <ion-icon name=\"search-outline\" (click)=\"GetShopEarning(id,selectDateString)\" color=\"dark\"></ion-icon>\r\n    </ion-button>\r\n\r\n  </ion-item>\r\n  <ion-card>\r\n    <ion-card-content style=\"color: black;\">\r\n      <p>Total Order Place: {{earning.totalOrders}}</p>\r\n      <p>Total Amount: {{earning.totalAmount}}</p>\r\n      <p>Shop Owner Amount: {{earning.shopAmount}}</p>\r\n      </ion-card-content>\r\n  </ion-card>\r\n  <ion-card *ngIf=\"orders\">\r\n    <ion-item style=\"color: black;\">Payment Detail</ion-item>\r\n    <ion-card-content style=\"color: black;\">\r\n      <p>Account Type: {{accountdetails.shop.accountType}}</p>\r\n      <p *ngIf=\"accountdetails.shop.accountType== 'Bank'\"> Bank Name: {{accountdetails.shop.bankName}}</p>\r\n      <p>Account Number: {{accountdetails.shop.accountNumber}}</p>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div style=\"overflow-x:auto; padding-left: 5px; \" >\r\n    <table style=\"color: black; \">\r\n      <tr>\r\n        <th> Order id</th>\r\n        <th> Order Date</th>\r\n        <th> Order Amount</th>\r\n        <th> Panelty </th>\r\n        <th> Payment Status</th>\r\n        <th>Payment (Action)</th>\r\n      </tr>\r\n      <tr *ngFor=\"let orders of earning.orders\">\r\n        <td>{{orders.id}}</td>\r\n        <td>{{orders.orderPlacementDate | date}} </td>\r\n        <td>{{orders.totalAmmount}}</td>\r\n        <td>{{orders.penalty}}</td>\r\n        <td *ngIf=\"orders.paymentStatus=='3'\">Received</td>\r\n        <td *ngIf=\"orders.paymentStatus=='1' || orders.paymentStatus=='2'\">Not Received</td> \r\n        <td *ngIf=\"orders.paymentStatus=='1' || orders.paymentStatus=='2'\" style=\"color: lightcoral;\">Pending</td>\r\n        <td *ngIf=\"orders.paymentStatus=='3'\" style=\"color: green;\">Payment sent</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/superAdmin/shopearning/shopearning.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/superAdmin/shopearning/shopearning.module.ts ***!
    \**************************************************************/

  /*! exports provided: ShopEarningPageModule */

  /***/
  function srcAppSuperAdminShopearningShopearningModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopEarningPageModule", function () {
      return ShopEarningPageModule;
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


    var _shopearning_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shopearning.page */
    "./src/app/superAdmin/shopearning/shopearning.page.ts");
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
      component: _shopearning_page__WEBPACK_IMPORTED_MODULE_6__["ShopEarningPage"]
    }];

    var ShopEarningPageModule = function ShopEarningPageModule() {
      _classCallCheck(this, ShopEarningPageModule);
    };

    ShopEarningPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_shopearning_page__WEBPACK_IMPORTED_MODULE_6__["ShopEarningPage"]]
    })], ShopEarningPageModule);
    /***/
  },

  /***/
  "./src/app/superAdmin/shopearning/shopearning.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/superAdmin/shopearning/shopearning.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminShopearningShopearningPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n  margin: 5px;\n}\n\n.btn {\n  margin: 3px;\n  padding: 5px;\n  border: 0.5px solid #b4b4b4;\n  border-radius: 6px;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  font-size: 12px;\n  padding-right: 3px;\n}\n\n.view {\n  color: var(--ion-color-mytheme);\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 1px;\n  background-color: #d2d2d2;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 120px;\n  max-width: 120px;\n  display: inline;\n  padding: 3px 9px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 100px;\n  max-height: 100px;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi9zaG9wZWFybmluZy9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHN1cGVyQWRtaW5cXHNob3BlYXJuaW5nXFxzaG9wZWFybmluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1cGVyQWRtaW4vc2hvcGVhcm5pbmcvc2hvcGVhcm5pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ01KOztBREpBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDT0o7O0FETEE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvc3VwZXJBZG1pbi9zaG9wZWFybmluZy9zaG9wZWFybmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogLjVweCBzb2xpZCByZ2IoMTgwLCAxODAsIDE4MCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuLmZpbHRlci1idG4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbn1cclxuLnZpZXcge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uc2VwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbn1cclxuLmNvbnRhaW5lci1vdXRlciB7IFxyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuLmNvbnRhaW5lci1pbm5lciB7IFxyXG4gICAgbWluLXdpZHRoOiAxMjBweDsgXHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcGFkZGluZzogM3B4IDlweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5zcG9uLWltZyB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbn1cclxuIiwiLnNlYXJjaC1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogM3B4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2I0YjRiNDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uZmlsdGVyLWJ0biB7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cblxuLnZpZXcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zZXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDI7XG59XG5cbi5jb250YWluZXItb3V0ZXIge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZzogM3B4IDlweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5zcG9uLWltZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/superAdmin/shopearning/shopearning.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/superAdmin/shopearning/shopearning.page.ts ***!
    \************************************************************/

  /*! exports provided: ShopEarningPage */

  /***/
  function srcAppSuperAdminShopearningShopearningPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopEarningPage", function () {
      return ShopEarningPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */


    var ShopEarningPage = /*#__PURE__*/function () {
      function ShopEarningPage(menuCtrl, nav, platform, loadingController, toastService, orderservice, storage, route, alertController) {
        var _this = this;

        _classCallCheck(this, ShopEarningPage);

        this.menuCtrl = menuCtrl;
        this.nav = nav;
        this.platform = platform;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.orderservice = orderservice;
        this.storage = storage;
        this.route = route;
        this.alertController = alertController;
        this.selectDateString = new Date().toISOString();
        this.minDate = new Date().toISOString();
        this.maxDate = new Date().toISOString();
        this.id = this.route.snapshot.paramMap.get('id');
        this.platform.ready().then(function () {
          var date = new Date();
          date.setDate(date.getDate() - 731);
          _this.minDate = date.toISOString();
          date.setDate(1);
          date = new Date();
          date.setDate(date.getDate() + 0);
          _this.maxDate = date.toISOString();
          date.setDate(1);
        });
      }

      _createClass(ShopEarningPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.storage.get("User").then(function (value) {
            _this2.RoleName = value.RoleName;
            console.log(_this2.RoleName);
          });
          this.date = new Date();
          this.date.setDate(1);
          this.date = moment__WEBPACK_IMPORTED_MODULE_1__(this.date, "DD-MM-YYYY").format("YYYY-MM-DD");
          this.GetShopEarning(this.id, this.date);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {//this.GetShopEarning(this.id,this.date)
        }
      }, {
        key: "DateChanger",
        value: function DateChanger() {
          this.date = moment__WEBPACK_IMPORTED_MODULE_1__(this.date, "DD-MM-YYYY").format("YYYY-MM-DD");
          console.log(this.date);
        }
      }, {
        key: "GetShopEarning",
        value: function GetShopEarning(id, date) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    date = moment__WEBPACK_IMPORTED_MODULE_1__(date, "YYYY-MM-01").format("YYYY-MM-01");
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
                    return this.orderservice.GetShopEarning(id, date).subscribe(function (res) {
                      loading.dismiss();
                      _this3.earning = res;

                      if (_this3.earning.orders.length > 0) {
                        _this3.orders = res.orders;
                      }

                      _this3.accountdetails = res.orders[0];

                      (function (err) {
                        console.log(err);
                        loading.dismiss();
                      });
                    });

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.ionViewWillEnter();
          setTimeout(function () {
            event.target.complete();
          }, 1000);
        }
      }, {
        key: "ChangePaymentStatus",
        value: function ChangePaymentStatus(id, status, panelty) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var loading, alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(status == '1')) {
                      _context3.next = 12;
                      break;
                    }

                    panelty = 0;
                    status = 2;
                    _context3.next = 5;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 5:
                    loading = _context3.sent;
                    _context3.next = 8;
                    return loading.present();

                  case 8:
                    _context3.next = 10;
                    return this.orderservice.ChangePaymentStatus(id, status, panelty).subscribe(function (res) {
                      console.log(res); // console.log(id,status, panelty);

                      _this4.doRefresh(event);

                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 10:
                    _context3.next = 18;
                    break;

                  case 12:
                    if (!(status == '2')) {
                      _context3.next = 18;
                      break;
                    }

                    _context3.next = 15;
                    return this.alertController.create({
                      header: 'Add Panelty',
                      inputs: [{
                        name: 'Panelty1',
                        placeholder: 'Amount'
                      }],
                      buttons: [{
                        text: 'Ok',
                        handler: function handler(alertData) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var _this5 = this;

                            var loading;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    status = 3;

                                    if (alertData.Panelty1.length == 0) {
                                      alertData.Panelty1 = 0;
                                    }

                                    _context2.next = 4;
                                    return this.loadingController.create({
                                      message: "Loading"
                                    });

                                  case 4:
                                    loading = _context2.sent;
                                    _context2.next = 7;
                                    return loading.present();

                                  case 7:
                                    _context2.next = 9;
                                    return this.orderservice.ChangePaymentStatus(id, status, alertData.Panelty1).subscribe(function (res) {
                                      console.log(res);
                                      loading.dismiss();
                                      console.log(id, status, name);

                                      _this5.doRefresh(event);
                                    }, function (err) {
                                      console.log(err);

                                      _this5.toastService.create("Invalid Number", 'danger');

                                      loading.dismiss();
                                    });

                                  case 9:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
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

                  case 15:
                    alert = _context3.sent;
                    _context3.next = 18;
                    return alert.present();

                  case 18:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ShopEarningPage;
    }();

    ShopEarningPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }, {
        type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    ShopEarningPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-search',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shopearning.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/shopearning/shopearning.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shopearning.page.scss */
      "./src/app/superAdmin/shopearning/shopearning.page.scss"))["default"]]
    })], ShopEarningPage);
    /***/
  }
}]);
//# sourceMappingURL=shopearning-shopearning-module-es5.js.map