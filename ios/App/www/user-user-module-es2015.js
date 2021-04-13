(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/user/user.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/user/user.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"dark\"></ion-menu-button> \n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" color=\"dark\">Users</ion-title>\n    <ion-back-button  color=\"dark\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content  class=\"ion-padding\"  color=\"light\"  >\n  <div>\n    \n        <div [ngSwitch]=\"type\" *ngIf=\"activeCustomer\">\n          <ion-list *ngSwitchCase=\"'ActiveCustomer'\">\n            <ion-item>\n              <ion-label ><b>Active Customer</b></ion-label>\n            </ion-item>\n          <ion-item *ngFor=\"let  activeCustomer of activeCustomer\"> \n              <h6  style=\"font-size: 14px;\">  {{ activeCustomer.firstName }} {{activeCustomer.lastName}}</h6><br>           \n              <ion-button  color=\"mytheme\" size=\"small\" color=\"danger\" slot=\"end\" (click)= \"UpdateUserStatus(activeCustomer.id)\">Disable</ion-button>\n            </ion-item>\n          </ion-list>\n        </div>\n        <div [ngSwitch]=\"type\" *ngIf=\"users\">\n          <ion-list *ngSwitchCase=\"'users'\">\n            <ion-item>\n              <ion-label ><b>All Users</b></ion-label>\n            </ion-item>\n          <ion-item *ngFor=\"let  user of users\"> \n               <h6 style=\"font-size: 14px;\">  {{ user.firstName }} {{user.lastName}}</h6><br>   \n               <ion-button *ngIf=\"user.isDisabled===false \"  color=\"mytheme\" size=\"small\" color=\"success\" slot=\"end\" (click)=\"UpdateUserStatus(user.id)\"> Disabled</ion-button>\n               <ion-button *ngIf=\"user.isDisabled===true \" color=\"mytheme\" size=\"small\" color=\"danger\" slot=\"end\" (click)=\"UpdateUserStatus(user.id)\"> Active</ion-button>\n               <ion-button *ngIf=\"user.isDisabled===null \" color=\"mytheme\" size=\"small\" color=\"danger\" slot=\"end\" (click)=\"UpdateUserStatus(user.id)\"> Active</ion-button>\n             \n                </ion-item>\n          </ion-list>\n        </div>\n\n        <div [ngSwitch]=\"type\" *ngIf=\"disabledCustomer\">\n            <ion-list *ngSwitchCase=\"'DisabledCustomer'\">\n              <ion-item>\n                <ion-label ><b>Disable Customer</b></ion-label>\n              </ion-item>\n              <ion-item *ngFor=\"let disabledCustomer of disabledCustomer\"> \n                <h6 style=\"font-size: 14px;\">  {{ disabledCustomer.firstName }} {{disabledCustomer.lastName}}</h6><br> \n                <ion-button  color=\"mytheme\" size=\"small\" color=\"success\" slot=\"end\" (click)=\"UpdateUserStatus(disabledCustomer.id)\"> Active</ion-button>\n              </ion-item>\n            </ion-list>\n          </div>\n\n          <div [ngSwitch]=\"type\" *ngIf=\"activeShopowner\">\n              <ion-list *ngSwitchCase=\"'ActiveShopowner'\">\n                <ion-item>\n                  <ion-label ><b>Active Shopowner</b></ion-label>\n                </ion-item>\n                <ion-item *ngFor=\"let activeShopowner of activeShopowner\"> \n                  <h6 style=\"font-size: 14px;\">  {{ activeShopowner.firstName }} {{activeShopowner.lastName}}</h6><br>\n                  <ion-button  color=\"mytheme\" size=\"small\" color=\"danger\" slot=\"end\" (click)=\"UpdateUserStatus(activeShopowner.id)\" >Disable</ion-button>\n                </ion-item>\n              </ion-list>\n          </div>\n\n          <div [ngSwitch]=\"type\" *ngIf=\"disabledShopOwner\">\n                <ion-list *ngSwitchCase=\"'DisabledShopOwner'\">\n                  <ion-item>\n                    <ion-label ><b>Disable ShopOwner</b></ion-label>\n                  </ion-item>\n                  <ion-item *ngFor=\"let disabledShopOwner of disabledShopOwner\"> \n                    <h6 style=\"font-size: 14px;\">  {{ disabledShopOwner.firstName }} {{disabledShopOwner.lastName}}</h6><br>\n                    <ion-button  color=\"mytheme\" size=\"small\" color=\"success\" slot=\"end\" (click)=\"UpdateUserStatus(disabledShopOwner.id)\"> Active</ion-button>\n                  </ion-item>\n                </ion-list>\n          </div>\n  </div>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n\n\n<div>\n  <ion-segment [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\"  slot=\"end\"  value=\"users\"  class=\"segment23\" >\n    <ion-segment-button value=\"users\"> <ion-icon name=\"people-outline\" size=\"large\"  ></ion-icon></ion-segment-button>\n    <ion-segment-button value=\"ActiveCustomer\"> <ion-icon name=\"person-add-outline\" size=\"large\"  ></ion-icon></ion-segment-button>\n    <ion-segment-button value=\"DisabledCustomer\">  <ion-icon name=\"person-remove-outline\" size=\"large\" class=\"segment23\"  ></ion-icon></ion-segment-button>\n   </ion-segment>\n</div>\n\n<div>\n  <ion-segment [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\"  slot=\"end\" >\n    <ion-segment-button value=\"ActiveShopowner\">  <ion-icon name=\"medkit-outline\" size=\"large\"  ></ion-icon></ion-segment-button>\n    <ion-segment-button   value=\"DisabledShopOwner\" >   <ion-icon name=\"remove-circle-outline\"  size=\"large\"></ion-icon></ion-segment-button>\n  </ion-segment>\n</div>\n");

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

/***/ "./src/app/superAdmin/user/user-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/superAdmin/user/user-routing.module.ts ***!
  \********************************************************/
/*! exports provided: UserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function() { return UserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.page */ "./src/app/superAdmin/user/user.page.ts");




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserPageRoutingModule);



/***/ }),

/***/ "./src/app/superAdmin/user/user.module.ts":
/*!************************************************!*\
  !*** ./src/app/superAdmin/user/user.module.ts ***!
  \************************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/superAdmin/user/user-routing.module.ts");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "./src/app/superAdmin/user/user.page.ts");







let UserPageModule = class UserPageModule {
};
UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })
], UserPageModule);



/***/ }),

/***/ "./src/app/superAdmin/user/user.page.scss":
/*!************************************************!*\
  !*** ./src/app/superAdmin/user/user.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input {\n  font-size: 10px;\n  color: #080808;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi91c2VyL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcc3VwZXJBZG1pblxcdXNlclxcdXNlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1cGVyQWRtaW4vdXNlci91c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7RUFDQSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zdXBlckFkbWluL3VzZXIvdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOnJnYig4LCA4LCA4KTtcclxufSIsIi5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICMwODA4MDg7XG59Il19 */");

/***/ }),

/***/ "./src/app/superAdmin/user/user.page.ts":
/*!**********************************************!*\
  !*** ./src/app/superAdmin/user/user.page.ts ***!
  \**********************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");






let UserPage = class UserPage {
    constructor(loadingController, route, api, toastServices) {
        this.loadingController = loadingController;
        this.route = route;
        this.api = api;
        this.toastServices = toastServices;
        this.filtercart = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getCustomer();
            yield this.GetShopOwner();
            yield this.GetAllUser();
            this.type = 'users';
        });
    }
    getCustomer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.GetUserData(3).subscribe(res => {
                console.log(res, "Customers");
                this.customer = res;
                // this.products = this.shop.products.filter(x=>x.quantity > 0);
                this.disabledCustomer = this.customer.filter(x => x.isDisabled == true);
                console.log(this.activeCustomer);
                this.activeCustomer = this.customer.filter(x => x.isDisabled != true);
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    GetShopOwner() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.GetUserData(2).subscribe(res => {
                console.log(res, "shopowner");
                this.shopowner = res;
                this.disabledShopOwner = this.shopowner.filter(x => x.isDisabled == true);
                console.log("Disabled Shopowners", this.disabledShopOwner);
                this.activeShopowner = this.shopowner.filter(x => x.isDisabled != true);
                console.log("Active Shopowners", this.activeShopowner);
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    GetAllUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.GetAllUser().subscribe(res => {
                console.log(res, "Riders");
                this.users = res;
                console.log(this.users);
                // this.disabledShopOwner     = this.shopowner.filter(x=> x.isDisabled==true);
                // console.log("Disabled Shopowners", this.disabledShopOwner );
                // this.activeShopowner= this.shopowner.filter(x=> x.isDisabled!=true );
                // console.log("Active Shopowners",this.activeShopowner);
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    doRefresh(event) {
        this.ngOnInit();
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
    segmentChanged(ev) {
    }
    UpdateUserStatus(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Loading' });
            yield loading.present();
            yield this.api.UpdateUserStatus(id).subscribe(res => {
                console.log(res);
                this.toastServices.create('Changed successfully');
                this.doRefresh(event);
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
};
UserPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/user/user.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user.page.scss */ "./src/app/superAdmin/user/user.page.scss")).default]
    })
], UserPage);



/***/ })

}]);
//# sourceMappingURL=user-user-module-es2015.js.map