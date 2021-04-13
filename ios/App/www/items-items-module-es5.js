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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["items-items-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/rider/riderOrder/items/item.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rider/riderOrder/items/item.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRiderRiderOrderItemsItemPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\" style=\"color: black;\">Order Items</ion-title>\r\n\r\n  <ion-buttons slot=\"end\" >\r\n    <ion-back-button   style=\"color: black\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding ion-text-center\"  >\r\n<ion-card>\r\n  <div style=\"overflow-x:auto; padding-left: 5px; \" >\r\n  <table *ngIf = \"items\" color=\"light\">\r\n    <tr>\r\n      <th>Product</th>\r\n      <th>Quantity</th>\r\n    </tr>\r\n    <tr *ngFor= \"let item of items.orderItems\">\r\n      <td>{{item.product.title}}</td>\r\n      <td>{{item.quantity}}</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n</ion-card>\r\n<div style=\"min-height: 300px;\" color=\"light\">\r\n  <div #mapElement class=\"map\" style=\"min-height: 300px;\"></div>\r\n</div>\r\n\r\n\r\n    <ion-card *ngIf = \"items\">\r\n      <ion-item>\r\n        Customer Details\r\n      </ion-item>\r\n      <ion-card-content>\r\n        <p> Name: {{items.user.firstName}} {{items.user.lastName}} </p>\r\n        <p> Contact: 0{{items.user.contact_Number}}</p>\r\n        <p>Delivery Address: {{items.delieveryAddress}}</p>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card *ngIf = \"items\">\r\n      <ion-item>\r\n        Shop Details\r\n      </ion-item>\r\n      <ion-card-content>\r\n        <p> Name: {{items.shop.name}} </p>\r\n        <p> Contact: {{items.shop.contact}}</p>\r\n        <p> Address: {{items.shop.address}}</p>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    \r\n    <ion-card *ngIf = \"type == 'pending'\" class=\"input1\">\r\n      <ion-card-content>\r\n      <ion-label><h3 class=\"small\">Enter Customer Verification Code</h3></ion-label>\r\n      <ion-input [(ngModel)]=\"Verification\" type=\"text\" name=\"Verification\" placeholder=\"Enter Verification code\" class=\"input ion-padding-horizontal\" ></ion-input>\r\n      <ion-button  class=\"ion-padding\" color=\"mycolor1\" (click)=\"CompleteOrder(items.id ,Verification ,2)\">Complete</ion-button>\r\n     <ion-button  class=\"ion-padding\" color=\"mycolor1\" (click)=\"presentAlertConfirm()\" > Cancel</ion-button>\r\n      </ion-card-content>\r\n  </ion-card>\r\n    <!-- <ion-button *ngIf = \"type == 'new'\" class=\"ion-padding\" color=\"mycolor1\" (click)=\"acceptOrder(items.id , 1)\">Accept Order</ion-button> -->\r\n    <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher> -->\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/rider/riderOrder/items/item.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/rider/riderOrder/items/item.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRiderRiderOrderItemsItemPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".success {\n  color: green;\n}\n\n.fail {\n  color: red;\n}\n\n.map {\n  height: 100%;\n  width: 100%;\n}\n\n.input1 {\n  border: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlkZXIvcmlkZXJPcmRlci9pdGVtcy9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHJpZGVyXFxyaWRlck9yZGVyXFxpdGVtc1xcaXRlbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3JpZGVyL3JpZGVyT3JkZXIvaXRlbXMvaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERFO0VBR0ksYUFBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvcmlkZXIvcmlkZXJPcmRlci9pdGVtcy9pdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWNjZXNzIHtcclxuICAgIGNvbG9yOiBncmVlblxyXG59XHJcbi5mYWlsIHtcclxuICAgIGNvbG9yOnJlZFxyXG59XHJcbi5tYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5pbnB1dDFcclxuICB7XHJcbiAgICAgXHJcbiAgICAgIGJvcmRlcjogYmxhY2s7XHJcbiAgICAgIFxyXG4gIH0iLCIuc3VjY2VzcyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmZhaWwge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlucHV0MSB7XG4gIGJvcmRlcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/rider/riderOrder/items/item.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/rider/riderOrder/items/item.page.ts ***!
    \*****************************************************/

  /*! exports provided: ItemsPage */

  /***/
  function srcAppRiderRiderOrderItemsItemPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsPage", function () {
      return ItemsPage;
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


    var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js"); //import * as moment from 'moment';


    var ItemsPage = /*#__PURE__*/function () {
      function ItemsPage(route, orderservice, loadingController, //  private events: Events,
      toastService, storage, router, alertController) {
        _classCallCheck(this, ItemsPage);

        this.route = route;
        this.orderservice = orderservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.storage = storage;
        this.router = router;
        this.alertController = alertController;
        this.id = this.route.snapshot.paramMap.get('id');
        this.type = this.route.snapshot.paramMap.get('type');
        this.directionsService = new google.maps.DirectionsService();
        this._directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({
          suppressMarkers: true
        });
        this._directionsDisplay = new google.maps.DirectionsRenderer({
          suppressMarkers: true
        }); // this.today = moment().format('YYYY-MM-DD');
      }

      _createClass(ItemsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.GetOrderItems(this.id);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          //this.loadMap(33.6328532 , 72.93583679);
          this.storage.get("User").then(function (value) {
            _this.userId = value.sid;
          });
        }
      }, {
        key: "GetOrderItems",
        value: function GetOrderItems(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

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
                    return this.orderservice.GetOrder(id).subscribe(function (res) {
                      loading.dismiss();

                      if (res) {
                        console.log(res);
                        _this2.items = res;

                        _this2.loadMap(res.shop.latitude, res.shop.longitude, res.customerLat, res.customerLong);

                        console.log(res.shop.latitude, res.shop.longitude, res.customerLat, res.customerLong);
                      } else {
                        loading.dismiss();

                        _this2.toastService.create(res.Message, "danger");
                      }
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
        key: "loadMap",
        value: function loadMap(shoplat, shoplong, customerlat, customerlong) {
          var _this3 = this;

          this.map = new google.maps.Map(this.mapElement.nativeElement, {
            label: "A",
            center: {
              lat: shoplat,
              lng: shoplong
            },
            title: 'Hello World!',
            zoom: 15
          });
          console.log(this.storage.get('Location'));
          this.storage.get("Location").then(function (value) {
            if (value) {
              console.log(value);
              new google.maps.Marker({
                icon: "assets/images/rider_32_by_32.png",
                map: _this3.map,
                position: value
              });
            }
          });
          this.directionsDisplay.setMap(this.map);

          this._directionsDisplay.setMap(this.map);

          this.myMarker = new google.maps.Marker({
            icon: "assets/images/pickup_point_32_by_32.png",
            position: {
              lat: shoplat,
              lng: shoplong,
              title: 'KuickSave Shop'
            },
            draggable: false
          });
          this.directionsService = new google.maps.DirectionsService();
          this._directionsService = new google.maps.DirectionsService();
          this.map.setCenter(this.myMarker.position);
          this.calculateAndDisplayRoute(shoplat, shoplong, customerlat, customerlong);
          this.myMarker.setMap(this.map);
          google.maps.event.addListener(this.myMarker, "dragend", function (evt) {
            this.latitude = evt.latLng.lat().toFixed(3);
            this.longitude = evt.latLng.lng().toFixed(3);
          });
        }
      }, {
        key: "calculateAndDisplayRoute",
        value: function calculateAndDisplayRoute(shoplat, shoplong, customerlat, customerlong) {
          var _this4 = this;

          console.log("working");
          var that = this;
          new google.maps.Marker({
            icon: "assets/images/pickup_point_32_by_32.png",
            map: this.map,
            position: new google.maps.LatLng(shoplat, shoplong),
            label: this.items.shop.name
          });
          new google.maps.Marker({
            icon: "assets/images/delivery_point32_By_32.png",
            map: this.map,
            position: new google.maps.LatLng(customerlat, customerlong),
            label: "Delivery Spot"
          });
          this.storage.get("Location").then(function (value) {
            if (value) {
              _this4._directionsService.route({
                origin: value,
                destination: {
                  lat: shoplat,
                  lng: shoplong
                },
                travelMode: 'DRIVING'
              }, function (response, status) {
                if (status === 'OK') {
                  that._directionsDisplay.setDirections(response);
                } else {
                  window.alert('Directions request failed due to ' + status);
                }
              });
            }
          });
          this.directionsService.route({
            origin: {
              lat: shoplat,
              lng: shoplong
            },
            destination: {
              lat: customerlat,
              lng: customerlong
            },
            travelMode: 'DRIVING'
          }, function (response, status) {
            if (status === 'OK') {
              that.directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        }
      }, {
        key: "CompleteOrder",
        value: function CompleteOrder(id, verCode, status) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.items) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 3;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 3:
                    loading = _context2.sent;
                    _context2.next = 6;
                    return loading.present();

                  case 6:
                    _context2.next = 8;
                    return this.orderservice.OrderCompletionCode(id, verCode, status).subscribe(function (res) {
                      loading.dismiss();

                      _this5.toastService.create('Order Complete Successfully');

                      _this5.router.navigate(['/rider/orders/completed']);
                    }, function (err) {
                      loading.dismiss();
                      console.log(err);

                      _this5.toastService.create("Invalid Order Code", 'danger');
                    });

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // async acceptOrder(orderid , status){  
        //   if (this.items)
        //   {
        //     const loading = await this.loadingController.create({ message: "Loading" });
        //     await loading.present();
        //       await this.orderservice.AcceptOrder(orderid , this.userId , status)
        //       .subscribe(res => {        
        //           loading.dismiss();
        //           if (status == 1)
        //           this.router.navigate(['/rider/orders/pending']);
        //           else
        //           this.router.navigate(['/rider/orders/completed']);
        //       }, (err) => {
        //         loading.dismiss();
        //         console.log(err)
        //         this.toastService.create(err, 'danger');
        //       });
        //      }
        //   }

      }, {
        key: "CancelOrder",
        value: function CancelOrder(id, status) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this6 = this;

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
                    return loading.present();

                  case 5:
                    _context3.next = 7;
                    return this.orderservice.CancelOrder(id, 0).subscribe(function (res) {
                      loading.dismiss();

                      if (status == 0) {
                        loading.dismiss();
                        console.log(res);

                        _this6.toastService.create('Order Cancel  request succeded');

                        _this6.router.navigate(['rider/orders/new']);
                      }
                    }, function (err) {
                      loading.dismiss();
                      console.log(err);

                      _this6.toastService.create(err, 'danger');
                    });

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Cancel',
                      message: 'Do you want to Cancel this Order?',
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          _this7.CancelOrder(_this7.id, 0);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
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
      }]);

      return ItemsPage;
    }();

    ItemsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", {
      "static": true
    })], ItemsPage.prototype, "mapElement", void 0);
    ItemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myshops',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./item.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/rider/riderOrder/items/item.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./item.page.scss */
      "./src/app/rider/riderOrder/items/item.page.scss"))["default"]]
    })], ItemsPage);
    /***/
  },

  /***/
  "./src/app/rider/riderOrder/items/items.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/rider/riderOrder/items/items.module.ts ***!
    \********************************************************/

  /*! exports provided: ItemssPageModule */

  /***/
  function srcAppRiderRiderOrderItemsItemsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemssPageModule", function () {
      return ItemssPageModule;
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


    var _item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./item.page */
    "./src/app/rider/riderOrder/items/item.page.ts");

    var routes = [{
      path: '',
      component: _item_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]
    }];

    var ItemssPageModule = function ItemssPageModule() {
      _classCallCheck(this, ItemssPageModule);
    };

    ItemssPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_item_page__WEBPACK_IMPORTED_MODULE_6__["ItemsPage"]]
    })], ItemssPageModule);
    /***/
  },

  /***/
  "./src/app/services/order.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/order.service.ts ***!
    \*******************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
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

    var OrderService = /*#__PURE__*/function (_base_service__WEBPAC) {
      _inherits(OrderService, _base_service__WEBPAC);

      var _super = _createSuper(OrderService);

      // private readonly API_PRODUCT = `${environment.BASE_URL}product/`
      function OrderService(http) {
        var _this8;

        _classCallCheck(this, OrderService);

        _this8 = _super.call(this, http);
        _this8.http = http;
        _this8.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        _this8.API_ORDER = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "order/");
        _this8.API_EARNING = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "earning/");
        _this8.API_RETURNDISCOUNT = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL, "returnedproduct/");
        return _this8;
      }

      _createClass(OrderService, [{
        key: "GetCustomerOrders",
        value: function GetCustomerOrders(id) {
          var url = "".concat(this.API_ORDER, "user/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "Getreturnedproduct",
        value: function Getreturnedproduct() {
          var url = "".concat(this.API_RETURNDISCOUNT);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetReturnedProductbyId",
        value: function GetReturnedProductbyId(id) {
          var url = "".concat(this.API_RETURNDISCOUNT).concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "DeleteProduct",
        value: function DeleteProduct(id) {
          var url = "".concat(this.API_RETURNDISCOUNT).concat(id);
          return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "postreturnedProduct",
        value: function postreturnedProduct(data) {
          var url = "".concat(this.API_RETURNDISCOUNT);
          return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "EditProduct",
        value: function EditProduct(id, data) {
          var url = "".concat(this.API_RETURNDISCOUNT).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetOrderItems",
        value: function GetOrderItems(id) {
          var url = "".concat(this.API_ORDER).concat(id, "/orderitems");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "Allorders",
        value: function Allorders() {
          var url = "".concat(this.API_ORDER);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "riderDashboard",
        value: function riderDashboard(id) {
          var url = "".concat(this.API_ORDER, "rider/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetOrder",
        value: function GetOrder(id) {
          var url = "".concat(this.API_ORDER).concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetCustomerOrder",
        value: function GetCustomerOrder(id) {
          var url = "".concat(this.API_ORDER, "customer/").concat(id);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetUserShopOrders",
        value: function GetUserShopOrders(id) {
          // const url = `${this.API_ORDER}usershop/${id}`;
          var url = "".concat(this.API_ORDER);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetNewUserShopOrders",
        value: function GetNewUserShopOrders(id) {
          var url = "".concat(this.API_ORDER, "usershop/").concat(id, "/0"); ///const url = `${this.API_ORDER}`;

          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetPendingUserShopOrders",
        value: function GetPendingUserShopOrders(id) {
          var url = "".concat(this.API_ORDER, "usershop/").concat(id, "/1");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetCompleteUserShopOrders",
        value: function GetCompleteUserShopOrders(id) {
          var url = "".concat(this.API_ORDER, "usershop/").concat(id, "/2");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetCancelUserShopOrders",
        value: function GetCancelUserShopOrders(id) {
          var url = "".concat(this.API_ORDER, "usershop/").concat(id, "/3");
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetNewRiderOrders",
        value: function GetNewRiderOrders(lat, lng) {
          var url = "".concat(this.API_ORDER).concat(lat, "/").concat(lng);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetRiderOrdersByStatus",
        value: function GetRiderOrdersByStatus(id, status) {
          var url = "".concat(this.API_ORDER, "rider/").concat(id, "/").concat(status);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "PostOrder",
        value: function PostOrder(data) {
          var url = "".concat(this.API_ORDER);
          return this.http.post(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "PutOrder",
        value: function PutOrder(id, data) {
          var url = "".concat(this.API_ORDER).concat(id);
          return this.http.put(url, data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "MarksReceived",
        value: function MarksReceived(id) {
          var url = "".concat(this.API_ORDER).concat(id, "/markreceived");
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "AcceptOrder",
        value: function AcceptOrder(id, riderid, status) {
          var url = "".concat(this.API_ORDER).concat(id, "/").concat(riderid, "/").concat(status);
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "CancelOrder",
        value: function CancelOrder(id, status) {
          var url = "".concat(this.API_ORDER).concat(id, "/changestatus/").concat(status);
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "OrderCompletionCode",
        value: function OrderCompletionCode(id, ordercode, status) {
          var url = "".concat(this.API_ORDER, "complete/").concat(id, "/").concat(ordercode, "/").concat(status);
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetEarning",
        value: function GetEarning(date) {
          var url = "".concat(this.API_EARNING, "superadmin/").concat(date);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetEarningDatetoDate",
        value: function GetEarningDatetoDate(date, date1) {
          var url = "".concat(this.API_EARNING, "superadmin/").concat(date, "/").concat(date1);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "DownloadEarningDatetoDate",
        value: function DownloadEarningDatetoDate(date, date1) {
          var url = "".concat(this.API_EARNING, "downloadcsv/").concat(date, "/").concat(date1);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "GetShopEarning",
        value: function GetShopEarning(id, date) {
          var url = "".concat(this.API_EARNING, "shopowner/").concat(id, "/").concat(date);
          return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }, {
        key: "ChangePaymentStatus",
        value: function ChangePaymentStatus(id, status, panelty) {
          var url = "".concat(this.API_ORDER, "PaymentStatus/").concat(id, "/").concat(status, "/").concat(panelty);
          return this.http.put(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }]);

      return OrderService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

    OrderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OrderService);
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (this.toast) {
                      this.toast.dismiss();
                    }

                    _context5.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      color: color,
                      duration: ok ? null : duration,
                      position: 'bottom'
                    });

                  case 3:
                    this.toast = _context5.sent;
                    this.toast.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
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
//# sourceMappingURL=items-items-module-es5.js.map