(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./ClientApp/app/routes/maps/google/google.component.html":
/*!****************************************************************!*\
  !*** ./ClientApp/app/routes/maps/google/google.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    <div>Google Maps\r\n        <small>This directive allows you to add Google Maps Javascript API elements.</small></div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"card card-default\">\r\n                <div class=\"card-header\">Classic Map</div>\r\n                <div class=\"card-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"card card-default\">\r\n                <div class=\"card-header\">Custom zoom</div>\r\n                <div class=\"card-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"19\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"card card-default\">\r\n                <div class=\"card-header\">Different Map Type (not supported yet)</div>\r\n                <div class=\"card-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"card card-default\">\r\n                <div class=\"card-header\">Multiple Markers</div>\r\n                <div class=\"card-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                        <agm-marker [latitude]=\"33.787453\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card card-default\">\r\n                <div class=\"card-header\">Styled Maps</div>\r\n                <div class=\"card-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" [styles]=\"mapStyles\" class=\"gmap\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/routes/maps/google/google.component.scss":
/*!****************************************************************!*\
  !*** ./ClientApp/app/routes/maps/google/google.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./google.component.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/maps/google/google.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/routes/maps/google/google.component.ts":
/*!**************************************************************!*\
  !*** ./ClientApp/app/routes/maps/google/google.component.ts ***!
  \**************************************************************/
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
var GoogleComponent = /** @class */ (function () {
    function GoogleComponent() {
        this.lat = 33.790807;
        this.lng = -117.835734;
        this.zoom = 14;
        this.scrollwheel = false;
        // custom map style
        this.mapStyles = [{ 'featureType': 'water', 'stylers': [{ 'visibility': 'on' }, { 'color': '#bdd1f9' }] }, { 'featureType': 'all', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#334165' }] }, { featureType: 'landscape', stylers: [{ color: '#e9ebf1' }] }, { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#c5c6c6' }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#d8dbe0' }] }, { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#cfd5e0' }] }, { featureType: 'administrative', stylers: [{ visibility: 'on' }, { lightness: 33 }] }, { featureType: 'poi.park', elementType: 'labels', stylers: [{ visibility: 'on' }, { lightness: 20 }] }, { featureType: 'road', stylers: [{ color: '#d8dbe0', lightness: 20 }] }];
    }
    GoogleComponent.prototype.ngOnInit = function () {
    };
    GoogleComponent = __decorate([
        core_1.Component({
            selector: 'app-google',
            template: __webpack_require__(/*! ./google.component.html */ "./ClientApp/app/routes/maps/google/google.component.html"),
            styles: [__webpack_require__(/*! ./google.component.scss */ "./ClientApp/app/routes/maps/google/google.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GoogleComponent);
    return GoogleComponent;
}());
exports.GoogleComponent = GoogleComponent;


/***/ }),

/***/ "./ClientApp/app/routes/maps/maps.module.ts":
/*!**************************************************!*\
  !*** ./ClientApp/app/routes/maps/maps.module.ts ***!
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var core_2 = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var shared_module_1 = __webpack_require__(/*! ../../shared/shared.module */ "./ClientApp/app/shared/shared.module.ts");
var google_component_1 = __webpack_require__(/*! ./google/google.component */ "./ClientApp/app/routes/maps/google/google.component.ts");
var vector_component_1 = __webpack_require__(/*! ./vector/vector.component */ "./ClientApp/app/routes/maps/vector/vector.component.ts");
var routes = [
    { path: 'google', component: google_component_1.GoogleComponent },
    { path: 'vector', component: vector_component_1.VectorComponent }
];
var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
                })
            ],
            declarations: [
                google_component_1.GoogleComponent,
                vector_component_1.VectorComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], MapsModule);
    return MapsModule;
}());
exports.MapsModule = MapsModule;


/***/ }),

/***/ "./ClientApp/app/routes/maps/vector/vector.component.html":
/*!****************************************************************!*\
  !*** ./ClientApp/app/routes/maps/vector/vector.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    <div>Vector Maps\r\n       <small>Resolution independent maps</small></div>\r\n</div>\r\n<div vectormap [mapHeight]=\"700\" [mapName]=\"mapName\" [seriesData]=\"seriesData\" [markersData]=\"markersData\" [mapOptions]=\"mapOptions\" ></div>\r\n"

/***/ }),

/***/ "./ClientApp/app/routes/maps/vector/vector.component.scss":
/*!****************************************************************!*\
  !*** ./ClientApp/app/routes/maps/vector/vector.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./vector.component.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/maps/vector/vector.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/routes/maps/vector/vector.component.ts":
/*!**************************************************************!*\
  !*** ./ClientApp/app/routes/maps/vector/vector.component.ts ***!
  \**************************************************************/
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
var VectorComponent = /** @class */ (function () {
    function VectorComponent() {
        this.defaultColors = {
            markerColor: '#23b7e5',
            bgColor: 'transparent',
            scaleColors: ['#878c9a'],
            regionFill: '#bbbec6' // the base region color
        };
        this.mapName = 'world_mill_en';
        this.mapOptions = {
            markerColor: this.defaultColors.markerColor,
            bgColor: this.defaultColors.bgColor,
            scale: 1,
            scaleColors: this.defaultColors.scaleColors,
            regionFill: this.defaultColors.regionFill
        };
        this.seriesData = {
            'CA': 11100,
            'DE': 2510,
            'FR': 3710,
            'AU': 5710,
            'GB': 8310,
            'RU': 9310,
            'BR': 6610,
            'IN': 7810,
            'CN': 4310,
            'US': 839,
            'SA': 410 // Saudi Arabia
        };
        this.markersData = [
            { latLng: [41.90, 12.45], name: 'Vatican City' },
            { latLng: [43.73, 7.41], name: 'Monaco' },
            { latLng: [-0.52, 166.93], name: 'Nauru' },
            { latLng: [-8.51, 179.21], name: 'Tuvalu' },
            { latLng: [7.11, 171.06], name: 'Marshall Islands' },
            { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
            { latLng: [3.2, 73.22], name: 'Maldives' },
            { latLng: [35.88, 14.5], name: 'Malta' },
            { latLng: [41.0, -71.06], name: 'New England' },
            { latLng: [12.05, -61.75], name: 'Grenada' },
            { latLng: [13.16, -59.55], name: 'Barbados' },
            { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
            { latLng: [-4.61, 55.45], name: 'Seychelles' },
            { latLng: [7.35, 134.46], name: 'Palau' },
            { latLng: [42.5, 1.51], name: 'Andorra' }
        ];
    }
    VectorComponent.prototype.ngOnInit = function () {
    };
    VectorComponent = __decorate([
        core_1.Component({
            selector: 'app-vector',
            template: __webpack_require__(/*! ./vector.component.html */ "./ClientApp/app/routes/maps/vector/vector.component.html"),
            styles: [__webpack_require__(/*! ./vector.component.scss */ "./ClientApp/app/routes/maps/vector/vector.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VectorComponent);
    return VectorComponent;
}());
exports.VectorComponent = VectorComponent;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/maps/google/google.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/maps/google/google.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/maps/vector/vector.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/maps/vector/vector.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9tYXBzL2dvb2dsZS9nb29nbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvbWFwcy9nb29nbGUvZ29vZ2xlLmNvbXBvbmVudC5zY3NzP2UxMzAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvbWFwcy9nb29nbGUvZ29vZ2xlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9tYXBzL21hcHMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL21hcHMvdmVjdG9yL3ZlY3Rvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9tYXBzL3ZlY3Rvci92ZWN0b3IuY29tcG9uZW50LnNjc3M/ZDcyNyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9tYXBzL3ZlY3Rvci92ZWN0b3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL21hcHMvZ29vZ2xlL2dvb2dsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9tYXBzL3ZlY3Rvci92ZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaWlHOzs7Ozs7Ozs7Ozs7QUNDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLG9HQUFrRDtBQU9sRDtJQVVJO1FBUkEsUUFBRyxHQUFXLFNBQVMsQ0FBQztRQUN4QixRQUFHLEdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDMUIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixtQkFBbUI7UUFDbkIsY0FBUyxHQUFHLENBQUMsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVB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SUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQ3hELEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUM5QyxFQUFFLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1lBQ3pDLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7U0FDNUMsQ0FBQztJQUVOLENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQTdEUSxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsbUJBQU8sQ0FBQyx5RkFBeUIsQ0FBQztZQUM1QyxNQUFNLEVBQUUsQ0FBQyxtQkFBTyxDQUFDLHlGQUF5QixDQUFDLENBQUM7U0FDL0MsQ0FBQzs7T0FDVyxlQUFlLENBK0QzQjtJQUFELHNCQUFDO0NBQUE7QUEvRFksMENBQWU7Ozs7Ozs7Ozs7OztBQ1A1QjtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGVudC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgPGRpdj5Hb29nbGUgTWFwc1xcclxcbiAgICAgICAgPHNtYWxsPlRoaXMgZGlyZWN0aXZlIGFsbG93cyB5b3UgdG8gYWRkIEdvb2dsZSBNYXBzIEphdmFzY3JpcHQgQVBJIGVsZW1lbnRzLjwvc21hbGw+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy02XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGNhcmQtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5DbGFzc2ljIE1hcDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cXFwibGF0XFxcIiBbbG9uZ2l0dWRlXT1cXFwibG5nXFxcIiBbem9vbV09XFxcInpvb21cXFwiIFtzY3JvbGx3aGVlbF09XFxcInNjcm9sbHdoZWVsXFxcIiBjbGFzcz1cXFwiZ21hcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFnbS1tYXJrZXIgW2xhdGl0dWRlXT1cXFwibGF0XFxcIiBbbG9uZ2l0dWRlXT1cXFwibG5nXFxcIj48L2FnbS1tYXJrZXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2FnbS1tYXA+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctNlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+Q3VzdG9tIHpvb208L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XFxcImxhdFxcXCIgW2xvbmdpdHVkZV09XFxcImxuZ1xcXCIgW3pvb21dPVxcXCIxOVxcXCIgW3Njcm9sbHdoZWVsXT1cXFwic2Nyb2xsd2hlZWxcXFwiIGNsYXNzPVxcXCJnbWFwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YWdtLW1hcmtlciBbbGF0aXR1ZGVdPVxcXCJsYXRcXFwiIFtsb25naXR1ZGVdPVxcXCJsbmdcXFwiPjwvYWdtLW1hcmtlcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYWdtLW1hcD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctNlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+RGlmZmVyZW50IE1hcCBUeXBlIChub3Qgc3VwcG9ydGVkIHlldCk8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XFxcImxhdFxcXCIgW2xvbmdpdHVkZV09XFxcImxuZ1xcXCIgW3pvb21dPVxcXCJ6b29tXFxcIiBbc2Nyb2xsd2hlZWxdPVxcXCJzY3JvbGx3aGVlbFxcXCIgY2xhc3M9XFxcImdtYXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhZ20tbWFya2VyIFtsYXRpdHVkZV09XFxcImxhdFxcXCIgW2xvbmdpdHVkZV09XFxcImxuZ1xcXCI+PC9hZ20tbWFya2VyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hZ20tbWFwPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPk11bHRpcGxlIE1hcmtlcnM8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XFxcImxhdFxcXCIgW2xvbmdpdHVkZV09XFxcImxuZ1xcXCIgW3pvb21dPVxcXCJ6b29tXFxcIiBbc2Nyb2xsd2hlZWxdPVxcXCJzY3JvbGx3aGVlbFxcXCIgY2xhc3M9XFxcImdtYXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhZ20tbWFya2VyIFtsYXRpdHVkZV09XFxcImxhdFxcXCIgW2xvbmdpdHVkZV09XFxcImxuZ1xcXCI+PC9hZ20tbWFya2VyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhZ20tbWFya2VyIFtsYXRpdHVkZV09XFxcIjMzLjc4NzQ1M1xcXCIgW2xvbmdpdHVkZV09XFxcImxuZ1xcXCI+PC9hZ20tbWFya2VyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hZ20tbWFwPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+U3R5bGVkIE1hcHM8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhZ20tbWFwIFtsYXRpdHVkZV09XFxcImxhdFxcXCIgW2xvbmdpdHVkZV09XFxcImxuZ1xcXCIgW3pvb21dPVxcXCJ6b29tXFxcIiBbc2Nyb2xsd2hlZWxdPVxcXCJzY3JvbGx3aGVlbFxcXCIgW3N0eWxlc109XFxcIm1hcFN0eWxlc1xcXCIgY2xhc3M9XFxcImdtYXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhZ20tbWFya2VyIFtsYXRpdHVkZV09XFxcImxhdFxcXCIgW2xvbmdpdHVkZV09XFxcImxuZ1xcXCI+PC9hZ20tbWFya2VyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hZ20tbWFwPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIiIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9nb29nbGUuY29tcG9uZW50LnNjc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWdvb2dsZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9nb29nbGUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZ29vZ2xlLmNvbXBvbmVudC5zY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGxhdDogbnVtYmVyID0gMzMuNzkwODA3O1xyXG4gICAgbG5nOiBudW1iZXIgPSAtMTE3LjgzNTczNDtcclxuICAgIHpvb206IG51bWJlciA9IDE0O1xyXG4gICAgc2Nyb2xsd2hlZWwgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBjdXN0b20gbWFwIHN0eWxlXHJcbiAgICBtYXBTdHlsZXMgPSBbeyAnZmVhdHVyZVR5cGUnOiAnd2F0ZXInLCAnc3R5bGVycyc6IFt7ICd2aXNpYmlsaXR5JzogJ29uJyB9LCB7ICdjb2xvcic6ICcjYmRkMWY5JyB9XSB9LCB7ICdmZWF0dXJlVHlwZSc6ICdhbGwnLCAnZWxlbWVudFR5cGUnOiAnbGFiZWxzLnRleHQuZmlsbCcsICdzdHlsZXJzJzogW3sgJ2NvbG9yJzogJyMzMzQxNjUnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdsYW5kc2NhcGUnLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNlOWViZjEnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLCBlbGVtZW50VHlwZTogJ2dlb21ldHJ5Jywgc3R5bGVyczogW3sgY29sb3I6ICcjYzVjNmM2JyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncm9hZC5hcnRlcmlhbCcsIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNmZmYnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdyb2FkLmxvY2FsJywgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2ZmZicgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3RyYW5zaXQnLCBlbGVtZW50VHlwZTogJ2dlb21ldHJ5Jywgc3R5bGVyczogW3sgY29sb3I6ICcjZDhkYmUwJyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncG9pJywgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2NmZDVlMCcgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlJywgc3R5bGVyczogW3sgdmlzaWJpbGl0eTogJ29uJyB9LCB7IGxpZ2h0bmVzczogMzMgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3BvaS5wYXJrJywgZWxlbWVudFR5cGU6ICdsYWJlbHMnLCBzdHlsZXJzOiBbeyB2aXNpYmlsaXR5OiAnb24nIH0sIHsgbGlnaHRuZXNzOiAyMCB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncm9hZCcsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2Q4ZGJlMCcsIGxpZ2h0bmVzczogMjAgfV0gfV07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBZ21Db3JlTW9kdWxlIH0gZnJvbSAnQGFnbS9jb3JlJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgR29vZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi9nb29nbGUvZ29vZ2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vdmVjdG9yL3ZlY3Rvci5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6ICdnb29nbGUnLCBjb21wb25lbnQ6IEdvb2dsZUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAndmVjdG9yJywgY29tcG9uZW50OiBWZWN0b3JDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXHJcbiAgICAgICAgQWdtQ29yZU1vZHVsZS5mb3JSb290KHtcclxuICAgICAgICAgICAgYXBpS2V5OiAnQUl6YVN5Qk5zNDJSdF9DeXhBcWRiSUJLMGE1VXQ4M1FpYXVFU1BBJ1xyXG4gICAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgR29vZ2xlQ29tcG9uZW50LFxyXG4gICAgICAgIFZlY3RvckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcHNNb2R1bGUgeyB9IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtaGVhZGluZ1xcXCI+XFxyXFxuICAgIDxkaXY+VmVjdG9yIE1hcHNcXHJcXG4gICAgICAgPHNtYWxsPlJlc29sdXRpb24gaW5kZXBlbmRlbnQgbWFwczwvc21hbGw+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiB2ZWN0b3JtYXAgW21hcEhlaWdodF09XFxcIjcwMFxcXCIgW21hcE5hbWVdPVxcXCJtYXBOYW1lXFxcIiBbc2VyaWVzRGF0YV09XFxcInNlcmllc0RhdGFcXFwiIFttYXJrZXJzRGF0YV09XFxcIm1hcmtlcnNEYXRhXFxcIiBbbWFwT3B0aW9uc109XFxcIm1hcE9wdGlvbnNcXFwiID48L2Rpdj5cXHJcXG5cIiIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi92ZWN0b3IuY29tcG9uZW50LnNjc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXZlY3RvcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi92ZWN0b3IuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vdmVjdG9yLmNvbXBvbmVudC5zY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIG1hcE5hbWU6IHN0cmluZztcclxuICAgIHNlcmllc0RhdGE6IGFueTtcclxuICAgIG1hcmtlcnNEYXRhOiBhbnk7XHJcbiAgICBtYXBPcHRpb25zOiBhbnk7XHJcblxyXG4gICAgZGVmYXVsdENvbG9yczogYW55ID0ge1xyXG4gICAgICAgIG1hcmtlckNvbG9yOiAnIzIzYjdlNScsICAgICAgLy8gdGhlIG1hcmtlciBwb2ludHNcclxuICAgICAgICBiZ0NvbG9yOiAndHJhbnNwYXJlbnQnLCAgICAgIC8vIHRoZSBiYWNrZ3JvdW5kXHJcbiAgICAgICAgc2NhbGVDb2xvcnM6IFsnIzg3OGM5YSddLCAgICAvLyB0aGUgY29sb3Igb2YgdGhlIHJlZ2lvbiBpbiB0aGUgc2VyaWVcclxuICAgICAgICByZWdpb25GaWxsOiAnI2JiYmVjNicgICAgICAgLy8gdGhlIGJhc2UgcmVnaW9uIGNvbG9yXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLm1hcE5hbWUgPSAnd29ybGRfbWlsbF9lbic7XHJcblxyXG4gICAgICAgIHRoaXMubWFwT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWFya2VyQ29sb3I6IHRoaXMuZGVmYXVsdENvbG9ycy5tYXJrZXJDb2xvcixcclxuICAgICAgICAgICAgYmdDb2xvcjogdGhpcy5kZWZhdWx0Q29sb3JzLmJnQ29sb3IsXHJcbiAgICAgICAgICAgIHNjYWxlOiAxLFxyXG4gICAgICAgICAgICBzY2FsZUNvbG9yczogdGhpcy5kZWZhdWx0Q29sb3JzLnNjYWxlQ29sb3JzLFxyXG4gICAgICAgICAgICByZWdpb25GaWxsOiB0aGlzLmRlZmF1bHRDb2xvcnMucmVnaW9uRmlsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2VyaWVzRGF0YSA9IHtcclxuICAgICAgICAgICAgJ0NBJzogMTExMDAsICAgLy8gQ2FuYWRhXHJcbiAgICAgICAgICAgICdERSc6IDI1MTAsICAgIC8vIEdlcm1hbnlcclxuICAgICAgICAgICAgJ0ZSJzogMzcxMCwgICAgLy8gRnJhbmNlXHJcbiAgICAgICAgICAgICdBVSc6IDU3MTAsICAgIC8vIEF1c3RyYWxpYVxyXG4gICAgICAgICAgICAnR0InOiA4MzEwLCAgICAvLyBHcmVhdCBCcml0YWluXHJcbiAgICAgICAgICAgICdSVSc6IDkzMTAsICAgIC8vIFJ1c3NpYVxyXG4gICAgICAgICAgICAnQlInOiA2NjEwLCAgICAvLyBCcmF6aWxcclxuICAgICAgICAgICAgJ0lOJzogNzgxMCwgICAgLy8gSW5kaWFcclxuICAgICAgICAgICAgJ0NOJzogNDMxMCwgICAgLy8gQ2hpbmFcclxuICAgICAgICAgICAgJ1VTJzogODM5LCAgICAgLy8gVVNBXHJcbiAgICAgICAgICAgICdTQSc6IDQxMCAgICAgIC8vIFNhdWRpIEFyYWJpYVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubWFya2Vyc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNDEuOTAsIDEyLjQ1XSwgbmFtZTogJ1ZhdGljYW4gQ2l0eScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFs0My43MywgNy40MV0sIG5hbWU6ICdNb25hY28nIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbLTAuNTIsIDE2Ni45M10sIG5hbWU6ICdOYXVydScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFstOC41MSwgMTc5LjIxXSwgbmFtZTogJ1R1dmFsdScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFs3LjExLCAxNzEuMDZdLCBuYW1lOiAnTWFyc2hhbGwgSXNsYW5kcycgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFsxNy4zLCAtNjIuNzNdLCBuYW1lOiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzMuMiwgNzMuMjJdLCBuYW1lOiAnTWFsZGl2ZXMnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbMzUuODgsIDE0LjVdLCBuYW1lOiAnTWFsdGEnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNDEuMCwgLTcxLjA2XSwgbmFtZTogJ05ldyBFbmdsYW5kJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzEyLjA1LCAtNjEuNzVdLCBuYW1lOiAnR3JlbmFkYScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFsxMy4xNiwgLTU5LjU1XSwgbmFtZTogJ0JhcmJhZG9zJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzE3LjExLCAtNjEuODVdLCBuYW1lOiAnQW50aWd1YSBhbmQgQmFyYnVkYScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFstNC42MSwgNTUuNDVdLCBuYW1lOiAnU2V5Y2hlbGxlcycgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFs3LjM1LCAxMzQuNDZdLCBuYW1lOiAnUGFsYXUnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNDIuNSwgMS41MV0sIG5hbWU6ICdBbmRvcnJhJyB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iXSwic291cmNlUm9vdCI6IiJ9