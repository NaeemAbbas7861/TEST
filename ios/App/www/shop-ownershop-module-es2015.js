(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-ownershop-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/shop.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/shop.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button  style=\"color: black\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\"  style=\"color: black\">Shops</ion-title>\r\n    <ion-back-button   style=\"color: black\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n<div *ngIf = \"shops\">\r\n  <ion-card *ngFor= \"let shop of shops\">\r\n    <ion-item>\r\n    <ion-label><b>{{shop.name}}</b></ion-label>\r\n    \r\n  </ion-item>\r\n  <ion-item color=\"black\">\r\n  <ion-label *ngIf=\"!shop.isVerified\" color=\"mycolor1\" style=\"width: 50px;\" disabled>Products</ion-label>\r\n  <ion-label *ngIf=\"shop.isVerified\" routerLink = \"{{shop.id}}/product\" style=\"width:70px; font-size: 15px;  color:  #e9b006;\" >Products</ion-label> \r\n   <ion-label style=\"width:70px; font-size: 15px;  color:  #e9b006; margin-left: 20px;\" routerLink = \"/superadmin/{{shop.id}}/shopearning\"  color=\"mycolor1\">Earning</ion-label>\r\n    <!-- <ion-icon slot =\"end\" name=\"cash-outline\"  style=\"width: 60px;\" routerLink = \"/superadmin/{{shop.id}}/shopearning\"  color=\"mycolor1\"></ion-icon> -->\r\n    <!-- <ion-icon slot =\"end\" name=\"pencil-outline\"   style=\"width: 50px;\" routerLink = \"edit/{{shop.id}}\" color=\"mycolor1\"></ion-icon> -->\r\n    <ion-label style=\"width:30px;  font-size: 15px;  color:  #e9b006; margin-left: 20px; \" routerLink = \"edit/{{shop.id}}\" color=\"mycolor1\">Edit</ion-label>\r\n    <ion-icon   name=\"trash\" style=\"margin-right: 16px; color: lightcoral; \"  (click)=\"presentAlertConfirm(shop.id)\"></ion-icon>\r\n  </ion-item>\r\n    <ion-card-content>\r\n      <p *ngIf=\"shop.isVerified\" >Status: <span style=\"color: green;\">Active</span></p>\r\n      <p *ngIf=\"!shop.isVerified\" >Status: <span style=\"color: lightcoral;\">Pending</span></p>\r\n      <p>Category: {{shop.group.name}}</p>\r\n      <p>Number: {{shop.contact}}</p>\r\n      <p>NTN NO: {{shop.ndN_Number}}</p>\r\n      <!-- <p>Owner CNIC: {{shop.ownerCNIC}} </p>\r\n      <p>NDN No: {{shop.ndN_Number}}</p>\r\n      <p>latitude: {{shop.latitude}}</p>\r\n      <p>longitude: {{shop.longitude}}</p> -->\r\n      <p>Address: {{shop.address}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</div>\r\n<div class=\"ion-text-center ion-padding-top\" *ngIf = \"!load\">\r\n<p>Error in Loading Shops</p>\r\n  <ion-icon size=\"large\" name=\"reload-outline\" (click)=\"ngOnInit()\"></ion-icon>\r\n</div>\r\n\r\n<div class=\"ion-text-center ion-padding-top\" style=\"padding-top: 260px;\" *ngIf = \"Nodata\">\r\n  <p style=\"font-size: 18px;\">No Shop Found</p>\r\n    \r\n  </div>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button routerLink = \"add\" color =\"white\">\r\n      <ion-icon size=\"large\" name=\"add\" style=\"color: #e9b006;\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  \r\n  \r\n</ion-content>");

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

/***/ "./src/app/shopOwner/shop/ownershop.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shopOwner/shop/ownershop.module.ts ***!
  \****************************************************/
/*! exports provided: OwnerShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerShopPageModule", function() { return OwnerShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop.page */ "./src/app/shopOwner/shop/shop.page.ts");







const routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPageOwner"]
    },
    { path: 'add', loadChildren: './add/addshop.module#AddShopPageModule' },
    { path: 'edit/:id', loadChildren: './edit/editshop.module#EditShopPageModule' },
    { path: ':id/product', loadChildren: './product/product.module#OwnerProductPageModule' },
];
let OwnerShopPageModule = class OwnerShopPageModule {
};
OwnerShopPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPageOwner"]]
    })
], OwnerShopPageModule);



/***/ }),

/***/ "./src/app/shopOwner/shop/shop.page.scss":
/*!***********************************************!*\
  !*** ./src/app/shopOwner/shop/shop.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".success {\n  color: green;\n}\n\n.fail {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcE93bmVyL3Nob3AvRDpcXGdpdGt1aWNrc2F2ZVxcbXVsdGlzdG9yZS1tb2JpbGUtYXBwL3NyY1xcYXBwXFxzaG9wT3duZXJcXHNob3BcXHNob3AucGFnZS5zY3NzIiwic3JjL2FwcC9zaG9wT3duZXIvc2hvcC9zaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3Nob3BPd25lci9zaG9wL3Nob3AucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6IGdyZWVuXHJcbn1cclxuLmZhaWwge1xyXG4gICAgY29sb3I6cmVkXHJcbn0iLCIuc3VjY2VzcyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZhaWwge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shopOwner/shop/shop.page.ts":
/*!*********************************************!*\
  !*** ./src/app/shopOwner/shop/shop.page.ts ***!
  \*********************************************/
/*! exports provided: ShopPageOwner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageOwner", function() { return ShopPageOwner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shop.service */ "./src/app/services/shop.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");







//import * as moment from 'moment';

let ShopPageOwner = class ShopPageOwner {
    constructor(route, api, loadingController, 
    //  private events: Events,
    alertController, toastService, sharedservice) {
        this.route = route;
        this.api = api;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.toastService = toastService;
        this.sharedservice = sharedservice;
        this.load = true;
        this.Nodata = false;
        // this.today = moment().format('YYYY-MM-DD');
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getShopsByUser(this.sharedservice.user.sid);
    }
    getShopsByUser(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.getShopsByUser(id).subscribe(res => {
                console.log(res);
                this.shops = res;
                if (res.length == 0)
                    this.Nodata = true;
                this.load = true;
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
                this.load = false;
            });
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.ionViewDidEnter();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 1000);
    }
    DeleteShopById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: 'Loading' });
            yield loading.present();
            yield this.api.DeleteShop(id).subscribe(res => {
                console.log(res);
                this.shops = res;
                this.doRefresh(event);
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    presentAlertConfirm(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Delete?',
                message: 'Do you want to Delete this Shop?',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.DeleteShopById(id);
                            this.ionViewDidEnter();
                            this.ngOnInit();
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
ShopPageOwner.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
];
ShopPageOwner = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myshops',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shop.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/shop.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shop.page.scss */ "./src/app/shopOwner/shop/shop.page.scss")).default]
    })
], ShopPageOwner);



/***/ })

}]);
//# sourceMappingURL=shop-ownershop-module-es2015.js.map