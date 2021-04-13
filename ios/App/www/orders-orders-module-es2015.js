(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button  style=\"color: black\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\"  style=\"color: black\">My Orders</ion-title>\r\n    <ion-back-button   style=\"color: black\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n  </ion-toolbar>\r\n </ion-header>\r\n\r\n<ion-content padding color=\"light\" *ngFor=\"order\">\r\n  <ion-item margin-bottom no-padding lines=\"none\" *ngFor=\"let order of orders\" class=\"card\" (click)=\"open(order)\">\r\n    <ion-row align-items-center>\r\n      <ion-col size=\"2\">\r\n        <img [src]=\"order.product.image[0]\">\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-row>\r\n          <ion-text>\r\n            <h5 class=\"title\" no-margin><strong>{{order.product.name}}</strong></h5>\r\n          </ion-text>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-text>\r\n            <h6 no-margin class=\"sub\">{{order.status}}</h6>\r\n          </ion-text>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col float-right size=\"2\">\r\n        <ion-icon class=\"item-icon mycolor\" name=\"arrow-dropright\" float-right mode=\"ios\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-item>\r\n</ion-content>\r\n\r\n\r\n<ion-content class=\"ion-padding\" color=\"light\" >\r\n  <div class=\"mid\" *ngIf=\"isloggedin\" >\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n      <button class=\"circle\">\r\n        <ion-icon name=\"cart\" size=\"large\"></ion-icon>\r\n      </button>\r\n    </ion-row>\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n      <ion-text><strong>Your are not logged in </strong></ion-text>\r\n    </ion-row>\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n      <ion-button fill=\"clear\" color=\"primary\" (click)=\"browse()\">Please login and view your Order History</ion-button>\r\n    </ion-row>\r\n  </div>\r\n <div *ngIf=\"orders\">\r\n  <ion-card  *ngFor=\"let orders of orders\">\r\n    <ion-item>\r\n      <ion-text>Order ID :{{orders.id}} </ion-text>  \r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-button color=\"mycolor1\" routerLink = \"/shopowner/order/{{orders.orderStatus}}/{{orders.id}}/items\" >View Order</ion-button>\r\n      <ion-button *ngIf=\"orders.orderStatus=='0'\"  color=\"mycolor1\" (click)=\"CancelorderStatus(orders.id)\" > Cancel Order</ion-button>\r\n      <div *ngIf=\"orders.orderStatus=='1' || orders.orderStatus=='2'\">\r\n        <ion-button *ngIf=\" orders.isReceived===null || orders.isReceived==false\" style=\"font-size: 12px;\" color=\"mycolor1\" (click)=\"presentAlertConfirm(orders.id)\"> Mark as received</ion-button>\r\n    </div>\r\n    </ion-item>\r\n    <ion-card-content >\r\n       <p *ngIf=\"orders.orderStatus=='2'\" > Status: <span style=\"color: green;\"><b>Received</b></span></p>\r\n      <p *ngIf=\"orders.orderStatus=='0'\" > Status: <span style=\"color: lightcoral;\">New</span></p>\r\n      <p *ngIf=\"orders.orderStatus=='1'\" > Status: <span style=\"color: lightcoral;\">Pending</span></p>\r\n      <!-- <p *ngIf=\"\" > Status: <span sty le=\"color: lightcoral;\">Pending</span></p> -->\r\n      <p *ngIf=\"orders.orderStatus=='3'\">Status: <span style=\"color: red;\"><b>Cancelled</b></span> </p>\r\n       <p> Placement Date:  {{orders.orderPlacementDate |date:'d-M-yy, h:mm a' }} </p>\r\n       <p>Order Code  :{{orders.orderCode}} </p>\r\n       <p>Total  Amount :{{orders.totalAmmount - orders.returnDiscount }}</p>\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n</div>\r\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n  <ion-refresher-content></ion-refresher-content>\r\n</ion-refresher>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/orders/orders.page.ts");
/* harmony import */ var _orderinfo_orderinfo_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../orderinfo/orderinfo.page */ "./src/app/orderinfo/orderinfo.page.ts");

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
        component: _orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]
    }
];
let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"], _orderinfo_orderinfo_page__WEBPACK_IMPORTED_MODULE_7__["OrderinfoPage"]],
        entryComponents: [_orderinfo_orderinfo_page__WEBPACK_IMPORTED_MODULE_7__["OrderinfoPage"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "./src/app/orders/orders.page.scss":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  color: white !important;\n}\n\n.card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n\n.sub {\n  font-size: 12px;\n}\n\n.item-icon {\n  font-size: 32px;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcb3JkZXJzXFxvcmRlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogLjNweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5zdWJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLml0ZW0taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG4ubWlkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbn0iLCIubWVudSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDAuM3B4IHNvbGlkICNkMmQyZDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zdWIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pdGVtLWljb24ge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5taWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/orders/orders.page.ts":
/*!***************************************!*\
  !*** ./src/app/orders/orders.page.ts ***!
  \***************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions.service */ "./src/app/functions.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _orderinfo_orderinfo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../orderinfo/orderinfo.page */ "./src/app/orderinfo/orderinfo.page.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */













let OrdersPage = class OrdersPage {
    constructor(menuCtrl, modalController, fun, dataService, orderservice, loadingController, toastService, route, router, storage, sharedservice, alertController) {
        this.menuCtrl = menuCtrl;
        this.modalController = modalController;
        this.fun = fun;
        this.dataService = dataService;
        this.orderservice = orderservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.route = route;
        this.router = router;
        this.storage = storage;
        this.sharedservice = sharedservice;
        this.alertController = alertController;
        this.isloggedin = false;
        //this.orders = dataService.orders;
    }
    ngOnInit() {
        this.updateSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["interval"])(120000).subscribe((val) => {
            this.ionViewDidEnter();
        });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.get("IsLoggedIn").then(value => {
                if (value == true) {
                    this.isloggedin == true;
                    this.GetCustomerOrder(this.sid);
                }
                console.log(value);
                if (value == null) {
                    this.toastService.create("Plese login and view orders details", 'danger');
                }
            });
            this.menuCtrl.enable(false, 'end');
            this.menuCtrl.enable(true, 'start');
        });
    }
    open(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: _orderinfo_orderinfo_page__WEBPACK_IMPORTED_MODULE_5__["OrderinfoPage"],
                componentProps: { value: order }
            });
            return yield modal.present();
        });
    }
    GetCustomerOrder(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.orderservice.GetCustomerOrder(this.sharedservice.user.sid).subscribe(res => {
                loading.dismiss();
                if (res) {
                    console.log(res);
                    this.orders = res;
                }
                else {
                    loading.dismiss();
                    this.toastService.create(res.Message, "danger");
                }
            });
            (err) => {
                loading.dismiss();
                console.log(err);
                this.toastService.create(err, 'danger');
            };
        });
    }
    presentAlertConfirm(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you Sure?',
                message: 'Do you want to mark this Order as Received?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.MarksReceived(sid);
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
    MarksReceived(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.orderservice.MarksReceived(id).subscribe(res => {
                loading.dismiss();
                this.doRefresh(event);
                console.log(res);
                // this.toastService.create(res.Message, "danger");
            });
            (err) => {
                loading.dismiss();
                console.log(err);
                this.toastService.create(err, 'danger');
            };
        });
    }
    browse() {
        this.router.navigateByUrl("login");
    }
    doRefresh(event) {
        this.ngOnInit();
        this.ionViewDidEnter();
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
    CancelorderStatus(sid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you Sure?',
                message: 'Do you want to cancel this Order?',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.CancelOrder(sid, status);
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
    CancelOrder(id, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            status = 3;
            yield this.orderservice.CancelOrder(id, status).subscribe(res => {
                loading.dismiss();
                console.warn(res);
                this.toastService.create('Order Cancel request succeded');
                this.router.navigate(['orders']);
                this.doRefresh(event);
                err => {
                    console.log(err);
                    loading.dismiss();
                };
            });
        });
    }
};
OrdersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders.page.scss */ "./src/app/orders/orders.page.scss")).default]
    })
], OrdersPage);



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



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map