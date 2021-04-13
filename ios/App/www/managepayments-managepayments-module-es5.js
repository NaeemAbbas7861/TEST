function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["managepayments-managepayments-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/managepayments/managepayments.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/managepayments/managepayments.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppManagepaymentsManagepaymentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"light\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">Manage Payments</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"light\">\r\n  <ion-row padding-start padding-top>\r\n    <ion-text>\r\n      <h4 no-margin class=\"medium\"><strong>Payment methods</strong></h4>\r\n    </ion-text>\r\n  </ion-row>\r\n  <ion-row padding-start padding-bottom>\r\n    <ion-text>\r\n      <h4 no-margin class=\"small\" color=\"light\">Slide item for options</h4>\r\n    </ion-text>\r\n  </ion-row>\r\n  <ion-list lines=\"none\" *ngIf=\"dataService.current_user.billing.length > 0\">\r\n    <ion-item-sliding *ngFor=\"let add of dataService.current_user.billing; let i = index;\">\r\n      <ion-item>\r\n        <ion-row class=\"full\" align-items-center>\r\n          <ion-col size=\"2\">\r\n            <ion-icon name=\"card\" size=\"large\" color=\"medium\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col size=\"10\">\r\n            <ion-row align-items-center>\r\n              <p no-margin><strong>XXXX-XXXX-XXXX-{{add.card_number}}</strong></p>\r\n            </ion-row>\r\n            <ion-row align-items-center>\r\n              <p class=\"small\" no-margin>Expiry date: {{add.expiry_date}}</p>\r\n              <h6 class=\"small mycolor\" *ngIf=\"i==0\" padding-start no-margin>PRIMARY</h6>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"primary\">\r\n          <ion-icon name=\"create\" size=\"large\"></ion-icon>\r\n        </ion-item-option>\r\n        <ion-item-option color=\"danger\">\r\n          <ion-icon name=\"trash\" size=\"large\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n  <ion-list margin-top lines=\"none\">\r\n    <ion-item (click)=\"fun.navigate('newpayment',true)\">\r\n      <ion-icon name=\"add\" class=\"mycolor\" margin-end></ion-icon>\r\n      <ion-label class=\"mycolor\">\r\n        Add New Payment\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/managepayments/managepayments.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/managepayments/managepayments.module.ts ***!
    \*********************************************************/

  /*! exports provided: ManagepaymentsPageModule */

  /***/
  function srcAppManagepaymentsManagepaymentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagepaymentsPageModule", function () {
      return ManagepaymentsPageModule;
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


    var _managepayments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./managepayments.page */
    "./src/app/managepayments/managepayments.page.ts");
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
      component: _managepayments_page__WEBPACK_IMPORTED_MODULE_6__["ManagepaymentsPage"]
    }];

    var ManagepaymentsPageModule = function ManagepaymentsPageModule() {
      _classCallCheck(this, ManagepaymentsPageModule);
    };

    ManagepaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_managepayments_page__WEBPACK_IMPORTED_MODULE_6__["ManagepaymentsPage"]]
    })], ManagepaymentsPageModule);
    /***/
  },

  /***/
  "./src/app/managepayments/managepayments.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/managepayments/managepayments.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppManagepaymentsManagepaymentsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".full {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlcGF5bWVudHMvRDpcXGdpdGt1aWNrc2F2ZVxcbXVsdGlzdG9yZS1tb2JpbGUtYXBwL3NyY1xcYXBwXFxtYW5hZ2VwYXltZW50c1xcbWFuYWdlcGF5bWVudHMucGFnZS5zY3NzIiwic3JjL2FwcC9tYW5hZ2VwYXltZW50cy9tYW5hZ2VwYXltZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2VwYXltZW50cy9tYW5hZ2VwYXltZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwiLmZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/managepayments/managepayments.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/managepayments/managepayments.page.ts ***!
    \*******************************************************/

  /*! exports provided: ManagepaymentsPage */

  /***/
  function srcAppManagepaymentsManagepaymentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagepaymentsPage", function () {
      return ManagepaymentsPage;
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


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../functions.service */
    "./src/app/functions.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */


    var ManagepaymentsPage = /*#__PURE__*/function () {
      function ManagepaymentsPage(dataService, fun, menuCtrl) {
        _classCallCheck(this, ManagepaymentsPage);

        this.dataService = dataService;
        this.fun = fun;
        this.menuCtrl = menuCtrl;
      }

      _createClass(ManagepaymentsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menuCtrl.enable(false, 'start');
          this.menuCtrl.enable(false, 'end');
        }
      }]);

      return ManagepaymentsPage;
    }();

    ManagepaymentsPage.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }];
    };

    ManagepaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-managepayments',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./managepayments.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/managepayments/managepayments.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./managepayments.page.scss */
      "./src/app/managepayments/managepayments.page.scss"))["default"]]
    })], ManagepaymentsPage);
    /***/
  }
}]);
//# sourceMappingURL=managepayments-managepayments-module-es5.js.map