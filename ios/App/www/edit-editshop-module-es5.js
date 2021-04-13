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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-editshop-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/edit/editshop.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/edit/editshop.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopOwnerShopEditEditshopPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\" style=\"color: black;\">Edit Shop</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button style=\"color: black;\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <ion-grid>\r\n    <form [formGroup]=\"fg\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>Shop Name</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Shop Name\" formControlName=\"Name\" class=\"input ion-padding-horizontal\">\r\n          </ion-input>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Name\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('Name').hasError(validation.type) && (fg.get('Name').dirty || fg.get('Name').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-padding-vertical\">\r\n        <ion-col>\r\n          <ion-label>Contact</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Contact\" formControlName=\"Contact\" class=\"input ion-padding-horizontal\">\r\n          </ion-input>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.mobileNumber\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('Contact').hasError(validation.type) && (fg.get('Contact').dirty || fg.get('Contact').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-padding-vertical\">\r\n        <ion-col>\r\n          <ion-label>NTN Number</ion-label>\r\n          <ion-input type=\"number\" placeholder=\"NTN Number\" formControlName=\"NDN_Number\"\r\n            class=\"input ion-padding-horizontal\"></ion-input>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.NDN_Number\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('NDN_Number').hasError(validation.type) && (fg.get('NDN_Number').dirty  &&  fg.get('NDN_Number').minlength || fg.get('NDN_Number').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Account Type</ion-label>\r\n            <ion-select name=\"PaymentMethod\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"AccountType\"\r\n              (ionChange)=\"AccountTypeForPayment($event)\">\r\n              <ion-select-option value=\"Bank\">Bank </ion-select-option>\r\n              <ion-select-option value=\"EasyPaisa\">EasyPaisa </ion-select-option>\r\n              <ion-select-option value=\"JazzCash\">JazzCash </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Type\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('AccountType').hasError(validation.type) && (fg.get('AccountType').dirty || fg.get('AccountType').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col *ngIf=\"fg.value.AccountType == 'Bank'\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Select Bank</ion-label>\r\n            <ion-select name=\"bank\" formControlerName=\"BankName\" (ionChange)=\"BankNamess($event)\">\r\n              <ion-select-option *ngFor=\"let bank of banklist\" [value]=\"bank.bankName\">{{bank.bankName}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.BankName\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('BankName').hasError(validation.type) && (fg.get('BankName').dirty || fg.get('BankName').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>Account Number/ Phone Number</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"AccountNumber\" placeholder=\"Account Number/ Phone Number\"\r\n            class=\"input ion-padding-horizontal\"></ion-input>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.AccountNumber\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('AccountNumber').hasError(validation.type) && (fg.get('AccountNumber').dirty || fg.get('AccountNumber').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-padding-vertical\">\r\n        <ion-col>\r\n          <ion-label>Delivery Radius</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Radius\" formControlName=\"DeliveryRadius\"\r\n            class=\"input ion-padding-horizontal\"></ion-input>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Radious\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('DeliveryRadius').hasError(validation.type) && (fg.get('DeliveryRadius').dirty || fg.get('DeliveryRadius').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n      <!-- <ion-row class=\"ion-padding-vertical\">\r\n    <ion-col>\r\n      <ion-checkbox checked=\"true\" formControlName=\"IsReturnable\"></ion-checkbox>\r\n    <ion-label>  Allow product Exchange</ion-label> \r\n    </ion-col>\r\n  </ion-row> -->\r\n      <ion-row>\r\n        <ion-col>\r\n          <!-- <ion-item>\r\n      <ion-label position=\"floating\">Shop Category</ion-label>\r\n     <ion-select name=\"GroupId\" formControlName=\"GroupId\">\r\n       <ion-select-option *ngFor =\"let group of groups\" value=\"{{group.id}}\">{{group.name}}</ion-select-option>\r\n     </ion-select>\r\n    </ion-item> -->\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Shop Category</ion-label><br>\r\n            <ion-select [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"GroupId\">\r\n              <ion-select-option *ngFor=\"let group of groups\" [value]=\"group.id\">{{group.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Type\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('GroupId').hasError(validation.type) && (fg.get('GroupId').dirty || fg.get('GroupId').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <!-- <ion-col>\r\n      <ion-button expand=\"block\"   color=\"mycolor1\" (click)=\"uploadPhoto('banner')\"><strong class=\"white ion-text-capitalize\">Banner</strong></ion-button>\r\n    </ion-col> -->\r\n        <ion-col>\r\n          <ion-button expand=\"block\" color=\"mycolor1\" (click)=\"uploadPhoto('logo')\"><strong\r\n              class=\"white ion-text-capitalize\">\r\n              <ion-text color=\"light\" style=\"font-size: 18px; font-family: 'Times New Roman', serif;\">Logo</ion-text>\r\n            </strong></ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <!-- <ion-col>\r\n       <ion-spinner *ngIf=\"uploadingbanner\" color=\"mycolor1\"></ion-spinner>\r\n      <ion-img *ngIf=\"fg.value.Banner\" [src]=\"resourceURL + fg.value.Banner\" alt=\"Banner Image\"></ion-img>\r\n    </ion-col> -->\r\n        <ion-col>\r\n          <ion-spinner *ngIf=\"uploadinglogo\" color=\"mycolor1\" class=\"ion-align-items-center\"></ion-spinner>\r\n          <ion-img *ngIf=\"fg.value.Logo\" [src]=\"resourceURL + fg.value.Logo\" alt=\"Logo Image\">\r\n            <ion-spinner color=\"primary\"></ion-spinner>\r\n          </ion-img>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-padding-vertical\">\r\n        <ion-col>\r\n          <ion-label>Address</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Address\" disabled formControlName=\"Address\"\r\n            class=\"input ion-padding-horizontal\"></ion-input>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Address\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('Address').hasError(validation.type) && (fg.get('Address').dirty || fg.get('Address').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-label class=\"ion-text-justify\" style=\"padding-left: 10px; padding-right: 10px; padding-bottom: 15px; \"><strong>Note: </strong>Drag marker on map to select\r\n          the address or type in searchbox below to look for your address</ion-label>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item style=\"min-height: 300px;\">\r\n            <div #mapElement class=\"map\" style=\"min-height: 300px;\"></div>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" (click)=\"UpdateShop()\" color=\"mycolor1\" [diabled]=\"!fg.valid\"><strong\r\n              class=\"white\">\r\n              <ion-text color=\"light\" style=\"font-size: 18px; font-family: 'Times New Roman', serif;\">Update</ion-text>\r\n            </strong></ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar [value]=\"selectedPlace\" [(ngModel)]=\"autocomplete.input\" (ionInput)=\"updateSearchResults()\"\r\n      placeholder=\"Search for a place\">\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-list [hidden]=\"autocompleteItems.length == 0\">\r\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\r\n      {{ item.description }}\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/services/shop.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/shop.service.ts ***!
    \******************************************/

  /*! exports provided: ShopService */

  /***/
  function srcAppServicesShopServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopService", function () {
      return ShopService;
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

    var ShopService = /*#__PURE__*/function (_base_service__WEBPAC) {
      _inherits(ShopService, _base_service__WEBPAC);

      var _super = _createSuper(ShopService);

      function ShopService(http) {
        var _this;

        _classCallCheck(this, ShopService);

        _this = _super.call(this, http);
        _this.http = http;
        _this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        _this.API_SHOP = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "shop/");
        _this.API_PRODUCT = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "product/");
        _this.API_BANK = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "bank/");
        return _this;
      }

      _createClass(ShopService, [{
        key: "GetShops",
        value: function GetShops(lat, lng) {
          var url = "".concat(this.API_SHOP).concat(lat, "/").concat(lng);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopsByCategory",
        value: function GetShopsByCategory(groupid, lat, lng) {
          var url = "".concat(this.API_SHOP).concat(lat, "/").concat(lng, "/").concat(groupid);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetSingleShopByName",
        value: function GetSingleShopByName() {
          var url = "".concat(this.API_SHOP);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "getApprovedShops",
        value: function getApprovedShops() {
          var url = "".concat(this.API_SHOP, "verified");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "getUnApprovedShops",
        value: function getUnApprovedShops() {
          var url = "".concat(this.API_SHOP, "unverfied");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "getShopsByUser",
        value: function getShopsByUser(id) {
          var url = "".concat(this.API_SHOP, "user/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "ApproveShop",
        value: function ApproveShop(id, data) {
          var url = "".concat(this.API_SHOP).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "UpdateShop",
        value: function UpdateShop(id, data) {
          var url = "".concat(this.API_SHOP).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "UpdateProduct",
        value: function UpdateProduct(id, data) {
          var url = "".concat(this.API_PRODUCT).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopProducts",
        value: function GetShopProducts(id) {
          var url = "".concat(this.API_SHOP).concat(id, "/products");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopByProducts",
        value: function GetShopByProducts(id) {
          var url = "".concat(this.API_SHOP, "products/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopByuserProducts",
        value: function GetShopByuserProducts(id) {
          var url = "".concat(this.API_PRODUCT, "userProduct/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShop",
        value: function GetShop(id) {
          var url = "".concat(this.API_SHOP).concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetProductDetail",
        value: function GetProductDetail(id) {
          var url = "".concat(this.API_PRODUCT).concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "PostShop",
        value: function PostShop(data) {
          var url = "".concat(this.API_SHOP);
          return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "PostProduct",
        value: function PostProduct(data) {
          var url = "".concat(this.API_PRODUCT);
          return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetProduct",
        value: function GetProduct() {
          var url = "".concat(this.API_PRODUCT);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "DeleteProductbyId",
        value: function DeleteProductbyId(id) {
          var url = "".concat(this.API_PRODUCT).concat(id);
          return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "DeleteShop",
        value: function DeleteShop(id) {
          var url = "".concat(this.API_SHOP).concat(id);
          return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetBank",
        value: function GetBank() {
          var url = "".concat(this.API_BANK);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }]);

      return ShopService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

    ShopService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ShopService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ShopService);
    /***/
  },

  /***/
  "./src/app/shopOwner/shop/edit/editshop.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/shopOwner/shop/edit/editshop.module.ts ***!
    \********************************************************/

  /*! exports provided: EditShopPageModule */

  /***/
  function srcAppShopOwnerShopEditEditshopModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditShopPageModule", function () {
      return EditShopPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _editshop_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./editshop.page */
    "./src/app/shopOwner/shop/edit/editshop.page.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
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


    var EditShopPageModule = function EditShopPageModule() {
      _classCallCheck(this, EditShopPageModule);
    };

    EditShopPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _editshop_page__WEBPACK_IMPORTED_MODULE_5__["EditShopPage"]
      }])],
      declarations: [_editshop_page__WEBPACK_IMPORTED_MODULE_5__["EditShopPage"]],
      providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__["FileChooser"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"]],
      entryComponents: []
    })], EditShopPageModule);
    /***/
  },

  /***/
  "./src/app/shopOwner/shop/edit/editshop.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/shopOwner/shop/edit/editshop.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopOwnerShopEditEditshopPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imgdiv {\n  width: 80%;\n  height: 60%;\n}\n\n.img1 {\n  width: 100%;\n  height: 100%;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.center {\n  text-align: center;\n}\n\n.map {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcE93bmVyL3Nob3AvZWRpdC9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHNob3BPd25lclxcc2hvcFxcZWRpdFxcZWRpdHNob3AucGFnZS5zY3NzIiwic3JjL2FwcC9zaG9wT3duZXIvc2hvcC9lZGl0L2VkaXRzaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVJO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0FDQ1I7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksd0JBQUE7QUNJSjs7QUREQTtFQUNJLGtCQUFBO0FDSUo7O0FEREE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvc2hvcE93bmVyL3Nob3AvZWRpdC9lZGl0c2hvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmltZ2RpdntcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIGhlaWdodDo2MCU7XHJcbn1cclxuLmltZzF7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuLnNtYWxsIHtcclxuICAgIGF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLndoaXRle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSIsIi5pbWdkaXYge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLmltZzEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc21hbGwgYSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cblxuLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shopOwner/shop/edit/editshop.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/shopOwner/shop/edit/editshop.page.ts ***!
    \******************************************************/

  /*! exports provided: EditShopPage */

  /***/
  function srcAppShopOwnerShopEditEditshopPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditShopPage", function () {
      return EditShopPage;
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


    var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/shop.service */
    "./src/app/services/shop.service.ts");
    /* harmony import */


    var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/group.service */
    "./src/app/services/group.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/file-chooser/ngx */
    "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
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


    var EditShopPage = /*#__PURE__*/function () {
      function EditShopPage(router, route, shopservice, groupservice, loadingController, toastService, formBuilder, http, geolocation, fileChooser, file, filePath, transfer, ref, zone) {
        _classCallCheck(this, EditShopPage);

        this.router = router;
        this.route = route;
        this.shopservice = shopservice;
        this.groupservice = groupservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.geolocation = geolocation;
        this.fileChooser = fileChooser;
        this.file = file;
        this.filePath = filePath;
        this.transfer = transfer;
        this.ref = ref;
        this.zone = zone;
        this.uploadinglogo = false;
        this.uploadingbanner = false;
        this.resourceURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].RESOURCE_URL;
        this.id = this.route.snapshot.paramMap.get('id');
        this.validation_messages = {
          Name: [{
            type: "required",
            message: "Name is required."
          }],
          lastName: [{
            type: "required",
            message: "LastName is required."
          }],
          NDN_Number: [{
            type: "required",
            message: "Please enter a valid NTN NO:"
          }, {
            type: "pattern",
            message: "NTN number must be 13 character"
          }],
          mobileNumber: [{
            type: "required",
            message: "MobileNumber is required & without space."
          }, {
            type: "pattern",
            message: "Mobile number like 03xxxxxxxxx and length 11 char"
          }],
          Address: [{
            type: "required",
            message: "Address is required."
          }],
          Type: [{
            type: "required",
            message: "Shop cateory is required."
          }],
          AccountType: [{
            type: "required",
            message: "Payment method is required."
          }],
          Radious: [{
            type: "required",
            message: "Field is required."
          }, {
            type: "min",
            message: "radius must be be 10 or higher."
          }],
          AccountNumber: [{
            type: "required",
            message: "Account Number is required."
          }],
          BankName: [{
            type: "required",
            message: "Account Number is required."
          }]
        };
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = {
          input: ''
        };
        this.autocompleteItems = [];
      }

      _createClass(EditShopPage, [{
        key: "updateSearchResults",
        value: function updateSearchResults() {
          var _this2 = this;

          if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
          }

          this.GoogleAutocomplete.getPlacePredictions({
            input: this.autocomplete.input
          }, function (predictions, status) {
            console.log(status);
            _this2.autocompleteItems = [];

            _this2.zone.run(function () {
              predictions.forEach(function (prediction) {
                _this2.autocompleteItems.push(prediction);
              });
            });
          });
        }
      }, {
        key: "selectSearchResult",
        value: function selectSearchResult(item) {
          var _this3 = this;

          this.myMarker.setMap(null);
          this.autocompleteItems = [];
          var geocoder1 = new google.maps.Geocoder();
          geocoder1.geocode({
            'placeId': item.place_id
          }, function (results, status) {
            if (status === 'OK' && results[0]) {
              _this3.myMarker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: _this3.map,
                draggable: true
              });

              _this3.map.setCenter(_this3.myMarker.position);

              _this3.myMarker.setMap(_this3.map);

              _this3.selectedPlace = "" + results[0].formatted_address;

              _this3.fg.controls.Address.setValue("" + results[0].formatted_address);

              google.maps.event.addListener(_this3.myMarker, "dragend", function () {
                _this3.latitude = _this3.myMarker.getPosition().lat();
                _this3.longitude = _this3.myMarker.getPosition().lng();

                _this3.getAddressFromMarker(_this3.latitude, _this3.longitude, _this3.fg);
              });
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fg = this.formBuilder.group({
            'Id': [null],
            'Name': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern("^(?! )[A-Za-z0-9$#@&?!*()%<>+=-|,. ]*()$")]],
            'GroupId': [null],
            'UserId': [null],
            'Contact': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern("^0[03][0-9]{9}$")])],
            'NDN_Number': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern("[0-9]{13}$")]],
            'AccountType': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'BankName': [null],
            'AccountNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'Latitude': [null],
            'Longitude': [null],
            'DeliveryRadius': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(10)])],
            'Address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'IsReturnable': [null],
            'IsVerified': [false],
            'IsDisabled': [false],
            'Logo': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.getGroups();

                  case 2:
                    _context.next = 4;
                    return this.GetBankList();

                  case 4:
                    _context.next = 6;
                    return this.getShop(this.id);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "preventDefault",
        value: function preventDefault(e) {
          e.preventDefault();
        }
      }, {
        key: "AccountTypeForPayment",
        value: function AccountTypeForPayment(event) {
          this.fg.value.AccountType = event.target.value;
          this.fg.controls['AccountType'].setValue(event.target.value); // if(this.fg.value.AccountType= 'Bank')
          // {
          //   this.fg.controls['BankName'].setValidators(Validators.required);
          // }
          // this.fg.value.AccountType= event.target.value;

          console.log(event.target.value);
        }
      }, {
        key: "BankNamess",
        value: function BankNamess(event) {
          this.fg.controls['BankName'].setValue(event.target.value);
          console.log(event.target.value);
        }
      }, {
        key: "updatelatlng",
        value: function updatelatlng(lt, lg) {
          this.latitude = lt;
          this.longitude = lg;
        }
      }, {
        key: "getGroups",
        value: function getGroups() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

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
                    return this.groupservice.GetGroups().subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        console.log(res);
                        _this4.groups = res;
                      } else {
                        loading.dismiss();

                        _this4.toastService.create(res.Message, "danger");
                      }
                    }, function (err) {
                      loading.dismiss();

                      _this4.toastService.create(err, "danger");
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.map = new google.maps.Map(this.mapElement.nativeElement, {
                      center: {
                        lat: this.latitude,
                        lng: this.longitude
                      },
                      zoom: 15
                    });
                    this.myMarker = new google.maps.Marker({
                      position: {
                        lat: this.latitude,
                        lng: this.longitude
                      },
                      draggable: true
                    });
                    this.map.setCenter(this.myMarker.position);
                    this.myMarker.setMap(this.map);
                    google.maps.event.addListener(this.myMarker, "dragend", function () {
                      _this5.latitude = _this5.myMarker.getPosition().lat();
                      _this5.longitude = _this5.myMarker.getPosition().lng();

                      _this5.getAddressFromMarker(_this5.latitude, _this5.longitude, _this5.fg);
                    });

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
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
                this.strAddress = "";
                this.strAddress = this.strAddress + results[1].formatted_address;
                formGroup.controls.Address.setValue("" + this.strAddress);
              }
            }
          });
        }
      }, {
        key: "UpdateShop",
        value: function UpdateShop() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this6 = this;

            var loading, obj, _loading;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    //console.log(this.fg.value)
                    this.fg.controls['GroupId'].setValue(this.GroupId);
                    this.fg.value.Latitude = this.latitude;
                    this.fg.value.Longitude = this.longitude;
                    _context4.next = 5;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 5:
                    loading = _context4.sent;
                    // await loading.present();
                    obj = this.fg.value;
                    obj.Name = obj.Name.trim();
                    obj.Address = obj.Address.trim();
                    obj.AccountNumber = obj.AccountNumber.trim();

                    if (!(obj.Name.length == 0 && obj.Address == 0 && obj.AccountNumber == 0)) {
                      _context4.next = 19;
                      break;
                    }

                    this.fg.controls['Name'].setValue(null);
                    this.fg.controls['Name'].updateValueAndValidity();
                    this.fg.controls['Address'].setValue(null);
                    this.fg.controls['Address'].updateValueAndValidity();
                    this.fg.controls['AccountNumber'].setValue(null);
                    this.fg.controls['AccountNumber'].updateValueAndValidity();
                    _context4.next = 75;
                    break;

                  case 19:
                    if (!(obj.Name.length == 0 && obj.Address == 0)) {
                      _context4.next = 26;
                      break;
                    }

                    this.fg.controls['Name'].setValue(null);
                    this.fg.controls['Name'].updateValueAndValidity();
                    this.fg.controls['Address'].setValue(null);
                    this.fg.controls['Address'].updateValueAndValidity();
                    _context4.next = 75;
                    break;

                  case 26:
                    if (!(obj.Name.length == 0 && obj.AccountNumber == 0)) {
                      _context4.next = 33;
                      break;
                    }

                    this.fg.controls['Name'].setValue(null);
                    this.fg.controls['Name'].updateValueAndValidity();
                    this.fg.controls['AccountNumber'].setValue(null);
                    this.fg.controls['AccountNumber'].updateValueAndValidity();
                    _context4.next = 75;
                    break;

                  case 33:
                    if (!(obj.Address == 0 && obj.AccountNumber == 0)) {
                      _context4.next = 40;
                      break;
                    }

                    this.fg.controls['Address'].setValue(null);
                    this.fg.controls['Address'].updateValueAndValidity();
                    this.fg.controls['AccountNumber'].setValue(null);
                    this.fg.controls['AccountNumber'].updateValueAndValidity();
                    _context4.next = 75;
                    break;

                  case 40:
                    if (!(obj.Name.length == 0)) {
                      _context4.next = 45;
                      break;
                    }

                    this.fg.controls['Name'].setValue(null);
                    this.fg.controls['Name'].updateValueAndValidity();
                    _context4.next = 75;
                    break;

                  case 45:
                    if (!(obj.Address == 0)) {
                      _context4.next = 50;
                      break;
                    }

                    this.fg.controls['Address'].setValue(null);
                    this.fg.controls['Address'].updateValueAndValidity();
                    _context4.next = 75;
                    break;

                  case 50:
                    if (!(obj.AccountNumber == 0)) {
                      _context4.next = 55;
                      break;
                    }

                    this.fg.controls['AccountNumber'].setValue(null);
                    this.fg.controls['AccountNumber'].updateValueAndValidity();
                    _context4.next = 75;
                    break;

                  case 55:
                    if (!(this.fg.value.price < 1)) {
                      _context4.next = 59;
                      break;
                    }

                    this.toastService.create("Price must be greater then zero", "danger");
                    _context4.next = 75;
                    break;

                  case 59:
                    if (!(this.fg.value.DeliveryRadius < 10)) {
                      _context4.next = 64;
                      break;
                    }

                    this.toastService.create("radius must be be 10 or higher", "danger");
                    return _context4.abrupt("return", false);

                  case 64:
                    if (!(this.fg.value.Logo == null)) {
                      _context4.next = 68;
                      break;
                    }

                    this.toastService.create("Please upload the shop photo", 'danger');
                    _context4.next = 75;
                    break;

                  case 68:
                    _context4.next = 70;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 70:
                    _loading = _context4.sent;
                    _context4.next = 73;
                    return _loading.present();

                  case 73:
                    _context4.next = 75;
                    return this.shopservice.UpdateShop(this.id, this.fg.value).subscribe(function (res) {
                      console.log(res, "shop");

                      _loading.dismiss();

                      _this6.toastService.create("Successfully updated", "success");

                      _this6.router.navigate(['shopowner/shops']);
                    }, function (err) {
                      _loading.dismiss();

                      _this6.toastService.create(err, "danger");
                    });

                  case 75:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "GetBankList",
        value: function GetBankList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this7 = this;

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
                    return this.shopservice.GetBank().subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        console.log(res);
                        _this7.banklist = res;
                      } else {
                        loading.dismiss();

                        _this7.toastService.create(res.Message, "danger");
                      }
                    }, function (err) {
                      loading.dismiss();

                      _this7.toastService.create(err, "danger");
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
        key: "getShop",
        value: function getShop(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this8 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 2:
                    loading = _context6.sent;
                    _context6.next = 5;
                    return loading.present();

                  case 5:
                    _context6.next = 7;
                    return this.shopservice.GetShop(id).subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        // console.log(res);
                        _this8.latitude = res.latitude;
                        _this8.longitude = res.longitude;

                        _this8.fg.controls['Id'].setValue(res.id);

                        _this8.fg.controls['Name'].setValue(res.name); // this.fg.controls['GroupId'].setValue(res.groupId);
                        // this.fg.value.GroupId=res.groupId;


                        _this8.GroupId = res.groupId;

                        _this8.fg.controls['UserId'].setValue(res.userId);

                        _this8.fg.controls['Contact'].setValue(res.contact);

                        _this8.fg.controls['Latitude'].setValue(res.latitude);

                        _this8.fg.controls['Longitude'].setValue(res.longitude);

                        _this8.fg.controls['DeliveryRadius'].setValue(res.deliveryRadius);

                        _this8.fg.controls['NDN_Number'].setValue(res.ndN_Number);

                        _this8.fg.controls['Address'].setValue(res.address);

                        _this8.AccountType = res.accountType;
                        _this8.BankName = res.bankName; //  this.fg.controls['AccountType'].setValue(res.accountType);
                        //this.fg.controls['BankName'].setValue(res.bankName);

                        _this8.fg.controls['AccountNumber'].setValue(res.accountNumber);

                        _this8.fg.controls['IsDisabled'].setValue(res.isDisabled);

                        _this8.fg.controls['IsVerified'].setValue(res.isVerified);

                        _this8.fg.controls['Logo'].setValue(res.logo); //  this.fg.controls['Banner'].setValue(res.banner);


                        _this8.loadMap(); //  this.ngOnInit();

                      } else {
                        loading.dismiss();

                        _this8.toastService.create(res.Message, "danger");
                      }
                    }, function (err) {
                      loading.dismiss();

                      _this8.toastService.create(err, "danger");
                    });

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "uploadPhoto",
        value: function uploadPhoto(type) {
          var _this9 = this;

          this.fileChooser.open().then(function (uri) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this10 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      console.log(uri);
                      _context8.next = 3;
                      return this.filePath.resolveNativePath(uri).then(function (filePath) {
                        //this.filesPath = filePath;
                        // if(type=='banner')
                        // {
                        //  this.uploadingbanner = true;
                        //  this.file.resolveLocalFilesystemUrl(filePath).then(fileInfo =>
                        //   {
                        //     let files = fileInfo as FileEntry;
                        //     files.file(async success =>
                        //       {
                        //         //this.fileType   = success.type;
                        //         let filesName  = success.name;
                        //         console.log(filesName);
                        //         let options: FileUploadOptions = {
                        //           fileName: filesName
                        //         }
                        //         const fileTransfer: FileTransferObject = this.transfer.create();
                        //       await  fileTransfer.upload(uri, environment.BASE_URL+'upload', options)
                        //         .then((data) => {
                        //           // success
                        //          // console.log(data);
                        //          this.toastService.create("successfully Uploaded");
                        //           this.uploadingbanner = false;
                        //           let dbpath = JSON.parse(data.response); 
                        //           this.fg.value.Logo = dbpath.dbPath;
                        //           //console.log(this.fg1.value.MonogramImage);
                        //         }, (err) => {
                        //           this.uploadingbanner = false;
                        //           this.toastService.create("Error" , "danger");
                        //           this.ref.detectChanges();
                        //           console.log(err)
                        //           // error
                        //         })
                        //       });
                        //   },err =>
                        //   {
                        //     console.log(err);
                        //     throw err;
                        //   });
                        // }
                        if (type == 'logo') {
                          _this10.uploadinglogo = true;

                          _this10.file.resolveLocalFilesystemUrl(filePath).then(function (fileInfo) {
                            var files = fileInfo;
                            files.file(function (success) {
                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                                var _this11 = this;

                                var filesName, options, fileTransfer;
                                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                  while (1) {
                                    switch (_context7.prev = _context7.next) {
                                      case 0:
                                        if (!(success.size < 204800)) {
                                          _context7.next = 9;
                                          break;
                                        }

                                        filesName = success.name;
                                        console.log(filesName);
                                        options = {
                                          fileName: filesName
                                        };
                                        fileTransfer = this.transfer.create();
                                        _context7.next = 7;
                                        return fileTransfer.upload(uri, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].BASE_URL + 'upload', options).then(function (data) {
                                          // success
                                          // console.log(data);
                                          _this11.toastService.create("successfully Uploaded");

                                          _this11.uploadinglogo = false;
                                          var dbpath = JSON.parse(data.response);
                                          _this11.fg.value.Logo = dbpath.dbPath;

                                          _this11.ref.detectChanges(); //console.log(this.fg1.value.MonogramImage);

                                        }, function (err) {
                                          _this11.uploadinglogo = false;

                                          _this11.toastService.create("Error", "danger");

                                          _this11.ref.detectChanges();

                                          console.log(err); // error
                                        });

                                      case 7:
                                        _context7.next = 11;
                                        break;

                                      case 9:
                                        this.uploadinglogo = false;
                                        this.toastService.create("File size must be less than 200 kb", "danger");

                                      case 11:
                                      case "end":
                                        return _context7.stop();
                                    }
                                  }
                                }, _callee7, this);
                              }));
                            });
                          }, function (err) {
                            console.log(err);
                            throw err;
                          });
                        }
                      }, function (err) {
                        console.log(err);
                        throw err;
                      });

                    case 3:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }, function (err) {
            console.log(err);
            throw err;
          });
        }
      }]);

      return EditShopPage;
    }();

    EditShopPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]
      }, {
        type: src_app_services_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"]
      }, {
        type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__["FileChooser"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__["FilePath"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__["FileTransfer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", {
      "static": true
    })], EditShopPage.prototype, "mapElement", void 0);
    EditShopPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addshop',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./editshop.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/edit/editshop.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./editshop.page.scss */
      "./src/app/shopOwner/shop/edit/editshop.page.scss"))["default"]]
    })], EditShopPage);
    /***/
  }
}]);
//# sourceMappingURL=edit-editshop-module-es5.js.map