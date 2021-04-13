function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accountsettings-accountsettings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/accountsettings/accountsettings.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accountsettings/accountsettings.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountsettingsAccountsettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n\r\n<ion-header>\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button   style=\"color: black\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"dark\" class=\"ion-text-center\">Account Settings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list *ngIf=\"content === 'settings'\" lines=\"none\">\r\n    <div>\r\n      <ion-item (click)=\"updateContent('profile')\">\r\n        <ion-row class=\"full\">\r\n          <ion-col>\r\n            <ion-row>\r\n              <h4 class=\"medium\" no-margin>Update Profile</h4>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-item>\r\n      <div class=\"sep\"></div>\r\n    </div>\r\n    <div>\r\n      <ion-item (click)=\"open()\">\r\n        <ion-row class=\"full\">\r\n          <ion-col>\r\n            <ion-row>\r\n              <h4 class=\"medium\" no-margin>Other Settings</h4>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-item>\r\n    </div>\r\n      <div class=\"sep\"></div>\r\n  </ion-list>\r\n\r\n<!-- update profile section -->\r\n<div *ngIf=\"content === 'profile'\">\r\n  \r\n<form [formGroup]=\"fg\"> \r\n  \r\n  <ion-item  padding color=\"dark\" class=\"mybg head\">\r\n    <ion-row class= \"ion-justify-content-center\" style=\"height: 100px; align-self: center; padding-top: 20px; \"  >\r\n      <ion-avatar *ngIf=\"!fg.value.UserImage\" >\r\n        <img  src=\"/assets/images/user.png\"  (click)=\"UpdatePicture()\" >\r\n      </ion-avatar>\r\n      <ion-avatar *ngIf=\"fg.value.UserImage\" >  \r\n        <img [src]=\"resourceURL + fg.value.UserImage\"   (click)=\"UpdatePicture()\">\r\n      </ion-avatar>\r\n    </ion-row>\r\n  </ion-item>\r\n  <br><br>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-label>First Name</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"First Name\" formControlName=\"FirstName\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.FirstName\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('FirstName').hasError(validation.type) && (fg.get('FirstName').dirty || fg.get('FirstName').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-label>Last Name</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Last Name\" formControlName=\"LastName\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.lastName\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('LastName').hasError(validation.type) && (fg.get('LastName').dirty || fg.get('LastName').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"RoleId==2 || RoleId==4\">\r\n    <ion-col  >\r\n      <ion-label>Email</ion-label>\r\n      <ion-input class=\"ion-clearInput\" type=\"email\"  placeholder=\"Email\" formControlName=\"Email_Address\" class=\"input ion-padding-horizontal\" disabled></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Email_Address').hasError(validation.type) && (fg.get('Email_Address').dirty || fg.get('Email_Address').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-label>Mobile Number</ion-label>\r\n      <ion-input class=\"ion-clearInput\" type=\"text\"  placeholder=\"Mobile Number\" formControlName=\"Contact_Number\"  class=\"input ion-padding-horizontal\" disabled></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.mobileNumber\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Contact_Number').hasError(validation.type) && (fg.get('Contact_Number').dirty || fg.get('Contact_Number').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row *ngIf=\"RoleId==1 || RoleId==3\">\r\n    <ion-col >\r\n      <ion-label>Email</ion-label>\r\n      <ion-input class=\"ion-clearInput\" type=\"email\"  placeholder=\"Email\" formControlName=\"Email_Address\" class=\"input ion-padding-horizontal\"></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Email_Address').hasError(validation.type) && (fg.get('Email_Address').dirty || fg.get('Email_Address').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-label>Mobile Number</ion-label>\r\n      <ion-input class=\"ion-clearInput\" type=\"text\"  placeholder=\"Mobile Number\" formControlName=\"Contact_Number\"  class=\"input ion-padding-horizontal\"></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.mobileNumber\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Contact_Number').hasError(validation.type) && (fg.get('Contact_Number').dirty || fg.get('Contact_Number').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-label>Password</ion-label>\r\n      <ion-input class=\"ion-clearInput\" type=\"password\" placeholder=\"Password\" minLength=\"8\" formControlName=\"Password\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.Password\">\r\n          <div class=\"error-message\"\r\n          *ngIf=\"fg.get('Password').hasError(validation.type) && (fg.get('Password').dirty &&  fg.get('Password').minlength  || fg.get('Password').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-label>Address</ion-label>\r\n      <ion-input class=\"ion-clearInput\" type=\"text\" placeholder=\"Address\" formControlName=\"Address\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.Address\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Address').hasError(validation.type) && (fg.get('Address').dirty || fg.get('Address').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  \r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button expand=\"block\"  (click)=\"updateUser()\" color=\"mycolor1\" [disabled]=\"!fg.valid\" ><ion-text color=\"light\" style=\"font-family:'Times New Roman', serif; font-size: 20px; font-style: italic;\">Update</ion-text></ion-button>\r\n    </ion-col>\r\n    <!-- <ion-col>\r\n      <ion-button expand=\"block\" color=\"primary\" color=\"mytheme\" (click)=\"updateContent('settings')\"><strong class=\"white\">Cancel</strong></ion-button>\r\n    </ion-col> -->\r\n  </ion-row>\r\n</form>\r\n</div> \r\n\r\n\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/accountsettings/accountsettings.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/accountsettings/accountsettings.module.ts ***!
    \***********************************************************/

  /*! exports provided: AccountsettingsPageModule */

  /***/
  function srcAppAccountsettingsAccountsettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsettingsPageModule", function () {
      return AccountsettingsPageModule;
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


    var _accountsettings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accountsettings.page */
    "./src/app/accountsettings/accountsettings.page.ts");
    /* harmony import */


    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file-chooser/ngx */
    "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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
    // import { FormGroup, FormBuilder, Validators } from '@angular/forms';
    // import { FormsModule , ReactiveFormsModule } from '@angular/forms';


    var routes = [{
      path: '',
      component: _accountsettings_page__WEBPACK_IMPORTED_MODULE_5__["AccountsettingsPage"]
    }];

    var AccountsettingsPageModule = function AccountsettingsPageModule() {
      _classCallCheck(this, AccountsettingsPageModule);
    };

    AccountsettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_accountsettings_page__WEBPACK_IMPORTED_MODULE_5__["AccountsettingsPage"]],
      providers: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"]]
    })], AccountsettingsPageModule);
    /***/
  },

  /***/
  "./src/app/accountsettings/accountsettings.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/accountsettings/accountsettings.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountsettingsAccountsettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".full {\n  width: 100%;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.head-image {\n  border-radius: 21vh;\n  margin-left: 80px;\n  margin-right: 100px;\n}\n\nimg {\n  margin-left: 197%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHNldHRpbmdzL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcYWNjb3VudHNldHRpbmdzXFxhY2NvdW50c2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9hY2NvdW50c2V0dGluZ3MvYWNjb3VudHNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBQTtFQUNJLGlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50c2V0dGluZ3MvYWNjb3VudHNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNlcCB7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbjogNnB4IDA7XHJcbn1cclxuLmhlYWQtaW1hZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjF2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuXHJcbn1cclxuaW1ne1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5NyVcclxufSIsIi5mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXAge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZDJkMjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDZweCAwO1xufVxuXG4uaGVhZC1pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDIxdmg7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuXG5pbWcge1xuICBtYXJnaW4tbGVmdDogMTk3JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/accountsettings/accountsettings.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/accountsettings/accountsettings.page.ts ***!
    \*********************************************************/

  /*! exports provided: AccountsettingsPage */

  /***/
  function srcAppAccountsettingsAccountsettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsettingsPage", function () {
      return AccountsettingsPage;
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/shared.service */
    "./src/app/services/shared.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/file-chooser/ngx */
    "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */


    var AccountsettingsPage = /*#__PURE__*/function () {
      function AccountsettingsPage(loginservice, storage, sharedservice, formBuilder, fun, menuCtrl, alertController, nav, toasterservice, router, loadingController, ref, file, fileChooser, transfer, filePath) {
        _classCallCheck(this, AccountsettingsPage);

        this.loginservice = loginservice;
        this.storage = storage;
        this.sharedservice = sharedservice;
        this.formBuilder = formBuilder;
        this.fun = fun;
        this.menuCtrl = menuCtrl;
        this.alertController = alertController;
        this.nav = nav;
        this.toasterservice = toasterservice;
        this.router = router;
        this.loadingController = loadingController;
        this.ref = ref;
        this.file = file;
        this.fileChooser = fileChooser;
        this.transfer = transfer;
        this.filePath = filePath;
        this.content = 'profile';
        this.uploading = false;
        this.resourceURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].RESOURCE_URL;
        this.items = [{
          name: 'Update Profile',
          url: ''
        }, {
          name: 'Change Password',
          url: 'changepassword'
        }, {
          name: 'Deactivate Account',
          url: 'deactivate'
        }];
        this.validation_messages = {
          FirstName: [{
            type: "required",
            message: "FirstName is required."
          }],
          lastName: [{
            type: "required",
            message: "LastName is required."
          }],
          email: [{
            type: "required",
            message: "Email is required."
          }, {
            type: "pattern",
            message: "Please enter a valid email."
          }],
          mobileNumber: [{
            type: "required",
            message: "MobileNumber is required."
          }, {
            type: "pattern",
            message: "Mobile number is required like 03xxxxxxxxx"
          }],
          Address: [{
            type: "required",
            message: "Address is required."
          }],
          Type: [{
            type: "required",
            message: "Account Type is required."
          }],
          Password: [{
            type: "required",
            message: "Password is required"
          }, {
            type: "minlength",
            message: "Password must be 8 character"
          }]
        };
      }

      _createClass(AccountsettingsPage, [{
        key: "ngOnInit1",
        value: function ngOnInit1() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // this.menuCtrl.enable(false, 'end');
          // this.menuCtrl.enable(false, 'start');
          this.fg = this.formBuilder.group({
            'Id': [null],
            'UserImage': [null],
            'FirstName': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            'LastName': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            'RoleId': [null],
            'CNIC': "",
            'CNIC_Image': [null],
            'Email_Address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")])],
            'Address': [null],
            'Contact_Number': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^0[03][0-9]{9}$")])],
            'Password': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
            'Site_link': "N/A"
          });
          this.storage.get("User").then(function (value) {
            _this.user = value;

            _this.getUserById(value.sid);
          });
        }
      }, {
        key: "getUserById",
        value: function getUserById(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    _context.next = 7;
                    return this.loginservice.GetUser(id).subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        // console.log(res);
                        _this2.fg.controls['Id'].setValue(res.id);

                        _this2.fg.controls['FirstName'].setValue(res.firstName);

                        _this2.fg.controls['LastName'].setValue(res.lastName);

                        _this2.fg.controls['RoleId'].setValue(res.roleId);

                        _this2.RoleId = res.roleId;

                        _this2.fg.controls['CNIC'].setValue(res.cnic);

                        _this2.fg.controls['CNIC_Image'].setValue(res.cniC_Image);

                        _this2.fg.controls['Email_Address'].setValue(res.email_Address);

                        _this2.fg.controls['Address'].setValue(res.address);

                        _this2.fg.controls['Contact_Number'].setValue("0" + res.contact_Number);

                        _this2.fg.controls['Password'].setValue(res.password);

                        _this2.fg.controls['Site_link'].setValue(res.site_link);

                        _this2.fg.controls['UserImage'].setValue(res.userImage); // this.fg.value.UserImage = res.UserImage;
                        //  this.ngOnInit();

                      } else {// loading.dismiss();
                          // this.toasterservice.create(res.Message, "danger");
                        }
                    }, function (err) {
                      loading.dismiss();

                      _this2.toasterservice.create(err, "danger");
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var obj, loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    obj = this.fg.value;
                    obj.FirstName = obj.FirstName.trim();
                    obj.LastName = obj.LastName.trim();
                    obj.Address = obj.Address.trim();
                    this.fg.value.Contact_Number = this.fg.value.Contact_Number.substring(1, 11);

                    if (!(obj.FirstName.length == 0 && obj.LastName.length == 0 && obj.Address.length == 0)) {
                      _context2.next = 14;
                      break;
                    }

                    this.fg.controls['FirstName'].setValue(null);
                    this.fg.controls['FirstName'].updateValueAndValidity();
                    this.fg.controls['LastName'].setValue(null);
                    this.fg.controls['LastName'].updateValueAndValidity();
                    this.fg.controls['Address'].setValue(null);
                    this.fg.controls['Address'].updateValueAndValidity();
                    _context2.next = 57;
                    break;

                  case 14:
                    if (!(obj.FirstName.length == 0 && obj.LastName.length == 0)) {
                      _context2.next = 21;
                      break;
                    }

                    this.fg.controls['FirstName'].setValue(null);
                    this.fg.controls['FirstName'].updateValueAndValidity();
                    this.fg.controls['LastName'].setValue(null);
                    this.fg.controls['LastName'].updateValueAndValidity();
                    _context2.next = 57;
                    break;

                  case 21:
                    if (!(obj.FirstName.length == 0 && obj.Address.length == 0)) {
                      _context2.next = 28;
                      break;
                    }

                    this.fg.controls['FirstName'].setValue(null);
                    this.fg.controls['FirstName'].updateValueAndValidity();
                    this.fg.controls['Address'].setValue(null);
                    this.fg.controls['Address'].updateValueAndValidity();
                    _context2.next = 57;
                    break;

                  case 28:
                    if (!(obj.LastName.length == 0 && obj.Address.length == 0)) {
                      _context2.next = 35;
                      break;
                    }

                    this.fg.controls['LastName'].setValue(null);
                    this.fg.controls['LastName'].updateValueAndValidity();
                    this.fg.controls['Address'].setValue(null);
                    this.fg.controls['Address'].updateValueAndValidity();
                    _context2.next = 57;
                    break;

                  case 35:
                    if (!(obj.FirstName.length == 0)) {
                      _context2.next = 40;
                      break;
                    }

                    this.fg.controls['FirstName'].setValue(null);
                    this.fg.controls['FirstName'].updateValueAndValidity();
                    _context2.next = 57;
                    break;

                  case 40:
                    if (!(obj.LastName.length == 0)) {
                      _context2.next = 45;
                      break;
                    }

                    this.fg.controls['LastName'].setValue(null);
                    this.fg.controls['LastName'].updateValueAndValidity();
                    _context2.next = 57;
                    break;

                  case 45:
                    if (!(obj.Address.length == 0)) {
                      _context2.next = 50;
                      break;
                    }

                    this.fg.controls['Address'].setValue(null);
                    this.fg.controls['Address'].updateValueAndValidity();
                    _context2.next = 57;
                    break;

                  case 50:
                    _context2.next = 52;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 52:
                    loading = _context2.sent;
                    _context2.next = 55;
                    return loading.present();

                  case 55:
                    _context2.next = 57;
                    return this.loginservice.UpdateUser(this.fg.value.Id, this.fg.value).subscribe(function (res) {
                      //this.sharedservice.UpdateUser(res);
                      _this3.user.FirstName = _this3.fg.value.FirstName;
                      _this3.user.LastName = _this3.fg.value.LastName;
                      _this3.user.UserImage = _this3.fg.value.UserImage;

                      _this3.storage.set("User", _this3.user);

                      _this3.sharedservice.UpdateUser(_this3.user);

                      loading.dismiss();

                      _this3.toasterservice.create('succesfully updated', "success");

                      _this3.router.navigateByUrl('/accountsettings');

                      console.log(res);
                    }, function (err) {
                      loading.dismiss();

                      _this3.toasterservice.create(err, "danger");
                    });

                  case 57:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "updateContent",
        value: function updateContent(type) {
          this.content = type;
        }
      }, {
        key: "open",
        value: function open(i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.items[i].url == "deactivate")) {
                      _context3.next = 8;
                      break;
                    }

                    _context3.next = 3;
                    return this.alertController.create({
                      header: 'Are you sure?',
                      message: 'Do you really want to deactivate your account?',
                      buttons: [{
                        text: 'Yes',
                        cssClass: 'mycolor',
                        handler: function handler(blah) {
                          _this4.nav.navigateRoot('/login');
                        }
                      }, {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'mycolor',
                        handler: function handler() {}
                      }]
                    });

                  case 3:
                    alert = _context3.sent;
                    _context3.next = 6;
                    return alert.present();

                  case 6:
                    _context3.next = 9;
                    break;

                  case 8:
                    this.fun.navigate(this.items[i].url, false);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "UpdatePicture",
        value: function UpdatePicture() {
          var _this5 = this;

          this.fileChooser.open().then(function (uri) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log(uri);
                      _context5.next = 3;
                      return this.filePath.resolveNativePath(uri).then(function (filePath) {
                        //this.filesPath = filePath;
                        _this6.uploading = true;

                        _this6.file.resolveLocalFilesystemUrl(filePath).then(function (fileInfo) {
                          var files = fileInfo;
                          files.file(function (success) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                              var _this7 = this;

                              var filesName, options, fileTransfer;
                              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                while (1) {
                                  switch (_context4.prev = _context4.next) {
                                    case 0:
                                      if (!(success.size < 204800)) {
                                        _context4.next = 9;
                                        break;
                                      }

                                      filesName = success.name;
                                      console.log(filesName);
                                      options = {
                                        fileName: filesName
                                      };
                                      fileTransfer = this.transfer.create();
                                      _context4.next = 7;
                                      return fileTransfer.upload(uri, src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].BASE_URL + 'upload', options).then(function (data) {
                                        // success
                                        _this7.toasterservice.create("successfully Uploaded");

                                        _this7.updateUser();

                                        _this7.uploading = false;
                                        var dbpath = JSON.parse(data.response);

                                        _this7.fg.controls['UserImage'].setValue(dbpath.dbPath);

                                        _this7.ref.detectChanges(); //console.log(this.fg.value.cniC_Image);

                                      }, function (err) {
                                        console.log(err); // error
                                      });

                                    case 7:
                                      _context4.next = 10;
                                      break;

                                    case 9:
                                      this.toasterservice.create("File size must be less than 200 kb", "danger");

                                    case 10:
                                    case "end":
                                      return _context4.stop();
                                  }
                                }
                              }, _callee4, this);
                            }));
                          });
                        }, function (err) {
                          console.log(err);
                          throw err;
                        });
                      }, function (err) {
                        console.log(err);
                        throw err;
                      });

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }, function (err) {
            console.log(err);
            throw err;
          });
        }
      }]);

      return AccountsettingsPage;
    }();

    AccountsettingsPage.ctorParameters = function () {
      return [{
        type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"]
      }, {
        type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_12__["FileChooser"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"]
      }];
    };

    AccountsettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accountsettings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./accountsettings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/accountsettings/accountsettings.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./accountsettings.page.scss */
      "./src/app/accountsettings/accountsettings.page.scss"))["default"]]
    })], AccountsettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=accountsettings-accountsettings-module-es5.js.map