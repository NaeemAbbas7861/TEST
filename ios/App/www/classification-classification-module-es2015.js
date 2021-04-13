(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["classification-classification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/group/category/classification/classification.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/group/category/classification/classification.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" >\r\n      <ion-back-button style=\"color: black;\" icon=\"chevron-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: black;\" class=\"ion-text-center\">Brands</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title *ngIf = category> \r\n       Brand of {{category.name}}\r\n        </ion-card-title>   \r\n    </ion-card-header>\r\n  </ion-card>\r\n<div *ngIf=\"category\">\r\n<ion-card *ngFor=\"let classification of category.classifications\">\r\n  <ion-card-header>\r\n    <ion-item>\r\n    <ion-card-title> \r\n     {{classification.name}}\r\n      </ion-card-title>\r\n      <ion-icon slot =\"end\" name=\"pencil-outline\"  routerLink = \"edit/{{classification.id}}\" ></ion-icon>\r\n      <ion-icon slot=\"end\"  style=\"color: lightcoral;\" name=\"trash\" (click)=\"presentAlertConfirm(classification.id)\"></ion-icon>\r\n    </ion-item>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n   {{classification.description}}\r\n   <!-- <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col>\r\n        <div class=\"img\">\r\n        <img class=\"img1\" src = \"http://be.ehs.edu.pk/Resources/Images/Breakfast.jpg\">\r\n        <p class=\"ion-text-center\">Banner</p>\r\n      </div>\r\n      </ion-col>\r\n      <ion-col >\r\n        <div class=\"img\">\r\n        <img class=\"img1\" src = \"http://be.ehs.edu.pk/Resources/Images/Breakfast.jpg\">\r\n       <p class=\"ion-text-center\">thumbnail</p>\r\n      </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    </ion-grid> -->\r\n  </ion-card-content>\r\n</ion-card>\r\n</div>\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button routerLink = \"add\" color =\"white\">\r\n    <ion-icon  name=\"add\" size=\"large\"  style=\"color: #e9b006;\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n</ion-content>");

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

/***/ "./src/app/superAdmin/group/category/classification/classification.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/superAdmin/group/category/classification/classification.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ClassificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificationPageModule", function() { return ClassificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classification.page */ "./src/app/superAdmin/group/category/classification/classification.page.ts");

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
        component: _classification_page__WEBPACK_IMPORTED_MODULE_6__["ClassificationPage"]
    },
    { path: 'add', loadChildren: './add/addclassification.module#AddClassificationPageModule' },
    { path: 'edit/:id2', loadChildren: './edit/editclassification.module#EditClassificationPageModule' }
];
let ClassificationPageModule = class ClassificationPageModule {
};
ClassificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_classification_page__WEBPACK_IMPORTED_MODULE_6__["ClassificationPage"]
        ],
        entryComponents: []
    })
], ClassificationPageModule);



/***/ }),

/***/ "./src/app/superAdmin/group/category/classification/classification.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/superAdmin/group/category/classification/classification.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgdiv {\n  width: 80%;\n  height: 60%;\n}\n\n.img1 {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi9ncm91cC9jYXRlZ29yeS9jbGFzc2lmaWNhdGlvbi9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHN1cGVyQWRtaW5cXGdyb3VwXFxjYXRlZ29yeVxcY2xhc3NpZmljYXRpb25cXGNsYXNzaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3VwZXJBZG1pbi9ncm91cC9jYXRlZ29yeS9jbGFzc2lmaWNhdGlvbi9jbGFzc2lmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyQWRtaW4vZ3JvdXAvY2F0ZWdvcnkvY2xhc3NpZmljYXRpb24vY2xhc3NpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbWdkaXZ7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBoZWlnaHQ6NjAlO1xyXG59XHJcbi5pbWcxe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59IiwiLmltZ2RpdiB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uaW1nMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/superAdmin/group/category/classification/classification.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/superAdmin/group/category/classification/classification.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ClassificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificationPage", function() { return ClassificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_class_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/class.service */ "./src/app/services/class.service.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */







let ClassificationPage = class ClassificationPage {
    constructor(router, route, classificationservice, categoryservice, loadingController, toastService, alertController) {
        this.router = router;
        this.route = route;
        this.classificationservice = classificationservice;
        this.categoryservice = categoryservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.alertController = alertController;
        this.id = this.route.snapshot.paramMap.get('id1');
    }
    ionViewDidEnter() {
        this.getclassifications(this.id);
    }
    preventDefault(e) {
        e.preventDefault();
    }
    getclassifications(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.categoryservice.GetSinglecategory(id).subscribe(res => {
                loading.dismiss();
                if (res) {
                    console.log(res);
                    this.category = res;
                    //  this.ngOnInit();
                }
                else {
                    loading.dismiss();
                    this.toastService.create(res.Message, "danger");
                }
            }, err => {
                loading.dismiss();
                this.toastService.create(err, "danger");
            });
        });
    }
    Deleteclassification(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.classificationservice.Deleteclassification(id).subscribe(res => {
                loading.dismiss();
                this.getclassifications(this.id);
                this.toastService.create("Successfully deleted", "success");
            }, err => {
                loading.dismiss();
                this.toastService.create(err, "danger");
            });
        });
    }
    presentAlertConfirm(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you Sure?',
                message: 'Do you want to Delete this Brand?',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.Deleteclassification(id);
                            console.log('Confirm Okay:');
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ClassificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_class_service__WEBPACK_IMPORTED_MODULE_2__["ClassificationService"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
ClassificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-classification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./classification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/group/category/classification/classification.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./classification.page.scss */ "./src/app/superAdmin/group/category/classification/classification.page.scss")).default]
    })
], ClassificationPage);



/***/ })

}]);
//# sourceMappingURL=classification-classification-module-es2015.js.map