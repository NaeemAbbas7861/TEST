(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["items-view-item-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/view-orders/items/item.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/view-orders/items/item.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"display: flex; align-items: center;\" color=\"dark\">Order Items</ion-title>\r\n    <ion-buttons slot=\"end\" >\r\n      <ion-back-button text=\"\" color=\"dark\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  class=\"ion-padding\"  color=\"light\" >\r\n\r\n  <ion-card >\r\n     <div style=\"overflow-x:auto; padding-left: 5px; \" >\r\n     <table *ngIf = \"items\" >\r\n        <tr>\r\n          <td><B>product</B></td>\r\n          <td><b>price </b></td>\r\n          <td><b>Quantity</b></td>\r\n          <td><b>Total</b></td>\r\n        </tr>\r\n        <tr *ngFor= \"let item of items.orderItems\">\r\n          <td> {{item.product.title}}</td>\r\n          <td> {{item.product.price - (item.product.price/100)*item.product.discount}}</td>\r\n          <td> {{item.quantity}}</td>\r\n          <td> {{(item.product.price - (item.product.price/100)*item.product.discount) *item.quantity}}</td>\r\n        </tr>\r\n        <tr *ngIf=\"!returnDiscount\">\r\n          <td><b>Returnable Product RS:</b></td>\r\n          <td *ngIf=\"items.returnDiscount > 0 \"> {{items.returnDiscount}}</td>\r\n          <td *ngIf=\"items.returnDiscount <= 0 \">0 </td>\r\n          <td><b>Shipping Amount:</b></td>\r\n          <td>{{items.deliveryCharges}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><b>Total Net Amount:</b></td>\r\n          <td>{{items.totalAmmount - items.returnDiscount }}</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </ion-card>\r\n  <ion-card *ngIf = \"items\">\r\n    <ion-item>\r\n      Customer Details\r\n    </ion-item>\r\n    <ion-card-content>\r\n      <p> Name: {{items.user.firstName}} {{items.user.lastName}} </p>\r\n      <p> Contact: 0{{items.user.contact_Number}}</p>\r\n      <p> email: {{items.user.email_Address}}</p>\r\n      <p> Address: {{items.user.address}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <ion-card  *ngIf=\"items \" >\r\n    <ion-item *ngIf=\"items.orderStatus===2 || items.orderStatus===1 \">\r\n      Riders Details\r\n    </ion-item>\r\n    <ion-card-content *ngIf=\"items.orderStatus===2 || items.orderStatus===1 \">\r\n      <p> Name: {{items.rider.firstName}} {{items.rider.lastName}} </p>\r\n      <p> Contact: 0{{items.user.contact_Number}}</p>\r\n      <p> Address: {{items.rider.address}}</p>\r\n      <p> Cnic: {{items.rider.cnic}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n\r\n  <div style=\"min-height: 300px;\" >\r\n    <div   #mapElement class=\"map\" style=\"min-height: 300px;\"></div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

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

/***/ "./src/app/superAdmin/view-orders/items/item.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/superAdmin/view-orders/items/item.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".success {\n  color: green;\n}\n\n.fail {\n  color: red;\n}\n\n.map {\n  height: 100%;\n  width: 100%;\n}\n\n.map1 {\n  height: 200px;\n  width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi92aWV3LW9yZGVycy9pdGVtcy9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHN1cGVyQWRtaW5cXHZpZXctb3JkZXJzXFxpdGVtc1xcaXRlbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1cGVyQWRtaW4vdmlldy1vcmRlcnMvaXRlbXMvaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vdmlldy1vcmRlcnMvaXRlbXMvaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogZ3JlZW5cclxufVxyXG4uZmFpbCB7XHJcbiAgICBjb2xvcjpyZWRcclxufVxyXG4ubWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubWFwMSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gIH0iLCIuc3VjY2VzcyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZhaWwge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hcDEge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMzUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/superAdmin/view-orders/items/item.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/superAdmin/view-orders/items/item.page.ts ***!
  \***********************************************************/
/*! exports provided: ItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPage", function() { return ItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");





//import * as moment from 'moment';


let ItemsPage = class ItemsPage {
    constructor(route, orderservice, loadingController, 
    //  private events: Events,
    router, toastService) {
        this.route = route;
        this.orderservice = orderservice;
        this.loadingController = loadingController;
        this.router = router;
        this.toastService = toastService;
        this.id = this.route.snapshot.paramMap.get('id');
        this.type = this.route.snapshot.paramMap.get('type');
        // this.today = moment().format('YYYY-MM-DD');
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.GetOrderItems(this.id);
    }
    GetOrderItems(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.orderservice.GetOrder(id).subscribe(res => {
                loading.dismiss();
                if (res) {
                    this.Latitude = 33.6520;
                    this.Longitude = 72.9087;
                    // console.log(res);
                    this.items = res;
                    console.warn(res);
                    this.loadMap();
                }
                else {
                    loading.dismiss();
                    this.toastService.create(res.Message, "danger");
                }
            });
        });
    }
    loadMap() {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: this.Latitude, lng: this.Longitude },
            zoom: 15
        });
        this.myMarker = new google.maps.Marker({
            position: { lat: this.Latitude, lng: this.Longitude },
            draggable: false
        });
        this.map.setCenter(this.myMarker.position);
        this.myMarker.setMap(this.map);
        // google.maps.event.addListener(this.myMarker, "dragend", function(evt) {
        // this.Latitude = evt.latLng.lat().toFixed(3);
        // this.Longitude = evt.latLng.lng().toFixed(3);
        // }); 
    }
    CancelOrder(id, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            status = 3;
            yield this.orderservice.CancelOrder(id, status).subscribe(res => {
                loading.dismiss();
                this.items = res;
                console.warn(res);
                this.toastService.create('Order Cancel request succeded');
                this.router.navigate(['shopowner/order/new']);
                err => {
                    console.log(err);
                    loading.dismiss();
                };
            });
        });
    }
};
ItemsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", { static: true })
], ItemsPage.prototype, "mapElement", void 0);
ItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myshops',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/view-orders/items/item.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item.page.scss */ "./src/app/superAdmin/view-orders/items/item.page.scss")).default]
    })
], ItemsPage);



/***/ }),

/***/ "./src/app/superAdmin/view-orders/items/view-item.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/superAdmin/view-orders/items/view-item.module.ts ***!
  \******************************************************************/
/*! exports provided: ItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item.page */ "./src/app/superAdmin/view-orders/items/item.page.ts");







const routes = [
    {
        path: '',
        component: _item_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]
    },
];
let ItemsPageModule = class ItemsPageModule {
};
ItemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_item_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]]
    })
], ItemsPageModule);



/***/ })

}]);
//# sourceMappingURL=items-view-item-module-es2015.js.map