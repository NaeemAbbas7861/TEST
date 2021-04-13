(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["earning-earning-module"],{

/***/ "./node_modules/@ionic-native/downloader/__ivy_ngcc__/ngx/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic-native/downloader/__ivy_ngcc__/ngx/index.js ***!
  \*************************************************************************/
/*! exports provided: NotificationVisibility, Downloader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationVisibility", function() { return NotificationVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Downloader", function() { return Downloader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var NotificationVisibility;
(function (NotificationVisibility) {
    NotificationVisibility[NotificationVisibility["Visible"] = 0] = "Visible";
    NotificationVisibility[NotificationVisibility["VisibleNotifyCompleted"] = 1] = "VisibleNotifyCompleted";
    NotificationVisibility[NotificationVisibility["VisibilityHidden"] = 2] = "VisibilityHidden";
    NotificationVisibility[NotificationVisibility["VisibleNotifyOnlyCompletion"] = 3] = "VisibleNotifyOnlyCompletion";
})(NotificationVisibility || (NotificationVisibility = {}));
var Downloader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Downloader, _super);
    function Downloader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Downloader.prototype.download = function (request) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "download", {}, arguments); };
    Downloader.pluginName = "Downloader";
    Downloader.plugin = "integrator-cordova-plugin-downloader";
    Downloader.pluginRef = "cordova.plugins.Downloader";
    Downloader.repo = "https://github.com/Luka313/integrator-cordova-plugin-downloader.git";
    Downloader.platforms = ["Android"];
Downloader.ɵfac = function Downloader_Factory(t) { return ɵDownloader_BaseFactory(t || Downloader); };
Downloader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Downloader, factory: function (t) { return Downloader.ɵfac(t); } });
var ɵDownloader_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Downloader);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Downloader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return Downloader;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZG93bmxvYWRlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFeEUsTUFBTSxDQUFOLElBQVksc0JBS1g7QUFMRCxXQUFZLHNCQUFzQjtBQUNqQyxJQUFDLHlFQUFXLENBQUE7QUFBQyxJQUNaLHVHQUEwQixDQUFBO0FBQUMsSUFDM0IsMkZBQW9CLENBQUE7QUFBQyxJQUNyQixpSEFBK0IsQ0FBQTtBQUNqQyxDQUFDLEVBTFcsc0JBQXNCLEtBQXRCLHNCQUFzQixRQUtqQztBQUNEO0FBRWEsSUF1R21CLDhCQUFpQjtBQUFDO0FBRTlCO0FBQ2I7QUFBTSxJQUdYLDZCQUFRLGFBQUMsT0FBd0I7QUFJbEI7QUFBMEM7QUFBZ0U7QUFBeUQ7QUFBNkY7SUFWcFEsVUFBVSx3QkFEdEIsVUFBVSxFQUFFLFFBQ0EsVUFBVTs7Ozs7MEJBQUU7QUFBQyxxQkFsSDFCO0FBQUUsRUFrSDhCLGlCQUFpQjtBQUNoRCxTQURZLFVBQVU7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgZW51bSBOb3RpZmljYXRpb25WaXNpYmlsaXR5IHtcbiAgVmlzaWJsZSA9IDAsXG4gIFZpc2libGVOb3RpZnlDb21wbGV0ZWQgPSAxLFxuICBWaXNpYmlsaXR5SGlkZGVuID0gMixcbiAgVmlzaWJsZU5vdGlmeU9ubHlDb21wbGV0aW9uID0gMyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb3dubG9hZEh0dHBIZWFkZXIge1xuICBoZWFkZXI6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXN0aW5hdGlvbkRpcmVjdG9yeSB7XG4gIGRpclR5cGU6IHN0cmluZztcbiAgc3ViUGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvd25sb2FkUmVxdWVzdCB7XG4gIC8qKlxuICAgKiBMb2NhdGlvbiBvZiB0aGUgcmVzb3VyY2UgdG8gZG93bmxvYWRcbiAgICovXG4gIHVyaTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHRpdGxlIG9mIHRoaXMgZG93bmxvYWQsIHRvIGJlIGRpc3BsYXllZCBpbiBub3RpZmljYXRpb25zIChpZiBlbmFibGVkKS5cbiAgICogSWYgbm8gdGl0bGUgaXMgZ2l2ZW4sIGEgZGVmYXVsdCBvbmUgd2lsbCBiZSBhc3NpZ25lZCBiYXNlZCBvbiB0aGUgZG93bmxvYWQgZmlsZW5hbWUsIG9uY2UgdGhlIGRvd25sb2FkIHN0YXJ0cy5cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogU2V0IGEgZGVzY3JpcHRpb24gb2YgdGhpcyBkb3dubG9hZCwgdG8gYmUgZGlzcGxheWVkIGluIG5vdGlmaWNhdGlvbnMgKGlmIGVuYWJsZWQpXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFNldCB0aGUgTUlNRSBjb250ZW50IHR5cGUgb2YgdGhpcyBkb3dubG9hZC4gVGhpcyB3aWxsIG92ZXJyaWRlIHRoZSBjb250ZW50IHR5cGUgZGVjbGFyZWQgaW4gdGhlIHNlcnZlcidzIHJlc3BvbnNlLlxuICAgKi9cbiAgbWltZVR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciB0aGlzIGRvd25sb2FkIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIHN5c3RlbSdzIERvd25sb2FkcyBVSS4gVHJ1ZSBieSBkZWZhdWx0LlxuICAgKi9cbiAgdmlzaWJsZUluRG93bmxvYWRzVWk/OiBib29sZWFuO1xuICAvKipcbiAgICogQ29udHJvbCB3aGV0aGVyIGEgc3lzdGVtIG5vdGlmaWNhdGlvbiBpcyBwb3N0ZWQgYnkgdGhlIGRvd25sb2FkIG1hbmFnZXIgd2hpbGUgdGhpcyBkb3dubG9hZCBpcyBydW5uaW5nIG9yIHdoZW4gaXQgaXMgY29tcGxldGVkLlxuICAgKi9cbiAgbm90aWZpY2F0aW9uVmlzaWJpbGl0eT86IE5vdGlmaWNhdGlvblZpc2liaWxpdHk7XG4gIC8qKlxuICAgKiBTZXQgdGhlIGxvY2FsIGRlc3RpbmF0aW9uIGZvciB0aGUgZG93bmxvYWRlZCBmaWxlIHRvIGEgcGF0aCB3aXRoaW4gdGhlIGFwcGxpY2F0aW9uJ3MgZXh0ZXJuYWwgZmlsZXMgZGlyZWN0b3J5XG4gICAqL1xuICBkZXN0aW5hdGlvbkluRXh0ZXJuYWxGaWxlc0Rpcj86IERlc3RpbmF0aW9uRGlyZWN0b3J5O1xuICAvKipcbiAgICogU2V0IHRoZSBsb2NhbCBkZXN0aW5hdGlvbiBmb3IgdGhlIGRvd25sb2FkZWQgZmlsZSB0byBhIHBhdGggd2l0aGluIHRoZSBwdWJsaWMgZXh0ZXJuYWwgc3RvcmFnZSBkaXJlY3RvcnlcbiAgICovXG4gIGRlc3RpbmF0aW9uSW5FeHRlcm5hbFB1YmxpY0Rpcj86IERlc3RpbmF0aW9uRGlyZWN0b3J5O1xuICAvKipcbiAgICogU2V0IHRoZSBsb2NhbCBkZXN0aW5hdGlvbiBmb3IgdGhlIGRvd25sb2FkZWQgZmlsZS5cbiAgICogTXVzdCBiZSBhIGZpbGUgVVJJIHRvIGEgcGF0aCBvbiBleHRlcm5hbCBzdG9yYWdlLCBhbmQgdGhlIGNhbGxpbmcgYXBwbGljYXRpb24gbXVzdCBoYXZlIHRoZSBXUklURV9FWFRFUk5BTF9TVE9SQUdFIHBlcm1pc3Npb24uXG4gICAqL1xuICBkZXN0aW5hdGlvblVyaT86IHN0cmluZztcbiAgLyoqXG4gICAqIEFkZCBhbiBIVFRQIGhlYWRlciB0byBiZSBpbmNsdWRlZCB3aXRoIHRoZSBkb3dubG9hZCByZXF1ZXN0LiBUaGUgaGVhZGVyIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cbiAgICovXG4gIGhlYWRlcnM/OiBEb3dubG9hZEh0dHBIZWFkZXJbXTtcbn1cblxuLyoqXG4gKiBAbmFtZSBEb3dubG9hZGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGlzIGRlc2lnbmVkIHRvIHN1cHBvcnQgZG93bmxvYWRpbmcgZmlsZXMgdXNpbmcgQW5kcm9pZCBEb3dubG9hZE1hbmFnZXIuXG4gKlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRG93bmxvYWRlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZG93bmxvYWRlci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvd25sb2FkZXI6IERvd25sb2FkZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqICAgIHZhciByZXF1ZXN0OiBEb3dubG9hZFJlcXVlc3QgPSB7XG4gKiAgICAgICAgICAgdXJpOiBZT1VSX1VSSSxcbiAqICAgICAgICAgICB0aXRsZTogJ015RG93bmxvYWQnLFxuICogICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAqICAgICAgICAgICBtaW1lVHlwZTogJycsXG4gKiAgICAgICAgICAgdmlzaWJsZUluRG93bmxvYWRzVWk6IHRydWUsXG4gKiAgICAgICAgICAgbm90aWZpY2F0aW9uVmlzaWJpbGl0eTogTm90aWZpY2F0aW9uVmlzaWJpbGl0eS5WaXNpYmxlTm90aWZ5Q29tcGxldGVkLFxuICogICAgICAgICAgIGRlc3RpbmF0aW9uSW5FeHRlcm5hbEZpbGVzRGlyOiB7XG4gKiAgICAgICAgICAgICAgIGRpclR5cGU6ICdEb3dubG9hZHMnLFxuICogICAgICAgICAgICAgICBzdWJQYXRoOiAnTXlGaWxlLmFwaydcbiAqICAgICAgICAgICB9XG4gKiAgICAgICB9O1xuICpcbiAqXG4gKiAgIHRoaXMuZG93bmxvYWRlci5kb3dubG9hZChyZXF1ZXN0KVxuICogICBcdFx0XHQudGhlbigobG9jYXRpb246IHN0cmluZykgPT4gY29uc29sZS5sb2coJ0ZpbGUgZG93bmxvYWRlZCBhdDonK2xvY2F0aW9uKSlcbiAqICAgXHRcdFx0LmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogTm90aWZpY2F0aW9uVmlzaWJpbGl0eVxuICogSGVhZGVyXG4gKiBEZXN0aW5hdGlvbkRpcmVjdG9yeVxuICogRG93bmxvYWRIdHRwSGVhZGVyXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRG93bmxvYWRlcicsXG4gIHBsdWdpbjogJ2ludGVncmF0b3ItY29yZG92YS1wbHVnaW4tZG93bmxvYWRlcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5Eb3dubG9hZGVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9MdWthMzEzL2ludGVncmF0b3ItY29yZG92YS1wbHVnaW4tZG93bmxvYWRlci5naXQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb3dubG9hZGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogIFN0YXJ0cyBhIG5ldyBkb3dubG9hZCBhbmQgcmV0dXJucyBsb2NhdGlvbiBvZiB0aGUgZG93bmxvYWRlZCBmaWxlIG9uIGNvbXBsZXRpb25cbiAgICogIEBwYXJhbSByZXF1ZXN0IHtEb3dubG9hZFJlcXVlc3R9XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRvd25sb2FkKHJlcXVlc3Q6IERvd25sb2FkUmVxdWVzdCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/earning/earning.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/earning/earning.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button> \r\n    </ion-buttons>\r\n    <ion-title slot = \"start\" color=\"dark\">Earning Section</ion-title>\r\n    <ion-back-button  color=\"dark\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <label  style=\"padding-left: 10%;\">Date From</label>\r\n    <label style=\"padding-left: 10%\">Date To</label>\r\n  <ion-item >\r\n    <ion-datetime displayFormat=\"DD, MM, YYYY\" [min]=\"minDate\" [max]=\"maxDate\" [(ngModel)]=\"selectDateString\" style=\"font-size: 14px;\"></ion-datetime>\r\n    <ion-datetime displayFormat=\"DD, MM, YYYY\" [min]=\"minDate\" [max]=\"maxDate\" [(ngModel)]=\"selectDateString1\"  style=\"font-size: 14px;\" ></ion-datetime>\r\n    <ion-button  slot=\"end\" color=\"mycolor1\" (click)=\"getEarning(selectDateString, selectDateString1)\" size=\"small\"  class=\"end11\"><strong >Search</strong></ion-button>\r\n  </ion-item>\r\n        <ion-card *ngIf=\"earning\">\r\n            <ion-item><ion-label> {{Month}} Earning </ion-label></ion-item>\r\n              <ion-card-content>\r\n                <p>Total Order Place: {{earning.totalOrders}}</p>\r\n                <p>Total Amount: {{earning.totalAmount}}</p>\r\n                <p>Shop Owner Amount: {{earning.shopAmount}}</p>\r\n                <p>Company Amount: {{earning.companyAmount}}</p>\r\n                <!-- <p>Shipment Charge: {{earning.companyAmount}}</p> -->\r\n              </ion-card-content>\r\n        </ion-card>\r\n      \r\n        <ion-button style=\"padding-left: 48%;\" *ngIf=\"earning\" color=\"mycolor1\" (click)=\"DownloadEarningDatetoDate(selectDateString, selectDateString1)\"><strong >Download Report</strong></ion-button>\r\n      </ion-content>");

/***/ }),

/***/ "./src/app/superAdmin/earning/earning.module.ts":
/*!******************************************************!*\
  !*** ./src/app/superAdmin/earning/earning.module.ts ***!
  \******************************************************/
/*! exports provided: EarningPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningPageModule", function() { return EarningPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _earning_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./earning.page */ "./src/app/superAdmin/earning/earning.page.ts");
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ "./node_modules/@ionic-native/downloader/__ivy_ngcc__/ngx/index.js");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */







const routes = [
    {
        path: '',
        component: _earning_page__WEBPACK_IMPORTED_MODULE_6__["EarningPage"]
    }
];
let EarningPageModule = class EarningPageModule {
};
EarningPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_earning_page__WEBPACK_IMPORTED_MODULE_6__["EarningPage"]],
        providers: [_ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_7__["Downloader"]]
    })
], EarningPageModule);



/***/ }),

/***/ "./src/app/superAdmin/earning/earning.page.scss":
/*!******************************************************!*\
  !*** ./src/app/superAdmin/earning/earning.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n  margin: 5px;\n}\n\n.btn {\n  margin: 3px;\n  padding: 5px;\n  border: 0.5px solid #b4b4b4;\n  border-radius: 6px;\n}\n\n.filter-btn {\n  padding-left: 3px;\n  font-size: 12px;\n  padding-right: 3px;\n}\n\n.view {\n  color: var(--ion-color-mytheme);\n  font-size: 12px;\n}\n\n.sep {\n  width: 100%;\n  height: 1px;\n  background-color: #d2d2d2;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 120px;\n  max-width: 120px;\n  display: inline;\n  padding: 3px 9px;\n  align-content: center !important;\n}\n\n.spon-img {\n  min-height: 100px;\n  max-height: 100px;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi9lYXJuaW5nL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcc3VwZXJBZG1pblxcZWFybmluZ1xcZWFybmluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1cGVyQWRtaW4vZWFybmluZy9lYXJuaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ09KOztBRExBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vZWFybmluZy9lYXJuaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4uYnRuIHtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4uZmlsdGVyLWJ0biB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxufVxyXG4udmlldyB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5zZXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcclxufVxyXG4uY29udGFpbmVyLW91dGVyIHsgXHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG4uY29udGFpbmVyLWlubmVyIHsgXHJcbiAgICBtaW4td2lkdGg6IDEyMHB4OyBcclxuICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNwb24taW1nIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxufSIsIi5zZWFyY2gtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDNweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNiNGI0YjQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmZpbHRlci1idG4ge1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG5cbi52aWV3IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc2VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkMmQyO1xufVxuXG4uY29udGFpbmVyLW91dGVyIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi5jb250YWluZXItaW5uZXIge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IDNweCA5cHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uc3Bvbi1pbWcge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/superAdmin/earning/earning.page.ts":
/*!****************************************************!*\
  !*** ./src/app/superAdmin/earning/earning.page.ts ***!
  \****************************************************/
/*! exports provided: EarningPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningPage", function() { return EarningPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ "./node_modules/@ionic-native/downloader/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */








let EarningPage = class EarningPage {
    constructor(menuCtrl, nav, platform, loadingController, orderservice, download, toastService) {
        this.menuCtrl = menuCtrl;
        this.nav = nav;
        this.platform = platform;
        this.loadingController = loadingController;
        this.orderservice = orderservice;
        this.download = download;
        this.toastService = toastService;
        this.selectDateString = new Date().toISOString();
        this.selectDateString1 = new Date().toISOString();
        this.minDate = new Date().toISOString();
        this.maxDate = new Date().toISOString();
        this.API_EARNING = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].BASE_URL}`;
        this.platform.ready().then(() => {
            let date = new Date();
            date.setDate(date.getDate() - 731);
            this.minDate = date.toISOString();
            // date.setDate(1);
            date = new Date();
            date.setDate(date.getDate() + 0);
            this.maxDate = date.toISOString();
            // date.setDate(1);
        });
    }
    ngOnInit() {
        // this.date= new Date();
        // this.date.setDate(1);
        // this.date=moment(this.date,"DD-MM-YYYY").format("YYYY-MM-DD");
        // console.log(this.date);
        //this.getEarning(this.date);
    }
    getEarning(date, selectDateString1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            date = moment__WEBPACK_IMPORTED_MODULE_4__(date, "YYYY-MM-DD").format("YYYY-MM-DD");
            this.selectDateString1 = moment__WEBPACK_IMPORTED_MODULE_4__(selectDateString1, "YYYY-MM-DD").format("YYYY-MM-DD");
            console.log(date, this.selectDateString1);
            if (date > this.selectDateString1) {
                this.toastService.create("Please select Date to is greater than Date From", 'danger');
            }
            else {
                const loading = yield this.loadingController.create({ message: "Loading" });
                yield loading.present();
                yield this.orderservice.GetEarningDatetoDate(date, this.selectDateString1).subscribe(res => {
                    loading.dismiss();
                    // console.log(res);
                    this.earning = res;
                    console.warn(res);
                    err => {
                        console.log(err);
                        loading.dismiss();
                    };
                });
            }
        });
    }
    DownloadEarningDatetoDate(date1, date2) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            date1 = moment__WEBPACK_IMPORTED_MODULE_4__(date1, "YYYY-MM-DD").format("YYYY-MM-DD");
            date2 = moment__WEBPACK_IMPORTED_MODULE_4__(date2, "YYYY-MM-DD").format("YYYY-MM-DD");
            console.log(date1, date2);
            console.log("https://be.kuicksave.com/api/Earning/downloadcsv/" + date1 + "/" + date2);
            if (date1 > date2) {
                this.toastService.create("Please select Date to is greater than Date From", 'danger');
            }
            else {
                var request = {
                    uri: `${this.API_EARNING}downloadcsv/${date1}/${date2}`,
                    title: 'MyDownload',
                    description: '',
                    mimeType: '',
                    visibleInDownloadsUi: true,
                    notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_6__["NotificationVisibility"].VisibleNotifyCompleted,
                    destinationInExternalFilesDir: {
                        dirType: 'Downloads',
                        subPath: 'Earning.csv',
                    }
                };
                this.download.download(request)
                    .then((location) => console.log('File downloaded at:' + location))
                    .catch((error) => console.error(error));
                window.open("https://be.kuicksave.com/api/Earning/downloadcsv/" + date1 + "/" + date2);
            }
        });
    }
};
EarningPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_6__["Downloader"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
EarningPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./earning.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/earning/earning.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./earning.page.scss */ "./src/app/superAdmin/earning/earning.page.scss")).default]
    })
], EarningPage);



/***/ })

}]);
//# sourceMappingURL=earning-earning-module-es2015.js.map