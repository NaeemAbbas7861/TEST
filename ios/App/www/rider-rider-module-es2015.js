(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rider-rider-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rider/dashboard.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rider/dashboard.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\"   style=\"color: black\">Dashboard</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" color=\"light\" *ngIf=\"riders && location\">\r\n\r\n  <!-- <ion-card>\r\n\r\n    <ion-card-content>\r\n      <h2> <b> Welcome <br> {{sharedservice.user.FirstName}} {{sharedservice.user.LastName}}</b></h2>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card style=\"height: 100px; \" (click)=\"Onclick()\">\r\n        <ion-card-content >\r\n          <ion-icon (click)=\"Onclick()\" name=\"document-text-outline\" color=\"mycolor1\" style=\"margin-left: 40px;\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\" style=\"padding-left: 15px;\">New Orders</ion-text><br>\r\n          </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-card style=\"height: 100px; \" (click)=\"Onclick1()\">\r\n        <ion-card-content >\r\n          <ion-icon (click)=\"Onclick1()\" name=\"document-text-outline\" color=\"mycolor1\" style=\"margin-left: 40px;\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\" style=\"padding-left: 5px;\" >Pending Orders</ion-text><br>\r\n         <ion-text class=\"ion-text-center\" style=\"font-size: 16px; padding-left: 40px;\">{{riders.pendingOrder}}</ion-text> \r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card style=\"height: 100px; width: 145px;\"  (click)=\"Onclick2()\">\r\n        <ion-card-content >\r\n          <ion-icon  (click)=\"Onclick2()\" name=\"document-text-outline\" color=\"mycolor1\" style=\"margin-left: 40px;\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\" >Complete Orders</ion-text><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; padding-left: 40px;\"> {{riders.completeOrder}}</ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row> -->\r\n  <ion-card class=\"welcome-card\">\r\n    <ion-img src=\"/assets/shapes.svg\"></ion-img>\r\n    <ion-card-header>\r\n      <ion-card-subtitle class=\"ion-text-center\" style=\"font-size: x-large; font-family: 'Times New Roman', Times, serif; \" color=\"dark\"> {{sharedservice.user.FirstName}}  {{sharedservice.user.LastName}}</ion-card-subtitle>\r\n      <ion-card-title>Welcome to Rider Dashboard</ion-card-title>\r\n    </ion-card-header>\r\n    <!-- <ion-card-content>\r\n      <p>Now that your profile has been created. Check out some\r\n        of the resources below for next steps.</p>\r\n    </ion-card-content> -->\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col size-md=\"6\" size-xs=\"12\"  (click)=\"Onclick()\" >\r\n            <ion-card class=\"card-pink\" >\r\n              <ion-card-header>\r\n                <ion-icon  name=\"create-outline\" style=\"margin-left: 40%; color: white;\" size=\"large\"></ion-icon><br>\r\n                <ion-card-title style=\"color: white; text-align: center;\" > New Orders</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n          \r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-2\" (click)=\"Onclick1()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{riders.pendingOrder}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Pending Orders</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n          <ion-col size-md=\"6\" size-xs=\"12\" >\r\n            <ion-card class=\"card-pink-1\" (click)=\"Onclick2()\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: white; text-align: center;\" >{{riders.completeOrder}}</ion-card-title>\r\n                <ion-card-title style=\"color: white; text-align: center;\">Complete Orders</ion-card-title>\r\n              </ion-card-header>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n\r\n<div class=\"ion-text-center ion-padding\" *ngIf = \"!location\">\r\n  <p>Error in Loading Location <br> Kindly Enable your Gps and Try again</p>\r\n    <ion-icon size=\"large\" name=\"reload-outline\" (click)=\"ionViewDidEnter()\"></ion-icon>\r\n  </div>");

/***/ }),

/***/ "./src/app/rider/rider-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/rider/rider-routing.module.ts ***!
  \***********************************************/
/*! exports provided: RiderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderRoutingModule", function() { return RiderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rider_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rider.page */ "./src/app/rider/rider.page.ts");




const routes = [
    {
        path: 'dashboard',
        component: _rider_page__WEBPACK_IMPORTED_MODULE_3__["RiderPage"]
    },
    { path: 'orders/:type', loadChildren: './riderOrder/riderOrder.module#RiderOrderPageModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#RiderDashBoardPage' },
];
let RiderRoutingModule = class RiderRoutingModule {
};
RiderRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RiderRoutingModule);



/***/ }),

/***/ "./src/app/rider/rider.module.ts":
/*!***************************************!*\
  !*** ./src/app/rider/rider.module.ts ***!
  \***************************************/
/*! exports provided: RiderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderPageModule", function() { return RiderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rider_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rider.page */ "./src/app/rider/rider.page.ts");
/* harmony import */ var _rider_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rider-routing.module */ "./src/app/rider/rider-routing.module.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");







let RiderPageModule = class RiderPageModule {
};
RiderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _rider_routing_module__WEBPACK_IMPORTED_MODULE_5__["RiderRoutingModule"]
        ],
        declarations: [_rider_page__WEBPACK_IMPORTED_MODULE_4__["RiderPage"]],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]],
        entryComponents: []
    })
], RiderPageModule);



/***/ }),

/***/ "./src/app/rider/rider.page.scss":
/*!***************************************!*\
  !*** ./src/app/rider/rider.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-home .logouticon {\n  margin-left: 9px;\n}\npage-home .headerImg {\n  position: relative;\n  left: 35%;\n  padding-bottom: 11%;\n}\npage-home .toolbar-background-md {\n  border-color: #00000008;\n  background: #00000008;\n}\npage-home .item-md {\n  border-radius: 13px;\n  border: solid 1px #70707040;\n  padding-left: 16px;\n  padding-right: 0;\n  position: relative;\n  font-size: 1.6rem;\n  font-weight: normal;\n  text-transform: none;\n  color: #000;\n  background-color: #fff;\n  box-shadow: #a6bad33d 2px 3px 13px;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\npage-home .bar-button-default-md, page-home .bar-button-clear-md-default, page-home .bar-button-md-default {\n  color: #2a80b9;\n  background-color: transparent;\n}\npage-home ion-input {\n  padding-left: 22px;\n  position: static;\n}\npage-home .col {\n  padding: 1px;\n}\npage-home .welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\npage-home .largeIcon {\n  justify-content: center;\n}\npage-home .mygrid {\n  padding-top: 35px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n}\npage-home .myrow {\n  padding-left: 18px;\n  padding-right: 55px;\n}\npage-home .myBTNs {\n  background: #8E44AD;\n  color: white;\n  margin: 1%;\n  border-radius: 6px;\n  box-shadow: #a6bad37d 5px 6px 17px;\n}\npage-home .largeIcon {\n  padding-top: 8%;\n  padding-left: 12px;\n  font-size: 25px;\n}\npage-home .myHeader {\n  position: relative;\n  position: relative;\n  margin-top: 7px;\n  font-size: 17px;\n  font-weight: bold;\n  margin-bottom: 20px;\n  margin-left: 12px;\n  padding-bottom: 22%;\n  padding-top: 6px;\n}\npage-home .textalign {\n  text-align: end;\n}\npage-home .myBTNs1 {\n  background: #FD79A8;\n  color: white;\n  position: relative;\n  left: 35px;\n  margin: 2px;\n  border-radius: 6px;\n  box-shadow: #a6bad37d 5px 6px 17px;\n}\npage-home .myDiv {\n  background: #00000008;\n  margin-bottom: 31px;\n}\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/* Set the color on all ion-button elements */\n.card-pink {\n  background-color: #e9b006;\n  --color: white;\n}\n.card-pink-1 {\n  background-color: #17a2b8;\n  --color: white;\n}\n.card-pink-2 {\n  background-color: #f76371;\n  --color: white;\n}\n.card-pink-3 {\n  background-color: #106d10;\n  --color: white;\n}\n.card-pink-4 {\n  background-color: #6f42c1;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlkZXIvRDpcXGdpdGt1aWNrc2F2ZVxcbXVsdGlzdG9yZS1tb2JpbGUtYXBwL3NyY1xcYXBwXFxyaWRlclxccmlkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yaWRlci9yaWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxnQkFBQTtBQ0RSO0FESUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ0ZSO0FETUk7RUFDSSx1QkFBQTtFQUNBLHFCQUFBO0FDSlI7QURRSTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQ0FBQTtFQUVBLCtEQUFBO0FDTlI7QURTSTtFQUNJLGNBQUE7RUFDQSw2QkFBQTtBQ1BSO0FEV0s7RUFDRyxrQkFBQTtFQUNBLGdCQUFBO0FDVFI7QURZSTtFQUNJLFlBQUE7QUNWUjtBRGFJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ1hSO0FEYU07RUFDSSx1QkFBQTtBQ1hWO0FEZUk7RUFFSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2RSO0FEa0JJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ2hCUjtBRG9CSTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUVBLGtDQUFBO0FDbkJSO0FEc0JJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3BCUjtBRHVCSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNyQlI7QUR3Qkk7RUFDSSxlQUFBO0FDdEJSO0FENEJJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsa0NBQUE7QUMxQlI7QUQrQkk7RUFDSSxxQkFBQTtFQUVBLG1CQUFBO0FDOUJSO0FEa0NJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQy9CUjtBRGtDTSw2Q0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDL0JSO0FEaUNNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDOUJSO0FEaUNNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDOUJSO0FEZ0NNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDN0JSO0FEK0JNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDNUJSIiwiZmlsZSI6InNyYy9hcHAvcmlkZXIvcmlkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1ob21lIHtcclxuXHJcbiAgICAubG9nb3V0aWNvbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGVhZGVySW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAzNSU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDExJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAudG9vbGJhci1iYWNrZ3JvdW5kLW1kIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICAjMDAwMDAwMDg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogICMwMDAwMDAwODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAuaXRlbS1tZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNzA3MDcwNDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogI2E2YmFkMzNkIDJweCAzcHggMTNweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iYXItYnV0dG9uLWRlZmF1bHQtbWQsIC5iYXItYnV0dG9uLWNsZWFyLW1kLWRlZmF1bHQsIC5iYXItYnV0dG9uLW1kLWRlZmF1bHQge1xyXG4gICAgICAgIGNvbG9yOiAjMmE4MGI5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICBpb24taW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjJweDtcclxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sIHtcclxuICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICAud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgICAubGFyZ2VJY29ue1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAubXlncmlke1xyXG4gICAgXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLm15cm93e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1NXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5teUJUTnN7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhFNDRBRDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAxJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAjYTZiYWQzM2QgMnB4IDNweCAxM3B4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICNhNmJhZDM3ZCA1cHggNnB4IDE3cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sYXJnZUljb257XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDglO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5teUhlYWRlcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjIlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAudGV4dGFsaWdue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICAubXlCVE5zMXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkQ3OUE4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMzVweDtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAjYTZiYWQzM2QgMnB4IDNweCAxM3B4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICNhNmJhZDM3ZCA1cHggNnB4IDE3cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAubXlEaXZ7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMDAwMDAwMDg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzFweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIFNldCB0aGUgY29sb3Igb24gYWxsIGlvbi1idXR0b24gZWxlbWVudHMgKi9cclxuICAgICAgLmNhcmQtcGluayB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5YjAwNjtcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZC1waW5rLTEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jYXJkLXBpbmstMiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3NjM3MTtcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZC1waW5rLTMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgMTA5LCAxNik7XHJcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtcGluay00IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY0MmMxO1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICIsInBhZ2UtaG9tZSAubG9nb3V0aWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5wYWdlLWhvbWUgLmhlYWRlckltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMzUlO1xuICBwYWRkaW5nLWJvdHRvbTogMTElO1xufVxucGFnZS1ob21lIC50b29sYmFyLWJhY2tncm91bmQtbWQge1xuICBib3JkZXItY29sb3I6ICMwMDAwMDAwODtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDA4O1xufVxucGFnZS1ob21lIC5pdGVtLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzcwNzA3MDQwO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiAjYTZiYWQzM2QgMnB4IDNweCAxM3B4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxucGFnZS1ob21lIC5iYXItYnV0dG9uLWRlZmF1bHQtbWQsIHBhZ2UtaG9tZSAuYmFyLWJ1dHRvbi1jbGVhci1tZC1kZWZhdWx0LCBwYWdlLWhvbWUgLmJhci1idXR0b24tbWQtZGVmYXVsdCB7XG4gIGNvbG9yOiAjMmE4MGI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbnBhZ2UtaG9tZSBpb24taW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5wYWdlLWhvbWUgLmNvbCB7XG4gIHBhZGRpbmc6IDFweDtcbn1cbnBhZ2UtaG9tZSAud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxucGFnZS1ob21lIC5sYXJnZUljb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbnBhZ2UtaG9tZSAubXlncmlkIHtcbiAgcGFkZGluZy10b3A6IDM1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5wYWdlLWhvbWUgLm15cm93IHtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1NXB4O1xufVxucGFnZS1ob21lIC5teUJUTnMge1xuICBiYWNrZ3JvdW5kOiAjOEU0NEFEO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMSU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjYTZiYWQzM2QgMnB4IDNweCAxM3B4O1xuICBib3gtc2hhZG93OiAjYTZiYWQzN2QgNXB4IDZweCAxN3B4O1xufVxucGFnZS1ob21lIC5sYXJnZUljb24ge1xuICBwYWRkaW5nLXRvcDogOCU7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxucGFnZS1ob21lIC5teUhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjIlO1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxucGFnZS1ob21lIC50ZXh0YWxpZ24ge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5wYWdlLWhvbWUgLm15QlROczEge1xuICBiYWNrZ3JvdW5kOiAjRkQ3OUE4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMzVweDtcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjYTZiYWQzM2QgMnB4IDNweCAxM3B4O1xuICBib3gtc2hhZG93OiAjYTZiYWQzN2QgNXB4IDZweCAxN3B4O1xufVxucGFnZS1ob21lIC5teURpdiB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwODtcbiAgbWFyZ2luLWJvdHRvbTogMzFweDtcbn1cblxuLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogU2V0IHRoZSBjb2xvciBvbiBhbGwgaW9uLWJ1dHRvbiBlbGVtZW50cyAqL1xuLmNhcmQtcGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWIwMDY7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZC1waW5rLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQtcGluay0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3NjM3MTtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLXBpbmstMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDZkMTA7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZC1waW5rLTQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY0MmMxO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/rider/rider.page.ts":
/*!*************************************!*\
  !*** ./src/app/rider/rider.page.ts ***!
  \*************************************/
/*! exports provided: RiderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderPage", function() { return RiderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");









let RiderPage = class RiderPage {
    constructor(sharedservice, orderservice, loadingController, router, toastService, storage, geolocation) {
        this.sharedservice = sharedservice;
        this.orderservice = orderservice;
        this.loadingController = loadingController;
        this.router = router;
        this.toastService = toastService;
        this.storage = storage;
        this.geolocation = geolocation;
        this.location = true;
    }
    ngOnInit() {
        this.data = console.log(this.sharedservice.user);
    }
    ionViewDidEnter() {
        this.storage.get("User").then(value => {
            if (value) {
                console.log(value.sid);
                this.GetRiderDashboardData(value.sid);
            }
        });
        this.getUserLocation();
    }
    getUserLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Getting location" });
            yield loading.present();
            this.geolocation
                .getCurrentPosition({ maximumAge: 60000, timeout: 4000, enableHighAccuracy: true })
                .then(resp => {
                loading.dismiss();
                this.location = true;
                this.Latitude = resp.coords.latitude;
                this.Longitude = resp.coords.longitude;
                console.log("Rider Lat", this.Latitude, "rider Long", this.Longitude);
                this.storage.set('Location', { lat: this.Latitude, lng: this.Longitude });
            })
                .catch(error => {
                console.log("Error getting location", error);
                this.location = false;
                loading.dismiss();
            });
        });
    }
    Onclick() {
        this.router.navigateByUrl('rider/orders/new');
    }
    Onclick1() {
        this.router.navigateByUrl('rider/orders/pending');
    }
    Onclick2() {
        this.router.navigateByUrl('rider/orders/completed');
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.ngOnInit();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 1000);
    }
    GetRiderDashboardData(data1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: "Loading"
            });
            yield loading.present();
            yield this.orderservice.riderDashboard(data1).subscribe(res => {
                loading.dismiss();
                if (res) {
                    loading.dismiss();
                    console.log(res);
                    this.riders = res;
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
};
RiderPage.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] }
];
RiderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-rider",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rider/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rider.page.scss */ "./src/app/rider/rider.page.scss")).default]
    })
], RiderPage);



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let OrderService = class OrderService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    // private readonly API_PRODUCT = `${environment.BASE_URL}product/`
    constructor(http) {
        super(http);
        this.http = http;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.API_ORDER = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}order/`;
        this.API_EARNING = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}earning/`;
        this.API_RETURNDISCOUNT = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}returnedproduct/`;
    }
    GetCustomerOrders(id) {
        const url = `${this.API_ORDER}user/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    Getreturnedproduct() {
        const url = `${this.API_RETURNDISCOUNT}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetReturnedProductbyId(id) {
        const url = `${this.API_RETURNDISCOUNT}${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    DeleteProduct(id) {
        const url = `${this.API_RETURNDISCOUNT}${id}`;
        return this.http.delete(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    postreturnedProduct(data) {
        const url = `${this.API_RETURNDISCOUNT}`;
        return this.http.post(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    EditProduct(id, data) {
        const url = `${this.API_RETURNDISCOUNT}${id}`;
        return this.http.put(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetOrderItems(id) {
        const url = `${this.API_ORDER}${id}/orderitems`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    Allorders() {
        const url = `${this.API_ORDER}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    riderDashboard(id) {
        const url = `${this.API_ORDER}rider/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetOrder(id) {
        const url = `${this.API_ORDER}${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetCustomerOrder(id) {
        const url = `${this.API_ORDER}customer/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetUserShopOrders(id) {
        // const url = `${this.API_ORDER}usershop/${id}`;
        const url = `${this.API_ORDER}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetNewUserShopOrders(id) {
        const url = `${this.API_ORDER}usershop/${id}/0`;
        ///const url = `${this.API_ORDER}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetPendingUserShopOrders(id) {
        const url = `${this.API_ORDER}usershop/${id}/1`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetCompleteUserShopOrders(id) {
        const url = `${this.API_ORDER}usershop/${id}/2`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetCancelUserShopOrders(id) {
        const url = `${this.API_ORDER}usershop/${id}/3`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetNewRiderOrders(lat, lng) {
        const url = `${this.API_ORDER}${lat}/${lng}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetRiderOrdersByStatus(id, status) {
        const url = `${this.API_ORDER}rider/${id}/${status}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    PostOrder(data) {
        const url = `${this.API_ORDER}`;
        return this.http.post(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    PutOrder(id, data) {
        const url = `${this.API_ORDER}${id}`;
        return this.http.put(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    MarksReceived(id) {
        const url = `${this.API_ORDER}${id}/markreceived`;
        return this.http.put(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    AcceptOrder(id, riderid, status) {
        const url = `${this.API_ORDER}${id}/${riderid}/${status}`;
        return this.http.put(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    CancelOrder(id, status) {
        const url = `${this.API_ORDER}${id}/changestatus/${status}`;
        return this.http.put(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    OrderCompletionCode(id, ordercode, status) {
        const url = `${this.API_ORDER}complete/${id}/${ordercode}/${status}`;
        return this.http.put(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetEarning(date) {
        const url = `${this.API_EARNING}superadmin/${date}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetEarningDatetoDate(date, date1) {
        const url = `${this.API_EARNING}superadmin/${date}/${date1}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    DownloadEarningDatetoDate(date, date1) {
        const url = `${this.API_EARNING}downloadcsv/${date}/${date1}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetShopEarning(id, date) {
        const url = `${this.API_EARNING}shopowner/${id}/${date}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    ChangePaymentStatus(id, status, panelty) {
        const url = `${this.API_ORDER}PaymentStatus/${id}/${status}/${panelty}`;
        return this.http.put(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



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
//# sourceMappingURL=rider-rider-module-es2015.js.map