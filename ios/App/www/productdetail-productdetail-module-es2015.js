(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productdetail-productdetail-module"],{

/***/ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js ***!
  \*****************************************************************************/
/*! exports provided: SocialSharing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSharing", function() { return SocialSharing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var SocialSharing = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SocialSharing, _super);
    function SocialSharing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocialSharing.prototype.share = function (message, subject, file, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "share", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SocialSharing.prototype.shareWithOptions = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareWithOptions", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareVia = function (appName, message, subject, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "canShareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaTwitter = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaTwitter", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebook = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaFacebook", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaFacebookWithPasteMessageHint", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaInstagram = function (message, image) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaInstagram", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsApp = function (message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaWhatsApp", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaWhatsAppToReceiver", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaSMS = function (messge, phoneNumber) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaSMS", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareViaEmail = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "canShareViaEmail", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareViaEmail", { "platforms": ["iOS", "Android"], "successIndex": 6, "errorIndex": 7 }, arguments); };
    SocialSharing.prototype.shareVia = function (appName, message, subject, image, url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "shareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.setIPadPopupCoordinates = function (targetBounds) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setIPadPopupCoordinates", { "sync": true, "platforms": ["iOS"] }, arguments); };
    SocialSharing.prototype.saveToPhotoAlbum = function (fileOrFileArray) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "saveToPhotoAlbum", { "platforms": ["iOS"] }, arguments); };
    SocialSharing.pluginName = "SocialSharing";
    SocialSharing.plugin = "cordova-plugin-x-socialsharing";
    SocialSharing.pluginRef = "plugins.socialsharing";
    SocialSharing.repo = "https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin";
    SocialSharing.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone"];
SocialSharing.ɵfac = function SocialSharing_Factory(t) { return ɵSocialSharing_BaseFactory(t || SocialSharing); };
SocialSharing.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SocialSharing, factory: function (t) { return SocialSharing.ɵfac(t); } });
var ɵSocialSharing_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SocialSharing);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SocialSharing, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return SocialSharing;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvc29jaWFsLXNoYXJpbmcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBSVUsSUFtQ3lCLGlDQUFpQjtBQUFDO0FBRTlCO0FBQ3VDO0FBQzVELElBU0EsNkJBQUssYUFBQyxPQUFnQixFQUFFLE9BQWdCLEVBQUUsSUFBd0IsRUFBRSxHQUFZO0FBS2xDLElBTzlDLHdDQUFnQixhQUFDLE9BTWhCO0FBTUksSUFZTCxtQ0FBVyxhQUFDLE9BQWUsRUFBRSxPQUFnQixFQUFFLE9BQWdCLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFPckUsSUFTeEIsdUNBQWUsYUFBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFRN0QsSUFRQSx3Q0FBZ0IsYUFBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFPNUQsSUFVRiw0REFBb0MsYUFDbEMsT0FBZSxFQUNmLEtBQWMsRUFDZCxHQUFZLEVBQ1osZ0JBQXlCO0FBU1YsSUFLakIseUNBQWlCLGFBQUMsT0FBZSxFQUFFLEtBQWE7QUFNMUIsSUFVdEIsd0NBQWdCLGFBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxHQUFZO0FBTWYsSUFXL0Msa0RBQTBCLGFBQUMsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFPckQsSUFNckMsbUNBQVcsYUFBQyxNQUFjLEVBQUUsV0FBbUI7QUFNckMsSUFLVix3Q0FBZ0I7QUFPQSxJQVloQixxQ0FBYSxhQUNYLE9BQWUsRUFDZixPQUFlLEVBQ2YsRUFBWSxFQUNaLEVBQWEsRUFDYixHQUFjLEVBQ2QsS0FBeUI7QUFPa0MsSUFZN0QsZ0NBQVEsYUFBQyxPQUFlLEVBQUUsT0FBZSxFQUFFLE9BQWdCLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFNckUsSUFNcEIsK0NBQXVCLGFBQUMsWUFBb0I7QUFJTCxJQU12Qyx3Q0FBZ0IsYUFBQyxlQUFrQztBQUlIO0FBQWdEO0FBQTZEO0FBQXVEO0FBQTRGO0lBblByUyxhQUFhLHdCQUR6QixVQUFVLEVBQUUsUUFDQSxhQUFhOzs7OzswQkFBRTtBQUFDLHdCQXpDN0I7QUFBRSxFQXlDaUMsaUJBQWlCO0FBQ25ELFNBRFksYUFBYTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU29jaWFsIFNoYXJpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogU2hhcmUgdGV4dCwgZmlsZXMsIGltYWdlcywgYW5kIGxpbmtzIHZpYSBzb2NpYWwgbmV0d29ya3MsIHNtcywgYW5kIGVtYWlsLlxuICpcbiAqIEZvciBCcm93c2VyIHVzYWdlIGNoZWNrIG91dCB0aGUgV2ViIFNoYXJlIEFQSSBkb2NzOiBodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vU29jaWFsU2hhcmluZy1QaG9uZUdhcC1QbHVnaW4jNS13ZWItc2hhcmUtYXBpXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTb2NpYWxTaGFyaW5nIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zb2NpYWwtc2hhcmluZy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc29jaWFsU2hhcmluZzogU29jaWFsU2hhcmluZykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gQ2hlY2sgaWYgc2hhcmluZyB2aWEgZW1haWwgaXMgc3VwcG9ydGVkXG4gKiB0aGlzLnNvY2lhbFNoYXJpbmcuY2FuU2hhcmVWaWFFbWFpbCgpLnRoZW4oKCkgPT4ge1xuICogICAvLyBTaGFyaW5nIHZpYSBlbWFpbCBpcyBwb3NzaWJsZVxuICogfSkuY2F0Y2goKCkgPT4ge1xuICogICAvLyBTaGFyaW5nIHZpYSBlbWFpbCBpcyBub3QgcG9zc2libGVcbiAqIH0pO1xuICpcbiAqIC8vIFNoYXJlIHZpYSBlbWFpbFxuICogdGhpcy5zb2NpYWxTaGFyaW5nLnNoYXJlVmlhRW1haWwoJ0JvZHknLCAnU3ViamVjdCcsIFsncmVjaXBpZW50QGV4YW1wbGUub3JnJ10pLnRoZW4oKCkgPT4ge1xuICogICAvLyBTdWNjZXNzIVxuICogfSkuY2F0Y2goKCkgPT4ge1xuICogICAvLyBFcnJvciFcbiAqIH0pO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU29jaWFsU2hhcmluZycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXgtc29jaWFsc2hhcmluZycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuc29jaWFsc2hhcmluZycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vU29jaWFsU2hhcmluZy1QaG9uZUdhcC1QbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29jaWFsU2hhcmluZyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNoYXJlcyB1c2luZyB0aGUgc2hhcmUgc2hlZXRcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gVGhlIG1lc3NhZ2UgeW91IHdvdWxkIGxpa2UgdG8gc2hhcmUuXG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9IFRoZSBzdWJqZWN0XG4gICAqIEBwYXJhbSBmaWxlIHtzdHJpbmd8c3RyaW5nW119IFVSTChzKSB0byBmaWxlKHMpIG9yIGltYWdlKHMpLCBsb2NhbCBwYXRoKHMpIHRvIGZpbGUocykgb3IgaW1hZ2UocyksIG9yIGJhc2U2NCBkYXRhIG9mIGFuIGltYWdlLiBPbmx5IHRoZSBmaXJzdCBmaWxlL2ltYWdlIHdpbGwgYmUgdXNlZCBvbiBXaW5kb3dzIFBob25lLlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IEEgVVJMIHRvIHNoYXJlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA0LFxuICAgIGVycm9ySW5kZXg6IDUsXG4gIH0pXG4gIHNoYXJlKG1lc3NhZ2U/OiBzdHJpbmcsIHN1YmplY3Q/OiBzdHJpbmcsIGZpbGU/OiBzdHJpbmcgfCBzdHJpbmdbXSwgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIHVzaW5nIHRoZSBzaGFyZSBzaGVldCB3aXRoIGFkZGl0aW9uYWwgb3B0aW9ucyBhbmQgcmV0dXJucyBhIHJlc3VsdCBvYmplY3Qgb3IgYW4gZXJyb3IgbWVzc2FnZSAocmVxdWlyZXMgcGx1Z2luIHZlcnNpb24gNS4xLjArKVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7b2JqZWN0fSBUaGUgb3B0aW9ucyBvYmplY3Qgd2l0aCB0aGUgbWVzc2FnZSwgc3ViamVjdCwgZmlsZXMsIHVybCBhbmQgY2hvb3NlclRpdGxlIHByb3BlcnRpZXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlV2l0aE9wdGlvbnMob3B0aW9uczoge1xuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgc3ViamVjdD86IHN0cmluZztcbiAgICBmaWxlcz86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIHVybD86IHN0cmluZztcbiAgICBjaG9vc2VyVGl0bGU/OiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgeW91IGNhbiBzaGFyZSB2aWEgYSBzcGVjaWZpYyBhcHAuXG4gICAqIEBwYXJhbSBhcHBOYW1lIHtzdHJpbmd9IEFwcCBuYW1lIG9yIHBhY2thZ2UgbmFtZS4gRXhhbXBsZXM6IGluc3RhZ3JhbSBvciBjb20uYXBwbGUuc29jaWFsLmZhY2Vib29rXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIGNhblNoYXJlVmlhKGFwcE5hbWU6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZywgc3ViamVjdD86IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBUd2l0dGVyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhVHdpdHRlcihtZXNzYWdlOiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gRmFjZWJvb2tcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDMsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFGYWNlYm9vayhtZXNzYWdlOiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgZGlyZWN0bHkgdG8gRmFjZWJvb2sgd2l0aCBhIHBhc3RlIG1lc3NhZ2UgaGludFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gcGFzdGVNZXNzYWdlSGludCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNCxcbiAgICBlcnJvckluZGV4OiA1LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYUZhY2Vib29rV2l0aFBhc3RlTWVzc2FnZUhpbnQoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIHVybD86IHN0cmluZyxcbiAgICBwYXN0ZU1lc3NhZ2VIaW50Pzogc3RyaW5nXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBJbnN0YWdyYW1cbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhSW5zdGFncmFtKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBXaGF0c0FwcFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYVdoYXRzQXBwKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBhIFdoYXRzQXBwIENvbnRhY3RcbiAgICogQHBhcmFtIHJlY2VpdmVyIHtzdHJpbmd9IFBhc3MgcGhvbmUgbnVtYmVyIG9uIEFuZHJvaWQsIGFuZCBBZGRyZXNzYm9vayBJRCAoYWJpZCkgb24gaU9TXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IE1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ30gSW1hZ2UgdG8gc2VuZCAoZG9lcyBub3Qgd29yayBvbiBpT1NcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBMaW5rIHRvIHNlbmRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDQsXG4gICAgZXJyb3JJbmRleDogNSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFXaGF0c0FwcFRvUmVjZWl2ZXIocmVjZWl2ZXI6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgdmlhIFNNU1xuICAgKiBAcGFyYW0gbWVzc2dlIHtzdHJpbmd9IG1lc3NhZ2UgdG8gc2VuZFxuICAgKiBAcGFyYW0gcGhvbmVOdW1iZXIge3N0cmluZ30gTnVtYmVyIG9yIG11bHRpcGxlIG51bWJlcnMgc2VwZXJhdGVkIGJ5IGNvbW1hc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYVNNUyhtZXNzZ2U6IHN0cmluZywgcGhvbmVOdW1iZXI6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB5b3UgY2FuIHNoYXJlIHZpYSBlbWFpbFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBjYW5TaGFyZVZpYUVtYWlsKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIHZpYSBFbWFpbFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gc3ViamVjdCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdG8ge3N0cmluZ1tdfVxuICAgKiBAcGFyYW0gY2Mge3N0cmluZ1tdfSBPcHRpb25hbFxuICAgKiBAcGFyYW0gYmNjIHtzdHJpbmdbXX0gT3B0aW9uYWxcbiAgICogQHBhcmFtIGZpbGVzIHtzdHJpbmd8c3RyaW5nW119IE9wdGlvbmFsIFVSTCBvciBsb2NhbCBwYXRoIHRvIGZpbGUocykgdG8gYXR0YWNoXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gICAgc3VjY2Vzc0luZGV4OiA2LFxuICAgIGVycm9ySW5kZXg6IDcsXG4gIH0pXG4gIHNoYXJlVmlhRW1haWwoXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHN1YmplY3Q6IHN0cmluZyxcbiAgICB0bzogc3RyaW5nW10sXG4gICAgY2M/OiBzdHJpbmdbXSxcbiAgICBiY2M/OiBzdHJpbmdbXSxcbiAgICBmaWxlcz86IHN0cmluZyB8IHN0cmluZ1tdXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlIHZpYSBBcHBOYW1lXG4gICAqIEBwYXJhbSBhcHBOYW1lIHtzdHJpbmd9IEFwcCBuYW1lIG9yIHBhY2thZ2UgbmFtZS4gRXhhbXBsZXM6IGluc3RhZ3JhbSBvciBjb20uYXBwbGUuc29jaWFsLmZhY2Vib29rXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhKGFwcE5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBzdWJqZWN0Pzogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogZGVmaW5lcyB0aGUgcG9wdXAgcG9zaXRpb24gYmVmb3JlIGNhbGwgdGhlIHNoYXJlIG1ldGhvZC5cbiAgICogQHBhcmFtIHRhcmdldEJvdW5kcyB7c3RyaW5nfSBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgc2V0SVBhZFBvcHVwQ29vcmRpbmF0ZXModGFyZ2V0Qm91bmRzOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNhdmUgYW4gYXJyYXkgb2YgaW1hZ2VzIHRvIHRoZSBjYW1lcmEgcm9sbFxuICAgKiBAcGFyYW0gIHtzdHJpbmd8c3RyaW5nW119IGZpbGVPckZpbGVBcnJheSBTaW5nbGUgb3IgbXVsdGlwbGUgZmlsZXNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55PiB9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBzYXZlVG9QaG90b0FsYnVtKGZpbGVPckZpbGVBcnJheTogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/innerhome/innerhome.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/innerhome/innerhome.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- /**\r\n * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<ion-row>\r\n  <ion-col *ngFor=\"let data of recieved_data;\" size=\"6\">\r\n    <ion-card class=\"card ion-no-margin\"  (click)=\"open(data)\">\r\n      <ion-badge class=\"badge\" *ngIf=\"data.offer\">{{data.discount}}%</ion-badge>\r\n      <img [src]=\"data.image[0]\" [alt]=\"data.name\">\r\n      <ion-card-content>\r\n        <ion-card-title>\r\n          <ion-row>\r\n            <ion-col *ngIf=\"data.offer\" class=\"ion-no-padding\">\r\n              <ion-text class=\"ion-text-left\"><span class=\"price\"><span class=\"inline\">{{data.currency}}{{data.cost_price}}</span> <strong>{{data.currency}}{{fun.calculate(data.cost_price, data.discount)}}</strong></span></ion-text>\r\n            </ion-col>\r\n            <ion-col *ngIf=\"!data.offer\" class=\"ion-no-padding\">\r\n              <ion-text class=\"ion-text-left\"><span class=\"price\"><strong>{{data.currency}}{{data.cost_price}}</strong></span></ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"ion-text-left ion-no-padding\">\r\n              <h6  class=\"subtitle ion-text-left\">{{data.bought}}+ bought this</h6>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-title>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-col>\r\n</ion-row>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div>\r\n  <ion-row padding-0>\r\n    <ion-col padding-0 class=\"padding-0\">\r\n\r\n      <ion-slides *ngIf=\"product.images[0]   \" pager=\"true\" [options]=\"slideOpts\">\r\n        <ion-slide *ngFor=\"let i of product.images;\">\r\n          <img class=\"image\" src=\"{{env.RESOURCE_URL}}{{i.path}}\">\r\n          <div class=\"product-image-overlay\"></div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      <ion-slides *ngIf=\"!product.images[0] && product.images[0] != null\" pager=\"true\" [options]=\"slideOpts\">\r\n        <ion-slide>\r\n          <img class=\"image\" src=\"../../assets/images/noimage.jpg\">\r\n          <div class=\"product-image-overlay\"></div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      <ion-badge class=\"badge\">\r\n        <!-- <ion-icon name=\"images\"></ion-icon>{{product.image.length}} -->\r\n      </ion-badge>\r\n      <ion-row  class=\"hover-buttons ion-justify-content-end\">\r\n        <!-- <ion-icon size=\"small\" name=\"logo-instagram\" class=\"fab ion-float-right\" (click)=\"shareViaInstagram(product.image[0])\"></ion-icon> -->\r\n        <!-- <ion-icon size=\"small\"  name=\"share\" class=\"fab ion-float-right\" (click)=\"shareCommon(product.images[0].path)\"></ion-icon>\r\n        < ion-icon *ngIf=\"!liked\" size=\"small\"  name=\"heart-empty\" class=\"fab ion-float-right\" (click)=\"like()\"></ion-icon>\r\n       <ion-icon *ngIf=\"liked\" size=\"small\"  name=\"heart\" class=\"fab red ion-float-right\" (click)=\"like()\"></ion-icon> -->\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  <div class=\"ion-padding\">\r\n\r\n    <ion-row lines=\"none\" class=\"row\">\r\n      <ion-text class=\"name\">{{product.title}}</ion-text>\r\n    </ion-row>\r\n    <ion-row>\r\n    </ion-row>\r\n    \r\n   \r\n    <!-- <div class=\"sep\"></div> -->\r\n    <!-- <ion-row class=\"full info\">\r\n      <ion-row>\r\n        <ion-col><strong>Sizing</strong></ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h6 no-margin>Too Small</h6>\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <div class=\"progress-outer\">\r\n            <div class=\"progress-inner\" [ngStyle]=\"{'width': product.sizing.small+'%'}\"></div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h6 no-margin>Just Right</h6>\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <div class=\"progress-outer\">\r\n            <div class=\"progress-inner\" [ngStyle]=\"{'width': product.sizing.okay+'%'}\"></div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h6 no-margin>Too Large</h6>\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <div class=\"progress-outer\">\r\n            <div class=\"progress-inner\" [ngStyle]=\"{'width': product.sizing.large+'%'}\"></div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-row> -->\r\n    <!-- <div class=\"sep\"></div> -->\r\n    <!-- <div>\r\n      <ion-text><span classs=\"ion-float-left no-margin\"><strong>Sold By</strong></span></ion-text><br> -->\r\n      <!-- <ion-row>\r\n        <ion-col size=\"2\">\r\n          <ion-avatar class=\"avatar\"><img [src]=\"product.image[0]\"></ion-avatar>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-text><span class=\"ion-float-left ion-no-margin\">{{product.sold_by}}</span></ion-text><br> -->\r\n          <!-- <ion-text>\r\n            <h6 class=\"ion-float-left ion-no-margin\">{{product.store_rating}} ratings</h6>\r\n          </ion-text><br> -->\r\n        <!-- </ion-col>\r\n      </ion-row> -->\r\n    <!-- </div> -->\r\n    <div class=\"sep\"></div>\r\n    <ion-list lines=\"none\">\r\n      <ion-row class=\"full info\" (click)=\"toogle(0)\">\r\n        <ion-col size=\"9\">\r\n          <strong class=\"ion-float-left\">Description</strong>\r\n        </ion-col>\r\n        <ion-col>\r\n          <!-- <ion-icon class=\"ion-float-right\" name=\"arrow-dropdown\" *ngIf=\"!open[0]\"></ion-icon>\r\n          <ion-icon class=\"ion-float-right\" name=\"arrow-dropup\" *ngIf=\"open[0]\"></ion-icon> -->\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"full\" class=\"ion-margin-top\" >\r\n        <ion-col>\r\n          <span class=\"ion-float-left\">{{product.description}}</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <!-- <div class=\"sep\"></div> -->\r\n      <!-- <ion-row class=\"full info\" (click)=\"toogle(1)\">\r\n        <ion-col size=\"9\">\r\n          <strong class=\"ion-float-left\">Detail</strong>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon class=\"ion-float-right\" name=\"arrow-dropdown\" *ngIf=\"!open[1]\"></ion-icon>\r\n          <ion-icon class=\"ion-float-right\" name=\"arrow-dropup\" *ngIf=\"open[1]\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"full ion-margin-top\"  *ngIf=\"open[1]\">\r\n        <ion-col>\r\n          <span class=\"ion-float-left\">{{product.productDetail}}</span>\r\n        </ion-col>\r\n      </ion-row> -->\r\n      <!-- <div class=\"sep\"></div> -->\r\n      <!-- <ion-row class=\"full info\" (click)=\"toogle(2)\">\r\n        <ion-col size=\"9\">\r\n          <strong class=\"ion-float-left\">Buyer Guarantee</strong>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon class=\"ion-float-right\" name=\"arrow-dropdown\" *ngIf=\"!open[2]\"></ion-icon>\r\n          <ion-icon class=\"ion-float-right\" name=\"arrow-dropup\" *ngIf=\"open[2]\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-margin-top\" *ngIf=\"open[2]\">\r\n        <ion-col>\r\n          <span class=\"ion-float-left\">{{product.buyer_guarantee}}</span>\r\n        </ion-col>\r\n      </ion-row> -->\r\n      <!-- <div class=\"sep\"></div> -->\r\n      <!-- <ion-row class=\"full info\" (click)=\"toogle(3)\">\r\n        <ion-col size=\"9\">\r\n          <strong class=\"ion-float-left\">Shipping Information</strong>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon class=\"ion-float-right\" name=\"arrow-dropdown\" *ngIf=\"!open[3]\"></ion-icon>\r\n          <ion-icon class=\"ion-float-right\" name=\"arrow-dropup\" *ngIf=\"open[3]\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"full ion-margin-top\"  *ngIf=\"open[3]\">\r\n        <ion-col>\r\n          <span class=\"ion-float-left\"><strong>Standard Shipping</strong> {{product.currency}}{{product.shipping}}</span>\r\n        </ion-col>\r\n      </ion-row> -->\r\n      <!-- <div class=\"sep\"></div> -->\r\n      <!-- <div (touchstart)=\"remove()\" (touchend)=\"gainback()\" *ngFor=\"let spon of product.sponsored\">\r\n        <ion-text>\r\n          <h5 class=\"ion-no-margin\" ><strong>Sponsored</strong></h5>\r\n        </ion-text>\r\n        <ion-row>\r\n          <ion-row class=\"container-outer\">\r\n            <div  (click)=\"open_item(data)\" class=\"container-inner\">\r\n              <img [src]=\"spon.image[0]\" class=\"spon-img\">\r\n              <ion-row>\r\n                <ion-col *ngIf=\"spon.offer\" class=\"ion-no-padding\">\r\n                  <ion-text>\r\n                    <h4 class=\"price\"><span class=\"inline\">{{spon.currency}}{{spon.cost_price}}</span> <strong>{{spon.currency}}{{fun.calculate(spon.cost_price,\r\n                        spon.discount)}}</strong></h4>\r\n                  </ion-text>\r\n                </ion-col>\r\n                <ion-col *ngIf=\"!spon.offer\" class=\"ion-no-padding\">\r\n                  <ion-text>\r\n                    <h4 class=\"price\"><strong>{{spon.currency}}{{spon.cost_price}}</strong></h4>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </ion-row>\r\n        </ion-row>\r\n      </div> -->\r\n\r\n      <div class=\"sep\"></div>\r\n    </ion-list>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productdetail/productdetail.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productdetail/productdetail.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header class=\"mybg\">\r\n  <ion-toolbar color=\"mytheme\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button   style=\"color: black\" defaultHref=\"/\" slot=\"end\"> </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"color: black;\">Details</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button [disabled]=\"viewType === 'true'\" (click)=\"fun.navigate('cart')\">\r\n        <ion-icon name=\"cart\" slot=\"icon-only\" class=\"white top-btn ion-no-margin\" color=\"mycolor1\"></ion-icon>\r\n      </ion-button>\r\n      <!-- <ion-button>\r\n        <ion-icon name=\"search\" slot=\"icon-only\" class=\"white top-btn ion-no-margin\" ></ion-icon>\r\n      </ion-button> -->\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"product\">\r\n      <app-product (notify)=\"onReviewClick($event)\" [product]=\"product\" [slider]=\"slider\" class=\"slide\"></app-product>\r\n   \r\n</ion-content>\r\n<ion-footer class=\"footer\" class=\"ion-align-items-center\" *ngIf=\"segment == 'Overview'\">\r\n  <ion-row *ngIf=\"product\" class=\"ion-align-items-center\">\r\n    <ion-col class=\"ion-padding\" >\r\n        <del  class=\"foot-highlight ion-no-margin\" *ngIf=\"product.discount > '0'\">\r\n          Rs. {{product.price }}\r\n        </del>\r\n      <br>\r\n      <ion-text *ngIf=\"product.discount <= '0'\" >\r\n        <h3  class=\"foot-highlight ion-no-margin\" style=\"font-size: 16px;\">Rs. {{product.price }}</h3>\r\n      </ion-text>\r\n\r\n      <ion-text *ngIf=\"product.discount > '0'\">\r\n        <h3  class=\"foot-highlight ion-no-margin\" >Rs. {{(product.price-((product.price/100)*product.discount) )}}</h3>\r\n      </ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <ion-button  color=\"mycolor1\"  (click)=\"Onclick(product)\" style=\"width: 110px;\"> \r\n        <ion-icon size=\"large\" name=\"heart-outline\" style=\"color: red; font-size: 10px; \" ></ion-icon> Wishlist\r\n      </ion-button>\r\n      <ion-button [disabled]=\"viewType === 'true'\" (click)=\"AddToCart(product)\"   class=\"white foot-btn ion-float-right ion-no-margin\"  style=\"width: 113px;\"color=\"mycolor1\"  expand=\"block\"><strong><ion-text color=\"light\">Buy</ion-text></strong></ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/_models/cart.ts":
/*!*********************************!*\
  !*** ./src/app/_models/cart.ts ***!
  \*********************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
class Cart {
}


/***/ }),

/***/ "./src/app/_models/wishlist.ts":
/*!*************************************!*\
  !*** ./src/app/_models/wishlist.ts ***!
  \*************************************/
/*! exports provided: Wishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wishlist", function() { return Wishlist; });
class Wishlist {
}


/***/ }),

/***/ "./src/app/innerhome/innerhome.component.scss":
/*!****************************************************!*\
  !*** ./src/app/innerhome/innerhome.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  box-shadow: unset;\n  border-radius: 9px;\n  background-color: white !important;\n}\n\n.price {\n  font-size: 18px;\n  float: left;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 15px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.subtitle {\n  font-size: 12px;\n  color: #787878;\n}\n\n.badge {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  background-color: rgba(12, 12, 12, 0.75);\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5uZXJob21lL0Q6XFxnaXRrdWlja3NhdmVcXG11bHRpc3RvcmUtbW9iaWxlLWFwcC9zcmNcXGFwcFxcaW5uZXJob21lXFxpbm5lcmhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lubmVyaG9tZS9pbm5lcmhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9pbm5lcmhvbWUvaW5uZXJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbi5pbmxpbmUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbi5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xyXG59XHJcbi5iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTIsIC43NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59IiwiLmNhcmQge1xuICBib3gtc2hhZG93OiB1bnNldDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucHJpY2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDNweDtcbn1cblxuLmlubGluZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3ODc4Nzg7XG59XG5cbi5iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDEyLCAxMiwgMC43NSk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/innerhome/innerhome.component.ts":
/*!**************************************************!*\
  !*** ./src/app/innerhome/innerhome.component.ts ***!
  \**************************************************/
/*! exports provided: InnerhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerhomeComponent", function() { return InnerhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions.service */ "./src/app/functions.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */



let InnerhomeComponent = class InnerhomeComponent {
    constructor(fun, nav) {
        this.fun = fun;
        this.nav = nav;
    }
    ngOnInit() {
    }
    open(data) {
        this.fun.update(data);
        this.nav.navigateForward('/productdetail');
    }
};
InnerhomeComponent.ctorParameters = () => [
    { type: _functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InnerhomeComponent.prototype, "recieved_data", void 0);
InnerhomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-innerhome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./innerhome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/innerhome/innerhome.component.html")).default,
        inputs: ['recieved_data'],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./innerhome.component.scss */ "./src/app/innerhome/innerhome.component.scss")).default]
    })
], InnerhomeComponent);



/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image {\n  height: 200px;\n}\n\n.product-image-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(transparent 75%, white 100%);\n}\n\n.hover-buttons {\n  position: absolute;\n  bottom: -10px;\n  z-index: 10;\n  right: 15px;\n}\n\n.red {\n  color: red;\n}\n\n.price {\n  font-size: 15px;\n  float: left;\n  width: 100% !important;\n  text-align: center !important;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 12px;\n  -webkit-margin-end: 5px;\n          margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.badge {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 8px 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  min-width: 45px;\n  border: 0.6px solid rgba(120, 120, 120, 0.5);\n  border-radius: 25px;\n  z-index: 9;\n  font-size: 16px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.row {\n  margin: 5px;\n}\n\n.spon-img {\n  min-height: 100px;\n  max-height: 100px;\n  margin: 3px;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 120px;\n  max-width: 120px;\n  display: inline;\n  padding: 3px 9px;\n  align-content: center !important;\n}\n\n.progress-outer {\n  width: 96%;\n  text-align: center;\n  background-color: #f4f4f4;\n  border: 1px solid #dcdcdc;\n  color: #fff;\n  border-radius: 20px;\n}\n\n.progress-inner {\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 5px;\n  border-radius: 20px;\n  background-color: var(--ion-color-mytheme);\n}\n\n.info {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.name {\n  font-size: 18px;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n  transform: translateX(-16px);\n}\n\n.fab {\n  width: 25px;\n  height: 25px;\n  padding: 9px;\n  border-radius: 25px;\n  margin-left: 6px;\n  border: 0.6px solid rgba(0, 0, 0, 0.3);\n  background-color: white !important;\n}\n\n.rate {\n  color: var(--ion-color-mytheme) !important;\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHByb2R1Y3RcXHByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLGFBQUE7QUNDTDs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3REFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNHSjs7QUREQTtFQUNJLFVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EsNkJBQUE7QUNNSjs7QURKQTtFQUNJLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtBQ1VKOztBRFJBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNXSjs7QURUQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDWUo7O0FEVkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNhSjs7QURYQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNjSjs7QURaQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ2VKOztBRGJBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGVBQUE7QUNpQko7O0FEZkE7RUFDSSxlQUFBO0FDa0JKOztBRGhCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDbUJKOztBRGpCQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUNvQko7O0FEbEJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7QUNxQko7O0FEbkJBO0VBQ0ksMENBQUE7RUFDQSxlQUFBO0FDc0JKOztBRHBCQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDdUJKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcclxuICAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5wcm9kdWN0LWltYWdlLW92ZXJsYXl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA3NSUsd2hpdGUgMTAwJSk7XHJcbn1cclxuLmhvdmVyLWJ1dHRvbnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICByaWdodDogMTVweDtcclxufVxyXG4ucmVke1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4ucHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDNweDtcclxufVxyXG4uaW5saW5lIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4uYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgcGFkZGluZzogOHB4IDVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiA0NXB4O1xyXG4gICAgYm9yZGVyOiAwLjZweCBzb2xpZCByZ2JhKDEyMCwgMTIwLCAxMjAsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uY21udCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnJldi1pbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLnJvdyB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4uc3Bvbi1pbWcge1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbi5jb250YWluZXItb3V0ZXIgeyBcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcbi5jb250YWluZXItaW5uZXIgeyBcclxuICAgIG1pbi13aWR0aDogMTIwcHg7IFxyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmc6IDNweCA5cHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4ucHJvZ3Jlc3Mtb3V0ZXIge1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5wcm9ncmVzcy1pbm5lciB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XHJcbn1cclxuLmluZm8ge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zbWFsbC1pY28ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDMzcHg7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbn1cclxuLnNlcCB7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE2cHgpO1xyXG59XHJcbi5mYWIge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIGJvcmRlcjogLjZweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJhdGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mdWxsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iLCIuaW1hZ2Uge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ucHJvZHVjdC1pbWFnZS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNzUlLCB3aGl0ZSAxMDAlKTtcbn1cblxuLmhvdmVyLWJ1dHRvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEwcHg7XG4gIHotaW5kZXg6IDEwO1xuICByaWdodDogMTVweDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW46IDNweDtcbn1cblxuLmlubGluZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogOHB4IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBtaW4td2lkdGg6IDQ1cHg7XG4gIGJvcmRlcjogMC42cHggc29saWQgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB6LWluZGV4OiA5O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jbW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucmV2LWltZyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5zcG9uLWltZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi5jb250YWluZXItb3V0ZXIge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZzogM3B4IDlweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9ncmVzcy1vdXRlciB7XG4gIHdpZHRoOiA5NiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5wcm9ncmVzcy1pbm5lciB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xufVxuXG4uaW5mbyB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc21hbGwtaWNvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDMzcHg7XG4gIGhlaWdodDogMzNweDtcbn1cblxuLnNlcCB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkMmQyO1xuICB3aWR0aDogMTAwdnc7XG4gIG1hcmdpbjogNnB4IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTZweCk7XG59XG5cbi5mYWIge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGJvcmRlcjogMC42cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucmF0ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions.service */ "./src/app/functions.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */






let ProductComponent = class ProductComponent {
    constructor(alertController, socialSharing, fun, dataService) {
        this.alertController = alertController;
        this.socialSharing = socialSharing;
        this.fun = fun;
        this.dataService = dataService;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"];
        this.slideOpts = {
            effect: 'flip'
        };
        this.open = [false, false, false, false];
        this.liked = false;
    }
    ngOnInit() {
    }
    toogle(i) {
        this.open[i] = !this.open[i];
    }
    remove() {
        this.slider.lockSwipes(true);
    }
    gainback() {
        this.slider.lockSwipes(false);
    }
    like() {
        console.log('like');
        this.liked = !this.liked;
    }
    shareViaInstagram(img) {
        // Check if sharing via email is supported
        this.socialSharing.canShareVia('instagram').then(() => {
            // Sharing via email is possible
            this.socialSharing.shareViaInstagram('Hey ! Look at the new dress I just bought from Shoppr app. Find more such apps at ', 'www/' + img).then(() => {
                // Success!
            }).catch(() => {
                // Error!
                this.createAlert('Error sharing product via Instagram. Please check if you have Instagram app on the device');
            });
        }).catch(() => {
            // Sharing via email is not possible
            this.createAlert('Could not find Instagram app on the device. Please install Instagram and try again.');
        });
    }
    createAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Sorry',
                subHeader: 'App not found',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    shareCommon(img) {
        console.log(img);
        this.socialSharing.share('Hey ! Look at the new dress I just bought from MultiStore app.' + this.env.RESOURCE_URL + img).then(() => {
            // Success!
        }).catch(() => {
            // Error!
        });
    }
};
ProductComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] },
    { type: _functions_service__WEBPACK_IMPORTED_MODULE_3__["FunctionsService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductComponent.prototype, "product", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductComponent.prototype, "slider", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductComponent.prototype, "notify", void 0);
ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html")).default,
        inputs: ['product', 'slider'],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/productdetail/productdetail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/productdetail/productdetail.module.ts ***!
  \*******************************************************/
/*! exports provided: ProductdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailPageModule", function() { return ProductdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _productdetail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./productdetail.page */ "./src/app/productdetail/productdetail.page.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _innerhome_innerhome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../innerhome/innerhome.component */ "./src/app/innerhome/innerhome.component.ts");

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
        component: _productdetail_page__WEBPACK_IMPORTED_MODULE_7__["ProductdetailPage"]
    }
];
let ProductdetailPageModule = class ProductdetailPageModule {
};
ProductdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]
        ],
        declarations: [_productdetail_page__WEBPACK_IMPORTED_MODULE_7__["ProductdetailPage"], _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _innerhome_innerhome_component__WEBPACK_IMPORTED_MODULE_9__["InnerhomeComponent"]],
        entryComponents: [_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _innerhome_innerhome_component__WEBPACK_IMPORTED_MODULE_9__["InnerhomeComponent"]]
    })
], ProductdetailPageModule);



/***/ }),

/***/ "./src/app/productdetail/productdetail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/productdetail/productdetail.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".white {\n  color: white !important;\n}\n\n.slide {\n  width: 100%;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white !important;\n  text-decoration: underline;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 21px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n.text {\n  font-size: 12px;\n}\n\n.light-bg {\n  background: #f4f5f8;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.cut {\n  text-decoration: line-through;\n  display: inline-block;\n  margin-right: 5px;\n  margin: auto;\n}\n\n.foot-highlight {\n  color: #ddab07;\n  display: inline-block;\n  margin: auto;\n  margin-left: 9px;\n}\n\n.footer {\n  background-color: #0c0c0c;\n  color: #d2d2d2;\n}\n\n.foot-btn {\n  width: 100%;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdGRldGFpbC9EOlxcZ2l0a3VpY2tzYXZlXFxtdWx0aXN0b3JlLW1vYmlsZS1hcHAvc3JjXFxhcHBcXHByb2R1Y3RkZXRhaWxcXHByb2R1Y3RkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9kdWN0ZGV0YWlsL3Byb2R1Y3RkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURBQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtBQ0dKOztBREZJO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQ0lSOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBQ0ksbUJBQUE7QUNLSjs7QURIQTtFQUNJLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxZQUFBO0FDT0o7O0FETEE7RUFDSSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDUUo7O0FETkE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNTSjs7QURQQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ1VKOztBRFJBO0VBQ0ksV0FBQTtBQ1dKOztBRFRBO0VBQ0ksdUJBQUE7QUNZSjs7QURWQTtFQUNJLGtCQUFBO0FDYUo7O0FEWkk7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ2NSIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdGRldGFpbC9wcm9kdWN0ZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGl0ZSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJ0bi1hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIH1cclxufVxyXG4udGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmxpZ2h0LWJne1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjVmODtcclxufVxyXG4ubXktYnRue1xyXG4gICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gICAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmhvci1zY3JvbGx7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLmN1dCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5mb290LWhpZ2hsaWdodCB7XHJcbiAgICBjb2xvcjogI2RkYWIwNzs7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcbi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxMiwgMTIpO1xyXG4gICAgY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcclxufVxyXG4uZm9vdC1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI2RhZ3tcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcbi5zZWdtZW50dG9vbGJhclNlY3Rpb257XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICAuc2VnU2VjdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBtaW4taGVpZ2h0OjMwcHg7XHJcbiAgICB9XHJcbn0iLCIud2hpdGUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnNsaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XG59XG4uYnRuLWFjdGl2ZSBpb24tdGV4dCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5saWdodC1iZyB7XG4gIGJhY2tncm91bmQ6ICNmNGY1Zjg7XG59XG5cbi5teS1idG4ge1xuICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIG1pbi1oZWlnaHQ6IDI1cHg7XG59XG5cbi5ob3Itc2Nyb2xsIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uY3V0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmZvb3QtaGlnaGxpZ2h0IHtcbiAgY29sb3I6ICNkZGFiMDc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMGMwYztcbiAgY29sb3I6ICNkMmQyZDI7XG59XG5cbi5mb290LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jZGFnIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5zZWdtZW50dG9vbGJhclNlY3Rpb24ge1xuICAtLW1pbi1oZWlnaHQ6IDMwcHg7XG59XG4uc2VnbWVudHRvb2xiYXJTZWN0aW9uIC5zZWdTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/productdetail/productdetail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/productdetail/productdetail.page.ts ***!
  \*****************************************************/
/*! exports provided: ProductdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailPage", function() { return ProductdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _functions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions.service */ "./src/app/functions.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shop.service */ "./src/app/services/shop.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_models/cart */ "./src/app/_models/cart.ts");
/* harmony import */ var _models_wishlist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_models/wishlist */ "./src/app/_models/wishlist.ts");

/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */











let ProductdetailPage = class ProductdetailPage {
    constructor(menuCtrl, fun, dataService, shopservice, loadingController, toastService, storage, route, nav) {
        this.menuCtrl = menuCtrl;
        this.fun = fun;
        this.dataService = dataService;
        this.shopservice = shopservice;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.storage = storage;
        this.route = route;
        this.nav = nav;
        this.index = 0;
        this.segment = '';
        this.slideOpts = {
            effect: 'flip',
            zoom: false
        };
        this.cart = [];
        this.newProduct = new src_app_models_cart__WEBPACK_IMPORTED_MODULE_9__["Cart"]();
        this.wishlist = [];
        this.newProduct2 = new _models_wishlist__WEBPACK_IMPORTED_MODULE_10__["Wishlist"]();
        this.data = [];
        this.filtercart = [];
        this.filterwishlist = [];
        // this.product = dataService.current_product;
        this.data = dataService.item_tab;
        this.segment = this.data[0].title;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.viewType = this.route.snapshot.paramMap.get('preview');
        // this.menuCtrl.enable(false, 'start');
        // this.menuCtrl.enable(false, 'end');
        this.getProduct(this.route.snapshot.paramMap.get('id'));
    }
    change() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.slides.getActiveIndex().then(d => this.index = d);
            this.segment = this.data[this.index].title;
            this.drag();
        });
    }
    goToCart() {
        this.fun.navigate('cart', false);
    }
    update(i) {
        this.slides.slideTo(i);
    }
    drag() {
        let distanceToScroll = 0;
        for (const index in this.data) {
            if (parseInt(index) < this.index) {
                distanceToScroll = distanceToScroll + document.getElementById('seg_' + index).offsetWidth + 24;
            }
        }
        document.getElementById('dag').scrollLeft = distanceToScroll;
    }
    seg(event) {
        this.segment = event.detail.value;
    }
    getProduct(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ message: "Loading" });
            yield loading.present();
            yield this.shopservice.GetProductDetail(id).subscribe(res => {
                loading.dismiss();
                if (res) {
                    console.log("prod", res);
                    this.product = res;
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
    //  async AddToCart(product) {
    //    console.log(product);
    //    await this.storage.get("Cart").then(value=> {
    //       if(value)
    //       {
    // console.log(value);
    // this.cart = value;
    // console.log(this.cart);
    // this.cart.push(product);
    // this.storage.set("Cart", this.cart);
    //       }
    //       else{
    //         this.cart.push(product);
    //         this.storage.set("Cart", this.cart);   
    //       }
    //     }  
    //       );
    //       this.goToCart();
    //   }
    AddToCart(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.newProduct.productId = product.id;
            this.newProduct.title = product.title;
            this.newProduct.description = product.description;
            this.newProduct.productDetail = product.productDetail;
            this.newProduct.productCode = product.productCode;
            this.newProduct.price = product.price;
            this.newProduct.discount = product.discount;
            this.newProduct.unit = product.unit;
            this.newProduct.weight = product.weight;
            if (product.images[0])
                this.newProduct.imagepath = product.images[0].path;
            this.newProduct.AvaliableQty = this.product.quantity;
            this.newProduct.quantity = 1;
            this.newProduct.shopId = product.shopId;
            // console.log(this.newProduct);
            yield this.storage.get("ShopId").then(value => {
                console.log(value, this.newProduct.shopId);
                if (value != this.newProduct.shopId) {
                    this.storage.remove('Cart');
                    this.storage.remove('TotalAmount');
                    this.storage.set("ShopId", this.newProduct.shopId);
                    console.log("product Remove");
                }
            });
            yield this.storage.get("Cart").then(value => {
                if (value) {
                    this.cart = value;
                    this.filtercart = this.cart.filter(x => x.productId === this.newProduct.productId);
                    console.log(this.newProduct, 'new');
                    console.log(this.filtercart, 'filter');
                    if (this.filtercart.length > 0) {
                        for (var i = 0; i < this.cart.length; i++) {
                            if (this.cart[i].productId == this.newProduct.productId) {
                                console.log(this.cart[i].quantity, this.newProduct.AvaliableQty, 'check');
                                if (this.cart[i].quantity < this.newProduct.AvaliableQty) {
                                    this.cart[i].quantity = 1;
                                }
                                else {
                                    this.toastService.create("limit arrived", "danger");
                                }
                            }
                        }
                        this.storage.set("Cart", this.cart);
                        this.goToCart();
                    }
                    else {
                        this.cart.push(this.newProduct);
                        this.storage.set("Cart", this.cart);
                        this.goToCart();
                    }
                }
                else {
                    this.cart.push(this.newProduct);
                    this.storage.set("Cart", this.cart);
                    this.goToCart();
                }
            });
        });
    }
    Onclick(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.newProduct2.productId = product.id;
            this.newProduct2.title = product.title;
            this.newProduct2.description = product.description;
            this.newProduct2.productDetail = product.productDetail;
            this.newProduct2.productCode = product.productCode;
            this.newProduct2.price = product.price;
            this.newProduct2.discount = product.discount;
            this.newProduct2.unit = product.unit;
            this.newProduct2.weight = product.weight;
            if (product.images[0])
                this.newProduct2.imagepath = product.images[0].path;
            this.newProduct2.AvaliableQty = this.product.quantity;
            this.newProduct2.quantity = 1;
            this.newProduct2.shopId = product.shopId;
            // console.log(this.newProduct);
            yield this.storage.get("Wishlist").then(value => {
                if (value) {
                    this.wishlist = value;
                    this.filterwishlist = this.wishlist.filter(x => x.productId === this.newProduct2.productId);
                    console.log(this.newProduct2, 'new');
                    console.log(this.filterwishlist, 'filter');
                    if (this.filterwishlist.length > 0) {
                        for (var i = 0; i < this.wishlist.length; i++) {
                            if (this.wishlist[i].productId == this.newProduct2.productId) {
                                this.toastService.create("Product is Already added in wishlist");
                            }
                        }
                        this.storage.set("Wishlist", this.wishlist);
                        this.goToWishList();
                    }
                    else {
                        this.wishlist.push(this.newProduct2);
                        this.storage.set("Wishlist", this.wishlist);
                        this.goToWishList();
                    }
                }
                else {
                    this.wishlist.push(this.newProduct2);
                    this.storage.set("Wishlist", this.wishlist);
                    this.goToWishList();
                }
            });
        });
    }
    goToWishList() {
        this.fun.navigate('wishlist', false);
    }
};
ProductdetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _functions_service__WEBPACK_IMPORTED_MODULE_2__["FunctionsService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: src_app_services_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Slides')
], ProductdetailPage.prototype, "slides", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Content')
], ProductdetailPage.prototype, "content", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider')
], ProductdetailPage.prototype, "slider", void 0);
ProductdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productdetail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./productdetail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productdetail/productdetail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./productdetail.page.scss */ "./src/app/productdetail/productdetail.page.scss")).default]
    })
], ProductdetailPage);



/***/ }),

/***/ "./src/app/services/shop.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/shop.service.ts ***!
  \******************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let ShopService = class ShopService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.API_SHOP = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}shop/`;
        this.API_PRODUCT = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}product/`;
        this.API_BANK = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL}bank/`;
    }
    GetShops(lat, lng) {
        const url = `${this.API_SHOP}${lat}/${lng}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetShopsByCategory(groupid, lat, lng) {
        const url = `${this.API_SHOP}${lat}/${lng}/${groupid}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetSingleShopByName() {
        const url = `${this.API_SHOP}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    getApprovedShops() {
        const url = `${this.API_SHOP}verified`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    getUnApprovedShops() {
        const url = `${this.API_SHOP}unverfied`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    getShopsByUser(id) {
        const url = `${this.API_SHOP}user/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    ApproveShop(id, data) {
        const url = `${this.API_SHOP}${id}`;
        return this.http.put(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    UpdateShop(id, data) {
        const url = `${this.API_SHOP}${id}`;
        return this.http.put(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    UpdateProduct(id, data) {
        const url = `${this.API_PRODUCT}${id}`;
        return this.http.put(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetShopProducts(id) {
        const url = `${this.API_SHOP}${id}/products`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetShopByProducts(id) {
        const url = `${this.API_SHOP}products/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetShopByuserProducts(id) {
        const url = `${this.API_PRODUCT}userProduct/${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetShop(id) {
        const url = `${this.API_SHOP}${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetProductDetail(id) {
        const url = `${this.API_PRODUCT}${id}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    PostShop(data) {
        const url = `${this.API_SHOP}`;
        return this.http.post(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    PostProduct(data) {
        const url = `${this.API_PRODUCT}`;
        return this.http.post(url, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetProduct() {
        const url = `${this.API_PRODUCT}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    DeleteProductbyId(id) {
        const url = `${this.API_PRODUCT}${id}`;
        return this.http.delete(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    DeleteShop(id) {
        const url = `${this.API_SHOP}${id}`;
        return this.http.delete(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    GetBank() {
        const url = `${this.API_BANK}`;
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
};
ShopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ShopService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShopService);



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
//# sourceMappingURL=productdetail-productdetail-module-es2015.js.map