function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/shop/shop.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/shop/shop.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminShopShopPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n    <ion-tabs>\r\n        <ion-tab-bar slot=\"bottom\">\r\n          <ion-tab-button tab=\"approved\">\r\n            <ion-icon name=\"checkbox-outline\"></ion-icon>\r\n            <ion-label>Active</ion-label>\r\n            <ion-badge *ngIf=\"approvedCount\">{{approvedCount}}</ion-badge>\r\n          </ion-tab-button>\r\n    \r\n          <ion-tab-button tab=\"unapproved\">\r\n           <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n           <ion-label>Disabled</ion-label>\r\n           <ion-badge *ngIf=\"unapprovedCount\">{{unapprovedCount}}</ion-badge>\r\n          </ion-tab-button>\r\n        </ion-tab-bar>\r\n      </ion-tabs>\r\n    \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/superAdmin/shop/shop.module.ts":
  /*!************************************************!*\
    !*** ./src/app/superAdmin/shop/shop.module.ts ***!
    \************************************************/

  /*! exports provided: SuperAdminShopPageModule */

  /***/
  function srcAppSuperAdminShopShopModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperAdminShopPageModule", function () {
      return SuperAdminShopPageModule;
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


    var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shop.page */
    "./src/app/superAdmin/shop/shop.page.ts");

    var routes = [{
      path: '',
      component: _shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"],
      children: [{
        path: '',
        redirectTo: 'approved',
        pathMatch: 'full'
      }, {
        path: 'approved',
        loadChildren: './approved/approved.module#ApprovedPageModule'
      }, {
        path: 'unapproved',
        loadChildren: './unapproved/unapproved.module#UnapprovedPageModule'
      }, {
        path: ':id/products',
        loadChildren: './product/adminproduct.module#AdminProductPageModule'
      }, {
        path: ':id/Viewshops',
        loadChildren: './Viewshops/Viewshops.module#ViewShopsPageModule'
      }]
    }];

    var SuperAdminShopPageModule = function SuperAdminShopPageModule() {
      _classCallCheck(this, SuperAdminShopPageModule);
    };

    SuperAdminShopPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]]
    })], SuperAdminShopPageModule);
    /***/
  },

  /***/
  "./src/app/superAdmin/shop/shop.page.scss":
  /*!************************************************!*\
    !*** ./src/app/superAdmin/shop/shop.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminShopShopPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vc2hvcC9zaG9wLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/superAdmin/shop/shop.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/superAdmin/shop/shop.page.ts ***!
    \**********************************************/

  /*! exports provided: ShopPage */

  /***/
  function srcAppSuperAdminShopShopPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopPage", function () {
      return ShopPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); //import { Events } from '@ionic/angular';


    var ShopPage = /*#__PURE__*/function () {
      function ShopPage() {
        _classCallCheck(this, ShopPage);
      }

      _createClass(ShopPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.event.subscribe('approvedCount', (count) => {
          //   this.approvedCount = count;
          // });
          // this.event.subscribe('unapprovedCount', (count) => {
          //   this.unapprovedCount = count;
          // });
        }
      }]);

      return ShopPage;
    }();

    ShopPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doctor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shop.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/shop/shop.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shop.page.scss */
      "./src/app/superAdmin/shop/shop.page.scss"))["default"]]
    })], ShopPage);
    /***/
  }
}]);
//# sourceMappingURL=shop-shop-module-es5.js.map