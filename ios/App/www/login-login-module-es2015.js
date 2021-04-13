(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header padding color=\"mytheme\" class=\"mybg head\">\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-back-button color=\"dark\"></ion-back-button> -->\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-row class=\"ion-justify-content-center\" style=\"background: black; height: 140px;\">\r\n    <ion-img src=\"assets/images/logo.png\" class=\"head-image\"></ion-img>\r\n  </ion-row>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" >\r\n  <ion-text class=\"ion-text-center\"><h3 color=\"mycolor1\" class=\"ion-no-margin ion-margin-bottom ion-text-center\" style=\"font-size: 18px; font-weight: bold; font-family: 'Courier New', Courier, monospace;\">Sign In</h3></ion-text>\r\n  <ion-grid>\r\n    <form [formGroup]=\"fg\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-input class=\"ion-clearInput\" type=\"email\" placeholder=\"Email\" formControlName=\"Email_Address\"></ion-input>\r\n          <ion-icon name=\"mail-outline\" style=\"color: grey;\"></ion-icon>\r\n        </ion-item>\r\n       <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.Email_Address\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"fg.get('Email_Address').hasError(validation.type) && (fg.get('Email_Address').dirty || fg.get('Email_Address').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-input class=\"ion-clearInput\" [type]=\"passwordType\" placeholder=\"Password\" formControlName=\"Password\"></ion-input>\r\n          <ion-icon style=\"color: grey;\"  [name]=\"eyeStyle\" slot=\"end\" (click)=\"togglePassword()\"></ion-icon>\r\n        </ion-item>\r\n       <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.Password\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"fg.get('Password').hasError(validation.type) && (fg.get('Password').dirty &&  fg.get('Password').minlength  || fg.get('Password').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-text class=\"ion-float-right\" color=\"medium\" (click)=\"fun.navigate('passwordreset', true)\"><h6  class=\"small ion-no-margin ion-text-end\" style=\"color: #e9b006; font-family: 'Times New Roman', Times, serif; font-size: 16px;\">Forgot Password?</h6></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"padding: 0%;\">\r\n      <ion-col>\r\n        <ion-button expand=\"block\" (click)=\"signin()\" color=\"mycolor1\"><strong class=\"white\">Sign In</strong></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n     \r\n    <!-- <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" fill=\"outline\" color=\"fb\" class=\"ion-no-padding\"><ion-img src=\"assets/images/facebook_logo.png\" slot=\"start\" class=\"logo ion-margin-end\" ></ion-img>Facebook</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" color=\"light ion-no-padding\" ><ion-img src=\"assets/images/google_logo.png\" slot=\"start\" class=\"logo ion-margin-end\" ></ion-img>Google</ion-button>\r\n      </ion-col>\r\n    </ion-row>  -->\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" fill=\"outline\"  (click)=\"fun.navigate('signup')\" color=\"mycolor1\"><strong><ion-text color=\"white\">Create an Account</ion-text></strong></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <div class=\"line ion-margin\"></div> -->\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-text class=\"ion-text-center\" color=\"medium\"><h6  class=\"small ion-no-margin\"><a (click)=\"termsOfUse()\">Terms and Conditions</a></h6></ion-text>\r\n       \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");

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
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n  padding-top: 10px;\n  padding-bottom: 30px;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: #DB9E07;\n}\n\n.title {\n  font-size: 18px;\n  color: white;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n}\n\n.button-color {\n  background-color: var(--ion-color-mytheme);\n}\n\n.logo {\n  width: 1.25em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXGdpdGt1aWNrc2F2ZVxcbXVsdGlzdG9yZS1tb2JpbGUtYXBwL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNGSjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDREo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBRERJO0VBQ0ksaUNBQUE7QUNHUjs7QURBQTtFQUNJLDBDQUFBO0FDR0o7O0FEREE7RUFDSSx3QkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmhlYWQge1xyXG4vLyAgICAgbWluLWhlaWdodDogdmggIWltcG9ydGFudDtcclxuLy8gfVxyXG4uaGVhZC1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAgMzBweDsgO1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcclxufVxyXG4ud2hpdGV7XHJcbiAgICBjb2xvcjogI0RCOUUwNztcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uYnV0dG9uLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XHJcbn1cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xyXG59XHJcbiAiLCIuaGVhZC1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDE4MHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiAjREI5RTA3O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnNtYWxsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions.service */ "./src/app/functions.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../infomodal/infomodal.page */ "./src/app/infomodal/infomodal.page.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_13__);

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */














let LoginPage = class LoginPage {
    constructor(platform, splashScreen, fun, menuCtrl, modalController, data, formBuilder, loginservice, sharedservice, storage, router, toasterservice, loadingController) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.fun = fun;
        this.menuCtrl = menuCtrl;
        this.modalController = modalController;
        this.data = data;
        this.formBuilder = formBuilder;
        this.loginservice = loginservice;
        this.sharedservice = sharedservice;
        this.storage = storage;
        this.router = router;
        this.toasterservice = toasterservice;
        this.loadingController = loadingController;
        this.email = '';
        this.password = '';
        this.passwordType = 'Password';
        this.eyeStyle = 'eye';
        this.passwordShown = false;
        this.validation_messages = {
            Email_Address: [
                { type: "required", message: "Email is required." },
                { type: "pattern", message: "Please enter a valid email." }
            ],
            mobileNumber: [
                { type: "required", message: "Contact Number is required." },
                { type: "pattern", message: "Number is like 03xxxxxxxxx and length must be 11" }
            ],
            Password: [
                { type: "required", message: "Password is required" },
                { type: "minlength", message: "Password must be 8 character" },
            ],
        };
        this.platform.backButton.subscribeWithPriority(5, () => {
            this.router.navigate(['/home']);
        });
        this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
            processNextHandler();
        });
    }
    ngOnInit() {
        this.fg = this.formBuilder.group({
            'Email_Address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")
                ])],
            'Password': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(8)]],
        });
    }
    ionViewWillEnter() {
        this.storage.get("IsLoggedIn").then(value => {
            if (value)
                this.router.navigate(['/home']);
        });
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false, 'start');
        this.menuCtrl.enable(false, 'end');
        this.splashScreen.hide();
        // this.fun.navigate('home', false);
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
    signin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.fun.navigate('home', false);
            // original code
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.loginservice.Login(this.fg.value)
                .subscribe(res => {
                if (res) {
                    loading.dismiss();
                    // this.storage.set(environment.USER, res);
                    var user = this.getDecodedAccessToken(res.token);
                    this.sharedservice.UpdateUser(user);
                    this.sharedservice.updatelogin(true);
                    this.storage.set("User", user);
                    this.storage.set("IsLoggedIn", true);
                    this.router.navigate(['/home']);
                }
            }, (err) => {
                loading.dismiss();
                if (err.message) {
                    this.toasterservice.create(err.message, 'danger');
                }
                else if (err.indexOf("unverified") != -1) {
                    var res = err.split("-")[1];
                    this.router.navigate(['/otpverify/' + res]);
                    this.storage.set("userid", res);
                }
                else {
                    console.log(err);
                    this.toasterservice.create('Your account is Disabled', 'danger');
                }
            });
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
    getDecodedAccessToken(token) {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_13__(token);
        }
        catch (Error) {
            return null;
        }
    }
    termsOfUse() {
        this.router.navigateByUrl('terms');
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"] },
    { type: _functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"] },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ToastService = class ToastService {
    constructor(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    create(message, color = "success", ok = false, duration = 3000) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.toast) {
                this.toast.dismiss();
            }
            this.toast = yield this.toastCtrl.create({
                message,
                color: color,
                duration: ok ? null : duration,
                position: 'bottom',
            });
            this.toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map