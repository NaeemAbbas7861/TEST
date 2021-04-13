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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"fun.navigate('cart')\">\r\n        <ion-icon name=\"cart\" slot=\"icon-only\" color=\"mycolor1\" class=\"white top-btn ion-no-margin\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\" style=\"color: black;\">Home</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div *ngIf = \"location\">\r\n  <ion-searchbar  placeholder=\"Search Shop\" expand=\"full\"  [(ngModel)]=\"searchQuery\" (ionChange)=\"search()\"></ion-searchbar>\r\n</div>\r\n\r\n<ion-content *ngIf = \"location\" class=\"ion-justify-content-center\">\r\n  \r\n  <ion-select [(ngModel)]=\"groupid\" placeholder=\"All Shops\" (ngModelChange)=\"getShops(groupid,Latitude,Longitude)\">\r\n    <ion-select-option *ngFor=\"let group of groups\" [value]=\"group.id\" >{{group.name}}</ion-select-option>\r\n  </ion-select>\r\n\r\n  <ion-card *ngFor=\"let shop of shops\">  \r\n    <div *ngIf=\"shop.isInRange\" routerLink=\"/shopproducts/{{shop.id}}\">\r\n      <ion-img *ngIf=\"shop.logo\" style=\"height: 220px; width: 100%; \"  src= \"{{env.RESOURCE_URL}}{{shop.logo}}\" ></ion-img>\r\n       <ion-img *ngIf=\"!shop.logo\" style=\"width: 100%; \" src='../../assets/images/noimage.jpg'></ion-img> \r\n    <ion-card-content>\r\n      <ion-card-title>{{shop.name}} </ion-card-title>\r\n    </ion-card-content>\r\n    </div>\r\n   \r\n    <div *ngIf=\"!shop.isInRange\">\r\n      <ion-img *ngIf=\"shop.logo\" style=\"width: 100%; \" src= \"{{env.RESOURCE_URL}}{{shop.logo}}\" ></ion-img>\r\n       <ion-img *ngIf=\"!shop.logo\" style=\"width: 100%; \" src='../../assets/images/noimage.jpg'></ion-img> \r\n    <ion-card-content>\r\n      <ion-card-title>{{shop.name}} </ion-card-title>\r\n      <span>(out of range)</span>\r\n    </ion-card-content>\r\n    </div>\r\n  </ion-card>\r\n  \r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n</ion-content>\r\n\r\n<div *ngIf=\"NotFound\">\r\n  <ion-text  class=\"mid ion-justify-content-center\"  > No Shops found matching your filter</ion-text>\r\n</div>\r\n\r\n\r\n<div class=\"ion-text-center ion-padding\" *ngIf = \"!location\">\r\n  <p>Error in Loading Location <br> Kindly Enable your Gps and Try again</p>\r\n    <ion-icon size=\"large\" name=\"reload-outline\" (click)=\"ionViewDidEnter()\"></ion-icon>\r\n  </div>";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */
    //import { ProductlistPage } from '../productlist/productlist.page';


    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
      providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]],
      entryComponents: []
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.text {\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n\nspan {\n  color: rgba(194, 34, 34, 0.596);\n}\n\n.end11 {\n  padding-top: 5px;\n}\n\n.pad {\n  padding-top: 4px;\n  padding-bottom: 520px;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n  padding-left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSx1QkFBQTtBQ0dKOztBRERBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0tKOztBREhBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7QUNNSjs7QURMSTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUNPUjs7QURKQTtFQUNJLHVCQUFBO0FDT0o7O0FESkE7RUFDSSxrQkFBQTtBQ09KOztBRE5JO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNRUjs7QURMQTtFQUNJLCtCQUFBO0FDUUo7O0FETkE7RUFDSSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQ1VKOztBRFJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDV0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcclxufVxyXG4uaG9yLXNjcm9sbHtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4ubWVudSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ubXktYnRue1xyXG4gICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gICAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4uYnRuLWFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIH1cclxufVxyXG4jZGFne1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbi5zZWdtZW50dG9vbGJhclNlY3Rpb257XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICAuc2VnU2VjdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBtaW4taGVpZ2h0OjMwcHg7XHJcbiAgICB9XHJcbn1cclxuc3BhbntcclxuICAgIGNvbG9yOiByZ2JhKDE5NCwgMzQsIDM0LCAwLjU5Nik7XHJcbn1cclxuLmVuZDExe1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4ucGFke1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MjBweDtcclxufVxyXG4ubWlkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBcclxufSIsIi5zZWFyY2gtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cblxuLmhvci1zY3JvbGwge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5tZW51IHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5teS1idG4ge1xuICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIG1pbi1oZWlnaHQ6IDI1cHg7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uYnRuLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOm5vbmUgIWltcG9ydGFudDtcbn1cbi5idG4tYWN0aXZlIGlvbi10ZXh0IHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4jZGFnIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5zZWdtZW50dG9vbGJhclNlY3Rpb24ge1xuICAtLW1pbi1oZWlnaHQ6IDMwcHg7XG59XG4uc2VnbWVudHRvb2xiYXJTZWN0aW9uIC5zZWdTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHJnYmEoMTk0LCAzNCwgMzQsIDAuNTk2KTtcbn1cblxuLmVuZDExIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnBhZCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MjBweDtcbn1cblxuLm1pZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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
    /* harmony import */


    var _functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../functions.service */
    "./src/app/functions.service.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/shop.service */
    "./src/app/services/shop.service.ts");
    /* harmony import */


    var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/group.service */
    "./src/app/services/group.service.ts");
    /* harmony import */


    var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/shared.service */
    "./src/app/services/shared.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */


    var HomePage = /*#__PURE__*/function () {
      function HomePage(activatedRoute, menuCtrl, fun, dataService, router, shopservice, loadingController, toastService, sharedservice, groupservice, geolocation, storage) {
        _classCallCheck(this, HomePage);

        this.activatedRoute = activatedRoute;
        this.menuCtrl = menuCtrl;
        this.fun = fun;
        this.dataService = dataService;
        this.router = router;
        this.shopservice = shopservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.sharedservice = sharedservice;
        this.groupservice = groupservice;
        this.geolocation = geolocation;
        this.storage = storage;
        this.segment = '';
        this.index = 0;
        this.data = [];
        this.sponsored = [];
        this.product_data_1 = [];
        this.product_data_2 = [];
        this.slideOpts = {
          effect: 'flip',
          zoom: false
        };
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"];
        this.NotFound = false;
        this.location = true;
        this.allshops = [];
        this.data = dataService.tabs;
        var d = this.activatedRoute.snapshot.paramMap.get('id');

        if (d) {
          this.segment = this.data[parseInt(d, 10)].title;
        } else {
          this.segment = this.data[0].title;
        }
      }

      _createClass(HomePage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menuCtrl.enable(true, 'start');
          this.menuCtrl.enable(true, 'end');
          if (this.sharedservice.user.RoleName == 'SuperAdmin') this.router.navigate(['superadmin/dashboard']);else if (this.sharedservice.user.RoleName == 'ShopOwner') this.router.navigate(['shopowner/dashboard']);else if (this.sharedservice.user.RoleName == 'Rider') this.router.navigate(['rider/dashboard']);else if (this.sharedservice.user.RoleName == 'Customer') {
            this.getUserLocation();
          }
        }
      }, {
        key: "seg",
        value: function seg(event) {
          this.segment = event.detail.value;
        }
      }, {
        key: "drag",
        value: function drag() {
          var distanceToScroll = 0;

          for (var index in this.data) {
            if (parseInt(index) < this.index) {
              distanceToScroll = distanceToScroll + document.getElementById('seg_' + index).offsetWidth + 24;
            }
          }

          document.getElementById('dag').scrollLeft = distanceToScroll;
        }
      }, {
        key: "preventDefault",
        value: function preventDefault(e) {
          e.preventDefault();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "change",
        value: function change() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.slides.getActiveIndex().then(function (data) {
                      return _this.index = data;
                    });

                  case 2:
                    this.segment = this.data[this.index].title;
                    this.drag();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "side_open",
        value: function side_open() {
          this.menuCtrl.toggle('end');
        }
      }, {
        key: "update",
        value: function update(i) {
          this.slides.slideTo(i).then(function (res) {
            return console.log('responseSlideTo', res);
          });
        }
      }, {
        key: "getUserLocation",
        value: function getUserLocation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create({
                      message: "Getting location"
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    this.geolocation.getCurrentPosition({
                      maximumAge: 60000,
                      timeout: 4000,
                      enableHighAccuracy: true
                    }).then(function (resp) {
                      loading.dismiss();
                      _this2.location = true;
                      _this2.Latitude = resp.coords.latitude;
                      _this2.Longitude = resp.coords.longitude;
                      console.log("Latitude", _this2.Latitude, "Longitude", _this2.Longitude);

                      _this2.getShops('all', _this2.Latitude, _this2.Longitude);

                      _this2.getGroups();
                    })["catch"](function (error) {
                      console.log("Error getting location", error);
                      _this2.location = false;
                      loading.dismiss();
                    });

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getShops",
        value: function getShops(type, lat, lng) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 2:
                    loading = _context4.sent;
                    _context4.next = 5;
                    return loading.present();

                  case 5:
                    if (!(type == 'all')) {
                      _context4.next = 10;
                      break;
                    }

                    _context4.next = 8;
                    return this.shopservice.GetShops(lat, lng).subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        console.log(res);
                        _this3.shops = res;
                        _this3.allshops = res;

                        _this3.storage.set("customerLat", lat);

                        _this3.storage.set("customerLong", lng); //  this.ngOnInit();

                      } else {
                        loading.dismiss();

                        _this3.toastService.create(res.Message, "danger");
                      }
                    }, function (err) {
                      loading.dismiss();

                      _this3.toastService.create(err, "danger");
                    });

                  case 8:
                    _context4.next = 12;
                    break;

                  case 10:
                    _context4.next = 12;
                    return this.shopservice.GetShopsByCategory(type, lat, lng).subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        console.log(res);
                        _this3.shops = res;
                        _this3.allshops = res; //  this.ngOnInit();
                      } else {
                        loading.dismiss();

                        _this3.toastService.create(res.Message, "danger");
                      }
                    }, function (err) {
                      loading.dismiss();

                      _this3.toastService.create(err, "danger");
                    });

                  case 12:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getGroups",
        value: function getGroups() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 2:
                    loading = _context5.sent;
                    _context5.next = 5;
                    return loading.present();

                  case 5:
                    _context5.next = 7;
                    return this.groupservice.GetGroups().subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        _this4.groups = res;
                      } else {
                        loading.dismiss();

                        _this4.toastService.create(res.Message, "danger");
                      }
                    }, function (err) {
                      loading.dismiss();

                      _this4.toastService.create(err, "danger");
                    });

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          console.log('Begin async operation');
          this.ionViewDidEnter();
          setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
          }, 1000);
        }
      }, {
        key: "search",
        value: function search() {
          var _this5 = this;

          this.shops = this.allshops.filter(function (item) {
            return item.name.toLowerCase().includes(_this5.searchQuery.toLowerCase());
          });

          if (this.shops.length == 0) {
            this.NotFound = true;
          } else this.NotFound = false;
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_6__["ShopService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]
      }, {
        type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
      }, {
        type: src_app_services_group_service__WEBPACK_IMPORTED_MODULE_7__["GroupService"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Slides')], HomePage.prototype, "slides", void 0);
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  },

  /***/
  "./src/app/services/shop.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/shop.service.ts ***!
    \******************************************/

  /*! exports provided: ShopService */

  /***/
  function srcAppServicesShopServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopService", function () {
      return ShopService;
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

    var ShopService = /*#__PURE__*/function (_base_service__WEBPAC) {
      _inherits(ShopService, _base_service__WEBPAC);

      var _super = _createSuper(ShopService);

      function ShopService(http) {
        var _this6;

        _classCallCheck(this, ShopService);

        _this6 = _super.call(this, http);
        _this6.http = http;
        _this6.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        _this6.API_SHOP = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "shop/");
        _this6.API_PRODUCT = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "product/");
        _this6.API_BANK = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "bank/");
        return _this6;
      }

      _createClass(ShopService, [{
        key: "GetShops",
        value: function GetShops(lat, lng) {
          var url = "".concat(this.API_SHOP).concat(lat, "/").concat(lng);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopsByCategory",
        value: function GetShopsByCategory(groupid, lat, lng) {
          var url = "".concat(this.API_SHOP).concat(lat, "/").concat(lng, "/").concat(groupid);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetSingleShopByName",
        value: function GetSingleShopByName() {
          var url = "".concat(this.API_SHOP);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "getApprovedShops",
        value: function getApprovedShops() {
          var url = "".concat(this.API_SHOP, "verified");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "getUnApprovedShops",
        value: function getUnApprovedShops() {
          var url = "".concat(this.API_SHOP, "unverfied");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "getShopsByUser",
        value: function getShopsByUser(id) {
          var url = "".concat(this.API_SHOP, "user/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "ApproveShop",
        value: function ApproveShop(id, data) {
          var url = "".concat(this.API_SHOP).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "UpdateShop",
        value: function UpdateShop(id, data) {
          var url = "".concat(this.API_SHOP).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "UpdateProduct",
        value: function UpdateProduct(id, data) {
          var url = "".concat(this.API_PRODUCT).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopProducts",
        value: function GetShopProducts(id) {
          var url = "".concat(this.API_SHOP).concat(id, "/products");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopByProducts",
        value: function GetShopByProducts(id) {
          var url = "".concat(this.API_SHOP, "products/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopByuserProducts",
        value: function GetShopByuserProducts(id) {
          var url = "".concat(this.API_PRODUCT, "userProduct/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShop",
        value: function GetShop(id) {
          var url = "".concat(this.API_SHOP).concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetProductDetail",
        value: function GetProductDetail(id) {
          var url = "".concat(this.API_PRODUCT).concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "PostShop",
        value: function PostShop(data) {
          var url = "".concat(this.API_SHOP);
          return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "PostProduct",
        value: function PostProduct(data) {
          var url = "".concat(this.API_PRODUCT);
          return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetProduct",
        value: function GetProduct() {
          var url = "".concat(this.API_PRODUCT);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "DeleteProductbyId",
        value: function DeleteProductbyId(id) {
          var url = "".concat(this.API_PRODUCT).concat(id);
          return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "DeleteShop",
        value: function DeleteShop(id) {
          var url = "".concat(this.API_SHOP).concat(id);
          return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetBank",
        value: function GetBank() {
          var url = "".concat(this.API_BANK);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }]);

      return ShopService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

    ShopService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ShopService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ShopService);
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (this.toast) {
                      this.toast.dismiss();
                    }

                    _context6.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      color: color,
                      duration: ok ? null : duration,
                      position: 'bottom'
                    });

                  case 3:
                    this.toast = _context6.sent;
                    this.toast.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
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
//# sourceMappingURL=home-home-module-es5.js.map