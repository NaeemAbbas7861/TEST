(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopproducts-shopproducts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopproducts/shopproducts.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopproducts/shopproducts.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: black;\" *ngIf=\"shop\">{{shop.name}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"fun.navigate('cart')\">\r\n        <ion-icon name=\"cart\" slot=\"icon-only\" class=\"white top-btn ion-no-margin\"  color=\"mycolor1\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"shop\" class=\"ion-padding\"  >\r\n \r\n      <app-productlist [recieved_data]=\"products\"></app-productlist>\r\n</ion-content>\r\n\r\n<div *ngIf=\"NotFound\">\r\n  <ion-text  class=\"mid ion-justify-content-center\"  >No Product Found in this Shop!</ion-text>\r\n</div>");

/***/ }),

/***/ "./src/app/shopproducts/shopproducts.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shopproducts/shopproducts.module.ts ***!
  \*****************************************************/
/*! exports provided: ShopProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopProductsPageModule", function() { return ShopProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shopproducts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopproducts.page */ "./src/app/shopproducts/shopproducts.page.ts");
/* harmony import */ var _productlist_productlist_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../productlist/productlist.page */ "./src/app/productlist/productlist.page.ts");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */







let ShopProductsPageModule = class ShopProductsPageModule {
};
ShopProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _shopproducts_page__WEBPACK_IMPORTED_MODULE_6__["ShopProductsPage"]
                }
            ])
        ],
        declarations: [_shopproducts_page__WEBPACK_IMPORTED_MODULE_6__["ShopProductsPage"], _productlist_productlist_page__WEBPACK_IMPORTED_MODULE_7__["ProductlistPage"]
        ],
        entryComponents: [_productlist_productlist_page__WEBPACK_IMPORTED_MODULE_7__["ProductlistPage"]]
    })
], ShopProductsPageModule);



/***/ }),

/***/ "./src/app/shopproducts/shopproducts.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/shopproducts/shopproducts.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.text {\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n  padding-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHByb2R1Y3RzL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcc2hvcHByb2R1Y3RzXFxzaG9wcHJvZHVjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9zaG9wcHJvZHVjdHMvc2hvcHByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBREFBO0VBQ0ksdUJBQUE7QUNHSjs7QUREQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURIQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0FDTUo7O0FETEk7RUFDSSw4QkFBQTtFQUNBLG1CQUFBO0FDT1I7O0FESkE7RUFDSSx1QkFBQTtBQ09KOztBREpBO0VBQ0ksa0JBQUE7QUNPSjs7QUROSTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDUVI7O0FESkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL3Nob3Bwcm9kdWN0cy9zaG9wcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcclxufVxyXG4uaG9yLXNjcm9sbHtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4ubWVudSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ubXktYnRue1xyXG4gICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gICAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4uYnRuLWFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIH1cclxufVxyXG4jZGFne1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbi5zZWdtZW50dG9vbGJhclNlY3Rpb257XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICAuc2VnU2VjdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBtaW4taGVpZ2h0OjMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5taWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIFxyXG59XHJcbiIsIi5zZWFyY2gtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cblxuLmhvci1zY3JvbGwge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5tZW51IHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5teS1idG4ge1xuICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIG1pbi1oZWlnaHQ6IDI1cHg7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uYnRuLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOm5vbmUgIWltcG9ydGFudDtcbn1cbi5idG4tYWN0aXZlIGlvbi10ZXh0IHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4jZGFnIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5zZWdtZW50dG9vbGJhclNlY3Rpb24ge1xuICAtLW1pbi1oZWlnaHQ6IDMwcHg7XG59XG4uc2VnbWVudHRvb2xiYXJTZWN0aW9uIC5zZWdTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xufVxuXG4ubWlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shopproducts/shopproducts.page.ts":
/*!***************************************************!*\
  !*** ./src/app/shopproducts/shopproducts.page.ts ***!
  \***************************************************/
/*! exports provided: ShopProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopProductsPage", function() { return ShopProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions.service */ "./src/app/functions.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shop.service */ "./src/app/services/shop.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */











let ShopProductsPage = class ShopProductsPage {
    constructor(activatedRoute, menuCtrl, alertController, nav, fun, dataService, shopservice, route, loadingController, toastService, storage) {
        this.activatedRoute = activatedRoute;
        this.menuCtrl = menuCtrl;
        this.alertController = alertController;
        this.nav = nav;
        this.fun = fun;
        this.dataService = dataService;
        this.shopservice = shopservice;
        this.route = route;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.storage = storage;
        this.segment = '';
        this.index = 0;
        this.data = [];
        this.sponsored = [];
        this.NotFound = false;
        this.slideOpts = {
            effect: 'flip',
            zoom: false
        };
        this.data = dataService.tabs;
        // this.product_data_2 = dataService.products_2;
        // const d = this.activatedRoute.snapshot.paramMap.get('id');
        // if (d) {
        //   this.segment = this.data[parseInt(d, 10)].title;
        // } else {
        //   this.segment = this.data[0].title;
        // }
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.menuCtrl.enable(true, 'start');
            this.menuCtrl.enable(true, 'end');
            let id = this.route.snapshot.paramMap.get('id');
            this.GetShopProducts(id);
            // this.storage.set("ShopId" , id);
            this.storage.get("ShopId").then((value) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(value);
                if (value == null)
                    this.storage.set("ShopId", id);
                else if (id != value) {
                    this.storage.get("Cart").then((value) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (value != null && value.length > 0) {
                            const alert = yield this.alertController.create({
                                header: 'Are you Sure?',
                                message: 'Do you want to clear previous shop order?',
                                buttons: [
                                    {
                                        text: 'Ok',
                                        handler: () => {
                                            console.log('Confirm Okay:');
                                            this.storage.remove('Cart');
                                            this.storage.remove('TotalAmount');
                                            this.storage.set("ShopId", id);
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
                        }
                    }));
                }
            }));
        });
    }
    seg(event) {
        this.segment = event.detail.value;
    }
    drag() {
        let distanceToScroll = 0;
        for (let index in this.data) {
            if (parseInt(index) < this.index) {
                distanceToScroll = distanceToScroll + document.getElementById('seg_' + index).offsetWidth + 24;
            }
        }
        document.getElementById('dag').scrollLeft = distanceToScroll;
    }
    preventDefault(e) {
        e.preventDefault();
    }
    change() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.slides.getActiveIndex().then(data => this.index = data);
            this.segment = this.data[this.index].title;
            this.drag();
        });
    }
    side_open() {
        this.menuCtrl.toggle('end');
    }
    update(i) {
        this.slides.slideTo(i).then((res) => console.log('responseSlideTo', res));
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
                    this.products = this.shop.products.filter(x => x.quantity > 0);
                    console.log(res);
                    if (this.products.length < 1) {
                        this.NotFound = true;
                    }
                    else {
                        this.NotFound = false;
                    }
                    this.storage.set("isReturnable", this.shop.isReturnable);
                    console.log(this.shop.isReturnable);
                }
                else {
                    loading.dismiss();
                    this.toastService.create(res.Message, "danger");
                }
            });
        });
    }
};
ShopProductsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_6__["ShopService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Slides')
], ShopProductsPage.prototype, "slides", void 0);
ShopProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopproducts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shopproducts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopproducts/shopproducts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shopproducts.page.scss */ "./src/app/shopproducts/shopproducts.page.scss")).default]
    })
], ShopProductsPage);



/***/ })

}]);
//# sourceMappingURL=shopproducts-shopproducts-module-es2015.js.map