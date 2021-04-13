(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-editshop-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/edit/editshop.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/edit/editshop.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\" style=\"color: black;\">Edit Shop</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-back-button style=\"color: black;\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <ion-grid>\r\n    <form [formGroup]=\"fg\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>Shop Name</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Shop Name\" formControlName=\"Name\" class=\"input ion-padding-horizontal\">\r\n          </ion-input>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Name\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('Name').hasError(validation.type) && (fg.get('Name').dirty || fg.get('Name').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-padding-vertical\">\r\n        <ion-col>\r\n          <ion-label>Contact</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Contact\" formControlName=\"Contact\" class=\"input ion-padding-horizontal\">\r\n          </ion-input>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.mobileNumber\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('Contact').hasError(validation.type) && (fg.get('Contact').dirty || fg.get('Contact').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-padding-vertical\">\r\n        <ion-col>\r\n          <ion-label>NTN Number</ion-label>\r\n          <ion-input type=\"number\" placeholder=\"NTN Number\" formControlName=\"NDN_Number\"\r\n            class=\"input ion-padding-horizontal\"></ion-input>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.NDN_Number\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('NDN_Number').hasError(validation.type) && (fg.get('NDN_Number').dirty  &&  fg.get('NDN_Number').minlength || fg.get('NDN_Number').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Account Type</ion-label>\r\n            <ion-select name=\"PaymentMethod\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"AccountType\"\r\n              (ionChange)=\"AccountTypeForPayment($event)\">\r\n              <ion-select-option value=\"Bank\">Bank </ion-select-option>\r\n              <ion-select-option value=\"EasyPaisa\">EasyPaisa </ion-select-option>\r\n              <ion-select-option value=\"JazzCash\">JazzCash </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Type\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('AccountType').hasError(validation.type) && (fg.get('AccountType').dirty || fg.get('AccountType').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col *ngIf=\"fg.value.AccountType == 'Bank'\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Select Bank</ion-label>\r\n            <ion-select name=\"bank\" formControlerName=\"BankName\" (ionChange)=\"BankNamess($event)\">\r\n              <ion-select-option *ngFor=\"let bank of banklist\" [value]=\"bank.bankName\">{{bank.bankName}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.BankName\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('BankName').hasError(validation.type) && (fg.get('BankName').dirty || fg.get('BankName').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>Account Number/ Phone Number</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"AccountNumber\" placeholder=\"Account Number/ Phone Number\"\r\n            class=\"input ion-padding-horizontal\"></ion-input>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.AccountNumber\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('AccountNumber').hasError(validation.type) && (fg.get('AccountNumber').dirty || fg.get('AccountNumber').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-padding-vertical\">\r\n        <ion-col>\r\n          <ion-label>Delivery Radius</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Radius\" formControlName=\"DeliveryRadius\"\r\n            class=\"input ion-padding-horizontal\"></ion-input>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Radious\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('DeliveryRadius').hasError(validation.type) && (fg.get('DeliveryRadius').dirty || fg.get('DeliveryRadius').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n      <!-- <ion-row class=\"ion-padding-vertical\">\r\n    <ion-col>\r\n      <ion-checkbox checked=\"true\" formControlName=\"IsReturnable\"></ion-checkbox>\r\n    <ion-label>  Allow product Exchange</ion-label> \r\n    </ion-col>\r\n  </ion-row> -->\r\n      <ion-row>\r\n        <ion-col>\r\n          <!-- <ion-item>\r\n      <ion-label position=\"floating\">Shop Category</ion-label>\r\n     <ion-select name=\"GroupId\" formControlName=\"GroupId\">\r\n       <ion-select-option *ngFor =\"let group of groups\" value=\"{{group.id}}\">{{group.name}}</ion-select-option>\r\n     </ion-select>\r\n    </ion-item> -->\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Shop Category</ion-label><br>\r\n            <ion-select [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"GroupId\">\r\n              <ion-select-option *ngFor=\"let group of groups\" [value]=\"group.id\">{{group.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Type\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('GroupId').hasError(validation.type) && (fg.get('GroupId').dirty || fg.get('GroupId').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <!-- <ion-col>\r\n      <ion-button expand=\"block\"   color=\"mycolor1\" (click)=\"uploadPhoto('banner')\"><strong class=\"white ion-text-capitalize\">Banner</strong></ion-button>\r\n    </ion-col> -->\r\n        <ion-col>\r\n          <ion-button expand=\"block\" color=\"mycolor1\" (click)=\"uploadPhoto('logo')\"><strong\r\n              class=\"white ion-text-capitalize\">\r\n              <ion-text color=\"light\" style=\"font-size: 18px; font-family: 'Times New Roman', serif;\">Logo</ion-text>\r\n            </strong></ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <!-- <ion-col>\r\n       <ion-spinner *ngIf=\"uploadingbanner\" color=\"mycolor1\"></ion-spinner>\r\n      <ion-img *ngIf=\"fg.value.Banner\" [src]=\"resourceURL + fg.value.Banner\" alt=\"Banner Image\"></ion-img>\r\n    </ion-col> -->\r\n        <ion-col>\r\n          <ion-spinner *ngIf=\"uploadinglogo\" color=\"mycolor1\" class=\"ion-align-items-center\"></ion-spinner>\r\n          <ion-img *ngIf=\"fg.value.Logo\" [src]=\"resourceURL + fg.value.Logo\" alt=\"Logo Image\">\r\n            <ion-spinner color=\"primary\"></ion-spinner>\r\n          </ion-img>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-padding-vertical\">\r\n        <ion-col>\r\n          <ion-label>Address</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Address\" disabled formControlName=\"Address\"\r\n            class=\"input ion-padding-horizontal\"></ion-input>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Address\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('Address').hasError(validation.type) && (fg.get('Address').dirty || fg.get('Address').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-label class=\"ion-text-justify\" style=\"padding-left: 10px; padding-right: 10px; padding-bottom: 15px; \"><strong>Note: </strong>Drag marker on map to select\r\n          the address or type in searchbox below to look for your address</ion-label>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item style=\"min-height: 300px;\">\r\n            <div #mapElement class=\"map\" style=\"min-height: 300px;\"></div>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" (click)=\"UpdateShop()\" color=\"mycolor1\" [diabled]=\"!fg.valid\"><strong\r\n              class=\"white\">\r\n              <ion-text color=\"light\" style=\"font-size: 18px; font-family: 'Times New Roman', serif;\">Update</ion-text>\r\n            </strong></ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar [value]=\"selectedPlace\" [(ngModel)]=\"autocomplete.input\" (ionInput)=\"updateSearchResults()\"\r\n      placeholder=\"Search for a place\">\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n  <ion-list [hidden]=\"autocompleteItems.length == 0\">\r\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"selectSearchResult(item)\">\r\n      {{ item.description }}\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/services/shop.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/shop.service.ts ***!
  \******************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let ShopService = class ShopService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.API_SHOP = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}shop/`;
        this.API_PRODUCT = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}product/`;
        this.API_BANK = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}bank/`;
    }
    GetShops(lat, lng) {
        const url = `${this.API_SHOP}${lat}/${lng}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetShopsByCategory(groupid, lat, lng) {
        const url = `${this.API_SHOP}${lat}/${lng}/${groupid}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetSingleShopByName() {
        const url = `${this.API_SHOP}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    getApprovedShops() {
        const url = `${this.API_SHOP}verified`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    getUnApprovedShops() {
        const url = `${this.API_SHOP}unverfied`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    getShopsByUser(id) {
        const url = `${this.API_SHOP}user/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    ApproveShop(id, data) {
        const url = `${this.API_SHOP}${id}`;
        return this.http.put(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    UpdateShop(id, data) {
        const url = `${this.API_SHOP}${id}`;
        return this.http.put(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    UpdateProduct(id, data) {
        const url = `${this.API_PRODUCT}${id}`;
        return this.http.put(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetShopProducts(id) {
        const url = `${this.API_SHOP}${id}/products`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetShopByProducts(id) {
        const url = `${this.API_SHOP}products/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetShopByuserProducts(id) {
        const url = `${this.API_PRODUCT}userProduct/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetShop(id) {
        const url = `${this.API_SHOP}${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetProductDetail(id) {
        const url = `${this.API_PRODUCT}${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    PostShop(data) {
        const url = `${this.API_SHOP}`;
        return this.http.post(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    PostProduct(data) {
        const url = `${this.API_PRODUCT}`;
        return this.http.post(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetProduct() {
        const url = `${this.API_PRODUCT}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    DeleteProductbyId(id) {
        const url = `${this.API_PRODUCT}${id}`;
        return this.http.delete(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    DeleteShop(id) {
        const url = `${this.API_SHOP}${id}`;
        return this.http.delete(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetBank() {
        const url = `${this.API_BANK}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
};
ShopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ShopService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShopService);



/***/ }),

/***/ "./src/app/shopOwner/shop/edit/editshop.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shopOwner/shop/edit/editshop.module.ts ***!
  \********************************************************/
/*! exports provided: EditShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditShopPageModule", function() { return EditShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _editshop_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editshop.page */ "./src/app/shopOwner/shop/edit/editshop.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */











let EditShopPageModule = class EditShopPageModule {
};
EditShopPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _editshop_page__WEBPACK_IMPORTED_MODULE_5__["EditShopPage"]
                }
            ])
        ],
        declarations: [_editshop_page__WEBPACK_IMPORTED_MODULE_5__["EditShopPage"]],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__["FileChooser"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_11__["FileTransfer"]],
        entryComponents: []
    })
], EditShopPageModule);



/***/ }),

/***/ "./src/app/shopOwner/shop/edit/editshop.page.scss":
/*!********************************************************!*\
  !*** ./src/app/shopOwner/shop/edit/editshop.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgdiv {\n  width: 80%;\n  height: 60%;\n}\n\n.img1 {\n  width: 100%;\n  height: 100%;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.center {\n  text-align: center;\n}\n\n.map {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcE93bmVyL3Nob3AvZWRpdC9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHNob3BPd25lclxcc2hvcFxcZWRpdFxcZWRpdHNob3AucGFnZS5zY3NzIiwic3JjL2FwcC9zaG9wT3duZXIvc2hvcC9lZGl0L2VkaXRzaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVJO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0FDQ1I7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksd0JBQUE7QUNJSjs7QUREQTtFQUNJLGtCQUFBO0FDSUo7O0FEREE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvc2hvcE93bmVyL3Nob3AvZWRpdC9lZGl0c2hvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmltZ2RpdntcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIGhlaWdodDo2MCU7XHJcbn1cclxuLmltZzF7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuLnNtYWxsIHtcclxuICAgIGF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLndoaXRle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSIsIi5pbWdkaXYge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLmltZzEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc21hbGwgYSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cblxuLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shopOwner/shop/edit/editshop.page.ts":
/*!******************************************************!*\
  !*** ./src/app/shopOwner/shop/edit/editshop.page.ts ***!
  \******************************************************/
/*! exports provided: EditShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditShopPage", function() { return EditShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shop.service */ "./src/app/services/shop.service.ts");
/* harmony import */ var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */














let EditShopPage = class EditShopPage {
    constructor(router, route, shopservice, groupservice, loadingController, toastService, formBuilder, http, geolocation, fileChooser, file, filePath, transfer, ref, zone) {
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
            Name: [{ type: "required", message: "Name is required." },
            ],
            lastName: [{ type: "required", message: "LastName is required." }],
            NDN_Number: [
                { type: "required", message: "Please enter a valid NTN NO:" },
                { type: "pattern", message: "NTN number must be 13 character" },
            ],
            mobileNumber: [
                { type: "required", message: "MobileNumber is required & without space." },
                { type: "pattern", message: "Mobile number like 03xxxxxxxxx and length 11 char" }
            ],
            Address: [
                { type: "required", message: "Address is required." },
            ],
            Type: [
                { type: "required", message: "Shop cateory is required." },
            ],
            AccountType: [
                { type: "required", message: "Payment method is required." },
            ],
            Radious: [
                { type: "required", message: "Field is required." },
                { type: "min", message: "radius must be be 10 or higher." },
            ],
            AccountNumber: [
                { type: "required", message: "Account Number is required." },
            ],
            BankName: [
                { type: "required", message: "Account Number is required." },
            ],
        };
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
    }
    updateSearchResults() {
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, (predictions, status) => {
            console.log(status);
            this.autocompleteItems = [];
            this.zone.run(() => {
                predictions.forEach((prediction) => {
                    this.autocompleteItems.push(prediction);
                });
            });
        });
    }
    selectSearchResult(item) {
        this.myMarker.setMap(null);
        this.autocompleteItems = [];
        var geocoder1 = new google.maps.Geocoder();
        geocoder1.geocode({ 'placeId': item.place_id }, (results, status) => {
            if (status === 'OK' && results[0]) {
                this.myMarker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: this.map,
                    draggable: true
                });
                this.map.setCenter(this.myMarker.position);
                this.myMarker.setMap(this.map);
                this.selectedPlace = "" + results[0].formatted_address;
                this.fg.controls.Address.setValue("" + results[0].formatted_address);
                google.maps.event.addListener(this.myMarker, "dragend", () => {
                    this.latitude = this.myMarker.getPosition().lat();
                    this.longitude = this.myMarker.getPosition().lng();
                    this.getAddressFromMarker(this.latitude, this.longitude, this.fg);
                });
            }
        });
    }
    ngOnInit() {
        this.fg = this.formBuilder.group({
            'Id': [null],
            'Name': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern("^(?! )[A-Za-z0-9$#@&?!*()%<>+=-|,. ]*()$")]],
            'GroupId': [null],
            'UserId': [null],
            'Contact': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern("^0[03][0-9]{9}$")
                ])],
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
            'Logo': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getGroups();
            yield this.GetBankList();
            yield this.getShop(this.id);
        });
    }
    preventDefault(e) {
        e.preventDefault();
    }
    AccountTypeForPayment(event) {
        this.fg.value.AccountType = event.target.value;
        this.fg.controls['AccountType'].setValue(event.target.value);
        // if(this.fg.value.AccountType= 'Bank')
        // {
        //   this.fg.controls['BankName'].setValidators(Validators.required);
        // }
        // this.fg.value.AccountType= event.target.value;
        console.log(event.target.value);
    }
    BankNamess(event) {
        this.fg.controls['BankName'].setValue(event.target.value);
        console.log(event.target.value);
    }
    updatelatlng(lt, lg) {
        this.latitude = lt;
        this.longitude = lg;
    }
    getGroups() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.groupservice.GetGroups().subscribe(res => {
                loading.dismiss();
                if (res) {
                    console.log(res);
                    this.groups = res;
                }
                else {
                    loading.dismiss();
                    this.toastService.create(res.Message, "danger");
                }
            }, err => {
                loading.dismiss();
                this.toastService.create(err, "danger");
            });
        });
    }
    loadMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = new google.maps.Map(this.mapElement.nativeElement, {
                center: { lat: this.latitude, lng: this.longitude },
                zoom: 15
            });
            this.myMarker = new google.maps.Marker({
                position: { lat: this.latitude, lng: this.longitude },
                draggable: true
            });
            this.map.setCenter(this.myMarker.position);
            this.myMarker.setMap(this.map);
            google.maps.event.addListener(this.myMarker, "dragend", () => {
                this.latitude = this.myMarker.getPosition().lat();
                this.longitude = this.myMarker.getPosition().lng();
                this.getAddressFromMarker(this.latitude, this.longitude, this.fg);
            });
        });
    }
    getAddressFromMarker(markLat, markLong, formGroup) {
        var latlng = new google.maps.LatLng(markLat, markLong);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    this.strAddress = "";
                    this.strAddress = this.strAddress + results[1].formatted_address;
                    formGroup.controls.Address.setValue("" + this.strAddress);
                }
            }
        });
    }
    UpdateShop() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(this.fg.value)
            this.fg.controls['GroupId'].setValue(this.GroupId);
            this.fg.value.Latitude = this.latitude;
            this.fg.value.Longitude = this.longitude;
            const loading = yield this.loadingController.create({ message: "Loading" });
            // await loading.present();
            let obj = this.fg.value;
            obj.Name = obj.Name.trim();
            obj.Address = obj.Address.trim();
            obj.AccountNumber = obj.AccountNumber.trim();
            if (obj.Name.length == 0 && obj.Address == 0 && obj.AccountNumber == 0) {
                this.fg.controls['Name'].setValue(null);
                this.fg.controls['Name'].updateValueAndValidity();
                this.fg.controls['Address'].setValue(null);
                this.fg.controls['Address'].updateValueAndValidity();
                this.fg.controls['AccountNumber'].setValue(null);
                this.fg.controls['AccountNumber'].updateValueAndValidity();
            }
            else if (obj.Name.length == 0 && obj.Address == 0) {
                this.fg.controls['Name'].setValue(null);
                this.fg.controls['Name'].updateValueAndValidity();
                this.fg.controls['Address'].setValue(null);
                this.fg.controls['Address'].updateValueAndValidity();
            }
            else if (obj.Name.length == 0 && obj.AccountNumber == 0) {
                this.fg.controls['Name'].setValue(null);
                this.fg.controls['Name'].updateValueAndValidity();
                this.fg.controls['AccountNumber'].setValue(null);
                this.fg.controls['AccountNumber'].updateValueAndValidity();
            }
            else if (obj.Address == 0 && obj.AccountNumber == 0) {
                this.fg.controls['Address'].setValue(null);
                this.fg.controls['Address'].updateValueAndValidity();
                this.fg.controls['AccountNumber'].setValue(null);
                this.fg.controls['AccountNumber'].updateValueAndValidity();
            }
            else if (obj.Name.length == 0) {
                this.fg.controls['Name'].setValue(null);
                this.fg.controls['Name'].updateValueAndValidity();
            }
            else if (obj.Address == 0) {
                this.fg.controls['Address'].setValue(null);
                this.fg.controls['Address'].updateValueAndValidity();
            }
            else if (obj.AccountNumber == 0) {
                this.fg.controls['AccountNumber'].setValue(null);
                this.fg.controls['AccountNumber'].updateValueAndValidity();
            }
            else if (this.fg.value.price < 1) {
                this.toastService.create("Price must be greater then zero", "danger");
            }
            else if (this.fg.value.DeliveryRadius < 10) {
                this.toastService.create("radius must be be 10 or higher", "danger");
                return false;
            }
            else if (this.fg.value.Logo == null) {
                this.toastService.create("Please upload the shop photo", 'danger');
            }
            else {
                const loading = yield this.loadingController.create({ message: "Loading" });
                yield loading.present();
                yield this.shopservice.UpdateShop(this.id, this.fg.value).subscribe(res => {
                    console.log(res, "shop");
                    loading.dismiss();
                    this.toastService.create("Successfully updated", "success");
                    this.router.navigate(['shopowner/shops']);
                }, err => {
                    loading.dismiss();
                    this.toastService.create(err, "danger");
                });
            }
        });
    }
    GetBankList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.shopservice.GetBank().subscribe(res => {
                loading.dismiss();
                if (res) {
                    console.log(res);
                    this.banklist = res;
                }
                else {
                    loading.dismiss();
                    this.toastService.create(res.Message, "danger");
                }
            }, err => {
                loading.dismiss();
                this.toastService.create(err, "danger");
            });
        });
    }
    getShop(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.shopservice.GetShop(id).subscribe(res => {
                loading.dismiss();
                if (res) {
                    // console.log(res);
                    this.latitude = res.latitude;
                    this.longitude = res.longitude;
                    this.fg.controls['Id'].setValue(res.id);
                    this.fg.controls['Name'].setValue(res.name);
                    // this.fg.controls['GroupId'].setValue(res.groupId);
                    // this.fg.value.GroupId=res.groupId;
                    this.GroupId = (res.groupId);
                    this.fg.controls['UserId'].setValue(res.userId);
                    this.fg.controls['Contact'].setValue(res.contact);
                    this.fg.controls['Latitude'].setValue(res.latitude);
                    this.fg.controls['Longitude'].setValue(res.longitude);
                    this.fg.controls['DeliveryRadius'].setValue(res.deliveryRadius);
                    this.fg.controls['NDN_Number'].setValue(res.ndN_Number);
                    this.fg.controls['Address'].setValue(res.address);
                    this.AccountType = (res.accountType);
                    this.BankName = (res.bankName);
                    //  this.fg.controls['AccountType'].setValue(res.accountType);
                    //this.fg.controls['BankName'].setValue(res.bankName);
                    this.fg.controls['AccountNumber'].setValue(res.accountNumber);
                    this.fg.controls['IsDisabled'].setValue(res.isDisabled);
                    this.fg.controls['IsVerified'].setValue(res.isVerified);
                    this.fg.controls['Logo'].setValue(res.logo);
                    //  this.fg.controls['Banner'].setValue(res.banner);
                    this.loadMap();
                    //  this.ngOnInit();
                }
                else {
                    loading.dismiss();
                    this.toastService.create(res.Message, "danger");
                }
            }, err => {
                loading.dismiss();
                this.toastService.create(err, "danger");
            });
        });
    }
    uploadPhoto(type) {
        this.fileChooser.open().then((uri) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(uri);
            yield this.filePath.resolveNativePath(uri).then(filePath => {
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
                    this.uploadinglogo = true;
                    this.file.resolveLocalFilesystemUrl(filePath).then(fileInfo => {
                        let files = fileInfo;
                        files.file((success) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            //this.fileType   = success.type;
                            if (success.size < 204800) {
                                let filesName = success.name;
                                console.log(filesName);
                                let options = {
                                    fileName: filesName
                                };
                                const fileTransfer = this.transfer.create();
                                yield fileTransfer.upload(uri, src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].BASE_URL + 'upload', options)
                                    .then((data) => {
                                    // success
                                    // console.log(data);
                                    this.toastService.create("successfully Uploaded");
                                    this.uploadinglogo = false;
                                    let dbpath = JSON.parse(data.response);
                                    this.fg.value.Logo = dbpath.dbPath;
                                    this.ref.detectChanges();
                                    //console.log(this.fg1.value.MonogramImage);
                                }, (err) => {
                                    this.uploadinglogo = false;
                                    this.toastService.create("Error", "danger");
                                    this.ref.detectChanges();
                                    console.log(err);
                                    // error
                                });
                            }
                            else {
                                this.uploadinglogo = false;
                                this.toastService.create("File size must be less than 200 kb", "danger");
                            }
                        }));
                    }, err => {
                        console.log(err);
                        throw err;
                    });
                }
            }, err => {
                console.log(err);
                throw err;
            });
        }), err => {
            console.log(err);
            throw err;
        });
    }
};
EditShopPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
    { type: src_app_services_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_11__["FileChooser"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__["FilePath"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_14__["FileTransfer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", { static: true })
], EditShopPage.prototype, "mapElement", void 0);
EditShopPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addshop',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editshop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/edit/editshop.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editshop.page.scss */ "./src/app/shopOwner/shop/edit/editshop.page.scss")).default]
    })
], EditShopPage);



/***/ })

}]);
//# sourceMappingURL=edit-editshop-module-es2015.js.map