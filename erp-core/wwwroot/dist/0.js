(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./ClientApp/app/routes/home/home.module.ts":
/*!**************************************************!*\
  !*** ./ClientApp/app/routes/home/home.module.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var home_component_1 = __webpack_require__(/*! ./home/home.component */ "./ClientApp/app/routes/home/home/home.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [home_component_1.HomeComponent],
            exports: [
                router_1.RouterModule
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ }),

/***/ "./ClientApp/app/routes/home/home/home.component.html":
/*!************************************************************!*\
  !*** ./ClientApp/app/routes/home/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\r\n    <div class=\"jumbotron\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-3 col-lg-4\">\r\n                <div class=\"text-center\">\r\n                    <img alt=\"Angular\" class=\"img-fluid home-logo\" src=\"assets/img/angular.svg\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xl-9 col-lg-8 home-text\">\r\n                <h1 class=\"home-text-big\">Angle</h1>\r\n                <p class=\"lead\">Bootstrap 4 Admin Template + <strong>Angular6</strong>\r\n                    <br> <small>One framework. Mobile & desktop.</small>\r\n                </p>\r\n                <p><a class=\"btn btn-primary btn-lg\" href=\"https://angular.io/\" target=\"_blank\">Learn more</a></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card b\">\r\n                <div class=\"card-header\">\r\n                    <h3>Angular-cli</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    A Webpack powered command line interface with tons of utilities. Serve and build your project with a single command.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card b\">\r\n                <div class=\"card-header\">\r\n                    <h3>Router</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    Powerful and modern routes definitions. Easily declare routes and nested routes with components association.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card b\">\r\n                <div class=\"card-header\">\r\n                    <h3>Generators</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    Angular-CLI tool provides generators to create components, services, directives and pipe from the command line.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card b\">\r\n                <div class=\"card-header\">\r\n                    <h3>Modularized</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    This project has been carefully designed to provide modules for Core, Layout, Shared and Routed components.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card b\">\r\n                <div class=\"card-header\">\r\n                    <h3>Environments</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    Ready to work with multiple environments, from first stage development through test and production.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <div class=\"card b\">\r\n                <div class=\"card-header\">\r\n                    <h3>Style Guide</h3>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    Better practices for Code organization and Project structure based on the official Angular style guide.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/routes/home/home/home.component.scss":
/*!************************************************************!*\
  !*** ./ClientApp/app/routes/home/home/home.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./home.component.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/home/home/home.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/routes/home/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./ClientApp/app/routes/home/home/home.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./ClientApp/app/routes/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./ClientApp/app/routes/home/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/home/home/home.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/home/home/home.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-container {\n  margin: 0 auto;\n  max-width: 960px; }\n  .home-container .home-logo {\n    width: 240px; }\n  .home-container .home-text {\n    text-align: center; }\n    @media (min-width: 992px) {\n      .home-container .home-text {\n        text-align: left; } }\n  .home-container .home-text-big {\n    font-size: 3.9375rem; }\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9ob21lL2hvbWUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzPzZkN2YiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9HQUF5QztBQUN6Qyw4SEFBc0Q7QUFDdEQsNEdBQXVEO0FBRXZELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtDQUN6QyxDQUFDO0FBV0Y7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQVR0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2FBQ2hDO1lBQ0QsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUM3QixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7YUFDZjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBO0FBQWQsZ0NBQVU7Ozs7Ozs7Ozs7OztBQ2pCdkIsbTlHOzs7Ozs7Ozs7Ozs7QUNDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLG9HQUFrRDtBQVFsRDtJQUVJO0lBQWdCLENBQUM7SUFFakIsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFMUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsbUJBQU8sQ0FBQyxtRkFBdUIsQ0FBQztZQUMxQyxNQUFNLEVBQUUsQ0FBQyxtQkFBTyxDQUFDLG1GQUF1QixDQUFDLENBQUM7U0FDN0MsQ0FBQzs7T0FDVyxhQUFhLENBT3pCO0lBQUQsb0JBQUM7Q0FBQTtBQVBZLHNDQUFhOzs7Ozs7Ozs7Ozs7QUNSMUI7QUFDQTs7O0FBR0E7QUFDQSwwQ0FBMkMsbUJBQW1CLHFCQUFxQixFQUFFLGdDQUFnQyxtQkFBbUIsRUFBRSxnQ0FBZ0MseUJBQXlCLEVBQUUsaUNBQWlDLG9DQUFvQywyQkFBMkIsRUFBRSxFQUFFLG9DQUFvQywyQkFBMkIsRUFBRTs7QUFFMVciLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW0hvbWVDb21wb25lbnRdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImhvbWUtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwianVtYm90cm9uXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cXFwiQW5ndWxhclxcXCIgY2xhc3M9XFxcImltZy1mbHVpZCBob21lLWxvZ29cXFwiIHNyYz1cXFwiYXNzZXRzL2ltZy9hbmd1bGFyLnN2Z1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTkgY29sLWxnLTggaG9tZS10ZXh0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJob21lLXRleHQtYmlnXFxcIj5BbmdsZTwvaDE+XFxyXFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJsZWFkXFxcIj5Cb290c3RyYXAgNCBBZG1pbiBUZW1wbGF0ZSArIDxzdHJvbmc+QW5ndWxhcjY8L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxicj4gPHNtYWxsPk9uZSBmcmFtZXdvcmsuIE1vYmlsZSAmIGRlc2t0b3AuPC9zbWFsbD5cXHJcXG4gICAgICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICAgICAgICA8cD48YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9hbmd1bGFyLmlvL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkxlYXJuIG1vcmU8L2E+PC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgYlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Bbmd1bGFyLWNsaTwvaDM+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgQSBXZWJwYWNrIHBvd2VyZWQgY29tbWFuZCBsaW5lIGludGVyZmFjZSB3aXRoIHRvbnMgb2YgdXRpbGl0aWVzLiBTZXJ2ZSBhbmQgYnVpbGQgeW91ciBwcm9qZWN0IHdpdGggYSBzaW5nbGUgY29tbWFuZC5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDM+Um91dGVyPC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBQb3dlcmZ1bCBhbmQgbW9kZXJuIHJvdXRlcyBkZWZpbml0aW9ucy4gRWFzaWx5IGRlY2xhcmUgcm91dGVzIGFuZCBuZXN0ZWQgcm91dGVzIHdpdGggY29tcG9uZW50cyBhc3NvY2lhdGlvbi5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDM+R2VuZXJhdG9yczwvaDM+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgQW5ndWxhci1DTEkgdG9vbCBwcm92aWRlcyBnZW5lcmF0b3JzIHRvIGNyZWF0ZSBjb21wb25lbnRzLCBzZXJ2aWNlcywgZGlyZWN0aXZlcyBhbmQgcGlwZSBmcm9tIHRoZSBjb21tYW5kIGxpbmUuXFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgYlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Nb2R1bGFyaXplZDwvaDM+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBwcm9qZWN0IGhhcyBiZWVuIGNhcmVmdWxseSBkZXNpZ25lZCB0byBwcm92aWRlIG1vZHVsZXMgZm9yIENvcmUsIExheW91dCwgU2hhcmVkIGFuZCBSb3V0ZWQgY29tcG9uZW50cy5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDM+RW52aXJvbm1lbnRzPC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBSZWFkeSB0byB3b3JrIHdpdGggbXVsdGlwbGUgZW52aXJvbm1lbnRzLCBmcm9tIGZpcnN0IHN0YWdlIGRldmVsb3BtZW50IHRocm91Z2ggdGVzdCBhbmQgcHJvZHVjdGlvbi5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDM+U3R5bGUgR3VpZGU8L2gzPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIEJldHRlciBwcmFjdGljZXMgZm9yIENvZGUgb3JnYW5pemF0aW9uIGFuZCBQcm9qZWN0IHN0cnVjdHVyZSBiYXNlZCBvbiB0aGUgb2ZmaWNpYWwgQW5ndWxhciBzdHlsZSBndWlkZS5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaG9tZS5jb21wb25lbnQuc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5zY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ob21lLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogOTYwcHg7IH1cXG4gIC5ob21lLWNvbnRhaW5lciAuaG9tZS1sb2dvIHtcXG4gICAgd2lkdGg6IDI0MHB4OyB9XFxuICAuaG9tZS1jb250YWluZXIgLmhvbWUtdGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgICAuaG9tZS1jb250YWluZXIgLmhvbWUtdGV4dCB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9IH1cXG4gIC5ob21lLWNvbnRhaW5lciAuaG9tZS10ZXh0LWJpZyB7XFxuICAgIGZvbnQtc2l6ZTogMy45Mzc1cmVtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==