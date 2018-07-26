(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/air-port-line/air-port-line-modal/air-port-line-modal.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/air-port-line/air-port-line-modal/air-port-line-modal.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .mat-dialog-title{\r\n    min-width: 300px;\r\n  }\r\n  .mat-progress-bar{\r\n    width: 100px;\r\n    -webkit-transform: rotate(270deg);\r\n            transform: rotate(270deg);\r\n}\r\n  h4{\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/air-port-line/air-port-line-modal/air-port-line-modal.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/air-port-line/air-port-line-modal/air-port-line-modal.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>\n  </h1>\n  <mat-dialog-content class=\"post-form\">\n    <mat-grid-list cols=\"5\" rowHeight=\"50px\">\n      <!-- 1 -->\n      <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n        <h4 class=\"icon-part\">\n          <div>機場</div>\n          <mat-icon color=\"accent\">flight</mat-icon>\n        </h4>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n        <h5 class=\"\">\n          <div>haruka(JR)</div>\n          <div>(1:16)</div>\n          <div>¥3500</div>\n        </h5>\n      </mat-grid-tile>\n      <mat-grid-tile gutterSize=\"5px\">\n        <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      </mat-grid-tile>\n      <!-- 2 -->\n      <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n        <h4 class=\"icon-part\">\n          <div>京都駅</div>\n          <mat-icon color=\"accent\">directions_subway</mat-icon>\n        </h4>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n        <h5 class=\"\">\n          <div>奈良(JR)</div>\n          <div>(0:03)</div>\n          <div>¥140</div>\n        </h5>\n      </mat-grid-tile>\n      <mat-grid-tile gutterSize=\"5px\">\n        <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      </mat-grid-tile>\n      <!-- 3 -->\n      <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n        <h4 class=\"icon-part\">\n          <div>東福寺</div>\n          <mat-icon color=\"accent\">directions_subway</mat-icon>\n        </h4>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n        <h5 class=\"\">\n          <div><mat-icon color=\"accent\">directions_walk</mat-icon></div>\n          <div>(0:09)</div>\n        </h5>\n      </mat-grid-tile>\n      <mat-grid-tile gutterSize=\"5px\">\n        <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      </mat-grid-tile>\n      <!-- 4 -->\n      <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n        <h4 class=\"icon-part\">\n          <div>民宿</div>\n          <mat-icon color=\"accent\">directions_subway</mat-icon>\n        </h4>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-button mat-dialog-close color=\"warn\">關閉</button>\n  </mat-dialog-actions>"

/***/ }),

/***/ "./src/app/air-port-line/air-port-line-modal/air-port-line-modal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/air-port-line/air-port-line-modal/air-port-line-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: AirPortLineModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirPortLineModalComponent", function() { return AirPortLineModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AirPortLineModalComponent = /** @class */ (function () {
    function AirPortLineModalComponent() {
    }
    AirPortLineModalComponent.prototype.ngOnInit = function () {
    };
    AirPortLineModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-air-port-line-modal',
            template: __webpack_require__(/*! ./air-port-line-modal.component.html */ "./src/app/air-port-line/air-port-line-modal/air-port-line-modal.component.html"),
            styles: [__webpack_require__(/*! ./air-port-line-modal.component.css */ "./src/app/air-port-line/air-port-line-modal/air-port-line-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AirPortLineModalComponent);
    return AirPortLineModalComponent;
}());



/***/ }),

/***/ "./src/app/air-port-line/air-port-line-modal2/air-port-line-modal2.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/air-port-line/air-port-line-modal2/air-port-line-modal2.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .mat-dialog-title{\r\n    min-width: 300px;\r\n  }\r\n  .mat-progress-bar{\r\n    width: 100px;\r\n    -webkit-transform: rotate(270deg);\r\n            transform: rotate(270deg);\r\n}\r\n  h4{\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/air-port-line/air-port-line-modal2/air-port-line-modal2.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/air-port-line/air-port-line-modal2/air-port-line-modal2.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>\n  </h1>\n  <mat-dialog-content class=\"post-form\">\n    <mat-grid-list cols=\"5\" rowHeight=\"50px\">\n      <!-- 1 -->\n      <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n        <h4 class=\"icon-part\">\n          <div>機場</div>\n          <mat-icon color=\"accent\">flight</mat-icon>\n        </h4>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n        <h5 class=\"\">\n          <div>haruka(JR)</div>\n          <div>(1:16)</div>\n          <div>¥3500</div>\n        </h5>\n      </mat-grid-tile>\n      <mat-grid-tile gutterSize=\"5px\">\n        <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      </mat-grid-tile>\n      <!-- 2 -->\n      <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n        <h4 class=\"icon-part\">\n          <div>京都駅</div>\n          <mat-icon color=\"accent\">directions_subway</mat-icon>\n        </h4>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-button mat-dialog-close color=\"warn\">關閉</button>\n  </mat-dialog-actions>"

/***/ }),

/***/ "./src/app/air-port-line/air-port-line-modal2/air-port-line-modal2.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/air-port-line/air-port-line-modal2/air-port-line-modal2.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AirPortLineModal2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirPortLineModal2Component", function() { return AirPortLineModal2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AirPortLineModal2Component = /** @class */ (function () {
    function AirPortLineModal2Component() {
    }
    AirPortLineModal2Component.prototype.ngOnInit = function () {
    };
    AirPortLineModal2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-air-port-line-modal2',
            template: __webpack_require__(/*! ./air-port-line-modal2.component.html */ "./src/app/air-port-line/air-port-line-modal2/air-port-line-modal2.component.html"),
            styles: [__webpack_require__(/*! ./air-port-line-modal2.component.css */ "./src/app/air-port-line/air-port-line-modal2/air-port-line-modal2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AirPortLineModal2Component);
    return AirPortLineModal2Component;
}());



/***/ }),

/***/ "./src/app/air-port-line/air-port-line.component.css":
/*!***********************************************************!*\
  !*** ./src/app/air-port-line/air-port-line.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 100%;\r\n    width: 99.5%;\r\n}\r\n.content {\r\n    /* align-self: flex-start; */\r\n    width: 100%;\r\n    margin: 5px;\r\n    height: 50px;\r\n  }\r\n.mat-progress-bar{\r\n    width: 60px;\r\n}"

/***/ }),

/***/ "./src/app/air-port-line/air-port-line.component.html":
/*!************************************************************!*\
  !*** ./src/app/air-port-line/air-port-line.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list rowHeight=\"50px\" cols=\"3\">\n  <mat-grid-tile colspan=\"3\" rowspan=\"8\" gutterSize=\"5px\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoomValue\" [gestureHandling]=\"gestureHandling\">\n      <div *ngIf=\"isLocation\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"iconUrl\">\n        </agm-marker>\n      </div>\n      <agm-marker *ngFor=\"let m of markers\" [latitude]=\"m.lat\" [longitude]=\"m.lng\">\n        <agm-info-window>\n          <strong style=\"color: black\">{{m.label}}</strong>\n        </agm-info-window>\n      </agm-marker>\n    </agm-map>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <button (click)=\"showGps()\" mat-mini-fab color=\"primary\">\n      <mat-icon>gps_fixed</mat-icon>\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <h5>\n      <mat-icon>flight_land</mat-icon>\n    </h5>\n    <h5>\n      <div>07/27 16:30</div>\n    </h5>\n    <button (click)=\"openDialog()\" mat-mini-fab color=\"warn\">\n        <mat-icon>map</mat-icon>\n      </button>\n\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <h5>\n      <mat-icon>flight_takeoff</mat-icon>\n    </h5>\n    <h5>\n      <div>07/31 22:25</div>\n    </h5>\n    <button (click)=\"openDialog2()\" mat-mini-fab color=\"warn\">\n      <mat-icon>map</mat-icon>\n    </button>\n  </mat-grid-tile>\n\n  <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n    <h3>關西國際空港</h3>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <button (click)=\"openToDoDialog()\" mat-mini-fab color=\"warn\">\n      <mat-icon>assignment</mat-icon>\n    </button>\n  </mat-grid-tile>\n\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/air-port-line/air-port-line.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/air-port-line/air-port-line.component.ts ***!
  \**********************************************************/
/*! exports provided: AirPortLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirPortLineComponent", function() { return AirPortLineComponent; });
/* harmony import */ var _air_port_line_modal2_air_port_line_modal2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./air-port-line-modal2/air-port-line-modal2.component */ "./src/app/air-port-line/air-port-line-modal2/air-port-line-modal2.component.ts");
/* harmony import */ var _air_port_line_modal_air_port_line_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./air-port-line-modal/air-port-line-modal.component */ "./src/app/air-port-line/air-port-line-modal/air-port-line-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _to_do_modal_to_do_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to-do-modal/to-do-modal.component */ "./src/app/air-port-line/to-do-modal/to-do-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AirPortLineComponent = /** @class */ (function () {
    function AirPortLineComponent(dialog) {
        this.dialog = dialog;
        this.lat = 34.803551;
        this.lng = 135.539004;
        this.zoomValue = 9;
        this.iconUrl = "./assets/gps.gif";
        this.gestureHandling = 'greedy';
        this.isLocation = false;
        this.markers = [
            {
                lng: 135.232693,
                lat: 34.433508,
                label: '關西國際機場',
                draggable: true
            },
            {
                lng: 135.759422,
                lat: 34.985359,
                label: '京都',
                draggable: false
            }
        ];
    }
    AirPortLineComponent.prototype.showGps = function () {
        var _this = this;
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 1000
            };
            this.watch = navigator.geolocation.watchPosition(function (pos) {
                _this.lng = +pos.coords.longitude;
                _this.lat = +pos.coords.latitude;
                console.log("watch");
                var id = _this.watch;
                var stops = document.getElementsByClassName("side");
                for (var i = 0; i < stops.length; i++) {
                    stops[i].addEventListener('click', function () {
                        navigator.geolocation.clearWatch(id);
                        console.log("clear");
                    });
                }
            }, null, options);
        }
        this.isLocation = true;
    };
    AirPortLineComponent.prototype.openDialog = function () {
        this.dialog.open(_air_port_line_modal_air_port_line_modal_component__WEBPACK_IMPORTED_MODULE_1__["AirPortLineModalComponent"]);
    };
    AirPortLineComponent.prototype.openDialog2 = function () {
        this.dialog.open(_air_port_line_modal2_air_port_line_modal2_component__WEBPACK_IMPORTED_MODULE_0__["AirPortLineModal2Component"]);
    };
    AirPortLineComponent.prototype.openToDoDialog = function () {
        this.dialog.open(_to_do_modal_to_do_modal_component__WEBPACK_IMPORTED_MODULE_4__["ToDoModalComponent"]);
    };
    AirPortLineComponent.prototype.ngOnInit = function () {
    };
    AirPortLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-air-port-line',
            template: __webpack_require__(/*! ./air-port-line.component.html */ "./src/app/air-port-line/air-port-line.component.html"),
            styles: [__webpack_require__(/*! ./air-port-line.component.css */ "./src/app/air-port-line/air-port-line.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AirPortLineComponent);
    return AirPortLineComponent;
}());



/***/ }),

/***/ "./src/app/air-port-line/to-do-modal/to-do-modal.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/air-port-line/to-do-modal/to-do-modal.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/air-port-line/to-do-modal/to-do-modal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/air-port-line/to-do-modal/to-do-modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n  待辦事項\n</h2>\n\n<mat-dialog-content class=\"post-form\">\n    <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\">京都<mat-icon>swap_horiz</mat-icon>機場來回車票</mat-list-item>\n        <mat-list-item role=\"listitem\">嵐山小火車車票(大人¥620/小孩¥310)</mat-list-item>\n        <mat-list-item role=\"listitem\">可先行機場附近吃飯</mat-list-item>\n      </mat-list>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close color=\"warn\">取消</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/air-port-line/to-do-modal/to-do-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/air-port-line/to-do-modal/to-do-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: ToDoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoModalComponent", function() { return ToDoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToDoModalComponent = /** @class */ (function () {
    function ToDoModalComponent() {
    }
    ToDoModalComponent.prototype.ngOnInit = function () {
    };
    ToDoModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-to-do-modal',
            template: __webpack_require__(/*! ./to-do-modal.component.html */ "./src/app/air-port-line/to-do-modal/to-do-modal.component.html"),
            styles: [__webpack_require__(/*! ./to-do-modal.component.css */ "./src/app/air-port-line/to-do-modal/to-do-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToDoModalComponent);
    return ToDoModalComponent;
}());



/***/ }),

/***/ "./src/app/apartment/apartment.component.css":
/*!***************************************************!*\
  !*** ./src/app/apartment/apartment.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 100%;\r\n    width: 99.5%;\r\n}\r\n.content {\r\n    align-self: flex-start;\r\n    width: 100%;\r\n    margin: 5px;\r\n  }"

/***/ }),

/***/ "./src/app/apartment/apartment.component.html":
/*!****************************************************!*\
  !*** ./src/app/apartment/apartment.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list rowHeight=\"50px\" cols=\"2\">\n    <mat-grid-tile colspan=\"2\" rowspan=\"8\">\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoomValue\" [gestureHandling]=\"gestureHandling\">\n            <agm-data-layer matBadge=\"4\" matBadgeOverlap=\"false\" [geoJson]=\"geoJson\"></agm-data-layer>\n            <div *ngIf=\"isLocation\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"iconUrl\">\n                </agm-marker>\n            </div>\n            <div *ngIf=\"isRoute\">\n                <agm-marker *ngFor=\"let m of hints\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" [iconUrl]=\"m.icon\">\n                </agm-marker>\n            </div>\n            <agm-marker *ngFor=\"let m of markers\" [latitude]=\"m.lat\" [longitude]=\"m.lng\">\n                <agm-info-window>\n                    <strong style=\"color: black\">{{m.label}}</strong>\n                </agm-info-window>\n            </agm-marker>\n            <div *ngIf=\"isSuper\">\n                <agm-marker *ngFor=\"let m of super\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" [iconUrl]=\"m.icon\">\n                    <agm-info-window>\n                        <strong style=\"color: black\">{{m.label}}</strong>\n                    </agm-info-window>\n                </agm-marker>\n            </div>\n        </agm-map>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" rowspan=\"2\">\n\n        <div class=\"content\">\n            <div class=\"toolbar-seprator\">\n                <button (click)=\"showGps()\" mat-mini-fab color=\"primary\">\n                    <mat-icon>gps_fixed</mat-icon>\n                </button>\n            </div>\n            <mat-slide-toggle color=\"primary\" (change)=\"showSuper($event)\">\n                <mat-icon>shop</mat-icon>超商、\n                <mat-icon>shopping_cart</mat-icon>超市</mat-slide-toggle>\n            <br>\n            <mat-slide-toggle color=\"primary\" (change)=\"showRoute($event)\">民宿路線</mat-slide-toggle>\n        </div>\n    </mat-grid-tile>\n    <mat-grid-tile rowspan=\"2\">\n        <img style=\"height:16px;align-self: flex-start\" src=\"./assets/one.png\">\n        <img style=\"height: 100%\" src=\"./assets/1.JPG\">\n    </mat-grid-tile>\n    <mat-grid-tile rowspan=\"2\">\n        <img style=\"height:16px;align-self: flex-start\" src=\"./assets/two.png\">\n        <img style=\"height: 100%\" src=\"./assets/2.JPG\">\n    </mat-grid-tile>\n    <mat-grid-tile rowspan=\"2\">\n        <img style=\"height:16px;align-self: flex-start\" src=\"./assets/three.png\">\n        <img style=\"height: 80%\" src=\"./assets/3.JPG\">\n    </mat-grid-tile>\n    <mat-grid-tile rowspan=\"2\">\n        <img style=\"height:16px;align-self: flex-start\" src=\"./assets/four.png\">\n        <img style=\"height: 100%\" src=\"./assets/4.JPG\">\n    </mat-grid-tile>\n    <mat-grid-tile rowspan=\"2\">\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <button mat-raised-button color=\"primary\">\n            <mat-icon>vpn_key</mat-icon>\n            0123\n        </button>\n    </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/apartment/apartment.component.ts":
/*!**************************************************!*\
  !*** ./src/app/apartment/apartment.component.ts ***!
  \**************************************************/
/*! exports provided: ApartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApartmentComponent", function() { return ApartmentComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApartmentComponent = /** @class */ (function () {
    function ApartmentComponent(httpClient) {
        this.httpClient = httpClient;
        this.lat = 34.981299;
        this.lng = 135.771653;
        this.url = "./assets/apartment.json";
        this.zoomValue = 15;
        this.iconUrl = "./assets/gps.gif";
        this.isSuper = false;
        this.isRoute = false;
        this.isLocation = false;
        this.gestureHandling = 'greedy';
        this.super = [
            {
                lng: 135.774396,
                lat: 34.983768,
                label: '超市',
                icon: './assets/shopping_cart.png',
                draggable: false
            }, {
                lng: 135.770259,
                lat: 34.981325,
                label: '超商(全家)',
                icon: './assets/shop.png',
                draggable: false
            }, {
                lng: 135.773528,
                lat: 34.982007,
                label: '超商(Daily)',
                icon: './assets/shop.png',
                draggable: false
            }, {
                lng: 135.770531,
                lat: 34.980829,
                label: '超商(Daily)',
                icon: './assets/shop.png',
                draggable: false
            },
        ];
        this.markers = [
            {
                lng: 135.769949,
                lat: 34.981282,
                label: '東福寺',
                draggable: false
            }, {
                lng: 135.775934,
                lat: 34.981461,
                label: '民宿',
                draggable: false
            },
        ];
        this.hints = [
            {
                lng: 135.770423,
                lat: 34.980788,
                icon: './assets/one.png',
                draggable: false
            }, {
                lng: 135.773753,
                lat: 34.982484,
                icon: './assets/two.png',
                draggable: false
            }, {
                lng: 135.775973,
                lat: 34.981881,
                icon: './assets/three.png',
                draggable: false
            }, {
                lng: 135.775922,
                lat: 34.981455,
                icon: './assets/four.png',
                draggable: false
            },
        ];
        this.geoJson = null;
    }
    ApartmentComponent.prototype.getGeoJsonLayer = function () {
        return this.httpClient.get(this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    ApartmentComponent.prototype.stopGps = function () {
        navigator.geolocation.clearWatch(this.watch);
        console.log("clear");
    };
    ApartmentComponent.prototype.showGps = function () {
        var _this = this;
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 1000
            };
            this.watch = navigator.geolocation.watchPosition(function (pos) {
                _this.lng = +pos.coords.longitude;
                _this.lat = +pos.coords.latitude;
                console.log("watch");
                var id = _this.watch;
                var stops = document.getElementsByClassName("side");
                for (var i = 0; i < stops.length; i++) {
                    stops[i].addEventListener('click', function () {
                        navigator.geolocation.clearWatch(id);
                        console.log("clear");
                    });
                }
            }, null, options);
        }
        this.isLocation = true;
    };
    ApartmentComponent.prototype.showRoute = function (event) {
        var _this = this;
        if (event.checked) {
            this.getGeoJsonLayer().subscribe(function (result) {
                _this.geoJson = result;
                _this.isRoute = true;
            });
        }
        else {
            this.geoJson = null;
            this.isRoute = false;
        }
    };
    ApartmentComponent.prototype.showSuper = function (event) {
        if (event.checked) {
            this.isSuper = true;
        }
        else {
            this.isSuper = false;
        }
    };
    ApartmentComponent.prototype.ngOnInit = function () {
    };
    ApartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apartment',
            template: __webpack_require__(/*! ./apartment.component.html */ "./src/app/apartment/apartment.component.html"),
            styles: [__webpack_require__(/*! ./apartment.component.css */ "./src/app/apartment/apartment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ApartmentComponent);
    return ApartmentComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _air_port_line_air_port_line_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./air-port-line/air-port-line.component */ "./src/app/air-port-line/air-port-line.component.ts");
/* harmony import */ var _apartment_apartment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apartment/apartment.component */ "./src/app/apartment/apartment.component.ts");
/* harmony import */ var _day5_day5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day5/day5.component */ "./src/app/day5/day5.component.ts");
/* harmony import */ var _day4_day4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day4/day4.component */ "./src/app/day4/day4.component.ts");
/* harmony import */ var _day3_day3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./day3/day3.component */ "./src/app/day3/day3.component.ts");
/* harmony import */ var _day2_day2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day2/day2.component */ "./src/app/day2/day2.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _direction_direction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./direction/direction.component */ "./src/app/direction/direction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'day2', component: _day2_day2_component__WEBPACK_IMPORTED_MODULE_5__["Day2Component"] },
    { path: 'day3', component: _day3_day3_component__WEBPACK_IMPORTED_MODULE_4__["Day3Component"] },
    { path: 'day4', component: _day4_day4_component__WEBPACK_IMPORTED_MODULE_3__["Day4Component"] },
    { path: 'day5', component: _day5_day5_component__WEBPACK_IMPORTED_MODULE_2__["Day5Component"] },
    { path: 'day1', component: _apartment_apartment_component__WEBPACK_IMPORTED_MODULE_1__["ApartmentComponent"] },
    { path: 'air-port-line', component: _air_port_line_air_port_line_component__WEBPACK_IMPORTED_MODULE_0__["AirPortLineComponent"] },
    { path: 'direction', component: _direction_direction_component__WEBPACK_IMPORTED_MODULE_9__["DirectionComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n        <mat-toolbar>\n                <button mat-icon-button (click)=\"sideNav.toggle()\">\n                        <mat-icon>{{ sideNav.opened ? 'close' : 'menu' }}</mat-icon>\n                </button>\n        </mat-toolbar>\n        <mat-sidenav-container>\n                <mat-sidenav #sideNav>\n                        <mat-nav-list>\n                                <button class=\"side\" mat-button color=\"primary\" routerLink=\"/dashboard\" mat-list-item><mat-icon>home</mat-icon>首頁</button>\n                                <br>\n                                <button class=\"side\" mat-button color=\"primary\" routerLink=\"/day1\" mat-list-item><mat-icon>hotel</mat-icon>京都(Day1)</button>\n                                <br>\n                                <button class=\"side\" mat-button color=\"primary\" routerLink=\"/day2\" mat-list-item><mat-icon>filter_hdr</mat-icon>嵐山(Day2)</button>\n                                <br>\n                                <button class=\"side\" mat-button color=\"primary\" routerLink=\"/day3\" mat-list-item><mat-icon>toys</mat-icon>奈良(Day3)</button>\n                                <br>\n                                <button class=\"side\" mat-button color=\"primary\" routerLink=\"/day4\" mat-list-item><mat-icon>local_mall</mat-icon>京都(Day4)</button>\n                                <br>\n                                <button class=\"side\" mat-button color=\"primary\" routerLink=\"/day5\" mat-list-item><mat-icon>camera_alt</mat-icon>京都(Day5)</button>\n                                <br>\n                                <button class=\"side\" mat-button color=\"primary\" routerLink=\"/air-port-line\" mat-list-item>機場\n                                        <mat-icon>swap_horiz</mat-icon>民宿</button>\n                                <br>\n                                <button class=\"side\" mat-button color=\"primary\" routerLink=\"/direction\" mat-list-item>\n                                        <mat-icon>near_me</mat-icon>導航</button>\n                                <br>\n\n                        </mat-nav-list>\n                </mat-sidenav>\n                <mat-sidenav-content>\n                        <div style=\"width:100%;height: 800px; background-color:black;\">\n                                <router-outlet></router-outlet>\n                        </div>\n                </mat-sidenav-content>\n        </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared-material/shared-material.module */ "./src/app/shared-material/shared-material.module.ts");
/* harmony import */ var _day2_day2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./day2/day2.component */ "./src/app/day2/day2.component.ts");
/* harmony import */ var _day3_day3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./day3/day3.component */ "./src/app/day3/day3.component.ts");
/* harmony import */ var _day4_day4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./day4/day4.component */ "./src/app/day4/day4.component.ts");
/* harmony import */ var _day5_day5_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./day5/day5.component */ "./src/app/day5/day5.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apartment_apartment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apartment/apartment.component */ "./src/app/apartment/apartment.component.ts");
/* harmony import */ var _air_port_line_air_port_line_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./air-port-line/air-port-line.component */ "./src/app/air-port-line/air-port-line.component.ts");
/* harmony import */ var _day2_day2_modal_day2_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./day2/day2-modal/day2-modal.component */ "./src/app/day2/day2-modal/day2-modal.component.ts");
/* harmony import */ var _day3_day3_modal_day3_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./day3/day3-modal/day3-modal.component */ "./src/app/day3/day3-modal/day3-modal.component.ts");
/* harmony import */ var _day4_day4_modal_day4_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./day4/day4-modal/day4-modal.component */ "./src/app/day4/day4-modal/day4-modal.component.ts");
/* harmony import */ var _day5_day5_modal_day5_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./day5/day5-modal/day5-modal.component */ "./src/app/day5/day5-modal/day5-modal.component.ts");
/* harmony import */ var _air_port_line_air_port_line_modal_air_port_line_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./air-port-line/air-port-line-modal/air-port-line-modal.component */ "./src/app/air-port-line/air-port-line-modal/air-port-line-modal.component.ts");
/* harmony import */ var _air_port_line_to_do_modal_to_do_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./air-port-line/to-do-modal/to-do-modal.component */ "./src/app/air-port-line/to-do-modal/to-do-modal.component.ts");
/* harmony import */ var _direction_direction_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./direction/direction.component */ "./src/app/direction/direction.component.ts");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/agm-direction.umd.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(agm_direction__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _direction_direction_modal_direction_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./direction/direction-modal/direction-modal.component */ "./src/app/direction/direction-modal/direction-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _day2_day2_detail_day2_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./day2/day2-detail/day2-detail.component */ "./src/app/day2/day2-detail/day2-detail.component.ts");
/* harmony import */ var _day2_day2_detail1_day2_detail1_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./day2/day2-detail1/day2-detail1.component */ "./src/app/day2/day2-detail1/day2-detail1.component.ts");
/* harmony import */ var _day3_day3_detail_day3_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./day3/day3-detail/day3-detail.component */ "./src/app/day3/day3-detail/day3-detail.component.ts");
/* harmony import */ var _day3_day3_detail1_day3_detail1_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./day3/day3-detail1/day3-detail1.component */ "./src/app/day3/day3-detail1/day3-detail1.component.ts");
/* harmony import */ var _day3_day3_detail2_day3_detail2_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./day3/day3-detail2/day3-detail2.component */ "./src/app/day3/day3-detail2/day3-detail2.component.ts");
/* harmony import */ var _day4_day4_detail_day4_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./day4/day4-detail/day4-detail.component */ "./src/app/day4/day4-detail/day4-detail.component.ts");
/* harmony import */ var _day5_day5_detail_day5_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./day5/day5-detail/day5-detail.component */ "./src/app/day5/day5-detail/day5-detail.component.ts");
/* harmony import */ var _day5_day5_detail1_day5_detail1_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./day5/day5-detail1/day5-detail1.component */ "./src/app/day5/day5-detail1/day5-detail1.component.ts");
/* harmony import */ var _air_port_line_air_port_line_modal2_air_port_line_modal2_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./air-port-line/air-port-line-modal2/air-port-line-modal2.component */ "./src/app/air-port-line/air-port-line-modal2/air-port-line-modal2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _day2_day2_component__WEBPACK_IMPORTED_MODULE_8__["Day2Component"],
                _day3_day3_component__WEBPACK_IMPORTED_MODULE_9__["Day3Component"],
                _day4_day4_component__WEBPACK_IMPORTED_MODULE_10__["Day4Component"],
                _day5_day5_component__WEBPACK_IMPORTED_MODULE_11__["Day5Component"],
                _apartment_apartment_component__WEBPACK_IMPORTED_MODULE_13__["ApartmentComponent"],
                _air_port_line_air_port_line_component__WEBPACK_IMPORTED_MODULE_14__["AirPortLineComponent"],
                _day2_day2_modal_day2_modal_component__WEBPACK_IMPORTED_MODULE_15__["Day2ModalComponent"],
                _day3_day3_modal_day3_modal_component__WEBPACK_IMPORTED_MODULE_16__["Day3ModalComponent"],
                _day4_day4_modal_day4_modal_component__WEBPACK_IMPORTED_MODULE_17__["Day4ModalComponent"],
                _day5_day5_modal_day5_modal_component__WEBPACK_IMPORTED_MODULE_18__["Day5ModalComponent"],
                _air_port_line_air_port_line_modal_air_port_line_modal_component__WEBPACK_IMPORTED_MODULE_19__["AirPortLineModalComponent"],
                _air_port_line_to_do_modal_to_do_modal_component__WEBPACK_IMPORTED_MODULE_20__["ToDoModalComponent"],
                _direction_direction_component__WEBPACK_IMPORTED_MODULE_21__["DirectionComponent"],
                _direction_direction_modal_direction_modal_component__WEBPACK_IMPORTED_MODULE_23__["DirectionModalComponent"],
                _day2_day2_detail_day2_detail_component__WEBPACK_IMPORTED_MODULE_26__["Day2DetailComponent"],
                _day2_day2_detail1_day2_detail1_component__WEBPACK_IMPORTED_MODULE_27__["Day2Detail1Component"],
                _day3_day3_detail_day3_detail_component__WEBPACK_IMPORTED_MODULE_28__["Day3DetailComponent"],
                _day3_day3_detail1_day3_detail1_component__WEBPACK_IMPORTED_MODULE_29__["Day3Detail1Component"],
                _day3_day3_detail2_day3_detail2_component__WEBPACK_IMPORTED_MODULE_30__["Day3Detail2Component"],
                _day4_day4_detail_day4_detail_component__WEBPACK_IMPORTED_MODULE_31__["Day4DetailComponent"],
                _day5_day5_detail_day5_detail_component__WEBPACK_IMPORTED_MODULE_32__["Day5DetailComponent"],
                _day5_day5_detail1_day5_detail1_component__WEBPACK_IMPORTED_MODULE_33__["Day5Detail1Component"],
                _air_port_line_air_port_line_modal2_air_port_line_modal2_component__WEBPACK_IMPORTED_MODULE_34__["AirPortLineModal2Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_7__["SharedMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientJsonpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBgkSTUKQ5NYL99GCmZrNPEaXEoNHi2Mq0',
                    language: 'zh-TW'
                }), agm_direction__WEBPACK_IMPORTED_MODULE_22__["AgmDirectionModule"]
            ],
            entryComponents: [_day2_day2_modal_day2_modal_component__WEBPACK_IMPORTED_MODULE_15__["Day2ModalComponent"], _day3_day3_modal_day3_modal_component__WEBPACK_IMPORTED_MODULE_16__["Day3ModalComponent"], _day4_day4_modal_day4_modal_component__WEBPACK_IMPORTED_MODULE_17__["Day4ModalComponent"], _day5_day5_modal_day5_modal_component__WEBPACK_IMPORTED_MODULE_18__["Day5ModalComponent"], _air_port_line_air_port_line_modal_air_port_line_modal_component__WEBPACK_IMPORTED_MODULE_19__["AirPortLineModalComponent"], _air_port_line_to_do_modal_to_do_modal_component__WEBPACK_IMPORTED_MODULE_20__["ToDoModalComponent"], _direction_direction_modal_direction_modal_component__WEBPACK_IMPORTED_MODULE_23__["DirectionModalComponent"], _day2_day2_detail_day2_detail_component__WEBPACK_IMPORTED_MODULE_26__["Day2DetailComponent"],
                _day2_day2_detail1_day2_detail1_component__WEBPACK_IMPORTED_MODULE_27__["Day2Detail1Component"],
                _day3_day3_detail_day3_detail_component__WEBPACK_IMPORTED_MODULE_28__["Day3DetailComponent"],
                _day3_day3_detail1_day3_detail1_component__WEBPACK_IMPORTED_MODULE_29__["Day3Detail1Component"],
                _day3_day3_detail2_day3_detail2_component__WEBPACK_IMPORTED_MODULE_30__["Day3Detail2Component"],
                _day4_day4_detail_day4_detail_component__WEBPACK_IMPORTED_MODULE_31__["Day4DetailComponent"],
                _day5_day5_detail_day5_detail_component__WEBPACK_IMPORTED_MODULE_32__["Day5DetailComponent"],
                _day5_day5_detail1_day5_detail1_component__WEBPACK_IMPORTED_MODULE_33__["Day5Detail1Component"], _air_port_line_air_port_line_modal2_air_port_line_modal2_component__WEBPACK_IMPORTED_MODULE_34__["AirPortLineModal2Component"]],
            providers: [_agm_core__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsAPIWrapper"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\" rowHeight=\"3:2\">\n  <mat-grid-tile *ngFor=\"let trip of trips;let i=index\" routerLink=\"/day{{i+1}}\" class=\"background-image\" [ngStyle]=\"{'background-image':'url('+trip.tripImg+')','background-repeat': 'no-repeat','background-size': '100% 100%'}\">\n    <h1>{{trip.tripName}}</h1>\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.trips = [
            { tripName: "京都", tripImg: "./assets/kyoto.jpg" },
            { tripName: "嵐山", tripImg: "./assets/arashi_yama.jpg" },
            { tripName: "奈良", tripImg: "./assets/nara.jpg" },
            { tripName: "京都", tripImg: "./assets/fushimi.jpg" },
            { tripName: "京都", tripImg: "./assets/kingaku.jpg" },
        ];
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/day2/day2-detail/day2-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/day2/day2-detail/day2-detail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/day2/day2-detail/day2-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/day2/day2-detail/day2-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n  待辦事項\n</h2>\n\n<mat-dialog-content class=\"post-form\">\n    <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\">馬堀搭至嵐山</mat-list-item>\n        <mat-list-item role=\"listitem\">步行至嵐電嵐山</mat-list-item>\n      </mat-list>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close color=\"warn\">取消</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/day2/day2-detail/day2-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/day2/day2-detail/day2-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: Day2DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day2DetailComponent", function() { return Day2DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day2DetailComponent = /** @class */ (function () {
    function Day2DetailComponent() {
    }
    Day2DetailComponent.prototype.ngOnInit = function () {
    };
    Day2DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day2-detail',
            template: __webpack_require__(/*! ./day2-detail.component.html */ "./src/app/day2/day2-detail/day2-detail.component.html"),
            styles: [__webpack_require__(/*! ./day2-detail.component.css */ "./src/app/day2/day2-detail/day2-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Day2DetailComponent);
    return Day2DetailComponent;
}());



/***/ }),

/***/ "./src/app/day2/day2-detail1/day2-detail1.component.css":
/*!**************************************************************!*\
  !*** ./src/app/day2/day2-detail1/day2-detail1.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/day2/day2-detail1/day2-detail1.component.html":
/*!***************************************************************!*\
  !*** ./src/app/day2/day2-detail1/day2-detail1.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n  待辦事項\n</h2>\n\n<mat-dialog-content class=\"post-form\">\n    <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\">附近吃飯，之後可沿腳踏車路線騎車或車站附近逛街</mat-list-item>\n        <mat-list-item role=\"listitem\"></mat-list-item>\n        <mat-list-item role=\"listitem\">租借費用約¥1000~1500，情況允許建議電動，營業時間通常到5點</mat-list-item>\n        <mat-list-item role=\"listitem\"></mat-list-item>\n        <mat-list-item role=\"listitem\">貓咪之森門票大人/小孩:¥780/¥580，半小時</mat-list-item>\n      </mat-list>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close color=\"warn\">取消</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/day2/day2-detail1/day2-detail1.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/day2/day2-detail1/day2-detail1.component.ts ***!
  \*************************************************************/
/*! exports provided: Day2Detail1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day2Detail1Component", function() { return Day2Detail1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day2Detail1Component = /** @class */ (function () {
    function Day2Detail1Component() {
    }
    Day2Detail1Component.prototype.ngOnInit = function () {
    };
    Day2Detail1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day2-detail1',
            template: __webpack_require__(/*! ./day2-detail1.component.html */ "./src/app/day2/day2-detail1/day2-detail1.component.html"),
            styles: [__webpack_require__(/*! ./day2-detail1.component.css */ "./src/app/day2/day2-detail1/day2-detail1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Day2Detail1Component);
    return Day2Detail1Component;
}());



/***/ }),

/***/ "./src/app/day2/day2-modal/day2-modal.component.css":
/*!**********************************************************!*\
  !*** ./src/app/day2/day2-modal/day2-modal.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .mat-dialog-title{\r\n    min-width: 300px;\r\n  }\r\n  .mat-progress-bar{\r\n    width: 100px;\r\n    -webkit-transform: rotate(270deg);\r\n            transform: rotate(270deg);\r\n}\r\n  h4{\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/day2/day2-modal/day2-modal.component.html":
/*!***********************************************************!*\
  !*** ./src/app/day2/day2-modal/day2-modal.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>\n</h1>\n<mat-dialog-content class=\"post-form\">\n  <mat-grid-list cols=\"5\" rowHeight=\"50px\">\n    <!-- 1 -->\n    <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n      <h4 class=\"icon-part\">\n        <div>東福寺</div>\n        <mat-icon color=\"accent\">directions_subway</mat-icon>\n      </h4>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      <h5 class=\"\">\n        <div>奈良(JR)</div>\n        <div>(0:03)</div>\n        <div>¥140</div>\n      </h5>\n    </mat-grid-tile>\n    <mat-grid-tile gutterSize=\"5px\">\n      <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n    </mat-grid-tile>\n    <!-- 2 -->\n    <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n      <h4 class=\"icon-part\">\n        <div>京都駅</div>\n        <mat-icon color=\"accent\">directions_subway</mat-icon>\n      </h4>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      <h5 class=\"\">\n        <div>山陰本線</div>\n        <div>(0:40)</div>\n        <div>¥280</div>\n      </h5>\n    </mat-grid-tile>\n    <mat-grid-tile gutterSize=\"5px\">\n      <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n      <h4 class=\"icon-part\">\n        <div>馬堀</div>\n        <mat-icon color=\"accent\">directions_subway</mat-icon>\n      </h4>\n    </mat-grid-tile>\n  </mat-grid-list>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close color=\"warn\">關閉</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/day2/day2-modal/day2-modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/day2/day2-modal/day2-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: Day2ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day2ModalComponent", function() { return Day2ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day2ModalComponent = /** @class */ (function () {
    function Day2ModalComponent() {
    }
    Day2ModalComponent.prototype.ngOnInit = function () {
    };
    Day2ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day2-modal',
            template: __webpack_require__(/*! ./day2-modal.component.html */ "./src/app/day2/day2-modal/day2-modal.component.html"),
            styles: [__webpack_require__(/*! ./day2-modal.component.css */ "./src/app/day2/day2-modal/day2-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Day2ModalComponent);
    return Day2ModalComponent;
}());



/***/ }),

/***/ "./src/app/day2/day2.component.css":
/*!*****************************************!*\
  !*** ./src/app/day2/day2.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 100%;\r\n    width: 99.5%;\r\n}\r\n.mat-progress-bar{\r\n    width: 100px;\r\n}\r\n.tool{\r\n    flex: 1 1 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/day2/day2.component.html":
/*!******************************************!*\
  !*** ./src/app/day2/day2.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list rowHeight=\"50px\" cols=\"3\">\n  <mat-grid-tile colspan=\"3\" rowspan=\"8\" gutterSize=\"5px\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoomValue\" [gestureHandling]=\"gestureHandling\">\n      <div *ngIf=\"isRoute\">\n        <agm-data-layer [geoJson]=\"bikeJson\"></agm-data-layer>\n      </div>\n      <div *ngIf=\"isLocation\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"iconUrl\">\n        </agm-marker>\n      </div>\n      <div *ngIf=\"isSpot\">\n        <agm-marker *ngFor=\"let m of markers\" [latitude]=\"m.lat\" [longitude]=\"m.lng\">\n          <agm-info-window>\n            <strong style=\"color: black\">{{m.label}}</strong>\n          </agm-info-window>\n        </agm-marker>\n      </div>\n    </agm-map>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <div>\n      <button (click)=\"showGps()\" mat-mini-fab color=\"primary\">\n        <mat-icon>gps_fixed</mat-icon>\n      </button>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <mat-slide-toggle color=\"primary\" (change)=\"showRoute($event)\">腳踏車路線</mat-slide-toggle>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <div>\n      <button (click)=\"openDialog()\" mat-mini-fab color=\"warn\">\n        <mat-icon>map</mat-icon>\n      </button>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile (click)=\"changeLatLng(35.012598,135.607218)\" rowspan=\"2\" [ngStyle]=\"{'background-image':'url(./assets/little_train.jpg)','background-repeat': 'no-repeat','background-size': '100% 100%'}\"\n    colspan=\"2\">\n    <h2>嵐山小火車</h2>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\">\n    <button (click)=\"openToDoDialog()\" mat-mini-fab color=\"warn\">\n      <mat-icon>assignment</mat-icon>\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile (click)=\"changeLatLng(35.015127,135.677728)\" rowspan=\"2\" [ngStyle]=\"{'background-image':'url(./assets/arashi_yama.jpg)','background-repeat': 'no-repeat','background-size': '100% 100%'}\"\n    colspan=\"2\">\n    <h2>嵐山</h2>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\">\n    <button (click)=\"openToDoDialog1()\" mat-mini-fab color=\"warn\">\n      <mat-icon>assignment</mat-icon>\n    </button>\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/day2/day2.component.ts":
/*!****************************************!*\
  !*** ./src/app/day2/day2.component.ts ***!
  \****************************************/
/*! exports provided: Day2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day2Component", function() { return Day2Component; });
/* harmony import */ var _day2_detail_day2_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day2-detail/day2-detail.component */ "./src/app/day2/day2-detail/day2-detail.component.ts");
/* harmony import */ var _day2_modal_day2_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day2-modal/day2-modal.component */ "./src/app/day2/day2-modal/day2-modal.component.ts");
/* harmony import */ var _model_spots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../model/spots */ "./src/app/model/spots.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _day2_detail1_day2_detail1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./day2-detail1/day2-detail1.component */ "./src/app/day2/day2-detail1/day2-detail1.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Day2Component = /** @class */ (function () {
    function Day2Component(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.lat = 35.015127;
        this.lng = 135.677728;
        this.zoomValue = 16;
        this.iconUrl = "./assets/gps.gif";
        this.geojson = './assets/bike.json';
        this.isLocation = false;
        this.isSpot = true;
        this.isRoute = false;
        this.gestureHandling = 'greedy';
        this.bikeJson = null;
    }
    Day2Component.prototype.getGeoJsonLayer = function () {
        return this.httpClient.get(this.geojson).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res;
        }));
    };
    Day2Component.prototype.getSpots = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(_model_spots__WEBPACK_IMPORTED_MODULE_2__["spots"]);
    };
    Day2Component.prototype.showGps = function () {
        var _this = this;
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 1000
            };
            this.watch = navigator.geolocation.watchPosition(function (pos) {
                _this.lng = +pos.coords.longitude;
                _this.lat = +pos.coords.latitude;
                console.log("watch");
                var id = _this.watch;
                var stops = document.getElementsByClassName("side");
                for (var i = 0; i < stops.length; i++) {
                    stops[i].addEventListener('click', function () {
                        navigator.geolocation.clearWatch(id);
                        console.log("clear");
                    });
                }
            }, null, options);
        }
        this.isLocation = true;
    };
    Day2Component.prototype.showRoute = function (event) {
        var _this = this;
        if (event.checked) {
            this.getGeoJsonLayer().subscribe(function (result) {
                _this.bikeJson = result;
                _this.isRoute = true;
            });
        }
        else {
            this.bikeJson = null;
            this.isRoute = false;
        }
    };
    Day2Component.prototype.openDialog = function () {
        this.dialog.open(_day2_modal_day2_modal_component__WEBPACK_IMPORTED_MODULE_1__["Day2ModalComponent"]);
    };
    Day2Component.prototype.changeLatLng = function (lat, lng) {
        this.lat = +lat;
        this.lng = +lng;
    };
    Day2Component.prototype.openToDoDialog = function () {
        this.dialog.open(_day2_detail_day2_detail_component__WEBPACK_IMPORTED_MODULE_0__["Day2DetailComponent"]);
    };
    Day2Component.prototype.openToDoDialog1 = function () {
        this.dialog.open(_day2_detail1_day2_detail1_component__WEBPACK_IMPORTED_MODULE_8__["Day2Detail1Component"]);
    };
    Day2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.getGeoJsonLayer().subscribe(function (result) {
            _this.bikeJson = result;
            // this.markers = spots;
        });
        this.getSpots().subscribe(function (spots) { _this.markers = spots; });
    };
    Day2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-day2',
            template: __webpack_require__(/*! ./day2.component.html */ "./src/app/day2/day2.component.html"),
            styles: [__webpack_require__(/*! ./day2.component.css */ "./src/app/day2/day2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], Day2Component);
    return Day2Component;
}());



/***/ }),

/***/ "./src/app/day3/day3-detail/day3-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/day3/day3-detail/day3-detail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/day3/day3-detail/day3-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/day3/day3-detail/day3-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n    待辦事項\n  </h2>\n  \n  <mat-dialog-content class=\"post-form\">\n      <mat-list role=\"list\">\n          <mat-list-item role=\"listitem\">早上至奈良公園、東大社、春日神社</mat-list-item>\n          <mat-list-item role=\"listitem\">中午前往宇治</mat-list-item>\n        </mat-list>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-button mat-dialog-close color=\"warn\">取消</button>\n  </mat-dialog-actions>"

/***/ }),

/***/ "./src/app/day3/day3-detail/day3-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/day3/day3-detail/day3-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: Day3DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day3DetailComponent", function() { return Day3DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day3DetailComponent = /** @class */ (function () {
    function Day3DetailComponent() {
    }
    Day3DetailComponent.prototype.ngOnInit = function () {
    };
    Day3DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day3-detail',
            template: __webpack_require__(/*! ./day3-detail.component.html */ "./src/app/day3/day3-detail/day3-detail.component.html"),
            styles: [__webpack_require__(/*! ./day3-detail.component.css */ "./src/app/day3/day3-detail/day3-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Day3DetailComponent);
    return Day3DetailComponent;
}());



/***/ }),

/***/ "./src/app/day3/day3-detail1/day3-detail1.component.css":
/*!**************************************************************!*\
  !*** ./src/app/day3/day3-detail1/day3-detail1.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/day3/day3-detail1/day3-detail1.component.html":
/*!***************************************************************!*\
  !*** ./src/app/day3/day3-detail1/day3-detail1.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n    待辦事項\n  </h2>\n  \n  <mat-dialog-content class=\"post-form\">\n      <mat-list role=\"list\">\n          <mat-list-item role=\"listitem\">沿著表參道至橘島在至宇治神社觀光最後至奈良線宇治駅搭車</mat-list-item>\n          <mat-list-item role=\"listitem\">表參道起點有中村藤吉本店，可於一開始排隊看排隊時間進行散步</mat-list-item>\n        </mat-list>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-button mat-dialog-close color=\"warn\">取消</button>\n  </mat-dialog-actions> "

/***/ }),

/***/ "./src/app/day3/day3-detail1/day3-detail1.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/day3/day3-detail1/day3-detail1.component.ts ***!
  \*************************************************************/
/*! exports provided: Day3Detail1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day3Detail1Component", function() { return Day3Detail1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day3Detail1Component = /** @class */ (function () {
    function Day3Detail1Component() {
    }
    Day3Detail1Component.prototype.ngOnInit = function () {
    };
    Day3Detail1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day3-detail1',
            template: __webpack_require__(/*! ./day3-detail1.component.html */ "./src/app/day3/day3-detail1/day3-detail1.component.html"),
            styles: [__webpack_require__(/*! ./day3-detail1.component.css */ "./src/app/day3/day3-detail1/day3-detail1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Day3Detail1Component);
    return Day3Detail1Component;
}());



/***/ }),

/***/ "./src/app/day3/day3-detail2/day3-detail2.component.css":
/*!**************************************************************!*\
  !*** ./src/app/day3/day3-detail2/day3-detail2.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/day3/day3-detail2/day3-detail2.component.html":
/*!***************************************************************!*\
  !*** ./src/app/day3/day3-detail2/day3-detail2.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n    待辦事項\n  </h2>\n  \n  <mat-dialog-content class=\"post-form\">\n      <mat-list role=\"list\">\n          <mat-list-item role=\"listitem\">時間允許可順路再去稻和神社，補足上次沒有觀賞完</mat-list-item>\n        </mat-list>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-button mat-dialog-close color=\"warn\">取消</button>\n  </mat-dialog-actions> "

/***/ }),

/***/ "./src/app/day3/day3-detail2/day3-detail2.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/day3/day3-detail2/day3-detail2.component.ts ***!
  \*************************************************************/
/*! exports provided: Day3Detail2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day3Detail2Component", function() { return Day3Detail2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day3Detail2Component = /** @class */ (function () {
    function Day3Detail2Component() {
    }
    Day3Detail2Component.prototype.ngOnInit = function () {
    };
    Day3Detail2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day3-detail2',
            template: __webpack_require__(/*! ./day3-detail2.component.html */ "./src/app/day3/day3-detail2/day3-detail2.component.html"),
            styles: [__webpack_require__(/*! ./day3-detail2.component.css */ "./src/app/day3/day3-detail2/day3-detail2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Day3Detail2Component);
    return Day3Detail2Component;
}());



/***/ }),

/***/ "./src/app/day3/day3-modal/day3-modal.component.css":
/*!**********************************************************!*\
  !*** ./src/app/day3/day3-modal/day3-modal.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .mat-dialog-title{\r\n    min-width: 300px;\r\n  }\r\n  .mat-progress-bar{\r\n    width: 100px;\r\n    -webkit-transform: rotate(270deg);\r\n            transform: rotate(270deg);\r\n}\r\n  h4{\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/day3/day3-modal/day3-modal.component.html":
/*!***********************************************************!*\
  !*** ./src/app/day3/day3-modal/day3-modal.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>\n</h1>\n<mat-dialog-content class=\"post-form\">\n  <mat-grid-list cols=\"5\" rowHeight=\"50px\">\n    <!-- 1 -->\n    <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n      <h4 class=\"icon-part\">\n        <div>東福寺</div>\n        <mat-icon color=\"accent\">directions_subway</mat-icon>\n      </h4>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      <h5 class=\"\">\n        <div>奈良(JR)</div>\n        <div>(0:03)</div>\n        <div>¥140</div>\n      </h5>\n    </mat-grid-tile>\n    <mat-grid-tile gutterSize=\"5px\">\n      <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n    </mat-grid-tile>\n    <!-- 2 -->\n    <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n      <h4 class=\"icon-part\">\n        <div>京都駅</div>\n        <mat-icon color=\"accent\">directions_subway</mat-icon>\n      </h4>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      <h5 class=\"\">\n        <div>近鐵特急</div>\n        <div>(1:15)</div>\n        <div>¥1000</div>\n      </h5>\n    </mat-grid-tile>\n    <mat-grid-tile gutterSize=\"5px\">\n      <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n    </mat-grid-tile>\n    <!-- 3 -->\n    <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n      <h4 class=\"icon-part\">\n        <div>近鐵奈良</div>\n        <mat-icon color=\"accent\">directions_subway</mat-icon>\n      </h4>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      <h5 class=\"\">\n        <div>近鐵京都</div>\n        <div>(0:30)</div>\n        <div>¥650</div>\n      </h5>\n    </mat-grid-tile>\n    <mat-grid-tile gutterSize=\"5px\">\n      <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n    </mat-grid-tile>\n    <!-- 4 -->\n    <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n      <h4 class=\"icon-part\">\n        <div>近鐵大久保</div>\n        <mat-icon color=\"accent\">directions_subway</mat-icon>\n      </h4>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      <h5 class=\"\">\n        <div>大久保淀線21</div>\n        <div>(0:12)</div>\n        <div>¥210</div>\n      </h5>\n    </mat-grid-tile>\n    <mat-grid-tile gutterSize=\"5px\">\n      <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n    </mat-grid-tile>\n    <!-- 5 -->\n    <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n      <h4 class=\"icon-part\">\n        <div>宇治橋西詰</div>\n        <mat-icon color=\"accent\">directions_bus</mat-icon>\n      </h4>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n      <h4 class=\"icon-part\">\n        <div>宇治(京都)</div>\n        <mat-icon color=\"accent\">directions_subway</mat-icon>\n      </h4>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      <h5 class=\"\">\n        <div>奈良線(JR)</div>\n        <div>(0:34)</div>\n        <div>¥240</div>\n      </h5>\n    </mat-grid-tile>\n    <mat-grid-tile gutterSize=\"5px\">\n      <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n      <h4 class=\"icon-part\">\n        <div>稻荷車站</div>\n        <mat-icon color=\"accent\">directions_subway</mat-icon>\n      </h4>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      <h5 class=\"\">\n        <div>奈良線(JR)</div>\n        <div>(0:05)</div>\n        <div>¥140</div>\n      </h5>\n    </mat-grid-tile>\n    <mat-grid-tile gutterSize=\"5px\">\n      <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n    </mat-grid-tile>\n    <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n      <h4 class=\"icon-part\">\n        <div>東福寺</div>\n        <mat-icon color=\"accent\">directions_subway</mat-icon>\n      </h4>\n    </mat-grid-tile>\n    \n  </mat-grid-list>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close color=\"warn\">關閉</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/day3/day3-modal/day3-modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/day3/day3-modal/day3-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: Day3ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day3ModalComponent", function() { return Day3ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day3ModalComponent = /** @class */ (function () {
    function Day3ModalComponent() {
    }
    Day3ModalComponent.prototype.ngOnInit = function () {
    };
    Day3ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day3-modal',
            template: __webpack_require__(/*! ./day3-modal.component.html */ "./src/app/day3/day3-modal/day3-modal.component.html"),
            styles: [__webpack_require__(/*! ./day3-modal.component.css */ "./src/app/day3/day3-modal/day3-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Day3ModalComponent);
    return Day3ModalComponent;
}());



/***/ }),

/***/ "./src/app/day3/day3.component.css":
/*!*****************************************!*\
  !*** ./src/app/day3/day3.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 100%;\r\n    width: 99.5%;\r\n}\r\n.mat-progress-bar{\r\n    width: 90px;\r\n}"

/***/ }),

/***/ "./src/app/day3/day3.component.html":
/*!******************************************!*\
  !*** ./src/app/day3/day3.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list rowHeight=\"50px\" cols=\"3\">\n  <mat-grid-tile colspan=\"3\" rowspan=\"8\" gutterSize=\"5px\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoomValue\" [gestureHandling]=\"gestureHandling\">\n      <div *ngIf=\"isLocation\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"iconUrl\">\n        </agm-marker>\n      </div>\n      <div *ngIf=\"isSpot\">\n        <agm-marker *ngFor=\"let m of markers\" [latitude]=\"m.lat\" [longitude]=\"m.lng\">\n          <agm-info-window>\n            <strong style=\"color: black\">{{m.label}}</strong>\n          </agm-info-window>\n        </agm-marker>\n      </div>\n    </agm-map>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <div>\n      <button (click)=\"showGps()\" mat-mini-fab color=\"primary\">\n        <mat-icon>gps_fixed</mat-icon>\n      </button>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <div>\n      <button (click)=\"openDialog()\" mat-mini-fab color=\"warn\">\n        <mat-icon>map</mat-icon>\n      </button>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\" (click)=\"changeLatLng(34.684458,135.835433)\" [ngStyle]=\"{'background-image':'url(./assets/nara.jpg)','background-repeat': 'no-repeat','background-size': '100% 100%'}\"\n    colspan=\"2\">\n    <h2>奈良</h2>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\">\n    <button (click)=\"openToDoDialog()\" mat-mini-fab color=\"warn\">\n      <mat-icon>assignment</mat-icon>\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\" (click)=\"changeLatLng(34.891111,135.806665)\" [ngStyle]=\"{'background-image':'url(./assets/uji.jpg)','background-repeat': 'no-repeat','background-size': '100% 100%'}\"\n    colspan=\"2\">\n    <h2>宇治</h2>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\">\n    <button (click)=\"openToDoDialog1()\" mat-mini-fab color=\"warn\">\n      <mat-icon>assignment</mat-icon>\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\" (click)=\"changeLatLng(34.967123,135.772629)\" [ngStyle]=\"{'background-image':'url(./assets/fushimi.jpg)','background-repeat': 'no-repeat','background-size': '100% 100%'}\"\n    colspan=\"2\">\n    <h2>稻荷神社</h2>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\">\n    <button (click)=\"openToDoDialog2()\" mat-mini-fab color=\"warn\">\n      <mat-icon>assignment</mat-icon>\n    </button>\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/day3/day3.component.ts":
/*!****************************************!*\
  !*** ./src/app/day3/day3.component.ts ***!
  \****************************************/
/*! exports provided: Day3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day3Component", function() { return Day3Component; });
/* harmony import */ var _day3_detail2_day3_detail2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day3-detail2/day3-detail2.component */ "./src/app/day3/day3-detail2/day3-detail2.component.ts");
/* harmony import */ var _day3_detail_day3_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day3-detail/day3-detail.component */ "./src/app/day3/day3-detail/day3-detail.component.ts");
/* harmony import */ var _day3_detail1_day3_detail1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day3-detail1/day3-detail1.component */ "./src/app/day3/day3-detail1/day3-detail1.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _day3_modal_day3_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day3-modal/day3-modal.component */ "./src/app/day3/day3-modal/day3-modal.component.ts");
/* harmony import */ var _model_spots__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../model/spots */ "./src/app/model/spots.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Day3Component = /** @class */ (function () {
    function Day3Component(dialog) {
        this.dialog = dialog;
        this.lat = 34.684458;
        this.lng = 135.835433;
        this.zoomValue = 14;
        this.iconUrl = "./assets/gps.gif";
        this.geojson = './assets/bike.json';
        this.isLocation = false;
        this.isSpot = true;
        this.gestureHandling = 'greedy';
    }
    Day3Component.prototype.showGps = function () {
        var _this = this;
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 1000
            };
            this.watch = navigator.geolocation.watchPosition(function (pos) {
                _this.lng = +pos.coords.longitude;
                _this.lat = +pos.coords.latitude;
                console.log("watch");
                var id = _this.watch;
                var stops = document.getElementsByClassName("side");
                for (var i = 0; i < stops.length; i++) {
                    stops[i].addEventListener('click', function () {
                        navigator.geolocation.clearWatch(id);
                        console.log("clear");
                    });
                }
            }, null, options);
        }
        this.isLocation = true;
    };
    Day3Component.prototype.openDialog = function () {
        this.dialog.open(_day3_modal_day3_modal_component__WEBPACK_IMPORTED_MODULE_5__["Day3ModalComponent"]);
    };
    Day3Component.prototype.getSpots = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_model_spots__WEBPACK_IMPORTED_MODULE_6__["spots"]);
    };
    Day3Component.prototype.changeLatLng = function (lat, lng) {
        this.lat = +lat;
        this.lng = +lng;
    };
    Day3Component.prototype.openToDoDialog = function () {
        this.dialog.open(_day3_detail_day3_detail_component__WEBPACK_IMPORTED_MODULE_1__["Day3DetailComponent"]);
    };
    Day3Component.prototype.openToDoDialog1 = function () {
        this.dialog.open(_day3_detail1_day3_detail1_component__WEBPACK_IMPORTED_MODULE_2__["Day3Detail1Component"]);
    };
    Day3Component.prototype.openToDoDialog2 = function () {
        this.dialog.open(_day3_detail2_day3_detail2_component__WEBPACK_IMPORTED_MODULE_0__["Day3Detail2Component"]);
    };
    Day3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.getSpots().subscribe(function (spots) { _this.markers = spots; });
    };
    Day3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-day3',
            template: __webpack_require__(/*! ./day3.component.html */ "./src/app/day3/day3.component.html"),
            styles: [__webpack_require__(/*! ./day3.component.css */ "./src/app/day3/day3.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], Day3Component);
    return Day3Component;
}());



/***/ }),

/***/ "./src/app/day4/day4-detail/day4-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/day4/day4-detail/day4-detail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/day4/day4-detail/day4-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/day4/day4-detail/day4-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n  待辦事項\n</h2>\n\n<mat-dialog-content class=\"post-form\">\n    <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\">從祇園沿著花見小路可一路逛至清水五條</mat-list-item>\n      </mat-list>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close color=\"warn\">取消</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/day4/day4-detail/day4-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/day4/day4-detail/day4-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: Day4DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day4DetailComponent", function() { return Day4DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day4DetailComponent = /** @class */ (function () {
    function Day4DetailComponent() {
    }
    Day4DetailComponent.prototype.ngOnInit = function () {
    };
    Day4DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day4-detail',
            template: __webpack_require__(/*! ./day4-detail.component.html */ "./src/app/day4/day4-detail/day4-detail.component.html"),
            styles: [__webpack_require__(/*! ./day4-detail.component.css */ "./src/app/day4/day4-detail/day4-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Day4DetailComponent);
    return Day4DetailComponent;
}());



/***/ }),

/***/ "./src/app/day4/day4-modal/day4-modal.component.css":
/*!**********************************************************!*\
  !*** ./src/app/day4/day4-modal/day4-modal.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .mat-dialog-title{\r\n    min-width: 300px;\r\n  }\r\n  .mat-progress-bar{\r\n    width: 100px;\r\n    -webkit-transform: rotate(270deg);\r\n            transform: rotate(270deg);\r\n}\r\n  h4{\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/day4/day4-modal/day4-modal.component.html":
/*!***********************************************************!*\
  !*** ./src/app/day4/day4-modal/day4-modal.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>\n  </h1>\n  <mat-dialog-content class=\"post-form\">\n    <mat-grid-list cols=\"5\" rowHeight=\"50px\">\n      <!-- 1 -->\n      <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n        <h4 class=\"icon-part\">\n          <div>東福寺</div>\n          <mat-icon color=\"accent\">directions_subway</mat-icon>\n        </h4>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n        <h5 class=\"\">\n          <div>京阪本線</div>\n          <div>(0:05)</div>\n          <div>¥150</div>\n        </h5>\n      </mat-grid-tile>\n      <mat-grid-tile gutterSize=\"5px\">\n        <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      </mat-grid-tile>\n      <!-- 2 -->\n      <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n        <h4 class=\"icon-part\">\n          <div>祇園四條</div>\n          <mat-icon color=\"accent\">directions_subway</mat-icon>\n        </h4>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-button mat-dialog-close color=\"warn\">關閉</button>\n  </mat-dialog-actions>"

/***/ }),

/***/ "./src/app/day4/day4-modal/day4-modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/day4/day4-modal/day4-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: Day4ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day4ModalComponent", function() { return Day4ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day4ModalComponent = /** @class */ (function () {
    function Day4ModalComponent() {
    }
    Day4ModalComponent.prototype.ngOnInit = function () {
    };
    Day4ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day4-modal',
            template: __webpack_require__(/*! ./day4-modal.component.html */ "./src/app/day4/day4-modal/day4-modal.component.html"),
            styles: [__webpack_require__(/*! ./day4-modal.component.css */ "./src/app/day4/day4-modal/day4-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Day4ModalComponent);
    return Day4ModalComponent;
}());



/***/ }),

/***/ "./src/app/day4/day4.component.css":
/*!*****************************************!*\
  !*** ./src/app/day4/day4.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 100%;\r\n    width: 99.5%;\r\n}\r\n.mat-progress-bar{\r\n    width: 100px;\r\n}"

/***/ }),

/***/ "./src/app/day4/day4.component.html":
/*!******************************************!*\
  !*** ./src/app/day4/day4.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list rowHeight=\"50px\" cols=\"3\">\n  <mat-grid-tile colspan=\"3\" rowspan=\"8\" gutterSize=\"5px\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoomValue\" [gestureHandling]=\"gestureHandling\">\n      <div *ngIf=\"isLocation\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"iconUrl\">\n        </agm-marker>\n      </div>\n      <div *ngIf=\"isSpot\">\n        <agm-marker *ngFor=\"let m of markers\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" >\n          <agm-info-window>\n            <strong style=\"color: black\">{{m.label}}</strong>\n          </agm-info-window>\n        </agm-marker>\n      </div>\n      <div *ngIf=\"isFood\">\n        <agm-marker *ngFor=\"let m of foods\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" [iconUrl]=\"m.icon\">\n          <agm-info-window>\n            <strong  style=\"color: black;\">{{m.label}}</strong>\n          </agm-info-window>\n        </agm-marker>\n      </div>\n    </agm-map>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <div>\n      <button (click)=\"showGps()\" mat-mini-fab color=\"primary\">\n        <mat-icon>gps_fixed</mat-icon>\n      </button>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n      <mat-slide-toggle color=\"primary\" (change)=\"showFood($event)\">餐廳</mat-slide-toggle>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <div>\n      <button (click)=\"openDialog()\" mat-mini-fab color=\"warn\">\n        <mat-icon>map</mat-icon>\n      </button>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\" [ngStyle]=\"{'background-image':'url(./assets/kyoto.jpg)','background-repeat': 'no-repeat','background-size': '100% 100%'}\"\n    colspan=\"2\">\n    <h2>京都</h2>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\">\n    <button (click)=\"openToDoDialog()\" mat-mini-fab color=\"warn\">\n      <mat-icon>assignment</mat-icon>\n    </button>\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/day4/day4.component.ts":
/*!****************************************!*\
  !*** ./src/app/day4/day4.component.ts ***!
  \****************************************/
/*! exports provided: Day4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day4Component", function() { return Day4Component; });
/* harmony import */ var _model_sweets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../model/sweets */ "./src/app/model/sweets.ts");
/* harmony import */ var _day4_detail_day4_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day4-detail/day4-detail.component */ "./src/app/day4/day4-detail/day4-detail.component.ts");
/* harmony import */ var _day4_modal_day4_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day4-modal/day4-modal.component */ "./src/app/day4/day4-modal/day4-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_spots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../model/spots */ "./src/app/model/spots.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/// <reference types="googlemaps" />






var Day4Component = /** @class */ (function () {
    function Day4Component(dialog) {
        this.dialog = dialog;
        this.lat = 34.999287;
        this.lng = 135.771442;
        this.zoomValue = 14;
        this.iconUrl = "./assets/gps.gif";
        this.geojson = './assets/bike.json';
        this.isLocation = false;
        this.isSpot = true;
        this.isFood = false;
        this.gestureHandling = 'greedy';
    }
    Day4Component.prototype.showGps = function () {
        var _this = this;
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 1000
            };
            this.watch = navigator.geolocation.watchPosition(function (pos) {
                _this.lng = +pos.coords.longitude;
                _this.lat = +pos.coords.latitude;
                console.log("watch");
                var id = _this.watch;
                var stops = document.getElementsByClassName("side");
                for (var i = 0; i < stops.length; i++) {
                    stops[i].addEventListener('click', function () {
                        navigator.geolocation.clearWatch(id);
                        console.log("clear");
                    });
                }
            }, null, options);
        }
        this.isLocation = true;
    };
    Day4Component.prototype.showFood = function (event) {
        if (event.checked) {
            this.isFood = true;
        }
        else {
            this.isFood = false;
        }
    };
    Day4Component.prototype.openDialog = function () {
        this.dialog.open(_day4_modal_day4_modal_component__WEBPACK_IMPORTED_MODULE_2__["Day4ModalComponent"]);
    };
    Day4Component.prototype.getSpots = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_model_spots__WEBPACK_IMPORTED_MODULE_4__["spots"]);
    };
    Day4Component.prototype.getFoods = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_model_sweets__WEBPACK_IMPORTED_MODULE_0__["sweets"]);
    };
    Day4Component.prototype.openToDoDialog = function () {
        this.dialog.open(_day4_detail_day4_detail_component__WEBPACK_IMPORTED_MODULE_1__["Day4DetailComponent"]);
    };
    Day4Component.prototype.ngOnInit = function () {
        var _this = this;
        this.getSpots().subscribe(function (spots) { _this.markers = spots; });
        this.getFoods().subscribe(function (sweets) { _this.foods = sweets; });
    };
    Day4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-day4',
            template: __webpack_require__(/*! ./day4.component.html */ "./src/app/day4/day4.component.html"),
            styles: [__webpack_require__(/*! ./day4.component.css */ "./src/app/day4/day4.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], Day4Component);
    return Day4Component;
}());



/***/ }),

/***/ "./src/app/day5/day5-detail/day5-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/day5/day5-detail/day5-detail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/day5/day5-detail/day5-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/day5/day5-detail/day5-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n  待辦事項\n</h2>\n\n<mat-dialog-content class=\"post-form\">\n    <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\">將行李寄放</mat-list-item>\n        <mat-list-item role=\"listitem\">先至車站購買巴士一日券</mat-list-item>\n        <mat-list-item role=\"listitem\">早上可先在水族館觀光吃飯，門票大人¥2050 /小孩¥600</mat-list-item>\n        <mat-list-item role=\"listitem\">下午前往金閣寺</mat-list-item>\n      </mat-list>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close color=\"warn\">取消</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/day5/day5-detail/day5-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/day5/day5-detail/day5-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: Day5DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day5DetailComponent", function() { return Day5DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day5DetailComponent = /** @class */ (function () {
    function Day5DetailComponent() {
    }
    Day5DetailComponent.prototype.ngOnInit = function () {
    };
    Day5DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day5-detail',
            template: __webpack_require__(/*! ./day5-detail.component.html */ "./src/app/day5/day5-detail/day5-detail.component.html"),
            styles: [__webpack_require__(/*! ./day5-detail.component.css */ "./src/app/day5/day5-detail/day5-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Day5DetailComponent);
    return Day5DetailComponent;
}());



/***/ }),

/***/ "./src/app/day5/day5-detail1/day5-detail1.component.css":
/*!**************************************************************!*\
  !*** ./src/app/day5/day5-detail1/day5-detail1.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/day5/day5-detail1/day5-detail1.component.html":
/*!***************************************************************!*\
  !*** ./src/app/day5/day5-detail1/day5-detail1.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n  待辦事項\n</h2>\n\n<mat-dialog-content class=\"post-form\">\n    <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\">門票大人¥400 / 小孩¥300</mat-list-item>\n        <mat-list-item role=\"listitem\">傍晚返回京都車站吃飯完搭車至機場</mat-list-item>\n      </mat-list>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close color=\"warn\">取消</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/day5/day5-detail1/day5-detail1.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/day5/day5-detail1/day5-detail1.component.ts ***!
  \*************************************************************/
/*! exports provided: Day5Detail1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day5Detail1Component", function() { return Day5Detail1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day5Detail1Component = /** @class */ (function () {
    function Day5Detail1Component() {
    }
    Day5Detail1Component.prototype.ngOnInit = function () {
    };
    Day5Detail1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day5-detail1',
            template: __webpack_require__(/*! ./day5-detail1.component.html */ "./src/app/day5/day5-detail1/day5-detail1.component.html"),
            styles: [__webpack_require__(/*! ./day5-detail1.component.css */ "./src/app/day5/day5-detail1/day5-detail1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Day5Detail1Component);
    return Day5Detail1Component;
}());



/***/ }),

/***/ "./src/app/day5/day5-modal/day5-modal.component.css":
/*!**********************************************************!*\
  !*** ./src/app/day5/day5-modal/day5-modal.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .mat-dialog-title{\r\n    min-width: 300px;\r\n  }\r\n  .mat-progress-bar{\r\n    width: 100px;\r\n    -webkit-transform: rotate(270deg);\r\n            transform: rotate(270deg);\r\n}\r\n  h4{\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/day5/day5-modal/day5-modal.component.html":
/*!***********************************************************!*\
  !*** ./src/app/day5/day5-modal/day5-modal.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>\n  </h1>\n  <mat-dialog-content class=\"post-form\">\n    <mat-grid-list cols=\"5\" rowHeight=\"50px\">\n      <!-- 1 -->\n      <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n        <h4 class=\"icon-part\">\n          <div>東福寺</div>\n          <mat-icon color=\"accent\">directions_subway</mat-icon>\n        </h4>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n        <h5 class=\"\">\n          <div>奈良(JR)</div>\n          <div>(0:03)</div>\n          <div>¥140</div>\n        </h5>\n      </mat-grid-tile>\n      <mat-grid-tile gutterSize=\"5px\">\n        <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      </mat-grid-tile>\n      <!-- 2 -->\n      <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n        <h4 class=\"icon-part\">\n          <div>京都駅</div>\n          <mat-icon color=\"accent\">directions_subway</mat-icon>\n        </h4>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n        <h5 class=\"\">\n          <div>市營205乙</div>\n          <div>(0:16)</div>\n          <div>一日券</div>\n        </h5>\n      </mat-grid-tile>\n      <mat-grid-tile gutterSize=\"5px\">\n        <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n        <h4 class=\"icon-part\">\n          <div>京都水族館</div>\n          <mat-icon color=\"accent\">directions_bus</mat-icon>\n        </h4>\n      </mat-grid-tile>\n      <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n          <h5 class=\"\">\n            <div>市營205乙</div>\n            <div>(0:45)</div>\n            <div>一日券</div>\n          </h5>\n        </mat-grid-tile>\n        <mat-grid-tile gutterSize=\"5px\">\n          <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n          <h4 class=\"icon-part\">\n            <div>金閣寺</div>\n            <mat-icon color=\"accent\">directions_bus</mat-icon>\n          </h4>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n          <h5 class=\"\">\n            <div>市營205乙</div>\n            <div>(1:00)</div>\n            <div>一日券</div>\n          </h5>\n        </mat-grid-tile>\n        <mat-grid-tile gutterSize=\"5px\">\n          <mat-progress-bar mode=\"buffer\" value=\"0\" bufferValue=\"0\"></mat-progress-bar>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" gutterSize=\"5px\">\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"5\" gutterSize=\"5px\">\n          <h4 class=\"icon-part\">\n            <div>京都駅</div>\n            <mat-icon color=\"accent\">directions_bus</mat-icon>\n          </h4>\n        </mat-grid-tile>\n    </mat-grid-list>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-button mat-dialog-close color=\"warn\">關閉</button>\n  </mat-dialog-actions>"

/***/ }),

/***/ "./src/app/day5/day5-modal/day5-modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/day5/day5-modal/day5-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: Day5ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day5ModalComponent", function() { return Day5ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Day5ModalComponent = /** @class */ (function () {
    function Day5ModalComponent() {
    }
    Day5ModalComponent.prototype.ngOnInit = function () {
    };
    Day5ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-day5-modal',
            template: __webpack_require__(/*! ./day5-modal.component.html */ "./src/app/day5/day5-modal/day5-modal.component.html"),
            styles: [__webpack_require__(/*! ./day5-modal.component.css */ "./src/app/day5/day5-modal/day5-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Day5ModalComponent);
    return Day5ModalComponent;
}());



/***/ }),

/***/ "./src/app/day5/day5.component.css":
/*!*****************************************!*\
  !*** ./src/app/day5/day5.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 100%;\r\n    width: 99.5%;\r\n}\r\n.mat-progress-bar{\r\n    width: 80px;\r\n}"

/***/ }),

/***/ "./src/app/day5/day5.component.html":
/*!******************************************!*\
  !*** ./src/app/day5/day5.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list rowHeight=\"50px\" cols=\"3\">\n  <mat-grid-tile colspan=\"3\" rowspan=\"8\" gutterSize=\"5px\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoomValue\" [gestureHandling]=\"gestureHandling\">\n      <div *ngIf=\"isLocation\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"iconUrl\">\n        </agm-marker>\n      </div>\n      <div *ngIf=\"isSpot\">\n        <agm-marker *ngFor=\"let m of markers\" [latitude]=\"m.lat\" [longitude]=\"m.lng\">\n          <agm-info-window>\n            <strong style=\"color: black\">{{m.label}}</strong>\n          </agm-info-window>\n        </agm-marker>\n      </div>\n    </agm-map>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <div>\n      <button (click)=\"showGps()\" mat-mini-fab color=\"primary\">\n        <mat-icon>gps_fixed</mat-icon>\n      </button>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <div>\n      <button (click)=\"openDialog()\" mat-mini-fab color=\"warn\">\n        <mat-icon>map</mat-icon>\n      </button>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\" (click)=\"changeLatLng(34.987745,135.747870)\" [ngStyle]=\"{'background-image':'url(./assets/aquarium.jpg)','background-repeat': 'no-repeat','background-size': '100% 100%'}\"\n    colspan=\"2\">\n    <h2>京都水族館</h2>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\">\n    <button (click)=\"openToDoDialog()\" mat-mini-fab color=\"warn\">\n      <mat-icon>assignment</mat-icon>\n    </button>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\" (click)=\"changeLatLng(35.042499,135.729853)\" [ngStyle]=\"{'background-image':'url(./assets/kingaku.jpg)','background-repeat': 'no-repeat','background-size': '100% 100%'}\"\n    colspan=\"2\">\n    <h2>金閣寺</h2>\n  </mat-grid-tile>\n  <mat-grid-tile rowspan=\"2\">\n    <button (click)=\"openToDoDialog1()\" mat-mini-fab color=\"warn\">\n      <mat-icon>assignment</mat-icon>\n    </button>\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/day5/day5.component.ts":
/*!****************************************!*\
  !*** ./src/app/day5/day5.component.ts ***!
  \****************************************/
/*! exports provided: Day5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day5Component", function() { return Day5Component; });
/* harmony import */ var _day5_detail1_day5_detail1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day5-detail1/day5-detail1.component */ "./src/app/day5/day5-detail1/day5-detail1.component.ts");
/* harmony import */ var _day5_detail_day5_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day5-detail/day5-detail.component */ "./src/app/day5/day5-detail/day5-detail.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _day5_modal_day5_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day5-modal/day5-modal.component */ "./src/app/day5/day5-modal/day5-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_spots__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../model/spots */ "./src/app/model/spots.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Day5Component = /** @class */ (function () {
    function Day5Component(dialog) {
        this.dialog = dialog;
        this.lat = 34.987745;
        this.lng = 135.747870;
        this.zoomValue = 14;
        this.iconUrl = "./assets/gps.gif";
        this.geojson = './assets/bike.json';
        this.isLocation = false;
        this.isSpot = true;
        this.gestureHandling = 'greedy';
    }
    Day5Component.prototype.showGps = function () {
        var _this = this;
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 1000
            };
            this.watch = navigator.geolocation.watchPosition(function (pos) {
                _this.lng = +pos.coords.longitude;
                _this.lat = +pos.coords.latitude;
                console.log("watch");
                var id = _this.watch;
                var stops = document.getElementsByClassName("side");
                for (var i = 0; i < stops.length; i++) {
                    stops[i].addEventListener('click', function () {
                        navigator.geolocation.clearWatch(id);
                        console.log("clear");
                    });
                }
            }, null, options);
        }
        this.isLocation = true;
    };
    Day5Component.prototype.openDialog = function () {
        this.dialog.open(_day5_modal_day5_modal_component__WEBPACK_IMPORTED_MODULE_3__["Day5ModalComponent"]);
    };
    Day5Component.prototype.getSpots = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_model_spots__WEBPACK_IMPORTED_MODULE_5__["spots"]);
    };
    Day5Component.prototype.changeLatLng = function (lat, lng) {
        this.lat = +lat;
        this.lng = +lng;
    };
    Day5Component.prototype.openToDoDialog = function () {
        this.dialog.open(_day5_detail_day5_detail_component__WEBPACK_IMPORTED_MODULE_1__["Day5DetailComponent"]);
    };
    Day5Component.prototype.openToDoDialog1 = function () {
        this.dialog.open(_day5_detail1_day5_detail1_component__WEBPACK_IMPORTED_MODULE_0__["Day5Detail1Component"]);
    };
    Day5Component.prototype.ngOnInit = function () {
        var _this = this;
        this.getSpots().subscribe(function (spots) { _this.markers = spots; });
    };
    Day5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-day5',
            template: __webpack_require__(/*! ./day5.component.html */ "./src/app/day5/day5.component.html"),
            styles: [__webpack_require__(/*! ./day5.component.css */ "./src/app/day5/day5.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], Day5Component);
    return Day5Component;
}());



/***/ }),

/***/ "./src/app/direction/direction-modal/direction-modal.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/direction/direction-modal/direction-modal.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/direction/direction-modal/direction-modal.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/direction/direction-modal/direction-modal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n  輸入目的地\n</h2>\n  <mat-dialog-content class=\"post-form\">\n    <mat-form-field>\n      <input matInput placeholder=\"目的地\" [(ngModel)]=\"title\" />\n    </mat-form-field>\n  </mat-dialog-content>\n  <h4>快速選擇</h4>\n  <mat-chip-list>\n    <mat-chip value=\"日本京都府京都市 Higashiyama Ward, Sennyuji Torincho, Sennyugi Moegi\" color=\"primary\" (click)=\"fast($event)\" selected=\"true\">民宿</mat-chip>\n  </mat-chip-list>\n  <mat-dialog-actions>\n    <button mat-button color=\"primary\" mat-dialog-close (click)=\"doPost()\">導航</button>\n    <button mat-button mat-dialog-close color=\"warn\">取消</button>\n  </mat-dialog-actions>"

/***/ }),

/***/ "./src/app/direction/direction-modal/direction-modal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/direction/direction-modal/direction-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: DirectionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionModalComponent", function() { return DirectionModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DirectionModalComponent = /** @class */ (function () {
    function DirectionModalComponent() {
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DirectionModalComponent.prototype.doPost = function () {
        this.onAdd.emit(this.title);
    };
    DirectionModalComponent.prototype.ngOnInit = function () {
    };
    DirectionModalComponent.prototype.fast = function ($event) {
        this.title = $event.toElement.attributes.value.nodeValue;
    };
    DirectionModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-direction-modal',
            template: __webpack_require__(/*! ./direction-modal.component.html */ "./src/app/direction/direction-modal/direction-modal.component.html"),
            styles: [__webpack_require__(/*! ./direction-modal.component.css */ "./src/app/direction/direction-modal/direction-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DirectionModalComponent);
    return DirectionModalComponent;
}());



/***/ }),

/***/ "./src/app/direction/direction.component.css":
/*!***************************************************!*\
  !*** ./src/app/direction/direction.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 100%;\r\n    width: 99.5%;\r\n}\r\n.mat-progress-bar{\r\n    width: 80px;\r\n}\r\n#myPanel{\r\n    background-color: aliceblue;\r\n}"

/***/ }),

/***/ "./src/app/direction/direction.component.html":
/*!****************************************************!*\
  !*** ./src/app/direction/direction.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list rowHeight=\"50px\" cols=\"3\">\n  <mat-grid-tile colspan=\"3\" rowspan=\"8\" gutterSize=\"5px\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoomValue\" [gestureHandling]=\"gestureHandling\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"iconUrl\">\n      </agm-marker>\n      <div *ngIf=\"isDirect\">\n        <agm-direction [panel]=\"setPanel()\" [travelMode]=\"travelMode\" [origin]=\"origin\" [destination]=\"destination\">\n        </agm-direction>\n      </div>\n    </agm-map>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n    <div>\n      <button (click)=\"openDialog()\" mat-mini-fab color=\"warn\">\n        <mat-icon>directions</mat-icon>\n      </button>\n    </div>\n  </mat-grid-tile>\n  <mat-grid-tile gutterSize=\"5px\">\n  </mat-grid-tile>\n  <mat-grid-tile style=\"overflow: auto\" id=\"myPanel\" colspan=\"3\" rowspan=\"8\" gutterSize=\"5px\">\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/direction/direction.component.ts":
/*!**************************************************!*\
  !*** ./src/app/direction/direction.component.ts ***!
  \**************************************************/
/*! exports provided: DirectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionComponent", function() { return DirectionComponent; });
/* harmony import */ var _direction_modal_direction_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./direction-modal/direction-modal.component */ "./src/app/direction/direction-modal/direction-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DirectionComponent = /** @class */ (function () {
    // public transitOptions: any = {
    //   modes: ['SUBWAY']
    // }
    function DirectionComponent(dialog) {
        this.dialog = dialog;
        this.zoomValue = 14;
        this.iconUrl = "./assets/gps.gif";
        this.geojson = './assets/bike.json';
        this.isLocation = false;
        this.gestureHandling = 'greedy';
        this.travelMode = 'WALKING';
        this.isDirect = false;
    }
    DirectionComponent.prototype.showGps = function () {
        var _this = this;
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 1000
            };
            this.watch = navigator.geolocation.watchPosition(function (pos) {
                _this.lng = +pos.coords.longitude;
                _this.lat = +pos.coords.latitude;
                console.log("watch");
                var id = _this.watch;
                var stops = document.getElementsByClassName("side");
                for (var i = 0; i < stops.length; i++) {
                    stops[i].addEventListener('click', function () {
                        navigator.geolocation.clearWatch(id);
                        console.log("clear");
                    });
                }
            }, null, options);
        }
        this.isLocation = true;
    };
    DirectionComponent.prototype.setPanel = function () {
        return document.querySelector('#myPanel');
    };
    DirectionComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_direction_modal_direction_modal_component__WEBPACK_IMPORTED_MODULE_0__["DirectionModalComponent"]);
        var sub = dialogRef.componentInstance.onAdd
            .subscribe(function (data) {
            _this.origin = { lat: _this.lat, lng: _this.lng };
            _this.destination = data;
            if (_this.destination) {
                _this.isDirect = true;
            }
        });
        dialogRef.afterClosed().subscribe(function () {
            sub.unsubscribe();
        });
    };
    DirectionComponent.prototype.ngOnInit = function () {
        this.showGps();
    };
    DirectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-direction',
            template: __webpack_require__(/*! ./direction.component.html */ "./src/app/direction/direction.component.html"),
            styles: [__webpack_require__(/*! ./direction.component.css */ "./src/app/direction/direction.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DirectionComponent);
    return DirectionComponent;
}());



/***/ }),

/***/ "./src/app/model/spots.ts":
/*!********************************!*\
  !*** ./src/app/model/spots.ts ***!
  \********************************/
/*! exports provided: spots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spots", function() { return spots; });
var spots = [
    {
        lng: 135.759303,
        lat: 34.987680,
        label: '京都塔',
        draggable: false
    }, {
        lng: 135.785656,
        lat: 34.995310,
        label: '清水寺',
        draggable: false
    }, {
        lng: 135.780193,
        lat: 35.004206,
        label: '八阪神社',
        draggable: false
    }, {
        lng: 135.775053,
        lat: 35.003796,
        label: '花見小路',
        draggable: false
    }, {
        lng: 135.772290,
        lat: 34.968219,
        label: '伏見神社',
        draggable: false
    }, {
        lng: 135.729853,
        lat: 35.042499,
        label: '金閣寺',
        draggable: false
    }, {
        lng: 135.747870,
        lat: 34.987745,
        label: '京都水族館',
        draggable: false
    }, {
        lng: 135.678076,
        lat: 35.013118,
        label: '渡月橋',
        draggable: false
    }, {
        lng: 135.843582,
        lat: 34.685359,
        label: '奈良公園',
        draggable: false
    }, {
        lng: 135.839706,
        lat: 34.688999,
        label: '東大寺',
        draggable: false
    }, {
        lng: 135.673349,
        lat: 35.017810,
        label: '竹林小徑',
        draggable: false
    }, {
        lng: 135.674164,
        lat: 35.017942,
        label: '野宮神社',
        draggable: false
    }, {
        lng: 135.673756,
        lat: 35.015754,
        label: '天龍寺',
        draggable: false
    }, {
        lng: 135.673659,
        lat: 35.014893,
        label: '寶嚴院',
        draggable: false
    }, {
        lng: 135.669537,
        lat: 35.021899,
        label: '二尊院',
        draggable: false
    }, {
        lng: 135.667334,
        lat: 35.023382,
        label: '祇王寺',
        draggable: false
    }, {
        lng: 135.665249,
        lat: 35.026786,
        label: '化野念佛寺',
        draggable: false
    }, {
        lng: 135.677287,
        lat: 35.028114,
        label: '大覺寺',
        draggable: false
    }, {
        lng: 135.674556,
        lat: 35.023599,
        label: '清涼寺',
        draggable: false
    }, {
        lng: 135.806489,
        lat: 34.891114,
        label: '表參道',
        draggable: false
    }, {
        lng: 135.807733,
        lat: 34.889288,
        label: '平等院',
        draggable: false
    }, {
        lng: 135.810701,
        lat: 34.891249,
        label: '宇治神社',
        draggable: false
    }, {
        lng: 135.811750,
        lat: 34.892142,
        label: '宇治上神社',
        draggable: false
    }, {
        lng: 135.677347,
        lat: 35.014451,
        label: '嵐山ひょう猫の森(2F)',
        draggable: false
    }
];


/***/ }),

/***/ "./src/app/model/sweets.ts":
/*!*********************************!*\
  !*** ./src/app/model/sweets.ts ***!
  \*********************************/
/*! exports provided: sweets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sweets", function() { return sweets; });
var sweets = [
    {
        lng: 135.757405,
        lat: 34.985670,
        label: '中村藤吉-伊勢丹3F\n茶寮都里-伊勢丹6F\n麺家いろは-京都駅10F\n德島ラーメン東大拉麵-京都駅10F',
        icon: './assets/food.png',
        draggable: false
    }, {
        lng: 135.749522,
        lat: 34.987706,
        label: '梅小路カフェ BOSSCHE',
        icon: './assets/food.png',
        draggable: false
    }, {
        lng: 135.760517,
        lat: 34.988077,
        label: 'Cafe&dining fleur京都店',
        icon: './assets/food.png',
        draggable: false
    }, {
        lng: 135.762588,
        lat: 34.986692,
        label: '本家 第一旭 たかばし本店',
        icon: './assets/food.png',
        draggable: false
    }
];


/***/ }),

/***/ "./src/app/shared-material/shared-material.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared-material/shared-material.module.ts ***!
  \***********************************************************/
/*! exports provided: SharedMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedMaterialModule", function() { return SharedMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedMaterialModule = /** @class */ (function () {
    function SharedMaterialModule() {
    }
    SharedMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ], exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"]
            ],
            declarations: []
        })
    ], SharedMaterialModule);
    return SharedMaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Github\material-tour\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map