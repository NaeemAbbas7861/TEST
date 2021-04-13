(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-editprodcut-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/return-product/edit/editprodcut.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/return-product/edit/editprodcut.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"dark\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" >\n      <ion-back-button text=\"\" color=\"dark\" icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"dark\" class=\"ion-text-center\">Return Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-text><h3  class=\"title ion-no-margin ion-margin-bottom ion-text-center\">ADMIN RETURN PRODUCT</h3></ion-text>\n \n  <ion-grid >\n  <form [formGroup]=\"fg\">\n  <ion-row >\n    <ion-col>\n      <ion-input type=\"text\" placeholder=\"Brand Name\"  formControlName=\"Name\" class=\"input ion-padding-horizontal\" ></ion-input>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.Name\">\n          <div class=\"error-message\"\n            *ngIf=\"fg.get('Name').hasError(validation.type) && (fg.get('Name').dirty || fg.get('Name').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col>\n      <ion-input type=\"number\" placeholder=\"Price\"  formControlName=\"Price\" class=\"input ion-padding-horizontal\" ></ion-input>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.Price\">\n          <div class=\"error-message\"\n            *ngIf=\"fg.get('Price').hasError(validation.type) && (fg.get('Price').dirty || fg.get('Price').touched)\">\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-button expand=\"block\" color=\"primary\" (click)=\"EditReturnProduct()\"  color=\"mycolor1\"><strong class=\"white\">Update</strong></ion-button>\n    </ion-col>\n  </ion-row>\n\n  </form>\n  \n</ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let OrderService = class OrderService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    // private readonly API_PRODUCT = `${environment.BASE_URL}product/`
    constructor(http) {
        super(http);
        this.http = http;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.API_ORDER = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}order/`;
        this.API_EARNING = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}earning/`;
        this.API_RETURNDISCOUNT = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}returnedproduct/`;
    }
    GetCustomerOrders(id) {
        const url = `${this.API_ORDER}user/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    Getreturnedproduct() {
        const url = `${this.API_RETURNDISCOUNT}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetReturnedProductbyId(id) {
        const url = `${this.API_RETURNDISCOUNT}${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    DeleteProduct(id) {
        const url = `${this.API_RETURNDISCOUNT}${id}`;
        return this.http.delete(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    postreturnedProduct(data) {
        const url = `${this.API_RETURNDISCOUNT}`;
        return this.http.post(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    EditProduct(id, data) {
        const url = `${this.API_RETURNDISCOUNT}${id}`;
        return this.http.put(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetOrderItems(id) {
        const url = `${this.API_ORDER}${id}/orderitems`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    Allorders() {
        const url = `${this.API_ORDER}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    riderDashboard(id) {
        const url = `${this.API_ORDER}rider/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetOrder(id) {
        const url = `${this.API_ORDER}${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetCustomerOrder(id) {
        const url = `${this.API_ORDER}customer/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetUserShopOrders(id) {
        // const url = `${this.API_ORDER}usershop/${id}`;
        const url = `${this.API_ORDER}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetNewUserShopOrders(id) {
        const url = `${this.API_ORDER}usershop/${id}/0`;
        ///const url = `${this.API_ORDER}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetPendingUserShopOrders(id) {
        const url = `${this.API_ORDER}usershop/${id}/1`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetCompleteUserShopOrders(id) {
        const url = `${this.API_ORDER}usershop/${id}/2`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetCancelUserShopOrders(id) {
        const url = `${this.API_ORDER}usershop/${id}/3`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetNewRiderOrders(lat, lng) {
        const url = `${this.API_ORDER}${lat}/${lng}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetRiderOrdersByStatus(id, status) {
        const url = `${this.API_ORDER}rider/${id}/${status}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    PostOrder(data) {
        const url = `${this.API_ORDER}`;
        return this.http.post(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    PutOrder(id, data) {
        const url = `${this.API_ORDER}${id}`;
        return this.http.put(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    MarksReceived(id) {
        const url = `${this.API_ORDER}${id}/markreceived`;
        return this.http.put(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    AcceptOrder(id, riderid, status) {
        const url = `${this.API_ORDER}${id}/${riderid}/${status}`;
        return this.http.put(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    CancelOrder(id, status) {
        const url = `${this.API_ORDER}${id}/changestatus/${status}`;
        return this.http.put(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    OrderCompletionCode(id, ordercode, status) {
        const url = `${this.API_ORDER}complete/${id}/${ordercode}/${status}`;
        return this.http.put(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetEarning(date) {
        const url = `${this.API_EARNING}superadmin/${date}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetEarningDatetoDate(date, date1) {
        const url = `${this.API_EARNING}superadmin/${date}/${date1}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    DownloadEarningDatetoDate(date, date1) {
        const url = `${this.API_EARNING}downloadcsv/${date}/${date1}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetShopEarning(id, date) {
        const url = `${this.API_EARNING}shopowner/${id}/${date}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    ChangePaymentStatus(id, status, panelty) {
        const url = `${this.API_ORDER}PaymentStatus/${id}/${status}/${panelty}`;
        return this.http.put(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ToastService = class ToastService {
    constructor(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    create(message, color = "success", ok = false, duration = 3000) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.toast) {
                this.toast.dismiss();
            }
            this.toast = yield this.toastCtrl.create({
                message,
                color: color,
                duration: ok ? null : duration,
                position: 'bottom',
            });
            this.toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "./src/app/superAdmin/return-product/edit/editprodcut.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/superAdmin/return-product/edit/editprodcut.module.ts ***!
  \**********************************************************************/
/*! exports provided: ReturnEditprodcutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnEditprodcutPageModule", function() { return ReturnEditprodcutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _editprodcut_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editprodcut.page */ "./src/app/superAdmin/return-product/edit/editprodcut.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */






let ReturnEditprodcutPageModule = class ReturnEditprodcutPageModule {
};
ReturnEditprodcutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _editprodcut_page__WEBPACK_IMPORTED_MODULE_5__["ReturnprodcutPage"]
                }
            ])
        ],
        declarations: [_editprodcut_page__WEBPACK_IMPORTED_MODULE_5__["ReturnprodcutPage"]],
        entryComponents: []
    })
], ReturnEditprodcutPageModule);



/***/ }),

/***/ "./src/app/superAdmin/return-product/edit/editprodcut.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/superAdmin/return-product/edit/editprodcut.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgdiv {\n  width: 80%;\n  height: 60%;\n}\n\n.img1 {\n  width: 100%;\n  height: 100%;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi9yZXR1cm4tcHJvZHVjdC9lZGl0L0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcc3VwZXJBZG1pblxccmV0dXJuLXByb2R1Y3RcXGVkaXRcXGVkaXRwcm9kY3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3VwZXJBZG1pbi9yZXR1cm4tcHJvZHVjdC9lZGl0L2VkaXRwcm9kY3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVJO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0FDQ1I7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksd0JBQUE7QUNJSjs7QUREQTtFQUNJLGtCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9zdXBlckFkbWluL3JldHVybi1wcm9kdWN0L2VkaXQvZWRpdHByb2RjdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbWdkaXZ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6NjAlO1xyXG59XHJcbi5pbWcxe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcbi5zbWFsbCB7XHJcbiAgICBhe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xyXG59XHJcbi53aGl0ZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5sb2dvIHtcclxuICAgIHdpZHRoOiAxLjI1ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59IiwiLmltZ2RpdiB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uaW1nMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zbWFsbCBhIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMS4yNWVtICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/superAdmin/return-product/edit/editprodcut.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/superAdmin/return-product/edit/editprodcut.page.ts ***!
  \********************************************************************/
/*! exports provided: ReturnprodcutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnprodcutPage", function() { return ReturnprodcutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








// import { ImagePicker , ImagePickerOptions } from '@ionic-native/image-picker/ngx';

let ReturnprodcutPage = class ReturnprodcutPage {
    constructor(router, route, orderservice, loadingController, toastService, formBuilder, http
    // private imagePicker: ImagePicker
    ) {
        this.router = router;
        this.route = route;
        this.orderservice = orderservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.id = this.route.snapshot.paramMap.get('id');
        this.resourceURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].RESOURCE_URL;
        this.validation_messages = {
            BrandName: [{ type: "required", message: "Product Name is required." }],
            Price: [{ type: "required", message: "Price is required." }],
        };
    }
    ngOnInit() {
        this.fg = this.formBuilder.group({
            'id': [this.id],
            'Name': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            'Price': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[0-9]*$")]],
        });
    }
    ionViewDidEnter() {
        this.GetProduct(this.id);
    }
    preventDefault(e) {
        e.preventDefault();
    }
    GetProduct(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.orderservice.GetReturnedProductbyId(id).subscribe(res => {
                loading.dismiss();
                if (res) {
                    this.group = res;
                    console.log(res);
                    this.fg.controls['Name'].setValue(this.group.name);
                    this.fg.controls['Price'].setValue(this.group.price);
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
    // async EditReturnProduct()
    // {
    //   const loading = await this.loadingController.create({ message: "Loading" });
    //   await loading.present();
    //   await this.orderservice.EditProduct(this.id, this.fg.value).subscribe(
    //     res => {
    //       loading.dismiss();
    //       this.toastService.create("Successfully Edit", "success");
    //       this.router.navigate(['superadmin']);
    //     },
    //     err => {
    //       loading.dismiss();
    //       this.toastService.create(err, "danger");
    //     }
    //   );
    // }
    EditReturnProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let obj = this.fg.value;
            obj.Name = obj.Name.trim();
            if (obj.Name.length == 0) {
                this.fg.controls['Name'].setValue(null);
                this.fg.controls['Name'].updateValueAndValidity();
            }
            else {
                const loading = yield this.loadingController.create({ message: "Loading" });
                yield loading.present();
                yield this.orderservice.EditProduct(this.id, this.fg.value).subscribe(res => {
                    loading.dismiss();
                    this.toastService.create("Successfully Updated", "success");
                    this.router.navigate(['superadmin/return-product']);
                }, err => {
                    loading.dismiss();
                    this.toastService.create("Name and Price is required", "danger");
                });
            }
        });
    }
};
ReturnprodcutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
ReturnprodcutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editprodcut',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editprodcut.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/return-product/edit/editprodcut.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editprodcut.page.scss */ "./src/app/superAdmin/return-product/edit/editprodcut.page.scss")).default]
    })
], ReturnprodcutPage);



/***/ })

}]);
//# sourceMappingURL=edit-editprodcut-module-es2015.js.map