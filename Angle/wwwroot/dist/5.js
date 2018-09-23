(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./ClientApp/app/routes/charts/chartjs/chartjs.component.html":
/*!********************************************************************!*\
  !*** ./ClientApp/app/routes/charts/chartjs/chartjs.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Chart JS</div>\r\n<div class=\"container-fluid container-lg\">\r\n   <div class=\"row mb-4\">\r\n      <div class=\"col-xl-6\">\r\n         <h4>Line Chart</h4>\r\n         <div>\r\n            <canvas baseChart [chartType]=\"'line'\" [options]=\"lineOptions\" [datasets]=\"lineData.datasets\" [colors]=\"lineColors\" [labels]=\"lineData.labels\" [legend]=\"false\" height=\"120\"></canvas>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-xl-6\">\r\n         <h4>Bar Chart</h4>\r\n         <div>\r\n            <canvas baseChart [chartType]=\"'bar'\" [options]=\"barOptions\" [datasets]=\"barData.datasets\" [colors]=\"barColors\" [labels]=\"barData.labels\" [legend]=\"false\" height=\"120\"></canvas>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"row mb-4\">\r\n      <div class=\"col-xl-6\">\r\n         <h4>Polar Area Chart</h4>\r\n         <div>\r\n            <canvas baseChart [chartType]=\"'polarArea'\" [options]=\"polarOptions\" [datasets]=\"polarData.datasets\" [labels]=\"polarData.labels\" [colors]=\"polarColors\" [legend]=\"false\" height=\"180\"></canvas>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-xl-6\">\r\n         <h4>Radar Chart</h4>\r\n         <div>\r\n            <canvas baseChart [chartType]=\"'radar'\" [options]=\"radarOptions\" [datasets]=\"radarData.datasets\" [colors]=\"radarColors\" [labels]=\"radarData.labels\" [legend]=\"false\" height=\"180\"></canvas>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"row mb-4\">\r\n      <div class=\"col-xl-6\">\r\n         <h4>Pie Chart</h4>\r\n         <div>\r\n            <canvas baseChart [chartType]=\"'pie'\" [options]=\"pieOptions\" [datasets]=\"pieData.datasets\" [colors]=\"pieColors\" [labels]=\"pieData.labels\" [legend]=\"false\" height=\"80\"></canvas>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-xl-6\">\r\n         <h4>Doughnut Chart</h4>\r\n         <div>\r\n            <canvas baseChart [chartType]=\"'doughnut'\" [options]=\"doughnutOptions\" [datasets]=\"doughnutData.datasets\" [colors]=\"doughnutColors\" [labels]=\"doughnutData.labels\" [legend]=\"false\" height=\"80\"></canvas>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/routes/charts/chartjs/chartjs.component.scss":
/*!********************************************************************!*\
  !*** ./ClientApp/app/routes/charts/chartjs/chartjs.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./chartjs.component.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/charts/chartjs/chartjs.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/routes/charts/chartjs/chartjs.component.ts":
/*!******************************************************************!*\
  !*** ./ClientApp/app/routes/charts/chartjs/chartjs.component.ts ***!
  \******************************************************************/
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
var colors_service_1 = __webpack_require__(/*! ../../../shared/colors/colors.service */ "./ClientApp/app/shared/colors/colors.service.ts");
var ChartjsComponent = /** @class */ (function () {
    function ChartjsComponent(colors) {
        this.colors = colors;
        // Line chart
        // -----------------------------------
        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
                }, {
                    label: 'My Second dataset',
                    data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
                }
            ]
        };
        this.lineColors = [
            {
                backgroundColor: 'rgba(114,102,186,0.2)',
                borderColor: 'rgba(114,102,186,1)',
                pointBackgroundColor: 'rgba(114,102,186,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(114,102,186,1)'
            }, {
                backgroundColor: 'rgba(35,183,229,0.2)',
                borderColor: 'rgba(35,183,229,1)',
                pointBackgroundColor: 'rgba(35,183,229,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(35,183,229,1)'
            }
        ];
        this.lineOptions = {
            animation: false,
            responsive: true
        };
        // Bar chart
        // -----------------------------------
        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
                }, {
                    data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
                }
            ]
        };
        this.barColors = [
            {
                backgroundColor: this.colors.byName('info'),
                borderColor: this.colors.byName('info'),
                pointHoverBackgroundColor: this.colors.byName('info'),
                pointHoverBorderColor: this.colors.byName('info')
            }, {
                backgroundColor: this.colors.byName('primary'),
                borderColor: this.colors.byName('primary'),
                pointHoverBackgroundColor: this.colors.byName('primary'),
                pointHoverBorderColor: this.colors.byName('primary')
            }
        ];
        this.barOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        //  Doughnut chart
        // -----------------------------------
        this.doughnutData = {
            labels: [
                'Purple',
                'Info',
                'Yellow'
            ],
            datasets: [{
                    data: [30, 50, 20]
                }]
        };
        this.doughnutColors = [{
                borderColor: [
                    this.colors.byName('purple'),
                    this.colors.byName('info'),
                    this.colors.byName('yellow')
                ],
                backgroundColor: [
                    this.colors.byName('purple'),
                    this.colors.byName('info'),
                    this.colors.byName('yellow')
                ],
            }];
        this.doughnutOptions = {
            responsive: true
        };
        // Pie chart
        // -----------------------------------
        this.pieData = {
            labels: [
                'Purple',
                'Yellow',
                'Info'
            ],
            datasets: [{
                    data: [30, 40, 30]
                }]
        };
        this.pieColors = [{
                borderColor: [
                    this.colors.byName('info'),
                    this.colors.byName('yellow'),
                    this.colors.byName('purple')
                ],
                backgroundColor: [
                    this.colors.byName('info'),
                    this.colors.byName('yellow'),
                    this.colors.byName('purple')
                ],
            }];
        this.pieOptions = {
            responsive: true
        };
        // Polar chart
        // -----------------------------------
        this.polarData = {
            datasets: [{
                    data: [
                        300,
                        50,
                        100,
                        140
                    ],
                    label: 'My dataset' // for legend
                }],
            labels: [
                'Red',
                'Green',
                'Yellow',
                'Grey'
            ]
        };
        this.polarColors = [
            {
                backgroundColor: [
                    this.colors.byName('pink'),
                    this.colors.byName('purple'),
                    this.colors.byName('pink'),
                    this.colors.byName('purple')
                ],
                borderColor: [
                    this.colors.byName('pink'),
                    this.colors.byName('purple'),
                    this.colors.byName('pink'),
                    this.colors.byName('purple')
                ],
            }
        ];
        this.polarOptions = {
            responsive: true
        };
        // Radar chart
        // -----------------------------------
        this.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    data: [65, 59, 90, 81, 56, 55, 40]
                }, {
                    label: 'My Second dataset',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        this.radarColors = [
            {
                backgroundColor: 'rgba(114,102,186,0.2)',
                borderColor: 'rgba(114,102,186,1)',
                pointColor: 'rgba(114,102,186,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(114,102,186,1)'
            }, {
                backgroundColor: 'rgba(151,187,205,0.2)',
                borderColor: 'rgba(151,187,205,1)',
                pointColor: 'rgba(151,187,205,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(151,187,205,1)'
            }
        ];
        this.radarOptions = {
            responsive: true
        };
    }
    ChartjsComponent.prototype.ngOnInit = function () {
    };
    // random values for demo
    ChartjsComponent.prototype.rFactor = function () {
        return Math.round(Math.random() * 100);
    };
    ;
    ChartjsComponent = __decorate([
        core_1.Component({
            selector: 'app-chartjs',
            template: __webpack_require__(/*! ./chartjs.component.html */ "./ClientApp/app/routes/charts/chartjs/chartjs.component.html"),
            styles: [__webpack_require__(/*! ./chartjs.component.scss */ "./ClientApp/app/routes/charts/chartjs/chartjs.component.scss")]
        }),
        __metadata("design:paramtypes", [colors_service_1.ColorsService])
    ], ChartjsComponent);
    return ChartjsComponent;
}());
exports.ChartjsComponent = ChartjsComponent;


/***/ }),

/***/ "./ClientApp/app/routes/charts/charts.module.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/routes/charts/charts.module.ts ***!
  \******************************************************/
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
var ng2_charts_1 = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
var shared_module_1 = __webpack_require__(/*! ../../shared/shared.module */ "./ClientApp/app/shared/shared.module.ts");
var chartjs_component_1 = __webpack_require__(/*! ./chartjs/chartjs.component */ "./ClientApp/app/routes/charts/chartjs/chartjs.component.ts");
var flot_component_1 = __webpack_require__(/*! ./flot/flot.component */ "./ClientApp/app/routes/charts/flot/flot.component.ts");
var radial_component_1 = __webpack_require__(/*! ./radial/radial.component */ "./ClientApp/app/routes/charts/radial/radial.component.ts");
var routes = [
    { path: 'flot', component: flot_component_1.FlotComponent },
    { path: 'radial', component: radial_component_1.RadialComponent },
    { path: 'chartjs', component: chartjs_component_1.ChartjsComponent }
];
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                ng2_charts_1.ChartsModule
            ],
            declarations: [
                flot_component_1.FlotComponent,
                radial_component_1.RadialComponent,
                chartjs_component_1.ChartjsComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], ChartsModule);
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;


/***/ }),

/***/ "./ClientApp/app/routes/charts/flot/flot.component.html":
/*!**************************************************************!*\
  !*** ./ClientApp/app/routes/charts/flot/flot.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n   Flot charts\r\n   <div class=\"ml-auto text-center\">\r\n        <div sparkline data-bar-color=\"#cfdbe2\" data-height=\"20\" data-bar-width=\"3\" data-bar-spacing=\"2\" values=\"1,0,4,9,5,7,8,9,5,7,8,4,7\"></div>\r\n   </div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n   <!-- START row-->\r\n   <div class=\"row\">\r\n      <div class=\"col-xl-6\">\r\n         <div class=\"card card-default\" id=\"cardChart1\">\r\n            <div class=\"card-header\">\r\n               <div class=\"card-title\">Area</div>\r\n            </div>\r\n            <div class=\"card-wrapper\">\r\n               <div class=\"card-body\">\r\n                  <div flot [dataset]=\"areaData\" [options]=\"areaOptions\" height=\"300\" (ready)=\"ready($event)\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-xl-6\">\r\n         <div class=\"card card-default\" id=\"cardChart9\">\r\n            <div class=\"card-header\">\r\n               <div class=\"card-title\">Area Spline</div>\r\n            </div>\r\n            <div class=\"card-wrapper\">\r\n               <div class=\"card-body\">\r\n                  <div flot [dataset]=\"splineData\" [options]=\"splineOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- END row-->\r\n   <!-- START row-->\r\n   <div class=\"row\">\r\n      <div class=\"col-xl-6\">\r\n         <div class=\"card card-default\" id=\"cardChart2\">\r\n            <div class=\"card-header\">\r\n               <div class=\"card-title\">Bar</div>\r\n            </div>\r\n            <div class=\"card-wrapper\">\r\n               <div class=\"card-body\">\r\n                  <div flot [dataset]=\"barData\" [options]=\"barOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-xl-6\">\r\n         <div class=\"card card-default\" id=\"cardChart3\">\r\n            <div class=\"card-header\">\r\n               <div class=\"card-title\">Bar - Stacked</div>\r\n            </div>\r\n            <div class=\"card-wrapper\">\r\n               <div class=\"card-body\">\r\n                  <div class=\"indicator show\">\r\n                     <span class=\"spinner\"></span>\r\n                  </div>\r\n                  <div flot [dataset]=\"barStackeData\" [options]=\"barStackedOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- END row-->\r\n   <!-- START row-->\r\n   <div class=\"row\">\r\n      <div class=\"col-xl-12\">\r\n         <div class=\"card card-default\" id=\"cardChart4\">\r\n            <div class=\"card-header\">\r\n               <div class=\"card-title\">Real Time <small>(30ms)</small></div>\r\n            </div>\r\n            <div class=\"card-wrapper\">\r\n               <div class=\"card-body\">\r\n                  <div flot [dataset]=\"realTimeData\" [options]=\"realTimeOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- END row-->\r\n   <!-- START row-->\r\n   <div class=\"row\">\r\n      <div class=\"col-xl-12\">\r\n         <div class=\"card card-default\" id=\"cardChart4\">\r\n            <div class=\"card-header\">\r\n               <div class=\"card-title\">Line</div>\r\n            </div>\r\n            <div class=\"card-wrapper\">\r\n               <div class=\"card-body\">\r\n                  <div flot [dataset]=\"lineData\" [options]=\"lineOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- END row-->\r\n   <!-- START row-->\r\n   <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n         <div class=\"card card-default\" id=\"cardChart5\">\r\n            <div class=\"card-header\">\r\n               <div class=\"card-title\">Pie</div>\r\n            </div>\r\n            <div class=\"card-wrapper\">\r\n               <div class=\"card-body\">\r\n                  <div flot [dataset]=\"pieData\" [options]=\"pieOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n         <div class=\"card card-default\" id=\"cardChart6\">\r\n            <div class=\"card-header\">\r\n               <div class=\"card-title\">Donut</div>\r\n            </div>\r\n            <div class=\"card-wrapper\">\r\n               <div class=\"card-body\">\r\n                  <div flot [dataset]=\"donutData\" [options]=\"donutOptions\" height=\"300\"></div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- END row-->\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/routes/charts/flot/flot.component.scss":
/*!**************************************************************!*\
  !*** ./ClientApp/app/routes/charts/flot/flot.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./flot.component.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/charts/flot/flot.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/routes/charts/flot/flot.component.ts":
/*!************************************************************!*\
  !*** ./ClientApp/app/routes/charts/flot/flot.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
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
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var FlotComponent = /** @class */ (function () {
    function FlotComponent(http) {
        var _this = this;
        this.http = http;
        this.areaOptions = {
            series: {
                lines: {
                    show: true,
                    fill: 0.8
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                tickColor: '#eee',
                // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                tickFormatter: function (v) {
                    return v + ' visitors';
                }
            },
            shadowSize: 0
        };
        this.barOptions = {
            series: {
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                tickColor: '#eee'
            },
            shadowSize: 0
        };
        this.barStackedOptions = {
            series: {
                stack: true,
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 200,
                // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                tickColor: '#eee'
            },
            shadowSize: 0
        };
        this.lineOptions = {
            series: {
                lines: {
                    show: true,
                    fill: 0.01
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#eee',
                mode: 'categories'
            },
            yaxis: {
                // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                tickColor: '#eee'
            },
            shadowSize: 0
        };
        // PIE
        // -----------------------------------
        this.pieData = [{
                'label': 'jQuery',
                'color': '#4acab4',
                'data': 30
            }, {
                'label': 'CSS',
                'color': '#ffea88',
                'data': 40
            }, {
                'label': 'LESS',
                'color': '#ff8153',
                'data': 90
            }, {
                'label': 'SASS',
                'color': '#878bb6',
                'data': 75
            }, {
                'label': 'Jade',
                'color': '#b2d767',
                'data': 120
            }];
        this.pieOptions = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0,
                    label: {
                        show: true,
                        radius: 0.8,
                        formatter: function (label, series) {
                            return '<div class="flot-pie-label">' +
                                // label + ' : ' +
                                Math.round(series.percent) +
                                '%</div>';
                        },
                        background: {
                            opacity: 0.8,
                            color: '#222'
                        }
                    }
                }
            }
        };
        // DONUT
        // -----------------------------------
        this.donutData = [{
                'color': '#39C558',
                'data': 60,
                'label': 'Coffee'
            },
            {
                'color': '#00b4ff',
                'data': 90,
                'label': 'CSS'
            },
            {
                'color': '#FFBE41',
                'data': 50,
                'label': 'LESS'
            },
            {
                'color': '#ff3e43',
                'data': 80,
                'label': 'Jade'
            },
            {
                'color': '#937fc7',
                'data': 116,
                'label': 'AngularJS'
            }
        ];
        this.donutOptions = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.5 // This makes the donut shape
                }
            }
        };
        this.splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: '#eee',
                // position: (app.layout.isRTL ? 'right' : 'left'),
                tickFormatter: function (v) {
                    return v /* + ' visitors'*/;
                }
            },
            shadowSize: 0
        };
        // REALTIME
        // -----------------------------------
        this.rtAuxData = [];
        this.realTimeOptions = {
            series: {
                lines: { show: true, fill: true, fillColor: { colors: ['#a0e0f3', '#23b7e5'] } },
                shadowSize: 0 // Drawing is faster without shadows
            },
            grid: {
                show: false,
                borderWidth: 0,
                minBorderMargin: 20,
                labelMargin: 10
            },
            xaxis: {
                tickFormatter: function () {
                    return '';
                }
            },
            yaxis: {
                min: 0,
                max: 110
            },
            legend: {
                show: true
            },
            colors: ['#23b7e5']
        };
        this.getChartData('assets/server/chart/spline.json').subscribe(function (data) { return _this.splineData = data; });
        this.getChartData('assets/server/chart/bar.json').subscribe(function (data) { return _this.barData = data; });
        this.getChartData('assets/server/chart/barstacked.json').subscribe(function (data) { return _this.barStackeData = data; });
        this.getChartData('assets/server/chart/area.json').subscribe(function (data) { return _this.areaData = data; });
        this.getChartData('assets/server/chart/line.json').subscribe(function (data) { return _this.lineData = data; });
    }
    FlotComponent.prototype.ngOnInit = function () {
        // Generate random data for realtime demo
        this.update();
    };
    FlotComponent.prototype.getChartData = function (url) {
        return this.http.get(url);
    };
    FlotComponent.prototype.change = function () {
        // Change a value
        this.splineData[0].color = '#ff0000';
        // Create a new object in order to provide a different instance
        // so the directive can detect the change using ngOnChanges
        this.splineData = $.extend(true, [], this.splineData);
    };
    FlotComponent.prototype.ready = function ($event) {
        // $event == { plot: PlotObject }
        console.log('Ready!');
    };
    // REALTIME demo
    // -----------------------------------
    FlotComponent.prototype.getRandomData = function () {
        var totalPoints = 300;
        if (this.rtAuxData.length > 0) {
            this.rtAuxData = this.rtAuxData.slice(1);
        }
        // Do a random walk
        while (this.rtAuxData.length < totalPoints) {
            var prev = this.rtAuxData.length > 0 ? this.rtAuxData[this.rtAuxData.length - 1] : 50, y = prev + Math.random() * 10 - 5;
            if (y < 0) {
                y = 0;
            }
            else if (y > 100) {
                y = 100;
            }
            this.rtAuxData.push(y);
        }
        // Zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < this.rtAuxData.length; ++i) {
            res.push([i, this.rtAuxData[i]]);
        }
        return [res];
    };
    FlotComponent.prototype.update = function () {
        this.realTimeData = this.getRandomData();
        setTimeout(this.update.bind(this), 30);
    };
    FlotComponent = __decorate([
        core_1.Component({
            selector: 'app-flot',
            template: __webpack_require__(/*! ./flot.component.html */ "./ClientApp/app/routes/charts/flot/flot.component.html"),
            styles: [__webpack_require__(/*! ./flot.component.scss */ "./ClientApp/app/routes/charts/flot/flot.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FlotComponent);
    return FlotComponent;
}());
exports.FlotComponent = FlotComponent;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./ClientApp/app/routes/charts/radial/radial.component.html":
/*!******************************************************************!*\
  !*** ./ClientApp/app/routes/charts/radial/radial.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    <div>Radial charts\r\n       <small>Canvas based &amp; No canvas Pure CSS radial progress bars solutions</small></div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <h4 class=\"page-header clearfix\">\r\n      <div class=\"float-left\">Easypie Charts</div>\r\n      <div class=\"float-right\">\r\n         <button class=\"btn btn-sm btn-info\" type=\"button\" (click)=\"randomize()\">\r\n            <em class=\"fas fa-sync\"></em>\r\n         </button>\r\n      </div>\r\n   </h4>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">Default</div>\r\n                <div class=\"card-body text-center\">\r\n                    <div class=\"easypie-chart\" easypiechart [options]=\"pieOptions1\" [percent]=\"easyPiePercent1\">\r\n                        <span>{{easyPiePercent1}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">Slim</div>\r\n                <div class=\"card-body text-center\">\r\n                    <div class=\"easypie-chart\" easypiechart [options]=\"pieOptions2\" [percent]=\"easyPiePercent2\">\r\n                        <span>{{easyPiePercent2}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">Track color</div>\r\n                <div class=\"card-body text-center\">\r\n                    <div class=\"easypie-chart\" easypiechart [options]=\"pieOptions3\" [percent]=\"easyPiePercent3\">\r\n                        <span>{{easyPiePercent3}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">Scale color</div>\r\n                <div class=\"card-body text-center\">\r\n                    <div class=\"easypie-chart\" easypiechart [options]=\"pieOptions4\" [percent]=\"easyPiePercent4\">\r\n                        <span>{{easyPiePercent4}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<h4 class=\"page-header\">Pure CSS\r\n   <small>radial progress bars solutions</small>\r\n</h4>\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-xl-6\">\r\n        <!-- START card-->\r\n        <div class=\"card card-default\">\r\n            <div class=\"card-header\">Radial Size</div>\r\n            <div class=\"card-body text-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"radial-bar radial-bar-85 radial-bar-lg\" data-label=\"85%\"></div>\r\n                        <p><code>.radial-bar.radial-bar-85.radial-bar-lg</code>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"radial-bar radial-bar-45\" data-label=\"45%\"></div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"radial-bar radial-bar-60 radial-bar-sm\" data-label=\"60%\"></div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"radial-bar radial-bar-20 radial-bar-xs\" data-label=\"20%\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END card-->\r\n        <!-- START card-->\r\n        <div class=\"card card-default\">\r\n            <div class=\"card-header\">Radial with Images</div>\r\n            <div class=\"card-body text-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"radial-bar radial-bar-20 radial-bar radial-bar-danger\">\r\n                            <img src=\"assets/img/user/03.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"radial-bar radial-bar-35 radial-bar-warning\" data-label=\"35%\">\r\n                            <img src=\"assets/img/user/01.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"radial-bar radial-bar-50 radial-bar-info\" data-label=\"50%\">\r\n                            <img src=\"assets/img/user/04.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"radial-bar radial-bar-100 radial-bar-success\" data-label=\"100%\">\r\n                            <img src=\"assets/img/user/05.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END card-->\r\n        <!-- START card-->\r\n        <div class=\"card card-default\">\r\n            <div class=\"card-header\">Radial with Tooltips</div>\r\n            <div class=\"card-body text-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-3\">\r\n                        <br/>\r\n                        <div class=\"radial-bar radial-bar-85\" data-label=\"85%\" tooltip=\"85%\"></div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <br/>\r\n                        <div class=\"radial-bar radial-bar-45\" data-label=\"45%\" tooltip=\"45%\"></div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <br/>\r\n                        <div class=\"radial-bar radial-bar-60\" data-label=\"60%\" tooltip=\"60%\"></div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <br/>\r\n                        <div class=\"radial-bar radial-bar-20\" data-label=\"20%\" tooltip=\"20%\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END card-->\r\n    </div>\r\n    <div class=\"col-xl-6\">\r\n        <!-- START card-->\r\n        <div class=\"card card-default\">\r\n            <div class=\"card-header\">Radial Variants</div>\r\n            <div class=\"card-body text-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"radial-bar radial-bar-20 radial-bar-lg radial-bar-danger\" data-label=\"20%\"></div>\r\n                        <p><code>.radial-bar.radial-bar-20.radial-bar-lg.radial-bar-danger</code>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"radial-bar radial-bar-35 radial-bar-lg radial-bar-warning\" data-label=\"35%\"></div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"radial-bar radial-bar-50 radial-bar-lg radial-bar-info\" data-label=\"50%\"></div>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"radial-bar radial-bar-100 radial-bar-lg radial-bar-success\" data-label=\"100%\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END card-->\r\n        <!-- START card-->\r\n        <div class=\"card card-default\">\r\n            <div class=\"card-header\">Radial applications</div>\r\n            <div class=\"card-body text-center\">\r\n                <div class=\"radial-bar radial-bar-85 radial-bar-lg\" data-label=\"85%\"></div>\r\n                <p>Visitors</p>\r\n            </div>\r\n            <div class=\"card-footer text-center\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4\">\r\n                        <div class=\"radial-bar radial-bar-warning radial-bar-35 radial-bar-sm\" data-label=\"35%\"></div>\r\n                        <p>\r\n                            <small>Conversions</small>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-lg-4\">\r\n                        <div class=\"radial-bar radial-bar-info radial-bar-45 radial-bar-sm\" data-label=\"45%\"></div>\r\n                        <p>\r\n                            <small>Recurrent</small>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-lg-4\">\r\n                        <div class=\"radial-bar radial-bar-success radial-bar-20 radial-bar-sm\" data-label=\"20%\"></div>\r\n                        <p>\r\n                            <small>Uniques</small>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END card-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n"

/***/ }),

/***/ "./ClientApp/app/routes/charts/radial/radial.component.scss":
/*!******************************************************************!*\
  !*** ./ClientApp/app/routes/charts/radial/radial.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./radial.component.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/charts/radial/radial.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/routes/charts/radial/radial.component.ts":
/*!****************************************************************!*\
  !*** ./ClientApp/app/routes/charts/radial/radial.component.ts ***!
  \****************************************************************/
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
var colors_service_1 = __webpack_require__(/*! ../../../shared/colors/colors.service */ "./ClientApp/app/shared/colors/colors.service.ts");
var RadialComponent = /** @class */ (function () {
    function RadialComponent(colors) {
        this.colors = colors;
        this.easyPiePercent1 = 85;
        this.easyPiePercent2 = 45;
        this.easyPiePercent3 = 25;
        this.easyPiePercent4 = 60;
        this.pieOptions1 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('success'),
            trackColor: false,
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'circle'
        };
        this.pieOptions2 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('warning'),
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            lineCap: 'circle'
        };
        this.pieOptions3 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('danger'),
            trackColor: false,
            scaleColor: this.colors.byName('gray'),
            lineWidth: 15,
            lineCap: 'circle'
        };
        this.pieOptions4 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('danger'),
            trackColor: this.colors.byName('yellow'),
            scaleColor: this.colors.byName('gray-dark'),
            lineWidth: 15,
            lineCap: 'circle'
        };
    }
    RadialComponent.prototype.ngOnInit = function () {
    };
    RadialComponent.prototype.randomize = function () {
        this.easyPiePercent1 = this.random();
        this.easyPiePercent2 = this.random();
        this.easyPiePercent3 = this.random();
        this.easyPiePercent4 = this.random();
    };
    RadialComponent.prototype.random = function () {
        return Math.floor((Math.random() * 100) + 1);
    };
    RadialComponent = __decorate([
        core_1.Component({
            selector: 'app-radial',
            template: __webpack_require__(/*! ./radial.component.html */ "./ClientApp/app/routes/charts/radial/radial.component.html"),
            styles: [__webpack_require__(/*! ./radial.component.scss */ "./ClientApp/app/routes/charts/radial/radial.component.scss")]
        }),
        __metadata("design:paramtypes", [colors_service_1.ColorsService])
    ], RadialComponent);
    return RadialComponent;
}());
exports.RadialComponent = RadialComponent;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/charts/chartjs/chartjs.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/charts/chartjs/chartjs.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/charts/flot/flot.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/charts/flot/flot.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/charts/radial/radial.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/charts/radial/radial.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9jaGFydHMvY2hhcnRqcy9jaGFydGpzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL2NoYXJ0cy9jaGFydGpzL2NoYXJ0anMuY29tcG9uZW50LnNjc3M/ODM0YyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9jaGFydHMvY2hhcnRqcy9jaGFydGpzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9jaGFydHMvY2hhcnRzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9jaGFydHMvZmxvdC9mbG90LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL2NoYXJ0cy9mbG90L2Zsb3QuY29tcG9uZW50LnNjc3M/ZmI1OCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9jaGFydHMvZmxvdC9mbG90LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9jaGFydHMvcmFkaWFsL3JhZGlhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9jaGFydHMvcmFkaWFsL3JhZGlhbC5jb21wb25lbnQuc2Nzcz8wZjY3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL2NoYXJ0cy9yYWRpYWwvcmFkaWFsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy9jaGFydHMvY2hhcnRqcy9jaGFydGpzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL2NoYXJ0cy9mbG90L2Zsb3QuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvY2hhcnRzL3JhZGlhbC9yYWRpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK3RFOzs7Ozs7Ozs7Ozs7QUNDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLG9HQUFrRDtBQUNsRCwySUFBc0U7QUFPdEU7SUFxTkksMEJBQW1CLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFsTnhDLGFBQWE7UUFDYixzQ0FBc0M7UUFFdEMsYUFBUSxHQUFHO1lBQ1AsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1lBQ3hFLFFBQVEsRUFBRTtnQkFDTjtvQkFDSSxLQUFLLEVBQUUsa0JBQWtCO29CQUN6QixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3pILEVBQUU7b0JBQ0MsS0FBSyxFQUFFLG1CQUFtQjtvQkFDMUIsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN6SDthQUFDO1NBQ1QsQ0FBQztRQUVGLGVBQVUsR0FBRztZQUNUO2dCQUNJLGVBQWUsRUFBRSx1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LENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUF0RVEsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLG1CQUFPLENBQUMsMkZBQXlCLENBQUM7WUFDNUMsTUFBTSxFQUFFLENBQUMsbUJBQU8sQ0FBQywyRkFBeUIsQ0FBQyxDQUFDO1NBQy9DLENBQUM7eUNBeUQ2Qiw4QkFBYTtPQXhEL0IsZUFBZSxDQXdFM0I7SUFBRCxzQkFBQztDQUFBO0FBeEVZLDBDQUFlOzs7Ozs7Ozs7Ozs7QUNSNUI7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtaGVhZGluZ1xcXCI+Q2hhcnQgSlM8L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgY29udGFpbmVyLWxnXFxcIj5cXHJcXG4gICA8ZGl2IGNsYXNzPVxcXCJyb3cgbWItNFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTZcXFwiPlxcclxcbiAgICAgICAgIDxoND5MaW5lIENoYXJ0PC9oND5cXHJcXG4gICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxjYW52YXMgYmFzZUNoYXJ0IFtjaGFydFR5cGVdPVxcXCInbGluZSdcXFwiIFtvcHRpb25zXT1cXFwibGluZU9wdGlvbnNcXFwiIFtkYXRhc2V0c109XFxcImxpbmVEYXRhLmRhdGFzZXRzXFxcIiBbY29sb3JzXT1cXFwibGluZUNvbG9yc1xcXCIgW2xhYmVsc109XFxcImxpbmVEYXRhLmxhYmVsc1xcXCIgW2xlZ2VuZF09XFxcImZhbHNlXFxcIiBoZWlnaHQ9XFxcIjEyMFxcXCI+PC9jYW52YXM+XFxyXFxuICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTZcXFwiPlxcclxcbiAgICAgICAgIDxoND5CYXIgQ2hhcnQ8L2g0PlxcclxcbiAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPGNhbnZhcyBiYXNlQ2hhcnQgW2NoYXJ0VHlwZV09XFxcIidiYXInXFxcIiBbb3B0aW9uc109XFxcImJhck9wdGlvbnNcXFwiIFtkYXRhc2V0c109XFxcImJhckRhdGEuZGF0YXNldHNcXFwiIFtjb2xvcnNdPVxcXCJiYXJDb2xvcnNcXFwiIFtsYWJlbHNdPVxcXCJiYXJEYXRhLmxhYmVsc1xcXCIgW2xlZ2VuZF09XFxcImZhbHNlXFxcIiBoZWlnaHQ9XFxcIjEyMFxcXCI+PC9jYW52YXM+XFxyXFxuICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgPC9kaXY+XFxyXFxuICAgPGRpdiBjbGFzcz1cXFwicm93IG1iLTRcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC02XFxcIj5cXHJcXG4gICAgICAgICA8aDQ+UG9sYXIgQXJlYSBDaGFydDwvaDQ+XFxyXFxuICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8Y2FudmFzIGJhc2VDaGFydCBbY2hhcnRUeXBlXT1cXFwiJ3BvbGFyQXJlYSdcXFwiIFtvcHRpb25zXT1cXFwicG9sYXJPcHRpb25zXFxcIiBbZGF0YXNldHNdPVxcXCJwb2xhckRhdGEuZGF0YXNldHNcXFwiIFtsYWJlbHNdPVxcXCJwb2xhckRhdGEubGFiZWxzXFxcIiBbY29sb3JzXT1cXFwicG9sYXJDb2xvcnNcXFwiIFtsZWdlbmRdPVxcXCJmYWxzZVxcXCIgaGVpZ2h0PVxcXCIxODBcXFwiPjwvY2FudmFzPlxcclxcbiAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC02XFxcIj5cXHJcXG4gICAgICAgICA8aDQ+UmFkYXIgQ2hhcnQ8L2g0PlxcclxcbiAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPGNhbnZhcyBiYXNlQ2hhcnQgW2NoYXJ0VHlwZV09XFxcIidyYWRhcidcXFwiIFtvcHRpb25zXT1cXFwicmFkYXJPcHRpb25zXFxcIiBbZGF0YXNldHNdPVxcXCJyYWRhckRhdGEuZGF0YXNldHNcXFwiIFtjb2xvcnNdPVxcXCJyYWRhckNvbG9yc1xcXCIgW2xhYmVsc109XFxcInJhZGFyRGF0YS5sYWJlbHNcXFwiIFtsZWdlbmRdPVxcXCJmYWxzZVxcXCIgaGVpZ2h0PVxcXCIxODBcXFwiPjwvY2FudmFzPlxcclxcbiAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgIDwvZGl2PlxcclxcbiAgIDxkaXYgY2xhc3M9XFxcInJvdyBtYi00XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNlxcXCI+XFxyXFxuICAgICAgICAgPGg0PlBpZSBDaGFydDwvaDQ+XFxyXFxuICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8Y2FudmFzIGJhc2VDaGFydCBbY2hhcnRUeXBlXT1cXFwiJ3BpZSdcXFwiIFtvcHRpb25zXT1cXFwicGllT3B0aW9uc1xcXCIgW2RhdGFzZXRzXT1cXFwicGllRGF0YS5kYXRhc2V0c1xcXCIgW2NvbG9yc109XFxcInBpZUNvbG9yc1xcXCIgW2xhYmVsc109XFxcInBpZURhdGEubGFiZWxzXFxcIiBbbGVnZW5kXT1cXFwiZmFsc2VcXFwiIGhlaWdodD1cXFwiODBcXFwiPjwvY2FudmFzPlxcclxcbiAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC02XFxcIj5cXHJcXG4gICAgICAgICA8aDQ+RG91Z2hudXQgQ2hhcnQ8L2g0PlxcclxcbiAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPGNhbnZhcyBiYXNlQ2hhcnQgW2NoYXJ0VHlwZV09XFxcIidkb3VnaG51dCdcXFwiIFtvcHRpb25zXT1cXFwiZG91Z2hudXRPcHRpb25zXFxcIiBbZGF0YXNldHNdPVxcXCJkb3VnaG51dERhdGEuZGF0YXNldHNcXFwiIFtjb2xvcnNdPVxcXCJkb3VnaG51dENvbG9yc1xcXCIgW2xhYmVsc109XFxcImRvdWdobnV0RGF0YS5sYWJlbHNcXFwiIFtsZWdlbmRdPVxcXCJmYWxzZVxcXCIgaGVpZ2h0PVxcXCI4MFxcXCI+PC9jYW52YXM+XFxyXFxuICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY2hhcnRqcy5jb21wb25lbnQuc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sb3JzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb2xvcnMvY29sb3JzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jaGFydGpzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NoYXJ0anMuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vY2hhcnRqcy5jb21wb25lbnQuc2NzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhcnRqc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICAgIC8vIExpbmUgY2hhcnRcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgbGluZURhdGEgPSB7XHJcbiAgICAgICAgbGFiZWxzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseSddLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTXkgRmlyc3QgZGF0YXNldCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbdGhpcy5yRmFjdG9yKCksIHRoaXMuckZhY3RvcigpLCB0aGlzLnJGYWN0b3IoKSwgdGhpcy5yRmFjdG9yKCksIHRoaXMuckZhY3RvcigpLCB0aGlzLnJGYWN0b3IoKSwgdGhpcy5yRmFjdG9yKCldXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTXkgU2Vjb25kIGRhdGFzZXQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogW3RoaXMuckZhY3RvcigpLCB0aGlzLnJGYWN0b3IoKSwgdGhpcy5yRmFjdG9yKCksIHRoaXMuckZhY3RvcigpLCB0aGlzLnJGYWN0b3IoKSwgdGhpcy5yRmFjdG9yKCksIHRoaXMuckZhY3RvcigpXVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgfTtcclxuXHJcbiAgICBsaW5lQ29sb3JzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxMTQsMTAyLDE4NiwwLjIpJyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDExNCwxMDIsMTg2LDEpJyxcclxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDExNCwxMDIsMTg2LDEpJyxcclxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMTE0LDEwMiwxODYsMSknXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDM1LDE4MywyMjksMC4yKScsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgzNSwxODMsMjI5LDEpJyxcclxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDM1LDE4MywyMjksMSknLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgzNSwxODMsMjI5LDEpJ1xyXG4gICAgICAgIH1dO1xyXG5cclxuICAgIGxpbmVPcHRpb25zID0ge1xyXG4gICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gQmFyIGNoYXJ0XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIGJhckRhdGEgPSB7XHJcbiAgICAgICAgbGFiZWxzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseSddLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFt0aGlzLnJGYWN0b3IoKSwgdGhpcy5yRmFjdG9yKCksIHRoaXMuckZhY3RvcigpLCB0aGlzLnJGYWN0b3IoKSwgdGhpcy5yRmFjdG9yKCksIHRoaXMuckZhY3RvcigpLCB0aGlzLnJGYWN0b3IoKV1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW3RoaXMuckZhY3RvcigpLCB0aGlzLnJGYWN0b3IoKSwgdGhpcy5yRmFjdG9yKCksIHRoaXMuckZhY3RvcigpLCB0aGlzLnJGYWN0b3IoKSwgdGhpcy5yRmFjdG9yKCksIHRoaXMuckZhY3RvcigpXVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgfTtcclxuXHJcbiAgICBiYXJDb2xvcnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuY29sb3JzLmJ5TmFtZSgnaW5mbycpLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogdGhpcy5jb2xvcnMuYnlOYW1lKCdpbmZvJyksXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IHRoaXMuY29sb3JzLmJ5TmFtZSgnaW5mbycpLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IHRoaXMuY29sb3JzLmJ5TmFtZSgnaW5mbycpXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuY29sb3JzLmJ5TmFtZSgncHJpbWFyeScpLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogdGhpcy5jb2xvcnMuYnlOYW1lKCdwcmltYXJ5JyksXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IHRoaXMuY29sb3JzLmJ5TmFtZSgncHJpbWFyeScpLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IHRoaXMuY29sb3JzLmJ5TmFtZSgncHJpbWFyeScpXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgYmFyT3B0aW9ucyA9IHtcclxuICAgICAgICBzY2FsZVNob3dWZXJ0aWNhbExpbmVzOiBmYWxzZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyAgRG91Z2hudXQgY2hhcnRcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgZG91Z2hudXREYXRhID0ge1xyXG4gICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICAnUHVycGxlJyxcclxuICAgICAgICAgICAgJ0luZm8nLFxyXG4gICAgICAgICAgICAnWWVsbG93J1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IFszMCwgNTAsIDIwXVxyXG4gICAgICAgIH1dXHJcbiAgICB9O1xyXG5cclxuICAgIGRvdWdobnV0Q29sb3JzID0gW3tcclxuICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9ycy5ieU5hbWUoJ3B1cnBsZScpLFxyXG4gICAgICAgICAgICB0aGlzLmNvbG9ycy5ieU5hbWUoJ2luZm8nKSxcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnMuYnlOYW1lKCd5ZWxsb3cnKVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzLmJ5TmFtZSgncHVycGxlJyksXHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzLmJ5TmFtZSgnaW5mbycpLFxyXG4gICAgICAgICAgICB0aGlzLmNvbG9ycy5ieU5hbWUoJ3llbGxvdycpXHJcbiAgICAgICAgXSxcclxuICAgIH1dO1xyXG5cclxuICAgIGRvdWdobnV0T3B0aW9ucyA9IHtcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFBpZSBjaGFydFxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBwaWVEYXRhID0ge1xyXG4gICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICAnUHVycGxlJyxcclxuICAgICAgICAgICAgJ1llbGxvdycsXHJcbiAgICAgICAgICAgICdJbmZvJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IFszMCwgNDAsIDMwXVxyXG4gICAgICAgIH1dXHJcbiAgICB9O1xyXG5cclxuICAgIHBpZUNvbG9ycyA9IFt7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFtcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnMuYnlOYW1lKCdpbmZvJyksXHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzLmJ5TmFtZSgneWVsbG93JyksXHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JzLmJ5TmFtZSgncHVycGxlJylcclxuICAgICAgICBdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9ycy5ieU5hbWUoJ2luZm8nKSxcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnMuYnlOYW1lKCd5ZWxsb3cnKSxcclxuICAgICAgICAgICAgdGhpcy5jb2xvcnMuYnlOYW1lKCdwdXJwbGUnKVxyXG4gICAgICAgIF0sXHJcbiAgICB9XTtcclxuXHJcbiAgICBwaWVPcHRpb25zID0ge1xyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgLy8gUG9sYXIgY2hhcnRcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgcG9sYXJEYXRhID0ge1xyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgIDE0MFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsYWJlbDogJ015IGRhdGFzZXQnIC8vIGZvciBsZWdlbmRcclxuICAgICAgICB9XSxcclxuICAgICAgICBsYWJlbHM6IFtcclxuICAgICAgICAgICAgJ1JlZCcsXHJcbiAgICAgICAgICAgICdHcmVlbicsXHJcbiAgICAgICAgICAgICdZZWxsb3cnLFxyXG4gICAgICAgICAgICAnR3JleSdcclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIHBvbGFyQ29sb3JzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9ycy5ieU5hbWUoJ3BpbmsnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JzLmJ5TmFtZSgncHVycGxlJyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9ycy5ieU5hbWUoJ3BpbmsnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JzLmJ5TmFtZSgncHVycGxlJylcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JzLmJ5TmFtZSgncGluaycpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvcnMuYnlOYW1lKCdwdXJwbGUnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JzLmJ5TmFtZSgncGluaycpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvcnMuYnlOYW1lKCdwdXJwbGUnKVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgIHBvbGFyT3B0aW9ucyA9IHtcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBSYWRhciBjaGFydFxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICByYWRhckRhdGEgPSB7XHJcbiAgICAgICAgbGFiZWxzOiBbJ0VhdGluZycsICdEcmlua2luZycsICdTbGVlcGluZycsICdEZXNpZ25pbmcnLCAnQ29kaW5nJywgJ0N5Y2xpbmcnLCAnUnVubmluZyddLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTXkgRmlyc3QgZGF0YXNldCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbNjUsIDU5LCA5MCwgODEsIDU2LCA1NSwgNDBdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTXkgU2Vjb25kIGRhdGFzZXQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogWzI4LCA0OCwgNDAsIDE5LCA5NiwgMjcsIDEwMF1cclxuICAgICAgICAgICAgfV1cclxuICAgIH07XHJcblxyXG4gICAgcmFkYXJDb2xvcnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDExNCwxMDIsMTg2LDAuMiknLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMTE0LDEwMiwxODYsMSknLFxyXG4gICAgICAgICAgICBwb2ludENvbG9yOiAncmdiYSgxMTQsMTAyLDE4NiwxKScsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDExNCwxMDIsMTg2LDEpJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxNTEsMTg3LDIwNSwwLjIpJyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDE1MSwxODcsMjA1LDEpJyxcclxuICAgICAgICAgICAgcG9pbnRDb2xvcjogJ3JnYmEoMTUxLDE4NywyMDUsMSknLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgxNTEsMTg3LDIwNSwxKSdcclxuICAgICAgICB9XTtcclxuXHJcbiAgICByYWRhck9wdGlvbnMgPSB7XHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sb3JzOiBDb2xvcnNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyByYW5kb20gdmFsdWVzIGZvciBkZW1vXHJcbiAgICByRmFjdG9yKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gICAgfTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDaGFydHNNb2R1bGUgYXMgTmcyQ2hhcnRzTW9kdWxlIH0gZnJvbSAnbmcyLWNoYXJ0cy9uZzItY2hhcnRzJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgQ2hhcnRqc0NvbXBvbmVudCB9IGZyb20gJy4vY2hhcnRqcy9jaGFydGpzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZsb3RDb21wb25lbnQgfSBmcm9tICcuL2Zsb3QvZmxvdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYWRpYWxDb21wb25lbnQgfSBmcm9tICcuL3JhZGlhbC9yYWRpYWwuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnZmxvdCcsIGNvbXBvbmVudDogRmxvdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAncmFkaWFsJywgY29tcG9uZW50OiBSYWRpYWxDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ2NoYXJ0anMnLCBjb21wb25lbnQ6IENoYXJ0anNDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXHJcbiAgICAgICAgTmcyQ2hhcnRzTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRmxvdENvbXBvbmVudCxcclxuICAgICAgICBSYWRpYWxDb21wb25lbnQsXHJcbiAgICAgICAgQ2hhcnRqc0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXJ0c01vZHVsZSB7IH0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGVudC1oZWFkaW5nXFxcIj5cXHJcXG4gICBGbG90IGNoYXJ0c1xcclxcbiAgIDxkaXYgY2xhc3M9XFxcIm1sLWF1dG8gdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBzcGFya2xpbmUgZGF0YS1iYXItY29sb3I9XFxcIiNjZmRiZTJcXFwiIGRhdGEtaGVpZ2h0PVxcXCIyMFxcXCIgZGF0YS1iYXItd2lkdGg9XFxcIjNcXFwiIGRhdGEtYmFyLXNwYWNpbmc9XFxcIjJcXFwiIHZhbHVlcz1cXFwiMSwwLDQsOSw1LDcsOCw5LDUsNyw4LDQsN1xcXCI+PC9kaXY+XFxyXFxuICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICA8IS0tIFNUQVJUIHJvdy0tPlxcclxcbiAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTZcXFwiPlxcclxcbiAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIiBpZD1cXFwiY2FyZENoYXJ0MVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkFyZWE8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGRpdiBmbG90IFtkYXRhc2V0XT1cXFwiYXJlYURhdGFcXFwiIFtvcHRpb25zXT1cXFwiYXJlYU9wdGlvbnNcXFwiIGhlaWdodD1cXFwiMzAwXFxcIiAocmVhZHkpPVxcXCJyZWFkeSgkZXZlbnQpXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNlxcXCI+XFxyXFxuICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWRlZmF1bHRcXFwiIGlkPVxcXCJjYXJkQ2hhcnQ5XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+QXJlYSBTcGxpbmU8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGRpdiBmbG90IFtkYXRhc2V0XT1cXFwic3BsaW5lRGF0YVxcXCIgW29wdGlvbnNdPVxcXCJzcGxpbmVPcHRpb25zXFxcIiBoZWlnaHQ9XFxcIjMwMFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgPC9kaXY+XFxyXFxuICAgPCEtLSBFTkQgcm93LS0+XFxyXFxuICAgPCEtLSBTVEFSVCByb3ctLT5cXHJcXG4gICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC02XFxcIj5cXHJcXG4gICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGNhcmQtZGVmYXVsdFxcXCIgaWQ9XFxcImNhcmRDaGFydDJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5CYXI8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGRpdiBmbG90IFtkYXRhc2V0XT1cXFwiYmFyRGF0YVxcXCIgW29wdGlvbnNdPVxcXCJiYXJPcHRpb25zXFxcIiBoZWlnaHQ9XFxcIjMwMFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTZcXFwiPlxcclxcbiAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIiBpZD1cXFwiY2FyZENoYXJ0M1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkJhciAtIFN0YWNrZWQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5kaWNhdG9yIHNob3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzcGlubmVyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgPGRpdiBmbG90IFtkYXRhc2V0XT1cXFwiYmFyU3RhY2tlRGF0YVxcXCIgW29wdGlvbnNdPVxcXCJiYXJTdGFja2VkT3B0aW9uc1xcXCIgaGVpZ2h0PVxcXCIzMDBcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgIDwvZGl2PlxcclxcbiAgIDwhLS0gRU5EIHJvdy0tPlxcclxcbiAgIDwhLS0gU1RBUlQgcm93LS0+XFxyXFxuICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTJcXFwiPlxcclxcbiAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIiBpZD1cXFwiY2FyZENoYXJ0NFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlJlYWwgVGltZSA8c21hbGw+KDMwbXMpPC9zbWFsbD48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGRpdiBmbG90IFtkYXRhc2V0XT1cXFwicmVhbFRpbWVEYXRhXFxcIiBbb3B0aW9uc109XFxcInJlYWxUaW1lT3B0aW9uc1xcXCIgaGVpZ2h0PVxcXCIzMDBcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgIDwvZGl2PlxcclxcbiAgIDwhLS0gRU5EIHJvdy0tPlxcclxcbiAgIDwhLS0gU1RBUlQgcm93LS0+XFxyXFxuICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTJcXFwiPlxcclxcbiAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIiBpZD1cXFwiY2FyZENoYXJ0NFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkxpbmU8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGRpdiBmbG90IFtkYXRhc2V0XT1cXFwibGluZURhdGFcXFwiIFtvcHRpb25zXT1cXFwibGluZU9wdGlvbnNcXFwiIGhlaWdodD1cXFwiMzAwXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICA8L2Rpdj5cXHJcXG4gICA8IS0tIEVORCByb3ctLT5cXHJcXG4gICA8IS0tIFNUQVJUIHJvdy0tPlxcclxcbiAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTZcXFwiPlxcclxcbiAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIiBpZD1cXFwiY2FyZENoYXJ0NVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPlBpZTwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtd3JhcHBlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8ZGl2IGZsb3QgW2RhdGFzZXRdPVxcXCJwaWVEYXRhXFxcIiBbb3B0aW9uc109XFxcInBpZU9wdGlvbnNcXFwiIGhlaWdodD1cXFwiMzAwXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctNlxcXCI+XFxyXFxuICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWRlZmF1bHRcXFwiIGlkPVxcXCJjYXJkQ2hhcnQ2XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+RG9udXQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGRpdiBmbG90IFtkYXRhc2V0XT1cXFwiZG9udXREYXRhXFxcIiBbb3B0aW9uc109XFxcImRvbnV0T3B0aW9uc1xcXCIgaGVpZ2h0PVxcXCIzMDBcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgIDwvZGl2PlxcclxcbiAgIDwhLS0gRU5EIHJvdy0tPlxcclxcbjwvZGl2PlxcclxcblwiIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Zsb3QuY29tcG9uZW50LnNjc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtZmxvdCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mbG90LmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2Zsb3QuY29tcG9uZW50LnNjc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZsb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIC8vIEFSRUFcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBhcmVhRGF0YTogYW55O1xyXG4gICAgYXJlYU9wdGlvbnMgPSB7XHJcbiAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogMC44XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvaW50czoge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZjZmMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwOiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXBPcHRzOiB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uKGxhYmVsLCB4LCB5KSB7IHJldHVybiB4ICsgJyA6ICcgKyB5OyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICB0aWNrQ29sb3I6ICcjZmNmY2ZjJyxcclxuICAgICAgICAgICAgbW9kZTogJ2NhdGVnb3JpZXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogKCRzY29wZS5hcHAubGF5b3V0LmlzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0JyksXHJcbiAgICAgICAgICAgIHRpY2tGb3JtYXR0ZXI6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2ICsgJyB2aXNpdG9ycyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNoYWRvd1NpemU6IDBcclxuICAgIH07XHJcblxyXG4gICAgLy8gQkFSXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgYmFyRGF0YTogYW55O1xyXG4gICAgYmFyT3B0aW9ucyA9IHtcclxuICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgICAgYmFyczoge1xyXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJhcldpZHRoOiAwLjYsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiAwLjlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmY2ZjJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcDogdHJ1ZSxcclxuICAgICAgICB0b29sdGlwT3B0czoge1xyXG4gICAgICAgICAgICBjb250ZW50OiBmdW5jdGlvbihsYWJlbCwgeCwgeSkgeyByZXR1cm4geCArICcgOiAnICsgeTsgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgdGlja0NvbG9yOiAnI2ZjZmNmYycsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjYXRlZ29yaWVzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgLy8gcG9zaXRpb246ICgkc2NvcGUuYXBwLmxheW91dC5pc1JUTCA/ICdyaWdodCcgOiAnbGVmdCcpLFxyXG4gICAgICAgICAgICB0aWNrQ29sb3I6ICcjZWVlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hhZG93U2l6ZTogMFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBCQVIgU1RBQ0tFRFxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGJhclN0YWNrZURhdGE6IGFueTtcclxuICAgIGJhclN0YWNrZWRPcHRpb25zID0ge1xyXG4gICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICBzdGFjazogdHJ1ZSxcclxuICAgICAgICAgICAgYmFyczoge1xyXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAwLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJhcldpZHRoOiAwLjYsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiAwLjlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmY2ZjJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcDogdHJ1ZSxcclxuICAgICAgICB0b29sdGlwT3B0czoge1xyXG4gICAgICAgICAgICBjb250ZW50OiBmdW5jdGlvbihsYWJlbCwgeCwgeSkgeyByZXR1cm4geCArICcgOiAnICsgeTsgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgdGlja0NvbG9yOiAnI2ZjZmNmYycsXHJcbiAgICAgICAgICAgIG1vZGU6ICdjYXRlZ29yaWVzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICBtYXg6IDIwMCwgLy8gb3B0aW9uYWw6IHVzZSBpdCBmb3IgYSBjbGVhciByZXByZXNldGF0aW9uXHJcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiAoJHNjb3BlLmFwcC5sYXlvdXQuaXNSVEwgPyAncmlnaHQnIDogJ2xlZnQnKSxcclxuICAgICAgICAgICAgdGlja0NvbG9yOiAnI2VlZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNoYWRvd1NpemU6IDBcclxuICAgIH07XHJcblxyXG4gICAgLy8gTElORVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGxpbmVEYXRhOiBhbnk7XHJcbiAgICBsaW5lT3B0aW9ucyA9IHtcclxuICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiAwLjAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvaW50czoge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJhZGl1czogNFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZjZmMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwOiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXBPcHRzOiB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uKGxhYmVsLCB4LCB5KSB7IHJldHVybiB4ICsgJyA6ICcgKyB5OyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICB0aWNrQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICAgICAgbW9kZTogJ2NhdGVnb3JpZXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogKCRzY29wZS5hcHAubGF5b3V0LmlzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0JyksXHJcbiAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaGFkb3dTaXplOiAwXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFBJRVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHBpZURhdGEgPSBbe1xyXG4gICAgICAgICdsYWJlbCc6ICdqUXVlcnknLFxyXG4gICAgICAgICdjb2xvcic6ICcjNGFjYWI0JyxcclxuICAgICAgICAnZGF0YSc6IDMwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgICAgICdsYWJlbCc6ICdDU1MnLFxyXG4gICAgICAgICAgICAnY29sb3InOiAnI2ZmZWE4OCcsXHJcbiAgICAgICAgICAgICdkYXRhJzogNDBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICdsYWJlbCc6ICdMRVNTJyxcclxuICAgICAgICAgICAgJ2NvbG9yJzogJyNmZjgxNTMnLFxyXG4gICAgICAgICAgICAnZGF0YSc6IDkwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAnbGFiZWwnOiAnU0FTUycsXHJcbiAgICAgICAgICAgICdjb2xvcic6ICcjODc4YmI2JyxcclxuICAgICAgICAgICAgJ2RhdGEnOiA3NVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgJ2xhYmVsJzogJ0phZGUnLFxyXG4gICAgICAgICAgICAnY29sb3InOiAnI2IyZDc2NycsXHJcbiAgICAgICAgICAgICdkYXRhJzogMTIwXHJcbiAgICAgICAgfV07XHJcbiAgICBwaWVPcHRpb25zID0ge1xyXG4gICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICBwaWU6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbm5lclJhZGl1czogMCxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDAuOCxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGxhYmVsLCBzZXJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiZmxvdC1waWUtbGFiZWxcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsICsgJyA6ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChzZXJpZXMucGVyY2VudCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyU8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzIyMidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIERPTlVUXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZG9udXREYXRhID0gW3tcclxuICAgICAgICAnY29sb3InOiAnIzM5QzU1OCcsXHJcbiAgICAgICAgJ2RhdGEnOiA2MCxcclxuICAgICAgICAnbGFiZWwnOiAnQ29mZmVlJ1xyXG4gICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdjb2xvcic6ICcjMDBiNGZmJyxcclxuICAgICAgICAgICAgJ2RhdGEnOiA5MCxcclxuICAgICAgICAgICAgJ2xhYmVsJzogJ0NTUydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ2NvbG9yJzogJyNGRkJFNDEnLFxyXG4gICAgICAgICAgICAnZGF0YSc6IDUwLFxyXG4gICAgICAgICAgICAnbGFiZWwnOiAnTEVTUydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ2NvbG9yJzogJyNmZjNlNDMnLFxyXG4gICAgICAgICAgICAnZGF0YSc6IDgwLFxyXG4gICAgICAgICAgICAnbGFiZWwnOiAnSmFkZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ2NvbG9yJzogJyM5MzdmYzcnLFxyXG4gICAgICAgICAgICAnZGF0YSc6IDExNixcclxuICAgICAgICAgICAgJ2xhYmVsJzogJ0FuZ3VsYXJKUydcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG4gICAgZG9udXRPcHRpb25zID0ge1xyXG4gICAgICAgIHNlcmllczoge1xyXG4gICAgICAgICAgICBwaWU6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbm5lclJhZGl1czogMC41IC8vIFRoaXMgbWFrZXMgdGhlIGRvbnV0IHNoYXBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNQTElORVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHNwbGluZURhdGE6IGFueTtcclxuICAgIHNwbGluZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByYWRpdXM6IDRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3BsaW5lczoge1xyXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRlbnNpb246IDAuNCxcclxuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgIGZpbGw6IDAuNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZjZmMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwOiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXBPcHRzOiB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uKGxhYmVsLCB4LCB5KSB7IHJldHVybiB4ICsgJyA6ICcgKyB5OyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICB0aWNrQ29sb3I6ICcjZmNmY2ZjJyxcclxuICAgICAgICAgICAgbW9kZTogJ2NhdGVnb3JpZXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIG1heDogMTUwLCAvLyBvcHRpb25hbDogdXNlIGl0IGZvciBhIGNsZWFyIHJlcHJlc2V0YXRpb25cclxuICAgICAgICAgICAgdGlja0NvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiAoYXBwLmxheW91dC5pc1JUTCA/ICdyaWdodCcgOiAnbGVmdCcpLFxyXG4gICAgICAgICAgICB0aWNrRm9ybWF0dGVyOiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdi8qICsgJyB2aXNpdG9ycycqLztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hhZG93U2l6ZTogMFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBSRUFMVElNRVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHJ0QXV4RGF0YSA9IFtdO1xyXG4gICAgcmVhbFRpbWVEYXRhOiBhbnk7XHJcbiAgICByZWFsVGltZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgIGxpbmVzOiB7IHNob3c6IHRydWUsIGZpbGw6IHRydWUsIGZpbGxDb2xvcjogeyBjb2xvcnM6IFsnI2EwZTBmMycsICcjMjNiN2U1J10gfSB9LFxyXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwIC8vIERyYXdpbmcgaXMgZmFzdGVyIHdpdGhvdXQgc2hhZG93c1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXHJcbiAgICAgICAgICAgIG1pbkJvcmRlck1hcmdpbjogMjAsXHJcbiAgICAgICAgICAgIGxhYmVsTWFyZ2luOiAxMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgdGlja0Zvcm1hdHRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiAxMTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBzaG93OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcnM6IFsnIzIzYjdlNSddXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgdGhpcy5nZXRDaGFydERhdGEoJ2Fzc2V0cy9zZXJ2ZXIvY2hhcnQvc3BsaW5lLmpzb24nKS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnNwbGluZURhdGEgPSBkYXRhKTtcclxuICAgICAgICB0aGlzLmdldENoYXJ0RGF0YSgnYXNzZXRzL3NlcnZlci9jaGFydC9iYXIuanNvbicpLnN1YnNjcmliZShkYXRhID0+IHRoaXMuYmFyRGF0YSA9IGRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q2hhcnREYXRhKCdhc3NldHMvc2VydmVyL2NoYXJ0L2JhcnN0YWNrZWQuanNvbicpLnN1YnNjcmliZShkYXRhID0+IHRoaXMuYmFyU3RhY2tlRGF0YSA9IGRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q2hhcnREYXRhKCdhc3NldHMvc2VydmVyL2NoYXJ0L2FyZWEuanNvbicpLnN1YnNjcmliZShkYXRhID0+IHRoaXMuYXJlYURhdGEgPSBkYXRhKTtcclxuICAgICAgICB0aGlzLmdldENoYXJ0RGF0YSgnYXNzZXRzL3NlcnZlci9jaGFydC9saW5lLmpzb24nKS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmxpbmVEYXRhID0gZGF0YSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIEdlbmVyYXRlIHJhbmRvbSBkYXRhIGZvciByZWFsdGltZSBkZW1vXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGFydERhdGEodXJsKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZSgpIHtcclxuICAgICAgICAvLyBDaGFuZ2UgYSB2YWx1ZVxyXG4gICAgICAgIHRoaXMuc3BsaW5lRGF0YVswXS5jb2xvciA9ICcjZmYwMDAwJztcclxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgb2JqZWN0IGluIG9yZGVyIHRvIHByb3ZpZGUgYSBkaWZmZXJlbnQgaW5zdGFuY2VcclxuICAgICAgICAvLyBzbyB0aGUgZGlyZWN0aXZlIGNhbiBkZXRlY3QgdGhlIGNoYW5nZSB1c2luZyBuZ09uQ2hhbmdlc1xyXG4gICAgICAgIHRoaXMuc3BsaW5lRGF0YSA9ICQuZXh0ZW5kKHRydWUsIFtdLCB0aGlzLnNwbGluZURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWR5KCRldmVudCkge1xyXG4gICAgICAgIC8vICRldmVudCA9PSB7IHBsb3Q6IFBsb3RPYmplY3QgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWFkeSEnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSRUFMVElNRSBkZW1vXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZ2V0UmFuZG9tRGF0YSgpIHtcclxuICAgICAgICBsZXQgdG90YWxQb2ludHMgPSAzMDA7XHJcbiAgICAgICAgaWYgKHRoaXMucnRBdXhEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ydEF1eERhdGEgPSB0aGlzLnJ0QXV4RGF0YS5zbGljZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRG8gYSByYW5kb20gd2Fsa1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnJ0QXV4RGF0YS5sZW5ndGggPCB0b3RhbFBvaW50cykge1xyXG4gICAgICAgICAgICBsZXQgcHJldiA9IHRoaXMucnRBdXhEYXRhLmxlbmd0aCA+IDAgPyB0aGlzLnJ0QXV4RGF0YVt0aGlzLnJ0QXV4RGF0YS5sZW5ndGggLSAxXSA6IDUwLFxyXG4gICAgICAgICAgICAgICAgeSA9IHByZXYgKyBNYXRoLnJhbmRvbSgpICogMTAgLSA1O1xyXG4gICAgICAgICAgICBpZiAoeSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHkgPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgIHkgPSAxMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ydEF1eERhdGEucHVzaCh5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gWmlwIHRoZSBnZW5lcmF0ZWQgeSB2YWx1ZXMgd2l0aCB0aGUgeCB2YWx1ZXNcclxuICAgICAgICBsZXQgcmVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJ0QXV4RGF0YS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICByZXMucHVzaChbaSwgdGhpcy5ydEF1eERhdGFbaV1dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtyZXNdO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnJlYWxUaW1lRGF0YSA9IHRoaXMuZ2V0UmFuZG9tRGF0YSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy51cGRhdGUuYmluZCh0aGlzKSwgMzApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGVudC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgPGRpdj5SYWRpYWwgY2hhcnRzXFxyXFxuICAgICAgIDxzbWFsbD5DYW52YXMgYmFzZWQgJmFtcDsgTm8gY2FudmFzIFB1cmUgQ1NTIHJhZGlhbCBwcm9ncmVzcyBiYXJzIHNvbHV0aW9uczwvc21hbGw+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWZsdWlkXFxcIj5cXHJcXG4gICAgPGg0IGNsYXNzPVxcXCJwYWdlLWhlYWRlciBjbGVhcmZpeFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZmxvYXQtbGVmdFxcXCI+RWFzeXBpZSBDaGFydHM8L2Rpdj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmbG9hdC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zbSBidG4taW5mb1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJyYW5kb21pemUoKVxcXCI+XFxyXFxuICAgICAgICAgICAgPGVtIGNsYXNzPVxcXCJmYXMgZmEtc3luY1xcXCI+PC9lbT5cXHJcXG4gICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICA8L2g0PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTMgY29sLW1kLTZcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+RGVmYXVsdDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZWFzeXBpZS1jaGFydFxcXCIgZWFzeXBpZWNoYXJ0IFtvcHRpb25zXT1cXFwicGllT3B0aW9uczFcXFwiIFtwZXJjZW50XT1cXFwiZWFzeVBpZVBlcmNlbnQxXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2Vhc3lQaWVQZXJjZW50MX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMyBjb2wtbWQtNlxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5TbGltPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlYXN5cGllLWNoYXJ0XFxcIiBlYXN5cGllY2hhcnQgW29wdGlvbnNdPVxcXCJwaWVPcHRpb25zMlxcXCIgW3BlcmNlbnRdPVxcXCJlYXN5UGllUGVyY2VudDJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7ZWFzeVBpZVBlcmNlbnQyfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlRyYWNrIGNvbG9yPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlYXN5cGllLWNoYXJ0XFxcIiBlYXN5cGllY2hhcnQgW29wdGlvbnNdPVxcXCJwaWVPcHRpb25zM1xcXCIgW3BlcmNlbnRdPVxcXCJlYXN5UGllUGVyY2VudDNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7ZWFzeVBpZVBlcmNlbnQzfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1tZC02XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlNjYWxlIGNvbG9yPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlYXN5cGllLWNoYXJ0XFxcIiBlYXN5cGllY2hhcnQgW29wdGlvbnNdPVxcXCJwaWVPcHRpb25zNFxcXCIgW3BlcmNlbnRdPVxcXCJlYXN5UGllUGVyY2VudDRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7ZWFzeVBpZVBlcmNlbnQ0fX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGg0IGNsYXNzPVxcXCJwYWdlLWhlYWRlclxcXCI+UHVyZSBDU1NcXHJcXG4gICA8c21hbGw+cmFkaWFsIHByb2dyZXNzIGJhcnMgc29sdXRpb25zPC9zbWFsbD5cXHJcXG48L2g0PlxcclxcbjwhLS0gU1RBUlQgcm93LS0+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTZcXFwiPlxcclxcbiAgICAgICAgPCEtLSBTVEFSVCBjYXJkLS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGNhcmQtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlJhZGlhbCBTaXplPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyYWRpYWwtYmFyIHJhZGlhbC1iYXItODUgcmFkaWFsLWJhci1sZ1xcXCIgZGF0YS1sYWJlbD1cXFwiODUlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48Y29kZT4ucmFkaWFsLWJhci5yYWRpYWwtYmFyLTg1LnJhZGlhbC1iYXItbGc8L2NvZGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmFkaWFsLWJhciByYWRpYWwtYmFyLTQ1XFxcIiBkYXRhLWxhYmVsPVxcXCI0NSVcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmFkaWFsLWJhciByYWRpYWwtYmFyLTYwIHJhZGlhbC1iYXItc21cXFwiIGRhdGEtbGFiZWw9XFxcIjYwJVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyYWRpYWwtYmFyIHJhZGlhbC1iYXItMjAgcmFkaWFsLWJhci14c1xcXCIgZGF0YS1sYWJlbD1cXFwiMjAlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPCEtLSBFTkQgY2FyZC0tPlxcclxcbiAgICAgICAgPCEtLSBTVEFSVCBjYXJkLS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGNhcmQtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlJhZGlhbCB3aXRoIEltYWdlczwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmFkaWFsLWJhciByYWRpYWwtYmFyLTIwIHJhZGlhbC1iYXIgcmFkaWFsLWJhci1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiYXNzZXRzL2ltZy91c2VyLzAzLmpwZ1xcXCIgYWx0PVxcXCJJbWFnZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJhZGlhbC1iYXIgcmFkaWFsLWJhci0zNSByYWRpYWwtYmFyLXdhcm5pbmdcXFwiIGRhdGEtbGFiZWw9XFxcIjM1JVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJhc3NldHMvaW1nL3VzZXIvMDEuanBnXFxcIiBhbHQ9XFxcIkltYWdlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmFkaWFsLWJhciByYWRpYWwtYmFyLTUwIHJhZGlhbC1iYXItaW5mb1xcXCIgZGF0YS1sYWJlbD1cXFwiNTAlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImFzc2V0cy9pbWcvdXNlci8wNC5qcGdcXFwiIGFsdD1cXFwiSW1hZ2VcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyYWRpYWwtYmFyIHJhZGlhbC1iYXItMTAwIHJhZGlhbC1iYXItc3VjY2Vzc1xcXCIgZGF0YS1sYWJlbD1cXFwiMTAwJVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJhc3NldHMvaW1nL3VzZXIvMDUuanBnXFxcIiBhbHQ9XFxcIkltYWdlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8IS0tIEVORCBjYXJkLS0+XFxyXFxuICAgICAgICA8IS0tIFNUQVJUIGNhcmQtLT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+UmFkaWFsIHdpdGggVG9vbHRpcHM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmFkaWFsLWJhciByYWRpYWwtYmFyLTg1XFxcIiBkYXRhLWxhYmVsPVxcXCI4NSVcXFwiIHRvb2x0aXA9XFxcIjg1JVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJhZGlhbC1iYXIgcmFkaWFsLWJhci00NVxcXCIgZGF0YS1sYWJlbD1cXFwiNDUlXFxcIiB0b29sdGlwPVxcXCI0NSVcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyYWRpYWwtYmFyIHJhZGlhbC1iYXItNjBcXFwiIGRhdGEtbGFiZWw9XFxcIjYwJVxcXCIgdG9vbHRpcD1cXFwiNjAlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmFkaWFsLWJhciByYWRpYWwtYmFyLTIwXFxcIiBkYXRhLWxhYmVsPVxcXCIyMCVcXFwiIHRvb2x0aXA9XFxcIjIwJVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwhLS0gRU5EIGNhcmQtLT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC02XFxcIj5cXHJcXG4gICAgICAgIDwhLS0gU1RBUlQgY2FyZC0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5SYWRpYWwgVmFyaWFudHM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJhZGlhbC1iYXIgcmFkaWFsLWJhci0yMCByYWRpYWwtYmFyLWxnIHJhZGlhbC1iYXItZGFuZ2VyXFxcIiBkYXRhLWxhYmVsPVxcXCIyMCVcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxjb2RlPi5yYWRpYWwtYmFyLnJhZGlhbC1iYXItMjAucmFkaWFsLWJhci1sZy5yYWRpYWwtYmFyLWRhbmdlcjwvY29kZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyYWRpYWwtYmFyIHJhZGlhbC1iYXItMzUgcmFkaWFsLWJhci1sZyByYWRpYWwtYmFyLXdhcm5pbmdcXFwiIGRhdGEtbGFiZWw9XFxcIjM1JVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyYWRpYWwtYmFyIHJhZGlhbC1iYXItNTAgcmFkaWFsLWJhci1sZyByYWRpYWwtYmFyLWluZm9cXFwiIGRhdGEtbGFiZWw9XFxcIjUwJVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyYWRpYWwtYmFyIHJhZGlhbC1iYXItMTAwIHJhZGlhbC1iYXItbGcgcmFkaWFsLWJhci1zdWNjZXNzXFxcIiBkYXRhLWxhYmVsPVxcXCIxMDAlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPCEtLSBFTkQgY2FyZC0tPlxcclxcbiAgICAgICAgPCEtLSBTVEFSVCBjYXJkLS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGNhcmQtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlJhZGlhbCBhcHBsaWNhdGlvbnM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyYWRpYWwtYmFyIHJhZGlhbC1iYXItODUgcmFkaWFsLWJhci1sZ1xcXCIgZGF0YS1sYWJlbD1cXFwiODUlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPHA+VmlzaXRvcnM8L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXIgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJhZGlhbC1iYXIgcmFkaWFsLWJhci13YXJuaW5nIHJhZGlhbC1iYXItMzUgcmFkaWFsLWJhci1zbVxcXCIgZGF0YS1sYWJlbD1cXFwiMzUlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkNvbnZlcnNpb25zPC9zbWFsbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyYWRpYWwtYmFyIHJhZGlhbC1iYXItaW5mbyByYWRpYWwtYmFyLTQ1IHJhZGlhbC1iYXItc21cXFwiIGRhdGEtbGFiZWw9XFxcIjQ1JVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5SZWN1cnJlbnQ8L3NtYWxsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJhZGlhbC1iYXIgcmFkaWFsLWJhci1zdWNjZXNzIHJhZGlhbC1iYXItMjAgcmFkaWFsLWJhci1zbVxcXCIgZGF0YS1sYWJlbD1cXFwiMjAlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlVuaXF1ZXM8L3NtYWxsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPCEtLSBFTkQgY2FyZC0tPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48IS0tIEVORCByb3ctLT5cXHJcXG5cIiIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9yYWRpYWwuY29tcG9uZW50LnNjc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbG9yc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29sb3JzL2NvbG9ycy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtcmFkaWFsJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3JhZGlhbC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9yYWRpYWwuY29tcG9uZW50LnNjc3MnKV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJhZGlhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgZWFzeVBpZVBlcmNlbnQxOiBudW1iZXIgPSA4NTtcclxuICAgIGVhc3lQaWVQZXJjZW50MjogbnVtYmVyID0gNDU7XHJcbiAgICBlYXN5UGllUGVyY2VudDM6IG51bWJlciA9IDI1O1xyXG4gICAgZWFzeVBpZVBlcmNlbnQ0OiBudW1iZXIgPSA2MDtcclxuXHJcbiAgICBwaWVPcHRpb25zMSA9IHtcclxuICAgICAgICBhbmltYXRlOiB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA4MDAsXHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhckNvbG9yOiB0aGlzLmNvbG9ycy5ieU5hbWUoJ3N1Y2Nlc3MnKSxcclxuICAgICAgICB0cmFja0NvbG9yOiBmYWxzZSxcclxuICAgICAgICBzY2FsZUNvbG9yOiBmYWxzZSxcclxuICAgICAgICBsaW5lV2lkdGg6IDEwLFxyXG4gICAgICAgIGxpbmVDYXA6ICdjaXJjbGUnXHJcbiAgICB9O1xyXG5cclxuICAgIHBpZU9wdGlvbnMyID0ge1xyXG4gICAgICAgIGFuaW1hdGU6IHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFyQ29sb3I6IHRoaXMuY29sb3JzLmJ5TmFtZSgnd2FybmluZycpLFxyXG4gICAgICAgIHRyYWNrQ29sb3I6IGZhbHNlLFxyXG4gICAgICAgIHNjYWxlQ29sb3I6IGZhbHNlLFxyXG4gICAgICAgIGxpbmVXaWR0aDogNCxcclxuICAgICAgICBsaW5lQ2FwOiAnY2lyY2xlJ1xyXG4gICAgfTtcclxuXHJcbiAgICBwaWVPcHRpb25zMyA9IHtcclxuICAgICAgICBhbmltYXRlOiB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA4MDAsXHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhckNvbG9yOiB0aGlzLmNvbG9ycy5ieU5hbWUoJ2RhbmdlcicpLFxyXG4gICAgICAgIHRyYWNrQ29sb3I6IGZhbHNlLFxyXG4gICAgICAgIHNjYWxlQ29sb3I6IHRoaXMuY29sb3JzLmJ5TmFtZSgnZ3JheScpLFxyXG4gICAgICAgIGxpbmVXaWR0aDogMTUsXHJcbiAgICAgICAgbGluZUNhcDogJ2NpcmNsZSdcclxuICAgIH07XHJcblxyXG4gICAgcGllT3B0aW9uczQgPSB7XHJcbiAgICAgICAgYW5pbWF0ZToge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogODAwLFxyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYXJDb2xvcjogdGhpcy5jb2xvcnMuYnlOYW1lKCdkYW5nZXInKSxcclxuICAgICAgICB0cmFja0NvbG9yOiB0aGlzLmNvbG9ycy5ieU5hbWUoJ3llbGxvdycpLFxyXG4gICAgICAgIHNjYWxlQ29sb3I6IHRoaXMuY29sb3JzLmJ5TmFtZSgnZ3JheS1kYXJrJyksXHJcbiAgICAgICAgbGluZVdpZHRoOiAxNSxcclxuICAgICAgICBsaW5lQ2FwOiAnY2lyY2xlJ1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbG9yczogQ29sb3JzU2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9taXplKCkge1xyXG4gICAgICAgIHRoaXMuZWFzeVBpZVBlcmNlbnQxID0gdGhpcy5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLmVhc3lQaWVQZXJjZW50MiA9IHRoaXMucmFuZG9tKCk7XHJcbiAgICAgICAgdGhpcy5lYXN5UGllUGVyY2VudDMgPSB0aGlzLnJhbmRvbSgpO1xyXG4gICAgICAgIHRoaXMuZWFzeVBpZVBlcmNlbnQ0ID0gdGhpcy5yYW5kb20oKTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb20oKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=