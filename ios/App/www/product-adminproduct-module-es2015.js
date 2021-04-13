(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-adminproduct-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/shop/product/product.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/shop/product/product.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"dark\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-back-button  color=\"dark\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n    <ion-title  color=\"dark\" class=\"ion-text-center\">Shop Products</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- \r\n<div slot=\"start\" class=\"pad\">\r\n <ion-searchbar placeholder=\"Search...\" expand=\"full\"  [(ngModel)]=\"searchQuery\" (ionChange)=\"search()\"></ion-searchbar> \r\n</div> -->\r\n<ion-buttons slot=\"end\" >\r\n  <ion-back-button text=\"\" color=\"light\" icon=\"chevron-back-outline\"></ion-back-button>\r\n</ion-buttons>\r\n<ion-content *ngIf = \"shop\" class=\"ion-padding\"  color=\"light\">\r\n\r\n  <ion-card *ngFor= \"let product of shop.products\">\r\n    <ion-item>\r\n    <ion-label><b>{{product.title}}</b></ion-label>\r\n    <ion-button slot=\"end\" name=\"Active\">Active</ion-button>\r\n    <!-- <ion-icon slot =\"end\" name=\"pencil-outline\" routerLink = \"edit/{{product.id}}\" ></ion-icon> -->\r\n  </ion-item>\r\n  \r\n    <ion-card-content>\r\n      <p *ngIf=\"product.isAllowed && !product.isDisabled\" ><b> Status:</b> <span style=\"color: green;\">Active</span></p>\r\n      <p *ngIf=\"!product.isAllowed || product.isDisabled\" ><b> Status:</b> <span style=\"color: lightcoral;\">Pending</span></p>\r\n      <!-- <p>Type: {{shop.group.name}}</p> -->\r\n      <p><b>Description: </b>{{product.description}}</p>\r\n      <p><b>Code:</b> {{product.productCode}} </p>\r\n      <p><b>Stock:</b> {{product.quantity}}</p>\r\n      <p><b>Unit:</b> {{product.unit}}</p>\r\n      <p><b>Weight:</b> {{product.weight}}</p>\r\n      <p><b>Price: </b>{{product.Price}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button routerLink = \"add\" color =\"mytheme\">\r\n      <ion-icon  name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  \r\n</ion-content>");

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

/***/ "./src/app/superAdmin/shop/product/adminproduct.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/superAdmin/shop/product/adminproduct.module.ts ***!
  \****************************************************************/
/*! exports provided: AdminProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductPageModule", function() { return AdminProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "./src/app/superAdmin/shop/product/product.page.ts");







const routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPageAdmin"]
    },
];
let AdminProductPageModule = class AdminProductPageModule {
};
AdminProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPageAdmin"]]
    })
], AdminProductPageModule);



/***/ }),

/***/ "./src/app/superAdmin/shop/product/product.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/superAdmin/shop/product/product.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".success {\n  color: green;\n}\n\n.fail {\n  color: red;\n}\n\n.pad {\n  padding-top: 4px;\n  padding-bottom: 520px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi9zaG9wL3Byb2R1Y3QvRDpcXGdpdGt1aWNrc2F2ZVxcbXVsdGlzdG9yZS1tb2JpbGUtYXBwL3NyY1xcYXBwXFxzdXBlckFkbWluXFxzaG9wXFxwcm9kdWN0XFxwcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3VwZXJBZG1pbi9zaG9wL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9zdXBlckFkbWluL3Nob3AvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWNjZXNzIHtcclxuICAgIGNvbG9yOiBncmVlblxyXG59XHJcbi5mYWlsIHtcclxuICAgIGNvbG9yOnJlZFxyXG59XHJcbi5wYWR7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUyMHB4O1xyXG59IiwiLnN1Y2Nlc3Mge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mYWlsIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/superAdmin/shop/product/product.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/superAdmin/shop/product/product.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductPageAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageAdmin", function() { return ProductPageAdmin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shop.service */ "./src/app/services/shop.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");





//import * as moment from 'moment';

let ProductPageAdmin = class ProductPageAdmin {
    constructor(route, shopservice, loadingController, 
    //  private events: Events,
    toastService) {
        this.route = route;
        this.shopservice = shopservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.id = this.route.snapshot.paramMap.get('id');
        // this.today = moment().format('YYYY-MM-DD');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.shopservice.GetShopProducts(this.id).subscribe(res => {
                loading.dismiss();
                if (res) {
                    // console.log(res);
                    this.shop = res;
                }
                else {
                    loading.dismiss();
                    this.toastService.create(res.Message, "danger");
                }
            });
        });
    }
    ionViewWillEnter() {
        this.GetShopProducts(this.id);
    }
    GetShopProducts(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.shopservice.GetShopProducts(id).subscribe(res => {
                loading.dismiss();
                if (res) {
                    // console.log(res);
                    this.shop = res;
                }
                else {
                    loading.dismiss();
                    this.toastService.create(res.Message, "danger");
                }
            });
        });
    }
    doRefresh(event) {
        this.ngOnInit();
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
    search() {
        this.allproducts.product = this.allproducts.product.filter(item => item.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
};
ProductPageAdmin.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
ProductPageAdmin = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myshops',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/shop/product/product.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product.page.scss */ "./src/app/superAdmin/shop/product/product.page.scss")).default]
    })
], ProductPageAdmin);



/***/ })

}]);
//# sourceMappingURL=product-adminproduct-module-es2015.js.map