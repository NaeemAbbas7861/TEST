function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp_verify-otp_verify-module"], {
  /***/
  "./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js ***!
    \***************************************************************************/

  /*! exports provided: CountdownComponent, CountdownGlobalConfig, CountdownModule, CountdownStatus, CountdownTimer */

  /***/
  function node_modulesNgxCountdown__ivy_ngcc__Fesm2015NgxCountdownJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownComponent", function () {
      return CountdownComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownGlobalConfig", function () {
      return CountdownGlobalConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownModule", function () {
      return CountdownModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownStatus", function () {
      return CountdownStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownTimer", function () {
      return CountdownTimer;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CountdownComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.i.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function CountdownComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        $implicit: a0
      };
    };

    var CountdownStatus;

    (function (CountdownStatus) {
      CountdownStatus[CountdownStatus["ing"] = 0] = "ing";
      CountdownStatus[CountdownStatus["pause"] = 1] = "pause";
      CountdownStatus[CountdownStatus["stop"] = 2] = "stop";
      CountdownStatus[CountdownStatus["done"] = 3] = "done";
    })(CountdownStatus || (CountdownStatus = {}));

    var CountdownTimer = /*#__PURE__*/function () {
      function CountdownTimer(ngZone) {
        _classCallCheck(this, CountdownTimer);

        this.ngZone = ngZone;
        this.fns = [];
        this.commands = [];
        this.ing = false;
      }

      _createClass(CountdownTimer, [{
        key: "start",
        value: function start() {
          var _this = this;

          if (this.ing === true) {
            return;
          }

          this.ing = true;
          this.nextTime = +new Date();
          this.ngZone.runOutsideAngular(function () {
            _this.process();
          });
        }
      }, {
        key: "process",
        value: function process() {
          var _this2 = this;

          while (this.commands.length) {
            this.commands.shift()();
          }

          var diff = +new Date() - this.nextTime;
          var count = 1 + Math.floor(diff / 100);
          diff = 100 - diff % 100;
          this.nextTime += 100 * count;

          for (var i = 0, len = this.fns.length; i < len; i += 2) {
            var frequency = this.fns[i + 1]; // 100/s

            if (0 === frequency) {
              this.fns[i](count); // 1000/s
            } else {
              // 先把末位至0，再每次加2
              frequency += 2 * count - 1;
              var step = Math.floor(frequency / 20);

              if (step > 0) {
                this.fns[i](step);
              } // 把末位还原成1


              this.fns[i + 1] = frequency % 20 + 1;
            }
          }

          if (!this.ing) {
            return;
          }

          setTimeout(function () {
            return _this2.process();
          }, diff);
        }
      }, {
        key: "add",
        value: function add(fn, frequency) {
          var _this3 = this;

          this.commands.push(function () {
            _this3.fns.push(fn);

            _this3.fns.push(frequency === 1000 ? 1 : 0);

            _this3.ing = true;
          });
          return this;
        }
      }, {
        key: "remove",
        value: function remove(fn) {
          var _this4 = this;

          this.commands.push(function () {
            var i = _this4.fns.indexOf(fn);

            if (i !== -1) {
              _this4.fns.splice(i, 2);
            }

            _this4.ing = _this4.fns.length > 0;
          });
          return this;
        }
      }]);

      return CountdownTimer;
    }();

    CountdownTimer.ɵfac = function CountdownTimer_Factory(t) {
      return new (t || CountdownTimer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    CountdownTimer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CountdownTimer,
      factory: CountdownTimer.ɵfac
    });

    CountdownTimer.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownTimer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })(); // tslint:disable: no-inferrable-types


    var CountdownGlobalConfig = function CountdownGlobalConfig(locale) {
      var _this5 = this;

      _classCallCheck(this, CountdownGlobalConfig);

      this.locale = locale;
      this.demand = false;
      this.leftTime = 0;
      this.format = 'HH:mm:ss';
      this.timezone = '+0000';

      this.formatDate = function (_ref) {
        var date = _ref.date,
            formatStr = _ref.formatStr,
            timezone = _ref.timezone;
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(date), formatStr, _this5.locale, timezone || _this5.timezone || '+0000');
      };
    };

    CountdownGlobalConfig.ɵfac = function CountdownGlobalConfig_Factory(t) {
      return new (t || CountdownGlobalConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
    };

    CountdownGlobalConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function CountdownGlobalConfig_Factory() {
        return new CountdownGlobalConfig(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
      },
      token: CountdownGlobalConfig,
      providedIn: "root"
    });

    CountdownGlobalConfig.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownGlobalConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }];
      }, null);
    })();

    var CountdownComponent = /*#__PURE__*/function () {
      function CountdownComponent(locale, timer, defCog, cdr, ngZone) {
        _classCallCheck(this, CountdownComponent);

        this.locale = locale;
        this.timer = timer;
        this.defCog = defCog;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.frequency = 1000;
        this._notify = {};
        this.status = CountdownStatus.ing;
        this.isDestroy = false;
        this.i = {};
        this.left = 0;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CountdownComponent, [{
        key: "config",
        get: function get() {
          return this._config;
        }
        /**
         * Start countdown, you must manually call when `demand: false`
         */
        ,
        set: function set(i) {
          if (i.notify != null && !Array.isArray(i.notify) && i.notify > 0) {
            i.notify = [i.notify];
          }

          this._config = i;
        }
      }, {
        key: "begin",
        value: function begin() {
          this.status = CountdownStatus.ing;
          this.callEvent('start');
        }
        /**
         * Restart countdown
         */

      }, {
        key: "restart",
        value: function restart() {
          if (this.status !== CountdownStatus.stop) {
            this.destroy();
          }

          this.init();
          this.callEvent('restart');
        }
        /**
         * Stop countdown, must call `restart` when stopped, it's different from pause, unable to recover
         */

      }, {
        key: "stop",
        value: function stop() {
          if (this.status === CountdownStatus.stop) {
            return;
          }

          this.status = CountdownStatus.stop;
          this.destroy();
          this.callEvent('stop');
        }
        /**
         * Pause countdown, you can use `resume` to recover again
         */

      }, {
        key: "pause",
        value: function pause() {
          if (this.status === CountdownStatus.stop || this.status === CountdownStatus.pause) {
            return;
          }

          this.status = CountdownStatus.pause;
          this.callEvent('pause');
        }
        /**
         * Resume countdown
         */

      }, {
        key: "resume",
        value: function resume() {
          if (this.status === CountdownStatus.stop || this.status !== CountdownStatus.pause) {
            return;
          }

          this.status = CountdownStatus.ing;
          this.callEvent('resume');
        }
      }, {
        key: "callEvent",
        value: function callEvent(action) {
          this.event.emit({
            action: action,
            left: this.left,
            status: this.status,
            text: this.i.text
          });
        }
      }, {
        key: "init",
        value: function init() {
          var _this6 = this;

          var locale = this.locale,
              defCog = this.defCog;
          var config = this.config = Object.assign(Object.assign(Object.assign({}, new CountdownGlobalConfig(locale)), defCog), this.config); // tslint:disable-next-line: no-bitwise

          var frq = this.frequency = ~config.format.indexOf('S') ? 100 : 1000;
          this.status = config.demand ? CountdownStatus.pause : CountdownStatus.ing;
          this.getLeft(); // bind reflow to me

          var _reflow = this.reflow;

          this.reflow = function () {
            var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return _reflow.apply(_this6, [count, force]);
          };

          if (Array.isArray(config.notify)) {
            config.notify.forEach(function (time) {
              if (time < 1) {
                throw new Error("The notify config must be a positive integer.");
              }

              time = time * 1000;
              time = time - time % frq;
              _this6._notify[time] = true;
            });
          }

          this.timer.add(this.reflow, frq).start();
          this.reflow(0, true);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.timer.remove(this.reflow);
          return this;
        }
        /**
         * 更新时钟
         */

      }, {
        key: "reflow",
        value: function reflow() {
          var _this7 = this;

          var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (this.isDestroy) {
            return;
          }

          var status = this.status,
              config = this.config,
              _notify = this._notify;

          if (!force && status !== CountdownStatus.ing) {
            return;
          }

          var value = this.left = this.left - this.frequency * count;

          if (value < 1) {
            value = 0;
          }

          this.i = {
            value: value,
            text: config.formatDate({
              date: value,
              formatStr: config.format,
              timezone: config.timezone
            })
          };

          if (typeof config.prettyText === 'function') {
            this.i.text = config.prettyText(this.i.text);
          }

          this.cdr.detectChanges();

          if (config.notify === 0 || _notify[value]) {
            this.ngZone.run(function () {
              _this7.callEvent('notify');
            });
          }

          if (value === 0) {
            this.ngZone.run(function () {
              _this7.status = CountdownStatus.done;

              _this7.destroy();

              _this7.callEvent('done');
            });
          }
        }
        /**
         * 获取倒计时剩余帧数
         */

      }, {
        key: "getLeft",
        value: function getLeft() {
          var config = this.config,
              frequency = this.frequency;
          var left = config.leftTime * 1000;
          var end = config.stopTime;

          if (!left && end) {
            left = end - new Date().getTime();
          }

          this.left = left - left % frequency;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.init();

          if (!this.config.demand) {
            this.begin();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.isDestroy = true;
          this.destroy();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!changes.config.firstChange) {
            this.restart();
          }
        }
      }]);

      return CountdownComponent;
    }();

    CountdownComponent.ɵfac = function CountdownComponent_Factory(t) {
      return new (t || CountdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownTimer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownGlobalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    CountdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountdownComponent,
      selectors: [["countdown"]],
      hostVars: 2,
      hostBindings: function CountdownComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("count-down", true);
        }
      },
      inputs: {
        config: "config",
        render: "render"
      },
      outputs: {
        event: "event"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 5,
      consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
      template: function CountdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountdownComponent_ng_container_0_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountdownComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.render);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.render)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.i));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
      encapsulation: 2,
      changeDetection: 0
    });

    CountdownComponent.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
        }]
      }, {
        type: CountdownTimer
      }, {
        type: CountdownGlobalConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    CountdownComponent.propDecorators = {
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      render: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'countdown',
          template: "\n    <ng-container *ngIf=\"!render\">\n      <span [innerHTML]=\"i.text\"></span>\n    </ng-container>\n    <ng-container *ngTemplateOutlet=\"render; context: { $implicit: i }\"></ng-container>\n  ",
          host: {
            '[class.count-down]': 'true'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }, {
          type: CountdownTimer
        }, {
          type: CountdownGlobalConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        render: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var CountdownModule = function CountdownModule() {
      _classCallCheck(this, CountdownModule);
    };

    CountdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CountdownModule
    });
    CountdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CountdownModule_Factory(t) {
        return new (t || CountdownModule)();
      },
      providers: [CountdownTimer],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CountdownModule, {
        declarations: function declarations() {
          return [CountdownComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [CountdownComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          providers: [CountdownTimer],
          declarations: [CountdownComponent],
          exports: [CountdownComponent]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-countdown.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/otp_verify/otp_verify.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otp_verify/otp_verify.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOtp_verifyOtp_verifyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n\r\n <ion-header padding style=\"background: black;\" class=\"mybg head\">\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"dark\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-row class=\"ion-justify-content-center\" style=\"background: black; height: 180px;\">\r\n    <ion-img src=\"assets/images/logo.png\" class=\"head-image\"></ion-img>\r\n  </ion-row>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-text><h3  class=\"title ion-no-margin ion-margin-bottom ion-text-center\">Verify your Account</h3></ion-text>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label><ion-text class=\"small\">Enter 4 digit Verification Code</ion-text></ion-label>\r\n        <!-- <ion-input  type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" class=\"input ion-clearInput ion-padding-horizontal\" ></ion-input> -->\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col>\r\n       <ion-input #otp1 required maxLength=\"1\" [(ngModel)]=\"otp5\" (keyup)=\"otpController($event,otp2,'')\">\r\n       </ion-input>\r\n       <ion-input #otp2 required maxLength=\"1\" [(ngModel)]=\"otp6\" (keyup)=\"otpController($event,otp3,otp1)\">\r\n       </ion-input>\r\n       <ion-input #otp3 required maxLength=\"1\" [(ngModel)]=\"otp7\" (keyup)=\"otpController($event,otp4,otp2)\">\r\n       </ion-input>\r\n       <ion-input #otp4  required maxLength=\"1\" [(ngModel)]=\"otp8\" (keyup)=\"otpController($event,'',otp3)\">\r\n       </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <countdown class=\"settimer\"  #cd1 [config]=\"{leftTime: 60}\" color=\"mycolor1\" ></countdown>\r\n\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" disabled=\"{{buttonDisabled}}\" (click)=\"cd1.restart()\" (click)=\"resendMessage()\"  color=\"mycolor1\"><strong class=\"white\"  [disabled]=\"click\" >Resend</strong></ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" color=\"mycolor1\" (click)=\"verify()\"><strong class=\"white\">Confirm</strong></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/otp_verify/otp_verify.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/otp_verify/otp_verify.module.ts ***!
    \*************************************************/

  /*! exports provided: OtpverifyPageModule */

  /***/
  function srcAppOtp_verifyOtp_verifyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpverifyPageModule", function () {
      return OtpverifyPageModule;
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


    var ngx_countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-countdown */
    "./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _otp_verifypage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./otp_verifypage */
    "./src/app/otp_verify/otp_verifypage.ts");
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
      component: _otp_verifypage__WEBPACK_IMPORTED_MODULE_7__["OtpverifyPage"]
    }];

    var OtpverifyPageModule = function OtpverifyPageModule() {
      _classCallCheck(this, OtpverifyPageModule);
    };

    OtpverifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_5__["CountdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_otp_verifypage__WEBPACK_IMPORTED_MODULE_7__["OtpverifyPage"]]
    })], OtpverifyPageModule);
    /***/
  },

  /***/
  "./src/app/otp_verify/otp_verify.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/otp_verify/otp_verify.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOtp_verifyOtp_verifyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".head {\n  min-height: 21vh !important;\n}\n\n.head-image {\n  background-size: contain;\n  width: 180px;\n  align-self: center;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.white {\n  color: white;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.title {\n  font-size: 18px;\n}\n\nion-input {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  margin: 10px;\n  border-radius: 50%;\n  --background:#e1e1e1;\n  --padding-start:7px;\n}\n\n.settimer {\n  padding-left: 30px;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RwX3ZlcmlmeS9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXG90cF92ZXJpZnlcXG90cF92ZXJpZnkucGFnZS5zY3NzIiwic3JjL2FwcC9vdHBfdmVyaWZ5L290cF92ZXJpZnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSjs7QURDQTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0FDSUo7O0FERkE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtBQ01KOztBREpBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNPSjs7QURMSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNRUiIsImZpbGUiOiJzcmMvYXBwL290cF92ZXJpZnkvb3RwX3ZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMXZoICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWQtaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLndoaXRlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMCwgMjEwLCAyMTApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjUwcHg7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNlMWUxZTE7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6N3B4O1xyXG4gICAgfVxyXG4gICAgLnNldHRpbWVye1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgfSIsIi5oZWFkIHtcbiAgbWluLWhlaWdodDogMjF2aCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZC1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDE4MHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pb24taW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWJhY2tncm91bmQ6I2UxZTFlMTtcbiAgLS1wYWRkaW5nLXN0YXJ0OjdweDtcbn1cblxuLnNldHRpbWVyIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/otp_verify/otp_verifypage.ts":
  /*!**********************************************!*\
    !*** ./src/app/otp_verify/otp_verifypage.ts ***!
    \**********************************************/

  /*! exports provided: OtpverifyPage */

  /***/
  function srcAppOtp_verifyOtp_verifypageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpverifyPage", function () {
      return OtpverifyPage;
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


    var _functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../functions.service */
    "./src/app/functions.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/shared.service */
    "./src/app/services/shared.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_9__);
    /**
     * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
     *
     * Copyright © 2018-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source .
     *
     */


    var OtpverifyPage = /*#__PURE__*/function () {
      function OtpverifyPage(fun, menuCtrl, loginservice, storage, router, toasterservice, loadingController, route, sharedservice) {
        _classCallCheck(this, OtpverifyPage);

        this.fun = fun;
        this.menuCtrl = menuCtrl;
        this.loginservice = loginservice;
        this.storage = storage;
        this.router = router;
        this.toasterservice = toasterservice;
        this.loadingController = loadingController;
        this.route = route;
        this.sharedservice = sharedservice;
        this.email = "";
        this.settimer = false;
      }

      _createClass(OtpverifyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          setTimeout(function () {
            _this8.buttonDisabled = false;
          }, 60000);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this9 = this;

          this.menuCtrl.enable(false, 'start');
          this.menuCtrl.enable(false, 'end');
          this.storage.get("userid").then(function (value) {
            _this9.id = value;
            console.log(value);
          });
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
            var _this10 = this;

            var code, code1, id, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    code = this.otp5 + this.otp6 + this.otp7 + this.otp8; // var code1: number = +code;

                    code1 = parseInt(code);
                    id = this.route.snapshot.paramMap.get('id');
                    _context.next = 5;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 5:
                    loading = _context.sent;
                    _context.next = 8;
                    return loading.present();

                  case 8:
                    _context.next = 10;
                    return this.loginservice.Verify(id, code1).subscribe(function (res) {
                      if (res) {
                        var user = _this10.getDecodedAccessToken(res.token);

                        _this10.storage.set("User", user);

                        _this10.sharedservice.UpdateUser(user);

                        _this10.sharedservice.updatelogin(true);

                        _this10.storage.set("IsLoggedIn", true);

                        _this10.storage.get("username").then(function (value) {
                          _this10.toasterservice.create("Welcome " + value.FirstName + " " + value.LastName, 'success');

                          console.log(value);

                          _this10.router.navigate(['/home']);

                          _this10.storage.remove('userid');

                          _this10.storage.remove('username');
                        });

                        loading.dismiss();
                      } else {
                        loading.dismiss();

                        _this10.toasterservice.create("Invalid Verification  Code", 'danger');
                      }
                    }, function (err) {
                      loading.dismiss();

                      _this10.toasterservice.create("Invalid Verification Code", 'danger');
                    });

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "resendMessage",
        value: function resendMessage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this11 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.buttonDisabled = !this.buttonDisabled;
                    _context2.next = 3;
                    return this.loadingController.create({
                      message: "Loading"
                    });

                  case 3:
                    loading = _context2.sent;
                    loading.present();
                    _context2.next = 7;
                    return this.loginservice.resendCode(this.id).subscribe(function (res) {
                      _this11.toasterservice.create("Message resend Successfully", 'success');

                      loading.dismiss();
                      setTimeout(function () {
                        _this11.buttonDisabled = false;
                      }, 60000);
                    });

                  case 7:
                    (function (err) {
                      loading.dismiss();
                    });

                  case 8:
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
            return jwt_decode__WEBPACK_IMPORTED_MODULE_9__(token);
          } catch (Error) {
            return null;
          }
        }
      }]);

      return OtpverifyPage;
    }();

    OtpverifyPage.ctorParameters = function () {
      return [{
        type: _functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }, {
        type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }];
    };

    OtpverifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-passwordreset',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./otp_verify.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/otp_verify/otp_verify.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./otp_verify.page.scss */
      "./src/app/otp_verify/otp_verify.page.scss"))["default"]]
    })], OtpverifyPage);
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
//# sourceMappingURL=otp_verify-otp_verify-module-es5.js.map