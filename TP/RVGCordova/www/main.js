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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Application-wide Styles */\r\nh1 {\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 250%;\r\n  }\r\nh2, h3 {\r\n    color: #444;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: lighter;\r\n  }\r\nbody {\r\n    margin: 2em;\r\n  }\r\nbody, input[text], button {\r\n    color: #888;\r\n    font-family: Cambria, Georgia;\r\n  }\r\n/* everywhere else */\r\n* {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<app-cart></app-cart> in Cart\n<app-games></app-games>\n\n\n"

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
        this.title = 'Retro VideoGame';
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
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _games_games_component__WEBPACK_IMPORTED_MODULE_6__["GamesComponent"],
                _game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_7__["GameDetailComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
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

module.exports = ""

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{nbElement}}"

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
    function CartComponent(gameService) {
        this.gameService = gameService;
        this.nbElement = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.nbElement = this.gameService.cart.games.length;
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/game-detail/game-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/game-detail/game-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#game-detail {\r\n  width: 65%;\r\n  margin-top: 2rem;\r\n}\r\n\r\n#game-detail img {\r\n  height: 100px;\r\n  -o-object-fit: scale-down;\r\n     object-fit: scale-down;\r\n  margin-top: 1rem;\r\n\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  #game-detail {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n#left {\r\n  width: 50%;\r\n  float: left;\r\n  margin-left: 6%;\r\n}\r\n\r\n#right {\r\n  margin-left: 50%;\r\n  text-align: center;\r\n  padding-right: 17%;\r\n}\r\n\r\n.clear {\r\n  clear: both;\r\n}\r\n\r\nform {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 80%;\r\n}\r\n\r\n.mat-form-field {\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/game-detail/game-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/game-detail/game-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"game-detail\" *ngIf=\"game\">\n  <ng-container>\n    <mat-card class=\"game-card\">\n        <mat-card-header>\n          <mat-card-title>{{game.title | uppercase}}</mat-card-title>\n          <mat-card-subtitle>Id: {{game.id}}</mat-card-subtitle>\n        </mat-card-header>\n          <div>\n              <mat-form-field>\n                  <input matInput placeholder=\"title\" [(ngModel)]=\"game.title\">\n              </mat-form-field>\n          </div>\n          <div>\n            <img mat-card-image src=\"assets/images/games/{{game.id}}.png\">\n          </div>\n          <div>\n            <a href=\"#\"  (click)=\"addToCart()\">\n              <i class=\"material-icons\">\n                add_shopping_cart\n              </i>\n            </a>\n          </div>\n          <div>\n            Number of view: {{game.nbView}}\n          </div>\n          <div>\n              <a href=\"{{game.play}}\" target=\"_blank\">\n                Play the game!\n              </a>\n          </div>\n\n      </mat-card>\n      <div id=\"game-json\">\n          <pre>{{game | json}}</pre>\n      </div>\n  </ng-container>\n</div>"

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
    function GameDetailComponent(gameService) {
        this.gameService = gameService;
    }
    GameDetailComponent.prototype.ngOnInit = function () {
    };
    GameDetailComponent.prototype.ngOnChanges = function () {
        if (this.game) {
            this.game.nbView++;
        }
    };
    GameDetailComponent.prototype.addToCart = function () {
        this.gameService.cart.add(this.game);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _video_game__WEBPACK_IMPORTED_MODULE_1__["VideoGame"])
    ], GameDetailComponent.prototype, "game", void 0);
    GameDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-detail',
            template: __webpack_require__(/*! ./game-detail.component.html */ "./src/app/game-detail/game-detail.component.html"),
            styles: [__webpack_require__(/*! ./game-detail.component.css */ "./src/app/game-detail/game-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
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
/* harmony import */ var _mock_video_games__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-video-games */ "./src/app/mock-video-games.ts");
/* harmony import */ var _video_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-game */ "./src/app/video-game.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameService = /** @class */ (function () {
    function GameService() {
        this.cart = new _video_game__WEBPACK_IMPORTED_MODULE_2__["Cart"]();
    }
    GameService.prototype.getGames = function () {
        return _mock_video_games__WEBPACK_IMPORTED_MODULE_1__["VIDEOGAMES"];
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/games/games.component.css":
/*!*******************************************!*\
  !*** ./src/app/games/games.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\r\n    background-color: #CFD8DC !important;\r\n    color: white;\r\n  }\r\n  .games {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n    \r\n  }\r\n  .games mat-list-item {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n  .games mat-list-item.selected:hover {\r\n    background-color: #BBD8DC !important;\r\n    color: white;\r\n  }\r\n  .games mat-list-item:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .games .text {\r\n    position: relative;\r\n    top: -3px;\r\n  }\r\n  .games .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -16px;\r\n    top: 0px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n  button {\r\n  display: block;\r\n}\r\n  #left {\r\n  width: 50%;\r\n  float: left;\r\n  margin-left: 6%;\r\n}\r\n  #right {\r\n  margin-left: 50%;\r\n  text-align: center;\r\n  padding-right: 17%;\r\n}\r\n  .clear {\r\n  clear: both;\r\n}\r\n  .mat-list {\r\n  display: table;\r\n}\r\n  .mat-list-text {\r\n  text-align: left !important;\r\n}\r\n  @media (max-width: 680px) {\r\n  #left {\r\n    width: 100%;\r\n    float: none;\r\n  }\r\n\r\n  #right {\r\n    margin: 1em auto 0;\r\n    width: 90%;\r\n    float: none;\r\n    padding: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Video Games</h2>\n\n<mat-list class=\"games\">\n  <mat-list-item *ngFor=\"let game of games\"\n    [class.selected]=\"game === selectedGame\"\n    (click)=\"onSelect(game)\">\n    <span class=\"badge\">{{game.id}}</span> {{game.title}}\n  </mat-list-item>\n</mat-list>\n\n<app-game-detail [game]=\"selectedGame\"></app-game-detail>\n\n"

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


var GamesComponent = /** @class */ (function () {
    function GamesComponent(gameService) {
        this.gameService = gameService;
    }
    GamesComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    GamesComponent.prototype.onSelect = function (game) {
        this.selectedGame = game;
    };
    GamesComponent.prototype.getGames = function () {
        this.games = this.gameService.getGames();
    };
    GamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/games/games.component.css")]
        }),
        __metadata("design:paramtypes", [_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], GamesComponent);
    return GamesComponent;
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

/***/ "./src/app/mock-video-games.ts":
/*!*************************************!*\
  !*** ./src/app/mock-video-games.ts ***!
  \*************************************/
/*! exports provided: VIDEOGAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIDEOGAMES", function() { return VIDEOGAMES; });
var VIDEOGAMES = [
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
    production: false
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

module.exports = __webpack_require__(/*! D:\CVC\Formation\JS\Angular\GIT\TP\RVG-temp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map