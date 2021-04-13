function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["classification-classification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/group/category/classification/classification.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/group/category/classification/classification.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminGroupCategoryClassificationClassificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" >\r\n      <ion-back-button style=\"color: black;\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: black;\" class=\"ion-text-center\">Brands</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title *ngIf = category> \r\n       Brand of {{category.name}}\r\n        </ion-card-title>   \r\n    </ion-card-header>\r\n  </ion-card>\r\n<div *ngIf=\"category\">\r\n<ion-card *ngFor=\"let classification of category.classifications\">\r\n  <ion-card-header>\r\n    <ion-item>\r\n    <ion-card-title> \r\n     {{classification.name}}\r\n      </ion-card-title>\r\n      <ion-icon slot =\"end\" name=\"pencil-outline\"  routerLink = \"edit/{{classification.id}}\" ></ion-icon>\r\n      <ion-icon slot=\"end\"  style=\"color: lightcoral;\" name=\"trash\" (click)=\"presentAlertConfirm(classification.id)\"></ion-icon>\r\n    </ion-item>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n   {{classification.description}}\r\n   <!-- <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col>\r\n        <div class=\"img\">\r\n        <img class=\"img1\" src = \"http://be.ehs.edu.pk/Resources/Images/Breakfast.jpg\">\r\n        <p class=\"ion-text-center\">Banner</p>\r\n      </div>\r\n      </ion-col>\r\n      <ion-col >\r\n        <div class=\"img\">\r\n        <img class=\"img1\" src = \"http://be.ehs.edu.pk/Resources/Images/Breakfast.jpg\">\r\n       <p class=\"ion-text-center\">thumbnail</p>\r\n      </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    </ion-grid> -->\r\n  </ion-card-content>\r\n</ion-card>\r\n</div>\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button routerLink = \"add\" color =\"white\">\r\n    <ion-icon  name=\"add\" size=\"large\"  style=\"color: #e9b006;\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n</ion-content>";
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.toast) {
                      this.toast.dismiss();
                    }

                    _context.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      color: color,
                      duration: ok ? null : duration,
                      position: 'bottom'
                    });

                  case 3:
                    this.toast = _context.sent;
                    this.toast.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
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
  },

  /***/
  "./src/app/superAdmin/group/category/classification/classification.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/superAdmin/group/category/classification/classification.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ClassificationPageModule */

  /***/
  function srcAppSuperAdminGroupCategoryClassificationClassificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassificationPageModule", function () {
      return ClassificationPageModule;
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


    var _classification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./classification.page */
    "./src/app/superAdmin/group/category/classification/classification.page.ts");
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
      component: _classification_page__WEBPACK_IMPORTED_MODULE_6__["ClassificationPage"]
    }, {
      path: 'add',
      loadChildren: './add/addclassification.module#AddClassificationPageModule'
    }, {
      path: 'edit/:id2',
      loadChildren: './edit/editclassification.module#EditClassificationPageModule'
    }];

    var ClassificationPageModule = function ClassificationPageModule() {
      _classCallCheck(this, ClassificationPageModule);
    };

    ClassificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
      declarations: [_classification_page__WEBPACK_IMPORTED_MODULE_6__["ClassificationPage"]],
      entryComponents: []
    })], ClassificationPageModule);
    /***/
  },

  /***/
  "./src/app/superAdmin/group/category/classification/classification.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/superAdmin/group/category/classification/classification.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminGroupCategoryClassificationClassificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imgdiv {\n  width: 80%;\n  height: 60%;\n}\n\n.img1 {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi9ncm91cC9jYXRlZ29yeS9jbGFzc2lmaWNhdGlvbi9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHN1cGVyQWRtaW5cXGdyb3VwXFxjYXRlZ29yeVxcY2xhc3NpZmljYXRpb25cXGNsYXNzaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3VwZXJBZG1pbi9ncm91cC9jYXRlZ29yeS9jbGFzc2lmaWNhdGlvbi9jbGFzc2lmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vZ3JvdXAvY2F0ZWdvcnkvY2xhc3NpZmljYXRpb24vY2xhc3NpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbWdkaXZ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6NjAlO1xyXG59XHJcbi5pbWcxe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59IiwiLmltZ2RpdiB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uaW1nMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/superAdmin/group/category/classification/classification.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/superAdmin/group/category/classification/classification.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: ClassificationPage */

  /***/
  function srcAppSuperAdminGroupCategoryClassificationClassificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassificationPage", function () {
      return ClassificationPage;
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


    var src_app_services_class_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/class.service */
    "./src/app/services/class.service.ts");
    /* harmony import */


    var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


    var ClassificationPage = /*#__PURE__*/function () {
      function ClassificationPage(router, route, classificationservice, categoryservice, loadingController, toastService, alertController) {
        _classCallCheck(this, ClassificationPage);

        this.router = router;
        this.route = route;
        this.classificationservice = classificationservice;
        this.categoryservice = categoryservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.alertController = alertController;
        this.id = this.route.snapshot.paramMap.get('id1');
      }

      _createClass(ClassificationPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.getclassifications(this.id);
        }
      }, {
        key: "preventDefault",
        value: function preventDefault(e) {
          e.preventDefault();
        }
      }, {
        key: "getclassifications",
        value: function getclassifications(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    _context2.next = 7;
                    return this.categoryservice.GetSinglecategory(id).subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        console.log(res);
                        _this.category = res; //  this.ngOnInit();
                      } else {
                        loading.dismiss();

                        _this.toastService.create(res.Message, "danger");
                      }
                    }, function (err) {
                      loading.dismiss();

                      _this.toastService.create(err, "danger");
                    });

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "Deleteclassification",
        value: function Deleteclassification(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

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
                    return this.classificationservice.Deleteclassification(id).subscribe(function (res) {
                      loading.dismiss();

                      _this2.getclassifications(_this2.id);

                      _this2.toastService.create("Successfully deleted", "success");
                    }, function (err) {
                      loading.dismiss();

                      _this2.toastService.create(err, "danger");
                    });

                  case 7:
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
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Are you Sure?',
                      message: 'Do you want to Delete this Brand?',
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          _this3.Deleteclassification(id);

                          console.log('Confirm Okay:');
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

      return ClassificationPage;
    }();

    ClassificationPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_services_class_service__WEBPACK_IMPORTED_MODULE_2__["ClassificationService"]
      }, {
        type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    ClassificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-classification',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./classification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/group/category/classification/classification.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./classification.page.scss */
      "./src/app/superAdmin/group/category/classification/classification.page.scss"))["default"]]
    })], ClassificationPage);
    /***/
  }
}]);
//# sourceMappingURL=classification-classification-module-es5.js.map