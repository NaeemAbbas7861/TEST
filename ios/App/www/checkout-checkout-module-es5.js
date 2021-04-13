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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckoutCheckoutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"dark\" defaultHref=\"/\" slot=\"start\"> </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: black; \" class=\"ion-text-center\">Billing</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" >\r\n        <ion-back-button text=\"\" color=\"light\" icon=\"chevron-back-outline\"></ion-back-button>\r\n      </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" color=\"light\">\r\n  <!-- <ion-row>\r\n    <ion-list-header color=\"mycolor1\">\r\n      <ion-label class=\"input1 ion-padding-horizontal\">Please Select Map for Delivery Spot</ion-label>\r\n    </ion-list-header>\r\n  </ion-row> -->\r\n\r\n  <ion-row>\r\n    <ion-label class=\"ion-text-justify\" style=\"padding-left: 10px; padding-right: 10px; padding-bottom: 15px; \"><strong>Note: </strong>Drag marker on map to select\r\n      the address or type in searchbox above to look for your address</ion-label>\r\n  </ion-row>\r\n\r\n  <ion-item style=\"min-height: 280px;\">\r\n    <div #mapElement class=\"map\" style=\"min-height: 300px; width: 100%;\"></div>\r\n  </ion-item>\r\n\r\n  <ion-grid>\r\n    <form [formGroup]=\"fg\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-input type=\"text\" placeholder=\"Delivery Address\" disabled value=\"DelieveryAddress\"\r\n            formControlName=\"DelieveryAddress\" class=\"input ion-padding-horizontal\"></ion-input>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.DelieveryAddress\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('DelieveryAddress').hasError(validation.type) && (fg.get('DelieveryAddress').dirty || fg.get('DelieveryAddress').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <!-- <ion-row >\r\n          <ion-select (ngModelChange)=\"onChange($event)\" [(ngModel)]=\"classification\" [ngModelOptions]=\"{standalone: true}\"  class=\"input ion-clearInput ion-padding-horizontal\">\r\n            <ion-select-option  value=\"2\">Shop Owner</ion-select-option>\r\n            <ion-select-option  value=\"3\">Customer </ion-select-option>\r\n            <ion-select-option  value=\"4\">Rider</ion-select-option>\r\n          </ion-select>\r\n        </ion-row>\r\n         -->\r\n\r\n      <!-- <ion-row>\r\n          <ion-col>\r\n              <ion-list >\r\n                <ion-radio-group formControlName=\"IsSelfPick\" (ionChange)=\"printvalue()\">\r\n              <ion-list-header color=\"mytheme\">\r\n                <ion-label>Select Delivery Method</ion-label>\r\n              </ion-list-header>\r\n  \r\n              <ion-item>\r\n                <ion-label>Home Delivery</ion-label>\r\n                <ion-radio checked=\"selfpick\" slot=\"start\" value=\"false\"></ion-radio>\r\n              </ion-item>\r\n  \r\n              <ion-item>\r\n                <ion-label>Pick by Your Self</ion-label>\r\n                <ion-radio slot=\"start\" value=\"true\"></ion-radio>\r\n              </ion-item>\r\n            \r\n            </ion-radio-group>\r\n          </ion-list>\r\n          </ion-col>\r\n        </ion-row> -->\r\n      <!-- <ion-row *ngIf=\"selfpick\">\r\n        <ion-col>\r\n          <ion-input type=\"text\" placeholder=\"Rider Name\" formControlName=\"RiderName\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n        </ion-col>\r\n      </ion-row> -->\r\n      <!-- <ion-row *ngIf=\"selfpick\">\r\n        <ion-col>\r\n          <ion-input type=\"text\" placeholder=\"Rider Contact No.\" formControlName=\"RiderContactNo\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-input type=\"text\" placeholder=\"Rider Vehicle No.\" formControlName=\"RiderVehicleNo\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n        </ion-col>\r\n      </ion-row> -->\r\n\r\n      <!-- <ion-row>\r\n        <ion-col>\r\n          <ion-input type=\"text\" placeholder=\"Instructions\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n        </ion-col>\r\n      </ion-row> -->\r\n      <ion-list>\r\n        <ion-radio-group formControlName=\"PayMentMethod\">\r\n          <ion-list-header color=\"mycolor1\">\r\n            <ion-label class=\"input1 ion-padding-horizontal\">Select payment method</ion-label>\r\n          </ion-list-header>\r\n          <ion-item class=\"input ion-padding-horizontal\">\r\n            <ion-radio slot=\"start\" value=\"1\" size=\"large\" color=\"mycolor1\" checked></ion-radio>\r\n            <ion-label>\r\n              Jazzcash\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item class=\"input ion-padding-horizontal\">\r\n            <ion-radio slot=\"start\" value=\"2\" size=\"large\" color=\"mycolor1\"></ion-radio>\r\n            <ion-label>\r\n              EasyPaisa\r\n            </ion-label>\r\n          </ion-item>\r\n          <!-- <ion-item>\r\n            <ion-label>\r\n              Jazz Cash\r\n            </ion-label>\r\n    \r\n            <ion-radio slot=\"start\" value=\"0\" checked></ion-radio>\r\n          </ion-item> -->\r\n        </ion-radio-group>\r\n      </ion-list>\r\n    </form>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-header> \r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar [value]=\"selectedPlace\" [(ngModel)]=\"autocomplete.input\" (ionInput)=\"updateSearchResults()\"\r\n      placeholder=\"Search for a place\">\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-list [hidden]=\"autocompleteItems.length == 0\">\r\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\r\n      {{ item.description }}\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-header>\r\n\r\n<ion-footer (click)=\"done()\">\r\n  <ion-toolbar color=\"mycolor1\">\r\n    <ion-title class=\"ion-text-center\" [disabled]=\"!fg.valid\">Done</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/_models/order.ts":
  /*!**********************************!*\
    !*** ./src/app/_models/order.ts ***!
    \**********************************/

  /*! exports provided: Order */

  /***/
  function srcApp_modelsOrderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Order", function () {
      return Order;
    });

    var Order = function Order() {
      _classCallCheck(this, Order);
    };
    /***/

  },

  /***/
  "./src/app/_models/orderitem.ts":
  /*!**************************************!*\
    !*** ./src/app/_models/orderitem.ts ***!
    \**************************************/

  /*! exports provided: OrderItem */

  /***/
  function srcApp_modelsOrderitemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderItem", function () {
      return OrderItem;
    });

    var OrderItem = function OrderItem() {
      _classCallCheck(this, OrderItem);
    };
    /***/

  },

  /***/
  "./src/app/checkout/checkout.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/checkout/checkout.module.ts ***!
    \*********************************************/

  /*! exports provided: CheckoutPageModule */

  /***/
  function srcAppCheckoutCheckoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
      return CheckoutPageModule;
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


    var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./checkout.page */
    "./src/app/checkout/checkout.page.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/file-chooser/ngx */
    "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
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
      component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }];

    var CheckoutPageModule = function CheckoutPageModule() {
      _classCallCheck(this, CheckoutPageModule);
    };

    CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]],
      providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__["FileChooser"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"]],
      entryComponents: []
    })], CheckoutPageModule);
    /***/
  },

  /***/
  "./src/app/checkout/checkout.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/checkout/checkout.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckoutCheckoutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input {\n  border: 0.5px solid #db9e07;\n  border-radius: 3px;\n  font-size: 17px;\n  color: #080808;\n}\n\n.label {\n  font-size: 12px;\n}\n\n.small {\n  font-size: 9px;\n  color: #787878;\n}\n\n.icon {\n  font-size: 21px;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 90%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n\n.add-payment-div {\n  border: 1px solid #ddd;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.input1 {\n  border: 0.5px solid #db9e07;\n  border-radius: 3px;\n  font-size: 20px;\n  color: #080808;\n}\n\n.map {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvRDpcXGdpdGt1aWNrc2F2ZVxcbXVsdGlzdG9yZS1tb2JpbGUtYXBwL3NyY1xcYXBwXFxjaGVja291dFxcY2hlY2tvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FDS0o7O0FESEE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ01KOztBREpBO0VBRUksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcclxuICAgIGJvcmRlcjogLjVweCBzb2xpZCByZ2IoMjE5LCAxNTgsIDcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6cmdiKDgsIDgsIDgpO1xyXG59XHJcbi5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcclxufVxyXG4uaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuLmJvdHRvbSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG59XHJcbi5hZGQtcGF5bWVudC1kaXZ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmlucHV0MVxyXG57XHJcbiAgICBib3JkZXI6IC41cHggc29saWQgcmdiKDIxOSwgMTU4LCA3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOnJnYig4LCA4LCA4KTtcclxufVxyXG4ubWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iLCIuaW5wdXQge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNkYjllMDc7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzA4MDgwODtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICM3ODc4Nzg7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG4uYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xufVxuXG4uYWRkLXBheW1lbnQtZGl2IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmlucHV0MSB7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2RiOWUwNztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDgwODA4O1xufVxuXG4ubWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/checkout/checkout.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/checkout/checkout.page.ts ***!
    \*******************************************/

  /*! exports provided: CheckoutPage */

  /***/
  function srcAppCheckoutCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
      return CheckoutPage;
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


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_models_order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/_models/order */
    "./src/app/_models/order.ts");
    /* harmony import */


    var src_app_models_orderitem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/_models/orderitem */
    "./src/app/_models/orderitem.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/file-chooser/ngx */
    "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */
    //import swal from 'sweetalert';


    var CheckoutPage = /*#__PURE__*/function () {
      function CheckoutPage(menuCtrl, fun, dataService, alertController, orderservice, loadingController, toastService, storage, formBuilder, http, geolocation, fileChooser, file, filePath, transfer, ref, zone) {
        _classCallCheck(this, CheckoutPage);

        this.menuCtrl = menuCtrl;
        this.fun = fun;
        this.dataService = dataService;
        this.alertController = alertController;
        this.orderservice = orderservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.http = http;
        this.geolocation = geolocation;
        this.fileChooser = fileChooser;
        this.file = file;
        this.filePath = filePath;
        this.transfer = transfer;
        this.ref = ref;
        this.zone = zone;
        this.addNewPayment = false;
        this.Order = new src_app_models_order__WEBPACK_IMPORTED_MODULE_8__["Order"]();
        this.OrderItem = new src_app_models_orderitem__WEBPACK_IMPORTED_MODULE_9__["OrderItem"]();
        this.OrderItems = [];
        this.selfpick = false;
        this.resourceURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].RESOURCE_URL;
        this.validation_messages = {
          Address: [{
            type: "required",
            message: "Delivery address is required."
          }]
        };
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = {
          input: ''
        };
        this.autocompleteItems = [];
      }

      _createClass(CheckoutPage, [{
        key: "updateSearchResults",
        value: function updateSearchResults() {
          var _this = this;

          if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
          }

          this.GoogleAutocomplete.getPlacePredictions({
            input: this.autocomplete.input
          }, function (predictions, status) {
            console.log(status);
            _this.autocompleteItems = [];

            _this.zone.run(function () {
              predictions.forEach(function (prediction) {
                _this.autocompleteItems.push(prediction);
              });
            });
          });
        }
      }, {
        key: "selectSearchResult",
        value: function selectSearchResult(item) {
          var _this2 = this;

          this.myMarker.setMap(null);
          this.autocompleteItems = [];
          var geocoder1 = new google.maps.Geocoder();
          geocoder1.geocode({
            'placeId': item.place_id
          }, function (results, status) {
            if (status === 'OK' && results[0]) {
              _this2.myMarker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: _this2.map,
                draggable: true
              });

              _this2.map.setCenter(_this2.myMarker.position);

              _this2.myMarker.setMap(_this2.map);

              _this2.selectedPlace = "" + results[0].formatted_address;

              _this2.fg.controls.DelieveryAddress.setValue("" + results[0].formatted_address);

              google.maps.event.addListener(_this2.myMarker, "dragend", function () {
                _this2.latitude = _this2.myMarker.getPosition().lat();
                _this2.longitude = _this2.myMarker.getPosition().lng();

                _this2.getAddressFromMarker(_this2.latitude, _this2.longitude, _this2.fg);
              });
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.storage.get("IsLoggedIn").then(function (value) {
                      if (!value) {
                        _this3.fun.navigate('login', false);
                      }
                    });
                    this.fg = this.formBuilder.group({
                      // 'IsSelfPick' : [true],
                      // 'RiderName': [null],
                      // 'RiderVehicleNo': [null],
                      // 'RiderContactNo': [null],
                      // 'UserId': [],
                      // 'ShopId':[],
                      // // 'Description': [null, Validators.required],
                      // 'PayMentMethod': 1,
                      // 'TotalAmmount': [],
                      // 'OrderItems':[],
                      // 'CustomerLat': [],
                      // 'CustomerLong': [],
                      'DelieveryAddress': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
                      'PayMentMethod': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]
                    });
                    this.fg.value.DelieveryAddress = ' ';
                    console.log(this.fg.value);
                    this.getUserLocation();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // await
                    this.menuCtrl.enable(false, 'start');
                    this.menuCtrl.enable(false, 'end');

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getUserLocation",
        value: function getUserLocation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.geolocation.getCurrentPosition({
                      maximumAge: 40000,
                      timeout: 4000,
                      enableHighAccuracy: true
                    }).then(function (resp) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                this.latitude = resp.coords.latitude;
                                this.longitude = resp.coords.longitude;
                                console.log();
                                _context3.next = 5;
                                return this.loadMap();

                              case 5:
                                console.log("latitude", this.latitude, "longitude", this.longitude);

                              case 6:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    })["catch"](function (error) {
                      console.log("Error getting location", error);
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getAddressFromMarker",
        value: function getAddressFromMarker(markLat, markLong, formGroup) {
          var latlng = new google.maps.LatLng(markLat, markLong);
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            'latLng': latlng
          }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[1]) {
                var strAddress = "";
                strAddress = strAddress + results[1].formatted_address;
                formGroup.controls.DelieveryAddress.setValue("" + strAddress);
              }
            }
          });
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            var geocoder, infowindow;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.map = new google.maps.Map(this.mapElement.nativeElement, {
                      center: {
                        lat: this.latitude,
                        lng: this.longitude
                      },
                      zoom: 15
                    });
                    geocoder = new google.maps.Geocoder();
                    infowindow = new google.maps.InfoWindow();
                    this.myMarker = new google.maps.Marker({
                      position: {
                        lat: this.latitude,
                        lng: this.longitude
                      },
                      draggable: true
                    });
                    this.map.setCenter(this.myMarker.position);
                    this.myMarker.setMap(this.map);
                    this.getAddressFromMarker(this.latitude, this.longitude, this.fg);
                    google.maps.event.addListener(this.myMarker, "dragend", function () {
                      _this5.latitude = _this5.myMarker.getPosition().lat();
                      _this5.longitude = _this5.myMarker.getPosition().lng();

                      _this5.getAddressFromMarker(_this5.latitude, _this5.longitude, _this5.fg);
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
        key: "onChange",
        value: function onChange(event) {
          console.log(this.Delievery_Address);
        }
      }, {
        key: "addPayment",
        value: function addPayment() {
          this.addNewPayment = !this.addNewPayment;
        }
      }, {
        key: "done",
        value: function done() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            var obj, loading;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    // swal("Awesome", "You just bought 2 awesome dresses", "success");
                    // this.fun.navigate('home',false);
                    if (this.fg.value.DelieveryAddress == null) {
                      this.fg.value.DelieveryAddress = ' ';
                    }

                    console.log(this.fg.value);
                    obj = this.fg.value;
                    obj.DelieveryAddress = obj.DelieveryAddress.trim(); // obj.DelieveryAddress=obj.DelieveryAddress.trim();

                    if (!(this.fg.value.PayMentMethod != 2 && this.fg.value.PayMentMethod != 1)) {
                      _context6.next = 8;
                      break;
                    }

                    this.toastService.create('Please select payment method', "danger");
                    _context6.next = 39;
                    break;

                  case 8:
                    if (!(obj.DelieveryAddress.length == 0)) {
                      _context6.next = 12;
                      break;
                    }

                    this.toastService.create('Delivery Address Must be required', "danger");
                    _context6.next = 39;
                    break;

                  case 12:
                    _context6.next = 14;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 14:
                    loading = _context6.sent;
                    _context6.next = 17;
                    return loading.present();

                  case 17:
                    _context6.next = 19;
                    return this.storage.get("Cart").then(function (items) {
                      if (items) {
                        console.log(items);
                        items.forEach(function (element) {
                          //  this.OrderItem.ProductId = element.productId;
                          //  this.OrderItem.Quantity = element.quantity;
                          var Total = element.price * element.quantity;

                          _this6.OrderItems.push({
                            ProductId: element.productId,
                            Quantity: element.quantity,
                            TotalAmount: element.price * element.quantity
                          });
                        });
                        console.log(_this6.OrderItems);
                        _this6.fg.value.OrderItems = _this6.OrderItems;
                        console.log(_this6.fg.value);
                      }
                    });

                  case 19:
                    _context6.next = 21;
                    return this.storage.get("ReturnedProductId").then(function (value) {
                      _this6.fg.value.ReturnedProductId = value;
                    });

                  case 21:
                    _context6.next = 23;
                    return this.storage.get("ReturnQuantity").then(function (value) {
                      _this6.fg.value.ReturnQuantity = value;
                    });

                  case 23:
                    _context6.next = 25;
                    return this.storage.get("TotalAmount").then(function (value) {
                      _this6.fg.value.TotalAmmount = value;
                    });

                  case 25:
                    _context6.next = 27;
                    return this.storage.get("ReturnDiscount").then(function (value) {
                      _this6.fg.value.ReturnDiscount = value;
                    });

                  case 27:
                    _context6.next = 29;
                    return this.storage.get("ShopId").then(function (value) {
                      _this6.fg.value.ShopId = value;
                    });

                  case 29:
                    _context6.next = 31;
                    return this.storage.get("User").then(function (value) {
                      _this6.fg.value.UserId = value.sid;
                    });

                  case 31:
                    _context6.next = 33;
                    return this.storage.get("customerLat").then(function (value) {
                      _this6.fg.value.CustomerLat = _this6.latitude;
                    });

                  case 33:
                    _context6.next = 35;
                    return this.storage.get("customerLong").then(function (value) {
                      _this6.fg.value.CustomerLong = _this6.longitude;
                    });

                  case 35:
                    _context6.next = 37;
                    return this.storage.get("deliveryCharges").then(function (value) {
                      _this6.fg.value.deliveryCharges = value;
                    });

                  case 37:
                    console.log(this.fg.value);
                    this.orderservice.PostOrder(this.fg.value).subscribe(function (res) {
                      if (res) {
                        loading.dismiss();

                        _this6.storage.remove('Cart');

                        _this6.storage.remove('deliveryCharges');

                        _this6.storage.remove('TotalAmount');

                        _this6.storage.remove('ReturnDiscount');

                        _this6.storage.remove('isReturnable');

                        _this6.storage.remove('ReturnedProductId');

                        _this6.storage.remove('ReturnQuantity');

                        _this6.toastService.create('Order Successfully Placed');

                        _this6.fun.navigate('home', false);
                      }
                    }, function (err) {
                      loading.dismiss();

                      _this6.toastService.create(err, 'danger');
                    });

                  case 39:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "back",
        value: function back() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertController.create({
                      header: 'Are you sure?',
                      message: 'Do you want to cancel entering your payment info?',
                      buttons: [{
                        text: 'Yes',
                        cssClass: 'mycolor',
                        handler: function handler(blah) {
                          _this7.fun.back();
                        }
                      }, {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'mycolor',
                        handler: function handler() {}
                      }]
                    });

                  case 2:
                    alert = _context7.sent;
                    _context7.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "printvalue",
        value: function printvalue() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    console.log(this.fg.value.IsSelfPick);
                    if (this.fg.value.IsSelfPick == 'true') this.selfpick = true;else this.selfpick = false;
                    console.log(this.selfpick);

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return CheckoutPage;
    }();

    CheckoutPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__["Geolocation"]
      }, {
        type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_14__["FileChooser"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_16__["FilePath"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_17__["FileTransfer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", {
      "static": true
    })], CheckoutPage.prototype, "mapElement", void 0);
    CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./checkout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./checkout.page.scss */
      "./src/app/checkout/checkout.page.scss"))["default"]]
    })], CheckoutPage);
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
  }
}]);
//# sourceMappingURL=checkout-checkout-module-es5.js.map