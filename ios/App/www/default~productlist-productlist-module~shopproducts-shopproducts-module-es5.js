function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~productlist-productlist-module~shopproducts-shopproducts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/productlist/productlist.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productlist/productlist.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductlistProductlistPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n<ion-searchbar  placeholder=\"Search Product\" expand=\"full\" [(ngModel)]=\"searchQuery\" (ionChange)=\"search()\">\r\n</ion-searchbar>\r\n\r\n<ion-row>\r\n  <ion-col *ngFor=\"let data of recieved_data;\" size=\"6\">\r\n    <ion-card (click)=\"open(data.id)\">\r\n      <ion-badge class=\"badge\" *ngIf=\"data.offer\">{{data.discount}}%</ion-badge>\r\n      <img *ngIf=\"data.images[0]\" src=\"{{env.RESOURCE_URL}}{{data.images[0].path}}\" style=\"height:130px;\"\r\n        [alt]=\"data.title\">\r\n      <img *ngIf=\"!data.images[0]\" src=\"../../assets/images/noimage.jpg\" style=\"height:130px;\" [alt]=\"data.title\">\r\n      <ion-card-content>\r\n        <ion-card-title>\r\n          <ion-row>\r\n            <!-- <ion-col *ngIf=\"data.discount\" class=\"ion-no-padding\" >\r\n              <ion-text class=\"ion-text-left\" ><span class=\"price\"><span class=\"inline\">Rs {{data.cost_price}}</span> <strong>{{data.currency}}{{fun.calculate(data.cost_price, data.discount)}}</strong></span></ion-text>\r\n            </ion-col> -->\r\n            <ion-col class=\"ion-no-padding\">\r\n              <h4 class=\"ion-text-center\">{{data.title}}</h4>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"ion-text-center ion-no-padding\">\r\n              <ion-text *ngIf=\"data.discount <= '0'\">\r\n                <h6 class=\"text-align-justify \" style=\"font-size: 14px;\">Rs. {{data.price}}</h6><br>\r\n              </ion-text>\r\n              <ion-text *ngIf=\"data.discount > '0'\">\r\n                <del class=\"foot-highlight  text-align-justify\" style=\"font-size: 16px;\">Rs. {{data.price}}</del><br>\r\n              </ion-text>\r\n              <ion-text *ngIf=\"data.discount > '0'\">\r\n                <h6 class=\" text-align-justify \" style=\"font-size: 14px;\">Rs. {{(data.price-((data.price/100)*data.discount) )}}</h6>\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-title>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-col>\r\n</ion-row>";
    /***/
  },

  /***/
  "./src/app/productlist/productlist.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/productlist/productlist.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductlistProductlistPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  box-shadow: unset;\n  border-radius: 9px;\n  border: 1px gray solid;\n  background-color: white !important;\n}\n\n.price {\n  font-size: 18px;\n  float: left;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 15px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.subtitle {\n  font-size: 12px;\n  color: #787878;\n}\n\n.badge {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  background-color: rgba(12, 12, 12, 0.75);\n  border-radius: 0;\n}\n\n.foot-highlight {\n  color: #ddab07;\n  display: inline-block;\n  margin: auto;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdGxpc3QvRDpcXGdpdGt1aWNrc2F2ZVxcbXVsdGlzdG9yZS1tb2JpbGUtYXBwL3NyY1xcYXBwXFxwcm9kdWN0bGlzdFxccHJvZHVjdGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9kdWN0bGlzdC9wcm9kdWN0bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0bGlzdC9wcm9kdWN0bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGJvcmRlcjogMXB4IGdyYXkgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbi5pbmxpbmUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbi5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xyXG59XHJcbi5iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTIsIC43NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi5mb290LWhpZ2hsaWdodCB7XHJcbiAgICBjb2xvcjogI2RkYWIwNzs7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIiwiLmNhcmQge1xuICBib3gtc2hhZG93OiB1bnNldDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBib3JkZXI6IDFweCBncmF5IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucHJpY2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDNweDtcbn1cblxuLmlubGluZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3ODc4Nzg7XG59XG5cbi5iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDEyLCAxMiwgMC43NSk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5mb290LWhpZ2hsaWdodCB7XG4gIGNvbG9yOiAjZGRhYjA3O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/productlist/productlist.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/productlist/productlist.page.ts ***!
    \*************************************************/

  /*! exports provided: ProductlistPage */

  /***/
  function srcAppProductlistProductlistPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductlistPage", function () {
      return ProductlistPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/shop.service */
    "./src/app/services/shop.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../functions.service */
    "./src/app/functions.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */


    var ProductlistPage = /*#__PURE__*/function () {
      function ProductlistPage(fun, nav, loadingController, shopservices, toastService) {
        _classCallCheck(this, ProductlistPage);

        this.fun = fun;
        this.nav = nav;
        this.loadingController = loadingController;
        this.shopservices = shopservices;
        this.toastService = toastService;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
        this.allproduct = [];
      }

      _createClass(ProductlistPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

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
                    return this.shopservices.GetProduct().subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        console.log(res);
                        _this.allproduct = res;
                        _this.Test = _this.allproduct.length;
                      }
                    }, function (err) {
                      loading.dismiss();

                      _this.toastService.create(err, "danger");
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
        key: "open",
        value: function open(id) {
          this.nav.navigateForward('/productdetail/' + id + '/false');
        }
      }, {
        key: "search",
        value: function search() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.recieved_data = this.allproduct.filter(function (item) {
                      return item.title.toLowerCase().includes(_this2.searchQuery.toLowerCase());
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ProductlistPage;
    }();

    ProductlistPage.ctorParameters = function () {
      return [{
        type: _functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ProductlistPage.prototype, "recieved_data", void 0);
    ProductlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-productlist',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./productlist.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/productlist/productlist.page.html"))["default"],
      inputs: ['recieved_data'],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./productlist.page.scss */
      "./src/app/productlist/productlist.page.scss"))["default"]]
    })], ProductlistPage);
    /***/
  },

  /***/
  "./src/app/services/shop.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/shop.service.ts ***!
    \******************************************/

  /*! exports provided: ShopService */

  /***/
  function srcAppServicesShopServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopService", function () {
      return ShopService;
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


    var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./base.service */
    "./src/app/services/base.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ShopService = /*#__PURE__*/function (_base_service__WEBPAC) {
      _inherits(ShopService, _base_service__WEBPAC);

      var _super = _createSuper(ShopService);

      function ShopService(http) {
        var _this3;

        _classCallCheck(this, ShopService);

        _this3 = _super.call(this, http);
        _this3.http = http;
        _this3.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        _this3.API_SHOP = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "shop/");
        _this3.API_PRODUCT = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "product/");
        _this3.API_BANK = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "bank/");
        return _this3;
      }

      _createClass(ShopService, [{
        key: "GetShops",
        value: function GetShops(lat, lng) {
          var url = "".concat(this.API_SHOP).concat(lat, "/").concat(lng);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopsByCategory",
        value: function GetShopsByCategory(groupid, lat, lng) {
          var url = "".concat(this.API_SHOP).concat(lat, "/").concat(lng, "/").concat(groupid);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetSingleShopByName",
        value: function GetSingleShopByName() {
          var url = "".concat(this.API_SHOP);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "getApprovedShops",
        value: function getApprovedShops() {
          var url = "".concat(this.API_SHOP, "verified");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "getUnApprovedShops",
        value: function getUnApprovedShops() {
          var url = "".concat(this.API_SHOP, "unverfied");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "getShopsByUser",
        value: function getShopsByUser(id) {
          var url = "".concat(this.API_SHOP, "user/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "ApproveShop",
        value: function ApproveShop(id, data) {
          var url = "".concat(this.API_SHOP).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "UpdateShop",
        value: function UpdateShop(id, data) {
          var url = "".concat(this.API_SHOP).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "UpdateProduct",
        value: function UpdateProduct(id, data) {
          var url = "".concat(this.API_PRODUCT).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopProducts",
        value: function GetShopProducts(id) {
          var url = "".concat(this.API_SHOP).concat(id, "/products");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopByProducts",
        value: function GetShopByProducts(id) {
          var url = "".concat(this.API_SHOP, "products/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopByuserProducts",
        value: function GetShopByuserProducts(id) {
          var url = "".concat(this.API_PRODUCT, "userProduct/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShop",
        value: function GetShop(id) {
          var url = "".concat(this.API_SHOP).concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetProductDetail",
        value: function GetProductDetail(id) {
          var url = "".concat(this.API_PRODUCT).concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "PostShop",
        value: function PostShop(data) {
          var url = "".concat(this.API_SHOP);
          return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "PostProduct",
        value: function PostProduct(data) {
          var url = "".concat(this.API_PRODUCT);
          return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetProduct",
        value: function GetProduct() {
          var url = "".concat(this.API_PRODUCT);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "DeleteProductbyId",
        value: function DeleteProductbyId(id) {
          var url = "".concat(this.API_PRODUCT).concat(id);
          return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "DeleteShop",
        value: function DeleteShop(id) {
          var url = "".concat(this.API_SHOP).concat(id);
          return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetBank",
        value: function GetBank() {
          var url = "".concat(this.API_BANK);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }]);

      return ShopService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

    ShopService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ShopService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ShopService);
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
//# sourceMappingURL=default~productlist-productlist-module~shopproducts-shopproducts-module-es5.js.map