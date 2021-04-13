function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faqs-faqs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFaqsFaqsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n <ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button  style=\"color: black\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\"  style=\"color: black\">About us</ion-title>\r\n    <ion-back-button   style=\"color: black\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding color=\"light\">\r\n  <ion-item margin-bottom no-padding lines=\"none\" *ngFor=\"let question of questions; let i = index\" class=\"card\"\r\n    (click)=\"open(i, question)\">\r\n    <ion-col>\r\n      <ion-text>\r\n        <h5 class=\"title\" no-margin>{{question}}</h5>\r\n      </ion-text>\r\n    </ion-col>\r\n    <ion-col float-right size=\"2\">\r\n      <ion-icon name=\"arrow-dropright\" float-right mode=\"ios\"></ion-icon>\r\n    </ion-col>\r\n  </ion-item>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/faqs/faqs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/faqs/faqs.module.ts ***!
    \*************************************/

  /*! exports provided: FaqsPageModule */

  /***/
  function srcAppFaqsFaqsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqsPageModule", function () {
      return FaqsPageModule;
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


    var _faqs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./faqs.page */
    "./src/app/faqs/faqs.page.ts");
    /* harmony import */


    var _faq_faq_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../faq/faq.page */
    "./src/app/faq/faq.page.ts");
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
      component: _faqs_page__WEBPACK_IMPORTED_MODULE_6__["FaqsPage"]
    }];

    var FaqsPageModule = function FaqsPageModule() {
      _classCallCheck(this, FaqsPageModule);
    };

    FaqsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_faqs_page__WEBPACK_IMPORTED_MODULE_6__["FaqsPage"], _faq_faq_page__WEBPACK_IMPORTED_MODULE_7__["FaqPage"]],
      entryComponents: [_faq_faq_page__WEBPACK_IMPORTED_MODULE_7__["FaqPage"]]
    })], FaqsPageModule);
    /***/
  },

  /***/
  "./src/app/faqs/faqs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/faqs/faqs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppFaqsFaqsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu {\n  color: white !important;\n}\n\n.card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n\n.title {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxcy9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXGZhcXNcXGZhcXMucGFnZS5zY3NzIiwic3JjL2FwcC9mYXFzL2ZhcXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2ZhcXMvZmFxcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IC4zcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSIsIi5tZW51IHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIHtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMC4zcHggc29saWQgI2QyZDJkMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/faqs/faqs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/faqs/faqs.page.ts ***!
    \***********************************/

  /*! exports provided: FaqsPage */

  /***/
  function srcAppFaqsFaqsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqsPage", function () {
      return FaqsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _faq_faq_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../faq/faq.page */
    "./src/app/faq/faq.page.ts");
    /* harmony import */


    var _functions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../functions.service */
    "./src/app/functions.service.ts");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */


    var FaqsPage = /*#__PURE__*/function () {
      function FaqsPage(fun, dataService, modalController, menuCtrl) {
        _classCallCheck(this, FaqsPage);

        this.fun = fun;
        this.dataService = dataService;
        this.modalController = modalController;
        this.menuCtrl = menuCtrl;
        this.faqs = dataService.faqs;
        this.questions = Object.keys(this.faqs);
      }

      _createClass(FaqsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menuCtrl.enable(false, 'end');
          this.menuCtrl.enable(true, 'start');
        }
      }, {
        key: "open",
        value: function open(i, question) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _faq_faq_page__WEBPACK_IMPORTED_MODULE_4__["FaqPage"],
                      componentProps: {
                        value: Object.values(this.faqs)[i],
                        title: question
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return FaqsPage;
    }();

    FaqsPage.ctorParameters = function () {
      return [{
        type: _functions_service__WEBPACK_IMPORTED_MODULE_5__["FunctionsService"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }];
    };

    FaqsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faqs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./faqs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./faqs.page.scss */
      "./src/app/faqs/faqs.page.scss"))["default"]]
    })], FaqsPage);
    /***/
  }
}]);
//# sourceMappingURL=faqs-faqs-module-es5.js.map