function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-editgroup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/group/edit/editgroup.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/group/edit/editgroup.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuperAdminGroupEditEditgroupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n <ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" >\r\n      <ion-back-button   style=\"color: black\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title  style=\"color: black;\" class=\"ion-text-center\">Edit Category</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-text><h3  class=\"title ion-no-margin ion-margin-bottom ion-text-center\">Update Category</h3></ion-text>\r\n \r\n  <ion-grid >\r\n  <form [formGroup]=\"fg\">\r\n  <ion-row >\r\n    <ion-col>\r\n      <ion-input type=\"text\" placeholder=\"Name\" formControlName=\"Name\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.Name\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Name').hasError(validation.type) && (fg.get('Name').dirty || fg.get('Name').touched)\">\r\n            <ion-icon Name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- <ion-row class=\"ion-padding-vertical\">\r\n    <ion-col>\r\n      <ion-input type=\"text\" placeholder=\"Description\" formControlName=\"Description\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.Description\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Description').hasError(validation.type) && (fg.get('Description').dirty || fg.get('Description').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row> -->\r\n  <!-- <ion-row class=\"ion-align-items-center\">\r\n   <ion-col>\r\n    <input type=\"file\" id=\"banner\" name=\"banner\" #banner placeholder=\"Choose file\" (change)=\"uploadBanner(banner.files)\"\r\n    style=\"display:none;\" accept=\".jpg, .jpeg, .png, .gif\">\r\n      <ion-button expand=\"block\"   color=\"mytheme\" (click)=\"banner.click()\"><strong class=\"white ion-text-capitalize\">Banner</strong></ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <input type=\"file\" id=\"logo\" name=\"logo\" #logo placeholder=\"Choose file\" (change)=\"uploadThumbnail(logo.files)\"\r\n      style=\"display:none;\" accept=\".jpg, .jpeg, .png, .gif\">\r\n      <ion-button expand=\"block\"   color=\"mytheme\" (click)=\"logo.click()\"><strong class=\"white ion-text-capitalize\">Thumbnail</strong></ion-button>\r\n    </ion-col>\r\n  </ion-row> -->\r\n  <!-- <ion-row>\r\n    <ion-col >\r\n      <ion-img *ngIf=\"fg.value.Banner\" [src]=\"resourceURL + fg.value.Banner\" alt=\"Banner Image\"></ion-img>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-img *ngIf=\"fg.value.Thumbnail\" [src]=\"resourceURL + fg.value.Thumbnail\" alt=\"Thumbnail Image\"></ion-img>\r\n    </ion-col>\r\n  </ion-row> -->\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button expand=\"block\" color=\"primary\" (click)=\"EditGroup()\" [disabled]=\"fg.invalid\" color=\"mycolor1\"><strong class=\"white\">Update</strong></ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  </form>\r\n  \r\n</ion-grid>\r\n\r\n</ion-content>";
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
  "./src/app/superAdmin/group/edit/editgroup.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/superAdmin/group/edit/editgroup.module.ts ***!
    \***********************************************************/

  /*! exports provided: EditGroupPageModule */

  /***/
  function srcAppSuperAdminGroupEditEditgroupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditGroupPageModule", function () {
      return EditGroupPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _editgroup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./editgroup.page */
    "./src/app/superAdmin/group/edit/editgroup.page.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */


    var EditGroupPageModule = function EditGroupPageModule() {
      _classCallCheck(this, EditGroupPageModule);
    };

    EditGroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _editgroup_page__WEBPACK_IMPORTED_MODULE_5__["EditGroupPage"]
      }])],
      declarations: [_editgroup_page__WEBPACK_IMPORTED_MODULE_5__["EditGroupPage"]],
      entryComponents: []
    })], EditGroupPageModule);
    /***/
  },

  /***/
  "./src/app/superAdmin/group/edit/editgroup.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/superAdmin/group/edit/editgroup.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuperAdminGroupEditEditgroupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imgdiv {\n  width: 80%;\n  height: 60%;\n}\n\n.img1 {\n  width: 100%;\n  height: 100%;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi9ncm91cC9lZGl0L0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcc3VwZXJBZG1pblxcZ3JvdXBcXGVkaXRcXGVkaXRncm91cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3N1cGVyQWRtaW4vZ3JvdXAvZWRpdC9lZGl0Z3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUk7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7QUNDUjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSx3QkFBQTtBQ0lKOztBRERBO0VBQ0ksa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vZ3JvdXAvZWRpdC9lZGl0Z3JvdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbWdkaXZ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6NjAlO1xyXG59XHJcbi5pbWcxe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcbi5zbWFsbCB7XHJcbiAgICBhe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xyXG59XHJcbi53aGl0ZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5sb2dvIHtcclxuICAgIHdpZHRoOiAxLjI1ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59IiwiLmltZ2RpdiB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uaW1nMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zbWFsbCBhIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMS4yNWVtICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/superAdmin/group/edit/editgroup.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/superAdmin/group/edit/editgroup.page.ts ***!
    \*********************************************************/

  /*! exports provided: EditGroupPage */

  /***/
  function srcAppSuperAdminGroupEditEditgroupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditGroupPage", function () {
      return EditGroupPage;
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


    var src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/group.service */
    "./src/app/services/group.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */
    // import { ImagePicker , ImagePickerOptions } from '@ionic-native/image-picker/ngx';


    var EditGroupPage = /*#__PURE__*/function () {
      function EditGroupPage(router, route, groupservice, loadingController, toastService, formBuilder, http // private imagePicker: ImagePicker
      ) {
        _classCallCheck(this, EditGroupPage);

        this.router = router;
        this.route = route;
        this.groupservice = groupservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.resourceURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].RESOURCE_URL;
        this.id = this.route.snapshot.paramMap.get('id');
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"];
        this.validation_messages = {
          Name: [{
            type: "required",
            message: "Name is required."
          }, {
            type: "pattern",
            message: "Name is without spaces."
          }],
          Description: [{
            type: "required",
            message: "Description is required."
          }]
        };
      }

      _createClass(EditGroupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fg = this.formBuilder.group({
            'Id': [null],
            'Name': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            'Description': [null],
            'Thumbnail': [null],
            'Banner': [null]
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.getGroup(this.id);
        }
      }, {
        key: "preventDefault",
        value: function preventDefault(e) {
          e.preventDefault();
        }
      }, {
        key: "pickimage",
        value: function pickimage() {//  var options: ImagePickerOptions = { 
          //   maximumImagesCount: 2 ,
          //   quality: 50};
          // this.imagePicker.getPictures(options).then((results) => {
          //   this.imagepath = results[0];
          //   for (var i = 0; i < results.length; i++) {
          //       console.log('Image URI: ' + results[i]);
          //   }
          // }, (err) => { });
        }
      }, {
        key: "getGroup",
        value: function getGroup(id) {
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
                    return this.groupservice.GetSingleGroup(id).subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        _this.group = res;

                        _this.fg.controls['Id'].setValue(_this.group.id);

                        _this.fg.controls['Name'].setValue(_this.group.name);

                        _this.fg.controls['Description'].setValue(_this.group.description);

                        _this.fg.controls['Thumbnail'].setValue(_this.group.thumbnail);

                        _this.fg.controls['Banner'].setValue(_this.group.banner); //  this.ngOnInit();

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
        key: "EditGroup",
        value: function EditGroup() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var obj, loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    obj = this.fg.value;
                    obj.Name = obj.Name.trim();

                    if (!(obj.Name.length == 0)) {
                      _context3.next = 7;
                      break;
                    }

                    this.fg.controls['Name'].setValue(null);
                    this.fg.controls['Name'].updateValueAndValidity();
                    _context3.next = 14;
                    break;

                  case 7:
                    _context3.next = 9;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 9:
                    loading = _context3.sent;
                    _context3.next = 12;
                    return loading.present();

                  case 12:
                    _context3.next = 14;
                    return this.groupservice.EditGroup(this.id, this.fg.value).subscribe(function (res) {
                      loading.dismiss();

                      _this2.toastService.create("Successfully Updated", "success");

                      _this2.router.navigate(['superadmin/group']);
                    }, function (err) {
                      loading.dismiss();

                      _this2.toastService.create(err, "danger");
                    });

                  case 14:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return EditGroupPage;
    }();

    EditGroupPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
      }];
    };

    EditGroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editgroup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./editgroup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/group/edit/editgroup.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./editgroup.page.scss */
      "./src/app/superAdmin/group/edit/editgroup.page.scss"))["default"]]
    })], EditGroupPage);
    /***/
  }
}]);
//# sourceMappingURL=edit-editgroup-module-es5.js.map