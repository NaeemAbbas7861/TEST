function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datacontrol-datacontrol-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/datacontrol/datacontrol.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/datacontrol/datacontrol.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDatacontrolDatacontrolPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n <ion-header>\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"light\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">Data Control</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-item lines=\"none\">\r\n    <ion-row class=\"full\">\r\n      <ion-col>\r\n        <ion-row>\r\n          <h4 class=\"medium\" no-margin>Facebook</h4>\r\n        </ion-row>\r\n        <ion-row>\r\n          <h4 class=\"small\" no-margin>Use data collected to personalize advertising content</h4>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"3\" float-right>\r\n        <ion-toggle color=\"dark\" float-right></ion-toggle>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-item>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/datacontrol/datacontrol.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/datacontrol/datacontrol.module.ts ***!
    \***************************************************/

  /*! exports provided: DatacontrolPageModule */

  /***/
  function srcAppDatacontrolDatacontrolModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatacontrolPageModule", function () {
      return DatacontrolPageModule;
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


    var _datacontrol_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./datacontrol.page */
    "./src/app/datacontrol/datacontrol.page.ts");
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
      component: _datacontrol_page__WEBPACK_IMPORTED_MODULE_6__["DatacontrolPage"]
    }];

    var DatacontrolPageModule = function DatacontrolPageModule() {
      _classCallCheck(this, DatacontrolPageModule);
    };

    DatacontrolPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_datacontrol_page__WEBPACK_IMPORTED_MODULE_6__["DatacontrolPage"]]
    })], DatacontrolPageModule);
    /***/
  },

  /***/
  "./src/app/datacontrol/datacontrol.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/datacontrol/datacontrol.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDatacontrolDatacontrolPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".full {\n  width: 100%;\n}\n\n.small {\n  color: #787878;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YWNvbnRyb2wvRDpcXGdpdGt1aWNrc2F2ZVxcbXVsdGlzdG9yZS1tb2JpbGUtYXBwL3NyY1xcYXBwXFxkYXRhY29udHJvbFxcZGF0YWNvbnRyb2wucGFnZS5zY3NzIiwic3JjL2FwcC9kYXRhY29udHJvbC9kYXRhY29udHJvbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9kYXRhY29udHJvbC9kYXRhY29udHJvbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zbWFsbCB7XHJcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xyXG59IiwiLmZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNtYWxsIHtcbiAgY29sb3I6ICM3ODc4Nzg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/datacontrol/datacontrol.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/datacontrol/datacontrol.page.ts ***!
    \*************************************************/

  /*! exports provided: DatacontrolPage */

  /***/
  function srcAppDatacontrolDatacontrolPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatacontrolPage", function () {
      return DatacontrolPage;
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


    var _functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../functions.service */
    "./src/app/functions.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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


    var DatacontrolPage = /*#__PURE__*/function () {
      function DatacontrolPage(fun, menuCtrl) {
        _classCallCheck(this, DatacontrolPage);

        this.fun = fun;
        this.menuCtrl = menuCtrl;
      }

      _createClass(DatacontrolPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menuCtrl.enable(false, 'end');
          this.menuCtrl.enable(false, 'start');
        }
      }]);

      return DatacontrolPage;
    }();

    DatacontrolPage.ctorParameters = function () {
      return [{
        type: _functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }];
    };

    DatacontrolPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-datacontrol',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./datacontrol.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/datacontrol/datacontrol.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./datacontrol.page.scss */
      "./src/app/datacontrol/datacontrol.page.scss"))["default"]]
    })], DatacontrolPage);
    /***/
  }
}]);
//# sourceMappingURL=datacontrol-datacontrol-module-es5.js.map