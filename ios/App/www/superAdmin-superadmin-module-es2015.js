(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["superAdmin-superadmin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/dashboard.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/dashboard.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title  style=\"color: black;\" class=\"ion-text-center\">Dashboard</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n <ion-content  *ngIf=\"data\" fullscreen  >\r\n \r\n<!-- \r\n\r\n <ion-row>\r\n    <ion-col>\r\n      <ion-card style=\"height: 120px; width: 150px; text-align: center;\" (click)=\"activeShopOwners()\" >\r\n        <ion-card-content >\r\n          <ion-icon color=\"mycolor1\" name=\"create-outline\"  class=\"ion-text-center\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px;\">Total users</ion-text><br>\r\n          <ion-text style=\"margin-top: 35px; font-size: 16px; text-align: center;\">{{data.totalUsers}} </ion-text>\r\n           </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-card style=\"height: 120px; width: 150px; text-align: center;\" (click)=\"activeShopOwners()\">\r\n        <ion-card-content >\r\n          <ion-icon color=\"mycolor1\" name=\"send-outline\"  class=\"ion-text-center\"  size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\"style=\"margin-top: 35px; font-size: 16px; text-align: center;\">Active Shop Owners</ion-text><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; text-align: center;\">  {{data.activeShopOwners}}</ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n \r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card style=\"height: 120px; width: 150px; text-align: center;\" (click)=\"activeShopOwners()\">\r\n        <ion-card-content >\r\n          <ion-icon color=\"mycolor1\" name=\"create-outline\"   class=\"ion-text-center\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; text-align: center;\">Disabled Shop Owners</ion-text><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; text-align: center;\">{{data.disabledShopOwners}} </ion-text>\r\n           </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-card style=\"height: 120px; width: 150px; text-align: center;\" (click)=\"activeShopOwners()\">\r\n        <ion-card-content >\r\n          <ion-icon color=\"mycolor1\" name=\"send-outline\"   class=\"ion-text-center\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\"style=\"margin-top: 35px; font-size: 16px;  text-align: center;\">Active Customers </ion-text><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; text-align: center;\"> {{data.activeCustomers}} </ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card style=\"height: 120px; width: 150px; text-align: center;\" (click)=\"activeShopOwners()\">\r\n        <ion-card-content >\r\n          <ion-icon color=\"mycolor1\" name=\"send-outline\" class=\"ion-text-center\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\"style=\"margin-top: 35px; font-size: 16px; text-align: center;\">Disabled Customers </ion-text><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; text-align: center;\"> {{data.disabledCustomers}}</ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-card style=\"height: 120px; width: 150px; text-align: center;\" (click)=\"activerider()\">\r\n        <ion-card-content >\r\n          <ion-icon color=\"mycolor1\" name=\"send-outline\" class=\"ion-text-center\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\"style=\"margin-top: 35px; font-size: 16px; text-align: center;\">Active Riders</ion-text><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px;  text-align: center;\">  {{data.activeRiders}}</ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card style=\"height: 120px; width: 150px; text-align: center;\" (click)=\"disabledrider()\">\r\n        <ion-card-content >\r\n          <ion-icon color=\"mycolor1\" name=\"send-outline\" class=\"ion-text-center\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\"style=\"margin-top: 35px; font-size: 14px; text-align: center;\">Disabled Riders </ion-text><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 14px;  text-align: center;\">   {{data.disabledRiders}}</ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-card style=\"height: 120px; width: 150px; text-align: center;\" (click)=\"activeshop()\">\r\n        <ion-card-content >\r\n          <ion-icon color=\"mycolor1\" name=\"send-outline\" class=\"ion-text-center\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\"style=\"margin-top: 35px; font-size: 16px; text-align: center;\">Enabled Shops</ion-text><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; text-align: center;\"> {{data.activeShops}}</ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card style=\"height: 120px; width: 150px; text-align: center;\" (click)=\"disabledshop()\">\r\n        <ion-card-content >\r\n          <ion-icon color=\"mycolor1\" name=\"send-outline\" class=\"ion-text-center\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\"style=\"margin-top: 35px; font-size: 16px; text-align: center;\">Shops Request</ion-text><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; text-align: center;\"> {{data.pendingShops}}</ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row> -->\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-img src=\"/assets/shapes.svg\"></ion-img>\r\n    <ion-card-header>\r\n      <ion-card-title class=\"ion-text-center\" color=\"mycolor1\" style=\"font-weight: bold; font-family: 'Times New Roman', Times, serif;\"> Welcome to Kuick Save</ion-card-title>\r\n      <ion-card-subtitle class=\"ion-text-center\" style=\"font-size: x-large; font-family: 'Times New Roman', Times, serif; \" color=\"dark\"> {{sharedservice.user.FirstName}}  {{sharedservice.user.LastName}}</ion-card-subtitle>\r\n    \r\n    </ion-card-header>\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col size-md=\"6\" size-xs=\"12\"  (click)=\"activeShopOwners()\" >\r\n            <ion-card class=\"card-pink\" >\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" > {{data.totalUsers}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\" > Total Users</ion-card-title>\r\n               </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n          \r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-1\" (click)=\"activeShopOwners()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{data.activeShopOwners}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Active Shop Owners</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-2\" (click)=\"activeShopOwners()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{data.disabledShopOwners}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Disabled Shop Owners</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-3\" (click)=\"activeShopOwners()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{data.activeCustomers}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Active Customers</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-4\"  (click)=\"activeShopOwners()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{data.disabledCustomers}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Disabled Customers</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-5\" (click)=\"activerider()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{data.activeRiders}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Active Riders</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-6\"  (click)=\"disabledrider()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{data.disabledRiders}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Disabled Riders</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-7\"  (click)=\"activeshop()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{data.activeShops}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Active Shops</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-8\" (click)=\"disabledshop()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{data.pendingShops}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Shop Request</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n  </ion-card>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content>\r\n    </ion-refresher-content>\r\n   </ion-refresher>\r\n</ion-content> \r\n\r\n\r\n");

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

/***/ "./src/app/superAdmin/superadmin-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/superAdmin/superadmin-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SuperAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminRoutingModule", function() { return SuperAdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _superadmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./superadmin.page */ "./src/app/superAdmin/superadmin.page.ts");




const routes = [
    {
        path: 'dashboard',
        component: _superadmin_page__WEBPACK_IMPORTED_MODULE_3__["SuperAdminPage"]
    },
    { path: 'group', loadChildren: './group/group.module#GroupPageModule' },
    { path: 'shop', loadChildren: './shop/shop.module#SuperAdminShopPageModule' },
    { path: 'earning', loadChildren: './earning/earning.module#EarningPageModule' },
    { path: 'rider', loadChildren: './ridersadmin/ridersadmin.module#SuperAdminRiderPageModule' },
    { path: ':id/shopearning', loadChildren: './shopearning/shopearning.module#ShopEarningPageModule' },
    { path: 'user', loadChildren: './user/user.module#UserPageModule' },
    { path: 'view-orders', loadChildren: './view-orders/view-orders.module#OwnerOrderPageModule' },
    { path: 'return-product', loadChildren: './return-product/return-product.module#ReturnProductPageModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#SuperAdminDashboardModule' },
];
let SuperAdminRoutingModule = class SuperAdminRoutingModule {
};
SuperAdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SuperAdminRoutingModule);



/***/ }),

/***/ "./src/app/superAdmin/superadmin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/superAdmin/superadmin.module.ts ***!
  \*************************************************/
/*! exports provided: SuperAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminPageModule", function() { return SuperAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _superadmin_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./superadmin.page */ "./src/app/superAdmin/superadmin.page.ts");
/* harmony import */ var _superadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./superadmin-routing.module */ "./src/app/superAdmin/superadmin-routing.module.ts");






let SuperAdminPageModule = class SuperAdminPageModule {
};
SuperAdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _superadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuperAdminRoutingModule"]
        ],
        declarations: [_superadmin_page__WEBPACK_IMPORTED_MODULE_4__["SuperAdminPage"]]
    })
], SuperAdminPageModule);



/***/ }),

/***/ "./src/app/superAdmin/superadmin.page.scss":
/*!*************************************************!*\
  !*** ./src/app/superAdmin/superadmin.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-home .logouticon {\n  margin-left: 9px;\n}\npage-home .headerImg {\n  position: relative;\n  left: 35%;\n  padding-bottom: 11%;\n}\npage-home .toolbar-background-md {\n  border-color: #00000008;\n  background: #00000008;\n}\npage-home .item-md {\n  border-radius: 13px;\n  border: solid 1px #70707040;\n  padding-left: 16px;\n  padding-right: 0;\n  position: relative;\n  font-size: 1.6rem;\n  font-weight: normal;\n  text-transform: none;\n  color: #000;\n  background-color: #fff;\n  box-shadow: #a6bad33d 2px 3px 13px;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\npage-home .bar-button-default-md, page-home .bar-button-clear-md-default, page-home .bar-button-md-default {\n  color: #2a80b9;\n  background-color: transparent;\n}\npage-home ion-input {\n  padding-left: 22px;\n  position: static;\n}\npage-home .col {\n  padding: 1px;\n}\npage-home .welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\npage-home .largeIcon {\n  justify-content: center;\n}\npage-home .mygrid {\n  padding-top: 35px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n}\npage-home .myrow {\n  padding-left: 18px;\n  padding-right: 55px;\n}\npage-home .myBTNs {\n  background: #8E44AD;\n  color: white;\n  margin: 1%;\n  border-radius: 6px;\n  box-shadow: #a6bad37d 5px 6px 17px;\n}\npage-home .largeIcon {\n  padding-top: 8%;\n  padding-left: 12px;\n  font-size: 25px;\n}\npage-home .myHeader {\n  position: relative;\n  position: relative;\n  margin-top: 7px;\n  font-size: 17px;\n  font-weight: bold;\n  margin-bottom: 20px;\n  margin-left: 12px;\n  padding-bottom: 22%;\n  padding-top: 6px;\n}\npage-home .textalign {\n  text-align: end;\n}\npage-home .myBTNs1 {\n  background: #FD79A8;\n  color: white;\n  position: relative;\n  left: 35px;\n  margin: 2px;\n  border-radius: 6px;\n  box-shadow: #a6bad37d 5px 6px 17px;\n}\npage-home .myDiv {\n  background: #00000008;\n  margin-bottom: 31px;\n}\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/* Set the color on all ion-button elements */\n.card-pink {\n  background-color: #e9b006;\n  --color: white;\n}\n.card-pink-1 {\n  background-color: #17a2b8;\n  --color: white;\n}\n.card-pink-2 {\n  background-color: #f76371;\n  --color: white;\n}\n.card-pink-3 {\n  background-color: #7a8188;\n  --color: white;\n}\n.card-pink-4 {\n  background-color: #ffc107;\n  --color: white;\n}\n.card-pink-5 {\n  background-color: #6f42c1;\n  --color: white;\n}\n.card-pink-6 {\n  background-color: #28a745;\n  --color: white;\n}\n.card-pink-7 {\n  background-color: #e83e8c;\n  --color: white;\n}\n.card-pink-8 {\n  background-color: #007bff;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHN1cGVyQWRtaW5cXHN1cGVyYWRtaW4ucGFnZS5zY3NzIiwic3JjL2FwcC9zdXBlckFkbWluL3N1cGVyYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksZ0JBQUE7QUNEUjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNGUjtBRE1JO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtBQ0pSO0FEUUk7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBRUEsa0NBQUE7RUFFQSwrREFBQTtBQ05SO0FEU0k7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7QUNQUjtBRFdLO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtBQ1RSO0FEWUk7RUFDSSxZQUFBO0FDVlI7QURhSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNYUjtBRGFNO0VBQ0ksdUJBQUE7QUNYVjtBRGVJO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNkUjtBRGtCSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNoQlI7QURvQkk7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQ0FBQTtBQ25CUjtBRHNCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNwQlI7QUR1Qkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDckJSO0FEd0JJO0VBQ0ksZUFBQTtBQ3RCUjtBRDRCSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGtDQUFBO0FDMUJSO0FEK0JJO0VBQ0kscUJBQUE7RUFFQSxtQkFBQTtBQzlCUjtBRGtDSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUMvQlI7QURrQ00sNkNBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQy9CUjtBRGlDTTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQzlCUjtBRGlDTTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQzlCUjtBRGdDTTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQzdCUjtBRCtCTTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQzVCUjtBRDhCTTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQzNCUjtBRDZCTTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQzFCUjtBRDRCTTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ3pCUjtBRDJCTTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ3hCUiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vc3VwZXJhZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWhvbWUge1xyXG5cclxuICAgIC5sb2dvdXRpY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oZWFkZXJJbWd7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDM1JTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTElO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC50b29sYmFyLWJhY2tncm91bmQtbWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogICMwMDAwMDAwODtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAgIzAwMDAwMDA4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5pdGVtLW1kIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM3MDcwNzA0MDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiAjYTZiYWQzM2QgMnB4IDNweCAxM3B4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJhci1idXR0b24tZGVmYXVsdC1tZCwgLmJhci1idXR0b24tY2xlYXItbWQtZGVmYXVsdCwgLmJhci1idXR0b24tbWQtZGVmYXVsdCB7XHJcbiAgICAgICAgY29sb3I6ICMyYTgwYjk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICBcclxuICAgIH1cclxuICAgIC53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzV2aDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIC5sYXJnZUljb257XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5teWdyaWR7XHJcbiAgICBcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAubXlyb3d7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDU1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLm15QlROc3tcclxuICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOEU0NEFEO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDElO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6ICNhNmJhZDMzZCAycHggM3B4IDEzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogI2E2YmFkMzdkIDVweCA2cHggMTdweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxhcmdlSWNvbntcclxuICAgICAgICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm15SGVhZGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMiU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC50ZXh0YWxpZ257XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIC5teUJUTnMxe1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRDc5QTg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAzNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6ICNhNmJhZDMzZCAycHggM3B4IDEzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogI2E2YmFkMzdkIDVweCA2cHggMTdweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5teURpdntcclxuICAgICAgICBiYWNrZ3JvdW5kOiMwMDAwMDAwODtcclxuICAgICAgICBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogU2V0IHRoZSBjb2xvciBvbiBhbGwgaW9uLWJ1dHRvbiBlbGVtZW50cyAqL1xyXG4gICAgICAuY2FyZC1waW5rIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTliMDA2O1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkLXBpbmstMSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmNhcmQtcGluay0yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc2MzcxO1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkLXBpbmstMyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdhODE4ODtcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZC1waW5rLTQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XHJcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtcGluay01IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY0MmMxO1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkLXBpbmstNiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZC1waW5rLTcge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlODNlOGM7XHJcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtcGluay04IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICIsInBhZ2UtaG9tZSAubG9nb3V0aWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5wYWdlLWhvbWUgLmhlYWRlckltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMzUlO1xuICBwYWRkaW5nLWJvdHRvbTogMTElO1xufVxucGFnZS1ob21lIC50b29sYmFyLWJhY2tncm91bmQtbWQge1xuICBib3JkZXItY29sb3I6ICMwMDAwMDAwODtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDA4O1xufVxucGFnZS1ob21lIC5pdGVtLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzcwNzA3MDQwO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiAjYTZiYWQzM2QgMnB4IDNweCAxM3B4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxucGFnZS1ob21lIC5iYXItYnV0dG9uLWRlZmF1bHQtbWQsIHBhZ2UtaG9tZSAuYmFyLWJ1dHRvbi1jbGVhci1tZC1kZWZhdWx0LCBwYWdlLWhvbWUgLmJhci1idXR0b24tbWQtZGVmYXVsdCB7XG4gIGNvbG9yOiAjMmE4MGI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbnBhZ2UtaG9tZSBpb24taW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5wYWdlLWhvbWUgLmNvbCB7XG4gIHBhZGRpbmc6IDFweDtcbn1cbnBhZ2UtaG9tZSAud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxucGFnZS1ob21lIC5sYXJnZUljb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbnBhZ2UtaG9tZSAubXlncmlkIHtcbiAgcGFkZGluZy10b3A6IDM1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5wYWdlLWhvbWUgLm15cm93IHtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1NXB4O1xufVxucGFnZS1ob21lIC5teUJUTnMge1xuICBiYWNrZ3JvdW5kOiAjOEU0NEFEO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMSU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjYTZiYWQzM2QgMnB4IDNweCAxM3B4O1xuICBib3gtc2hhZG93OiAjYTZiYWQzN2QgNXB4IDZweCAxN3B4O1xufVxucGFnZS1ob21lIC5sYXJnZUljb24ge1xuICBwYWRkaW5nLXRvcDogOCU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxucGFnZS1ob21lIC5teUhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjIlO1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxucGFnZS1ob21lIC50ZXh0YWxpZ24ge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5wYWdlLWhvbWUgLm15QlROczEge1xuICBiYWNrZ3JvdW5kOiAjRkQ3OUE4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMzVweDtcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjYTZiYWQzM2QgMnB4IDNweCAxM3B4O1xuICBib3gtc2hhZG93OiAjYTZiYWQzN2QgNXB4IDZweCAxN3B4O1xufVxucGFnZS1ob21lIC5teURpdiB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwODtcbiAgbWFyZ2luLWJvdHRvbTogMzFweDtcbn1cblxuLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogU2V0IHRoZSBjb2xvciBvbiBhbGwgaW9uLWJ1dHRvbiBlbGVtZW50cyAqL1xuLmNhcmQtcGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWIwMDY7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZC1waW5rLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQtcGluay0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3NjM3MTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLXBpbmstMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3YTgxODg7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZC1waW5rLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQtcGluay01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmNDJjMTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLXBpbmstNiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZC1waW5rLTcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTgzZThjO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQtcGluay04IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgLS1jb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/superAdmin/superadmin.page.ts":
/*!***********************************************!*\
  !*** ./src/app/superAdmin/superadmin.page.ts ***!
  \***********************************************/
/*! exports provided: SuperAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminPage", function() { return SuperAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");







let SuperAdminPage = class SuperAdminPage {
    constructor(loadController, api, toastService, router, sharedservice) {
        this.loadController = loadController;
        this.api = api;
        this.toastService = toastService;
        this.router = router;
        this.sharedservice = sharedservice;
    }
    ngOnInit() {
        // this.updateSubscription = interval(15000).subscribe(
        //   (val) => { this.ionViewDidEnter();
        //  });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.GetSuperAdminData();
            // this.data = console.log(this.sharedservice.user);
        });
    }
    GetSuperAdminData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadController.create({
                message: "Loading"
            });
            yield loading.present();
            yield this.api.GetSuperAdminData().subscribe(res => {
                loading.dismiss();
                if (res) {
                    loading.dismiss();
                    // console.log(res);
                    this.data = res;
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
    doRefresh(event) {
        console.log('Begin async operation');
        this.ngOnInit();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 1000);
    }
    activeshop() {
        this.router.navigateByUrl('superadmin/shop/approved');
    }
    disabledshop() {
        this.router.navigateByUrl('superadmin/shop/unapproved');
    }
    activerider() {
        this.router.navigateByUrl('superadmin/rider/approved');
    }
    disabledrider() {
        this.router.navigateByUrl('superadmin/rider/unapproved');
    }
    activeShopOwners() {
        this.router.navigateByUrl('superadmin/user');
    }
    activeuser() {
        this.router.navigateByUrl('superadmin/user');
    }
};
SuperAdminPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
SuperAdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-superadmin",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./superadmin.page.scss */ "./src/app/superAdmin/superadmin.page.scss")).default]
    })
], SuperAdminPage);



/***/ })

}]);
//# sourceMappingURL=superAdmin-superadmin-module-es2015.js.map