function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"mycolor1\" class=\"ion-text-center\">Cart</ion-title>\r\n    <ion-back-button  style=\"color: black;\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding-top\">\r\n  <div class=\"mid\" *ngIf=\"!show\">\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n      <button class=\"circle\">\r\n        <ion-icon name=\"cart\" size=\"large\"></ion-icon>\r\n      </button>\r\n    </ion-row>\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n      <ion-text><strong>Your cart is empty</strong></ion-text>\r\n    </ion-row>\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n      <ion-button fill=\"clear\" color=\"primary\" (click)=\"browse()\">Browse Products</ion-button>\r\n    </ion-row>\r\n  </div>\r\n  <div *ngIf=\"show\">\r\n    <ion-row class=\"ion-margin-horizontal ion-margin-bottom\">\r\n      <ion-text><strong class=\"text\">Items in Cart</strong></ion-text>\r\n    </ion-row>\r\n    <ion-list #slidingList>\r\n      <ion-item-sliding class=\"ion-no-padding ion-no-margin\" *ngFor=\"let item of items; let j = index;\" class=\"card\" >\r\n        <ion-item lines=\"none\">\r\n          <ion-row>\r\n            <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <!-- <img *ngIf=\"show.logo\" src=\"\" alt=\"item.title\"> -->\r\n              <ion-img *ngIf=\"item.imagepath\" src={{env.RESOURCE_URL}}{{item.imagepath}} class=\"settpic\" alt=\"item.title\"></ion-img> \r\n              <ion-img *ngIf=\"!item.imagepath\" src='../../assets/images/noimage.jpg' alt=\"item.title\"  class=\"settpic\"></ion-img> \r\n              <ion-text color=\"danger\" class=\"small\" (click)=\"remove(j)\">Remove</ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <h3  class=\"item-name ion-no-margin\">{{item.title}}</h3>\r\n              <h5  class=\"item-def ion-no-margin\">{{item.dimension}}</h5>\r\n              <h5  class=\"item-def ion-no-margin\">Rs.{{ item.price - (item.price/100)* item.discount}}</h5>\r\n              <!-- <h5  class=\"item-def ion-no-margin\">shipping: {{item.product.currency}}{{item.product.shipping}}</h5> -->\r\n              <!-- <h5  class=\"item-def ion-no-margin\">Dec 31 - Jan 17</h5> -->\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"ion-float-right\">\r\n              <ion-row class=\"ion-text-end ion-justify-content-end\">\r\n                <!-- <h3  class=\"item-name ion-text-end ion-no-margin\" *ngIf=\"item.product.offer\" >{{item.product.currency}}{{fun.calculate(item.product.cost_price,\r\n                  item.product.discount)}}</h3>\r\n                <h3  class=\"item-name ion-text-end ion-no-margin\" *ngIf=\"item.product.offer\" ><span class=\"cut\">{{item.product.currency}}{{item.product.cost_price}}</span></h3> -->\r\n                <h3 class=\"ion-no-margin ion-text-end\" class=\"item-name\" >Quantity</h3>\r\n              </ion-row>\r\n              <ion-row class=\"ion-justify-content-end\">\r\n                <ion-select placeholder=\"-\" interface=\"popover\" [interfaceOptions]=\"customAlertOptions\" [(ngModel)]='item.quantity' (ionChange)=\"updatequantity(item.productId , item.quantity)\"\r\n                  class=\"select\">\r\n                  <ion-select-option *ngFor=\"let q of item.dropdown; let i = index\" [(value)]=\"item.dropdown[i]\" class=\"ion-text-center\">{{q}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option color=\"danger\" (click)=\"remove(j)\">\r\n            <ion-icon name=\"trash\" size=\"large\"></ion-icon>\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n    <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\r\n        <ion-button fill=\"outline\" color=\"mycolor1\" (click)=\"browse()\" style=\"border: black;\">Continue shopping</ion-button>\r\n      </ion-row>\r\n      <!-- <ion-row>\r\n        <ion-col>\r\n          <ion-input class=\"ion-clearInput\" type=\"text\" placeholder=\"Delivery_Address\" name=\"Delivery_Address\" [(ngModel)]=\"Delivery_Address\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n        </ion-col>\r\n      </ion-row> -->\r\n      \r\n        <ion-list class=\"ion-margin-top\" *ngIf=\"isReturnable\">\r\n          <ion-item>\r\n            <ion-label color=\"mytheme\">Do you want to Exchange Product</ion-label>\r\n            <ion-toggle slot=\"end\" name=\"Exchange\" color=\"mycolor1\" [(ngModel)]=\"Exchange\" ng-checked=\"true\"></ion-toggle>\r\n          </ion-item>\r\n        </ion-list>\r\n        \r\n        <ion-row class=\"ion-margin\" *ngIf=\"Exchange\"  color=\"mytheme\" >\r\n          <ion-col >\r\n             <h3 class=\"item-name\" >Exchange product name</h3>\r\n             <ion-select [(ngModel)]=\"returnitem\" interface=\"popover\" class=\"custom-options\"  class=\"select\"  >\r\n              <ion-select-option [value]=\"return\" *ngFor=\"let return of returndiscountitem\" > {{return.name}}   , <b>RS:</b> {{return.price}} </ion-select-option>\r\n            </ion-select>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"ion-float-right\">\r\n          <ion-row class=\"ion-text-end ion-justify-content-end\">\r\n           <h3 class=\"ion-no-margin ion-text-end\" class=\"item-name\" >Quantity</h3>\r\n          </ion-row>\r\n          <ion-row class=\"ion-justify-content-end\">\r\n           <ion-select interface=\"popover\" class=\"custom-options\"  class=\"select\" [disabled]=\"!returnitem\" [(ngModel)]=\"returnQuantity\"  (ngModelChange)=\"crazyEvent()\">\r\n            <ion-select-option *ngFor=\"let q of returnquantities\"  class=\"ion-text-center\"  [value]=\"q\">{{q}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-row>\r\n        </ion-col>\r\n        </ion-row>\r\n   \r\n    <ion-row class=\"ion-margin\">\r\n      <ion-text><strong class=\"text\">Order Summary</strong></ion-text>\r\n    </ion-row>\r\n    <div lines=\"none\" class=\"card ion-no-margin ion-padding-bottom\" >\r\n      <ion-row class=\"full ion-padding-horizontal\" >\r\n        <ion-col size=\"9\">\r\n          <ion-text>Item Total</ion-text>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"3\" class=\"ion-text-end\">\r\n          <ion-text>{{data[0].product.currency}}{{fix(calculate(0))}}</ion-text>\r\n        </ion-col> -->\r\n        <ion-col size=\"3\" class=\"ion-text-end\">\r\n          <ion-text *ngIf = \"items\"> Rs. {{total}}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    \r\n      <ion-row class=\"full\" class=\"ion-padding-horizontal\">\r\n        <ion-col size=\"9\">\r\n          <ion-text>Shipping charges are payable at <br>the time of delivery</ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"ion-text-end\">\r\n          <ion-text>Rs. {{shipping}}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"full\" class=\"ion-padding-horizontal\" *ngIf=\"Exchange\">\r\n        <ion-col size=\"9\">\r\n          <ion-text>Return Discount</ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"ion-text-end\" >\r\n          <ion-text>Rs. {{returndiscount }}</ion-text>  \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"full\" class=\"ion-padding-horizontal\" *ngIf=\"!Exchange\">\r\n        <ion-col size=\"9\">\r\n          <ion-text>Total</ion-text>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"3\" class=\"ion-text-end\">\r\n          <ion-text>{{data[0].product.currency}}{{fix(add())}}</ion-text>\r\n        </ion-col> -->\r\n        <ion-col size=\"3\" class=\"ion-text-center\" >\r\n          <ion-text>Rs. {{total + shipping  }}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"full\" class=\"ion-padding-horizontal\" *ngIf=\"Exchange\">\r\n        <ion-col size=\"9\">\r\n          <ion-text>Total</ion-text>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"3\" class=\"ion-text-end\">\r\n          <ion-text>{{data[0].product.currency}}{{fix(add())}}</ion-text>\r\n        </ion-col> -->\r\n        <ion-col size=\"3\" class=\"ion-text-end\" >\r\n          <ion-text>Rs. {{total + shipping - returndiscount }}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div class=\"sep\"></div>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-text class=\"item-def\" class=\"ion-text-start\">\r\n            <div class=\"pad\">\r\n              By tapping 'Checkout' you agree to the <a (click)=\"open_modal(true)\" class=\"mycolor1\" >Terms of Use</a>\r\n              and <a class=\"mycolor1\" (click)=\"open_modal(false)\">Privacy Policy</a>\r\n            </div>\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div class=\"sep\"></div>\r\n    </div>\r\n  </div>\r\n   <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n</ion-content>\r\n<ion-footer *ngIf=\"show\" (click)=\"presentAlertConfirm()\">\r\n  <!-- <ion-footer *ngIf=\"show\"> -->\r\n  <ion-toolbar color=\"mycolor1\">\r\n    <ion-title class=\"ion-text-center\">Checkout</ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/cart/cart.module.ts":
  /*!*************************************!*\
    !*** ./src/app/cart/cart.module.ts ***!
    \*************************************/

  /*! exports provided: CartPageModule */

  /***/
  function srcAppCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
      return CartPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/cart/cart.page.ts");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */


    var routes = [{
      path: '',
      component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }];

    var CartPageModule = function CartPageModule() {
      _classCallCheck(this, CartPageModule);
    };

    CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })], CartPageModule);
    /***/
  },

  /***/
  "./src/app/cart/cart.page.scss":
  /*!*************************************!*\
    !*** ./src/app/cart/cart.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".white {\n  color: white;\n}\n\nion-content {\n  color: white;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: #faf6f6;\n  width: 50px;\n  height: 50px;\n}\n\n.input {\n  background-color: #f3f3f3;\n  border-radius: 3px;\n  border: 1px solid #f0f0f0;\n  font-size: 0.9em !important;\n}\n\n.pad {\n  padding: 0 6px;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n}\n\n.full {\n  width: 100%;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: #db9e07;\n}\n\n.sep {\n  height: 1px;\n  background-color: #2c2b2b;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n  color: #db9e07;\n}\n\n.select {\n  background-color: #eee4e4;\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  background-color: #fcf5f5;\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n  color: #2c2b2b;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #2c2b2b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXGNhcnRcXGNhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtBQ01KOztBREpBO0VBQ0ksV0FBQTtBQ09KOztBRExBO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0FDUUo7O0FETkE7RUFDSSxjQUFBO0FDU0o7O0FEUEE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1VKOztBRFJBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDV0o7O0FEVEE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNZSjs7QURWQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ2FKOztBRFhBO0VBQ0ksZUFBQTtBQ2NKOztBRFpBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNlSjs7QURiQTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ2lCSiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2lyY2xle1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1MCwgMjQ2LCAyNDYpO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xyXG59XHJcbi5wYWQge1xyXG4gICAgcGFkZGluZzogMCA2cHg7XHJcbn1cclxuLm1pZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG59XHJcbi5mdWxsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jdXR7XHJcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuLmJsdWV7XHJcbiAgICBjb2xvcjogcmdiKDIxOSwgMTU4LCA3KTs7XHJcbn1cclxuLnNlcCB7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNDMsIDQzKTs7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDZweCAwO1xyXG59XHJcbi50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogLjgxZW07XHJcbiAgICBjb2xvcjpyZ2IoMjE5LCAxNTgsIDcpO1xyXG59XHJcbi5zZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjI4LCAyMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjUyLCAyNDUsIDI0NSk7O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG59XHJcbmRpdntcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG4uaXRlbS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6IHJnYig0NCwgNDMsIDQzKTtcclxufVxyXG4uc21hbGwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAuODFlbTtcclxufVxyXG4uaXRlbS1kZWYge1xyXG4gICAgZm9udC1zaXplOiAuODFlbTtcclxuICAgIGNvbG9yOiByZ2IoNDQsIDQzLCA0Myk7XHJcbn1cclxuIiwiLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY2ZjY7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuXG4ucGFkIHtcbiAgcGFkZGluZzogMCA2cHg7XG59XG5cbi5taWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXQge1xuICBjb2xvcjogIzc4Nzg3ODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICNkYjllMDc7XG59XG5cbi5zZXAge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmIyYjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDZweCAwO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44MWVtO1xuICBjb2xvcjogI2RiOWUwNztcbn1cblxuLnNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU0ZTQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmNWY1O1xuICBtYXJnaW4tdG9wOiA5cHg7XG59XG5cbmRpdiB7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLml0ZW0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzJjMmIyYjtcbn1cblxuLnNtYWxsIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuODFlbTtcbn1cblxuLml0ZW0tZGVmIHtcbiAgZm9udC1zaXplOiAwLjgxZW07XG4gIGNvbG9yOiAjMmMyYjJiO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cart/cart.page.ts":
  /*!***********************************!*\
    !*** ./src/app/cart/cart.page.ts ***!
    \***********************************/

  /*! exports provided: CartPage */

  /***/
  function srcAppCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPage", function () {
      return CartPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _functions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../functions.service */
    "./src/app/functions.service.ts");
    /* harmony import */


    var _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../infomodal/infomodal.page */
    "./src/app/infomodal/infomodal.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */


    var CartPage = /*#__PURE__*/function () {
      function CartPage(menuCtrl, dataService, fun, modalController, storage, route, router, orderservices, nav, loadingController, toastService, alertController) {
        _classCallCheck(this, CartPage);

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
        this.deliveryCharges = 100; // this.data = dataService.cart;
        // if (this.data.length === 0) { this.show = false; }
        // for (let i = 1; i <= 36; i++) { this.AvaliableQty.push(i); }
      }

      _createClass(CartPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.storage.get("Cart").then(function (value) {
            if (value) {
              console.log(value.length);
              _this.items = value;

              if (value.length === 0) {
                _this.show = false;
              } else {
                _this.show = true;
                value.forEach(function (element) {
                  if (!element.dropdown) {
                    element.dropdown = [];

                    for (var i = 1; i <= element.AvaliableQty; i++) {
                      element.dropdown.push(i);
                    }
                  } else {
                    element.dropdown;
                  } //for return quantity


                  for (var j = 1; j <= element.quantity; j++) {
                    _this.returnquantities.push(j);
                  } //

                });
              }

              console.log(_this.items);
              _this.total = _this.calculatetotal(_this.items);

              _this.storage.set("TotalAmount", _this.total);

              _this.storage.set("deliveryCharges", _this.deliveryCharges);
            } else {
              _this.show = false;
            }
          });
          this.Getreturnedproduct();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.doRefresh(event);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this2 = this;

          this.menuCtrl.enable(true, 'start');
          this.menuCtrl.enable(false, 'end');
          this.storage.get("isReturnable").then(function (value) {
            _this2.isReturnable = value;
            console.log(_this2.isReturnable);
          });
        }
      }, {
        key: "open_modal",
        value: function open_modal(b) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!b) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 3;
                    return this.modalController.create({
                      component: _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_5__["InfomodalPage"],
                      componentProps: {
                        value: this.dataService.terms_of_use,
                        title: 'Terms of Use'
                      }
                    });

                  case 3:
                    modal = _context.sent;
                    _context.next = 9;
                    break;

                  case 6:
                    _context.next = 8;
                    return this.modalController.create({
                      component: _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_5__["InfomodalPage"],
                      componentProps: {
                        value: this.dataService.privacy_policy,
                        title: 'Privacy Policy'
                      }
                    });

                  case 8:
                    modal = _context.sent;

                  case 9:
                    _context.next = 11;
                    return modal.present();

                  case 11:
                    return _context.abrupt("return", _context.sent);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // calculate(i) {
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

      }, {
        key: "crazyEvent",
        value: function crazyEvent() {
          console.log(this.returnitem);
          this.storage.set("ReturnQuantity", this.returnQuantity);
          this.returndiscount = this.returnitem.price * this.returnQuantity;
          this.returndiscount = Math.round(this.returndiscount);
          console.log(this.returndiscount);
          this.storage.set("ReturnDiscount", this.returndiscount);
          this.storage.set("ReturnedProductId", this.returnitem.id);
        }
      }, {
        key: "fix",
        value: function fix(a) {
          return a.toFixed(2);
        } // add() {
        //   const res = this.calculate(1) + this.calculate(0);
        //   return res;
        // }

      }, {
        key: "browse",
        value: function browse() {
          this.fun.navigate('/home', false);
        }
      }, {
        key: "remove",
        value: function remove(j) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.fun.removeConform().then(function (res) {
                      console.log('res conform', res);

                      if (res === 'ok') {
                        _this3.slidingList.closeSlidingItems();

                        _this3.items.splice(j, 1);

                        _this3.storage.set("Cart", _this3.items);

                        if (_this3.items.length === 0) {
                          _this3.show = !_this3.show;
                        }
                      }
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "updatequantity",
        value: function updatequantity(productid, quantity) {
          this.items.forEach(function (element) {
            if (element.productId == productid) {
              element.quantity = quantity;
            }
          });
          console.log(this.items);
          this.storage.set("Cart", this.items);
          this.total = this.calculatetotal(this.items);
          this.storage.set("TotalAmount", this.total);

          if (this.returnitem && quantity < this.returnQuantity) {
            this.returnQuantity = 1;
            this.crazyEvent();
          }

          this.returnquantities = [];

          for (var j = 1; j <= quantity; j++) {
            this.returnquantities.push(j);
          }
        }
      }, {
        key: "calculatetotal",
        value: function calculatetotal(cart) {
          var total = 0;
          cart.forEach(function (element) {
            total += (element.price - element.price / 100 * element.discount) * element.quantity;
          });
          return total;
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.ngOnInit();
          setTimeout(function () {
            event.target.complete();
          }, 1000);
        }
      }, {
        key: "Getreturnedproduct",
        value: function Getreturnedproduct() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    _context3.next = 7;
                    return this.orderservices.Getreturnedproduct().subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        console.log(res);
                        _this4.returndiscountitem = res;
                      } else {
                        loading.dismiss();

                        _this4.toastService.create(res.Message, "danger");
                      }
                    });

                  case 7:
                    (function (err) {
                      loading.dismiss();
                      console.log(err);

                      _this4.toastService.create(err, 'danger');
                    });

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Are you Sure?',
                      message: 'Do you want to Buy this Product?',
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          // this.storage.set("Delivery_address", this.Delivery_Address);
                          _this5.storage.get("IsLoggedIn").then(function (value) {
                            if (value == null || value == false) {
                              _this5.router.navigateByUrl('/login');
                            } else {
                              _this5.fun.checkout();
                            }
                          });
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return CartPage;
    }();

    CartPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _functions_service__WEBPACK_IMPORTED_MODULE_4__["FunctionsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('slidingList')], CartPage.prototype, "slidingList", void 0);
    CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-cart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cart.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cart.page.scss */
      "./src/app/cart/cart.page.scss"))["default"]]
    })], CartPage);
    /***/
  },

  /***/
  "./src/app/services/order.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/order.service.ts ***!
    \*******************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./base.service */
    "./src/app/services/base.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var OrderService = /*#__PURE__*/function (_base_service__WEBPAC) {
      _inherits(OrderService, _base_service__WEBPAC);

      var _super = _createSuper(OrderService);

      // private readonly API_PRODUCT = `${environment.BASE_URL}product/`
      function OrderService(http) {
        var _this6;

        _classCallCheck(this, OrderService);

        _this6 = _super.call(this, http);
        _this6.http = http;
        _this6.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        _this6.API_ORDER = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "order/");
        _this6.API_EARNING = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "earning/");
        _this6.API_RETURNDISCOUNT = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "returnedproduct/");
        return _this6;
      }

      _createClass(OrderService, [{
        key: "GetCustomerOrders",
        value: function GetCustomerOrders(id) {
          var url = "".concat(this.API_ORDER, "user/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "Getreturnedproduct",
        value: function Getreturnedproduct() {
          var url = "".concat(this.API_RETURNDISCOUNT);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetReturnedProductbyId",
        value: function GetReturnedProductbyId(id) {
          var url = "".concat(this.API_RETURNDISCOUNT).concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "DeleteProduct",
        value: function DeleteProduct(id) {
          var url = "".concat(this.API_RETURNDISCOUNT).concat(id);
          return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "postreturnedProduct",
        value: function postreturnedProduct(data) {
          var url = "".concat(this.API_RETURNDISCOUNT);
          return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "EditProduct",
        value: function EditProduct(id, data) {
          var url = "".concat(this.API_RETURNDISCOUNT).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetOrderItems",
        value: function GetOrderItems(id) {
          var url = "".concat(this.API_ORDER).concat(id, "/orderitems");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "Allorders",
        value: function Allorders() {
          var url = "".concat(this.API_ORDER);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "riderDashboard",
        value: function riderDashboard(id) {
          var url = "".concat(this.API_ORDER, "rider/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetOrder",
        value: function GetOrder(id) {
          var url = "".concat(this.API_ORDER).concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetCustomerOrder",
        value: function GetCustomerOrder(id) {
          var url = "".concat(this.API_ORDER, "customer/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetUserShopOrders",
        value: function GetUserShopOrders(id) {
          // const url = `${this.API_ORDER}usershop/${id}`;
          var url = "".concat(this.API_ORDER);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetNewUserShopOrders",
        value: function GetNewUserShopOrders(id) {
          var url = "".concat(this.API_ORDER, "usershop/").concat(id, "/0"); ///const url = `${this.API_ORDER}`;

          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetPendingUserShopOrders",
        value: function GetPendingUserShopOrders(id) {
          var url = "".concat(this.API_ORDER, "usershop/").concat(id, "/1");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetCompleteUserShopOrders",
        value: function GetCompleteUserShopOrders(id) {
          var url = "".concat(this.API_ORDER, "usershop/").concat(id, "/2");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetCancelUserShopOrders",
        value: function GetCancelUserShopOrders(id) {
          var url = "".concat(this.API_ORDER, "usershop/").concat(id, "/3");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetNewRiderOrders",
        value: function GetNewRiderOrders(lat, lng) {
          var url = "".concat(this.API_ORDER).concat(lat, "/").concat(lng);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetRiderOrdersByStatus",
        value: function GetRiderOrdersByStatus(id, status) {
          var url = "".concat(this.API_ORDER, "rider/").concat(id, "/").concat(status);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "PostOrder",
        value: function PostOrder(data) {
          var url = "".concat(this.API_ORDER);
          return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "PutOrder",
        value: function PutOrder(id, data) {
          var url = "".concat(this.API_ORDER).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "MarksReceived",
        value: function MarksReceived(id) {
          var url = "".concat(this.API_ORDER).concat(id, "/markreceived");
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "AcceptOrder",
        value: function AcceptOrder(id, riderid, status) {
          var url = "".concat(this.API_ORDER).concat(id, "/").concat(riderid, "/").concat(status);
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "CancelOrder",
        value: function CancelOrder(id, status) {
          var url = "".concat(this.API_ORDER).concat(id, "/changestatus/").concat(status);
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "OrderCompletionCode",
        value: function OrderCompletionCode(id, ordercode, status) {
          var url = "".concat(this.API_ORDER, "complete/").concat(id, "/").concat(ordercode, "/").concat(status);
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetEarning",
        value: function GetEarning(date) {
          var url = "".concat(this.API_EARNING, "superadmin/").concat(date);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetEarningDatetoDate",
        value: function GetEarningDatetoDate(date, date1) {
          var url = "".concat(this.API_EARNING, "superadmin/").concat(date, "/").concat(date1);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "DownloadEarningDatetoDate",
        value: function DownloadEarningDatetoDate(date, date1) {
          var url = "".concat(this.API_EARNING, "downloadcsv/").concat(date, "/").concat(date1);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopEarning",
        value: function GetShopEarning(id, date) {
          var url = "".concat(this.API_EARNING, "shopowner/").concat(id, "/").concat(date);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "ChangePaymentStatus",
        value: function ChangePaymentStatus(id, status, panelty) {
          var url = "".concat(this.API_ORDER, "PaymentStatus/").concat(id, "/").concat(status, "/").concat(panelty);
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }]);

      return OrderService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

    OrderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OrderService);
    /***/
  },

  /***/
  "./src/app/services/toast.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/toast.service.ts ***!
    \*******************************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ToastService = /*#__PURE__*/function () {
      function ToastService(toastCtrl) {
        _classCallCheck(this, ToastService);

        this.toastCtrl = toastCtrl;
      }

      _createClass(ToastService, [{
        key: "create",
        value: function create(message) {
          var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
          var ok = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3000;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (this.toast) {
                      this.toast.dismiss();
                    }

                    _context5.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      color: color,
                      duration: ok ? null : duration,
                      position: 'bottom'
                    });

                  case 3:
                    this.toast = _context5.sent;
                    this.toast.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ToastService;
    }();

    ToastService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ToastService);
    /***/
  }
}]);
//# sourceMappingURL=cart-cart-module-es5.js.map