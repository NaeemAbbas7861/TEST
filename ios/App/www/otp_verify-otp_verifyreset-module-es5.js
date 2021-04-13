function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp_verify-otp_verifyreset-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/passwordreset/otp_verify/otp_verify.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/passwordreset/otp_verify/otp_verify.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPasswordresetOtp_verifyOtp_verifyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header padding style=\"background: black;\" class=\"mybg head\">\r\n    <ion-toolbar color=\"dark\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button   style=\"color: white\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>  \r\n    <ion-row class=\"ion-justify-content-center\" style=\"background: black; height: 140px;\">\r\n      <ion-img src=\"assets/images/logo.png\" class=\"head-image\"></ion-img>\r\n    </ion-row>\r\n  </ion-header>\r\n\r\n\r\n\r\n<ion-content *ngIf = \"otp\" class=\"ion-padding\">\r\n  <ion-text><h3  class=\"title ion-no-margin ion-margin-bottom ion-text-center\">Verify your Account</h3></ion-text>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label ><ion-text class=\"small\" >Enter 4 digit OTP Number</ion-text></ion-label>\r\n        <!-- <ion-input  type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" class=\"input ion-clearInput ion-padding-horizontal\" ></ion-input> -->\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-text-center;\">\r\n      <ion-col>\r\n       <ion-input #otp1 required maxLength=\"1\" [(ngModel)]=\"otp5\" style=\"text-align: center;\" (keyup)=\"otpController($event,otp2,'')\">\r\n       </ion-input>\r\n       <ion-input #otp2 required maxLength=\"1\" [(ngModel)]=\"otp6\"  style=\"text-align: center;\" (keyup)=\"otpController($event,otp3,otp1)\">\r\n       </ion-input>\r\n       <ion-input #otp3 required maxLength=\"1\" [(ngModel)]=\"otp7\"  style=\"text-align: center;\" (keyup)=\"otpController($event,otp4,otp2)\">\r\n       </ion-input>\r\n       <ion-input #otp4  required maxLength=\"1\" [(ngModel)]=\"otp8\"  style=\"text-align: center;\" (keyup)=\"otpController($event,'',otp3)\">\r\n       </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button  expand=\"block\" color=\"mycolor1\" [disabled]=\"!otp5 || !otp6 || !otp7 || !otp8\" (click)=\"verify()\"><strong class=\"white\">Confirm</strong></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"!otp\"  class=\"ion-padding\">\r\n  <ion-text><h3  class=\"title ion-no-margin ion-margin-bottom ion-text-center\">Update Password</h3></ion-text>\r\n  \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-label><ion-text class=\"ion-padding-horizontal\">New Password</ion-text></ion-label> \r\n    </ion-row>\r\n    <ion-row>\r\n      \r\n        <ion-input class=\"ion-clearInput\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"Password\" class=\"input ion-padding-horizontal\" style=\"height: 40px;\" ></ion-input>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" color=\"mycolor1\" (click)=\"UpdatePassword()\"><strong class=\"white\">Reset Password</strong></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/passwordreset/otp_verify/otp_verify.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/passwordreset/otp_verify/otp_verify.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPasswordresetOtp_verifyOtp_verifyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".head {\n  min-height: 21vh !important;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.white {\n  color: white;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.title {\n  font-size: 18px;\n}\n\nion-input {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  margin: 10px;\n  border-radius: 50%;\n  --background:#e1e1e1;\n  --padding-start:7px;\n}\n\n.head {\n  min-height: 21vh !important;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  padding-top: 20px;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: #DB9E07;\n}\n\n.title {\n  font-size: 18px;\n  color: white;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n}\n\n.button-color {\n  background-color: var(--ion-color-mytheme);\n}\n\n.logo {\n  width: 1.25em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmRyZXNldC9vdHBfdmVyaWZ5L0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxccGFzc3dvcmRyZXNldFxcb3RwX3ZlcmlmeVxcb3RwX3ZlcmlmeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Bhc3N3b3JkcmVzZXQvb3RwX3ZlcmlmeS9vdHBfdmVyaWZ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtBQ0lKOztBREZBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURKQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDT0o7O0FETEk7RUFDSSwyQkFBQTtBQ1FSOztBRE5JO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1NSOztBRFBJO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNVUjs7QURSSTtFQUNJLGNBQUE7QUNXUjs7QURUSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDWVI7O0FEVkk7RUFDSSxlQUFBO0FDYVI7O0FEWlE7RUFDSSxpQ0FBQTtBQ2NaOztBRFhJO0VBQ0ksMENBQUE7QUNjUjs7QURaSTtFQUNJLHdCQUFBO0FDZVIiLCJmaWxlIjoic3JjL2FwcC9wYXNzd29yZHJlc2V0L290cF92ZXJpZnkvb3RwX3ZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMXZoICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWQtaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLndoaXRlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjUwcHg7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNlMWUxZTE7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6N3B4O1xyXG4gICAgfVxyXG4gICAgLmhlYWQge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIxdmggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5oZWFkLWltYWdlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAud2hpdGV7XHJcbiAgICAgICAgY29sb3I6ICNEQjlFMDc7XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuc21hbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi1jb2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogMS4yNWVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAgIiwiLmhlYWQge1xuICBtaW4taGVpZ2h0OiAyMXZoICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogMTgwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tYmFja2dyb3VuZDojZTFlMWUxO1xuICAtLXBhZGRpbmctc3RhcnQ6N3B4O1xufVxuXG4uaGVhZCB7XG4gIG1pbi1oZWlnaHQ6IDIxdmggIWltcG9ydGFudDtcbn1cblxuLmhlYWQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAxODBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiAjREI5RTA3O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnNtYWxsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/passwordreset/otp_verify/otp_verifyreset.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/passwordreset/otp_verify/otp_verifyreset.module.ts ***!
    \********************************************************************/

  /*! exports provided: OtpverifyresetPageModule */

  /***/
  function srcAppPasswordresetOtp_verifyOtp_verifyresetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpverifyresetPageModule", function () {
      return OtpverifyresetPageModule;
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


    var _otp_verifyresetpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./otp_verifyresetpage */
    "./src/app/passwordreset/otp_verify/otp_verifyresetpage.ts");
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
      component: _otp_verifyresetpage__WEBPACK_IMPORTED_MODULE_6__["OtpverifyresetPage"]
    }];

    var OtpverifyresetPageModule = function OtpverifyresetPageModule() {
      _classCallCheck(this, OtpverifyresetPageModule);
    };

    OtpverifyresetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_otp_verifyresetpage__WEBPACK_IMPORTED_MODULE_6__["OtpverifyresetPage"]]
    })], OtpverifyresetPageModule);
    /***/
  },

  /***/
  "./src/app/passwordreset/otp_verify/otp_verifyresetpage.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/passwordreset/otp_verify/otp_verifyresetpage.ts ***!
    \*****************************************************************/

  /*! exports provided: OtpverifyresetPage */

  /***/
  function srcAppPasswordresetOtp_verifyOtp_verifyresetpageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpverifyresetPage", function () {
      return OtpverifyresetPage;
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


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/shared.service */
    "./src/app/services/shared.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_8__);
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */
    //import { FunctionsService } from '../functions.service';


    var OtpverifyresetPage = /*#__PURE__*/function () {
      function OtpverifyresetPage(menuCtrl, loginservice, storage, router, toasterservice, loadingController, route, sharedservice) {
        _classCallCheck(this, OtpverifyresetPage);

        this.menuCtrl = menuCtrl;
        this.loginservice = loginservice;
        this.storage = storage;
        this.router = router;
        this.toasterservice = toasterservice;
        this.loadingController = loadingController;
        this.route = route;
        this.sharedservice = sharedservice;
        this.email = "";
        this.Password = "";
        this.otp = true;
        this.id = this.route.snapshot.paramMap.get('id');
      }

      _createClass(OtpverifyresetPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menuCtrl.enable(false, 'start');
          this.menuCtrl.enable(false, 'end');
        }
      }, {
        key: "otpController",
        value: function otpController(event, next, prev) {
          if (event.target.value.length < 1 && prev) {
            prev.setFocus();
          } else if (next && event.target.value.length > 0) {
            next.setFocus();
          } else {
            return 0;
          }
        }
      }, {
        key: "verify",
        value: function verify() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var code, code1, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    code = this.otp5 + this.otp6 + this.otp7 + this.otp8; // var code1: number = +code;

                    code1 = parseInt(code);
                    _context.next = 4;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 4:
                    loading = _context.sent;
                    _context.next = 7;
                    return loading.present();

                  case 7:
                    _context.next = 9;
                    return this.loginservice.VerifyReset(this.id, code1).subscribe(function (res) {
                      loading.dismiss();
                      console.log(res);
                      _this.otp = false;
                    }, function (err) {
                      loading.dismiss();

                      _this.toasterservice.create("Please Enter Valid OTP", 'danger');
                    });

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "UpdatePassword",
        value: function UpdatePassword() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var code, code1, data, loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    code = this.otp5 + this.otp6 + this.otp7 + this.otp8; // var code1: number = +code;

                    code1 = parseInt(code);

                    if (!(this.Password.length < 8)) {
                      _context2.next = 6;
                      break;
                    }

                    this.toasterservice.create("Password must be 8 character", "danger");
                    _context2.next = 14;
                    break;

                  case 6:
                    data = {
                      password: this.Password
                    };
                    _context2.next = 9;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 9:
                    loading = _context2.sent;
                    _context2.next = 12;
                    return loading.present();

                  case 12:
                    _context2.next = 14;
                    return this.loginservice.ChangePassword(this.id, data).subscribe(function (res) {
                      loading.dismiss();

                      _this2.toasterservice.create("Password updated successfully", 'success');

                      _this2.router.navigate(['login']);
                    }, function (err) {
                      loading.dismiss();

                      _this2.toasterservice.create(err, 'danger');
                    });

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getDecodedAccessToken",
        value: function getDecodedAccessToken(token) {
          try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_8__(token);
          } catch (Error) {
            return null;
          }
        }
      }]);

      return OtpverifyresetPage;
    }();

    OtpverifyresetPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }];
    };

    OtpverifyresetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-passwordreset',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./otp_verify.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/passwordreset/otp_verify/otp_verify.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./otp_verify.page.scss */
      "./src/app/passwordreset/otp_verify/otp_verify.page.scss"))["default"]]
    })], OtpverifyresetPage);
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.toast) {
                      this.toast.dismiss();
                    }

                    _context3.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      color: color,
                      duration: ok ? null : duration,
                      position: 'bottom'
                    });

                  case 3:
                    this.toast = _context3.sent;
                    this.toast.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
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
//# sourceMappingURL=otp_verify-otp_verifyreset-module-es5.js.map