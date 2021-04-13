function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/product/product.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/product/product.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopOwnerShopProductProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\" style=\"color: black;\">Product</ion-title>\r\n    <ion-buttons slot=\"end\" >\r\n      <ion-back-button   style=\"color: black;\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-searchbar *ngIf=\"shopproducts >= '5'\" slot=\"start\" placeholder=\"Search...\" expand=\"full\"  [(ngModel)]=\"searchQuery\" (ionChange)=\"search()\"></ion-searchbar>\r\n\r\n<ion-content *ngIf = \"shop\" class=\"ion-padding\"  color=\"light\">\r\n\r\n  <ion-card *ngFor= \"let product of shop.products\">\r\n    <ion-item>\r\n    <ion-label ><b>{{product.title}}</b></ion-label>\r\n    <!-- <ion-icon slot =\"end\" color =\"mycolor1\" name=\"trash\" (click) = \"DeleteProduct(product.id)\" ></ion-icon>\r\n    <ion-icon slot =\"end\" color =\"mycolor1\" name=\"pencil-outline\" routerLink = \"{{shop.groupId}}/edit/{{product.id}}\" ></ion-icon>\r\n    <ion-icon slot =\"end\" color =\"mycolor1\" name=\"eye\" (click) = \"preview(product.id)\" ></ion-icon> -->\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label (click) = \"preview(product.id)\" style=\"width:70px; font-size: 16px;  color:  #e9b006;font-weight: bold;  font-family: 'Courier New', Courier, monospace;\" >View</ion-label> \r\n    <ion-label  routerLink = \"{{shop.groupId}}/edit/{{product.id}}\" style=\"width:70px; font-size: 16px;  color:  #e9b006;font-weight: bold; font-family: 'Courier New', Courier, monospace;\" focus >Edit</ion-label> \r\n    <ion-icon slot =\"end\" style=\"color: lightcoral;\" name=\"trash\" (click) = \"DeleteProduct(product.id)\" ></ion-icon>\r\n  </ion-item>\r\n  \r\n    <ion-card-content>\r\n      <!-- <p *ngIf=\"product.isAllowed && !product.isDisabled\" >Status: <span style=\"color: green;\">Active</span></p>\r\n      <p *ngIf=\"!product.isAllowed || product.isDisabled\" >Status: <span style=\"color: lightcoral;\">Pending</span></p> -->\r\n      <!-- <p>Type: {{shop.group.name}}</p> -->\r\n      <!-- <p>Description: {{product.description}}</p>\r\n      <p>Code: {{product.productCode}} </p> -->\r\n      <p>Product Code: {{product.productCode}}</p>\r\n      <p>Quantity: {{product.quantity}}</p>\r\n      <!-- <p>Unit: {{product.unit}}</p>\r\n      <p>Weight: {{product.weight}}</p> -->\r\n      <p>Price: {{product.price}}</p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div *ngIf=\"NotShopFound\">\r\n    <ion-text  class=\"mid ion-justify-content-center\" > No products found</ion-text>\r\n  </div>  \r\n  \r\n  <ion-fab *ngIf = \"shop\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button routerLink = \"{{shop.groupId}}/add\" color =\"white\">\r\n      <ion-icon  size=\"large\" name=\"add\" style=\"color: #e9b006;\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n";
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
        var _this;

        _classCallCheck(this, ShopService);

        _this = _super.call(this, http);
        _this.http = http;
        _this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        _this.API_SHOP = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "shop/");
        _this.API_PRODUCT = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "product/");
        _this.API_BANK = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "bank/");
        return _this;
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.toast) {
                      this.toast.dismiss();
                    }

                    _context.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      color: color,
                      duration: ok ? null : duration,
                      position: 'bottom'
                    });

                  case 3:
                    this.toast = _context.sent;
                    this.toast.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
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
  },

  /***/
  "./src/app/shopOwner/shop/product/product.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shopOwner/shop/product/product.module.ts ***!
    \**********************************************************/

  /*! exports provided: OwnerProductPageModule */

  /***/
  function srcAppShopOwnerShopProductProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwnerProductPageModule", function () {
      return OwnerProductPageModule;
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


    var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product.page */
    "./src/app/shopOwner/shop/product/product.page.ts");

    var routes = [{
      path: '',
      component: _product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPageOwner"]
    }, {
      path: ':groupId/add',
      loadChildren: './add/addproduct.module#AddProductPageModule'
    }, {
      path: ':groupId/edit/:proid',
      loadChildren: './edit/editproduct.module#EditProductPageModule'
    }];

    var OwnerProductPageModule = function OwnerProductPageModule() {
      _classCallCheck(this, OwnerProductPageModule);
    };

    OwnerProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPageOwner"]]
    })], OwnerProductPageModule);
    /***/
  },

  /***/
  "./src/app/shopOwner/shop/product/product.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/shopOwner/shop/product/product.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopOwnerShopProductProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".success {\n  color: green;\n}\n\n.fail {\n  color: red;\n}\n\n.mid {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translate(0, -50%);\n  padding-left: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcE93bmVyL3Nob3AvcHJvZHVjdC9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHNob3BPd25lclxcc2hvcFxccHJvZHVjdFxccHJvZHVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nob3BPd25lci9zaG9wL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3Nob3BPd25lci9zaG9wL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VjY2VzcyB7XHJcbiAgICBjb2xvcjogZ3JlZW5cclxufVxyXG4uZmFpbCB7XHJcbiAgICBjb2xvcjpyZWRcclxufVxyXG4ubWlkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgXHJcbn0iLCIuc3VjY2VzcyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZhaWwge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shopOwner/shop/product/product.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/shopOwner/shop/product/product.page.ts ***!
    \********************************************************/

  /*! exports provided: ProductPageOwner */

  /***/
  function srcAppShopOwnerShopProductProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPageOwner", function () {
      return ProductPageOwner;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/shop.service */
    "./src/app/services/shop.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts"); //import * as moment from 'moment';


    var ProductPageOwner = /*#__PURE__*/function () {
      function ProductPageOwner(route, shopservice, loadingController, //  private events: Events,
      toastService, router) {
        _classCallCheck(this, ProductPageOwner);

        this.route = route;
        this.shopservice = shopservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.router = router;
        this.id = this.route.snapshot.paramMap.get('id');
        this.NotShopFound = false; // this.today = moment().format('YYYY-MM-DD');
      }

      _createClass(ProductPageOwner, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    _context2.next = 7;
                    return this.shopservice.GetShopProducts(this.id).subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        console.log(res);
                        _this2.allproducts = res;
                      } else {
                        loading.dismiss();

                        _this2.toastService.create(res.Message, "danger");
                      }
                    });

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.GetShopProducts(this.id);
        }
      }, {
        key: "GetShopProducts",
        value: function GetShopProducts(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return this.shopservice.GetShopProducts(id).subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        console.log(res);
                        _this3.shop = res;
                        _this3.shopproducts = res.products;
                        console.log(_this3.shopproducts);

                        if (res.products.length >= 1) {
                          _this3.NotShopFound = false;
                        } else {
                          _this3.NotShopFound = true;
                        }
                      } else {
                        loading.dismiss();

                        _this3.toastService.create(res.Message, "danger");
                      }
                    });

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "DeleteProduct",
        value: function DeleteProduct(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 2:
                    loading = _context4.sent;
                    // await loading.present();
                    console.log(id);
                    _context4.next = 6;
                    return this.shopservice.DeleteProductbyId(id).subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        console.log(res);

                        _this4.toastService.create("Deleted", "success");

                        _this4.router.navigate(['shopowner/shops/']);
                      }
                    }, function (err) {
                      console.log(err);
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "preview",
        value: function preview(id) {
          this.router.navigateByUrl('productdetail/' + id + '/true');
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          console.log('Begin async operation');
          this.ngOnInit();
          setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
          }, 1000);
        }
      }, {
        key: "search",
        value: function search() {
          var _this5 = this;

          this.shop.products = this.allproducts.products.filter(function (item) {
            return item.title.toLowerCase().includes(_this5.searchQuery.toLowerCase());
          });
        }
      }]);

      return ProductPageOwner;
    }();

    ProductPageOwner.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ProductPageOwner = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myshops',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopOwner/shop/product/product.page.html"))["default"],
      inputs: ['recieved_data'],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product.page.scss */
      "./src/app/shopOwner/shop/product/product.page.scss"))["default"]]
    })], ProductPageOwner);
    /***/
  }
}]);
//# sourceMappingURL=product-product-module-es5.js.map