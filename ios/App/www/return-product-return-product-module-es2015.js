(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["return-product-return-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/return-product/return-product.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/return-product/return-product.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"dark\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" >\n      <ion-back-button text=\"\" color=\"dark\" icon=\"chevron-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"dark\" class=\"ion-text-center\">Returnable Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title> \n        RETURN PRODUCT LIST\n        </ion-card-title>   \n    </ion-card-header>\n  </ion-card>\n\n<ion-card  *ngFor=\"let returnproduct of returnproduct\">\n  <ion-card-header>\n    <ion-item>\n    <ion-card-title> \n     {{returnproduct.name}}\n      </ion-card-title>\n      <ion-icon slot =\"end\" name=\"pencil-outline\" routerLink = \"edit/{{returnproduct.id}}\" ></ion-icon>\n      <ion-icon slot=\"end\"  style=\"color: lightcoral;\" name=\"trash\" (click)=\"presentAlertConfirm(returnproduct.id)\"></ion-icon>\n    </ion-item>\n  </ion-card-header>\n  <ion-card-content>\n    <strong>Price :{{returnproduct.price}}</strong>\n  </ion-card-content>\n</ion-card>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button routerLink = \"add\" color=\"white\">\n    <ion-icon  name=\"add\" size=\"large\" style=\"color: #e9b006;\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n</ion-content>\n");

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

/***/ "./src/app/superAdmin/return-product/return-product-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/superAdmin/return-product/return-product-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ReturnProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnProductPageRoutingModule", function() { return ReturnProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _return_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./return-product.page */ "./src/app/superAdmin/return-product/return-product.page.ts");




const routes = [
    {
        path: '',
        component: _return_product_page__WEBPACK_IMPORTED_MODULE_3__["ReturnProductPage"]
    },
    { path: 'add', loadChildren: './add/addprodcut.module#ReturnAddprodcutPageModule' },
    { path: 'edit/:id', loadChildren: './edit/editprodcut.module#ReturnEditprodcutPageModule' },
];
let ReturnProductPageRoutingModule = class ReturnProductPageRoutingModule {
};
ReturnProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReturnProductPageRoutingModule);



/***/ }),

/***/ "./src/app/superAdmin/return-product/return-product.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/superAdmin/return-product/return-product.module.ts ***!
  \********************************************************************/
/*! exports provided: ReturnProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnProductPageModule", function() { return ReturnProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _return_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./return-product-routing.module */ "./src/app/superAdmin/return-product/return-product-routing.module.ts");
/* harmony import */ var _return_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./return-product.page */ "./src/app/superAdmin/return-product/return-product.page.ts");







let ReturnProductPageModule = class ReturnProductPageModule {
};
ReturnProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _return_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReturnProductPageRoutingModule"]
        ],
        declarations: [_return_product_page__WEBPACK_IMPORTED_MODULE_6__["ReturnProductPage"]]
    })
], ReturnProductPageModule);



/***/ }),

/***/ "./src/app/superAdmin/return-product/return-product.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/superAdmin/return-product/return-product.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vcmV0dXJuLXByb2R1Y3QvcmV0dXJuLXByb2R1Y3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/superAdmin/return-product/return-product.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/superAdmin/return-product/return-product.page.ts ***!
  \******************************************************************/
/*! exports provided: ReturnProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnProductPage", function() { return ReturnProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");







let ReturnProductPage = class ReturnProductPage {
    constructor(router, OrderService, loadingController, toastService, alertController) {
        this.router = router;
        this.OrderService = OrderService;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.alertController = alertController;
    }
    ionViewDidEnter() {
        this.getGroups();
    }
    preventDefault(e) {
        e.preventDefault();
    }
    getGroups() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.OrderService.Getreturnedproduct().subscribe(res => {
                loading.dismiss();
                if (res) {
                    console.log(res);
                    this.returnproduct = res;
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
    // async DeleteGroup(id) {
    //   const loading = await this.loadingController.create({ message: "Loading" });
    //   await loading.present();
    //   await this.OrderService.Getreturnedproduct(id).subscribe(
    //     res => {
    //       loading.dismiss();
    //         this.getGroups();
    //         this.toastService.create("Successfully deleted", "success");
    //     },
    //     err => {
    //       loading.dismiss();
    //       this.toastService.create(err, "danger");
    //     }
    //   );
    // }
    DeleteGroup(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.OrderService.DeleteProduct(id).subscribe(res => {
                loading.dismiss();
                this.getGroups();
                this.toastService.create("Successfully deleted", "success");
            }, err => {
                loading.dismiss();
                this.toastService.create(err, "danger");
            });
        });
    }
    presentAlertConfirm(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you Sure?',
                message: 'Do you want to Delete this Product?',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.DeleteGroup(id);
                            console.log('Confirm Okay:');
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ReturnProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
ReturnProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-return-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./return-product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/return-product/return-product.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./return-product.page.scss */ "./src/app/superAdmin/return-product/return-product.page.scss")).default]
    })
], ReturnProductPage);



/***/ })

}]);
//# sourceMappingURL=return-product-return-product-module-es2015.js.map