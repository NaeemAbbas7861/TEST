(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ridersadmin-ridersadmin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/ridersadmin/ridersadmin.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/ridersadmin/ridersadmin.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content class=\"ion-padding\">\r\n\r\n    <ion-tabs>\r\n        <ion-tab-bar slot=\"bottom\">\r\n          <ion-tab-button tab=\"approved\">\r\n            <ion-icon name=\"checkbox-outline\"></ion-icon>\r\n            <ion-label>Active</ion-label>\r\n            <ion-badge *ngIf=\"approvedCount\">{{approvedCount}}</ion-badge>\r\n          </ion-tab-button>\r\n    \r\n          <ion-tab-button tab=\"unapproved\">\r\n           <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n           <ion-label>Disabled</ion-label>\r\n           <ion-badge *ngIf=\"unapprovedCount\">{{unapprovedCount}}</ion-badge>\r\n          </ion-tab-button>\r\n        </ion-tab-bar>\r\n      </ion-tabs>\r\n    \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/superAdmin/ridersadmin/ridersadmin.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/superAdmin/ridersadmin/ridersadmin.module.ts ***!
  \**************************************************************/
/*! exports provided: SuperAdminRiderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminRiderPageModule", function() { return SuperAdminRiderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ridersadmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ridersadmin.page */ "./src/app/superAdmin/ridersadmin/ridersadmin.page.ts");







const routes = [
    {
        path: '',
        component: _ridersadmin_page__WEBPACK_IMPORTED_MODULE_6__["RidersAdminPage"],
        children: [
            { path: '', redirectTo: 'approved', pathMatch: 'full' },
            { path: 'approved', loadChildren: './approved/approvedrider.module#ApprovedRiderPageModule' },
            { path: 'unapproved', loadChildren: './unapproved/unapprovedrider.module#UnapprovedRiderPageModule' },
        ]
    },
];
let SuperAdminRiderPageModule = class SuperAdminRiderPageModule {
};
SuperAdminRiderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ridersadmin_page__WEBPACK_IMPORTED_MODULE_6__["RidersAdminPage"]]
    })
], SuperAdminRiderPageModule);



/***/ }),

/***/ "./src/app/superAdmin/ridersadmin/ridersadmin.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/superAdmin/ridersadmin/ridersadmin.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vcmlkZXJzYWRtaW4vcmlkZXJzYWRtaW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/superAdmin/ridersadmin/ridersadmin.page.ts":
/*!************************************************************!*\
  !*** ./src/app/superAdmin/ridersadmin/ridersadmin.page.ts ***!
  \************************************************************/
/*! exports provided: RidersAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidersAdminPage", function() { return RidersAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


//import { Events } from '@ionic/angular';
let RidersAdminPage = class RidersAdminPage {
    constructor() { }
    ngOnInit() {
        // this.event.subscribe('approvedCount', (count) => {
        //   this.approvedCount = count;
        // });
        // this.event.subscribe('unapprovedCount', (count) => {
        //   this.unapprovedCount = count;
        // });
    }
};
RidersAdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ridersadmin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/ridersadmin/ridersadmin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ridersadmin.page.scss */ "./src/app/superAdmin/ridersadmin/ridersadmin.page.scss")).default]
    })
], RidersAdminPage);



/***/ })

}]);
//# sourceMappingURL=ridersadmin-ridersadmin-module-es2015.js.map