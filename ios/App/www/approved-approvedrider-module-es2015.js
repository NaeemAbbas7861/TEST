(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approved-approvedrider-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/ridersadmin/approved/approved.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/ridersadmin/approved/approved.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button> \r\n    </ion-buttons>\r\n    <ion-back-button  color=\"dark\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n    <ion-title  color=\"dark\" class=\"ion-text-center\">Active</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\"  color=\"light\">\r\n\r\n  <ion-card *ngFor= \"let rider of riders\">\r\n    <ion-item>\r\n    <ion-label><b>{{rider.firstName }}  {{rider.lastName }} </b></ion-label>\r\n    <ion-button color=\"mytheme\" size=\"small\" color=\"danger\"   (click)=\"UnApprovedRider(rider.id)\">Disabled </ion-button>\r\n    \r\n  </ion-item>\r\n  \r\n    <ion-card-content>\r\n      <!-- <p> First Name: {{login.firstname}}</p>\r\n      <p>Number: {{shop.contact}}</p>\r\n      <p>Owner CNIC: {{shop.ownerCNIC}} </p>\r\n      <p>NDN No: {{shop.ndN_Number}}</p>\r\n      <p>latitude: {{shop.latitude}}</p>\r\n      <p>longitude: {{shop.longitude}}</p>\r\n      <p>Address: {{shop.address}}</p> -->\r\n      \r\n      <p> Name: {{rider.firstName}} {{rider.lastName}}</p>\r\n      <p> Email address: {{rider.email_Address}}</p>\r\n      <p> Address:  {{rider.address}}</p>\r\n      <p> Number:{{rider.contact_Number}} </p>\r\n      <p> CNIC: {{rider.cnic}}  </p>\r\n      <ion-img *ngIf=\"!rider.cniC_Image\"   class=\"input ion-padding-vertical\"  src=\"../../assets/images/noimage.jpg\"></ion-img>\r\n      <ion-img *ngIf=\"rider.cniC_Image\" class=\"input ion-padding-vertical\" [src]=\"resourceURL + rider.cniC_Image\" class=\"Image\"></ion-img>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div *ngIf=\"NotRiderFound\">\r\n    <ion-text  class=\"mid ion-justify-content-center\" > No rider found</ion-text>\r\n  </div>\r\n\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  \r\n</ion-content>");

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

/***/ "./src/app/superAdmin/ridersadmin/approved/approved.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/superAdmin/ridersadmin/approved/approved.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".success {\n  color: green;\n}\n\n.fail {\n  color: red;\n}\n\n.Image {\n  height: 150px;\n  width: 230px;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n  padding-left: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi9yaWRlcnNhZG1pbi9hcHByb3ZlZC9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHN1cGVyQWRtaW5cXHJpZGVyc2FkbWluXFxhcHByb3ZlZFxcYXBwcm92ZWQucGFnZS5zY3NzIiwic3JjL2FwcC9zdXBlckFkbWluL3JpZGVyc2FkbWluL2FwcHJvdmVkL2FwcHJvdmVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7QUNFSjs7QURBQTtFQUVJLGFBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vcmlkZXJzYWRtaW4vYXBwcm92ZWQvYXBwcm92ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6IGdyZWVuXHJcbn1cclxuLmZhaWwge1xyXG4gICAgY29sb3I6cmVkXHJcbn1cclxuLkltYWdle1xyXG5cclxuICAgIGhlaWdodDoxNTBweDtcclxuICAgIHdpZHRoOiAyMzBweDtcclxufVxyXG4ubWlkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xyXG4gICAgXHJcbn0iLCIuc3VjY2VzcyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZhaWwge1xuICBjb2xvcjogcmVkO1xufVxuXG4uSW1hZ2Uge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMjMwcHg7XG59XG5cbi5taWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIHBhZGRpbmctbGVmdDogMTIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/superAdmin/ridersadmin/approved/approvedrider.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/superAdmin/ridersadmin/approved/approvedrider.module.ts ***!
  \*************************************************************************/
/*! exports provided: ApprovedRiderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedRiderPageModule", function() { return ApprovedRiderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _approvedrider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./approvedrider.page */ "./src/app/superAdmin/ridersadmin/approved/approvedrider.page.ts");







const routes = [
    {
        path: '',
        component: _approvedrider_page__WEBPACK_IMPORTED_MODULE_6__["ApprovedRiderPage"]
    }
];
let ApprovedRiderPageModule = class ApprovedRiderPageModule {
};
ApprovedRiderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_approvedrider_page__WEBPACK_IMPORTED_MODULE_6__["ApprovedRiderPage"]]
    })
], ApprovedRiderPageModule);



/***/ }),

/***/ "./src/app/superAdmin/ridersadmin/approved/approvedrider.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/superAdmin/ridersadmin/approved/approvedrider.page.ts ***!
  \***********************************************************************/
/*! exports provided: ApprovedRiderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedRiderPage", function() { return ApprovedRiderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





//import * as moment from 'moment';



let ApprovedRiderPage = class ApprovedRiderPage {
    constructor(route, api, loadingController, router, 
    //  private events: Events,
    toastService) {
        this.route = route;
        this.api = api;
        this.loadingController = loadingController;
        this.router = router;
        this.toastService = toastService;
        this.NotRiderFound = false;
        this.resourceURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].RESOURCE_URL;
        // this.today = moment().format('YYYY-MM-DD');
    }
    ngOnInit() {
        // this.GetApprovedRider();
    }
    ionViewDidEnter() {
        this.GetApprovedRider();
        this.doRefresh(this.event);
    }
    GetApprovedRider() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.GetApprovedRider().subscribe(res => {
                console.log(res);
                this.riders = res;
                if (this.riders.length <= 0) {
                    this.NotRiderFound = true;
                }
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    UnApprovedRider(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Loading' });
            yield loading.present();
            yield this.api.ChangeRiderstatus(id).subscribe(res => {
                console.log(res);
                this.riders = res;
                this.toastService.create('Rider Unapproval request succeded');
                this.GetApprovedRider();
                this.doRefresh(event);
                //   this.events.publish('unapprovedCount', this.doctors.length);
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
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
};
ApprovedRiderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
ApprovedRiderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-approved',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./approved.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/ridersadmin/approved/approved.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./approved.page.scss */ "./src/app/superAdmin/ridersadmin/approved/approved.page.scss")).default]
    })
], ApprovedRiderPage);



/***/ })

}]);
//# sourceMappingURL=approved-approvedrider-module-es2015.js.map