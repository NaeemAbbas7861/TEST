(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newpayment-newpayment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/newpayment/newpayment.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newpayment/newpayment.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"light\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">Add New Payment</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-text><span class=\"label\">Credit/Debit Number</span></ion-text>\r\n      <ion-input class=\"input\" padding-horizontal type=\"number\" placeholder=\"Credit/Debit Number\"></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-text><span class=\"label\">Security Code(CVV)</span></ion-text>\r\n      <ion-input class=\"input\" padding-horizontal type=\"number\" placeholder=\"CVV\"></ion-input>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-text><span class=\"label\">Expiry Date</span></ion-text>\r\n      <ion-input class=\"input\" placeholder=\"MM/YY\" padding-horizontal></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <h5 no-margin class=\"label\">Billing Zip/Postal Code</h5>\r\n      <h6 class=\"small\">The zip or postal code from the address registered for this card</h6>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-input class=\"input\" placeholder=\"Zip/Postal Code\" padding-horizontal></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-icon name=\"lock\" class=\"icon\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col>\r\n      <h5 no-margin class=\"label\">Secure Payment</h5>\r\n      <h6 class=\"small\">Trusted by over 500 million shoppers in 50 countries</h6>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-button expand=\"block\" color=\"mytheme\" class=\"bottom\" (click)=\"done()\"><span class=\"white\"><strong>Add New\r\n        Payment Method</strong></span></ion-button>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/newpayment/newpayment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/newpayment/newpayment.module.ts ***!
  \*************************************************/
/*! exports provided: NewpaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpaymentPageModule", function() { return NewpaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _newpayment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newpayment.page */ "./src/app/newpayment/newpayment.page.ts");

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
        component: _newpayment_page__WEBPACK_IMPORTED_MODULE_6__["NewpaymentPage"]
    }
];
let NewpaymentPageModule = class NewpaymentPageModule {
};
NewpaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_newpayment_page__WEBPACK_IMPORTED_MODULE_6__["NewpaymentPage"]]
    })
], NewpaymentPageModule);



/***/ }),

/***/ "./src/app/newpayment/newpayment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/newpayment/newpayment.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input {\n  border: 0.5px solid #d2d2d2;\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n\n.label {\n  font-size: 12px;\n}\n\n.small {\n  font-size: 9px;\n  color: #787878;\n}\n\n.icon {\n  font-size: 21px;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 10px;\n  width: 90%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cGF5bWVudC9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXG5ld3BheW1lbnRcXG5ld3BheW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9uZXdwYXltZW50L25ld3BheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9uZXdwYXltZW50L25ld3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcclxuICAgIGJvcmRlcjogLjVweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xyXG59XHJcbi5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcclxufVxyXG4uaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuLmJvdHRvbSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG59IiwiLmlucHV0IHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZDJkMmQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzc4Nzg3ODtcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDIxcHg7XG59XG5cbi5ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/newpayment/newpayment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/newpayment/newpayment.page.ts ***!
  \***********************************************/
/*! exports provided: NewpaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpaymentPage", function() { return NewpaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions.service */ "./src/app/functions.service.ts");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */




let NewpaymentPage = class NewpaymentPage {
    constructor(menuCtrl, fun, dataService, alertController) {
        this.menuCtrl = menuCtrl;
        this.fun = fun;
        this.dataService = dataService;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false, 'start');
        this.menuCtrl.enable(false, 'end');
    }
    done() {
        this.fun.back();
    }
    back() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you sure?',
                message: 'Do you want to cancel entering your payment info?',
                buttons: [
                    {
                        text: 'Yes',
                        cssClass: 'mycolor',
                        handler: (blah) => {
                            this.fun.back();
                        }
                    }, {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'mycolor',
                        handler: () => { }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
NewpaymentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
NewpaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newpayment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newpayment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/newpayment/newpayment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./newpayment.page.scss */ "./src/app/newpayment/newpayment.page.scss")).default]
    })
], NewpaymentPage);



/***/ })

}]);
//# sourceMappingURL=newpayment-newpayment-module-es2015.js.map