(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header padding style=\"background: black;\" class=\"mybg head\">\r\n  <!-- <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"dark\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar> -->\r\n\r\n  <ion-row class=\"ion-justify-content-center\" style=\"background: black; height: 180px;\">\r\n    <ion-img src=\"assets/images/logo.png\" class=\"head-image\"></ion-img>\r\n  </ion-row>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding \">\r\n  <ion-text>\r\n    <h3 class=\"title ion-no-margin ion-margin-bottom ion-text-center\">Sign Up</h3>\r\n  </ion-text>\r\n\r\n  <ion-grid>\r\n    <form [formGroup]=\"fg\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label class=\"title1\" style=\"padding-left: 10px; font-size: 12px;\">First Name</ion-label>\r\n         <ion-item>\r\n          <ion-input  type=\"text\" placeholder=\"FirstName\" formControlName=\"FirstName\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.FirstName\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('FirstName').hasError(validation.type) && (fg.get('FirstName').dirty || fg.get('FirstName').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-label class=\"title1\" style=\"padding-left: 10px; font-size: 12px;\">Last Name</ion-label>\r\n          <ion-item>\r\n          <ion-input type=\"text\" placeholder=\"LastName\" formControlName=\"LastName\"></ion-input>\r\n        </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.lastName\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('LastName').hasError(validation.type) && (fg.get('LastName').dirty || fg.get('LastName').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label class=\"title1\" style=\"padding-left: 10px; font-size: 12px;\">Email</ion-label>\r\n          <ion-item>\r\n            <ion-input class=\"ion-clearInput\"  placeholder=\"email\" type=\"email\" formControlName=\"Email_Address\" ></ion-input>\r\n            <ion-icon name=\"mail-outline\" style=\"color: grey; \"  ></ion-icon>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('Email_Address').hasError(validation.type) && (fg.get('Email_Address').dirty || fg.get('Email_Address').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label class=\"title1\" style=\"padding-left: 10px; font-size: 12px;\">Contact Number</ion-label>\r\n          <ion-item>\r\n            <ion-input class=\"ion-clearInput\" placeholder=\"contact number\" type=\"text\" formControlName=\"Contact_Number\"></ion-input>\r\n            <ion-icon name=\"call-outline\"  style=\"color: grey;\" ></ion-icon>\r\n          </ion-item>\r\n           <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.mobileNumber\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('Contact_Number').hasError(validation.type) && (fg.get('Contact_Number').dirty || fg.get('Contact_Number').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label class=\"title1\" style=\"padding-left: 10px; font-size: 12px;\">Password</ion-label>\r\n          <ion-item>\r\n            <ion-input class=\"ion-clearInput\" [type]=\"passwordType\" placeholder=\"password\" formControlName=\"Password\"></ion-input>\r\n            <ion-icon style=\"color: grey;\"  [name]=\"eyeStyle\" slot=\"end\" (click)=\"togglePassword()\"></ion-icon>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Password\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('Password').hasError(validation.type) && (fg.get('Password').dirty &&  fg.get('Password').minlength  || fg.get('Password').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label class=\"title1\" style=\"padding-left: 10px; font-size: 12px;\">Address</ion-label>\r\n         <ion-item>\r\n          <ion-input class=\"ion-clearInput\" type=\"text\" placeholder=\"Address\" formControlName=\"Address\">   </ion-input>\r\n         </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Address\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('Address').hasError(validation.type) && (fg.get('Address').dirty || fg.get('Address').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label class=\"title1\"  style=\"padding-left: 10px; font-size: 12px;\"> Account Type</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n       <ion-col>    \r\n          <ion-select (ngModelChange)=\"checkCNIC()\" formControlName=\"RoleId\" >\r\n            <ion-select-option value=\"2\">Shop Owner</ion-select-option>\r\n            <ion-select-option value=\"3\">Customer </ion-select-option>\r\n            <ion-select-option value=\"4\">Rider</ion-select-option>\r\n          </ion-select>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.Type\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('RoleId').hasError(validation.type) && (fg.get('RoleId').dirty || fg.get('RoleId').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngIf=\"fg.value.RoleId == 2 || fg.value.RoleId == 4\">\r\n        <ion-col>\r\n          <ion-label class=\"title1\">CNIC</ion-label>\r\n          <ion-item>\r\n            <ion-input class=\"ion-clearInput\" type=\"number\" placeholder=\"CNIC\" formControlName=\"CNIC\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.CNIC\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"fg.get('CNIC').hasError(validation.type) && (fg.get('CNIC').dirty || fg.get('CNIC').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngIf=\"fg.value.RoleId == 2 || fg.value.RoleId == 4\">\r\n        <ion-col>\r\n          <p *ngIf=\"uploading\" class=\"title1\">Uploading Image.<ion-spinner color=\"primary\"></ion-spinner>\r\n          </p>\r\n          <ion-img *ngIf=\"fg.value.CNIC_Image\" [src]=\"resourceURL + fg.value.CNIC_Image\" alt=\"CNIC_Image\"></ion-img>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" color=\"mycolor1\" (click)=\"uploadCnic()\"><strong class=\"white ion-text-capitalize\"\r\n              color=\"light\">CNIC image</strong></ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-checkbox name=\"Terms\" checked=\"false\" [(ngModel)]=\"terms\" [ngModelOptions]=\"{standalone: true}\"\r\n            class=\"titl\"></ion-checkbox>\r\n          <ion-label class=\"ion-text-center\" color=\"warning\" class=\"title1\"> I agree <a (click)=\"termsOfUse()\"> Terms\r\n              and Conditions </a> </ion-label>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" (click)=\"signup()\" color=\"mycolor1\" [disabled]=\"!fg.valid || !terms\"><strong\r\n              class=\"white\">Create an Account</strong></ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n    <!-- <div class=\"line\"></div> -->\r\n    <!-- <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" fill=\"outline\" color=\"fb\"><ion-img src=\"assets/images/facebook_logo.png\" slot=\"start\" class=\"logo ion-margin-end\" ></ion-img>Facebook</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" color=\"light\"><ion-img src=\"assets/images/google_logo.png\" slot=\"start\" class=\"logo ion-margin-end\" ></ion-img>Google</ion-button>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" fill=\"outline\" color=\"mycolor1\" (click)=\"fun.navigate('login')\"><strong>Have an\r\n            account? Sign in</strong></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <!-- <ion-text class=\"ion-text-center\"  color=\"medium\"><h6  class=\"small ion-no-margin\"><a (click)=\"open_modal(true)\">Terms of Use</a> and <a (click)=\"open_modal(false)\">Privacy Policy</a></h6></ion-text> -->\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");

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
        component: _signup_page__WEBPACK_IMPORTED_MODULE_10__["SignupPage"]
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_10__["SignupPage"]],
        providers: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["FileChooser"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__["FilePath"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".head {\n  min-height: 21vh !important;\n}\n\n.head-image {\n  background-size: contain;\n  padding-top: 20px;\n  width: 180px;\n  align-self: center;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #ebde2a;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n  color: white;\n}\n\n.title1 {\n  margin-left: 2%;\n  color: #000000;\n}\n\n.title2 {\n  margin-left: 10px;\n  margin-top: 10px;\n  color: white;\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n#bgcolor {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0k7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7QUNFUjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNLSjs7QURIQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDTUo7O0FESEE7RUFDSSx3QkFBQTtBQ01KOztBREhBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkU7RUFDSSxZQUFBO0FDT04iLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcclxuICAgIG1pbi1oZWlnaHQ6IDIxdmggIWltcG9ydGFudDtcclxufVxyXG4uaGVhZC1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4uc21hbGwge1xyXG4gICAgYXtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjM1LCAyMjIsIDQyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xyXG59XHJcbi53aGl0ZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50aXRsZTEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgY29sb3I6ICMwMDAwMDBcclxufVxyXG4udGl0bGUyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgXHJcbn1cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAjYmdjb2xvcntcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAiLCIuaGVhZCB7XG4gIG1pbi1oZWlnaHQ6IDIxdmggIWltcG9ydGFudDtcbn1cblxuLmhlYWQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnNtYWxsIGEge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZGUyYTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZTEge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGl0bGUyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMS4yNWVtICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI2JnY29sb3Ige1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions.service */ "./src/app/functions.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infomodal/infomodal.page */ "./src/app/infomodal/infomodal.page.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/__ivy_ngcc__/ngx/index.js");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */
















let SignupPage = class SignupPage {
    constructor(fun, menuCtrl, modalController, data, formBuilder, loginservice, storage, router, toasterservice, loadingController, ref, file, fileChooser, transfer, filePath) {
        this.fun = fun;
        this.menuCtrl = menuCtrl;
        this.modalController = modalController;
        this.data = data;
        this.formBuilder = formBuilder;
        this.loginservice = loginservice;
        this.storage = storage;
        this.router = router;
        this.toasterservice = toasterservice;
        this.loadingController = loadingController;
        this.ref = ref;
        this.file = file;
        this.fileChooser = fileChooser;
        this.transfer = transfer;
        this.filePath = filePath;
        // first_name = '';
        // last_name = '';
        // email = '';
        this.uploading = false;
        this.resourceURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].RESOURCE_URL;
        this.passwordType = 'Password';
        this.eyeStyle = 'eye';
        this.passwordShown = false;
        this.validation_messages = {
            FirstName: [{ type: "required", message: "FirstName is required." },
                { type: "pattern", message: "FirstName is empty." },
            ],
            lastName: [
                { type: "required", message: "LastName is required." },
                { type: "pattern", message: "LastName is required." },
            ],
            email: [
                { type: "required", message: "Email is required." },
                { type: "pattern", message: "Please enter a valid email." }
            ],
            mobileNumber: [
                { type: "required", message: "Contact Number is required." },
                { type: "pattern", message: "Contact Number is required like 03xxxxxxxxx and length 11 char" }
            ],
            CNIC: [
                { type: "required", message: "CNIC is required." },
                { type: "pattern", message: "CNIC number is required without dashes" }
            ],
            Address: [
                { type: "required", message: "Address is required." },
            ],
            Type: [
                { type: "required", message: "Account Type is required." },
            ],
            Password: [
                { type: "required", message: "Password is required" },
                { type: "minlength", message: "Password must be 8 character" },
            ],
            CNIC_Image: [
                { type: "required", message: "Image is required" },
            ],
        };
    }
    ngOnInit() {
        this.fg = this.formBuilder.group({
            'FirstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            'LastName': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            'RoleId': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            'CNIC': [],
            'CNIC_Image': [],
            'Email_Address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")
                ])],
            'Address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            'Contact_Number': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^0[03][0-9]{9}$")
                ])],
            'Password': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(8)]],
            'Site_link': "N/A"
        });
    }
    checkCNIC() {
        if (this.fg.value.RoleId == 2 || this.fg.value.RoleId == 4) {
            this.fg.controls['CNIC'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("[0-9]{13}$")
            ]));
        }
        else
            this.fg.controls['CNIC'].setValidators(null);
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false, 'start');
        this.menuCtrl.enable(false, 'end');
    }
    togglePassword() {
        if (this.passwordShown) {
            this.eyeStyle = 'eye';
            this.passwordShown = false;
            this.passwordType = 'Password';
        }
        else {
            this.eyeStyle = 'eye-off';
            this.passwordShown = true;
            this.passwordType = 'text';
        }
    }
    signup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let obj = this.fg.value;
            obj.FirstName = obj.FirstName.trim();
            obj.LastName = obj.LastName.trim();
            obj.Address = obj.Address.trim();
            console.log(obj.RoleId);
            if (obj.FirstName.length == 0 && obj.LastName.length == 0 && obj.Address.length == 0) {
                this.fg.controls['FirstName'].setValue(null);
                this.fg.controls['FirstName'].updateValueAndValidity();
                this.fg.controls['LastName'].setValue(null);
                this.fg.controls['LastName'].updateValueAndValidity();
                this.fg.controls['Address'].setValue(null);
                this.fg.controls['Address'].updateValueAndValidity();
                this.toasterservice.create("please fill the above mention fields.", 'danger');
                return false;
            }
            else if (obj.FirstName.length == 0 && obj.LastName.length == 0) {
                this.fg.controls['FirstName'].setValue(null);
                this.fg.controls['FirstName'].updateValueAndValidity();
                this.fg.controls['LastName'].setValue(null);
                this.fg.controls['LastName'].updateValueAndValidity();
                this.toasterservice.create("First and last Name required.", 'danger');
                return false;
            }
            else if (obj.FirstName.length == 0 && obj.Address.length == 0) {
                this.fg.controls['FirstName'].setValue(null);
                this.fg.controls['FirstName'].updateValueAndValidity();
                this.fg.controls['Address'].setValue(null);
                this.fg.controls['Address'].updateValueAndValidity();
            }
            else if (obj.LastName.length == 0 && obj.Address.length == 0) {
                this.fg.controls['LastName'].setValue(null);
                this.fg.controls['LastName'].updateValueAndValidity();
                this.fg.controls['Address'].setValue(null);
                this.fg.controls['Address'].updateValueAndValidity();
            }
            else if (obj.FirstName.length == 0) {
                this.fg.controls['FirstName'].setValue(null);
                this.fg.controls['FirstName'].updateValueAndValidity();
            }
            else if (obj.LastName.length == 0) {
                this.fg.controls['LastName'].setValue(null);
                this.fg.controls['LastName'].updateValueAndValidity();
            }
            else if (obj.Address.length == 0) {
                this.fg.controls['Address'].setValue(null);
                this.fg.controls['Address'].updateValueAndValidity();
            }
            else if (this.fg.value.RoleId == 2 && this.fg.value.CNIC_Image == null) {
                this.toasterservice.create("Please upload the picture", 'danger');
            }
            else if (this.fg.value.RoleId == 4 && this.fg.value.CNIC_Image == null) {
                this.toasterservice.create("Please upload the picture", 'danger');
            }
            else {
                this.fg.value.Contact_Number = this.fg.value.Contact_Number.substring(1, 11);
                const loading = yield this.loadingController.create({ message: "Loading" });
                yield loading.present();
                yield this.loginservice.SignUp(obj)
                    .subscribe(res => {
                    if (res) {
                        this.storage.set("username", obj);
                        // this.storage.set(environment.USER, res);
                        loading.dismiss();
                        this.router.navigate(['/otpverify/' + res.id]);
                        this.storage.set("userid", res.id);
                    }
                    else {
                        loading.dismiss();
                        this.toasterservice.create("exception", 'danger');
                    }
                }, (err) => {
                    loading.dismiss();
                    if (err.indexOf('unverified') != -1) {
                        var res = err.split("-")[1];
                        this.router.navigate(['/otpverify/' + res]);
                    }
                    else
                        this.toasterservice.create(err, 'danger');
                    console.log(err);
                });
            }
        });
    }
    open_modal(b) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal;
            if (b) {
                modal = yield this.modalController.create({
                    component: _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_4__["InfomodalPage"],
                    componentProps: { value: this.data.terms_of_use, title: 'Terms of Use' }
                });
            }
            else {
                modal = yield this.modalController.create({
                    component: _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_4__["InfomodalPage"],
                    componentProps: { value: this.data.privacy_policy, title: 'Privacy Policy' }
                });
            }
            return yield modal.present();
        });
    }
    uploadCnic() {
        this.fileChooser.open().then((uri) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(uri);
            yield this.filePath.resolveNativePath(uri).then(filePath => {
                //this.filesPath = filePath;
                this.uploading = true;
                this.file.resolveLocalFilesystemUrl(filePath).then(fileInfo => {
                    let files = fileInfo;
                    files.file((success) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        //this.fileType   = success.type;
                        if (success.size < 204800) {
                            let filesName = success.name;
                            console.log(filesName);
                            let options = {
                                fileName: filesName
                            };
                            const fileTransfer = this.transfer.create();
                            yield fileTransfer.upload(uri, src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].BASE_URL + 'upload', options)
                                .then((data) => {
                                // success
                                this.toasterservice.create("successfully Uploaded");
                                this.uploading = false;
                                let dbpath = JSON.parse(data.response);
                                this.fg.value.CNIC_Image = dbpath.dbPath;
                                this.ref.detectChanges();
                                //console.log(this.fg.value.cniC_Image);
                            }, (err) => {
                                console.log(err);
                                // error
                            });
                        }
                        else
                            this.toasterservice.create("File size must be less than 200 kb", "danger");
                    }));
                }, err => {
                    console.log(err);
                    throw err;
                });
            }, err => {
                console.log(err);
                throw err;
            });
        }), err => {
            console.log(err);
            throw err;
        });
    }
    termsOfUse() {
        this.router.navigateByUrl('terms');
    }
};
SignupPage.ctorParameters = () => [
    { type: _functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__["File"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_15__["FileChooser"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_13__["FilePath"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map