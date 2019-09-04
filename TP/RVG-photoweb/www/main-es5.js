(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<app-cart></app-cart>\n<nav>\n    <a routerLink=\"/games\">Games</a>\n    <a routerLink=\"/dashboard\">Dashboard</a>\n    <a routerLink=\"/create\">Create</a>\n    <a routerLink=\"/search\">Search</a>\n</nav>\n<router-outlet></router-outlet>\n<app-messages></app-messages>\n<div class=\"footer\">\n    Version {{environment.version}} \n    <span *ngIf=\"!environment.production\">\n        DEV\n    </span>\n    (c) {{environment.copyright}}\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{nbElement}} item(s) in cart"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top Games</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let game of games\" class=\"col-1-4\"\n      routerLink=\"/detail/{{game.id}}\">\n    <div class=\"module\">\n      <h4>{{game.title}}</h4>\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game-create/game-create.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game-create/game-create.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n  <mat-card class=\"game-card\">\n    <mat-card-header>\n      <mat-card-title>Create a new Video Game</mat-card-title>\n    </mat-card-header>\n    <div>\n      <mat-form-field>\n        <input matInput placeholder=\"id\" [(ngModel)]=\"game.id\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"title\" [(ngModel)]=\"game.title\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"editor\" [(ngModel)]=\"game.editor\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"year\" [(ngModel)]=\"game.year\" />\n      </mat-form-field>\n    </div>\n    <div>\n      <button (click)=\"add()\">\n          Add\n      </button>\n    </div>\n  </mat-card>\n</ng-container>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game-detail/game-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game-detail/game-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"game-detail\" *ngIf=\"game\">\n  <ng-container>\n    <mat-card class=\"game-card\">\n        <mat-card-header>\n          <mat-card-title>{{game.title | uppercase}}</mat-card-title>\n          <mat-card-subtitle>Id: {{game.id}}</mat-card-subtitle>\n        </mat-card-header>\n          <div>\n              <mat-form-field>\n                  <input matInput placeholder=\"title\" [(ngModel)]=\"game.title\"> <button (click)=\"save()\">save</button>\n              </mat-form-field>\n          </div>\n          <div>\n            <img mat-card-image src=\"assets/images/games/{{game.id}}.png\">\n          </div>\n          <div>\n            <a (click)=\"addToCart()\">\n              <i class=\"material-icons cart\">\n                add_shopping_cart\n              </i>\n            </a>\n          </div>\n          <div>\n            Number of view: {{game.nbView}}\n          </div>\n          <div>\n              <a href=\"{{game.play}}\" target=\"_blank\">\n                Play the game!\n              </a>\n          </div>\n\n      </mat-card>\n      <div id=\"game-json\">\n          <pre>{{game | json}}</pre>\n      </div>\n  </ng-container>\n  <button (click)=\"goBack()\">go back</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/games-search/games-search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/games-search/games-search.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n    <mat-form-field>\n        <input matInput placeholder=\"search\" #searchBox  id=\"search-box\" (keyup)=\"search(searchBox.value)\"/>\n    </mat-form-field>\n    <ul class=\"search-result\">\n      <li *ngFor=\"let game of games$ | async\" >\n        <a routerLink=\"/detail/{{game.id}}\">\n          {{game.title}}\n        </a>\n      </li>\n    </ul>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/games/games.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/games/games.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"games\">\n  <mat-list-item *ngFor=\"let game of games\"\n    [class.selected]=\"game === selectedGame\"\n    (click)=\"onSelect(game)\">\n      <span class=\"badge\">{{game.id}}</span>\n      <a routerLink=\"/detail/{{game.id}}\">{{game.title}}</a>\n      <i class=\"material-icons\" (click)=\"delete(game)\">\n          delete\n        </i>\n  </mat-list-item>\n</mat-list>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/messages/messages.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messages/messages.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-detail/game-detail.component */ "./src/app/game-detail/game-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _game_create_game_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-create/game-create.component */ "./src/app/game-create/game-create.component.ts");
/* harmony import */ var _games_search_games_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./games-search/games-search.component */ "./src/app/games-search/games-search.component.ts");








var routes = [
    { path: '', redirectTo: '/games', pathMatch: 'full' },
    { path: 'detail/:id', component: _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_4__["GameDetailComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'games', component: _games_games_component__WEBPACK_IMPORTED_MODULE_3__["GamesComponent"] },
    { path: 'create', component: _game_create_game_create_component__WEBPACK_IMPORTED_MODULE_6__["GameCreateComponent"] },
    { path: 'search', component: _games_search_games_search_component__WEBPACK_IMPORTED_MODULE_7__["GamesSearchComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "/* Application-wide Styles */\r\nh1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\nh2, h3 {\r\n  color: #444;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n    margin: 2em;\r\n  }\r\nbody, input[text], button {\r\n    color: #888;\r\n    font-family: Cambria, Georgia;\r\n  }\r\n/* everywhere else */\r\n* {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    margin-left: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\nnav a:visited, a:link {\r\n    color: #607d8b;\r\n  }\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #cfd8dc;\r\n  }\r\nnav a.active {\r\n    color: #039be5;\r\n  }\r\n.footer {\r\n    font-family: Arial;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLG9CQUFvQjtBQUN0QjtBQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsNkJBQTZCO0VBQy9CO0FBQ0Esb0JBQW9CO0FBQ3BCO0lBQ0UseUNBQXlDO0VBQzNDO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwbGljYXRpb24td2lkZSBTdHlsZXMgKi9cclxuaDEge1xyXG4gIGNvbG9yOiAjMzY5O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjUwJTtcclxufVxyXG5oMiwgaDMge1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICB9XHJcbiAgYm9keSwgaW5wdXRbdGV4dF0sIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xyXG4gIH1cclxuICAvKiBldmVyeXdoZXJlIGVsc2UgKi9cclxuICAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgbmF2IGEge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBuYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xyXG4gICAgY29sb3I6ICM2MDdkOGI7XHJcbiAgfVxyXG4gIG5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDM5YmU1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxuICB9XHJcbiAgbmF2IGEuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDM5YmU1O1xyXG4gIH1cclxuICAuZm9vdGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICB9Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pwa_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pwa-services */ "./src/app/pwa-services.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(lus) {
        this.lus = lus;
        this.title = 'Retro VideoGame';
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pwa_services__WEBPACK_IMPORTED_MODULE_3__["LogUpdateService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-detail/game-detail.component */ "./src/app/game-detail/game-detail.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _game_create_game_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./game-create/game-create.component */ "./src/app/game-create/game-create.component.ts");
/* harmony import */ var _games_search_games_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./games-search/games-search.component */ "./src/app/games-search/games-search.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _request_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./request-interceptor */ "./src/app/request-interceptor.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");



 // <-- NgModel lives here

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.prototype.InMemoryWebApiForRoot = function () {
        angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_14__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_15__["InMemoryDataService"], { dataEncapsulation: false });
    };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _games_games_component__WEBPACK_IMPORTED_MODULE_7__["GamesComponent"],
                _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_8__["GameDetailComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _game_create_game_create_component__WEBPACK_IMPORTED_MODULE_16__["GameCreateComponent"],
                _games_search_games_search_component__WEBPACK_IMPORTED_MODULE_17__["GamesSearchComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production ? [] : angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_14__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_15__["InMemoryDataService"], { dataEncapsulation: false }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: true })
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
                    useClass: _request_interceptor__WEBPACK_IMPORTED_MODULE_19__["HttpErrorInterceptor"],
                    multi: true,
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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

module.exports = "h4 {\r\n    position: relative;\r\n    text-align: center;\r\n    color: black;\r\n    cursor: pointer;\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5Q0FBeUM7RUFDM0MiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgfSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");




var CartComponent = /** @class */ (function () {
    function CartComponent(gameService, messageService) {
        this.gameService = gameService;
        this.messageService = messageService;
        this.nbElement = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.changeEmitted$.subscribe(function (cart) { return _this.nbElement = cart.games.length; });
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
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

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  position: relative;\n  text-align: center;\n  font-size: 10px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n}\nh4 {\n  position: relative;\n  text-align: center;\n  color: #eee;\n  cursor: pointer;\n  font-size: 10px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.module:hover h4 {\n  color: black;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1QztFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQixFQUFFO0FBQ3RCO0FBQ0E7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGFzaGJvYXJkQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5bY2xhc3MqPSdjb2wtJ10ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5bY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4qLCAqOmFmdGVyLCAqOmJlZm9yZSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaDMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5oNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2VlZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmdyaWQge1xuICBtYXJnaW46IDA7XG59XG4uY29sLTEtNCB7XG4gIHdpZHRoOiAyNSU7XG59XG4ubW9kdWxlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2VlZTtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5tb2R1bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjA3ZDhiO1xufVxuLm1vZHVsZTpob3ZlciBoNCB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5ncmlkLXBhZCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2R1bGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiA3NXB4OyB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ncmlkIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLm1vZHVsZSB7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xuICB9XG59XG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");



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
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtY3JlYXRlL2dhbWUtY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video-game */ "./src/app/video-game.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var GameCreateComponent = /** @class */ (function () {
    function GameCreateComponent(gameService, location) {
        this.gameService = gameService;
        this.location = location;
        this.game = new _video_game__WEBPACK_IMPORTED_MODULE_2__["VideoGame"]();
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
    GameCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-create',
            template: __webpack_require__(/*! raw-loader!./game-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/game-create/game-create.component.html"),
            styles: [__webpack_require__(/*! ./game-create.component.css */ "./src/app/game-create/game-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
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

module.exports = "#game-detail {\r\n  width: 65%;\r\n  margin-top: 2rem;\r\n}\r\n\r\n#game-detail img {\r\n  height: 100px;\r\n  -o-object-fit: scale-down;\r\n     object-fit: scale-down;\r\n  margin-top: 1rem;\r\n\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  #game-detail {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n#left {\r\n  width: 50%;\r\n  float: left;\r\n  margin-left: 6%;\r\n}\r\n\r\n#right {\r\n  margin-left: 50%;\r\n  text-align: center;\r\n  padding-right: 17%;\r\n}\r\n\r\n.clear {\r\n  clear: both;\r\n}\r\n\r\nform {\r\n  display: grid;\r\n  width: 80%;\r\n}\r\n\r\n.mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.cart {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1kZXRhaWwvZ2FtZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXNCO0tBQXRCLHNCQUFzQjtFQUN0QixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9nYW1lLWRldGFpbC9nYW1lLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dhbWUtZGV0YWlsIHtcclxuICB3aWR0aDogNjUlO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbiNnYW1lLWRldGFpbCBpbWcge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgI2dhbWUtZGV0YWlsIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG59XHJcblxyXG4jbGVmdCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogNiU7XHJcbn1cclxuXHJcbiNyaWdodCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMTclO1xyXG59XHJcblxyXG4uY2xlYXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcnQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video-game */ "./src/app/video-game.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var GameDetailComponent = /** @class */ (function () {
    function GameDetailComponent(gameService, route, location) {
        this.gameService = gameService;
        this.route = route;
        this.location = location;
        this.addedToCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GameDetailComponent.prototype.ngOnInit = function () {
        this.getGame();
    };
    GameDetailComponent.prototype.addToCart = function () {
        console.log("Add " + this.game.title + " to the cart");
        this.gameService.addToCart(this.game);
        // this.addedToCard.emit(cart); // Local upload event strategy, not working with <router-outlet>
        // this.gameService.emitChange(cart); // Shared Service event strategy
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _video_game__WEBPACK_IMPORTED_MODULE_2__["VideoGame"])
    ], GameDetailComponent.prototype, "game", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GameDetailComponent.prototype, "addedToCard", void 0);
    GameDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-detail',
            template: __webpack_require__(/*! raw-loader!./game-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/game-detail/game-detail.component.html"),
            styles: [__webpack_require__(/*! ./game-detail.component.css */ "./src/app/game-detail/game-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-game */ "./src/app/video-game.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");








var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var GameService = /** @class */ (function () {
    function GameService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this._cart = new _video_game__WEBPACK_IMPORTED_MODULE_2__["Cart"]();
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    GameService.prototype.getGames = function () {
        this.messageService.add('GameService: fetched games');
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].gamesUrl);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].gamesUrl);
    };
    GameService.prototype.getGame = function (id) {
        this.messageService.add("GameService: fetched game id=" + id);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].gamesUrl + "/" + id);
    };
    GameService.prototype.getTop4 = function () {
        this.messageService.add('GameService: fetched TOP4 games');
        return this.getGames().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (games) { return games.sort(function (x, y) { return y.nbView - x.nbView; }).slice(0, 4); }));
    };
    Object.defineProperty(GameService.prototype, "cart$", {
        get: function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this._cart);
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.addToCart = function (game) {
        this.messageService.add('GameService: add ' + game.title + ' to cart');
        this._cart.add(game);
        this.emitChangeSource.next(this._cart);
    };
    GameService.prototype.updateGame = function (game) {
        console.log("update game " + game.title + " " + game.nbView);
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].gamesUrl, game, httpOptions);
    };
    GameService.prototype.addGame = function (game) {
        console.log("add game id=" + game.id + " " + game.title);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].gamesUrl, game, httpOptions);
    };
    GameService.prototype.deleteGame = function (id) {
        console.log("delete game id=" + id);
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].gamesUrl + "/" + id, httpOptions);
    };
    GameService.prototype.searchGames = function (term) {
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].gamesUrl + "/search?q=" + term);
        }
        else {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].gamesUrl + "/?title=" + term);
        }
    };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
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

module.exports = ".search-result li {\r\n    border-bottom: 1px solid gray;\r\n    border-left: 1px solid gray;\r\n    border-right: 1px solid gray;\r\n    width:195px;\r\n    height: 16px;\r\n    padding: 5px;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n  }\r\n  \r\n  .search-result li:hover {\r\n    background-color: #607D8B;\r\n  }\r\n  \r\n  .search-result li a {\r\n    color: #888;\r\n    display: block;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .search-result li a:hover {\r\n    color: white;\r\n  }\r\n  \r\n  .search-result li a:active {\r\n    color: white;\r\n  }\r\n  \r\n  #search-box {\r\n    width: 200px;\r\n    height: 20px;\r\n  }\r\n  \r\n  ul.search-result {\r\n    margin-top: 0;\r\n    padding-left: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMtc2VhcmNoL2dhbWVzLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBR0E7SUFDRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzLXNlYXJjaC9nYW1lcy1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtcmVzdWx0IGxpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcclxuICAgIHdpZHRoOjE5NXB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtcmVzdWx0IGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGEge1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgI3NlYXJjaC1ib3gge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICB1bC5zZWFyY2gtcmVzdWx0IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");





var GamesSearchComponent = /** @class */ (function () {
    function GamesSearchComponent(gameService) {
        this.gameService = gameService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    GamesSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    GamesSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.games$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.gameService.searchGames(term); }));
    };
    GamesSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games-search',
            template: __webpack_require__(/*! raw-loader!./games-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/games-search/games-search.component.html"),
            styles: [__webpack_require__(/*! ./games-search.component.css */ "./src/app/games-search/games-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]])
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

module.exports = ".selected {\r\n    background-color: #CFD8DC !important;\r\n    color: white;\r\n  }\r\n  .games {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n    \r\n  }\r\n  .games mat-list-item {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n  .games mat-list-item a {\r\n    text-decoration: none;\r\n    color: black\r\n  }\r\n  .games mat-list-item.selected:hover {\r\n    background-color: #BBD8DC !important;\r\n    color: white;\r\n  }\r\n  .games mat-list-item:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .games .text {\r\n    position: relative;\r\n    top: -3px;\r\n  }\r\n  .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -16px;\r\n    top: 0px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n  button {\r\n  display: block;\r\n}\r\n  #left {\r\n  width: 50%;\r\n  float: left;\r\n  margin-left: 6%;\r\n}\r\n  #right {\r\n  margin-left: 50%;\r\n  text-align: center;\r\n  padding-right: 17%;\r\n}\r\n  .clear {\r\n  clear: both;\r\n}\r\n  .mat-list {\r\n  display: table;\r\n}\r\n  .mat-list-text {\r\n  text-align: left !important;\r\n}\r\n  @media (max-width: 680px) {\r\n  #left {\r\n    width: 100%;\r\n    float: none;\r\n  }\r\n\r\n  #right {\r\n    margin: 1em auto 0;\r\n    width: 90%;\r\n    float: none;\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7O0VBRWI7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQjtFQUNGO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsWUFBWTtFQUNkO0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7RUFDNUI7RUFFRjtFQUNFLGNBQWM7QUFDaEI7RUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtFQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7RUFFQTtFQUNFLFdBQVc7QUFDYjtFQUVBO0VBQ0UsY0FBYztBQUNoQjtFQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0VBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZ2FtZXMge1xyXG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDE1ZW07XHJcbiAgICBcclxuICB9XHJcbiAgLmdhbWVzIG1hdC1saXN0LWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgICBtYXJnaW46IC41ZW07XHJcbiAgICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgICBoZWlnaHQ6IDEuNmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAuZ2FtZXMgbWF0LWxpc3QtaXRlbSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFja1xyXG4gIH1cclxuICAuZ2FtZXMgbWF0LWxpc3QtaXRlbS5zZWxlY3RlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5nYW1lcyBtYXQtbGlzdC1pdGVtOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjA3RDhCO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgIGxlZnQ6IC4xZW07XHJcbiAgfVxyXG4gIC5nYW1lcyAudGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgfVxyXG4gIC5iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTE2cHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGhlaWdodDogMS44ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICB9XHJcblxyXG5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jbGVmdCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogNiU7XHJcbn1cclxuXHJcbiNyaWdodCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMTclO1xyXG59XHJcblxyXG4uY2xlYXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4ubWF0LWxpc3Qge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4ubWF0LWxpc3QtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjgwcHgpIHtcclxuICAjbGVmdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgI3JpZ2h0IHtcclxuICAgIG1hcmdpbjogMWVtIGF1dG8gMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video-game */ "./src/app/video-game.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game.service */ "./src/app/game.service.ts");




var GamesComponent = /** @class */ (function () {
    function GamesComponent(gameService) {
        this.gameService = gameService;
        this.newGame = new _video_game__WEBPACK_IMPORTED_MODULE_2__["VideoGame"]();
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
    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! raw-loader!./games.component.html */ "./node_modules/raw-loader/index.js!./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/games/games.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
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

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0M7RUFDRSxVQUFVO0VBQ1YseUNBQXlDO0VBQ3pDLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVzc2FnZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmgyIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuYm9keSB7XG4gIG1hcmdpbjogMmVtO1xufVxuYm9keSwgaW5wdXRbdGV4dF0sIGJ1dHRvbiB7XG4gIGNvbG9yOiBjcmltc29uO1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcbn1cblxuYnV0dG9uLmNsZWFyIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjYWFhO1xuICBjdXJzb3I6IGF1dG87XG59XG5idXR0b24uY2xlYXIge1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/pwa-services.ts":
/*!*********************************!*\
  !*** ./src/app/pwa-services.ts ***!
  \*********************************/
/*! exports provided: LogUpdateService, UpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogUpdateService", function() { return LogUpdateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateService", function() { return UpdateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var LogUpdateService = /** @class */ (function () {
    function LogUpdateService(updates) {
        this.updates = updates;
        updates.available.subscribe(function (event) {
            console.log('current version is', event.current);
            console.log('available version is', event.available);
        });
        updates.activated.subscribe(function (event) {
            console.log('old version was', event.previous);
            console.log('new version is', event.current);
        });
    }
    LogUpdateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]])
    ], LogUpdateService);
    return LogUpdateService;
}());

var UpdateService = /** @class */ (function () {
    function UpdateService(updates) {
        this.updates = updates;
        if (updates.isEnabled) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(6 * 60 * 60).subscribe(function () { return updates.checkForUpdate()
                .then(function () { return console.log('checking for updates'); }); });
        }
    }
    UpdateService.prototype.checkForUpdates = function () {
        var _this = this;
        this.updates.available.subscribe(function (event) { return _this.promptUser(); });
    };
    UpdateService.prototype.promptUser = function () {
        console.log('updating to new version');
        this.updates.activateUpdate().then(function () { return document.location.reload(); });
    };
    UpdateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]])
    ], UpdateService);
    return UpdateService;
}());



/***/ }),

/***/ "./src/app/request-interceptor.ts":
/*!****************************************!*\
  !*** ./src/app/request-interceptor.ts ***!
  \****************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(messageService) {
        this.messageService = messageService;
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error, caught) {
            if (!navigator.onLine) {
                _this.messageService.add("NO INTERNET CONNECTION");
            }
            else if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                _this.messageService.add("HTTP ERROR " + error.status + " " + error.message);
            }
            else {
                _this.messageService.add("INTERNAL ERROR " + error);
            }
            console.log("Error " + error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error);
        }));
    };
    HttpErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
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
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map