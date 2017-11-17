webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div *ngIf=\"link !== undefined && link !== null\" class=\"form-group\">\n        <a [attr.href]=\"link\">Please login</a>\n      </div>\n      <!-- USER INFO -->\n      <div class=\"form-group\">\n        <button (click)=\"getUserInfo()\"  class=\"btn btn-sm\">\n          <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\n          User Info\n        </button>\n        <div *ngIf=\"userName !== null\">\n          <p>Hello, {{userName}}</p>\n        </div>\n      </div>\n    <!-- END USER INFO -->\n\n    <!-- USER ALBUMS LIST -->\n      <div class=\"form-group\">\n        <button (click)=\"getUserAlbums()\" class=\"btn btn-sm\">\n          <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n          User Albums\n        </button>\n        <div class=\"user-albums\" *ngIf=\"fullUserAlbumsData !== null && fullUserAlbumsData !== undefined\">\n          <ul>\n            <li *ngFor=\"let albums of fullUserAlbumsData.photosets.photoset\">\n              {{ albums.title._content}}\n            </li>\n          </ul>\n        </div>\n      </div>\n      <!--END USER ALBUMS LIST -->\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_get_user_info_service__ = __webpack_require__("../../../../../src/app/services/get-user-info.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_getUserInfoService) {
        this._getUserInfoService = _getUserInfoService;
        this.title = 'app';
        this.link = '';
        this.oauthToken = '';
        this.fullUserAlbumsData = null;
        this.userInfo = null;
        this.userName = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getKey();
    };
    AppComponent.prototype.getKey = function () {
        var _this = this;
        this._getUserInfoService.getKey().subscribe(function (data) {
            console.log("DATA", data);
            _this.oauthToken = data["oauth_token"];
            _this.link = "https://www.flickr.com/services/oauth/authorize?perms=write&oauth_token=" + _this.oauthToken;
            console.log("this.link", _this.link);
            /*this._getUserInfoService.getUserInfo();*/
            console.log("USER INFO");
        }, function (error) {
            console.log("ERROR", error);
        });
    };
    AppComponent.prototype.getUserAlbums = function () {
        var _this = this;
        this._getUserInfoService.getUserPhotosetsList().subscribe(function (data) {
            _this.fullUserAlbumsData = data;
            if (_this.fullUserAlbumsData.stat === 'ok') {
                console.log("getUserAlbums INFO", _this.fullUserAlbumsData);
                console.log("Status", _this.fullUserAlbumsData.stat);
                console.log("USER ALBUMS", _this.fullUserAlbumsData.photosets.photoset);
            }
            else {
                console.log("Smtg wrong...");
                console.log(_this.fullUserAlbumsData.message);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ;
    AppComponent.prototype.getUserInfo = function () {
        var _this = this;
        this._getUserInfoService.getUserInfo().subscribe(function (data) {
            _this.userInfo = data;
            if (_this.userInfo.stat === 'ok') {
                _this.userName = _this.userInfo.person.username._content;
                console.log("getUserInfo INFO", data);
            }
            else {
                console.log("Smtg wrong...");
                console.log(_this.userInfo.message);
            }
        }, function (error) {
            console.log(error);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_get_user_info_service__["a" /* GetUserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_get_user_info_service__["a" /* GetUserInfoService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_get_user_info_service__ = __webpack_require__("../../../../../src/app/services/get-user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userInfoComponent_user_info_component_user_info_component_component__ = __webpack_require__("../../../../../src/app/userInfoComponent/user-info-component/user-info-component.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] },
    { path: 'user-info', component: __WEBPACK_IMPORTED_MODULE_6__userInfoComponent_user_info_component_user_info_component_component__["a" /* UserInfoComponentComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__userInfoComponent_user_info_component_user_info_component_component__["a" /* UserInfoComponentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_get_user_info_service__["a" /* GetUserInfoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/get-user-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetUserInfoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetUserInfoService = (function () {
    function GetUserInfoService(http) {
        this.http = http;
    }
    GetUserInfoService.prototype.getKey = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('Content-Type', 'application/json;');
        return this.http.get("/getKey", { headers: headers });
    };
    GetUserInfoService.prototype.getUserPhotosetsList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('Content-Type', 'application/json;');
        return this.http.get("/photosets/getList", { headers: headers });
    };
    GetUserInfoService.prototype.getUserInfo = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]().set('Content-Type', 'application/json;');
        return this.http.get("/userGetInfo", { headers: headers });
    };
    return GetUserInfoService;
}());
GetUserInfoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], GetUserInfoService);

var _a;
//# sourceMappingURL=get-user-info.service.js.map

/***/ }),

/***/ "../../../../../src/app/userInfoComponent/user-info-component/user-info-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userInfoComponent/user-info-component/user-info-component.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-info-component works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/userInfoComponent/user-info-component/user-info-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInfoComponentComponent = (function () {
    function UserInfoComponentComponent() {
    }
    UserInfoComponentComponent.prototype.ngOnInit = function () {
    };
    return UserInfoComponentComponent;
}());
UserInfoComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-user-info-component',
        template: __webpack_require__("../../../../../src/app/userInfoComponent/user-info-component/user-info-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userInfoComponent/user-info-component/user-info-component.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserInfoComponentComponent);

//# sourceMappingURL=user-info-component.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map