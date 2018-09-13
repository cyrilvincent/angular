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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-detail/game-detail.component */ "./src/app/game-detail/game-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _game_create_game_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-create/game-create.component */ "./src/app/game-create/game-create.component.ts");
/* harmony import */ var _games_search_games_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./games-search/games-search.component */ "./src/app/games-search/games-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/games', pathMatch: 'full' },
    { path: 'detail/:id', component: _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_3__["GameDetailComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'games', component: _games_games_component__WEBPACK_IMPORTED_MODULE_2__["GamesComponent"] },
    { path: 'create', component: _game_create_game_create_component__WEBPACK_IMPORTED_MODULE_5__["GameCreateComponent"] },
    { path: 'search', component: _games_search_games_search_component__WEBPACK_IMPORTED_MODULE_6__["GamesSearchComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "/* Application-wide Styles */\r\nh1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\nh2, h3 {\r\n  color: #444;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n    margin: 2em;\r\n  }\r\nbody, input[text], button {\r\n    color: #888;\r\n    font-family: Cambria, Georgia;\r\n  }\r\n/* everywhere else */\r\n* {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    margin-left: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\nnav a:visited, a:link {\r\n    color: #607d8b;\r\n  }\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #cfd8dc;\r\n  }\r\nnav a.active {\r\n    color: #039be5;\r\n  }\r\n.footer {\r\n    font-family: Arial;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<app-cart></app-cart>\n<nav>\n    <a routerLink=\"/games\">Games</a>\n    <a routerLink=\"/dashboard\">Dashboard</a>\n    <a routerLink=\"/create\">Create</a>\n    <a routerLink=\"/search\">Search</a>\n</nav>\n<router-outlet></router-outlet>\n<app-messages></app-messages>\n<div class=\"footer\">\n    Version {{environment.version}} \n    <span *ngIf=\"!environment.production\">\n        DEV\n    </span>\n    (c) {{environment.copyright}}\n</div>\n\n\n"

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Retro VideoGame';
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-detail/game-detail.component */ "./src/app/game-detail/game-detail.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _game_create_game_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./game-create/game-create.component */ "./src/app/game-create/game-create.component.ts");
/* harmony import */ var _games_search_games_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./games-search/games-search.component */ "./src/app/games-search/games-search.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.prototype.InMemoryWebApiForRoot = function () {
        angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_13__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_14__["InMemoryDataService"], { dataEncapsulation: false });
    };
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _games_games_component__WEBPACK_IMPORTED_MODULE_6__["GamesComponent"],
                _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_7__["GameDetailComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _game_create_game_create_component__WEBPACK_IMPORTED_MODULE_15__["GameCreateComponent"],
                _games_search_games_search_component__WEBPACK_IMPORTED_MODULE_16__["GamesSearchComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production ? [] : angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_13__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_14__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\r\n    position: relative;\r\n    text-align: center;\r\n    color: black;\r\n    cursor: pointer;\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{nbElement}} item(s) in cart"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(gameService, messageService) {
        this.gameService = gameService;
        this.messageService = messageService;
        this.nbElement = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCart();
        this.gameService.changeEmitted$.subscribe(function (cart) { return _this.nbElement = cart.games.length; });
    };
    CartComponent.prototype.getCart = function () {
        var _this = this;
        this.messageService.add('Retrieve cart with ' + this.nbElement + ' elements');
        this.gameService.getCart().subscribe(function (cart) { return _this.nbElement = cart.games.length; });
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"],
            _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  position: relative;\n  text-align: center;\n  font-size: 10px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n}\nh4 {\n  position: relative;\n  text-align: center;\n  color: #eee;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.module:hover h4 {\n  color: black;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top Games</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let game of games\" class=\"col-1-4\"\n      routerLink=\"/detail/{{game.id}}\">\n    <div class=\"module\">\n      <h4>{{game.title}}</h4>\n    </div>\n  </a>\n</div>\n"

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
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
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
    function DashboardComponent(gameService) {
        this.gameService = gameService;
        this.games = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    DashboardComponent.prototype.getGames = function () {
        var _this = this;
        this.gameService.getTop4()
            .subscribe(function (games) { return _this.games = games; });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/game-create/game-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/game-create/game-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/game-create/game-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/game-create/game-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n  <mat-card class=\"game-card\">\n    <mat-card-header>\n      <mat-card-title>Create a new Video Game</mat-card-title>\n    </mat-card-header>\n    <div>\n      <mat-form-field>\n        <input matInput placeholder=\"id\" [(ngModel)]=\"game.id\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"title\" [(ngModel)]=\"game.title\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"editor\" [(ngModel)]=\"game.editor\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"year\" [(ngModel)]=\"game.year\" />\n      </mat-form-field>\n    </div>\n    <div>\n      <button (click)=\"add()\">\n          Add\n      </button>\n    </div>\n  </mat-card>\n</ng-container>\n\n"

/***/ }),

/***/ "./src/app/game-create/game-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/game-create/game-create.component.ts ***!
  \******************************************************/
/*! exports provided: GameCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCreateComponent", function() { return GameCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video-game */ "./src/app/video-game.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameCreateComponent = /** @class */ (function () {
    function GameCreateComponent(gameService, location) {
        this.gameService = gameService;
        this.location = location;
        this.game = new _video_game__WEBPACK_IMPORTED_MODULE_1__["VideoGame"]();
    }
    GameCreateComponent.prototype.ngOnInit = function () {
        this.game.year = 1970;
        this.game.consoles = [];
        this.game.nbView = 0;
        this.game.play = '';
        this.game.editor = '';
        this.game.id = Math.floor(Math.random() * 100) + 1;
        this.game.title = '';
    };
    GameCreateComponent.prototype.goBack = function () {
        this.location.back();
    };
    GameCreateComponent.prototype.add = function () {
        var _this = this;
        this.gameService.addGame(this.game)
            .subscribe(function (_) {
            _this.goBack();
        });
    };
    GameCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-create',
            template: __webpack_require__(/*! ./game-create.component.html */ "./src/app/game-create/game-create.component.html"),
            styles: [__webpack_require__(/*! ./game-create.component.css */ "./src/app/game-create/game-create.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], GameCreateComponent);
    return GameCreateComponent;
}());



/***/ }),

/***/ "./src/app/game-detail/game-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/game-detail/game-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#game-detail {\r\n  width: 65%;\r\n  margin-top: 2rem;\r\n}\r\n\r\n#game-detail img {\r\n  height: 100px;\r\n  -o-object-fit: scale-down;\r\n     object-fit: scale-down;\r\n  margin-top: 1rem;\r\n\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  #game-detail {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n#left {\r\n  width: 50%;\r\n  float: left;\r\n  margin-left: 6%;\r\n}\r\n\r\n#right {\r\n  margin-left: 50%;\r\n  text-align: center;\r\n  padding-right: 17%;\r\n}\r\n\r\n.clear {\r\n  clear: both;\r\n}\r\n\r\nform {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 80%;\r\n}\r\n\r\n.mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.cart {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/game-detail/game-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/game-detail/game-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"game-detail\" *ngIf=\"game\">\n  <ng-container>\n    <mat-card class=\"game-card\">\n        <mat-card-header>\n          <mat-card-title>{{game.title | uppercase}}</mat-card-title>\n          <mat-card-subtitle>Id: {{game.id}}</mat-card-subtitle>\n        </mat-card-header>\n          <div>\n              <mat-form-field>\n                  <input matInput placeholder=\"title\" [(ngModel)]=\"game.title\"> <button (click)=\"save()\">save</button>\n              </mat-form-field>\n          </div>\n          <div>\n            <img mat-card-image src=\"assets/images/games/{{game.id}}.png\">\n          </div>\n          <div>\n            <a (click)=\"addToCart()\">\n              <i class=\"material-icons cart\">\n                add_shopping_cart\n              </i>\n            </a>\n          </div>\n          <div>\n            Number of view: {{game.nbView}}\n          </div>\n          <div>\n              <a href=\"{{game.play}}\" target=\"_blank\">\n                Play the game!\n              </a>\n          </div>\n\n      </mat-card>\n      <div id=\"game-json\">\n          <pre>{{game | json}}</pre>\n      </div>\n  </ng-container>\n  <button (click)=\"goBack()\">go back</button>\n</div>"

/***/ }),

/***/ "./src/app/game-detail/game-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/game-detail/game-detail.component.ts ***!
  \******************************************************/
/*! exports provided: GameDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDetailComponent", function() { return GameDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video-game */ "./src/app/video-game.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameDetailComponent = /** @class */ (function () {
    function GameDetailComponent(gameService, route, location) {
        this.gameService = gameService;
        this.route = route;
        this.location = location;
        this.addedToCard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GameDetailComponent.prototype.ngOnInit = function () {
        this.getGame();
    };
    GameDetailComponent.prototype.addToCart = function () {
        console.log("Add " + this.game.title + " to the cart");
        var cart = this.gameService.addToCart(this.game);
        // this.addedToCard.emit(cart); // Local upload event strategy, not working with <router-outlet>
        this.gameService.emitChange(cart); // Shared Service event strategy
    };
    GameDetailComponent.prototype.getGame = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.gameService.getGame(id)
            .subscribe(function (game) {
            _this.game = game;
            _this.game.nbView += 1;
            _this.gameService.updateGame(_this.game).subscribe();
        });
    };
    GameDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    GameDetailComponent.prototype.save = function () {
        var _this = this;
        this.gameService.updateGame(this.game)
            .subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _video_game__WEBPACK_IMPORTED_MODULE_1__["VideoGame"])
    ], GameDetailComponent.prototype, "game", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GameDetailComponent.prototype, "addedToCard", void 0);
    GameDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-detail',
            template: __webpack_require__(/*! ./game-detail.component.html */ "./src/app/game-detail/game-detail.component.html"),
            styles: [__webpack_require__(/*! ./game-detail.component.css */ "./src/app/game-detail/game-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], GameDetailComponent);
    return GameDetailComponent;
}());



/***/ }),

/***/ "./src/app/game.service.ts":
/*!*********************************!*\
  !*** ./src/app/game.service.ts ***!
  \*********************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-game */ "./src/app/video-game.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var GameService = /** @class */ (function () {
    function GameService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.cart = new _video_game__WEBPACK_IMPORTED_MODULE_1__["Cart"]();
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    GameService.prototype.getGames = function () {
        this.messageService.add('GameService: fetched games');
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].gamesUrl);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].gamesUrl);
    };
    GameService.prototype.getGame = function (id) {
        this.messageService.add("GameService: fetched game id=" + id);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].gamesUrl + "/" + id);
    };
    GameService.prototype.getTop4 = function () {
        this.messageService.add('GameService: fetched TOP4 games');
        return this.getGames().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (games) { return games.sort(function (x, y) { return y.nbView - x.nbView; }).slice(0, 4); }));
    };
    GameService.prototype.getCart = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.cart);
    };
    GameService.prototype.addToCart = function (game) {
        this.messageService.add('GameService: add ' + game.title + ' to cart');
        this.cart.add(game);
        return this.cart;
    };
    GameService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    GameService.prototype.updateGame = function (game) {
        console.log("update game " + game.title + " " + game.nbView);
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].gamesUrl, game, httpOptions);
    };
    GameService.prototype.addGame = function (game) {
        console.log("add game id=" + game.id + " " + game.title);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].gamesUrl, game, httpOptions);
    };
    GameService.prototype.deleteGame = function (id) {
        console.log("delete game id=" + id);
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].gamesUrl + "/" + id, httpOptions);
    };
    GameService.prototype.searchGames = function (term) {
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].gamesUrl + "/search?q=" + term);
        }
        else {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].gamesUrl + "/?title=" + term);
        }
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/games-search/games-search.component.css":
/*!*********************************************************!*\
  !*** ./src/app/games-search/games-search.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-result li {\r\n    border-bottom: 1px solid gray;\r\n    border-left: 1px solid gray;\r\n    border-right: 1px solid gray;\r\n    width:195px;\r\n    height: 16px;\r\n    padding: 5px;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n  }\r\n  \r\n  .search-result li:hover {\r\n    background-color: #607D8B;\r\n  }\r\n  \r\n  .search-result li a {\r\n    color: #888;\r\n    display: block;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .search-result li a:hover {\r\n    color: white;\r\n  }\r\n  \r\n  .search-result li a:active {\r\n    color: white;\r\n  }\r\n  \r\n  #search-box {\r\n    width: 200px;\r\n    height: 20px;\r\n  }\r\n  \r\n  ul.search-result {\r\n    margin-top: 0;\r\n    padding-left: 0;\r\n  }"

/***/ }),

/***/ "./src/app/games-search/games-search.component.html":
/*!**********************************************************!*\
  !*** ./src/app/games-search/games-search.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n    <mat-form-field>\n        <input matInput placeholder=\"search\" #searchBox  id=\"search-box\" (keyup)=\"search(searchBox.value)\"/>\n    </mat-form-field>\n    <ul class=\"search-result\">\n      <li *ngFor=\"let game of games$ | async\" >\n        <a routerLink=\"/detail/{{game.id}}\">\n          {{game.title}}\n        </a>\n      </li>\n    </ul>\n  </div>\n"

/***/ }),

/***/ "./src/app/games-search/games-search.component.ts":
/*!********************************************************!*\
  !*** ./src/app/games-search/games-search.component.ts ***!
  \********************************************************/
/*! exports provided: GamesSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesSearchComponent", function() { return GamesSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamesSearchComponent = /** @class */ (function () {
    function GamesSearchComponent(gameService) {
        this.gameService = gameService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    GamesSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    GamesSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.games$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.gameService.searchGames(term); }));
    };
    GamesSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-games-search',
            template: __webpack_require__(/*! ./games-search.component.html */ "./src/app/games-search/games-search.component.html"),
            styles: [__webpack_require__(/*! ./games-search.component.css */ "./src/app/games-search/games-search.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])
    ], GamesSearchComponent);
    return GamesSearchComponent;
}());



/***/ }),

/***/ "./src/app/games/games.component.css":
/*!*******************************************!*\
  !*** ./src/app/games/games.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\r\n    background-color: #CFD8DC !important;\r\n    color: white;\r\n  }\r\n  .games {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n    \r\n  }\r\n  .games mat-list-item {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n  .games mat-list-item a {\r\n    text-decoration: none;\r\n    color: black\r\n  }\r\n  .games mat-list-item.selected:hover {\r\n    background-color: #BBD8DC !important;\r\n    color: white;\r\n  }\r\n  .games mat-list-item:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .games .text {\r\n    position: relative;\r\n    top: -3px;\r\n  }\r\n  .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -16px;\r\n    top: 0px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n  button {\r\n  display: block;\r\n}\r\n  #left {\r\n  width: 50%;\r\n  float: left;\r\n  margin-left: 6%;\r\n}\r\n  #right {\r\n  margin-left: 50%;\r\n  text-align: center;\r\n  padding-right: 17%;\r\n}\r\n  .clear {\r\n  clear: both;\r\n}\r\n  .mat-list {\r\n  display: table;\r\n}\r\n  .mat-list-text {\r\n  text-align: left !important;\r\n}\r\n  @media (max-width: 680px) {\r\n  #left {\r\n    width: 100%;\r\n    float: none;\r\n  }\r\n\r\n  #right {\r\n    margin: 1em auto 0;\r\n    width: 90%;\r\n    float: none;\r\n    padding: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"games\">\n  <mat-list-item *ngFor=\"let game of games\"\n    [class.selected]=\"game === selectedGame\"\n    (click)=\"onSelect(game)\">\n      <span class=\"badge\">{{game.id}}</span>\n      <a routerLink=\"/detail/{{game.id}}\">{{game.title}}</a>\n      <i class=\"material-icons\" (click)=\"delete(game)\">\n          delete\n        </i>\n  </mat-list-item>\n</mat-list>\n\n\n"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video-game */ "./src/app/video-game.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GamesComponent = /** @class */ (function () {
    function GamesComponent(gameService) {
        this.gameService = gameService;
        this.newGame = new _video_game__WEBPACK_IMPORTED_MODULE_1__["VideoGame"]();
    }
    GamesComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    GamesComponent.prototype.onSelect = function (game) {
        this.selectedGame = game;
    };
    GamesComponent.prototype.getGames = function () {
        var _this = this;
        // this.games = this.gameService.getGames();
        this.gameService.getGames().subscribe(function (games) { return _this.games = games; });
    };
    GamesComponent.prototype.delete = function (game) {
        this.games = this.games.filter(function (g) { return g !== game; });
        this.gameService.deleteGame(game.id).subscribe();
    };
    GamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/games/games.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var games = [
            { id: 1,
                title: 'Space Invaders',
                editor: 'Taito',
                year: 1978,
                consoles: ['Atari VCS', 'MSX'],
                play: 'http://www.playretrogames.com/3022-space-invaders-the-original-game',
                nbView: 0,
            },
            { id: 2,
                title: 'Pac Man',
                editor: 'Namco',
                year: 1980,
                consoles: ['Atari VCS', 'MSX'],
                play: 'https://www.retrogames.cc/arcade-games/pac-man-midway.html',
                nbView: 0,
            },
            { id: 3,
                title: 'Pong',
                editor: 'Atari',
                year: 1972,
                consoles: ['Atari VCS', 'MSX'],
                play: 'https://www.youtube.com/watch?v=it0sf4CMDeM',
                nbView: 0,
            },
            { id: 4,
                title: 'Super Mario Bros',
                editor: 'Nintendo',
                year: 1985,
                consoles: ['NES'],
                play: 'https://emulatoronline.com/nes-games/super-mario-bros/',
                nbView: 0,
            },
            { id: 5,
                title: 'Tetris',
                editor: 'Nintendo',
                year: 1984,
                consoles: ['NET', 'Game boy'],
                play: 'https://emulatoronline.com/nes-games/classic-tetris/',
                nbView: 0,
            },
            { id: 6,
                title: 'Super Mario Kart',
                editor: 'Nintendo',
                year: 1992,
                consoles: ['SNES'],
                play: 'https://emulatoronline.com/snes-games/super-mario-kart/',
                nbView: 0,
            },
            { id: 7,
                title: 'Street Fighter 2',
                editor: 'Nintendo',
                year: 1991,
                consoles: ['SNES'],
                play: 'https://emulatoronline.com/snes-games/street-fighter-2-turbo-hyper-fighting/',
                nbView: 0,
            },
            { id: 8,
                title: 'Another World',
                editor: 'Delphine Software',
                year: 1991,
                consoles: ['Atari ST', 'Amiga'],
                play: 'https://emulatoronline.com/sega-games/another-world/',
                nbView: 0,
            },
            { id: 9,
                title: 'Commando',
                editor: 'Capcom',
                year: 1985,
                consoles: ['Amstrad', 'Commodore'],
                play: 'https://play-roms.com/coin-op-arcade/commando',
                nbView: 0,
            },
            { id: 10,
                title: 'Ajouter votre propre jeux',
                editor: 'Vous',
                year: 1900,
                consoles: [],
                play: '',
                nbView: 0,
            },
        ];
        return { games: games };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px;\n}\n"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/video-game.ts":
/*!*******************************!*\
  !*** ./src/app/video-game.ts ***!
  \*******************************/
/*! exports provided: VideoGame, Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGame", function() { return VideoGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
var VideoGame = /** @class */ (function () {
    function VideoGame() {
        this.nbView = 0;
    }
    return VideoGame;
}());

var Cart = /** @class */ (function () {
    function Cart() {
        this.games = [];
    }
    Cart.prototype.add = function (game) {
        this.games.push(game);
        console.log(game.title + ' added to cart');
    };
    return Cart;
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
    production: false,
    version: '0.1',
    copyright: 'Cyril Vincent',
    gamesUrl: 'api/games',
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! D:\CVC\Formation\JS\Angular\GIT\TP\RVG\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map