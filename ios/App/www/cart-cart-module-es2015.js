(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"mycolor1\" class=\"ion-text-center\">Cart</ion-title>\r\n    <ion-back-button  style=\"color: black;\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding-top\">\r\n  <div class=\"mid\" *ngIf=\"!show\">\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n      <button class=\"circle\">\r\n        <ion-icon name=\"cart\" size=\"large\"></ion-icon>\r\n      </button>\r\n    </ion-row>\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n      <ion-text><strong>Your cart is empty</strong></ion-text>\r\n    </ion-row>\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n      <ion-button fill=\"clear\" color=\"primary\" (click)=\"browse()\">Browse Products</ion-button>\r\n    </ion-row>\r\n  </div>\r\n  <div *ngIf=\"show\">\r\n    <ion-row class=\"ion-margin-horizontal ion-margin-bottom\">\r\n      <ion-text><strong class=\"text\">Items in Cart</strong></ion-text>\r\n    </ion-row>\r\n    <ion-list #slidingList>\r\n      <ion-item-sliding class=\"ion-no-padding ion-no-margin\" *ngFor=\"let item of items; let j = index;\" class=\"card\" >\r\n        <ion-item lines=\"none\">\r\n          <ion-row>\r\n            <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <!-- <img *ngIf=\"show.logo\" src=\"\" alt=\"item.title\"> -->\r\n              <ion-img *ngIf=\"item.imagepath\" src={{env.RESOURCE_URL}}{{item.imagepath}} class=\"settpic\" alt=\"item.title\"></ion-img> \r\n              <ion-img *ngIf=\"!item.imagepath\" src='../../assets/images/noimage.jpg' alt=\"item.title\"  class=\"settpic\"></ion-img> \r\n              <ion-text color=\"danger\" class=\"small\" (click)=\"remove(j)\">Remove</ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <h3  class=\"item-name ion-no-margin\">{{item.title}}</h3>\r\n              <h5  class=\"item-def ion-no-margin\">{{item.dimension}}</h5>\r\n              <h5  class=\"item-def ion-no-margin\">Rs.{{ item.price - (item.price/100)* item.discount}}</h5>\r\n              <!-- <h5  class=\"item-def ion-no-margin\">shipping: {{item.product.currency}}{{item.product.shipping}}</h5> -->\r\n              <!-- <h5  class=\"item-def ion-no-margin\">Dec 31 - Jan 17</h5> -->\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"ion-float-right\">\r\n              <ion-row class=\"ion-text-end ion-justify-content-end\">\r\n                <!-- <h3  class=\"item-name ion-text-end ion-no-margin\" *ngIf=\"item.product.offer\" >{{item.product.currency}}{{fun.calculate(item.product.cost_price,\r\n                  item.product.discount)}}</h3>\r\n                <h3  class=\"item-name ion-text-end ion-no-margin\" *ngIf=\"item.product.offer\" ><span class=\"cut\">{{item.product.currency}}{{item.product.cost_price}}</span></h3> -->\r\n                <h3 class=\"ion-no-margin ion-text-end\" class=\"item-name\" >Quantity</h3>\r\n              </ion-row>\r\n              <ion-row class=\"ion-justify-content-end\">\r\n                <ion-select placeholder=\"-\" interface=\"popover\" [interfaceOptions]=\"customAlertOptions\" [(ngModel)]='item.quantity' (ionChange)=\"updatequantity(item.productId , item.quantity)\"\r\n                  class=\"select\">\r\n                  <ion-select-option *ngFor=\"let q of item.dropdown; let i = index\" [(value)]=\"item.dropdown[i]\" class=\"ion-text-center\">{{q}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option color=\"danger\" (click)=\"remove(j)\">\r\n            <ion-icon name=\"trash\" size=\"large\"></ion-icon>\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n        <ion-button fill=\"outline\" color=\"mycolor1\" (click)=\"browse()\" style=\"border: black;\">Continue shopping</ion-button>\r\n      </ion-row>\r\n      <!-- <ion-row>\r\n        <ion-col>\r\n          <ion-input class=\"ion-clearInput\" type=\"text\" placeholder=\"Delivery_Address\" name=\"Delivery_Address\" [(ngModel)]=\"Delivery_Address\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n        </ion-col>\r\n      </ion-row> -->\r\n      \r\n        <ion-list class=\"ion-margin-top\" *ngIf=\"isReturnable\">\r\n          <ion-item>\r\n            <ion-label color=\"mytheme\">Do you want to Exchange Product</ion-label>\r\n            <ion-toggle slot=\"end\" name=\"Exchange\" color=\"mycolor1\" [(ngModel)]=\"Exchange\" ng-checked=\"true\"></ion-toggle>\r\n          </ion-item>\r\n        </ion-list>\r\n        \r\n        <ion-row class=\"ion-margin\" *ngIf=\"Exchange\"  color=\"mytheme\" >\r\n          <ion-col >\r\n             <h3 class=\"item-name\" >Exchange product name</h3>\r\n             <ion-select [(ngModel)]=\"returnitem\" interface=\"popover\" class=\"custom-options\"  class=\"select\"  >\r\n              <ion-select-option [value]=\"return\" *ngFor=\"let return of returndiscountitem\" > {{return.name}}   , <b>RS:</b> {{return.price}} </ion-select-option>\r\n            </ion-select>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"ion-float-right\">\r\n          <ion-row class=\"ion-text-end ion-justify-content-end\">\r\n           <h3 class=\"ion-no-margin ion-text-end\" class=\"item-name\" >Quantity</h3>\r\n          </ion-row>\r\n          <ion-row class=\"ion-justify-content-end\">\r\n           <ion-select interface=\"popover\" class=\"custom-options\"  class=\"select\" [disabled]=\"!returnitem\" [(ngModel)]=\"returnQuantity\"  (ngModelChange)=\"crazyEvent()\">\r\n            <ion-select-option *ngFor=\"let q of returnquantities\"  class=\"ion-text-center\"  [value]=\"q\">{{q}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-row>\r\n        </ion-col>\r\n        </ion-row>\r\n   \r\n    <ion-row class=\"ion-margin\">\r\n      <ion-text><strong class=\"text\">Order Summary</strong></ion-text>\r\n    </ion-row>\r\n    <div lines=\"none\" class=\"card ion-no-margin ion-padding-bottom\" >\r\n      <ion-row class=\"full ion-padding-horizontal\" >\r\n        <ion-col size=\"9\">\r\n          <ion-text>Item Total</ion-text>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"3\" class=\"ion-text-end\">\r\n          <ion-text>{{data[0].product.currency}}{{fix(calculate(0))}}</ion-text>\r\n        </ion-col> -->\r\n        <ion-col size=\"3\" class=\"ion-text-end\">\r\n          <ion-text *ngIf = \"items\"> Rs. {{total}}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    \r\n      <ion-row class=\"full\" class=\"ion-padding-horizontal\">\r\n        <ion-col size=\"9\">\r\n          <ion-text>Shipping charges are payable at <br>the time of delivery</ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"ion-text-end\">\r\n          <ion-text>Rs. {{shipping}}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"full\" class=\"ion-padding-horizontal\" *ngIf=\"Exchange\">\r\n        <ion-col size=\"9\">\r\n          <ion-text>Return Discount</ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"ion-text-end\" >\r\n          <ion-text>Rs. {{returndiscount }}</ion-text>  \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"full\" class=\"ion-padding-horizontal\" *ngIf=\"!Exchange\">\r\n        <ion-col size=\"9\">\r\n          <ion-text>Total</ion-text>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"3\" class=\"ion-text-end\">\r\n          <ion-text>{{data[0].product.currency}}{{fix(add())}}</ion-text>\r\n        </ion-col> -->\r\n        <ion-col size=\"3\" class=\"ion-text-center\" >\r\n          <ion-text>Rs. {{total + shipping  }}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"full\" class=\"ion-padding-horizontal\" *ngIf=\"Exchange\">\r\n        <ion-col size=\"9\">\r\n          <ion-text>Total</ion-text>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"3\" class=\"ion-text-end\">\r\n          <ion-text>{{data[0].product.currency}}{{fix(add())}}</ion-text>\r\n        </ion-col> -->\r\n        <ion-col size=\"3\" class=\"ion-text-end\" >\r\n          <ion-text>Rs. {{total + shipping - returndiscount }}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div class=\"sep\"></div>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-text class=\"item-def\" class=\"ion-text-start\">\r\n            <div class=\"pad\">\r\n              By tapping 'Checkout' you agree to the <a (click)=\"open_modal(true)\" class=\"mycolor1\" >Terms of Use</a>\r\n              and <a class=\"mycolor1\" (click)=\"open_modal(false)\">Privacy Policy</a>\r\n            </div>\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div class=\"sep\"></div>\r\n    </div>\r\n  </div>\r\n   <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n</ion-content>\r\n<ion-footer *ngIf=\"show\" (click)=\"presentAlertConfirm()\">\r\n  <!-- <ion-footer *ngIf=\"show\"> -->\r\n  <ion-toolbar color=\"mycolor1\">\r\n    <ion-title class=\"ion-text-center\">Checkout</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");

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
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
let CartPageModule = class CartPageModule {
};
CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".white {\n  color: white;\n}\n\nion-content {\n  color: white;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: #faf6f6;\n  width: 50px;\n  height: 50px;\n}\n\n.input {\n  background-color: #f3f3f3;\n  border-radius: 3px;\n  border: 1px solid #f0f0f0;\n  font-size: 0.9em !important;\n}\n\n.pad {\n  padding: 0 6px;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n}\n\n.full {\n  width: 100%;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: #db9e07;\n}\n\n.sep {\n  height: 1px;\n  background-color: #2c2b2b;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n  color: #db9e07;\n}\n\n.select {\n  background-color: #eee4e4;\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  background-color: #fcf5f5;\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n  color: #2c2b2b;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #2c2b2b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXGNhcnRcXGNhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtBQ01KOztBREpBO0VBQ0ksV0FBQTtBQ09KOztBRExBO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0FDUUo7O0FETkE7RUFDSSxjQUFBO0FDU0o7O0FEUEE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1VKOztBRFJBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDV0o7O0FEVEE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNZSjs7QURWQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ2FKOztBRFhBO0VBQ0ksZUFBQTtBQ2NKOztBRFpBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNlSjs7QURiQTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ2lCSiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2lyY2xle1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1MCwgMjQ2LCAyNDYpO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wYWQge1xyXG4gICAgcGFkZGluZzogMCA2cHg7XHJcbn1cclxuLm1pZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG59XHJcbi5mdWxsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jdXR7XHJcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuLmJsdWV7XHJcbiAgICBjb2xvcjogcmdiKDIxOSwgMTU4LCA3KTs7XHJcbn1cclxuLnNlcCB7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNDMsIDQzKTs7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDZweCAwO1xyXG59XHJcbi50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogLjgxZW07XHJcbiAgICBjb2xvcjpyZ2IoMjE5LCAxNTgsIDcpO1xyXG59XHJcbi5zZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjI4LCAyMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjUyLCAyNDUsIDI0NSk7O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG59XHJcbmRpdntcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG4uaXRlbS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6IHJnYig0NCwgNDMsIDQzKTtcclxufVxyXG4uc21hbGwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAuODFlbTtcclxufVxyXG4uaXRlbS1kZWYge1xyXG4gICAgZm9udC1zaXplOiAuODFlbTtcclxuICAgIGNvbG9yOiByZ2IoNDQsIDQzLCA0Myk7XHJcbn1cclxuIiwiLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY2ZjY7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuXG4ucGFkIHtcbiAgcGFkZGluZzogMCA2cHg7XG59XG5cbi5taWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXQge1xuICBjb2xvcjogIzc4Nzg3ODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICNkYjllMDc7XG59XG5cbi5zZXAge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmIyYjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDZweCAwO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44MWVtO1xuICBjb2xvcjogI2RiOWUwNztcbn1cblxuLnNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU0ZTQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmNWY1O1xuICBtYXJnaW4tdG9wOiA5cHg7XG59XG5cbmRpdiB7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLml0ZW0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzJjMmIyYjtcbn1cblxuLnNtYWxsIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuODFlbTtcbn1cblxuLml0ZW0tZGVmIHtcbiAgZm9udC1zaXplOiAwLjgxZW07XG4gIGNvbG9yOiAjMmMyYjJiO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions.service */ "./src/app/functions.service.ts");
/* harmony import */ var _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../infomodal/infomodal.page */ "./src/app/infomodal/infomodal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */











let CartPage = class CartPage {
    constructor(menuCtrl, dataService, fun, modalController, storage, route, router, orderservices, nav, loadingController, toastService, alertController) {
        this.menuCtrl = menuCtrl;
        this.dataService = dataService;
        this.fun = fun;
        this.modalController = modalController;
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.orderservices = orderservices;
        this.nav = nav;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.alertController = alertController;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"];
        this.show = true;
        this.Exchange = false;
        this.customAlertOptions = {
            header: 'Select Quantity',
            translucent: true
        };
        this.AvaliableQty = [];
        this.code = '';
        this.data = [];
        this.items = [];
        this.returnquantities = [];
        this.shipping = 100;
        this.quantity = 1;
        this.returnQuantity = 0;
        this.deliveryCharges = 100;
        // this.data = dataService.cart;
        // if (this.data.length === 0) { this.show = false; }
        // for (let i = 1; i <= 36; i++) { this.AvaliableQty.push(i); }
    }
    ngOnInit() {
        this.storage.get("Cart").then(value => {
            if (value) {
                console.log(value.length);
                this.items = value;
                if (value.length === 0) {
                    this.show = false;
                }
                else {
                    this.show = true;
                    value.forEach(element => {
                        if (!element.dropdown) {
                            element.dropdown = [];
                            for (let i = 1; i <= element.AvaliableQty; i++) {
                                element.dropdown.push(i);
                            }
                        }
                        else {
                            element.dropdown;
                        }
                        //for return quantity
                        for (let j = 1; j <= element.quantity; j++) {
                            this.returnquantities.push(j);
                        }
                        //
                    });
                }
                console.log(this.items);
                this.total = this.calculatetotal(this.items);
                this.storage.set("TotalAmount", (this.total));
                this.storage.set("deliveryCharges", this.deliveryCharges);
            }
            else {
                this.show = false;
            }
        });
        this.Getreturnedproduct();
    }
    ionViewWillEnter() {
        this.doRefresh(event);
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(true, 'start');
        this.menuCtrl.enable(false, 'end');
        this.storage.get("isReturnable").then(value => {
            this.isReturnable = value;
            console.log(this.isReturnable);
        });
    }
    open_modal(b) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal;
            if (b) {
                modal = yield this.modalController.create({
                    component: _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_5__["InfomodalPage"],
                    componentProps: { value: this.dataService.terms_of_use, title: 'Terms of Use' }
                });
            }
            else {
                modal = yield this.modalController.create({
                    component: _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_5__["InfomodalPage"],
                    componentProps: { value: this.dataService.privacy_policy, title: 'Privacy Policy' }
                });
            }
            return yield modal.present();
        });
    }
    // calculate(i) {
    //   let res = 0;
    //   if (i === 0) {
    //     for (const j of this.data) {
    //       if (j.product.offer) {
    //         res += this.fun.calculate(j.product.cost_price, j.product.discount) * j.quantity;
    //       } else {
    //         res += j.product.cost_price * j.quantity;
    //       }
    //     }
    //   }
    //   if (i === 1) {
    //     for (const j of this.data) {
    //       res += j.product.shipping;
    //     }
    //   }
    //   return res;
    // }
    crazyEvent() {
        console.log(this.returnitem);
        this.storage.set("ReturnQuantity", this.returnQuantity);
        this.returndiscount = this.returnitem.price * this.returnQuantity;
        this.returndiscount = Math.round(this.returndiscount);
        console.log(this.returndiscount);
        this.storage.set("ReturnDiscount", this.returndiscount);
        this.storage.set("ReturnedProductId", this.returnitem.id);
    }
    fix(a) {
        return a.toFixed(2);
    }
    // add() {
    //   const res = this.calculate(1) + this.calculate(0);
    //   return res;
    // }
    browse() {
        this.fun.navigate('/home', false);
    }
    remove(j) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.fun.removeConform().then(res => {
                console.log('res conform', res);
                if (res === 'ok') {
                    this.slidingList.closeSlidingItems();
                    this.items.splice(j, 1);
                    this.storage.set("Cart", this.items);
                    if (this.items.length === 0) {
                        this.show = !this.show;
                    }
                }
            });
        });
    }
    updatequantity(productid, quantity) {
        this.items.forEach(element => {
            if (element.productId == productid) {
                element.quantity = quantity;
            }
        });
        console.log(this.items);
        this.storage.set("Cart", this.items);
        this.total = this.calculatetotal(this.items);
        this.storage.set("TotalAmount", (this.total));
        if (this.returnitem && quantity < this.returnQuantity) {
            this.returnQuantity = 1;
            this.crazyEvent();
        }
        this.returnquantities = [];
        for (let j = 1; j <= quantity; j++) {
            this.returnquantities.push(j);
        }
    }
    calculatetotal(cart) {
        let total = 0;
        cart.forEach(element => {
            total += (element.price - (element.price / 100) * element.discount) * element.quantity;
        });
        return total;
    }
    doRefresh(event) {
        this.ngOnInit();
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
    Getreturnedproduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.orderservices.Getreturnedproduct().subscribe(res => {
                loading.dismiss();
                if (res) {
                    console.log(res);
                    this.returndiscountitem = res;
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
    presentAlertConfirm(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you Sure?',
                message: 'Do you want to Buy this Product?',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            // this.storage.set("Delivery_address", this.Delivery_Address);
                            this.storage.get("IsLoggedIn").then(value => {
                                if (value == null || value == false) {
                                    this.router.navigateByUrl('/login');
                                }
                                else {
                                    this.fun.checkout();
                                }
                            });
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
CartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('slidingList')
], CartPage.prototype, "slidingList", void 0);
CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")).default]
    })
], CartPage);



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
//# sourceMappingURL=cart-cart-module-es2015.js.map