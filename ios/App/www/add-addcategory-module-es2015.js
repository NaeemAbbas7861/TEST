(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-addcategory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/group/category/add/addcategory.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/group/category/add/addcategory.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n <ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" >\r\n      <ion-back-button   style=\"color: black\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title  style=\"color: black;\" class=\"ion-text-center\">Add Group</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-text><h3  class=\"title ion-no-margin ion-margin-bottom ion-text-center\">Add Group</h3></ion-text>\r\n \r\n  <ion-grid >\r\n  <form [formGroup]=\"fg\">\r\n  <ion-row >\r\n    <ion-col>\r\n      <ion-input type=\"text\" placeholder=\"Name\" formControlName=\"Name\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.Name\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Name').hasError(validation.type) && (fg.get('Name').dirty || fg.get('Name').touched)\">\r\n            <ion-icon Name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- <ion-row class=\"ion-padding-vertical\">\r\n    <ion-col>\r\n      <ion-input type=\"text\" placeholder=\"Description\" formControlName=\"Description\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.Description\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"fg.get('Description').hasError(validation.type) && (fg.get('Description').dirty || fg.get('Description').touched)\">\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row> -->\r\n  <!-- <ion-row class=\"ion-align-items-center\">\r\n   <ion-col>\r\n    <input type=\"file\" id=\"banner\" name=\"banner\" #banner placeholder=\"Choose file\" (change)=\"uploadBanner(banner.files)\"\r\n    style=\"display:none;\" accept=\".jpg, .jpeg, .png, .gif\">\r\n      <ion-button expand=\"block\"   color=\"mytheme\" (click)=\"banner.click()\"><strong class=\"white ion-text-capitalize\">Banner</strong></ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <input type=\"file\" id=\"logo\" name=\"logo\" #logo placeholder=\"Choose file\" (change)=\"uploadThumbnail(logo.files)\"\r\n      style=\"display:none;\" accept=\".jpg, .jpeg, .png, .gif\">\r\n      <ion-button expand=\"block\"   color=\"mytheme\" (click)=\"logo.click()\"><strong class=\"white ion-text-capitalize\">Thumbnail</strong></ion-button>\r\n    </ion-col>\r\n  </ion-row> -->\r\n  <!-- <ion-row>\r\n    <ion-col>\r\n      <ion-img *ngIf=\"fg.value.Banner\" [src]=\"resourceURL + fg.value.Banner\" alt=\"Banner Image\"></ion-img>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-img *ngIf=\"fg.value.Thumbnail\" [src]=\"resourceURL + fg.value.Thumbnail\" alt=\"Thumbnail Image\"></ion-img>\r\n    </ion-col>\r\n  </ion-row> -->\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button expand=\"block\" color=\"primary\" [disabled]=\"fg.invalid\" (click)=\"AddCategory()\" color=\"mycolor1\"><strong class=\"white\">Add</strong></ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  </form>\r\n  \r\n</ion-grid>\r\n\r\n</ion-content>");

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



/***/ }),

/***/ "./src/app/superAdmin/group/category/add/addcategory.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/superAdmin/group/category/add/addcategory.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryPageModule", function() { return AddCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addcategory_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addcategory.page */ "./src/app/superAdmin/group/category/add/addcategory.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */






let AddCategoryPageModule = class AddCategoryPageModule {
};
AddCategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _addcategory_page__WEBPACK_IMPORTED_MODULE_5__["AddCategoryPage"]
                }
            ])
        ],
        declarations: [_addcategory_page__WEBPACK_IMPORTED_MODULE_5__["AddCategoryPage"]
        ],
        entryComponents: []
    })
], AddCategoryPageModule);



/***/ }),

/***/ "./src/app/superAdmin/group/category/add/addcategory.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/superAdmin/group/category/add/addcategory.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgdiv {\n  width: 80%;\n  height: 60%;\n}\n\n.img1 {\n  width: 100%;\n  height: 100%;\n}\n\n.small a {\n  font-size: 13px;\n  text-decoration: unset !important;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.title {\n  font-size: 18px;\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi9ncm91cC9jYXRlZ29yeS9hZGQvRDpcXGdpdGt1aWNrc2F2ZVxcbXVsdGlzdG9yZS1tb2JpbGUtYXBwL3NyY1xcYXBwXFxzdXBlckFkbWluXFxncm91cFxcY2F0ZWdvcnlcXGFkZFxcYWRkY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9zdXBlckFkbWluL2dyb3VwL2NhdGVnb3J5L2FkZC9hZGRjYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFSTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtBQ0NSOztBREVBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLHdCQUFBO0FDSUo7O0FEREE7RUFDSSxrQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvc3VwZXJBZG1pbi9ncm91cC9jYXRlZ29yeS9hZGQvYWRkY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbWdkaXZ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6NjAlO1xyXG59XHJcbi5pbWcxe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcbi5zbWFsbCB7XHJcbiAgICBhe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xyXG59XHJcbi53aGl0ZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5sb2dvIHtcclxuICAgIHdpZHRoOiAxLjI1ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59IiwiLmltZ2RpdiB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uaW1nMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zbWFsbCBhIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMS4yNWVtICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/superAdmin/group/category/add/addcategory.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/superAdmin/group/category/add/addcategory.page.ts ***!
  \*******************************************************************/
/*! exports provided: AddCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryPage", function() { return AddCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

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
let AddCategoryPage = class AddCategoryPage {
    constructor(router, route, categoryservice, loadingController, toastService, formBuilder, http
    // private imagePicker: ImagePicker
    ) {
        this.router = router;
        this.route = route;
        this.categoryservice = categoryservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.resourceURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].RESOURCE_URL;
        this.id = this.route.snapshot.paramMap.get('id');
        this.validation_messages = {
            Name: [{ type: "required", message: "Name is required." },
            ],
            Description: [{ type: "required", message: "Description is required." }],
        };
    }
    ngOnInit() {
        this.fg = this.formBuilder.group({
            'Name': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            'Description': [null],
            'GroupId': [this.id],
            'Thumbnail': [null],
            'Banner': [null],
        });
        this.fg.value.Name = ' ';
    }
    ionViewDidEnter() {
    }
    preventDefault(e) {
        e.preventDefault();
    }
    pickimage() {
        //  var options: ImagePickerOptions = { 
        //   maximumImagesCount: 2 ,
        //   quality: 50};
        // this.imagePicker.getPictures(options).then((results) => {
        //   this.imagepath = results[0];
        //   for (var i = 0; i < results.length; i++) {
        //       console.log('Image URI: ' + results[i]);
        //   }
        // }, (err) => { });
    }
    AddCategory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let obj = this.fg.value;
            obj.Name = obj.Name.trim();
            if (obj.Name.length == 0) {
                this.fg.controls['Name'].setValue(null);
                this.fg.controls['Name'].updateValueAndValidity();
            }
            else {
                const loading = yield this.loadingController.create({ message: "Loading" });
                yield loading.present();
                yield this.categoryservice.Postcategory(this.fg.value).subscribe(res => {
                    loading.dismiss();
                    this.toastService.create("Successfully Added", "success");
                    this.router.navigate(['superadmin/group/' + this.id + '/category']);
                }, err => {
                    loading.dismiss();
                    this.toastService.create(err, "danger");
                });
            }
        });
    }
};
AddCategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
AddCategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addcategory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addcategory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/group/category/add/addcategory.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addcategory.page.scss */ "./src/app/superAdmin/group/category/add/addcategory.page.scss")).default]
    })
], AddCategoryPage);



/***/ })

}]);
//# sourceMappingURL=add-addcategory-module-es2015.js.map