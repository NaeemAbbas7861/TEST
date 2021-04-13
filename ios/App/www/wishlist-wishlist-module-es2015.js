(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-wishlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"mytheme\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button  style=\"color: black\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\"  style=\"color: black\">Wishlist</ion-title>\n    <ion-back-button   style=\"color: black\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\n  </ion-toolbar>\n\n  <ion-content >\n    <div class=\"mid\" *ngIf=\"!show\">\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <button class=\"circle\">\n          <ion-icon name=\"cart\" size=\"large\"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-text><strong>Your wishlist is empty</strong></ion-text>\n      </ion-row>\n      <ion-row size=\"12\" class=\"ion-justify-content-center\" disabled=\"true\">\n        <ion-button fill=\"clear\" color=\"primary\" (click)=\"browse()\">Browse Products</ion-button>\n      </ion-row>\n    </div>\n\n  </ion-content>");

/***/ }),

/***/ "./src/app/wishlist/wishlist-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/wishlist/wishlist-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: WishlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageRoutingModule", function() { return WishlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/wishlist/wishlist.page.ts");




const routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_3__["WishlistPage"]
    }
];
let WishlistPageRoutingModule = class WishlistPageRoutingModule {
};
WishlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WishlistPageRoutingModule);



/***/ }),

/***/ "./src/app/wishlist/wishlist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.module.ts ***!
  \*********************************************/
/*! exports provided: WishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist-routing.module */ "./src/app/wishlist/wishlist-routing.module.ts");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/wishlist/wishlist.page.ts");







let WishlistPageModule = class WishlistPageModule {
};
WishlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["WishlistPageRoutingModule"]
        ],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
    })
], WishlistPageModule);



/***/ }),

/***/ "./src/app/wishlist/wishlist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".white {\n  color: white;\n}\n\nion-content {\n  color: white;\n}\n\n.circle {\n  border-radius: 40px;\n  background-color: #faf6f6;\n  width: 50px;\n  height: 50px;\n}\n\n.input {\n  background-color: #f3f3f3;\n  border-radius: 3px;\n  border: 1px solid #f0f0f0;\n  font-size: 0.9em !important;\n}\n\n.pad {\n  padding: 0 6px;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n}\n\n.full {\n  width: 100%;\n}\n\n.cut {\n  color: #787878;\n  text-decoration: line-through;\n}\n\n.blue {\n  color: #db9e07;\n}\n\n.sep {\n  height: 1px;\n  background-color: #2c2b2b;\n  width: 100vw;\n  margin: 6px 0;\n}\n\n.text {\n  font-size: 0.81em;\n  color: #db9e07;\n}\n\n.select {\n  background-color: #eee4e4;\n  border-radius: 3px;\n  border: 1px solid #d2d2d2;\n  padding: 6px 12px;\n  min-width: 100%;\n}\n\n.card {\n  background-color: #fcf5f5;\n  margin-top: 9px;\n}\n\ndiv {\n  min-width: 100%;\n}\n\n.item-name {\n  font-size: 1em;\n  color: #2c2b2b;\n}\n\n.small {\n  margin: 0;\n  font-size: 0.81em;\n}\n\n.item-def {\n  font-size: 0.81em;\n  color: #2c2b2b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzaGxpc3QvRDpcXGdpdGt1aWNrc2F2ZVxcbXVsdGlzdG9yZS1tb2JpbGUtYXBwL3NyY1xcYXBwXFx3aXNobGlzdFxcd2lzaGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0FDTUo7O0FESkE7RUFDSSxXQUFBO0FDT0o7O0FETEE7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7QUNRSjs7QUROQTtFQUNJLGNBQUE7QUNTSjs7QURQQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDVUo7O0FEUkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNXSjs7QURUQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1lKOztBRFZBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDYUo7O0FEWEE7RUFDSSxlQUFBO0FDY0o7O0FEWkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ2VKOztBRGJBO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0FDZ0JKOztBRGRBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDaUJKIiwiZmlsZSI6InNyYy9hcHAvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNpcmNsZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTAsIDI0NiwgMjQ2KTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcclxufVxyXG4ucGFkIHtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG59XHJcbi5taWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxufVxyXG4uZnVsbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY3V0e1xyXG4gICAgY29sb3I6IHJnYigxMjAsIDEyMCwgMTIwKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbi5ibHVle1xyXG4gICAgY29sb3I6IHJnYigyMTksIDE1OCwgNyk7O1xyXG59XHJcbi5zZXAge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDQzLCA0Myk7O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiA2cHggMDtcclxufVxyXG4udGV4dCB7XHJcbiAgICBmb250LXNpemU6IC44MWVtO1xyXG4gICAgY29sb3I6cmdiKDIxOSwgMTU4LCA3KTtcclxufVxyXG4uc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIyOCwgMjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1MiwgMjQ1LCAyNDUpOztcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxufVxyXG5kaXZ7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuLml0ZW0tbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiByZ2IoNDQsIDQzLCA0Myk7XHJcbn1cclxuLnNtYWxsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogLjgxZW07XHJcbn1cclxuLml0ZW0tZGVmIHtcclxuICAgIGZvbnQtc2l6ZTogLjgxZW07XHJcbiAgICBjb2xvcjogcmdiKDQ0LCA0MywgNDMpO1xyXG59XHJcbiIsIi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmNmY2O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cblxuLnBhZCB7XG4gIHBhZGRpbmc6IDAgNnB4O1xufVxuXG4ubWlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3V0IHtcbiAgY29sb3I6ICM3ODc4Nzg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiAjZGI5ZTA3O1xufVxuXG4uc2VwIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzJiMmI7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWFyZ2luOiA2cHggMDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDAuODFlbTtcbiAgY29sb3I6ICNkYjllMDc7XG59XG5cbi5zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlNGU0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjVmNTtcbiAgbWFyZ2luLXRvcDogOXB4O1xufVxuXG5kaXYge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtLW5hbWUge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICMyYzJiMmI7XG59XG5cbi5zbWFsbCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjgxZW07XG59XG5cbi5pdGVtLWRlZiB7XG4gIGZvbnQtc2l6ZTogMC44MWVtO1xuICBjb2xvcjogIzJjMmIyYjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/wishlist/wishlist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/wishlist/wishlist.page.ts ***!
  \*******************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");



let WishlistPage = class WishlistPage {
    constructor(storage) {
        this.storage = storage;
        this.show = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.get("Wishlist").then(value => {
                if (value) {
                    console.log(value.length);
                    this.wishlist = value;
                    if (value.length === 0) {
                        this.show = false;
                    }
                    else {
                        this.show = true;
                        console.log(this.wishlist);
                    }
                }
                else {
                    this.show = false;
                }
            });
        });
    }
};
WishlistPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
WishlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./wishlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./wishlist.page.scss */ "./src/app/wishlist/wishlist.page.scss")).default]
    })
], WishlistPage);



/***/ })

}]);
//# sourceMappingURL=wishlist-wishlist-module-es2015.js.map