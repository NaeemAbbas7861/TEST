(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rider/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rider/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n <ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\"  color=\"light\">\r\n\r\n  <ion-card >\r\n    <!-- <ion-card-header> -->\r\n      \r\n      <!-- <ion-img style=\"width: 100%;\" [src]= shop.logo ></ion-img> -->\r\n      \r\n    <!-- </ion-card-header> -->\r\n    <ion-card-content >\r\n     <h2>  <b>  Welcome <br> {{sharedservice.user.FirstName}} {{sharedservice.user.LastName}}</b></h2> \r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n\r\n\r\n    <ion-card>\r\n      <ion-card-content class=\"ion-text-center\">\r\n      <ion-row>\r\n      <ion-col> <h2  (click)=\"Onclick()\" font-size= \"40px\" > <span  style=\"color: green;\">New Orders  </span> </h2></ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n </ion-card>\r\n <ion-card>\r\n  <ion-card-content class=\"ion-text-center\">\r\n  <ion-row>\r\n  <ion-col> <h2  (click)=\"Onclick1()\" font-size= \"40px\" > <span  style=\"color: lightcoral;\">Pending Orders  </span> </h2></ion-col>\r\n  </ion-row>\r\n</ion-card-content>\r\n</ion-card>\r\n\r\n<ion-card>\r\n  <ion-card-content class=\"ion-text-center\">\r\n  <ion-row>\r\n  <ion-col> <h2  (click)=\"Onclick2()\" font-size= \"40px\" > <span  style=\"color: rgb(43, 43, 221);\">Complete Orders   </span> </h2></ion-col>\r\n  </ion-row>\r\n</ion-card-content>\r\n</ion-card>\r\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n  <ion-refresher-content></ion-refresher-content>\r\n</ion-refresher>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/dashboard/dashboard.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/dashboard/dashboard.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title  color=\"light\" class=\"ion-text-center\">Dashboard</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content fullscreen  *ngIf=\"data\">\r\n  \r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card style=\"height: 100px; width: 150px;\" (click)=\" Onclick()\" >\r\n        <ion-card-content >\r\n          <ion-icon color=\"mycolor1\" name=\"create-outline\" style=\"margin-left: 40px;\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px;\">Add new Shop</ion-text><br>\r\n           </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-card style=\"height: 100px; width: 150px;\" (click)=\" Onclick1()\">\r\n        <ion-card-content >\r\n          <ion-icon color=\"mycolor1\" name=\"send-outline\" style=\"margin-left: 40px;\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\"style=\"margin-top: 35px; font-size: 16px;\">Active Shops</ion-text><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; padding-left: 40px;\">{{data.activeShops}} </ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card style=\"height: 100px; width: 150px; \" (click)=\" Onclick1()\">\r\n        <ion-card-content >\r\n          <ion-icon name=\"chatbubbles-outline\"  color=\"mycolor1\" style=\"margin-left: 40px;\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px;\">Deactive Shops</ion-text><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; padding-left: 40px;\"> {{data.deactiveShops}}</ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-card style=\"height: 100px; width: 150px;\" (click)=\" Onclick3()\">\r\n        <ion-card-content >\r\n          <ion-icon name=\"pricetags-outline\" color=\"mycolor1\" style=\"margin-left: 40px;\" size=\"large\"></ion-icon><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; padding-left: 20px;\">Products</ion-text><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; padding-left: 40px;\"> {{data.products}}</ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card style=\"height: 100px; width: 150px;\"  (click)=\"OrdersClick()\">\r\n        <ion-card-content >\r\n          <ion-icon name=\"document-text-outline\" color=\"mycolor1\" style=\"margin-left: 40px;\" size=\"large\"></ion-icon><br>\r\n          <ion-text (click)=\" Onclick()\" class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; padding-left: 08px;\">New Orders</ion-text><br>\r\n          <ion-text class=\"ion-text-center\" style=\"margin-top: 35px; font-size: 16px; padding-left: 40px;\">  {{data.newOrders}}</ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\" color=\"light\">\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <h2> <b> Welcome <br> {{sharedservice.user.FirstName}} {{sharedservice.user.LastName}}</b></h2>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-content class=\"ion-text-center\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <h2 (click)=\"Onclick()\" font-size=\"40px\"> <span style=\"color: green;\">New Orders </span> </h2>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-content class=\"ion-text-center\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <h2 (click)=\"Onclick1()\" font-size=\"40px\"> <span style=\"color: lightcoral;\">Pending Orders </span> </h2>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content class=\"ion-text-center\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <h2 (click)=\"Onclick2()\" font-size=\"40px\"> <span style=\"color: rgb(43, 43, 221);\">Complete Orders </span>\r\n          </h2>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/rider/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/rider/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image {\n  height: 200px;\n}\n\n.product-image-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(transparent 75%, white 100%);\n}\n\n.hover-buttons {\n  position: absolute;\n  bottom: -10px;\n  z-index: 10;\n  right: 15px;\n}\n\n.red {\n  color: red;\n}\n\n.price {\n  font-size: 15px;\n  float: left;\n  width: 100% !important;\n  text-align: center !important;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 12px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.badge {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 8px 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  min-width: 45px;\n  border: 0.6px solid rgba(120, 120, 120, 0.5);\n  border-radius: 25px;\n  z-index: 9;\n  font-size: 16px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.row {\n  margin: 5px;\n}\n\n.spon-img {\n  min-height: 100px;\n  max-height: 100px;\n  margin: 3px;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 120px;\n  max-width: 120px;\n  display: inline;\n  padding: 3px 9px;\n  align-content: center !important;\n}\n\n.progress-outer {\n  width: 96%;\n  text-align: center;\n  background-color: #f4f4f4;\n  border: 1px solid #dcdcdc;\n  color: #fff;\n  border-radius: 20px;\n}\n\n.progress-inner {\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 5px;\n  border-radius: 20px;\n  background-color: var(--ion-color-mytheme);\n}\n\n.info {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.name {\n  font-size: 18px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n  transform: translateX(-16px);\n}\n\n.fab {\n  width: 25px;\n  height: 25px;\n  padding: 9px;\n  border-radius: 25px;\n  margin-left: 6px;\n  border: 0.6px solid rgba(0, 0, 0, 0.3);\n  background-color: white !important;\n}\n\n.rate {\n  color: var(--ion-color-mytheme) !important;\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlkZXIvZGFzaGJvYXJkL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxccmlkZXJcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yaWRlci9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssYUFBQTtBQ0NMOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdEQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtBQ01KOztBREpBO0VBQ0ksb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0FDU0o7O0FEUEE7RUFDSSxXQUFBO0FDVUo7O0FEUkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1dKOztBRFRBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNZSjs7QURWQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ2FKOztBRFhBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ2NKOztBRFpBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDZUo7O0FEYkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDZ0JKOztBRGRBO0VBQ0ksZUFBQTtBQ2lCSjs7QURmQTtFQUNJLGVBQUE7QUNrQko7O0FEaEJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNtQko7O0FEakJBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQ29CSjs7QURsQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtBQ3FCSjs7QURuQkE7RUFDSSwwQ0FBQTtFQUNBLGVBQUE7QUNzQko7O0FEcEJBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUN1QkoiLCJmaWxlIjoic3JjL2FwcC9yaWRlci9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcclxuICAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5wcm9kdWN0LWltYWdlLW92ZXJsYXl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA3NSUsd2hpdGUgMTAwJSk7XHJcbn1cclxuLmhvdmVyLWJ1dHRvbnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICByaWdodDogMTVweDtcclxufVxyXG4ucmVke1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4ucHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDNweDtcclxufVxyXG4uaW5saW5lIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4uYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgcGFkZGluZzogOHB4IDVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiA0NXB4O1xyXG4gICAgYm9yZGVyOiAwLjZweCBzb2xpZCByZ2JhKDEyMCwgMTIwLCAxMjAsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uY21udCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnJldi1pbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLnJvdyB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4uc3Bvbi1pbWcge1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbi5jb250YWluZXItb3V0ZXIgeyBcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcbi5jb250YWluZXItaW5uZXIgeyBcclxuICAgIG1pbi13aWR0aDogMTIwcHg7IFxyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmc6IDNweCA5cHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4ucHJvZ3Jlc3Mtb3V0ZXIge1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5wcm9ncmVzcy1pbm5lciB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XHJcbn1cclxuLmluZm8ge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zbWFsbC1pY28ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDMzcHg7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbn1cclxuLnNlcCB7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE2cHgpO1xyXG59XHJcbi5mYWIge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIGJvcmRlcjogLjZweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJhdGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mdWxsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iLCIuaW1hZ2Uge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ucHJvZHVjdC1pbWFnZS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNzUlLCB3aGl0ZSAxMDAlKTtcbn1cblxuLmhvdmVyLWJ1dHRvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEwcHg7XG4gIHotaW5kZXg6IDEwO1xuICByaWdodDogMTVweDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW46IDNweDtcbn1cblxuLmlubGluZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogOHB4IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBtaW4td2lkdGg6IDQ1cHg7XG4gIGJvcmRlcjogMC42cHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB6LWluZGV4OiA5O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jbW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucmV2LWltZyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5zcG9uLWltZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi5jb250YWluZXItb3V0ZXIge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZzogM3B4IDlweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9ncmVzcy1vdXRlciB7XG4gIHdpZHRoOiA5NiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5wcm9ncmVzcy1pbm5lciB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xufVxuXG4uaW5mbyB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc21hbGwtaWNvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDMzcHg7XG4gIGhlaWdodDogMzNweDtcbn1cblxuLnNlcCB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkMmQyO1xuICB3aWR0aDogMTAwdnc7XG4gIG1hcmdpbjogNnB4IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTZweCk7XG59XG5cbi5mYWIge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGJvcmRlcjogMC42cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucmF0ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/rider/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/rider/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let Dashboard = class Dashboard {
    constructor(sharedservice, orderservice, loadingController, router) {
        this.sharedservice = sharedservice;
        this.orderservice = orderservice;
        this.loadingController = loadingController;
        this.router = router;
    }
    ngOnInit() {
        this.data = console.log(this.sharedservice.user);
    }
    Onclick() {
        this.router.navigateByUrl('rider/orders/new');
    }
    Onclick1() {
        this.router.navigateByUrl('rider/orders/pending');
    }
    Onclick2() {
        this.router.navigateByUrl('rider/orders/complete');
    }
};
Dashboard.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Dashboard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-rider",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rider/dashboard/dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/rider/dashboard/dashboard.component.scss")).default]
    })
], Dashboard);



/***/ }),

/***/ "./src/app/rider/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/rider/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: RiderDashBoardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderDashBoardPage", function() { return RiderDashBoardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/rider/dashboard/dashboard.component.ts");





let RiderDashBoardPage = class RiderDashBoardPage {
};
RiderDashBoardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        ],
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["Dashboard"]]
    })
], RiderDashBoardPage);



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



/***/ }),

/***/ "./src/app/shopOwner/dashboard/dashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shopOwner/dashboard/dashboard.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image {\n  height: 200px;\n}\n\n.product-image-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(transparent 75%, white 100%);\n}\n\n.hover-buttons {\n  position: absolute;\n  bottom: -10px;\n  z-index: 10;\n  right: 15px;\n}\n\n.red {\n  color: red;\n}\n\n.price {\n  font-size: 15px;\n  float: left;\n  width: 100% !important;\n  text-align: center !important;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 12px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.badge {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 8px 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  min-width: 45px;\n  border: 0.6px solid rgba(120, 120, 120, 0.5);\n  border-radius: 25px;\n  z-index: 9;\n  font-size: 16px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.row {\n  margin: 5px;\n}\n\n.spon-img {\n  min-height: 100px;\n  max-height: 100px;\n  margin: 3px;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 120px;\n  max-width: 120px;\n  display: inline;\n  padding: 3px 9px;\n  align-content: center !important;\n}\n\n.progress-outer {\n  width: 96%;\n  text-align: center;\n  background-color: #f4f4f4;\n  border: 1px solid #dcdcdc;\n  color: #fff;\n  border-radius: 20px;\n}\n\n.progress-inner {\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 5px;\n  border-radius: 20px;\n  background-color: var(--ion-color-mytheme);\n}\n\n.info {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.name {\n  font-size: 18px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n  transform: translateX(-16px);\n}\n\n.fab {\n  width: 25px;\n  height: 25px;\n  padding: 9px;\n  border-radius: 25px;\n  margin-left: 6px;\n  border: 0.6px solid rgba(0, 0, 0, 0.3);\n  background-color: white !important;\n}\n\n.rate {\n  color: var(--ion-color-mytheme) !important;\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcE93bmVyL2Rhc2hib2FyZC9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHNob3BPd25lclxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nob3BPd25lci9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssYUFBQTtBQ0NMOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdEQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtBQ01KOztBREpBO0VBQ0ksb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0FDU0o7O0FEUEE7RUFDSSxXQUFBO0FDVUo7O0FEUkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1dKOztBRFRBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNZSjs7QURWQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ2FKOztBRFhBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ2NKOztBRFpBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDZUo7O0FEYkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDZ0JKOztBRGRBO0VBQ0ksZUFBQTtBQ2lCSjs7QURmQTtFQUNJLGVBQUE7QUNrQko7O0FEaEJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNtQko7O0FEakJBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQ29CSjs7QURsQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtBQ3FCSjs7QURuQkE7RUFDSSwwQ0FBQTtFQUNBLGVBQUE7QUNzQko7O0FEcEJBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUN1QkoiLCJmaWxlIjoic3JjL2FwcC9zaG9wT3duZXIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XHJcbiAgICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4ucHJvZHVjdC1pbWFnZS1vdmVybGF5e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNzUlLHdoaXRlIDEwMCUpO1xyXG59XHJcbi5ob3Zlci1idXR0b25ze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnJlZHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLnByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbn1cclxuLmlubGluZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuLmJhZGdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIHBhZGRpbmc6IDhweCA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIG1pbi13aWR0aDogNDVweDtcclxuICAgIGJvcmRlcjogMC42cHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNtbnQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5yZXYtaW1nIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5yb3cge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLnNwb24taW1nIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxufVxyXG4uY29udGFpbmVyLW91dGVyIHsgXHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG4uY29udGFpbmVyLWlubmVyIHsgXHJcbiAgICBtaW4td2lkdGg6IDEyMHB4OyBcclxuICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLnByb2dyZXNzLW91dGVyIHtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4ucHJvZ3Jlc3MtaW5uZXIge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xyXG59XHJcbi5pbmZvIHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uc21hbGwtaWNvIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uYXZhdGFyIHtcclxuICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG59XHJcbi5zZXAge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNnB4KTtcclxufVxyXG4uZmFiIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBib3JkZXI6IC42cHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5yYXRlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZnVsbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwiLmltYWdlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnByb2R1Y3QtaW1hZ2Utb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDc1JSwgd2hpdGUgMTAwJSk7XG59XG5cbi5ob3Zlci1idXR0b25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbi5yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucHJpY2Uge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi5pbmxpbmUge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiA1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDhweCA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgbWluLXdpZHRoOiA0NXB4O1xuICBib3JkZXI6IDAuNnB4IHNvbGlkIHJnYmEoMTIwLCAxMjAsIDEyMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgei1pbmRleDogOTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY21udCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnJldi1pbWcge1xuICB3aWR0aDogNTBweDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uc3Bvbi1pbWcge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogM3B4O1xufVxuXG4uY29udGFpbmVyLW91dGVyIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi5jb250YWluZXItaW5uZXIge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IDNweCA5cHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ucHJvZ3Jlc3Mtb3V0ZXIge1xuICB3aWR0aDogOTYlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ucHJvZ3Jlc3MtaW5uZXIge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcbn1cblxuLmluZm8ge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNtYWxsLWljbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiAzM3B4O1xuICBoZWlnaHQ6IDMzcHg7XG59XG5cbi5zZXAge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZDJkMjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDZweCAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE2cHgpO1xufVxuXG4uZmFiIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZzogOXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBib3JkZXI6IDAuNnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnJhdGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZ1bGwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/shopOwner/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shopOwner/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let Dashboard = class Dashboard {
    constructor(sharedservice, loginservice, toastService, loadingController, router) {
        this.sharedservice = sharedservice;
        this.loginservice = loginservice;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.router = router;
    }
    ngOnInit() {
        this.GetShopOwnerData(this.sharedservice.user.sid);
    }
    GetShopOwnerData(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.loginservice.GetShopOwnerData(id).subscribe(res => {
                loading.dismiss();
                if (res) {
                    loading.dismiss();
                    console.log(res);
                    this.data = res;
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
    Onclick() {
        this.router.navigateByUrl('shopowner/shops/add');
    }
    OrdersClick() {
        this.router.navigateByUrl('shopowner/order/new');
    }
    Onclick1() {
        this.router.navigateByUrl('shopowner/shops');
    }
    Onclick3() {
        this.router.navigateByUrl('shopowner/list-of-product');
    }
    doRefresh(event) {
        this.ngOnInit();
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
};
Dashboard.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
Dashboard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-superadmin",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/dashboard/dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/shopOwner/dashboard/dashboard.component.scss")).default]
    })
], Dashboard);



/***/ }),

/***/ "./src/app/shopOwner/dashboard/dashboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shopOwner/dashboard/dashboard.module.ts ***!
  \*********************************************************/
/*! exports provided: ShopOwnerDashBoardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopOwnerDashBoardPage", function() { return ShopOwnerDashBoardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/shopOwner/dashboard/dashboard.component.ts");





let ShopOwnerDashBoardPage = class ShopOwnerDashBoardPage {
};
ShopOwnerDashBoardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        ],
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["Dashboard"]]
    })
], ShopOwnerDashBoardPage);



/***/ }),

/***/ "./src/app/superAdmin/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/superAdmin/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image {\n  height: 200px;\n}\n\n.product-image-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(transparent 75%, white 100%);\n}\n\n.hover-buttons {\n  position: absolute;\n  bottom: -10px;\n  z-index: 10;\n  right: 15px;\n}\n\n.red {\n  color: red;\n}\n\n.price {\n  font-size: 15px;\n  float: left;\n  width: 100% !important;\n  text-align: center !important;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 12px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.badge {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 8px 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  min-width: 45px;\n  border: 0.6px solid rgba(120, 120, 120, 0.5);\n  border-radius: 25px;\n  z-index: 9;\n  font-size: 16px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.row {\n  margin: 5px;\n}\n\n.spon-img {\n  min-height: 100px;\n  max-height: 100px;\n  margin: 3px;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 120px;\n  max-width: 120px;\n  display: inline;\n  padding: 3px 9px;\n  align-content: center !important;\n}\n\n.progress-outer {\n  width: 96%;\n  text-align: center;\n  background-color: #f4f4f4;\n  border: 1px solid #dcdcdc;\n  color: #fff;\n  border-radius: 20px;\n}\n\n.progress-inner {\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 5px;\n  border-radius: 20px;\n  background-color: var(--ion-color-mytheme);\n}\n\n.info {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.name {\n  font-size: 18px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n  transform: translateX(-16px);\n}\n\n.fab {\n  width: 25px;\n  height: 25px;\n  padding: 9px;\n  border-radius: 25px;\n  margin-left: 6px;\n  border: 0.6px solid rgba(0, 0, 0, 0.3);\n  background-color: white !important;\n}\n\n.rate {\n  color: var(--ion-color-mytheme) !important;\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJBZG1pbi9kYXNoYm9hcmQvRDpcXGdpdGt1aWNrc2F2ZVxcbXVsdGlzdG9yZS1tb2JpbGUtYXBwL3NyY1xcYXBwXFxzdXBlckFkbWluXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3VwZXJBZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssYUFBQTtBQ0NMOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdEQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtBQ01KOztBREpBO0VBQ0ksb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0FDU0o7O0FEUEE7RUFDSSxXQUFBO0FDVUo7O0FEUkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1dKOztBRFRBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNZSjs7QURWQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ2FKOztBRFhBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ2NKOztBRFpBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDZUo7O0FEYkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDZ0JKOztBRGRBO0VBQ0ksZUFBQTtBQ2lCSjs7QURmQTtFQUNJLGVBQUE7QUNrQko7O0FEaEJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNtQko7O0FEakJBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQ29CSjs7QURsQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtBQ3FCSjs7QURuQkE7RUFDSSwwQ0FBQTtFQUNBLGVBQUE7QUNzQko7O0FEcEJBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUN1QkoiLCJmaWxlIjoic3JjL2FwcC9zdXBlckFkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xyXG4gICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLnByb2R1Y3QtaW1hZ2Utb3ZlcmxheXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDc1JSx3aGl0ZSAxMDAlKTtcclxufVxyXG4uaG92ZXItYnV0dG9uc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG59XHJcbi5yZWR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbi5pbmxpbmUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbi5iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBwYWRkaW5nOiA4cHggNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDQ1cHg7XHJcbiAgICBib3JkZXI6IDAuNnB4IHNvbGlkIHJnYmEoMTIwLCAxMjAsIDEyMCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5jbW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ucmV2LWltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG4ucm93IHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbi5zcG9uLWltZyB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbn1cclxuLmNvbnRhaW5lci1vdXRlciB7IFxyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuLmNvbnRhaW5lci1pbm5lciB7IFxyXG4gICAgbWluLXdpZHRoOiAxMjBweDsgXHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcGFkZGluZzogM3B4IDlweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9ncmVzcy1vdXRlciB7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLnByb2dyZXNzLWlubmVyIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTtcclxufVxyXG4uaW5mbyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4ubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnNtYWxsLWljbyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgICB3aWR0aDogMzNweDtcclxuICAgIGhlaWdodDogMzNweDtcclxufVxyXG4uc2VwIHtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiA2cHggMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTZweCk7XHJcbn1cclxuLmZhYiB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHBhZGRpbmc6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgYm9yZGVyOiAuNnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ucmF0ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmZ1bGwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSIsIi5pbWFnZSB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5wcm9kdWN0LWltYWdlLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA3NSUsIHdoaXRlIDEwMCUpO1xufVxuXG4uaG92ZXItYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMTBweDtcbiAgei1pbmRleDogMTA7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG4ucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnByaWNlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogM3B4O1xufVxuXG4uaW5saW5lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiA4cHggNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIG1pbi13aWR0aDogNDVweDtcbiAgYm9yZGVyOiAwLjZweCBzb2xpZCByZ2JhKDEyMCwgMTIwLCAxMjAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHotaW5kZXg6IDk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNtbnQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yZXYtaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5yb3cge1xuICBtYXJnaW46IDVweDtcbn1cblxuLnNwb24taW1nIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDNweDtcbn1cblxuLmNvbnRhaW5lci1vdXRlciB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAzcHggOXB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnByb2dyZXNzLW91dGVyIHtcbiAgd2lkdGg6IDk2JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnByb2dyZXNzLWlubmVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG59XG5cbi5pbmZvIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zbWFsbC1pY28ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogMzNweDtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuXG4uc2VwIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDI7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWFyZ2luOiA2cHggMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNnB4KTtcbn1cblxuLmZhYiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgYm9yZGVyOiAwLjZweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5yYXRlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/superAdmin/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/superAdmin/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let Dashboard = class Dashboard {
    constructor(sharedservice, orderservice, loadingController, router) {
        this.sharedservice = sharedservice;
        this.orderservice = orderservice;
        this.loadingController = loadingController;
        this.router = router;
    }
    ngOnInit() {
        this.data = console.log(this.sharedservice.user);
    }
    Onclick() {
        this.router.navigateByUrl('rider/orders/new');
    }
    Onclick1() {
        this.router.navigateByUrl('rider/orders/pending');
    }
    Onclick2() {
        this.router.navigateByUrl('rider/orders/complete');
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.ngOnInit();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 1000);
    }
};
Dashboard.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Dashboard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-superadmin",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/superAdmin/dashboard/dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/superAdmin/dashboard/dashboard.component.scss")).default]
    })
], Dashboard);



/***/ }),

/***/ "./src/app/superAdmin/dashboard/dashboard.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/superAdmin/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: SuperAdminDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminDashboardModule", function() { return SuperAdminDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/superAdmin/dashboard/dashboard.component.ts");





let SuperAdminDashboardModule = class SuperAdminDashboardModule {
};
SuperAdminDashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        ],
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["Dashboard"]]
    })
], SuperAdminDashboardModule);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map