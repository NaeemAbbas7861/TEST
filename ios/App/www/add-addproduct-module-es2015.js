(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-addproduct-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/product/add/addproduct.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/product/add/addproduct.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button  style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\"  style=\"color: black;\"> Add Product</ion-title>\r\n    <ion-buttons slot=\"end\" >\r\n      <ion-back-button  style=\"color: black;\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <ion-grid>\r\n  <form [formGroup]=\"fg\">\r\n  <ion-row >\r\n    <ion-col>\r\n  \r\n      <ion-label for=\"Title\" position=\"floating\">Product Name</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Product Name\" formControlName=\"Title\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.Name\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Title').hasError(validation.type) && (fg.get('Title').dirty || fg.get('Title').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n \r\n  <ion-row class=\"ion-padding-vertical\">\r\n    <ion-col>\r\n      <ion-label position=\"floating\"  >Description</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Description must be 100 character\" formControlName=\"Description\" class=\"input ion-padding-horizontal\" minlength=\"100\"  ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.Description\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Description').hasError(validation.type) && (fg.get('Description').dirty && fg.get('Description').minlength  ||  fg.get('Description').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n         \r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-padding-vertical\">\r\n    <ion-col>\r\n      <ion-label  position=\"floating\">Product Code</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"ProductCode\" formControlName=\"ProductCode\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.ProductCode\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('ProductCode').hasError(validation.type) && (fg.get('ProductCode').dirty || fg.get('ProductCode').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-padding-vertical\">\r\n    <ion-col>\r\n      <ion-label  position=\"floating\" >Price</ion-label>\r\n      <ion-input type=\"number\" min=\"0\" placeholder=\"Price\"  formControlName=\"Price\" class=\"input ion-padding-horizontal\" oninput=\"this.value = Math.abs(this.value)\" required ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.Price\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Price').hasError(validation.type) && (fg.get('Price').dirty || fg.get('Price').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-label  position=\"floating\">Discount(%)</ion-label>\r\n      <ion-input type=\"number\" placeholder=\"Discount (optional)\"  min=\"0\"  formControlName=\"Discount\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.Discount\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Discount').hasError(validation.type) && (fg.get('Discount').dirty &&  fg.get('Discount').max || fg.get('Discount').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n \r\n  <ion-row class=\"ion-padding-vertical\"> \r\n    <ion-col>\r\n      <ion-label  position=\"floating\">Quantity</ion-label>\r\n      <ion-input type=\"number\" placeholder=\"Stock\" min=\"0\" formControlName=\"Quantity\" class=\"input ion-padding-horizontal\" oninput=\"this.value = Math.abs(this.value)\" required ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.ProductCode\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Quantity').hasError(validation.type) && (fg.get('Quantity').dirty || fg.get('Quantity').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-label  position=\"floating\">Weight</ion-label>\r\n      <ion-input type=\"number\" placeholder=\"Weight (optional)\" min=\"0\" formControlName=\"Weight\" class=\"input ion-padding-horizontal\"  oninput=\"this.value = Math.abs(this.value)\"  ></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-padding-vertical\">\r\n    <!-- <ion-col>\r\n      <ion-label  position=\"floating\">Unit</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"if available kg,m\" formControlName=\"Unit\" class=\"input ion-padding-horizontal\" pattern=\"[A-Za-z]+\" ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.Unit\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Unit').hasError(validation.type)  && (fg.get('Unit').dirty   && fg.get('Unit').pattern  || fg.get('Unit').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col> -->\r\n    <ion-col>\r\n          <ion-label  position=\"floating\">Unit</ion-label>\r\n          <ion-select value=\"Kilogram\" formControlName=\"Unit\"  class=\"input ion-padding-horizontal\">\r\n            <ion-select-option value=\"Kilogram\">Kilogram</ion-select-option>\r\n            <ion-select-option value=\"Meter\"> Meter</ion-select-option>\r\n            <ion-select-option value=\"Liter\"> Liter</ion-select-option>\r\n            <ion-select-option value=\"Ampere\">Ampere</ion-select-option>\r\n            <ion-select-option value=\"Other\">Other</ion-select-option>\r\n          </ion-select>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Unit\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('Unit').hasError(validation.type)  && (fg.get('Unit').dirty   && fg.get('Unit').pattern  || fg.get('Unit').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-label  position=\"floating\">Dimension</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Dimension (optional)\" formControlName=\"Dimension\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-item>\r\n      <ion-label position=\"floating\">Group</ion-label>\r\n     <ion-select [(ngModel)]=\"classification\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"output()\">\r\n       <ion-select-option *ngFor =\"let cat of categorys\" [value]=\"cat\">{{cat.name}}</ion-select-option>\r\n     </ion-select>\r\n    </ion-item>\r\n    </ion-col>\r\n\r\n    <ion-col>\r\n      <ion-item>\r\n      <ion-label position=\"floating\">Brand </ion-label>\r\n     <ion-select formControlName=\"ClassificationId\">\r\n       <ion-select-option *ngFor =\"let cat of classification.classifications\" [value]=\"cat.id\">{{cat.name}}</ion-select-option>\r\n     </ion-select>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.ClassificationId\">\r\n        <div class=\"error-message\"\r\n          *ngIf=\"fg.get('ClassificationId').hasError(validation.type) && (fg.get('ClassificationId').dirty || fg.get('ClassificationId').touched)\">\r\n          <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n   <ion-col>\r\n      <ion-button expand=\"block\"   color=\"mycolor1\" (click)=uploadPhoto()><strong class=\"white ion-text-capitalize\">Add Image</strong></ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-spinner  class=\"ion-justify-content-center\" *ngIf=\"uploading\" color=\"primary\"></ion-spinner>\r\n  <ion-slides  *ngIf = \"Images\" pager=\"true\" [options]=\"slideOpts\" >\r\n    <ion-slide *ngFor=\"let i of Images; let v = index\">\r\n      <ion-img class=\"image\" [src]=\"resourceURL + i.path\"  ></ion-img>\r\n      <button  expand=\"block\" size=\"large\"  style=\"height: 30px; width: 80px; font-size: medium; font-style: initial; color: mycolor1;\" color=\"mycolor1\" (click)=\"deleteImage(v)\">X</button>\r\n      <!-- <div class=\"product-image-overlay\"></div> -->\r\n    </ion-slide>\r\n  </ion-slides>\r\n  \r\n\r\n  <!-- <ion-row >\r\n    <ion-col>\r\n      <ion-label></ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n -->\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button [disabled]=\"!fg.valid\"  expand=\"block\"  (click)=\"AddProduct()\" color=\"mycolor1\"><strong class=\"white\">Add</strong></ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </form>\r\n</ion-grid>\r\n</ion-content>");

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

/***/ "./src/app/shopOwner/shop/product/add/addproduct.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shopOwner/shop/product/add/addproduct.module.ts ***!
  \*****************************************************************/
/*! exports provided: AddProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPageModule", function() { return AddProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addproduct_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addproduct.page */ "./src/app/shopOwner/shop/product/add/addproduct.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */










let AddProductPageModule = class AddProductPageModule {
};
AddProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _addproduct_page__WEBPACK_IMPORTED_MODULE_5__["AddProductPage"]
                }
            ])
        ],
        declarations: [_addproduct_page__WEBPACK_IMPORTED_MODULE_5__["AddProductPage"]
        ],
        providers: [_ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_7__["FileChooser"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__["FilePath"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"]],
        entryComponents: []
    })
], AddProductPageModule);



/***/ }),

/***/ "./src/app/shopOwner/shop/product/add/addproduct.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shopOwner/shop/product/add/addproduct.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgdiv {\n  width: 80%;\n  height: 60%;\n}\n\n.img1 {\n  width: 100%;\n  height: 100%;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.center {\n  text-align: center;\n}\n\n.image {\n  border-color: black;\n  width: 320px;\n  height: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcE93bmVyL3Nob3AvcHJvZHVjdC9hZGQvRDpcXGdpdGt1aWNrc2F2ZVxcbXVsdGlzdG9yZS1tb2JpbGUtYXBwL3NyY1xcYXBwXFxzaG9wT3duZXJcXHNob3BcXHByb2R1Y3RcXGFkZFxcYWRkcHJvZHVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3BPd25lci9zaG9wL3Byb2R1Y3QvYWRkL2FkZHByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUk7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7QUNDUjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSx3QkFBQTtBQ0lKOztBRERBO0VBQ0ksa0JBQUE7QUNJSjs7QURGQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3Nob3BPd25lci9zaG9wL3Byb2R1Y3QvYWRkL2FkZHByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbWdkaXZ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6NjAlO1xyXG59XHJcbi5pbWcxe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcbi5zbWFsbCB7XHJcbiAgICBhe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xyXG59XHJcbi53aGl0ZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5sb2dvIHtcclxuICAgIHdpZHRoOiAxLjI1ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5pbWFnZXtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcbiIsIi5pbWdkaXYge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuLmltZzEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc21hbGwgYSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cblxuLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2Uge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogMTgwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shopOwner/shop/product/add/addproduct.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/shopOwner/shop/product/add/addproduct.page.ts ***!
  \***************************************************************/
/*! exports provided: AddProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPage", function() { return AddProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shop.service */ "./src/app/services/shop.service.ts");
/* harmony import */ var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");














//import { AnyTxtRecord } from 'dns';
// import { ImagePicker , ImagePickerOptions } from '@ionic-native/image-picker/ngx';
let AddProductPage = class AddProductPage {
    constructor(router, shopservice, groupservice, loadingController, toastService, formBuilder, route, fileChooser, file, filePath, transfer, ref
    // private imagePicker: ImagePicker
    ) {
        this.router = router;
        this.shopservice = shopservice;
        this.groupservice = groupservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.fileChooser = fileChooser;
        this.file = file;
        this.filePath = filePath;
        this.transfer = transfer;
        this.ref = ref;
        this.classification = [];
        this.shopId = this.route.snapshot.paramMap.get('id');
        this.groupId = this.route.snapshot.paramMap.get('groupId');
        this.resourceURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].RESOURCE_URL;
        this.uploading = false;
        this.Images = [];
        this.slideOpts = {
            effect: 'flip'
        };
        this.validation_messages = {
            Name: [{ type: "required", message: "Product Name is required." },
                { type: "pattern", message: "space is not allowed to start." }
            ],
            Description: [
                { type: "required", message: "Description is required." },
                { type: "minlength", message: "Description must be 100 character ." }
            ],
            email: [
                { type: "required", message: "Email is required." },
                { type: "pattern", message: "Please enter a valid email." }
            ],
            Price: [
                { type: "required", message: "Price is required." }
            ],
            ProductCode: [
                { type: "required", message: "Field is required." },
            ],
            Type: [
                { type: "required", message: "Brand  is required." },
            ],
            Unit: [
                { type: "required", message: "Unit is required." },
            ],
            Discount: [
                { type: "required", message: "Discount is required" },
                { type: "max", message: "Discount is 1 to 100%." },
            ]
        };
    }
    ngOnInit() {
        this.fg = this.formBuilder.group({
            'Title': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            'Description': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(100)]],
            'Price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'ProductCode': [null],
            'Quantity': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'Weight': [null],
            'Unit': [null],
            'Dimension': [null],
            'Discount': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(100)]],
            'IsDisabled': [false],
            'IsAllowed': [true],
            'IsOutOfStock': [false],
            'IsNew': [true],
            'IsSale': [false],
            'ClassificationId': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            'ShopId': this.shopId,
            'Images': [null]
        });
    }
    ionViewDidEnter() {
        this.getGroups(this.groupId);
    }
    preventDefault(e) {
        e.preventDefault();
    }
    uploadPhoto() {
        this.fileChooser.open().then((uri) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(uri);
            yield this.filePath.resolveNativePath(uri).then(filePath => {
                //this.filesPath = filePath;
                this.uploading = true;
                this.file.resolveLocalFilesystemUrl(filePath).then(fileInfo => {
                    let files = fileInfo;
                    files.file((success) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        //this.fileType   = success.type;
                        let filesName = success.name;
                        console.log(filesName);
                        let options = {
                            fileName: filesName
                        };
                        const fileTransfer = this.transfer.create();
                        yield fileTransfer.upload(uri, src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].BASE_URL + 'upload', options)
                            .then((data) => {
                            this.uploading = false;
                            this.toastService.create("successfully Uploaded");
                            let dbpath = JSON.parse(data.response);
                            //this.fg.value.Banner = dbpath.dbPath;
                            let obj = { "path": dbpath.dbPath };
                            this.Images.push(obj);
                            this.ref.detectChanges();
                        }, (err) => {
                            console.log(err);
                            // error
                        });
                    }));
                }, err => {
                    console.log(err);
                    throw err;
                });
            }, err => {
                console.log(err);
                throw err;
            });
        }), err => {
            console.log(err);
            throw err;
        });
    }
    deleteImage(index) {
        this.Images.splice(index, 1);
    }
    AddProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(this.fg.value)
            console.log(this.fg.value.Images);
            let obj = this.fg.value;
            obj.Title = obj.Title.trim();
            obj.Description = obj.Description.trim();
            if (obj.Title.length == 0 && obj.Description.length == 0) {
                this.fg.controls['Title'].setValue(null);
                this.fg.controls['Title'].updateValueAndValidity();
                this.fg.controls['Description'].setValue(null);
                this.fg.controls['Description'].updateValueAndValidity();
            }
            else if (obj.Title.length == 0) {
                this.fg.controls['Title'].setValue(null);
                this.fg.controls['Title'].updateValueAndValidity();
            }
            else if (obj.Description.length == 0) {
                this.fg.controls['Description'].setValue(null);
                this.fg.controls['Description'].updateValueAndValidity();
            }
            else if (this.fg.value.Price <= 0) {
                this.fg.controls['Price'].updateValueAndValidity();
                this.toastService.create("Price must be greater then zero", "danger");
            }
            else if (this.fg.value.Quantity <= 0) {
                this.fg.controls['Quantity'].updateValueAndValidity();
                this.toastService.create("Quantity must be greater then zero", "danger");
            }
            else {
                const loading = yield this.loadingController.create({ message: "Loading" });
                yield loading.present();
                yield this.shopservice.PostProduct(this.fg.value).subscribe(res => {
                    loading.dismiss();
                    this.toastService.create("Successfully Added", "success");
                    this.router.navigate(['shopowner/shops/' + this.shopId + '/product']);
                    console.log(res);
                }, err => {
                    loading.dismiss();
                    this.toastService.create(err, "danger");
                });
            }
        });
    }
    getGroups(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.groupservice.GetSingleGroup(id).subscribe(res => {
                loading.dismiss();
                if (res) {
                    console.log(res);
                    this.categorys = res.categories;
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
    output() {
        console.log(this.classification);
        this.fg.controls['ClassificationId'].setValue(null);
    }
};
AddProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
    { type: src_app_services_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__["FileChooser"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AddProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addproduct',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addproduct.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/product/add/addproduct.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addproduct.page.scss */ "./src/app/shopOwner/shop/product/add/addproduct.page.scss")).default]
    })
], AddProductPage);



/***/ })

}]);
//# sourceMappingURL=add-addproduct-module-es2015.js.map