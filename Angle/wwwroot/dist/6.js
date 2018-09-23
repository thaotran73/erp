(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./ClientApp/app/routes/tables/angulargrid/angulargrid.component.html":
/*!****************************************************************************!*\
  !*** ./ClientApp/app/routes/tables/angulargrid/angulargrid.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    <div>Tables\r\n        <small>An Advanced Datagrid for AngularJS</small></div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <!-- Basic Example-->\r\n    <h4 class=\"page-header mt0\">Basic Example</h4>\r\n    <ag-grid-angular #agGrid class=\"ag-angle\" style=\"width: 100%; height: 400px\" [gridOptions]=\"gridOptions\" (gridReady)=\"gridReady($event)\">\r\n    </ag-grid-angular>\r\n    <!-- Filter Example-->\r\n    <h4 class=\"page-header\">Filter Example</h4>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-4 col-lg-6\">\r\n            <input class=\"mb form-control\" placeholder=\"Filter...\" type=\"text\" (keyup)=\"onQuickFilterChanged($event)\" />\r\n        </div>\r\n    </div>\r\n    <ag-grid-angular #agGrid class=\"ag-angle\" style=\"width: 100%; height: 400px\" [gridOptions]=\"gridOptions1\" (gridReady)=\"gridReady1($event)\" enableFilter></ag-grid-angular>\r\n    <!-- Pinning Example-->\r\n    <h4 class=\"page-header\">Pinning Example</h4>\r\n    <ag-grid-angular #agGrid class=\"ag-angle\" style=\"width: 100%; height: 400px\" [gridOptions]=\"gridOptions2\" (gridReady)=\"gridReady2($event)\"></ag-grid-angular>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/routes/tables/angulargrid/angulargrid.component.scss":
/*!****************************************************************************!*\
  !*** ./ClientApp/app/routes/tables/angulargrid/angulargrid.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./angulargrid.component.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/angulargrid/angulargrid.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/routes/tables/angulargrid/angulargrid.component.ts":
/*!**************************************************************************!*\
  !*** ./ClientApp/app/routes/tables/angulargrid/angulargrid.component.ts ***!
  \**************************************************************************/
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
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var AngulargridComponent = /** @class */ (function () {
    function AngulargridComponent(http) {
        var _this = this;
        this.resizeEvent = 'resize.ag-grid';
        this.$win = $(window);
        // Basic example
        this.columnDefs = [
            {
                headerName: 'Athlete',
                field: 'athlete',
                width: 150
            }, {
                headerName: 'Age',
                field: 'age',
                width: 90
            }, {
                headerName: 'Country',
                field: 'country',
                width: 120
            }, {
                headerName: 'Year',
                field: 'year',
                width: 90
            }, {
                headerName: 'Date',
                field: 'date',
                width: 110
            }, {
                headerName: 'Sport',
                field: 'sport',
                width: 110
            }, {
                headerName: 'Gold',
                field: 'gold',
                width: 100
            }, {
                headerName: 'Silver',
                field: 'silver',
                width: 100
            }, {
                headerName: 'Bronze',
                field: 'bronze',
                width: 100
            }, {
                headerName: 'Total',
                field: 'total',
                width: 100
            }
        ];
        // Filter Example
        this.irishAthletes = ['John Joe Nevin', 'Katie Taylor', 'Paddy Barnes', 'Kenny Egan', 'Darren Sutherland', 'Margaret Thatcher', 'Tony Blair', 'Ronald Regan', 'Barack Obama'];
        this.columnDefsFilter = [{
                headerName: 'Athlete',
                field: 'athlete',
                width: 150,
                filter: 'set',
                filterParams: {
                    cellHeight: 20,
                    values: this.irishAthletes
                }
            }, {
                headerName: 'Age',
                field: 'age',
                width: 90,
                filter: 'number'
            }, {
                headerName: 'Country',
                field: 'country',
                width: 120
            }, {
                headerName: 'Year',
                field: 'year',
                width: 90
            }, {
                headerName: 'Date',
                field: 'date',
                width: 110
            }, {
                headerName: 'Sport',
                field: 'sport',
                width: 110
            }, {
                headerName: 'Gold',
                field: 'gold',
                width: 100,
                filter: 'number'
            }, {
                headerName: 'Silver',
                field: 'silver',
                width: 100,
                filter: 'number'
            }, {
                headerName: 'Bronze',
                field: 'bronze',
                width: 100,
                filter: 'number'
            }, {
                headerName: 'Total',
                field: 'total',
                width: 100,
                filter: 'number'
            }];
        // Basic example
        this.gridOptions = {
            headerHeight: 40,
            columnDefs: this.columnDefs,
            rowData: null,
        };
        // Filter example
        this.gridOptions1 = {
            headerHeight: 40,
            columnDefs: this.columnDefsFilter,
            rowData: null,
            enableFilter: true,
        };
        // Pinned Example
        this.columnDefsPinned = _.cloneDeep(this.columnDefs);
        this.columnDefsPinned[0].pinned = 'left';
        this.gridOptions2 = {
            headerHeight: 40,
            columnDefs: this.columnDefsPinned,
            rowData: null
        };
        // Load from JSON
        http.get('assets/server/ag-owinners.json')
            .subscribe(function (data) {
            _this.gridOptions.api.setRowData(data);
            _this.gridOptions.api.sizeColumnsToFit();
            _this.gridOptions1.api.setRowData(data);
            _this.gridOptions1.api.sizeColumnsToFit();
            _this.gridOptions2.api.setRowData(data);
            _this.gridOptions2.api.sizeColumnsToFit();
        });
    }
    AngulargridComponent.prototype.onQuickFilterChanged = function ($event) {
        this.gridOptions1.api.setQuickFilter($event.target.value);
    };
    AngulargridComponent.prototype.ngOnInit = function () { };
    AngulargridComponent.prototype.gridReady = function (params) {
        params.api.sizeColumnsToFit();
        this.$win.on(this.resizeEvent, function () {
            setTimeout(function () { params.api.sizeColumnsToFit(); });
        });
    };
    AngulargridComponent.prototype.gridReady1 = function (params) {
        params.api.sizeColumnsToFit();
        this.$win.on(this.resizeEvent, function () {
            setTimeout(function () { params.api.sizeColumnsToFit(); });
        });
    };
    AngulargridComponent.prototype.gridReady2 = function (params) {
        params.api.sizeColumnsToFit();
        this.$win.on(this.resizeEvent, function () {
            setTimeout(function () { params.api.sizeColumnsToFit(); });
        });
    };
    AngulargridComponent.prototype.ngOnDestroy = function () {
        this.$win.off(this.resizeEvent);
    };
    AngulargridComponent = __decorate([
        core_1.Component({
            selector: 'app-angulargrid',
            template: __webpack_require__(/*! ./angulargrid.component.html */ "./ClientApp/app/routes/tables/angulargrid/angulargrid.component.html"),
            styles: [__webpack_require__(/*! ./angulargrid.component.scss */ "./ClientApp/app/routes/tables/angulargrid/angulargrid.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AngulargridComponent);
    return AngulargridComponent;
}());
exports.AngulargridComponent = AngulargridComponent;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./ClientApp/app/routes/tables/datatable/datatable.component.html":
/*!************************************************************************!*\
  !*** ./ClientApp/app/routes/tables/datatable/datatable.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    <div>Data-Tables components\r\n        <small>Native and not wrapped angular2 based data-tables</small></div>\r\n</div>\r\n<!-- <alert [type]=\"'info'\">None of this examples are based on the official jQuery-Datatables</alert> -->\r\n<h4 class=\"page-header\">ng2 Table\r\n    <small>Simple table extension with sorting, filtering, paging... for Angular2 apps by ValorSoftware</small>\r\n</h4>\r\n<div class=\"mb-3 clearfix\">\r\n    <div class=\"pull-let wd-md\">\r\n        <input *ngIf=\"config.filtering\" placeholder=\"Filter all columns\" [ngTableFiltering]=\"config.filtering\" class=\"form-control\" (tableChanged)=\"onChangeTable(config)\" />\r\n    </div>\r\n</div>\r\n<div class=\"card card-default\">\r\n    <div class=\"table-responsive\">\r\n        <ng-table [config]=\"config\" (tableChanged)=\"onChangeTable(config)\" (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\"></ng-table>\r\n    </div>\r\n</div>\r\n<div class=\"text-right\">\r\n    <pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\" (numPages)=\"numPages = $event\">\r\n    </pagination>\r\n</div>\r\n<!-- <pre *ngIf=\"config.paging\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre> -->\r\n"

/***/ }),

/***/ "./ClientApp/app/routes/tables/datatable/datatable.component.scss":
/*!************************************************************************!*\
  !*** ./ClientApp/app/routes/tables/datatable/datatable.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./datatable.component.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/datatable/datatable.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/routes/tables/datatable/datatable.component.ts":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/routes/tables/datatable/datatable.component.ts ***!
  \**********************************************************************/
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
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ng2_table_data_1 = __webpack_require__(/*! ./ng2-table-data */ "./ClientApp/app/routes/tables/datatable/ng2-table-data.ts");
var DatatableComponent = /** @class */ (function () {
    function DatatableComponent(http) {
        this.http = http;
        // ng2Table
        this.rows = [];
        this.columns = [
            { title: 'Name', name: 'name', filtering: { filterString: '', placeholder: 'Filter by name' } },
            {
                title: 'Position',
                name: 'position',
                sort: false,
                filtering: { filterString: '', placeholder: 'Filter by position' }
            },
            { title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc' },
            { title: 'Extn.', name: 'ext', sort: '', filtering: { filterString: '', placeholder: 'Filter by extn.' } },
            { title: 'Start date', className: 'text-warning', name: 'startDate' },
            { title: 'Salary ($)', name: 'salary' }
        ];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered', 'mb-0', 'd-table-fixed']
        };
        this.ng2TableData = ng2_table_data_1.TableData;
        // ng2Table
        this.length = this.ng2TableData.length;
    }
    DatatableComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
    };
    DatatableComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.ng2TableData; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    DatatableComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    DatatableComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    DatatableComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.ng2TableData, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    DatatableComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    DatatableComponent = __decorate([
        core_1.Component({
            selector: 'app-datatable',
            template: __webpack_require__(/*! ./datatable.component.html */ "./ClientApp/app/routes/tables/datatable/datatable.component.html"),
            styles: [__webpack_require__(/*! ./datatable.component.scss */ "./ClientApp/app/routes/tables/datatable/datatable.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;


/***/ }),

/***/ "./ClientApp/app/routes/tables/datatable/ng2-table-data.ts":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/routes/tables/datatable/ng2-table-data.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TableData = [
    {
        'name': 'Victoria Cantrell',
        'position': 'Integer Corporation',
        'office': 'Croatia',
        'ext': "<strong>0839</strong>",
        'startDate': '2015/08/19',
        'salary': 208.178
    }, {
        'name': 'Pearl Crosby',
        'position': 'In PC',
        'office': 'Cambodia',
        'ext': "<strong>8262</strong>",
        'startDate': '2014/10/08',
        'salary': 114.367
    }, {
        'name': 'Colette Foley',
        'position': 'Lorem Inc.',
        'office': 'Korea, North',
        'ext': '8968',
        'startDate': '2015/07/19',
        'salary': 721.473
    }, {
        'name': 'Anastasia Shaffer',
        'position': 'Dolor Nulla Semper LLC',
        'office': 'Suriname',
        'ext': '7980',
        'startDate': '2015/04/20',
        'salary': 264.620
    }, {
        'name': 'Gabriel Castro',
        'position': 'Sed Limited',
        'office': 'Bahrain',
        'ext': '0757',
        'startDate': '2015/03/04',
        'salary': 651.350
    }, {
        'name': 'Cherokee Ware',
        'position': 'Tincidunt LLC',
        'office': 'United Kingdom (Great Britain)',
        'ext': '3995',
        'startDate': '2015/06/17',
        'salary': 666.259
    }, {
        'name': 'Barry Moss',
        'position': 'Sociis Industries',
        'office': 'Western Sahara',
        'ext': '6697',
        'startDate': '2015/08/13',
        'salary': 541.631
    }, {
        'name': 'Maryam Tucker',
        'position': 'Elit Pede Malesuada Inc.',
        'office': 'Brazil',
        'ext': '5203',
        'startDate': '2014/10/02',
        'salary': 182.294
    }, {
        'name': 'Constance Clayton',
        'position': 'Auctor Velit Aliquam LLP',
        'office': 'United Arab Emirates',
        'ext': '4204',
        'startDate': '2015/08/01',
        'salary': 218.597
    }, {
        'name': 'Rogan Tucker',
        'position': 'Arcu Vestibulum Ante Associates',
        'office': 'Jersey',
        'ext': '0885',
        'startDate': '2015/01/04',
        'salary': 861.632
    }, {
        'name': 'Emery Mcdowell',
        'position': 'Gravida Company',
        'office': 'New Zealand',
        'ext': '3951',
        'startDate': '2015/06/02',
        'salary': 413.568
    }, {
        'name': 'Yael Greer',
        'position': 'Orci Limited',
        'office': 'Madagascar',
        'ext': '1416',
        'startDate': '2014/12/04',
        'salary': 121.831
    }, {
        'name': 'Jared Burgess',
        'position': 'Auctor Incorporated',
        'office': 'Burundi',
        'ext': '4673',
        'startDate': '2015/01/12',
        'salary': 62.243
    }, {
        'name': 'Sharon Campbell',
        'position': 'Elit Curabitur Sed Consulting',
        'office': 'Comoros',
        'ext': '6274',
        'startDate': '2014/09/14',
        'salary': 200.854
    }, {
        'name': 'Yeo Church',
        'position': 'Donec Vitae Erat PC',
        'office': 'Saudi Arabia',
        'ext': '0269',
        'startDate': '2015/06/07',
        'salary': 581.193
    }, {
        'name': 'Kylie Barlow',
        'position': 'Fermentum Risus Corporation',
        'office': 'Papua New Guinea',
        'ext': '2010',
        'startDate': '2014/12/03',
        'salary': 418.115
    }, {
        'name': 'Nell Leonard',
        'position': 'Vestibulum Consulting',
        'office': 'Saudi Arabia',
        'ext': '4839',
        'startDate': '2015/05/29',
        'salary': 466.201
    }, {
        'name': 'Brandon Fleming',
        'position': 'Donec Egestas Associates',
        'office': 'Poland',
        'ext': '0622',
        'startDate': '2015/01/22',
        'salary': 800.011
    }, {
        'name': 'Inga Pena',
        'position': 'Et Magnis Dis Limited',
        'office': 'Belgium',
        'ext': '8140',
        'startDate': '2015/05/18',
        'salary': 564.245
    }, {
        'name': 'Arden Russo',
        'position': 'Est Tempor Bibendum Corp.',
        'office': 'Dominican Republic',
        'ext': '6774',
        'startDate': '2015/07/23',
        'salary': 357.222
    }, {
        'name': 'Liberty Gallegos',
        'position': 'Nec Diam LLC',
        'office': 'Ghana',
        'ext': '9266',
        'startDate': '2015/06/18',
        'salary': 554.375
    }, {
        'name': 'Dennis York',
        'position': 'Nullam Suscipit Foundation',
        'office': 'Namibia',
        'ext': '3133',
        'startDate': '2015/03/20',
        'salary': 90.417
    }, {
        'name': 'Petra Chandler',
        'position': 'Pede Nonummy Inc.',
        'office': 'Namibia',
        'ext': '3367',
        'startDate': '2015/03/26',
        'salary': 598.915
    }, {
        'name': 'Aurelia Marshall',
        'position': 'Donec Consulting',
        'office': 'Nicaragua',
        'ext': '2690',
        'startDate': '2015/08/18',
        'salary': 201.680
    }, {
        'name': 'Rose Carter',
        'position': 'Enim Consequat Purus Industries',
        'office': 'Morocco',
        'ext': '0619',
        'startDate': '2015/03/06',
        'salary': 220.187
    }, {
        'name': 'Denton Atkins',
        'position': 'Non Vestibulum PC',
        'office': 'Mali',
        'ext': '5806',
        'startDate': '2015/04/19',
        'salary': 324.588
    }, {
        'name': 'Germaine Osborn',
        'position': 'Tristique Aliquet PC',
        'office': 'Lesotho',
        'ext': '4469',
        'startDate': '2015/01/19',
        'salary': 351.108
    }, {
        'name': 'Nell Butler',
        'position': 'Sit Amet Dapibus Industries',
        'office': 'Cuba',
        'ext': '7860',
        'startDate': '2015/01/06',
        'salary': 230.072
    }, {
        'name': 'Brent Stein',
        'position': 'Eu Augue Porttitor LLP',
        'office': 'Cyprus',
        'ext': '4697',
        'startDate': '2014/11/02',
        'salary': 853.413
    }, {
        'name': 'Alexandra Shaw',
        'position': 'Aenean Gravida Limited',
        'office': 'Uruguay',
        'ext': '1140',
        'startDate': '2015/05/16',
        'salary': 401.970
    }, {
        'name': 'Veronica Allison',
        'position': 'Aliquet Diam Sed Institute',
        'office': 'Samoa',
        'ext': '9966',
        'startDate': '2015/05/17',
        'salary': 79.193
    }, {
        'name': 'Katelyn Gamble',
        'position': 'Sed Associates',
        'office': 'Mauritius',
        'ext': '4767',
        'startDate': '2015/03/20',
        'salary': 484.299
    }, {
        'name': 'James Greer',
        'position': 'A Dui Incorporated',
        'office': 'Norway',
        'ext': '5517',
        'startDate': '2015/02/21',
        'salary': 333.518
    }, {
        'name': 'Cain Vasquez',
        'position': 'Nulla Facilisis Suspendisse Institute',
        'office': 'China',
        'ext': '3179',
        'startDate': '2015/05/27',
        'salary': 651.761
    }, {
        'name': 'Shaeleigh Barr',
        'position': 'Eleifend Cras Institute',
        'office': 'Ghana',
        'ext': '5904',
        'startDate': '2015/04/01',
        'salary': 627.095
    }, {
        'name': 'Baker Mckay',
        'position': 'Ut Sagittis Associates',
        'office': 'Isle of Man',
        'ext': '9840',
        'startDate': '2015/01/12',
        'salary': 742.247
    }, {
        'name': 'Jayme Pace',
        'position': 'Cras Eu Tellus Associates',
        'office': 'Bouvet Island',
        'ext': '4580',
        'startDate': '2015/08/12',
        'salary': 591.588
    }, {
        'name': 'Reuben Albert',
        'position': 'Lobortis Institute',
        'office': 'Zambia',
        'ext': '8725',
        'startDate': '2015/04/04',
        'salary': 791.408
    }, {
        'name': 'Idola Burns',
        'position': 'Non Industries',
        'office': 'Myanmar',
        'ext': '3201',
        'startDate': '2015/06/24',
        'salary': 142.906
    }, {
        'name': 'Laura Macias',
        'position': 'Phasellus Inc.',
        'office': 'Mauritania',
        'ext': '2033',
        'startDate': '2014/11/21',
        'salary': 226.591
    }, {
        'name': 'Nichole Salas',
        'position': 'Duis PC',
        'office': 'Madagascar',
        'ext': '4397',
        'startDate': '2015/01/18',
        'salary': 234.196
    }, {
        'name': 'Hunter Walter',
        'position': 'Ullamcorper Duis Cursus Foundation',
        'office': 'Brazil',
        'ext': '2227',
        'startDate': '2015/02/28',
        'salary': 655.052
    }, {
        'name': 'Asher Rich',
        'position': 'Mauris Ipsum LLP',
        'office': 'Paraguay',
        'ext': '7288',
        'startDate': '2015/08/08',
        'salary': 222.946
    }, {
        'name': 'Angela Carlson',
        'position': 'Donec Tempor Institute',
        'office': 'Papua New Guinea',
        'ext': '5416',
        'startDate': '2015/02/12',
        'salary': 562.194
    }, {
        'name': 'James Dorsey',
        'position': 'Ipsum Leo Associates',
        'office': 'Congo (Brazzaville)',
        'ext': '6019',
        'startDate': '2015/01/10',
        'salary': 629.925
    }, {
        'name': 'Wesley Cobb',
        'position': 'Nunc Est Incorporated',
        'office': 'Australia',
        'ext': '6466',
        'startDate': '2015/01/30',
        'salary': 343.476
    }, {
        'name': 'Meghan Stephens',
        'position': 'Interdum PC',
        'office': 'Turkey',
        'ext': '8001',
        'startDate': '2014/10/11',
        'salary': 469.305
    }, {
        'name': 'Bertha Herrera',
        'position': 'Amet Limited',
        'office': 'Kenya',
        'ext': '4799',
        'startDate': '2014/11/22',
        'salary': 56.606
    }, {
        'name': 'Karina Key',
        'position': 'Quisque Varius Nam Company',
        'office': 'France',
        'ext': '3907',
        'startDate': '2015/03/26',
        'salary': 314.260
    }, {
        'name': 'Uriel Carson',
        'position': 'Penatibus PC',
        'office': 'Venezuela',
        'ext': '5902',
        'startDate': '2015/01/07',
        'salary': 106.335
    }, {
        'name': 'Mira Baird',
        'position': 'Felis Orci PC',
        'office': 'Niue',
        'ext': '4189',
        'startDate': '2015/08/25',
        'salary': 515.671
    }, {
        'name': 'Ursula Parrish',
        'position': 'Ac Corporation',
        'office': 'Macao',
        'ext': '4771',
        'startDate': '2015/06/30',
        'salary': 72.295
    }, {
        'name': 'Josephine Sykes',
        'position': 'Blandit Congue Limited',
        'office': 'Holy See (Vatican City State)',
        'ext': '4684',
        'startDate': '2014/12/22',
        'salary': 694.656
    }, {
        'name': 'Maggie Sims',
        'position': 'Vulputate Posuere Industries',
        'office': 'Sudan',
        'ext': '6482',
        'startDate': '2014/11/22',
        'salary': 363.743
    }, {
        'name': 'Rogan Fuentes',
        'position': 'Vestibulum Accumsan Neque Company',
        'office': 'Jersey',
        'ext': '4837',
        'startDate': '2015/07/29',
        'salary': 606.004
    }, {
        'name': 'Maya Haney',
        'position': 'Ac Foundation',
        'office': 'Falkland Islands',
        'ext': '5752',
        'startDate': '2015/09/03',
        'salary': 745.500
    }, {
        'name': 'Aquila Battle',
        'position': 'Sociis Natoque Penatibus Foundation',
        'office': 'Azerbaijan',
        'ext': '8470',
        'startDate': '2015/03/06',
        'salary': 582.265
    }, {
        'name': 'Connor Coleman',
        'position': 'Orci Lacus Vestibulum Foundation',
        'office': 'Croatia',
        'ext': '6217',
        'startDate': '2014/10/21',
        'salary': 416.958
    }, {
        'name': 'Charity Thomas',
        'position': 'Convallis Ligula Donec Inc.',
        'office': 'Benin',
        'ext': '6240',
        'startDate': '2015/07/12',
        'salary': 540.999
    }, {
        'name': 'Blythe Powers',
        'position': 'Amet Orci Limited',
        'office': 'Falkland Islands',
        'ext': '5608',
        'startDate': '2015/01/23',
        'salary': 480.067
    }, {
        'name': 'Adria Battle',
        'position': 'Ornare Lectus Incorporated',
        'office': 'British Indian Ocean Territory',
        'ext': '7419',
        'startDate': '2015/05/28',
        'salary': 257.937
    }, {
        'name': 'Melanie Mcintyre',
        'position': 'Nunc Corp.',
        'office': 'Mongolia',
        'ext': '4326',
        'startDate': '2015/01/06',
        'salary': 359.737
    }, {
        'name': 'Keely Bauer',
        'position': 'Nec Tempus Institute',
        'office': 'Somalia',
        'ext': '8372',
        'startDate': '2015/03/09',
        'salary': 99.718
    }, {
        'name': 'Noelani Strong',
        'position': 'Nec LLP',
        'office': 'Iran',
        'ext': '0049',
        'startDate': '2015/08/24',
        'salary': 480.718
    }, {
        'name': 'Jeanette Henderson',
        'position': 'Eu Elit Nulla Corporation',
        'office': 'Italy',
        'ext': '7586',
        'startDate': '2015/06/19',
        'salary': 253.772
    }, {
        'name': 'Candace Huber',
        'position': 'Sed Institute',
        'office': 'Uganda',
        'ext': '7183',
        'startDate': '2015/06/16',
        'salary': 388.879
    }, {
        'name': 'Bethany Potter',
        'position': 'Vivamus Nibh Dolor Incorporated',
        'office': 'Puerto Rico',
        'ext': '3354',
        'startDate': '2014/11/12',
        'salary': 747.310
    }, {
        'name': 'Whoopi Burks',
        'position': 'Justo Inc.',
        'office': 'Fiji',
        'ext': '2185',
        'startDate': '2014/09/24',
        'salary': 803.037
    }, {
        'name': 'Sheila Long',
        'position': 'Diam Associates',
        'office': 'Sao Tome and Principe',
        'ext': '7760',
        'startDate': '2014/12/21',
        'salary': 674.379
    }, {
        'name': 'Sonya Church',
        'position': 'Laoreet Institute',
        'office': 'Grenada',
        'ext': '8920',
        'startDate': '2015/06/03',
        'salary': 625.147
    }, {
        'name': 'Shaine Forbes',
        'position': 'Eu Arcu LLP',
        'office': 'Cyprus',
        'ext': '2369',
        'startDate': '2015/01/18',
        'salary': 208.100
    }, {
        'name': 'Alexandra Patrick',
        'position': 'Ligula Donec Inc.',
        'office': 'Viet Nam',
        'ext': '8531',
        'startDate': '2015/04/09',
        'salary': 104.063
    }, {
        'name': 'Patience Vincent',
        'position': 'Sem Molestie Associates',
        'office': 'Philippines',
        'ext': '8888',
        'startDate': '2015/07/04',
        'salary': 673.556
    }, {
        'name': 'Evelyn Smith',
        'position': 'Fusce Industries',
        'office': 'Togo',
        'ext': '5051',
        'startDate': '2015/08/15',
        'salary': 737.284
    }, {
        'name': 'Kieran Gonzalez',
        'position': 'Non Corp.',
        'office': 'Equatorial Guinea',
        'ext': '4834',
        'startDate': '2015/08/24',
        'salary': 90.195
    }, {
        'name': 'Molly Oneil',
        'position': 'Non Dui Consulting',
        'office': 'Belize',
        'ext': '7501',
        'startDate': '2014/10/28',
        'salary': 140.767
    }, {
        'name': 'Nigel Davenport',
        'position': 'Ullamcorper Velit In Industries',
        'office': 'Vanuatu',
        'ext': '0976',
        'startDate': '2015/03/16',
        'salary': 70.536
    }, {
        'name': 'Thor Young',
        'position': 'Malesuada Consulting',
        'office': 'French Southern Territories',
        'ext': '0211',
        'startDate': '2015/01/28',
        'salary': 75.501
    }, {
        'name': 'Finn Delacruz',
        'position': 'Lorem Industries',
        'office': 'Cocos (Keeling) Islands',
        'ext': '2980',
        'startDate': '2014/12/11',
        'salary': 754.967
    }, {
        'name': 'Lane Henderson',
        'position': 'Pede Foundation',
        'office': 'Kazakhstan',
        'ext': '1446',
        'startDate': '2015/07/02',
        'salary': 842.050
    }, {
        'name': 'Shea Potter',
        'position': 'Curabitur Limited',
        'office': 'Timor-Leste',
        'ext': '4654',
        'startDate': '2015/05/07',
        'salary': 263.629
    }, {
        'name': 'Brynn Yang',
        'position': 'Ut Limited',
        'office': 'Mayotte',
        'ext': '4668',
        'startDate': '2015/01/17',
        'salary': 74.292
    }, {
        'name': 'Kylan Fuentes',
        'position': 'Sapien Aenean Associates',
        'office': 'Brazil',
        'ext': '6623',
        'startDate': '2014/12/28',
        'salary': 108.632
    }, {
        'name': 'Lionel Mcbride',
        'position': 'Ipsum PC',
        'office': 'Portugal',
        'ext': '3978',
        'startDate': '2015/07/11',
        'salary': 34.244
    }, {
        'name': 'Paul Lucas',
        'position': 'Eget LLP',
        'office': 'Nicaragua',
        'ext': '8890',
        'startDate': '2014/09/30',
        'salary': 690.834
    }, {
        'name': 'Lareina Williamson',
        'position': 'Imperdiet Ullamcorper Ltd',
        'office': 'Cocos (Keeling) Islands',
        'ext': '9489',
        'startDate': '2014/12/01',
        'salary': 603.498
    }, {
        'name': 'Amy Acevedo',
        'position': 'Id Institute',
        'office': 'Cook Islands',
        'ext': '5592',
        'startDate': '2015/02/04',
        'salary': 125.165
    }, {
        'name': 'Nomlanga Silva',
        'position': 'Eget LLC',
        'office': 'Belize',
        'ext': '3110',
        'startDate': '2015/01/31',
        'salary': 268.509
    }, {
        'name': 'Amena Stone',
        'position': 'Enim Incorporated',
        'office': 'Guinea',
        'ext': '1211',
        'startDate': '2014/09/23',
        'salary': 214.381
    }, {
        'name': 'Danielle Coffey',
        'position': 'Feugiat Placerat Corp.',
        'office': 'Sao Tome and Principe',
        'ext': '8176',
        'startDate': '2015/06/17',
        'salary': 137.423
    }, {
        'name': 'Buffy Russell',
        'position': 'Lacus Quisque Ltd',
        'office': 'Ecuador',
        'ext': '6741',
        'startDate': '2014/10/17',
        'salary': 612.184
    }, {
        'name': 'Kaitlin Lamb',
        'position': 'Malesuada Fringilla Est Associates',
        'office': 'Algeria',
        'ext': '5054',
        'startDate': '2014/10/18',
        'salary': 327.367
    }, {
        'name': 'Leilani Yates',
        'position': 'Mus Proin LLC',
        'office': 'South Sudan',
        'ext': '1550',
        'startDate': '2015/05/27',
        'salary': 743.493
    }, {
        'name': 'Jemima Moon',
        'position': 'Phasellus Corp.',
        'office': 'South Georgia and The South Sandwich Islands',
        'ext': '7582',
        'startDate': '2015/05/21',
        'salary': 496.067
    }, {
        'name': 'Hiroko Schwartz',
        'position': 'Neque Institute',
        'office': 'Saint Vincent and The Grenadines',
        'ext': '9368',
        'startDate': '2015/03/13',
        'salary': 178.782
    }, {
        'name': 'Nathaniel Jensen',
        'position': 'Mi Tempor Limited',
        'office': 'Dominica',
        'ext': '8331',
        'startDate': '2014/12/05',
        'salary': 37.441
    }, {
        'name': 'Silas Sweeney',
        'position': 'Ultrices Institute',
        'office': 'Turkmenistan',
        'ext': '0746',
        'startDate': '2014/11/13',
        'salary': 152.980
    }, {
        'name': 'Jermaine Barry',
        'position': 'Dapibus Corporation',
        'office': 'Uzbekistan',
        'ext': '1545',
        'startDate': '2015/03/06',
        'salary': 409.463
    }, {
        'name': 'Tatiana Nichols',
        'position': 'Nec Diam Industries',
        'office': 'Cook Islands',
        'ext': '4395',
        'startDate': '2015/05/22',
        'salary': 51.155
    }, {
        'name': 'Rama Waller',
        'position': 'Sem Pellentesque LLC',
        'office': 'Andorra',
        'ext': '2973',
        'startDate': '2014/12/01',
        'salary': 223.227
    }
];


/***/ }),

/***/ "./ClientApp/app/routes/tables/extended/extended.component.html":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/routes/tables/extended/extended.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    <div>Tables\r\n        <small>A showcase of different components inside tables</small></div>\r\n</div>\r\n<!-- START card-->\r\n<div class=\"card card-default\">\r\n    <div class=\"card-header\">Demo Table #1</div>\r\n    <!-- START table-responsive-->\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover\" id=\"table-ext-1\">\r\n            <thead>\r\n                <tr>\r\n                    <th>UID</th>\r\n                    <th>Picture</th>\r\n                    <th>Username</th>\r\n                    <th>First Name</th>\r\n                    <th>Last Name</th>\r\n                    <th>Email</th>\r\n                    <th>Profile</th>\r\n                    <th>Last Login</th>\r\n                    <th checkAll>\r\n                        <div class=\"checkbox c-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" />\r\n                                <span class=\"fa fa-check\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>1</td>\r\n                    <td>\r\n                        <div class=\"media\">\r\n                            <img class=\"img-fluid circle\" src=\"assets/img/user/01.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                    </td>\r\n                    <td>@twitter</td>\r\n                    <td>Larry</td>\r\n                    <td>the Bird</td>\r\n                    <td>mail@example.com</td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"radial-bar radial-bar-25 radial-bar-xs\" data-label=\"25%\"></div>\r\n                    </td>\r\n                    <td>1 week</td>\r\n                    <td>\r\n                        <div class=\"checkbox c-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" />\r\n                                <span class=\"fa fa-check\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>2</td>\r\n                    <td>\r\n                        <div class=\"media\">\r\n                            <img class=\"img-fluid circle\" src=\"assets/img/user/02.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                    </td>\r\n                    <td>@mdo</td>\r\n                    <td>Mark</td>\r\n                    <td>Otto</td>\r\n                    <td>mail@example.com</td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"radial-bar radial-bar-50 radial-bar-xs\" data-label=\"50%\"></div>\r\n                    </td>\r\n                    <td>25 minutes</td>\r\n                    <td>\r\n                        <div class=\"checkbox c-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" />\r\n                                <span class=\"fa fa-check\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>3</td>\r\n                    <td>\r\n                        <div class=\"media\">\r\n                            <img class=\"img-fluid circle\" src=\"assets/img/user/03.jpg\" alt=\"Image\" />\r\n                        </div>\r\n                    </td>\r\n                    <td>@fat</td>\r\n                    <td>Jacob</td>\r\n                    <td>Thornton</td>\r\n                    <td>mail@example.com</td>\r\n                    <td class=\"text-center\">\r\n                        <div class=\"radial-bar radial-bar-80 radial-bar-xs\" data-label=\"80%\"></div>\r\n                    </td>\r\n                    <td>10 hours</td>\r\n                    <td>\r\n                        <div class=\"checkbox c-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" />\r\n                                <span class=\"fa fa-check\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- END table-responsive-->\r\n    <div class=\"card-footer\">\r\n        <div class=\"d-flex\">\r\n            <div>\r\n                <div class=\"input-group\">\r\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Search\" />\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-secondary\" type=\"Search\">Button</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ml-auto\">\r\n                <div class=\"input-group float-right\">\r\n                    <select class=\"custom-select\" id=\"inputGroupSelect04\">\r\n                        <option value=\"0\">Bulk action</option>\r\n                        <option value=\"1\">Delete</option>\r\n                        <option value=\"2\">Clone</option>\r\n                        <option value=\"3\">Export</option>\r\n                    </select>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-secondary\" type=\"button\">Apply</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- START card-->\r\n<div class=\"card card-default\">\r\n    <div class=\"card-header\">Demo Table #2</div>\r\n    <!-- START table-responsive-->\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table table-striped table-bordered table-hover\" id=\"table-ext-2\">\r\n            <thead>\r\n                <tr>\r\n                    <th checkAll>\r\n                        <div class=\"checkbox c-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" />\r\n                                <span class=\"fa fa-check\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </th>\r\n                    <th>Description</th>\r\n                    <th>Active</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>\r\n                        <div class=\"checkbox c-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" />\r\n                                <span class=\"fa fa-check\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"media\">\r\n                            <a class=\"float-left\" href=\"#\">\r\n                                <img class=\"img-fluid circle\" src=\"assets/img/user/01.jpg\" alt=\"\" />\r\n                            </a>\r\n                            <div class=\"media-body\">\r\n                                <div class=\"float-right badge badge-info\">admin</div>\r\n                                <h4>Holly Wallace</h4>\r\n                                <p>Username: holly123</p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <label class=\"switch\">\r\n                            <input type=\"checkbox\" />\r\n                            <span></span>\r\n                        </label>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <div class=\"checkbox c-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" />\r\n                                <span class=\"fa fa-check\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"media\">\r\n                            <a class=\"float-left\" href=\"#\">\r\n                                <img class=\"img-fluid circle\" src=\"assets/img/user/03.jpg\" alt=\"\" />\r\n                            </a>\r\n                            <div class=\"media-body\">\r\n                                <div class=\"float-right badge badge-info\">writer</div>\r\n                                <h4>Alexis Foster</h4>\r\n                                <p>Username: ali89</p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <label class=\"switch\">\r\n                            <input type=\"checkbox\" checked=\"checked\" />\r\n                            <span></span>\r\n                        </label>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <div class=\"checkbox c-checkbox\">\r\n                            <label>\r\n                                <input type=\"checkbox\" />\r\n                                <span class=\"fa fa-check\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"media\">\r\n                            <a class=\"float-left\" href=\"#\">\r\n                                <img class=\"img-fluid circle\" src=\"assets/img/user/05.jpg\" alt=\"\" />\r\n                            </a>\r\n                            <div class=\"media-body\">\r\n                                <div class=\"float-right badge badge-info\">editor</div>\r\n                                <h4>Mario Miles</h4>\r\n                                <p>Username: mariomiles</p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <label class=\"switch\">\r\n                            <input type=\"checkbox\" checked=\"checked\" />\r\n                            <span></span>\r\n                        </label>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- END table-responsive-->\r\n    <div class=\"card-footer\">\r\n        <div class=\"d-flex\">\r\n            <div>\r\n                <div class=\"input-group\">\r\n                    <select class=\"custom-select\" id=\"inputGroupSelect04\">\r\n                        <option value=\"0\">Bulk action</option>\r\n                        <option value=\"1\">Delete</option>\r\n                        <option value=\"2\">Clone</option>\r\n                        <option value=\"3\">Export</option>\r\n                    </select>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-secondary\" type=\"button\">Apply</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ml-auto\">\r\n                <ul class=\"pagination pagination-sm\">\r\n                    <li class=\"page-item active\">\r\n                        <a class=\"page-link\" href=\"#\">1</a>\r\n                    </li>\r\n                    <li class=\"page-item\">\r\n                        <a class=\"page-link\" href=\"#\">2</a>\r\n                    </li>\r\n                    <li class=\"page-item\">\r\n                        <a class=\"page-link\" href=\"#\">3</a>\r\n                    </li>\r\n                    <li class=\"page-item\">\r\n                        <a class=\"page-link\" href=\"#\">»</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- END card-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-xl-6\">\r\n        <!-- START card-->\r\n        <div class=\"card card-default\">\r\n            <div class=\"card-header\">Demo Table #3\r\n                <!-- START table-responsive-->\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped table-bordered table-hover\" id=\"table-ext-3\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Task name</th>\r\n                                <th>Progress</th>\r\n                                <th>Deadline</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>Nunc luctus, quam non condimentum ornare</td>\r\n                                <td>\r\n                                    <div class=\"progress progress-xs\">\r\n                                        <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\">\r\n                                            <span class=\"sr-only\">80% Complete</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td>05/05/2014</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Integer in convallis felis.</td>\r\n                                <td>\r\n                                    <div class=\"progress progress-xs\">\r\n                                        <div class=\"progress-bar progress-bar-striped bg-danger\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%;\">\r\n                                            <span class=\"sr-only\">20% Complete</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td>15/05/2014</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Nullam sit amet magna vestibulum libero dapibus iaculis.</td>\r\n                                <td>\r\n                                    <div class=\"progress progress-xs\">\r\n                                        <div class=\"progress-bar progress-bar-striped bg-info\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 50%;\">\r\n                                            <span class=\"sr-only\">50% Complete</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </td>\r\n                                <td>05/10/2014</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <!-- END table-responsive-->\r\n            </div>\r\n        </div>\r\n        <!-- END card-->\r\n    </div>\r\n    <div class=\"col-xl-6\">\r\n        <!-- START card-->\r\n        <div class=\"card card-default\">\r\n            <div class=\"card-header\">Demo Table #4</div>\r\n            <!-- START table-responsive-->\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-striped table-bordered table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Project</th>\r\n                            <th>Activity</th>\r\n                            <th>Completion</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>Bootstrap 5.x</td>\r\n                            <td>\r\n                                <div [sparkline]=\"sparkOptions1\" values=\"3,6,7,8,4,5\"></div>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"badge badge-danger\">Canceled</div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Web Engine</td>\r\n                            <td>\r\n                                <div [sparkline]=\"sparkOptions2\" values=\"1,4,4,10,5,9,2\"></div>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"badge badge-success\">Complete</div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Nullam sit amet</td>\r\n                            <td>\r\n                                <div [sparkline]=\"sparkOptions3\" values=\"1,4,4,7,5,9,4\"></div>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"badge badge-warning\">Delayed</div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <!-- END table-responsive-->\r\n        </div>\r\n        <!-- END card-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n"

/***/ }),

/***/ "./ClientApp/app/routes/tables/extended/extended.component.scss":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/routes/tables/extended/extended.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./extended.component.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/extended/extended.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/routes/tables/extended/extended.component.ts":
/*!********************************************************************!*\
  !*** ./ClientApp/app/routes/tables/extended/extended.component.ts ***!
  \********************************************************************/
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
var ExtendedComponent = /** @class */ (function () {
    function ExtendedComponent(colors) {
        this.colors = colors;
        this.sparkOptions1 = {
            barColor: this.colors.byName('primary'),
            height: 20,
            barWidth: 5,
            barSpacing: 2,
            resize: true
        };
        this.sparkOptions2 = {
            barColor: this.colors.byName('purple'),
            height: 20,
            barWidth: 5,
            barSpacing: 2,
            resize: true
        };
        this.sparkOptions3 = {
            barColor: this.colors.byName('info'),
            height: 20,
            barWidth: 5,
            barSpacing: 2,
            resize: true
        };
    }
    ExtendedComponent.prototype.ngOnInit = function () {
    };
    ExtendedComponent = __decorate([
        core_1.Component({
            selector: 'app-extended',
            template: __webpack_require__(/*! ./extended.component.html */ "./ClientApp/app/routes/tables/extended/extended.component.html"),
            styles: [__webpack_require__(/*! ./extended.component.scss */ "./ClientApp/app/routes/tables/extended/extended.component.scss")]
        }),
        __metadata("design:paramtypes", [colors_service_1.ColorsService])
    ], ExtendedComponent);
    return ExtendedComponent;
}());
exports.ExtendedComponent = ExtendedComponent;


/***/ }),

/***/ "./ClientApp/app/routes/tables/ngxdatatable/ngxdatatable.component.html":
/*!******************************************************************************!*\
  !*** ./ClientApp/app/routes/tables/ngxdatatable/ngxdatatable.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    <div>NgxDatatable\r\n        <small>A feature-rich yet lightweight data-table crafted for Angular4 and beyond!</small></div>\r\n</div>\r\n<div class=\"card card-default\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">Inline Editing</div>\r\n        <small>Double click on cell to show edition mode</small>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <ngx-datatable #mydatatable class=\"bootstrap\" [headerHeight]=\"50\" [limit]=\"5\" [columnMode]=\"'force'\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [rows]=\"rows\">\r\n            <ngx-datatable-column name=\"Name\">\r\n                <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\r\n                    <span title=\"Double click to edit\" (dblclick)=\"editing[rowIndex + '-name'] = true\" *ngIf=\"!editing[rowIndex + '-name']\">\r\n                          {{value}}\r\n                        </span>\r\n                    <input autofocus (blur)=\"updateValue($event, 'name', rowIndex)\" *ngIf=\"editing[rowIndex+ '-name']\" type=\"text\" [value]=\"value\" />\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Gender\">\r\n                <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\r\n                    <span title=\"Double click to edit\" (dblclick)=\"editing[rowIndex + '-gender'] = true\" *ngIf=\"!editing[rowIndex + '-gender']\">\r\n                          {{value}}\r\n                        </span>\r\n                    <select *ngIf=\"editing[rowIndex + '-gender']\" (change)=\"updateValue($event, 'gender', rowIndex)\" [value]=\"value\">\r\n                        <option value=\"male\">Male</option>\r\n                        <option value=\"female\">Female</option>\r\n                    </select>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Age\">\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n                    {{value}}\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n        </ngx-datatable>\r\n    </div>\r\n</div>\r\n<div class=\"card card-default\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">Client-side Search and Filtering</div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"row mb-4\">\r\n            <div class=\"col-lg-4\">\r\n                <input type='text' class=\"form-control\" placeholder='Type to filter the name column...' (keyup)='updateFilter($event)' />\r\n            </div>\r\n        </div>\r\n        <ngx-datatable #table class='bootstrap no-detail-row' [columns]=\"columns\" [columnMode]=\"'force'\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='rowsFilter'>\r\n            <ngx-datatable-column name=\"Name\" [width]=\"300\"></ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Company\" [width]=\"300\"></ngx-datatable-column>\r\n        </ngx-datatable>\r\n    </div>\r\n</div>\r\n<div class=\"card card-default\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">Horizontal and Vertical Scrolling</div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <ngx-datatable #tableScroll class=\"bootstrap no-detail-row\" [rows]=\"rows\" columnMode=\"force\" [headerHeight]=\"50\" [footerHeight]=\"0\" [rowHeight]=\"40\" [scrollbarV]=\"true\" [scrollbarH]=\"true\">\r\n            <ngx-datatable-column name=\"Name\" [width]=\"300\"></ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Company\" [width]=\"300\"></ngx-datatable-column>\r\n        </ngx-datatable>\r\n    </div>\r\n</div>\r\n<div class=\"card card-default\">\r\n    <div class=\"card-header\">\r\n        <div class=\"float-right\">\r\n            <small>\r\n                      <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"tableExp.rowDetail.expandAllRows()\">Expand All</button>\r\n                      <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"tableExp.rowDetail.collapseAllRows()\">Collapse All</button>\r\n                    </small>\r\n        </div>\r\n        <div class=\"card-title\">Expand Row Detail</div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <ngx-datatable #myTable class='bootstrap expandable' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\" [scrollbarV]=\"50\" [rows]='rowsExp' (page)=\"onPage($event)\">\r\n            <!-- Row Detail Template -->\r\n            <ngx-datatable-row-detail [rowHeight]=\"60\" #myDetailRow (toggle)=\"onDetailToggle($event)\">\r\n                <ng-template let-row=\"row\" ngx-datatable-row-detail-template>\r\n                    <div style=\"padding-left:35px;\">\r\n                        <div><strong>Company</strong></div>\r\n                        <div>{{row.company}}</div>\r\n                    </div>\r\n                </ng-template>\r\n            </ngx-datatable-row-detail>\r\n            <!-- Column Templates -->\r\n            <ngx-datatable-column [width]=\"50\" [resizeable]=\"false\" [sortable]=\"false\" [draggable]=\"false\" [canAutoResize]=\"false\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    <a [class.datatable-icon-right]=\"!row.$$expanded\" [class.datatable-icon-down]=\"row.$$expanded\" title=\"Expand/Collapse Row\" (click)=\"toggleExpandRow(row)\">\r\n                        </a>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Index\" width=\"80\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    <strong>{{row.$$index}}</strong>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Expanded\" width=\"80\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    <strong>{{row.$$expanded === 1}}</strong>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Name\" width=\"200\">\r\n                <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                    <strong>{{value}}</strong>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Gender\" width=\"300\">\r\n                <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n                    <i [innerHTML]=\"row['name']\"></i> and <i>{{value}}</i>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\r\n        </ngx-datatable>\r\n    </div>\r\n</div>\r\n<div class=\"card card-default\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">Client-side Sorting</div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <ngx-datatable class=\"bootstrap\" [rows]=\"rowsSort\" [columns]=\"columnsSort\" [sortType]=\"'multi'\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\" [scrollbarV]=\"true\">\r\n        </ngx-datatable>\r\n    </div>\r\n</div>\r\n<div class=\"card card-default\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">Row Selection</div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8\">\r\n                <ngx-datatable class=\"bootstrap\" [rows]=\"rowsSel\" [columnMode]=\"'force'\" [columns]=\"columns\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"15\" [selected]=\"selected\" [selectionType]=\"'multiClick'\" (activate)=\"onActivate($event)\" (select)='onSelect($event)'>\r\n                </ngx-datatable>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <div class='selected-column'>\r\n                    <h4>Selections</h4>\r\n                    <ul>\r\n                        <li *ngFor='let sel of selected'>\r\n                            {{sel.name}}\r\n                        </li>\r\n                        <li *ngIf=\"!selected.length\">No Selections</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/routes/tables/ngxdatatable/ngxdatatable.component.scss":
/*!******************************************************************************!*\
  !*** ./ClientApp/app/routes/tables/ngxdatatable/ngxdatatable.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./ngxdatatable.component.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/ngxdatatable/ngxdatatable.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/routes/tables/ngxdatatable/ngxdatatable.component.ts":
/*!****************************************************************************!*\
  !*** ./ClientApp/app/routes/tables/ngxdatatable/ngxdatatable.component.ts ***!
  \****************************************************************************/
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
var ngx_datatable_1 = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
var _clone = function (d) { return JSON.parse(JSON.stringify(d)); };
var NgxdatatableComponent = /** @class */ (function () {
    function NgxdatatableComponent() {
        var _this = this;
        this.editing = {};
        this.rows = [];
        this.rowsFilter = [];
        this.rowsExp = [];
        this.rowsSort = [];
        this.temp = [];
        this.expanded = {};
        this.rowsSel = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.columnsSort = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            // cache our list
            _this.temp = _clone(data);
            _this.rows = _clone(data);
            ;
            _this.rowsFilter = _clone(data);
            ;
            _this.rowsExp = _clone(data);
            _this.rowsSort = _clone(data);
            _this.rowsSel = _clone(data);
        });
    }
    NgxdatatableComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    NgxdatatableComponent.prototype.toggleExpandRow = function (row) {
        console.log('Toggled Expand Row!', row);
        this.tableExp.rowDetail.toggleExpandRow(row);
    };
    NgxdatatableComponent.prototype.onDetailToggle = function (event) {
        console.log('Detail Toggled', event);
    };
    NgxdatatableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    NgxdatatableComponent.prototype.updateValue = function (event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex);
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = this.rows.slice();
        console.log('UPDATED!', this.rows[rowIndex][cell]);
    };
    NgxdatatableComponent.prototype.ngOnInit = function () {
    };
    NgxdatatableComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    // Selection
    NgxdatatableComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    NgxdatatableComponent.prototype.onActivate = function (event) {
        console.log('Activate Event', event);
    };
    __decorate([
        core_1.ViewChild(ngx_datatable_1.DatatableComponent),
        __metadata("design:type", ngx_datatable_1.DatatableComponent)
    ], NgxdatatableComponent.prototype, "table", void 0);
    __decorate([
        core_1.ViewChild('myTable'),
        __metadata("design:type", Object)
    ], NgxdatatableComponent.prototype, "tableExp", void 0);
    NgxdatatableComponent = __decorate([
        core_1.Component({
            selector: 'app-ngxdatatable',
            template: __webpack_require__(/*! ./ngxdatatable.component.html */ "./ClientApp/app/routes/tables/ngxdatatable/ngxdatatable.component.html"),
            styles: [__webpack_require__(/*! ./ngxdatatable.component.scss */ "./ClientApp/app/routes/tables/ngxdatatable/ngxdatatable.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], NgxdatatableComponent);
    return NgxdatatableComponent;
}());
exports.NgxdatatableComponent = NgxdatatableComponent;


/***/ }),

/***/ "./ClientApp/app/routes/tables/standard/standard.component.html":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/routes/tables/standard/standard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n    <div>Tables\r\n       <small>Bootstrap Responsive tables</small></div>\r\n</div>\r\n<!-- START row-->\r\n<div class=\"row\">\r\n   <div class=\"col-xl-6\">\r\n      <!-- START card-->\r\n      <div class=\"card card-default\">\r\n         <div class=\"card-header\">Kitchen Sink</div>\r\n         <div class=\"card-body\">\r\n            <!-- START table-responsive-->\r\n            <div class=\"table-responsive\">\r\n               <table class=\"table table-striped table-bordered table-hover\">\r\n                  <thead>\r\n                     <tr>\r\n                        <th>#</th>\r\n                        <th>First Name</th>\r\n                        <th>Last Name</th>\r\n                        <th>Username</th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <tr>\r\n                        <td>1</td>\r\n                        <td>Mark</td>\r\n                        <td>Otto</td>\r\n                        <td>@mdo</td>\r\n                     </tr>\r\n                     <tr>\r\n                        <td>2</td>\r\n                        <td>Jacob</td>\r\n                        <td>Thornton</td>\r\n                        <td>@fat</td>\r\n                     </tr>\r\n                     <tr>\r\n                        <td>3</td>\r\n                        <td>Larry</td>\r\n                        <td>the Bird</td>\r\n                        <td>@twitter</td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n            <!-- END table-responsive-->\r\n         </div>\r\n      </div>\r\n      <!-- END card-->\r\n   </div>\r\n   <div class=\"col-xl-6\">\r\n      <!-- START card-->\r\n      <div class=\"card card-default\">\r\n         <div class=\"card-header\">Basic Table</div>\r\n         <div class=\"card-body\">\r\n            <!-- START table-responsive-->\r\n            <div class=\"table-responsive\">\r\n               <table class=\"table\">\r\n                  <thead>\r\n                     <tr>\r\n                        <th>#</th>\r\n                        <th>First Name</th>\r\n                        <th>Last Name</th>\r\n                        <th>Username</th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <tr>\r\n                        <td>1</td>\r\n                        <td>Mark</td>\r\n                        <td>Otto</td>\r\n                        <td>@mdo</td>\r\n                     </tr>\r\n                     <tr>\r\n                        <td>2</td>\r\n                        <td>Jacob</td>\r\n                        <td>Thornton</td>\r\n                        <td>@fat</td>\r\n                     </tr>\r\n                     <tr>\r\n                        <td>3</td>\r\n                        <td>Larry</td>\r\n                        <td>the Bird</td>\r\n                        <td>@twitter</td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n            <!-- END table-responsive-->\r\n         </div>\r\n      </div>\r\n      <!-- END card-->\r\n   </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n   <div class=\"col-xl-6\">\r\n      <div class=\"card card-default\">\r\n         <div class=\"card-header\">Striped Rows</div>\r\n         <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n               <table class=\"table table-striped\">\r\n                  <thead>\r\n                     <tr>\r\n                        <th>#</th>\r\n                        <th>First Name</th>\r\n                        <th>Last Name</th>\r\n                        <th>Username</th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <tr>\r\n                        <td>1</td>\r\n                        <td>Mark</td>\r\n                        <td>Otto</td>\r\n                        <td>@mdo</td>\r\n                     </tr>\r\n                     <tr>\r\n                        <td>2</td>\r\n                        <td>Jacob</td>\r\n                        <td>Thornton</td>\r\n                        <td>@fat</td>\r\n                     </tr>\r\n                     <tr>\r\n                        <td>3</td>\r\n                        <td>Larry</td>\r\n                        <td>the Bird</td>\r\n                        <td>@twitter</td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"col-xl-6\">\r\n      <div class=\"card card-default\">\r\n         <div class=\"card-header\">Bordered Table</div>\r\n         <div class=\"card-body\">\r\n            <div class=\"table-responsive table-bordered\">\r\n               <table class=\"table\">\r\n                  <thead>\r\n                     <tr>\r\n                        <th>#</th>\r\n                        <th>First Name</th>\r\n                        <th>Last Name</th>\r\n                        <th>Username</th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <tr>\r\n                        <td>1</td>\r\n                        <td>Mark</td>\r\n                        <td>Otto</td>\r\n                        <td>@mdo</td>\r\n                     </tr>\r\n                     <tr>\r\n                        <td>2</td>\r\n                        <td>Jacob</td>\r\n                        <td>Thornton</td>\r\n                        <td>@fat</td>\r\n                     </tr>\r\n                     <tr>\r\n                        <td>3</td>\r\n                        <td>Larry</td>\r\n                        <td>the Bird</td>\r\n                        <td>@twitter</td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n<!-- END row-->\r\n<div class=\"card card-default\">\r\n   <div class=\"card-header\">Dark Table</div>\r\n   <table class=\"table table-dark\">\r\n      <thead>\r\n         <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">First</th>\r\n            <th scope=\"col\">Last</th>\r\n            <th scope=\"col\">Handle</th>\r\n         </tr>\r\n      </thead>\r\n      <tbody>\r\n         <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n         </tr>\r\n         <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n         </tr>\r\n         <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n         </tr>\r\n      </tbody>\r\n   </table>\r\n</div>\r\n<!-- START row-->\r\n<div class=\"row\">\r\n   <div class=\"col-xl-6\">\r\n      <div class=\"card card-default\">\r\n         <div class=\"card-header\">Hover Rows</div>\r\n         <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n               <table class=\"table table-hover\">\r\n                  <thead>\r\n                     <tr>\r\n                        <th>#</th>\r\n                        <th>First Name</th>\r\n                        <th>Last Name</th>\r\n                        <th>Username</th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <tr>\r\n                        <td>1</td>\r\n                        <td>Mark</td>\r\n                        <td>Otto</td>\r\n                        <td>@mdo</td>\r\n                     </tr>\r\n                     <tr>\r\n                        <td>2</td>\r\n                        <td>Jacob</td>\r\n                        <td>Thornton</td>\r\n                        <td>@fat</td>\r\n                     </tr>\r\n                     <tr>\r\n                        <td>3</td>\r\n                        <td>Larry</td>\r\n                        <td>the Bird</td>\r\n                        <td>@twitter</td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"col-xl-6\">\r\n      <div class=\"card card-default\">\r\n         <div class=\"card-header\">Context Classes</div>\r\n         <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n               <table class=\"table\">\r\n                  <thead>\r\n                     <tr>\r\n                        <th>#</th>\r\n                        <th>First Name</th>\r\n                        <th>Last Name</th>\r\n                        <th>Username</th>\r\n                     </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                     <tr class=\"table-success\">\r\n                        <td>1</td>\r\n                        <td>Mark</td>\r\n                        <td>Otto</td>\r\n                        <td>@mdo</td>\r\n                     </tr>\r\n                     <tr class=\"table-info\">\r\n                        <td>2</td>\r\n                        <td>Jacob</td>\r\n                        <td>Thornton</td>\r\n                        <td>@fat</td>\r\n                     </tr>\r\n                     <tr class=\"table-warning\">\r\n                        <td>3</td>\r\n                        <td>Larry</td>\r\n                        <td>the Bird</td>\r\n                        <td>@twitter</td>\r\n                     </tr>\r\n                     <tr class=\"table-danger\">\r\n                        <td>4</td>\r\n                        <td>John</td>\r\n                        <td>Smith</td>\r\n                        <td>@jsmith</td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n<!-- END row-->"

/***/ }),

/***/ "./ClientApp/app/routes/tables/standard/standard.component.scss":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/routes/tables/standard/standard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./standard.component.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/standard/standard.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/routes/tables/standard/standard.component.ts":
/*!********************************************************************!*\
  !*** ./ClientApp/app/routes/tables/standard/standard.component.ts ***!
  \********************************************************************/
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
var StandardComponent = /** @class */ (function () {
    function StandardComponent() {
    }
    StandardComponent.prototype.ngOnInit = function () {
    };
    StandardComponent = __decorate([
        core_1.Component({
            selector: 'app-standard',
            template: __webpack_require__(/*! ./standard.component.html */ "./ClientApp/app/routes/tables/standard/standard.component.html"),
            styles: [__webpack_require__(/*! ./standard.component.scss */ "./ClientApp/app/routes/tables/standard/standard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StandardComponent);
    return StandardComponent;
}());
exports.StandardComponent = StandardComponent;


/***/ }),

/***/ "./ClientApp/app/routes/tables/tables.module.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/routes/tables/tables.module.ts ***!
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
var ng2_table_1 = __webpack_require__(/*! ng2-table/ng2-table */ "./node_modules/ng2-table/ng2-table.js");
var main_1 = __webpack_require__(/*! ag-grid-angular/main */ "./node_modules/ag-grid-angular/main.js");
var ngx_datatable_1 = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
var shared_module_1 = __webpack_require__(/*! ../../shared/shared.module */ "./ClientApp/app/shared/shared.module.ts");
var standard_component_1 = __webpack_require__(/*! ./standard/standard.component */ "./ClientApp/app/routes/tables/standard/standard.component.ts");
var extended_component_1 = __webpack_require__(/*! ./extended/extended.component */ "./ClientApp/app/routes/tables/extended/extended.component.ts");
var datatable_component_1 = __webpack_require__(/*! ./datatable/datatable.component */ "./ClientApp/app/routes/tables/datatable/datatable.component.ts");
var angulargrid_component_1 = __webpack_require__(/*! ./angulargrid/angulargrid.component */ "./ClientApp/app/routes/tables/angulargrid/angulargrid.component.ts");
var ngxdatatable_component_1 = __webpack_require__(/*! ./ngxdatatable/ngxdatatable.component */ "./ClientApp/app/routes/tables/ngxdatatable/ngxdatatable.component.ts");
var routes = [
    { path: 'standard', component: standard_component_1.StandardComponent },
    { path: 'extended', component: extended_component_1.ExtendedComponent },
    { path: 'datatable', component: datatable_component_1.DatatableComponent },
    { path: 'aggrid', component: angulargrid_component_1.AngulargridComponent },
    { path: 'ngxdatatable', component: ngxdatatable_component_1.NgxdatatableComponent }
];
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(routes),
                ng2_table_1.Ng2TableModule,
                main_1.AgGridModule.withComponents([angulargrid_component_1.AngulargridComponent]),
                ngx_datatable_1.NgxDatatableModule
            ],
            declarations: [
                standard_component_1.StandardComponent,
                extended_component_1.ExtendedComponent,
                datatable_component_1.DatatableComponent,
                angulargrid_component_1.AngulargridComponent,
                ngxdatatable_component_1.NgxdatatableComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], TablesModule);
    return TablesModule;
}());
exports.TablesModule = TablesModule;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/angulargrid/angulargrid.component.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/angulargrid/angulargrid.component.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/datatable/datatable.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/datatable/datatable.component.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/extended/extended.component.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/extended/extended.component.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/ngxdatatable/ngxdatatable.component.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/ngxdatatable/ngxdatatable.component.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../node_modules/css-loader!@swimlane/ngx-datatable/release/index.css */ "./node_modules/css-loader/index.js!./node_modules/@swimlane/ngx-datatable/release/index.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../node_modules/css-loader!@swimlane/ngx-datatable/release/themes/bootstrap.css */ "./node_modules/css-loader/index.js!./node_modules/@swimlane/ngx-datatable/release/themes/bootstrap.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../node_modules/css-loader!@swimlane/ngx-datatable/release/assets/icons.css */ "./node_modules/css-loader/index.js!./node_modules/@swimlane/ngx-datatable/release/assets/icons.css"), "");

// module
exports.push([module.i, ".ngx-datatable.bootstrap {\n  background-color: transparent;\n  box-shadow: 0 0 0 #000; }\n\n.ngx-datatable.scroll-vertical {\n  height: 300px; }\n\n.no-detail-row .datatable-row-detail {\n  display: none !important; }\n\n.ngx-datatable.bootstrap.single-selection .datatable-body-row.active, .ngx-datatable.bootstrap.single-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.bootstrap.multi-selection .datatable-body-row.active, .ngx-datatable.bootstrap.multi-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.bootstrap.multi-click-selection .datatable-body-row.active, .ngx-datatable.bootstrap.multi-click-selection .datatable-body-row.active .datatable-row-group,\n.ngx-datatable.bootstrap.single-selection .datatable-body-row.active:hover, .ngx-datatable.bootstrap.single-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.bootstrap.multi-selection .datatable-body-row.active:hover, .ngx-datatable.bootstrap.multi-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.bootstrap.multi-click-selection .datatable-body-row.active:hover, .ngx-datatable.bootstrap.multi-click-selection .datatable-body-row.active:hover .datatable-row-group {\n  background-color: #5d9cec !important; }\n  .ngx-datatable.bootstrap.single-selection .datatable-body-row.active .datatable-body-cell, .ngx-datatable.bootstrap.single-selection .datatable-body-row.active .datatable-row-group .datatable-body-cell, .ngx-datatable.bootstrap.multi-selection .datatable-body-row.active .datatable-body-cell, .ngx-datatable.bootstrap.multi-selection .datatable-body-row.active .datatable-row-group .datatable-body-cell, .ngx-datatable.bootstrap.multi-click-selection .datatable-body-row.active .datatable-body-cell, .ngx-datatable.bootstrap.multi-click-selection .datatable-body-row.active .datatable-row-group .datatable-body-cell,\n  .ngx-datatable.bootstrap.single-selection .datatable-body-row.active:hover .datatable-body-cell, .ngx-datatable.bootstrap.single-selection .datatable-body-row.active:hover .datatable-row-group .datatable-body-cell, .ngx-datatable.bootstrap.multi-selection .datatable-body-row.active:hover .datatable-body-cell, .ngx-datatable.bootstrap.multi-selection .datatable-body-row.active:hover .datatable-row-group .datatable-body-cell, .ngx-datatable.bootstrap.multi-click-selection .datatable-body-row.active:hover .datatable-body-cell, .ngx-datatable.bootstrap.multi-click-selection .datatable-body-row.active:hover .datatable-row-group .datatable-body-cell {\n    color: #fff; }\n\n.datatable-icon-right {\n  text-decoration: none !important; }\n\n.ngx-datatable.bootstrap .empty-row {\n  text-align: center;\n  margin-top: 20px; }\n\n.ngx-datatable.bootstrap .datatable-footer {\n  background-color: transparent;\n  color: #656565; }\n\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n  color: #007bff; }\n\n.pager li > a, .pager li > span {\n  border-color: #dee2e6; }\n\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #5d9cec;\n  border-color: #5d9cec;\n  color: #fff; }\n\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n  border: 0; }\n\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n  background-color: rgba(0, 0, 0, 0.025); }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/standard/standard.component.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./ClientApp/app/routes/tables/standard/standard.component.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy90YWJsZXMvYW5ndWxhcmdyaWQvYW5ndWxhcmdyaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvdGFibGVzL2FuZ3VsYXJncmlkL2FuZ3VsYXJncmlkLmNvbXBvbmVudC5zY3NzPzU1MjciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvdGFibGVzL2FuZ3VsYXJncmlkL2FuZ3VsYXJncmlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy90YWJsZXMvZGF0YXRhYmxlL2RhdGF0YWJsZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy90YWJsZXMvZGF0YXRhYmxlL2RhdGF0YWJsZS5jb21wb25lbnQuc2Nzcz9hMzUxIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL3RhYmxlcy9kYXRhdGFibGUvZGF0YXRhYmxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy90YWJsZXMvZGF0YXRhYmxlL25nMi10YWJsZS1kYXRhLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL3RhYmxlcy9leHRlbmRlZC9leHRlbmRlZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy90YWJsZXMvZXh0ZW5kZWQvZXh0ZW5kZWQuY29tcG9uZW50LnNjc3M/NjQzMyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy90YWJsZXMvZXh0ZW5kZWQvZXh0ZW5kZWQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL3RhYmxlcy9uZ3hkYXRhdGFibGUvbmd4ZGF0YXRhYmxlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL3RhYmxlcy9uZ3hkYXRhdGFibGUvbmd4ZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzP2YwYjYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvdGFibGVzL25neGRhdGF0YWJsZS9uZ3hkYXRhdGFibGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL3RhYmxlcy9zdGFuZGFyZC9zdGFuZGFyZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy90YWJsZXMvc3RhbmRhcmQvc3RhbmRhcmQuY29tcG9uZW50LnNjc3M/NDE3MCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy90YWJsZXMvc3RhbmRhcmQvc3RhbmRhcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL3RhYmxlcy90YWJsZXMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvcm91dGVzL3RhYmxlcy9hbmd1bGFyZ3JpZC9hbmd1bGFyZ3JpZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy90YWJsZXMvZGF0YXRhYmxlL2RhdGF0YWJsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3JvdXRlcy90YWJsZXMvZXh0ZW5kZWQvZXh0ZW5kZWQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvdGFibGVzL25neGRhdGF0YWJsZS9uZ3hkYXRhdGFibGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9yb3V0ZXMvdGFibGVzL3N0YW5kYXJkL3N0YW5kYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlWQUFpVixr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QTtBQUFoQixvQ0FBWTs7Ozs7Ozs7Ozs7O0FDeEN6QjtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW9ELGtDQUFrQywyQkFBMkIsRUFBRSxvQ0FBb0Msa0JBQWtCLEVBQUUsMENBQTBDLDZCQUE2QixFQUFFLCsvQkFBKy9CLHlDQUF5QyxFQUFFLDZ2Q0FBNnZDLGtCQUFrQixFQUFFLDJCQUEyQixxQ0FBcUMsRUFBRSx5Q0FBeUMsdUJBQXVCLHFCQUFxQixFQUFFLGdEQUFnRCxrQ0FBa0MsbUJBQW1CLEVBQUUsbUVBQW1FLG1CQUFtQixFQUFFLHFDQUFxQywwQkFBMEIsRUFBRSx5TEFBeUwsOEJBQThCLDBCQUEwQixnQkFBZ0IsRUFBRSxrRUFBa0UsY0FBYyxFQUFFLHFGQUFxRiwyQ0FBMkMsRUFBRTs7QUFFLzVHOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGVudC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgPGRpdj5UYWJsZXNcXHJcXG4gICAgICAgIDxzbWFsbD5BbiBBZHZhbmNlZCBEYXRhZ3JpZCBmb3IgQW5ndWxhckpTPC9zbWFsbD48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICA8IS0tIEJhc2ljIEV4YW1wbGUtLT5cXHJcXG4gICAgPGg0IGNsYXNzPVxcXCJwYWdlLWhlYWRlciBtdDBcXFwiPkJhc2ljIEV4YW1wbGU8L2g0PlxcclxcbiAgICA8YWctZ3JpZC1hbmd1bGFyICNhZ0dyaWQgY2xhc3M9XFxcImFnLWFuZ2xlXFxcIiBzdHlsZT1cXFwid2lkdGg6IDEwMCU7IGhlaWdodDogNDAwcHhcXFwiIFtncmlkT3B0aW9uc109XFxcImdyaWRPcHRpb25zXFxcIiAoZ3JpZFJlYWR5KT1cXFwiZ3JpZFJlYWR5KCRldmVudClcXFwiPlxcclxcbiAgICA8L2FnLWdyaWQtYW5ndWxhcj5cXHJcXG4gICAgPCEtLSBGaWx0ZXIgRXhhbXBsZS0tPlxcclxcbiAgICA8aDQgY2xhc3M9XFxcInBhZ2UtaGVhZGVyXFxcIj5GaWx0ZXIgRXhhbXBsZTwvaDQ+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNCBjb2wtbGctNlxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJtYiBmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaWx0ZXIuLi5cXFwiIHR5cGU9XFxcInRleHRcXFwiIChrZXl1cCk9XFxcIm9uUXVpY2tGaWx0ZXJDaGFuZ2VkKCRldmVudClcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxhZy1ncmlkLWFuZ3VsYXIgI2FnR3JpZCBjbGFzcz1cXFwiYWctYW5nbGVcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiA0MDBweFxcXCIgW2dyaWRPcHRpb25zXT1cXFwiZ3JpZE9wdGlvbnMxXFxcIiAoZ3JpZFJlYWR5KT1cXFwiZ3JpZFJlYWR5MSgkZXZlbnQpXFxcIiBlbmFibGVGaWx0ZXI+PC9hZy1ncmlkLWFuZ3VsYXI+XFxyXFxuICAgIDwhLS0gUGlubmluZyBFeGFtcGxlLS0+XFxyXFxuICAgIDxoNCBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPlBpbm5pbmcgRXhhbXBsZTwvaDQ+XFxyXFxuICAgIDxhZy1ncmlkLWFuZ3VsYXIgI2FnR3JpZCBjbGFzcz1cXFwiYWctYW5nbGVcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiA0MDBweFxcXCIgW2dyaWRPcHRpb25zXT1cXFwiZ3JpZE9wdGlvbnMyXFxcIiAoZ3JpZFJlYWR5KT1cXFwiZ3JpZFJlYWR5MigkZXZlbnQpXFxcIj48L2FnLWdyaWQtYW5ndWxhcj5cXHJcXG48L2Rpdj5cXHJcXG5cIiIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9hbmd1bGFyZ3JpZC5jb21wb25lbnQuc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHcmlkT3B0aW9ucyB9IGZyb20gJ2FnLWdyaWQvbWFpbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuZGVjbGFyZSB2YXIgJDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1hbmd1bGFyZ3JpZCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hbmd1bGFyZ3JpZC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hbmd1bGFyZ3JpZC5jb21wb25lbnQuc2NzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhcmdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcmVzaXplRXZlbnQgPSAncmVzaXplLmFnLWdyaWQnO1xyXG4gICAgJHdpbiA9ICQod2luZG93KTtcclxuXHJcbiAgICBncmlkT3B0aW9uczogR3JpZE9wdGlvbnM7XHJcbiAgICBncmlkT3B0aW9uczE6IEdyaWRPcHRpb25zO1xyXG4gICAgZ3JpZE9wdGlvbnMyOiBHcmlkT3B0aW9ucztcclxuXHJcbiAgICAvLyBCYXNpYyBleGFtcGxlXHJcbiAgICBjb2x1bW5EZWZzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyTmFtZTogJ0F0aGxldGUnLFxyXG4gICAgICAgICAgICBmaWVsZDogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICB3aWR0aDogMTUwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBoZWFkZXJOYW1lOiAnQWdlJyxcclxuICAgICAgICAgICAgZmllbGQ6ICdhZ2UnLFxyXG4gICAgICAgICAgICB3aWR0aDogOTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGhlYWRlck5hbWU6ICdDb3VudHJ5JyxcclxuICAgICAgICAgICAgZmllbGQ6ICdjb3VudHJ5JyxcclxuICAgICAgICAgICAgd2lkdGg6IDEyMFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaGVhZGVyTmFtZTogJ1llYXInLFxyXG4gICAgICAgICAgICBmaWVsZDogJ3llYXInLFxyXG4gICAgICAgICAgICB3aWR0aDogOTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGhlYWRlck5hbWU6ICdEYXRlJyxcclxuICAgICAgICAgICAgZmllbGQ6ICdkYXRlJyxcclxuICAgICAgICAgICAgd2lkdGg6IDExMFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaGVhZGVyTmFtZTogJ1Nwb3J0JyxcclxuICAgICAgICAgICAgZmllbGQ6ICdzcG9ydCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGhlYWRlck5hbWU6ICdHb2xkJyxcclxuICAgICAgICAgICAgZmllbGQ6ICdnb2xkJyxcclxuICAgICAgICAgICAgd2lkdGg6IDEwMFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaGVhZGVyTmFtZTogJ1NpbHZlcicsXHJcbiAgICAgICAgICAgIGZpZWxkOiAnc2lsdmVyJyxcclxuICAgICAgICAgICAgd2lkdGg6IDEwMFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaGVhZGVyTmFtZTogJ0Jyb256ZScsXHJcbiAgICAgICAgICAgIGZpZWxkOiAnYnJvbnplJyxcclxuICAgICAgICAgICAgd2lkdGg6IDEwMFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaGVhZGVyTmFtZTogJ1RvdGFsJyxcclxuICAgICAgICAgICAgZmllbGQ6ICd0b3RhbCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBcclxuICAgICAgICB9XTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgRXhhbXBsZVxyXG4gICAgaXJpc2hBdGhsZXRlcyA9IFsnSm9obiBKb2UgTmV2aW4nLCAnS2F0aWUgVGF5bG9yJywgJ1BhZGR5IEJhcm5lcycsICdLZW5ueSBFZ2FuJywgJ0RhcnJlbiBTdXRoZXJsYW5kJywgJ01hcmdhcmV0IFRoYXRjaGVyJywgJ1RvbnkgQmxhaXInLCAnUm9uYWxkIFJlZ2FuJywgJ0JhcmFjayBPYmFtYSddO1xyXG5cclxuICAgIGNvbHVtbkRlZnNGaWx0ZXIgPSBbe1xyXG4gICAgICAgIGhlYWRlck5hbWU6ICdBdGhsZXRlJyxcclxuICAgICAgICBmaWVsZDogJ2F0aGxldGUnLFxyXG4gICAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgICAgZmlsdGVyOiAnc2V0JyxcclxuICAgICAgICBmaWx0ZXJQYXJhbXM6IHtcclxuICAgICAgICAgICAgY2VsbEhlaWdodDogMjAsXHJcbiAgICAgICAgICAgIHZhbHVlczogdGhpcy5pcmlzaEF0aGxldGVzXHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGhlYWRlck5hbWU6ICdBZ2UnLFxyXG4gICAgICAgIGZpZWxkOiAnYWdlJyxcclxuICAgICAgICB3aWR0aDogOTAsXHJcbiAgICAgICAgZmlsdGVyOiAnbnVtYmVyJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIGhlYWRlck5hbWU6ICdDb3VudHJ5JyxcclxuICAgICAgICBmaWVsZDogJ2NvdW50cnknLFxyXG4gICAgICAgIHdpZHRoOiAxMjBcclxuICAgIH0sIHtcclxuICAgICAgICBoZWFkZXJOYW1lOiAnWWVhcicsXHJcbiAgICAgICAgZmllbGQ6ICd5ZWFyJyxcclxuICAgICAgICB3aWR0aDogOTBcclxuICAgIH0sIHtcclxuICAgICAgICBoZWFkZXJOYW1lOiAnRGF0ZScsXHJcbiAgICAgICAgZmllbGQ6ICdkYXRlJyxcclxuICAgICAgICB3aWR0aDogMTEwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgaGVhZGVyTmFtZTogJ1Nwb3J0JyxcclxuICAgICAgICBmaWVsZDogJ3Nwb3J0JyxcclxuICAgICAgICB3aWR0aDogMTEwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgaGVhZGVyTmFtZTogJ0dvbGQnLFxyXG4gICAgICAgIGZpZWxkOiAnZ29sZCcsXHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICBmaWx0ZXI6ICdudW1iZXInXHJcbiAgICB9LCB7XHJcbiAgICAgICAgaGVhZGVyTmFtZTogJ1NpbHZlcicsXHJcbiAgICAgICAgZmllbGQ6ICdzaWx2ZXInLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgZmlsdGVyOiAnbnVtYmVyJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIGhlYWRlck5hbWU6ICdCcm9uemUnLFxyXG4gICAgICAgIGZpZWxkOiAnYnJvbnplJyxcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIGZpbHRlcjogJ251bWJlcidcclxuICAgIH0sIHtcclxuICAgICAgICBoZWFkZXJOYW1lOiAnVG90YWwnLFxyXG4gICAgICAgIGZpZWxkOiAndG90YWwnLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgZmlsdGVyOiAnbnVtYmVyJ1xyXG4gICAgfV07XHJcblxyXG4gICAgLy8gUGlubmVkIGV4YW1wbGVcclxuICAgIGNvbHVtbkRlZnNQaW5uZWQ6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgLy8gQmFzaWMgZXhhbXBsZVxyXG4gICAgICAgIHRoaXMuZ3JpZE9wdGlvbnMgPSA8R3JpZE9wdGlvbnM+e1xyXG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICBjb2x1bW5EZWZzOiB0aGlzLmNvbHVtbkRlZnMsXHJcbiAgICAgICAgICAgIHJvd0RhdGE6IG51bGwsXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBleGFtcGxlXHJcbiAgICAgICAgdGhpcy5ncmlkT3B0aW9uczEgPSA8R3JpZE9wdGlvbnM+e1xyXG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICBjb2x1bW5EZWZzOiB0aGlzLmNvbHVtbkRlZnNGaWx0ZXIsXHJcbiAgICAgICAgICAgIHJvd0RhdGE6IG51bGwsXHJcbiAgICAgICAgICAgIGVuYWJsZUZpbHRlcjogdHJ1ZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBQaW5uZWQgRXhhbXBsZVxyXG4gICAgICAgIHRoaXMuY29sdW1uRGVmc1Bpbm5lZCA9IF8uY2xvbmVEZWVwKHRoaXMuY29sdW1uRGVmcyk7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5EZWZzUGlubmVkWzBdLnBpbm5lZCA9ICdsZWZ0JztcclxuICAgICAgICB0aGlzLmdyaWRPcHRpb25zMiA9IDxHcmlkT3B0aW9ucz57XHJcbiAgICAgICAgICAgIGhlYWRlckhlaWdodDogNDAsXHJcbiAgICAgICAgICAgIGNvbHVtbkRlZnM6IHRoaXMuY29sdW1uRGVmc1Bpbm5lZCxcclxuICAgICAgICAgICAgcm93RGF0YTogbnVsbFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIExvYWQgZnJvbSBKU09OXHJcbiAgICAgICAgaHR0cC5nZXQ8YW55PignYXNzZXRzL3NlcnZlci9hZy1vd2lubmVycy5qc29uJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZE9wdGlvbnMuYXBpLnNldFJvd0RhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRPcHRpb25zLmFwaS5zaXplQ29sdW1uc1RvRml0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkT3B0aW9uczEuYXBpLnNldFJvd0RhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRPcHRpb25zMS5hcGkuc2l6ZUNvbHVtbnNUb0ZpdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZE9wdGlvbnMyLmFwaS5zZXRSb3dEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkT3B0aW9uczIuYXBpLnNpemVDb2x1bW5zVG9GaXQoKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUXVpY2tGaWx0ZXJDaGFuZ2VkKCRldmVudCkge1xyXG4gICAgICAgIHRoaXMuZ3JpZE9wdGlvbnMxLmFwaS5zZXRRdWlja0ZpbHRlcigkZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICAgIGdyaWRSZWFkeShwYXJhbXMpIHtcclxuICAgICAgICBwYXJhbXMuYXBpLnNpemVDb2x1bW5zVG9GaXQoKTtcclxuICAgICAgICB0aGlzLiR3aW4ub24odGhpcy5yZXNpemVFdmVudCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgcGFyYW1zLmFwaS5zaXplQ29sdW1uc1RvRml0KCk7IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdyaWRSZWFkeTEocGFyYW1zKSB7XHJcbiAgICAgICAgcGFyYW1zLmFwaS5zaXplQ29sdW1uc1RvRml0KCk7XHJcbiAgICAgICAgdGhpcy4kd2luLm9uKHRoaXMucmVzaXplRXZlbnQsICgpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHBhcmFtcy5hcGkuc2l6ZUNvbHVtbnNUb0ZpdCgpOyB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBncmlkUmVhZHkyKHBhcmFtcykge1xyXG4gICAgICAgIHBhcmFtcy5hcGkuc2l6ZUNvbHVtbnNUb0ZpdCgpO1xyXG4gICAgICAgIHRoaXMuJHdpbi5vbih0aGlzLnJlc2l6ZUV2ZW50LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBwYXJhbXMuYXBpLnNpemVDb2x1bW5zVG9GaXQoKTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy4kd2luLm9mZih0aGlzLnJlc2l6ZUV2ZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtaGVhZGluZ1xcXCI+XFxyXFxuICAgIDxkaXY+RGF0YS1UYWJsZXMgY29tcG9uZW50c1xcclxcbiAgICAgICAgPHNtYWxsPk5hdGl2ZSBhbmQgbm90IHdyYXBwZWQgYW5ndWxhcjIgYmFzZWQgZGF0YS10YWJsZXM8L3NtYWxsPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjwhLS0gPGFsZXJ0IFt0eXBlXT1cXFwiJ2luZm8nXFxcIj5Ob25lIG9mIHRoaXMgZXhhbXBsZXMgYXJlIGJhc2VkIG9uIHRoZSBvZmZpY2lhbCBqUXVlcnktRGF0YXRhYmxlczwvYWxlcnQ+IC0tPlxcclxcbjxoNCBjbGFzcz1cXFwicGFnZS1oZWFkZXJcXFwiPm5nMiBUYWJsZVxcclxcbiAgICA8c21hbGw+U2ltcGxlIHRhYmxlIGV4dGVuc2lvbiB3aXRoIHNvcnRpbmcsIGZpbHRlcmluZywgcGFnaW5nLi4uIGZvciBBbmd1bGFyMiBhcHBzIGJ5IFZhbG9yU29mdHdhcmU8L3NtYWxsPlxcclxcbjwvaDQ+XFxyXFxuPGRpdiBjbGFzcz1cXFwibWItMyBjbGVhcmZpeFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInB1bGwtbGV0IHdkLW1kXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCAqbmdJZj1cXFwiY29uZmlnLmZpbHRlcmluZ1xcXCIgcGxhY2Vob2xkZXI9XFxcIkZpbHRlciBhbGwgY29sdW1uc1xcXCIgW25nVGFibGVGaWx0ZXJpbmddPVxcXCJjb25maWcuZmlsdGVyaW5nXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAodGFibGVDaGFuZ2VkKT1cXFwib25DaGFuZ2VUYWJsZShjb25maWcpXFxcIiAvPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkIGNhcmQtZGVmYXVsdFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcclxcbiAgICAgICAgPG5nLXRhYmxlIFtjb25maWddPVxcXCJjb25maWdcXFwiICh0YWJsZUNoYW5nZWQpPVxcXCJvbkNoYW5nZVRhYmxlKGNvbmZpZylcXFwiIChjZWxsQ2xpY2tlZCk9XFxcIm9uQ2VsbENsaWNrKCRldmVudClcXFwiIFtyb3dzXT1cXFwicm93c1xcXCIgW2NvbHVtbnNdPVxcXCJjb2x1bW5zXFxcIj48L25nLXRhYmxlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5cXHJcXG4gICAgPHBhZ2luYXRpb24gKm5nSWY9XFxcImNvbmZpZy5wYWdpbmdcXFwiIGNsYXNzPVxcXCJwYWdpbmF0aW9uLXNtXFxcIiBbKG5nTW9kZWwpXT1cXFwicGFnZVxcXCIgW3RvdGFsSXRlbXNdPVxcXCJsZW5ndGhcXFwiIFtpdGVtc1BlclBhZ2VdPVxcXCJpdGVtc1BlclBhZ2VcXFwiIFttYXhTaXplXT1cXFwibWF4U2l6ZVxcXCIgW2JvdW5kYXJ5TGlua3NdPVxcXCJ0cnVlXFxcIiBbcm90YXRlXT1cXFwiZmFsc2VcXFwiIChwYWdlQ2hhbmdlZCk9XFxcIm9uQ2hhbmdlVGFibGUoY29uZmlnLCAkZXZlbnQpXFxcIiAobnVtUGFnZXMpPVxcXCJudW1QYWdlcyA9ICRldmVudFxcXCI+XFxyXFxuICAgIDwvcGFnaW5hdGlvbj5cXHJcXG48L2Rpdj5cXHJcXG48IS0tIDxwcmUgKm5nSWY9XFxcImNvbmZpZy5wYWdpbmdcXFwiIGNsYXNzPVxcXCJjYXJkIGNhcmQtYmxvY2sgY2FyZC1oZWFkZXJcXFwiPlBhZ2U6IHt7cGFnZX19IC8ge3tudW1QYWdlc319PC9wcmU+IC0tPlxcclxcblwiIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2RhdGF0YWJsZS5jb21wb25lbnQuc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgVGFibGVEYXRhIH0gZnJvbSAnLi9uZzItdGFibGUtZGF0YSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWRhdGF0YWJsZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9kYXRhdGFibGUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBzaW5nbGVEYXRhO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgLy8gbmcyVGFibGVcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMubmcyVGFibGVEYXRhLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBuZzJUYWJsZVxyXG4gICAgcHVibGljIHJvd3M6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIHB1YmxpYyBjb2x1bW5zOiBBcnJheTxhbnk+ID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICdOYW1lJywgbmFtZTogJ25hbWUnLCBmaWx0ZXJpbmc6IHsgZmlsdGVyU3RyaW5nOiAnJywgcGxhY2Vob2xkZXI6ICdGaWx0ZXIgYnkgbmFtZScgfSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQb3NpdGlvbicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdwb3NpdGlvbicsXHJcbiAgICAgICAgICAgIHNvcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmaWx0ZXJpbmc6IHsgZmlsdGVyU3RyaW5nOiAnJywgcGxhY2Vob2xkZXI6ICdGaWx0ZXIgYnkgcG9zaXRpb24nIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICdPZmZpY2UnLCBjbGFzc05hbWU6IFsnb2ZmaWNlLWhlYWRlcicsICd0ZXh0LXN1Y2Nlc3MnXSwgbmFtZTogJ29mZmljZScsIHNvcnQ6ICdhc2MnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ0V4dG4uJywgbmFtZTogJ2V4dCcsIHNvcnQ6ICcnLCBmaWx0ZXJpbmc6IHsgZmlsdGVyU3RyaW5nOiAnJywgcGxhY2Vob2xkZXI6ICdGaWx0ZXIgYnkgZXh0bi4nIH0gfSxcclxuICAgICAgICB7IHRpdGxlOiAnU3RhcnQgZGF0ZScsIGNsYXNzTmFtZTogJ3RleHQtd2FybmluZycsIG5hbWU6ICdzdGFydERhdGUnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ1NhbGFyeSAoJCknLCBuYW1lOiAnc2FsYXJ5JyB9XHJcbiAgICBdO1xyXG4gICAgcHVibGljIHBhZ2U6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgaXRlbXNQZXJQYWdlOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBtYXhTaXplOiBudW1iZXIgPSA1O1xyXG4gICAgcHVibGljIG51bVBhZ2VzOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIGxlbmd0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgY29uZmlnOiBhbnkgPSB7XHJcbiAgICAgICAgcGFnaW5nOiB0cnVlLFxyXG4gICAgICAgIHNvcnRpbmc6IHsgY29sdW1uczogdGhpcy5jb2x1bW5zIH0sXHJcbiAgICAgICAgZmlsdGVyaW5nOiB7IGZpbHRlclN0cmluZzogJycgfSxcclxuICAgICAgICBjbGFzc05hbWU6IFsndGFibGUtc3RyaXBlZCcsICd0YWJsZS1ib3JkZXJlZCcsICdtYi0wJywgJ2QtdGFibGUtZml4ZWQnXVxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgbmcyVGFibGVEYXRhOiBBcnJheTxhbnk+ID0gVGFibGVEYXRhO1xyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlVGFibGUodGhpcy5jb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VQYWdlKHBhZ2U6IGFueSwgZGF0YTogQXJyYXk8YW55PiA9IHRoaXMubmcyVGFibGVEYXRhKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gKHBhZ2UucGFnZSAtIDEpICogcGFnZS5pdGVtc1BlclBhZ2U7XHJcbiAgICAgICAgbGV0IGVuZCA9IHBhZ2UuaXRlbXNQZXJQYWdlID4gLTEgPyAoc3RhcnQgKyBwYWdlLml0ZW1zUGVyUGFnZSkgOiBkYXRhLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gZGF0YS5zbGljZShzdGFydCwgZW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlU29ydChkYXRhOiBhbnksIGNvbmZpZzogYW55KTogYW55IHtcclxuICAgICAgICBpZiAoIWNvbmZpZy5zb3J0aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNvbHVtbnMgPSB0aGlzLmNvbmZpZy5zb3J0aW5nLmNvbHVtbnMgfHwgW107XHJcbiAgICAgICAgbGV0IGNvbHVtbk5hbWU6IHN0cmluZyA9IHZvaWQgMDtcclxuICAgICAgICBsZXQgc29ydDogc3RyaW5nID0gdm9pZCAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbnNbaV0uc29ydCAhPT0gJycgJiYgY29sdW1uc1tpXS5zb3J0ICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uTmFtZSA9IGNvbHVtbnNbaV0ubmFtZTtcclxuICAgICAgICAgICAgICAgIHNvcnQgPSBjb2x1bW5zW2ldLnNvcnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY29sdW1uTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNpbXBsZSBzb3J0aW5nXHJcbiAgICAgICAgcmV0dXJuIGRhdGEuc29ydCgocHJldmlvdXM6IGFueSwgY3VycmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcmV2aW91c1tjb2x1bW5OYW1lXSA+IGN1cnJlbnRbY29sdW1uTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzb3J0ID09PSAnZGVzYycgPyAtMSA6IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNbY29sdW1uTmFtZV0gPCBjdXJyZW50W2NvbHVtbk5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc29ydCA9PT0gJ2FzYycgPyAtMSA6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZUZpbHRlcihkYXRhOiBhbnksIGNvbmZpZzogYW55KTogYW55IHtcclxuXHJcbiAgICAgICAgbGV0IGZpbHRlcmVkRGF0YTogQXJyYXk8YW55PiA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZERhdGEgPSBmaWx0ZXJlZERhdGEuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVtjb2x1bW4ubmFtZV0ubWF0Y2goY29sdW1uLmZpbHRlcmluZy5maWx0ZXJTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcuZmlsdGVyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZERhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmZpbHRlcmluZy5jb2x1bW5OYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZERhdGEuZmlsdGVyKChpdGVtOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICBpdGVtW2NvbmZpZy5maWx0ZXJpbmcuY29sdW1uTmFtZV0ubWF0Y2godGhpcy5jb25maWcuZmlsdGVyaW5nLmZpbHRlclN0cmluZykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRlbXBBcnJheTogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgICAgIGZpbHRlcmVkRGF0YS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVtjb2x1bW4ubmFtZV0udG9TdHJpbmcoKS5tYXRjaCh0aGlzLmNvbmZpZy5maWx0ZXJpbmcuZmlsdGVyU3RyaW5nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBBcnJheS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmlsdGVyZWREYXRhID0gdGVtcEFycmF5O1xyXG5cclxuICAgICAgICByZXR1cm4gZmlsdGVyZWREYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNoYW5nZVRhYmxlKGNvbmZpZzogYW55LCBwYWdlOiBhbnkgPSB7IHBhZ2U6IHRoaXMucGFnZSwgaXRlbXNQZXJQYWdlOiB0aGlzLml0ZW1zUGVyUGFnZSB9KTogYW55IHtcclxuICAgICAgICBpZiAoY29uZmlnLmZpbHRlcmluZykge1xyXG4gICAgICAgICAgICAoPGFueT5PYmplY3QpLmFzc2lnbih0aGlzLmNvbmZpZy5maWx0ZXJpbmcsIGNvbmZpZy5maWx0ZXJpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5zb3J0aW5nKSB7XHJcbiAgICAgICAgICAgICg8YW55Pk9iamVjdCkuYXNzaWduKHRoaXMuY29uZmlnLnNvcnRpbmcsIGNvbmZpZy5zb3J0aW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmaWx0ZXJlZERhdGEgPSB0aGlzLmNoYW5nZUZpbHRlcih0aGlzLm5nMlRhYmxlRGF0YSwgdGhpcy5jb25maWcpO1xyXG4gICAgICAgIGxldCBzb3J0ZWREYXRhID0gdGhpcy5jaGFuZ2VTb3J0KGZpbHRlcmVkRGF0YSwgdGhpcy5jb25maWcpO1xyXG4gICAgICAgIHRoaXMucm93cyA9IHBhZ2UgJiYgY29uZmlnLnBhZ2luZyA/IHRoaXMuY2hhbmdlUGFnZShwYWdlLCBzb3J0ZWREYXRhKSA6IHNvcnRlZERhdGE7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBzb3J0ZWREYXRhLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DZWxsQ2xpY2soZGF0YTogYW55KTogYW55IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFRhYmxlRGF0YTogQXJyYXk8YW55PiA9IFtcclxuICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdWaWN0b3JpYSBDYW50cmVsbCcsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0ludGVnZXIgQ29ycG9yYXRpb24nLFxyXG4gICAgICAgICdvZmZpY2UnOiAnQ3JvYXRpYScsXHJcbiAgICAgICAgJ2V4dCc6IGA8c3Ryb25nPjA4Mzk8L3N0cm9uZz5gLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wOC8xOScsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDIwOC4xNzhcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdQZWFybCBDcm9zYnknLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdJbiBQQycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdDYW1ib2RpYScsXHJcbiAgICAgICAgJ2V4dCc6IGA8c3Ryb25nPjgyNjI8L3N0cm9uZz5gLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNC8xMC8wOCcsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDExNC4zNjdcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdDb2xldHRlIEZvbGV5JyxcclxuICAgICAgICAncG9zaXRpb24nOiAnTG9yZW0gSW5jLicsXHJcbiAgICAgICAgJ29mZmljZSc6ICdLb3JlYSwgTm9ydGgnLFxyXG4gICAgICAgICdleHQnOiAnODk2OCcsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA3LzE5JyxcclxuICAgICAgICAnc2FsYXJ5JzogNzIxLjQ3M1xyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0FuYXN0YXNpYSBTaGFmZmVyJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnRG9sb3IgTnVsbGEgU2VtcGVyIExMQycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdTdXJpbmFtZScsXHJcbiAgICAgICAgJ2V4dCc6ICc3OTgwJyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDQvMjAnLFxyXG4gICAgICAgICdzYWxhcnknOiAyNjQuNjIwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnR2FicmllbCBDYXN0cm8nLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdTZWQgTGltaXRlZCcsXHJcbiAgICAgICAgJ29mZmljZSc6ICdCYWhyYWluJyxcclxuICAgICAgICAnZXh0JzogJzA3NTcnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMy8wNCcsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDY1MS4zNTBcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdDaGVyb2tlZSBXYXJlJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnVGluY2lkdW50IExMQycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdVbml0ZWQgS2luZ2RvbSAoR3JlYXQgQnJpdGFpbiknLFxyXG4gICAgICAgICdleHQnOiAnMzk5NScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA2LzE3JyxcclxuICAgICAgICAnc2FsYXJ5JzogNjY2LjI1OVxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0JhcnJ5IE1vc3MnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdTb2NpaXMgSW5kdXN0cmllcycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdXZXN0ZXJuIFNhaGFyYScsXHJcbiAgICAgICAgJ2V4dCc6ICc2Njk3JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDgvMTMnLFxyXG4gICAgICAgICdzYWxhcnknOiA1NDEuNjMxXHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnTWFyeWFtIFR1Y2tlcicsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0VsaXQgUGVkZSBNYWxlc3VhZGEgSW5jLicsXHJcbiAgICAgICAgJ29mZmljZSc6ICdCcmF6aWwnLFxyXG4gICAgICAgICdleHQnOiAnNTIwMycsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzEwLzAyJyxcclxuICAgICAgICAnc2FsYXJ5JzogMTgyLjI5NFxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0NvbnN0YW5jZSBDbGF5dG9uJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnQXVjdG9yIFZlbGl0IEFsaXF1YW0gTExQJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJyxcclxuICAgICAgICAnZXh0JzogJzQyMDQnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wOC8wMScsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDIxOC41OTdcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdSb2dhbiBUdWNrZXInLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdBcmN1IFZlc3RpYnVsdW0gQW50ZSBBc3NvY2lhdGVzJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0plcnNleScsXHJcbiAgICAgICAgJ2V4dCc6ICcwODg1JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDEvMDQnLFxyXG4gICAgICAgICdzYWxhcnknOiA4NjEuNjMyXHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnRW1lcnkgTWNkb3dlbGwnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdHcmF2aWRhIENvbXBhbnknLFxyXG4gICAgICAgICdvZmZpY2UnOiAnTmV3IFplYWxhbmQnLFxyXG4gICAgICAgICdleHQnOiAnMzk1MScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA2LzAyJyxcclxuICAgICAgICAnc2FsYXJ5JzogNDEzLjU2OFxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ1lhZWwgR3JlZXInLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdPcmNpIExpbWl0ZWQnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnTWFkYWdhc2NhcicsXHJcbiAgICAgICAgJ2V4dCc6ICcxNDE2JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTIvMDQnLFxyXG4gICAgICAgICdzYWxhcnknOiAxMjEuODMxXHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnSmFyZWQgQnVyZ2VzcycsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0F1Y3RvciBJbmNvcnBvcmF0ZWQnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnQnVydW5kaScsXHJcbiAgICAgICAgJ2V4dCc6ICc0NjczJyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDEvMTInLFxyXG4gICAgICAgICdzYWxhcnknOiA2Mi4yNDNcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdTaGFyb24gQ2FtcGJlbGwnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdFbGl0IEN1cmFiaXR1ciBTZWQgQ29uc3VsdGluZycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdDb21vcm9zJyxcclxuICAgICAgICAnZXh0JzogJzYyNzQnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNC8wOS8xNCcsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDIwMC44NTRcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdZZW8gQ2h1cmNoJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnRG9uZWMgVml0YWUgRXJhdCBQQycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdTYXVkaSBBcmFiaWEnLFxyXG4gICAgICAgICdleHQnOiAnMDI2OScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA2LzA3JyxcclxuICAgICAgICAnc2FsYXJ5JzogNTgxLjE5M1xyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0t5bGllIEJhcmxvdycsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0Zlcm1lbnR1bSBSaXN1cyBDb3Jwb3JhdGlvbicsXHJcbiAgICAgICAgJ29mZmljZSc6ICdQYXB1YSBOZXcgR3VpbmVhJyxcclxuICAgICAgICAnZXh0JzogJzIwMTAnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNC8xMi8wMycsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDQxOC4xMTVcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdOZWxsIExlb25hcmQnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdWZXN0aWJ1bHVtIENvbnN1bHRpbmcnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnU2F1ZGkgQXJhYmlhJyxcclxuICAgICAgICAnZXh0JzogJzQ4MzknLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNS8yOScsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDQ2Ni4yMDFcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdCcmFuZG9uIEZsZW1pbmcnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdEb25lYyBFZ2VzdGFzIEFzc29jaWF0ZXMnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnUG9sYW5kJyxcclxuICAgICAgICAnZXh0JzogJzA2MjInLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMS8yMicsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDgwMC4wMTFcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdJbmdhIFBlbmEnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdFdCBNYWduaXMgRGlzIExpbWl0ZWQnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnQmVsZ2l1bScsXHJcbiAgICAgICAgJ2V4dCc6ICc4MTQwJyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDUvMTgnLFxyXG4gICAgICAgICdzYWxhcnknOiA1NjQuMjQ1XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnQXJkZW4gUnVzc28nLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdFc3QgVGVtcG9yIEJpYmVuZHVtIENvcnAuJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0RvbWluaWNhbiBSZXB1YmxpYycsXHJcbiAgICAgICAgJ2V4dCc6ICc2Nzc0JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDcvMjMnLFxyXG4gICAgICAgICdzYWxhcnknOiAzNTcuMjIyXHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnTGliZXJ0eSBHYWxsZWdvcycsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ05lYyBEaWFtIExMQycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdHaGFuYScsXHJcbiAgICAgICAgJ2V4dCc6ICc5MjY2JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDYvMTgnLFxyXG4gICAgICAgICdzYWxhcnknOiA1NTQuMzc1XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnRGVubmlzIFlvcmsnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdOdWxsYW0gU3VzY2lwaXQgRm91bmRhdGlvbicsXHJcbiAgICAgICAgJ29mZmljZSc6ICdOYW1pYmlhJyxcclxuICAgICAgICAnZXh0JzogJzMxMzMnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMy8yMCcsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDkwLjQxN1xyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ1BldHJhIENoYW5kbGVyJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnUGVkZSBOb251bW15IEluYy4nLFxyXG4gICAgICAgICdvZmZpY2UnOiAnTmFtaWJpYScsXHJcbiAgICAgICAgJ2V4dCc6ICczMzY3JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDMvMjYnLFxyXG4gICAgICAgICdzYWxhcnknOiA1OTguOTE1XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnQXVyZWxpYSBNYXJzaGFsbCcsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0RvbmVjIENvbnN1bHRpbmcnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnTmljYXJhZ3VhJyxcclxuICAgICAgICAnZXh0JzogJzI2OTAnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wOC8xOCcsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDIwMS42ODBcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdSb3NlIENhcnRlcicsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0VuaW0gQ29uc2VxdWF0IFB1cnVzIEluZHVzdHJpZXMnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnTW9yb2NjbycsXHJcbiAgICAgICAgJ2V4dCc6ICcwNjE5JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDMvMDYnLFxyXG4gICAgICAgICdzYWxhcnknOiAyMjAuMTg3XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnRGVudG9uIEF0a2lucycsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ05vbiBWZXN0aWJ1bHVtIFBDJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ01hbGknLFxyXG4gICAgICAgICdleHQnOiAnNTgwNicsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA0LzE5JyxcclxuICAgICAgICAnc2FsYXJ5JzogMzI0LjU4OFxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0dlcm1haW5lIE9zYm9ybicsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1RyaXN0aXF1ZSBBbGlxdWV0IFBDJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0xlc290aG8nLFxyXG4gICAgICAgICdleHQnOiAnNDQ2OScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAxLzE5JyxcclxuICAgICAgICAnc2FsYXJ5JzogMzUxLjEwOFxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ05lbGwgQnV0bGVyJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnU2l0IEFtZXQgRGFwaWJ1cyBJbmR1c3RyaWVzJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0N1YmEnLFxyXG4gICAgICAgICdleHQnOiAnNzg2MCcsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAxLzA2JyxcclxuICAgICAgICAnc2FsYXJ5JzogMjMwLjA3MlxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0JyZW50IFN0ZWluJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnRXUgQXVndWUgUG9ydHRpdG9yIExMUCcsXHJcbiAgICAgICAgJ29mZmljZSc6ICdDeXBydXMnLFxyXG4gICAgICAgICdleHQnOiAnNDY5NycsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzExLzAyJyxcclxuICAgICAgICAnc2FsYXJ5JzogODUzLjQxM1xyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0FsZXhhbmRyYSBTaGF3JyxcclxuICAgICAgICAncG9zaXRpb24nOiAnQWVuZWFuIEdyYXZpZGEgTGltaXRlZCcsXHJcbiAgICAgICAgJ29mZmljZSc6ICdVcnVndWF5JyxcclxuICAgICAgICAnZXh0JzogJzExNDAnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNS8xNicsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDQwMS45NzBcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdWZXJvbmljYSBBbGxpc29uJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnQWxpcXVldCBEaWFtIFNlZCBJbnN0aXR1dGUnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnU2Ftb2EnLFxyXG4gICAgICAgICdleHQnOiAnOTk2NicsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA1LzE3JyxcclxuICAgICAgICAnc2FsYXJ5JzogNzkuMTkzXHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnS2F0ZWx5biBHYW1ibGUnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdTZWQgQXNzb2NpYXRlcycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdNYXVyaXRpdXMnLFxyXG4gICAgICAgICdleHQnOiAnNDc2NycsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAzLzIwJyxcclxuICAgICAgICAnc2FsYXJ5JzogNDg0LjI5OVxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0phbWVzIEdyZWVyJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnQSBEdWkgSW5jb3Jwb3JhdGVkJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ05vcndheScsXHJcbiAgICAgICAgJ2V4dCc6ICc1NTE3JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDIvMjEnLFxyXG4gICAgICAgICdzYWxhcnknOiAzMzMuNTE4XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnQ2FpbiBWYXNxdWV6JyxcclxuICAgICAgICAncG9zaXRpb24nOiAnTnVsbGEgRmFjaWxpc2lzIFN1c3BlbmRpc3NlIEluc3RpdHV0ZScsXHJcbiAgICAgICAgJ29mZmljZSc6ICdDaGluYScsXHJcbiAgICAgICAgJ2V4dCc6ICczMTc5JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDUvMjcnLFxyXG4gICAgICAgICdzYWxhcnknOiA2NTEuNzYxXHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnU2hhZWxlaWdoIEJhcnInLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdFbGVpZmVuZCBDcmFzIEluc3RpdHV0ZScsXHJcbiAgICAgICAgJ29mZmljZSc6ICdHaGFuYScsXHJcbiAgICAgICAgJ2V4dCc6ICc1OTA0JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDQvMDEnLFxyXG4gICAgICAgICdzYWxhcnknOiA2MjcuMDk1XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnQmFrZXIgTWNrYXknLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdVdCBTYWdpdHRpcyBBc3NvY2lhdGVzJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0lzbGUgb2YgTWFuJyxcclxuICAgICAgICAnZXh0JzogJzk4NDAnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMS8xMicsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDc0Mi4yNDdcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdKYXltZSBQYWNlJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnQ3JhcyBFdSBUZWxsdXMgQXNzb2NpYXRlcycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdCb3V2ZXQgSXNsYW5kJyxcclxuICAgICAgICAnZXh0JzogJzQ1ODAnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wOC8xMicsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDU5MS41ODhcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdSZXViZW4gQWxiZXJ0JyxcclxuICAgICAgICAncG9zaXRpb24nOiAnTG9ib3J0aXMgSW5zdGl0dXRlJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1phbWJpYScsXHJcbiAgICAgICAgJ2V4dCc6ICc4NzI1JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDQvMDQnLFxyXG4gICAgICAgICdzYWxhcnknOiA3OTEuNDA4XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnSWRvbGEgQnVybnMnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdOb24gSW5kdXN0cmllcycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdNeWFubWFyJyxcclxuICAgICAgICAnZXh0JzogJzMyMDEnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNi8yNCcsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDE0Mi45MDZcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdMYXVyYSBNYWNpYXMnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdQaGFzZWxsdXMgSW5jLicsXHJcbiAgICAgICAgJ29mZmljZSc6ICdNYXVyaXRhbmlhJyxcclxuICAgICAgICAnZXh0JzogJzIwMzMnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNC8xMS8yMScsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDIyNi41OTFcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdOaWNob2xlIFNhbGFzJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnRHVpcyBQQycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdNYWRhZ2FzY2FyJyxcclxuICAgICAgICAnZXh0JzogJzQzOTcnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMS8xOCcsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDIzNC4xOTZcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdIdW50ZXIgV2FsdGVyJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnVWxsYW1jb3JwZXIgRHVpcyBDdXJzdXMgRm91bmRhdGlvbicsXHJcbiAgICAgICAgJ29mZmljZSc6ICdCcmF6aWwnLFxyXG4gICAgICAgICdleHQnOiAnMjIyNycsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAyLzI4JyxcclxuICAgICAgICAnc2FsYXJ5JzogNjU1LjA1MlxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0FzaGVyIFJpY2gnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdNYXVyaXMgSXBzdW0gTExQJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1BhcmFndWF5JyxcclxuICAgICAgICAnZXh0JzogJzcyODgnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wOC8wOCcsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDIyMi45NDZcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdBbmdlbGEgQ2FybHNvbicsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0RvbmVjIFRlbXBvciBJbnN0aXR1dGUnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnUGFwdWEgTmV3IEd1aW5lYScsXHJcbiAgICAgICAgJ2V4dCc6ICc1NDE2JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDIvMTInLFxyXG4gICAgICAgICdzYWxhcnknOiA1NjIuMTk0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnSmFtZXMgRG9yc2V5JyxcclxuICAgICAgICAncG9zaXRpb24nOiAnSXBzdW0gTGVvIEFzc29jaWF0ZXMnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnQ29uZ28gKEJyYXp6YXZpbGxlKScsXHJcbiAgICAgICAgJ2V4dCc6ICc2MDE5JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDEvMTAnLFxyXG4gICAgICAgICdzYWxhcnknOiA2MjkuOTI1XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnV2VzbGV5IENvYmInLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdOdW5jIEVzdCBJbmNvcnBvcmF0ZWQnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnQXVzdHJhbGlhJyxcclxuICAgICAgICAnZXh0JzogJzY0NjYnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMS8zMCcsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDM0My40NzZcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdNZWdoYW4gU3RlcGhlbnMnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdJbnRlcmR1bSBQQycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdUdXJrZXknLFxyXG4gICAgICAgICdleHQnOiAnODAwMScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzEwLzExJyxcclxuICAgICAgICAnc2FsYXJ5JzogNDY5LjMwNVxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0JlcnRoYSBIZXJyZXJhJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnQW1ldCBMaW1pdGVkJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0tlbnlhJyxcclxuICAgICAgICAnZXh0JzogJzQ3OTknLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNC8xMS8yMicsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDU2LjYwNlxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0thcmluYSBLZXknLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdRdWlzcXVlIFZhcml1cyBOYW0gQ29tcGFueScsXHJcbiAgICAgICAgJ29mZmljZSc6ICdGcmFuY2UnLFxyXG4gICAgICAgICdleHQnOiAnMzkwNycsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAzLzI2JyxcclxuICAgICAgICAnc2FsYXJ5JzogMzE0LjI2MFxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ1VyaWVsIENhcnNvbicsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1BlbmF0aWJ1cyBQQycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdWZW5lenVlbGEnLFxyXG4gICAgICAgICdleHQnOiAnNTkwMicsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAxLzA3JyxcclxuICAgICAgICAnc2FsYXJ5JzogMTA2LjMzNVxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ01pcmEgQmFpcmQnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdGZWxpcyBPcmNpIFBDJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ05pdWUnLFxyXG4gICAgICAgICdleHQnOiAnNDE4OScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA4LzI1JyxcclxuICAgICAgICAnc2FsYXJ5JzogNTE1LjY3MVxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ1Vyc3VsYSBQYXJyaXNoJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnQWMgQ29ycG9yYXRpb24nLFxyXG4gICAgICAgICdvZmZpY2UnOiAnTWFjYW8nLFxyXG4gICAgICAgICdleHQnOiAnNDc3MScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA2LzMwJyxcclxuICAgICAgICAnc2FsYXJ5JzogNzIuMjk1XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnSm9zZXBoaW5lIFN5a2VzJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnQmxhbmRpdCBDb25ndWUgTGltaXRlZCcsXHJcbiAgICAgICAgJ29mZmljZSc6ICdIb2x5IFNlZSAoVmF0aWNhbiBDaXR5IFN0YXRlKScsXHJcbiAgICAgICAgJ2V4dCc6ICc0Njg0JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTIvMjInLFxyXG4gICAgICAgICdzYWxhcnknOiA2OTQuNjU2XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnTWFnZ2llIFNpbXMnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdWdWxwdXRhdGUgUG9zdWVyZSBJbmR1c3RyaWVzJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1N1ZGFuJyxcclxuICAgICAgICAnZXh0JzogJzY0ODInLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNC8xMS8yMicsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDM2My43NDNcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdSb2dhbiBGdWVudGVzJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnVmVzdGlidWx1bSBBY2N1bXNhbiBOZXF1ZSBDb21wYW55JyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0plcnNleScsXHJcbiAgICAgICAgJ2V4dCc6ICc0ODM3JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDcvMjknLFxyXG4gICAgICAgICdzYWxhcnknOiA2MDYuMDA0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnTWF5YSBIYW5leScsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0FjIEZvdW5kYXRpb24nLFxyXG4gICAgICAgICdvZmZpY2UnOiAnRmFsa2xhbmQgSXNsYW5kcycsXHJcbiAgICAgICAgJ2V4dCc6ICc1NzUyJyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDkvMDMnLFxyXG4gICAgICAgICdzYWxhcnknOiA3NDUuNTAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnQXF1aWxhIEJhdHRsZScsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1NvY2lpcyBOYXRvcXVlIFBlbmF0aWJ1cyBGb3VuZGF0aW9uJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0F6ZXJiYWlqYW4nLFxyXG4gICAgICAgICdleHQnOiAnODQ3MCcsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAzLzA2JyxcclxuICAgICAgICAnc2FsYXJ5JzogNTgyLjI2NVxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0Nvbm5vciBDb2xlbWFuJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnT3JjaSBMYWN1cyBWZXN0aWJ1bHVtIEZvdW5kYXRpb24nLFxyXG4gICAgICAgICdvZmZpY2UnOiAnQ3JvYXRpYScsXHJcbiAgICAgICAgJ2V4dCc6ICc2MjE3JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTAvMjEnLFxyXG4gICAgICAgICdzYWxhcnknOiA0MTYuOTU4XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnQ2hhcml0eSBUaG9tYXMnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdDb252YWxsaXMgTGlndWxhIERvbmVjIEluYy4nLFxyXG4gICAgICAgICdvZmZpY2UnOiAnQmVuaW4nLFxyXG4gICAgICAgICdleHQnOiAnNjI0MCcsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA3LzEyJyxcclxuICAgICAgICAnc2FsYXJ5JzogNTQwLjk5OVxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0JseXRoZSBQb3dlcnMnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdBbWV0IE9yY2kgTGltaXRlZCcsXHJcbiAgICAgICAgJ29mZmljZSc6ICdGYWxrbGFuZCBJc2xhbmRzJyxcclxuICAgICAgICAnZXh0JzogJzU2MDgnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMS8yMycsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDQ4MC4wNjdcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdBZHJpYSBCYXR0bGUnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdPcm5hcmUgTGVjdHVzIEluY29ycG9yYXRlZCcsXHJcbiAgICAgICAgJ29mZmljZSc6ICdCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnknLFxyXG4gICAgICAgICdleHQnOiAnNzQxOScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA1LzI4JyxcclxuICAgICAgICAnc2FsYXJ5JzogMjU3LjkzN1xyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ01lbGFuaWUgTWNpbnR5cmUnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdOdW5jIENvcnAuJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ01vbmdvbGlhJyxcclxuICAgICAgICAnZXh0JzogJzQzMjYnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMS8wNicsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDM1OS43MzdcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdLZWVseSBCYXVlcicsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ05lYyBUZW1wdXMgSW5zdGl0dXRlJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1NvbWFsaWEnLFxyXG4gICAgICAgICdleHQnOiAnODM3MicsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAzLzA5JyxcclxuICAgICAgICAnc2FsYXJ5JzogOTkuNzE4XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnTm9lbGFuaSBTdHJvbmcnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdOZWMgTExQJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0lyYW4nLFxyXG4gICAgICAgICdleHQnOiAnMDA0OScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA4LzI0JyxcclxuICAgICAgICAnc2FsYXJ5JzogNDgwLjcxOFxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0plYW5ldHRlIEhlbmRlcnNvbicsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0V1IEVsaXQgTnVsbGEgQ29ycG9yYXRpb24nLFxyXG4gICAgICAgICdvZmZpY2UnOiAnSXRhbHknLFxyXG4gICAgICAgICdleHQnOiAnNzU4NicsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA2LzE5JyxcclxuICAgICAgICAnc2FsYXJ5JzogMjUzLjc3MlxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0NhbmRhY2UgSHViZXInLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdTZWQgSW5zdGl0dXRlJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1VnYW5kYScsXHJcbiAgICAgICAgJ2V4dCc6ICc3MTgzJyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDYvMTYnLFxyXG4gICAgICAgICdzYWxhcnknOiAzODguODc5XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnQmV0aGFueSBQb3R0ZXInLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdWaXZhbXVzIE5pYmggRG9sb3IgSW5jb3Jwb3JhdGVkJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1B1ZXJ0byBSaWNvJyxcclxuICAgICAgICAnZXh0JzogJzMzNTQnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNC8xMS8xMicsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDc0Ny4zMTBcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdXaG9vcGkgQnVya3MnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdKdXN0byBJbmMuJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0ZpamknLFxyXG4gICAgICAgICdleHQnOiAnMjE4NScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzA5LzI0JyxcclxuICAgICAgICAnc2FsYXJ5JzogODAzLjAzN1xyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ1NoZWlsYSBMb25nJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnRGlhbSBBc3NvY2lhdGVzJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1NhbyBUb21lIGFuZCBQcmluY2lwZScsXHJcbiAgICAgICAgJ2V4dCc6ICc3NzYwJyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTIvMjEnLFxyXG4gICAgICAgICdzYWxhcnknOiA2NzQuMzc5XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnU29ueWEgQ2h1cmNoJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnTGFvcmVldCBJbnN0aXR1dGUnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnR3JlbmFkYScsXHJcbiAgICAgICAgJ2V4dCc6ICc4OTIwJyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDYvMDMnLFxyXG4gICAgICAgICdzYWxhcnknOiA2MjUuMTQ3XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnU2hhaW5lIEZvcmJlcycsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0V1IEFyY3UgTExQJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0N5cHJ1cycsXHJcbiAgICAgICAgJ2V4dCc6ICcyMzY5JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDEvMTgnLFxyXG4gICAgICAgICdzYWxhcnknOiAyMDguMTAwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnQWxleGFuZHJhIFBhdHJpY2snLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdMaWd1bGEgRG9uZWMgSW5jLicsXHJcbiAgICAgICAgJ29mZmljZSc6ICdWaWV0IE5hbScsXHJcbiAgICAgICAgJ2V4dCc6ICc4NTMxJyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDQvMDknLFxyXG4gICAgICAgICdzYWxhcnknOiAxMDQuMDYzXHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnUGF0aWVuY2UgVmluY2VudCcsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1NlbSBNb2xlc3RpZSBBc3NvY2lhdGVzJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1BoaWxpcHBpbmVzJyxcclxuICAgICAgICAnZXh0JzogJzg4ODgnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNy8wNCcsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDY3My41NTZcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdFdmVseW4gU21pdGgnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdGdXNjZSBJbmR1c3RyaWVzJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1RvZ28nLFxyXG4gICAgICAgICdleHQnOiAnNTA1MScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA4LzE1JyxcclxuICAgICAgICAnc2FsYXJ5JzogNzM3LjI4NFxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0tpZXJhbiBHb256YWxleicsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ05vbiBDb3JwLicsXHJcbiAgICAgICAgJ29mZmljZSc6ICdFcXVhdG9yaWFsIEd1aW5lYScsXHJcbiAgICAgICAgJ2V4dCc6ICc0ODM0JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDgvMjQnLFxyXG4gICAgICAgICdzYWxhcnknOiA5MC4xOTVcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdNb2xseSBPbmVpbCcsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ05vbiBEdWkgQ29uc3VsdGluZycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdCZWxpemUnLFxyXG4gICAgICAgICdleHQnOiAnNzUwMScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzEwLzI4JyxcclxuICAgICAgICAnc2FsYXJ5JzogMTQwLjc2N1xyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ05pZ2VsIERhdmVucG9ydCcsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1VsbGFtY29ycGVyIFZlbGl0IEluIEluZHVzdHJpZXMnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnVmFudWF0dScsXHJcbiAgICAgICAgJ2V4dCc6ICcwOTc2JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDMvMTYnLFxyXG4gICAgICAgICdzYWxhcnknOiA3MC41MzZcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdUaG9yIFlvdW5nJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnTWFsZXN1YWRhIENvbnN1bHRpbmcnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzJyxcclxuICAgICAgICAnZXh0JzogJzAyMTEnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMS8yOCcsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDc1LjUwMVxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0Zpbm4gRGVsYWNydXonLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdMb3JlbSBJbmR1c3RyaWVzJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcclxuICAgICAgICAnZXh0JzogJzI5ODAnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNC8xMi8xMScsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDc1NC45NjdcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdMYW5lIEhlbmRlcnNvbicsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ1BlZGUgRm91bmRhdGlvbicsXHJcbiAgICAgICAgJ29mZmljZSc6ICdLYXpha2hzdGFuJyxcclxuICAgICAgICAnZXh0JzogJzE0NDYnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNy8wMicsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDg0Mi4wNTBcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdTaGVhIFBvdHRlcicsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0N1cmFiaXR1ciBMaW1pdGVkJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1RpbW9yLUxlc3RlJyxcclxuICAgICAgICAnZXh0JzogJzQ2NTQnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNS8wNycsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDI2My42MjlcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdCcnlubiBZYW5nJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnVXQgTGltaXRlZCcsXHJcbiAgICAgICAgJ29mZmljZSc6ICdNYXlvdHRlJyxcclxuICAgICAgICAnZXh0JzogJzQ2NjgnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wMS8xNycsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDc0LjI5MlxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0t5bGFuIEZ1ZW50ZXMnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdTYXBpZW4gQWVuZWFuIEFzc29jaWF0ZXMnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnQnJhemlsJyxcclxuICAgICAgICAnZXh0JzogJzY2MjMnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNC8xMi8yOCcsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDEwOC42MzJcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdMaW9uZWwgTWNicmlkZScsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0lwc3VtIFBDJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1BvcnR1Z2FsJyxcclxuICAgICAgICAnZXh0JzogJzM5NzgnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNy8xMScsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDM0LjI0NFxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ1BhdWwgTHVjYXMnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdFZ2V0IExMUCcsXHJcbiAgICAgICAgJ29mZmljZSc6ICdOaWNhcmFndWEnLFxyXG4gICAgICAgICdleHQnOiAnODg5MCcsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzA5LzMwJyxcclxuICAgICAgICAnc2FsYXJ5JzogNjkwLjgzNFxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0xhcmVpbmEgV2lsbGlhbXNvbicsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0ltcGVyZGlldCBVbGxhbWNvcnBlciBMdGQnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMnLFxyXG4gICAgICAgICdleHQnOiAnOTQ4OScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzEyLzAxJyxcclxuICAgICAgICAnc2FsYXJ5JzogNjAzLjQ5OFxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0FteSBBY2V2ZWRvJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnSWQgSW5zdGl0dXRlJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0Nvb2sgSXNsYW5kcycsXHJcbiAgICAgICAgJ2V4dCc6ICc1NTkyJyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDIvMDQnLFxyXG4gICAgICAgICdzYWxhcnknOiAxMjUuMTY1XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnTm9tbGFuZ2EgU2lsdmEnLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdFZ2V0IExMQycsXHJcbiAgICAgICAgJ29mZmljZSc6ICdCZWxpemUnLFxyXG4gICAgICAgICdleHQnOiAnMzExMCcsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAxLzMxJyxcclxuICAgICAgICAnc2FsYXJ5JzogMjY4LjUwOVxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0FtZW5hIFN0b25lJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnRW5pbSBJbmNvcnBvcmF0ZWQnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnR3VpbmVhJyxcclxuICAgICAgICAnZXh0JzogJzEyMTEnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNC8wOS8yMycsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDIxNC4zODFcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdEYW5pZWxsZSBDb2ZmZXknLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdGZXVnaWF0IFBsYWNlcmF0IENvcnAuJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1NhbyBUb21lIGFuZCBQcmluY2lwZScsXHJcbiAgICAgICAgJ2V4dCc6ICc4MTc2JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTUvMDYvMTcnLFxyXG4gICAgICAgICdzYWxhcnknOiAxMzcuNDIzXHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnQnVmZnkgUnVzc2VsbCcsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ0xhY3VzIFF1aXNxdWUgTHRkJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ0VjdWFkb3InLFxyXG4gICAgICAgICdleHQnOiAnNjc0MScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE0LzEwLzE3JyxcclxuICAgICAgICAnc2FsYXJ5JzogNjEyLjE4NFxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0thaXRsaW4gTGFtYicsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ01hbGVzdWFkYSBGcmluZ2lsbGEgRXN0IEFzc29jaWF0ZXMnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnQWxnZXJpYScsXHJcbiAgICAgICAgJ2V4dCc6ICc1MDU0JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTAvMTgnLFxyXG4gICAgICAgICdzYWxhcnknOiAzMjcuMzY3XHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnTGVpbGFuaSBZYXRlcycsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ011cyBQcm9pbiBMTEMnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnU291dGggU3VkYW4nLFxyXG4gICAgICAgICdleHQnOiAnMTU1MCcsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzA1LzI3JyxcclxuICAgICAgICAnc2FsYXJ5JzogNzQzLjQ5M1xyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ0plbWltYSBNb29uJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnUGhhc2VsbHVzIENvcnAuJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1NvdXRoIEdlb3JnaWEgYW5kIFRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzJyxcclxuICAgICAgICAnZXh0JzogJzc1ODInLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNS8yMScsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDQ5Ni4wNjdcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdIaXJva28gU2Nod2FydHonLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdOZXF1ZSBJbnN0aXR1dGUnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnU2FpbnQgVmluY2VudCBhbmQgVGhlIEdyZW5hZGluZXMnLFxyXG4gICAgICAgICdleHQnOiAnOTM2OCcsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAzLzEzJyxcclxuICAgICAgICAnc2FsYXJ5JzogMTc4Ljc4MlxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ05hdGhhbmllbCBKZW5zZW4nLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdNaSBUZW1wb3IgTGltaXRlZCcsXHJcbiAgICAgICAgJ29mZmljZSc6ICdEb21pbmljYScsXHJcbiAgICAgICAgJ2V4dCc6ICc4MzMxJyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTIvMDUnLFxyXG4gICAgICAgICdzYWxhcnknOiAzNy40NDFcclxuICAgIH0sIHtcclxuICAgICAgICAnbmFtZSc6ICdTaWxhcyBTd2VlbmV5JyxcclxuICAgICAgICAncG9zaXRpb24nOiAnVWx0cmljZXMgSW5zdGl0dXRlJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1R1cmttZW5pc3RhbicsXHJcbiAgICAgICAgJ2V4dCc6ICcwNzQ2JyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTEvMTMnLFxyXG4gICAgICAgICdzYWxhcnknOiAxNTIuOTgwXHJcbiAgICB9LCB7XHJcbiAgICAgICAgJ25hbWUnOiAnSmVybWFpbmUgQmFycnknLFxyXG4gICAgICAgICdwb3NpdGlvbic6ICdEYXBpYnVzIENvcnBvcmF0aW9uJyxcclxuICAgICAgICAnb2ZmaWNlJzogJ1V6YmVraXN0YW4nLFxyXG4gICAgICAgICdleHQnOiAnMTU0NScsXHJcbiAgICAgICAgJ3N0YXJ0RGF0ZSc6ICcyMDE1LzAzLzA2JyxcclxuICAgICAgICAnc2FsYXJ5JzogNDA5LjQ2M1xyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ1RhdGlhbmEgTmljaG9scycsXHJcbiAgICAgICAgJ3Bvc2l0aW9uJzogJ05lYyBEaWFtIEluZHVzdHJpZXMnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnQ29vayBJc2xhbmRzJyxcclxuICAgICAgICAnZXh0JzogJzQzOTUnLFxyXG4gICAgICAgICdzdGFydERhdGUnOiAnMjAxNS8wNS8yMicsXHJcbiAgICAgICAgJ3NhbGFyeSc6IDUxLjE1NVxyXG4gICAgfSwge1xyXG4gICAgICAgICduYW1lJzogJ1JhbWEgV2FsbGVyJyxcclxuICAgICAgICAncG9zaXRpb24nOiAnU2VtIFBlbGxlbnRlc3F1ZSBMTEMnLFxyXG4gICAgICAgICdvZmZpY2UnOiAnQW5kb3JyYScsXHJcbiAgICAgICAgJ2V4dCc6ICcyOTczJyxcclxuICAgICAgICAnc3RhcnREYXRlJzogJzIwMTQvMTIvMDEnLFxyXG4gICAgICAgICdzYWxhcnknOiAyMjMuMjI3XHJcbiAgICB9XHJcbl07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50LWhlYWRpbmdcXFwiPlxcclxcbiAgICA8ZGl2PlRhYmxlc1xcclxcbiAgICAgICAgPHNtYWxsPkEgc2hvd2Nhc2Ugb2YgZGlmZmVyZW50IGNvbXBvbmVudHMgaW5zaWRlIHRhYmxlczwvc21hbGw+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPCEtLSBTVEFSVCBjYXJkLS0+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWRlZmF1bHRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+RGVtbyBUYWJsZSAjMTwvZGl2PlxcclxcbiAgICA8IS0tIFNUQVJUIHRhYmxlLXJlc3BvbnNpdmUtLT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyXFxcIiBpZD1cXFwidGFibGUtZXh0LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPlVJRDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+UGljdHVyZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+VXNlcm5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPkZpcnN0IE5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPkxhc3QgTmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPlByb2ZpbGU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPkxhc3QgTG9naW48L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNoZWNrQWxsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94IGMtY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2hlY2tcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZWRpYVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZy1mbHVpZCBjaXJjbGVcXFwiIHNyYz1cXFwiYXNzZXRzL2ltZy91c2VyLzAxLmpwZ1xcXCIgYWx0PVxcXCJJbWFnZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+QHR3aXR0ZXI8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPkxhcnJ5PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD50aGUgQmlyZDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+bWFpbEBleGFtcGxlLmNvbTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyYWRpYWwtYmFyIHJhZGlhbC1iYXItMjUgcmFkaWFsLWJhci14c1xcXCIgZGF0YS1sYWJlbD1cXFwiMjUlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+MSB3ZWVrPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveCBjLWNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNoZWNrXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWVkaWFcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJpbWctZmx1aWQgY2lyY2xlXFxcIiBzcmM9XFxcImFzc2V0cy9pbWcvdXNlci8wMi5qcGdcXFwiIGFsdD1cXFwiSW1hZ2VcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPkBtZG88L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPk1hcms8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPk90dG88L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPm1haWxAZXhhbXBsZS5jb208L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmFkaWFsLWJhciByYWRpYWwtYmFyLTUwIHJhZGlhbC1iYXIteHNcXFwiIGRhdGEtbGFiZWw9XFxcIjUwJVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjI1IG1pbnV0ZXM8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94IGMtY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2hlY2tcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZWRpYVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZy1mbHVpZCBjaXJjbGVcXFwiIHNyYz1cXFwiYXNzZXRzL2ltZy91c2VyLzAzLmpwZ1xcXCIgYWx0PVxcXCJJbWFnZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+QGZhdDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+SmFjb2I8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlRob3JudG9uPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5tYWlsQGV4YW1wbGUuY29tPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJhZGlhbC1iYXIgcmFkaWFsLWJhci04MCByYWRpYWwtYmFyLXhzXFxcIiBkYXRhLWxhYmVsPVxcXCI4MCVcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD4xMCBob3VyczwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3ggYy1jaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jaGVja1xcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDwhLS0gRU5EIHRhYmxlLXJlc3BvbnNpdmUtLT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZC1mbGV4XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWFwcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIHR5cGU9XFxcIlNlYXJjaFxcXCI+QnV0dG9uPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWwtYXV0b1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGZsb2F0LXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImN1c3RvbS1zZWxlY3RcXFwiIGlkPVxcXCJpbnB1dEdyb3VwU2VsZWN0MDRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjBcXFwiPkJ1bGsgYWN0aW9uPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMVxcXCI+RGVsZXRlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMlxcXCI+Q2xvbmU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIzXFxcIj5FeHBvcnQ8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYXBwZW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5BcHBseTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjwhLS0gU1RBUlQgY2FyZC0tPlxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPkRlbW8gVGFibGUgIzI8L2Rpdj5cXHJcXG4gICAgPCEtLSBTVEFSVCB0YWJsZS1yZXNwb25zaXZlLS0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyXFxcIiBpZD1cXFwidGFibGUtZXh0LTJcXFwiPlxcclxcbiAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNoZWNrQWxsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrYm94IGMtY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2hlY2tcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGl2ZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveCBjLWNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNoZWNrXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1lZGlhXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImZsb2F0LWxlZnRcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nLWZsdWlkIGNpcmNsZVxcXCIgc3JjPVxcXCJhc3NldHMvaW1nL3VzZXIvMDEuanBnXFxcIiBhbHQ9XFxcIlxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZWRpYS1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsb2F0LXJpZ2h0IGJhZGdlIGJhZGdlLWluZm9cXFwiPmFkbWluPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SG9sbHkgV2FsbGFjZTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2VybmFtZTogaG9sbHkxMjM8L3A+Q3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzIHNjZWxlcmlzcXVlIGFudGUgc29sbGljaXR1ZGluIGNvbW1vZG8uIENyYXMgcHVydXMgb2RpbywgdmVzdGlidWx1bSBpbiB2dWxwdXRhdGUgYXQsIHRlbXB1cyB2aXZlcnJhIHR1cnBpcy4gRnVzY2UgY29uZGltZW50dW0gbnVuYyBhYyBuaXNpIHZ1bHB1dGF0ZSBmcmluZ2lsbGEuIERvbmVjIGxhY2luaWEgY29uZ3VlIGZlbGlzIGluIGZhdWNpYnVzLjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwic3dpdGNoXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2JveCBjLWNoZWNrYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNoZWNrXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1lZGlhXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImZsb2F0LWxlZnRcXFwiIGhyZWY9XFxcIiNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nLWZsdWlkIGNpcmNsZVxcXCIgc3JjPVxcXCJhc3NldHMvaW1nL3VzZXIvMDMuanBnXFxcIiBhbHQ9XFxcIlxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZWRpYS1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsb2F0LXJpZ2h0IGJhZGdlIGJhZGdlLWluZm9cXFwiPndyaXRlcjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkFsZXhpcyBGb3N0ZXI8L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VXNlcm5hbWU6IGFsaTg5PC9wPkNyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cyBzY2VsZXJpc3F1ZSBhbnRlIHNvbGxpY2l0dWRpbiBjb21tb2RvLiBDcmFzIHB1cnVzIG9kaW8sIHZlc3RpYnVsdW0gaW4gdnVscHV0YXRlIGF0LCB0ZW1wdXMgdml2ZXJyYSB0dXJwaXMuIEZ1c2NlIGNvbmRpbWVudHVtIG51bmMgYWMgbmlzaSB2dWxwdXRhdGUgZnJpbmdpbGxhLiBEb25lYyBsYWNpbmlhIGNvbmd1ZSBmZWxpcyBpbiBmYXVjaWJ1cy48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcInN3aXRjaFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2hlY2tlZD1cXFwiY2hlY2tlZFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3ggYy1jaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jaGVja1xcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZWRpYVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJmbG9hdC1sZWZ0XFxcIiBocmVmPVxcXCIjXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZy1mbHVpZCBjaXJjbGVcXFwiIHNyYz1cXFwiYXNzZXRzL2ltZy91c2VyLzA1LmpwZ1xcXCIgYWx0PVxcXCJcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWVkaWEtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbG9hdC1yaWdodCBiYWRnZSBiYWRnZS1pbmZvXFxcIj5lZGl0b3I8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5NYXJpbyBNaWxlczwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2VybmFtZTogbWFyaW9taWxlczwvcD5DcmFzIHNpdCBhbWV0IG5pYmggbGliZXJvLCBpbiBncmF2aWRhIG51bGxhLiBOdWxsYSB2ZWwgbWV0dXMgc2NlbGVyaXNxdWUgYW50ZSBzb2xsaWNpdHVkaW4gY29tbW9kby4gQ3JhcyBwdXJ1cyBvZGlvLCB2ZXN0aWJ1bHVtIGluIHZ1bHB1dGF0ZSBhdCwgdGVtcHVzIHZpdmVycmEgdHVycGlzLiBGdXNjZSBjb25kaW1lbnR1bSBudW5jIGFjIG5pc2kgdnVscHV0YXRlIGZyaW5naWxsYS4gRG9uZWMgbGFjaW5pYSBjb25ndWUgZmVsaXMgaW4gZmF1Y2lidXMuPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJzd2l0Y2hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNoZWNrZWQ9XFxcImNoZWNrZWRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDwhLS0gRU5EIHRhYmxlLXJlc3BvbnNpdmUtLT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZC1mbGV4XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJjdXN0b20tc2VsZWN0XFxcIiBpZD1cXFwiaW5wdXRHcm91cFNlbGVjdDA0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIwXFxcIj5CdWxrIGFjdGlvbjwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjFcXFwiPkRlbGV0ZTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjJcXFwiPkNsb25lPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiM1xcXCI+RXhwb3J0PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWFwcGVuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+QXBwbHk8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtbC1hdXRvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tc21cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJwYWdlLWl0ZW0gYWN0aXZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnZS1saW5rXFxcIiBocmVmPVxcXCIjXFxcIj4xPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwicGFnZS1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnZS1saW5rXFxcIiBocmVmPVxcXCIjXFxcIj4yPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwicGFnZS1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnZS1saW5rXFxcIiBocmVmPVxcXCIjXFxcIj4zPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwicGFnZS1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnZS1saW5rXFxcIiBocmVmPVxcXCIjXFxcIj7CuzwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPCEtLSBFTkQgY2FyZC0tPlxcclxcbjwhLS0gU1RBUlQgcm93LS0+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTZcXFwiPlxcclxcbiAgICAgICAgPCEtLSBTVEFSVCBjYXJkLS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGNhcmQtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPkRlbW8gVGFibGUgIzNcXHJcXG4gICAgICAgICAgICAgICAgPCEtLSBTVEFSVCB0YWJsZS1yZXNwb25zaXZlLS0+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyXFxcIiBpZD1cXFwidGFibGUtZXh0LTNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRhc2sgbmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJvZ3Jlc3M8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRlYWRsaW5lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk51bmMgbHVjdHVzLCBxdWFtIG5vbiBjb25kaW1lbnR1bSBvcm5hcmU8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzIHByb2dyZXNzLXhzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIGJnLXN1Y2Nlc3NcXFwiIHJvbGU9XFxcInByb2dyZXNzYmFyXFxcIiBhcmlhLXZhbHVlbm93PVxcXCI4MFxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwiMTAwXFxcIiBzdHlsZT1cXFwid2lkdGg6IDgwJTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPjgwJSBDb21wbGV0ZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjA1LzA1LzIwMTQ8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SW50ZWdlciBpbiBjb252YWxsaXMgZmVsaXMuPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcyBwcm9ncmVzcy14c1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBiZy1kYW5nZXJcXFwiIHJvbGU9XFxcInByb2dyZXNzYmFyXFxcIiBhcmlhLXZhbHVlbm93PVxcXCIyMFxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwiMTAwXFxcIiBzdHlsZT1cXFwid2lkdGg6IDIwJTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPjIwJSBDb21wbGV0ZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE1LzA1LzIwMTQ8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TnVsbGFtIHNpdCBhbWV0IG1hZ25hIHZlc3RpYnVsdW0gbGliZXJvIGRhcGlidXMgaWFjdWxpcy48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzIHByb2dyZXNzLXhzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIGJnLWluZm9cXFwiIHJvbGU9XFxcInByb2dyZXNzYmFyXFxcIiBhcmlhLXZhbHVlbm93PVxcXCI1MFxcXCIgYXJpYS12YWx1ZW1pbj1cXFwiMFxcXCIgYXJpYS12YWx1ZW1heD1cXFwiMTAwXFxcIiBzdHlsZT1cXFwid2lkdGg6IDUwJTtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNyLW9ubHlcXFwiPjUwJSBDb21wbGV0ZTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjA1LzEwLzIwMTQ8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLSBFTkQgdGFibGUtcmVzcG9uc2l2ZS0tPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8IS0tIEVORCBjYXJkLS0+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNlxcXCI+XFxyXFxuICAgICAgICA8IS0tIFNUQVJUIGNhcmQtLT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+RGVtbyBUYWJsZSAjNDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwhLS0gU1RBUlQgdGFibGUtcmVzcG9uc2l2ZS0tPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByb2plY3Q8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aXZpdHk8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q29tcGxldGlvbjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Qm9vdHN0cmFwIDUueDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW3NwYXJrbGluZV09XFxcInNwYXJrT3B0aW9uczFcXFwiIHZhbHVlcz1cXFwiMyw2LDcsOCw0LDVcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1kYW5nZXJcXFwiPkNhbmNlbGVkPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5XZWIgRW5naW5lPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbc3BhcmtsaW5lXT1cXFwic3BhcmtPcHRpb25zMlxcXCIgdmFsdWVzPVxcXCIxLDQsNCwxMCw1LDksMlxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhZGdlIGJhZGdlLXN1Y2Nlc3NcXFwiPkNvbXBsZXRlPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5OdWxsYW0gc2l0IGFtZXQ8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtzcGFya2xpbmVdPVxcXCJzcGFya09wdGlvbnMzXFxcIiB2YWx1ZXM9XFxcIjEsNCw0LDcsNSw5LDRcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWRnZSBiYWRnZS13YXJuaW5nXFxcIj5EZWxheWVkPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPCEtLSBFTkQgdGFibGUtcmVzcG9uc2l2ZS0tPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8IS0tIEVORCBjYXJkLS0+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjwhLS0gRU5EIHJvdy0tPlxcclxcblwiIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2V4dGVuZGVkLmNvbXBvbmVudC5zY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvcnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbG9ycy9jb2xvcnMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWV4dGVuZGVkJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2V4dGVuZGVkLmNvbXBvbmVudC5odG1sJyksXHJcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2V4dGVuZGVkLmNvbXBvbmVudC5zY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHRlbmRlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgc3BhcmtPcHRpb25zMSA9IHtcclxuICAgICAgICBiYXJDb2xvcjogdGhpcy5jb2xvcnMuYnlOYW1lKCdwcmltYXJ5JyksXHJcbiAgICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgICBiYXJXaWR0aDogNSxcclxuICAgICAgICBiYXJTcGFjaW5nOiAyLFxyXG4gICAgICAgIHJlc2l6ZTogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXJrT3B0aW9uczIgPSB7XHJcbiAgICAgICAgYmFyQ29sb3I6IHRoaXMuY29sb3JzLmJ5TmFtZSgncHVycGxlJyksXHJcbiAgICAgICAgaGVpZ2h0OiAyMCxcclxuICAgICAgICBiYXJXaWR0aDogNSxcclxuICAgICAgICBiYXJTcGFjaW5nOiAyLFxyXG4gICAgICAgIHJlc2l6ZTogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHNwYXJrT3B0aW9uczMgPSB7XHJcbiAgICAgICAgYmFyQ29sb3I6IHRoaXMuY29sb3JzLmJ5TmFtZSgnaW5mbycpLFxyXG4gICAgICAgIGhlaWdodDogMjAsXHJcbiAgICAgICAgYmFyV2lkdGg6IDUsXHJcbiAgICAgICAgYmFyU3BhY2luZzogMixcclxuICAgICAgICByZXNpemU6IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sb3JzOiBDb2xvcnNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50LWhlYWRpbmdcXFwiPlxcclxcbiAgICA8ZGl2Pk5neERhdGF0YWJsZVxcclxcbiAgICAgICAgPHNtYWxsPkEgZmVhdHVyZS1yaWNoIHlldCBsaWdodHdlaWdodCBkYXRhLXRhYmxlIGNyYWZ0ZWQgZm9yIEFuZ3VsYXI0IGFuZCBiZXlvbmQhPC9zbWFsbD48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkIGNhcmQtZGVmYXVsdFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPklubGluZSBFZGl0aW5nPC9kaXY+XFxyXFxuICAgICAgICA8c21hbGw+RG91YmxlIGNsaWNrIG9uIGNlbGwgdG8gc2hvdyBlZGl0aW9uIG1vZGU8L3NtYWxsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgIDxuZ3gtZGF0YXRhYmxlICNteWRhdGF0YWJsZSBjbGFzcz1cXFwiYm9vdHN0cmFwXFxcIiBbaGVhZGVySGVpZ2h0XT1cXFwiNTBcXFwiIFtsaW1pdF09XFxcIjVcXFwiIFtjb2x1bW5Nb2RlXT1cXFwiJ2ZvcmNlJ1xcXCIgW2Zvb3RlckhlaWdodF09XFxcIjUwXFxcIiBbcm93SGVpZ2h0XT1cXFwiJ2F1dG8nXFxcIiBbcm93c109XFxcInJvd3NcXFwiPlxcclxcbiAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBuYW1lPVxcXCJOYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZSBsZXQtcm93SW5kZXg9XFxcInJvd0luZGV4XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBsZXQtcm93PVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XFxcIkRvdWJsZSBjbGljayB0byBlZGl0XFxcIiAoZGJsY2xpY2spPVxcXCJlZGl0aW5nW3Jvd0luZGV4ICsgJy1uYW1lJ10gPSB0cnVlXFxcIiAqbmdJZj1cXFwiIWVkaXRpbmdbcm93SW5kZXggKyAnLW5hbWUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYXV0b2ZvY3VzIChibHVyKT1cXFwidXBkYXRlVmFsdWUoJGV2ZW50LCAnbmFtZScsIHJvd0luZGV4KVxcXCIgKm5nSWY9XFxcImVkaXRpbmdbcm93SW5kZXgrICctbmFtZSddXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBbdmFsdWVdPVxcXCJ2YWx1ZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBuYW1lPVxcXCJHZW5kZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlIGxldC1yb3dJbmRleD1cXFwicm93SW5kZXhcXFwiIGxldC1yb3c9XFxcInJvd1xcXCIgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cXFwiRG91YmxlIGNsaWNrIHRvIGVkaXRcXFwiIChkYmxjbGljayk9XFxcImVkaXRpbmdbcm93SW5kZXggKyAnLWdlbmRlciddID0gdHJ1ZVxcXCIgKm5nSWY9XFxcIiFlZGl0aW5nW3Jvd0luZGV4ICsgJy1nZW5kZXInXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbHVlfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0ICpuZ0lmPVxcXCJlZGl0aW5nW3Jvd0luZGV4ICsgJy1nZW5kZXInXVxcXCIgKGNoYW5nZSk9XFxcInVwZGF0ZVZhbHVlKCRldmVudCwgJ2dlbmRlcicsIHJvd0luZGV4KVxcXCIgW3ZhbHVlXT1cXFwidmFsdWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIm1hbGVcXFwiPk1hbGU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmZW1hbGVcXFwiPkZlbWFsZTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gbmFtZT1cXFwiQWdlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5neC1kYXRhdGFibGUtY2VsbC10ZW1wbGF0ZSBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7dmFsdWV9fVxcclxcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICA8L25neC1kYXRhdGFibGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q2xpZW50LXNpZGUgU2VhcmNoIGFuZCBGaWx0ZXJpbmc8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgbWItNFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9J1R5cGUgdG8gZmlsdGVyIHRoZSBuYW1lIGNvbHVtbi4uLicgKGtleXVwKT0ndXBkYXRlRmlsdGVyKCRldmVudCknIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxuZ3gtZGF0YXRhYmxlICN0YWJsZSBjbGFzcz0nYm9vdHN0cmFwIG5vLWRldGFpbC1yb3cnIFtjb2x1bW5zXT1cXFwiY29sdW1uc1xcXCIgW2NvbHVtbk1vZGVdPVxcXCInZm9yY2UnXFxcIiBbZm9vdGVySGVpZ2h0XT1cXFwiNTBcXFwiIFtyb3dIZWlnaHRdPVxcXCInYXV0bydcXFwiIFtsaW1pdF09XFxcIjEwXFxcIiBbcm93c109J3Jvd3NGaWx0ZXInPlxcclxcbiAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBuYW1lPVxcXCJOYW1lXFxcIiBbd2lkdGhdPVxcXCIzMDBcXFwiPjwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIG5hbWU9XFxcIkdlbmRlclxcXCI+PC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gbmFtZT1cXFwiQWdlXFxcIj48L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBuYW1lPVxcXCJDb21wYW55XFxcIiBbd2lkdGhdPVxcXCIzMDBcXFwiPjwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICA8L25neC1kYXRhdGFibGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+SG9yaXpvbnRhbCBhbmQgVmVydGljYWwgU2Nyb2xsaW5nPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPG5neC1kYXRhdGFibGUgI3RhYmxlU2Nyb2xsIGNsYXNzPVxcXCJib290c3RyYXAgbm8tZGV0YWlsLXJvd1xcXCIgW3Jvd3NdPVxcXCJyb3dzXFxcIiBjb2x1bW5Nb2RlPVxcXCJmb3JjZVxcXCIgW2hlYWRlckhlaWdodF09XFxcIjUwXFxcIiBbZm9vdGVySGVpZ2h0XT1cXFwiMFxcXCIgW3Jvd0hlaWdodF09XFxcIjQwXFxcIiBbc2Nyb2xsYmFyVl09XFxcInRydWVcXFwiIFtzY3JvbGxiYXJIXT1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIG5hbWU9XFxcIk5hbWVcXFwiIFt3aWR0aF09XFxcIjMwMFxcXCI+PC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gbmFtZT1cXFwiR2VuZGVyXFxcIj48L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBuYW1lPVxcXCJBZ2VcXFwiPjwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIG5hbWU9XFxcIkNvbXBhbnlcXFwiIFt3aWR0aF09XFxcIjMwMFxcXCI+PC9uZ3gtZGF0YXRhYmxlLWNvbHVtbj5cXHJcXG4gICAgICAgIDwvbmd4LWRhdGF0YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWRlZmF1bHRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbG9hdC1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgPHNtYWxsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVxcXCIgKGNsaWNrKT1cXFwidGFibGVFeHAucm93RGV0YWlsLmV4cGFuZEFsbFJvd3MoKVxcXCI+RXhwYW5kIEFsbDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVxcXCIgKGNsaWNrKT1cXFwidGFibGVFeHAucm93RGV0YWlsLmNvbGxhcHNlQWxsUm93cygpXFxcIj5Db2xsYXBzZSBBbGw8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPkV4cGFuZCBSb3cgRGV0YWlsPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPG5neC1kYXRhdGFibGUgI215VGFibGUgY2xhc3M9J2Jvb3RzdHJhcCBleHBhbmRhYmxlJyBbY29sdW1uTW9kZV09XFxcIidmb3JjZSdcXFwiIFtoZWFkZXJIZWlnaHRdPVxcXCI1MFxcXCIgW2Zvb3RlckhlaWdodF09XFxcIjUwXFxcIiBbcm93SGVpZ2h0XT1cXFwiNTBcXFwiIFtzY3JvbGxiYXJWXT1cXFwiNTBcXFwiIFtyb3dzXT0ncm93c0V4cCcgKHBhZ2UpPVxcXCJvblBhZ2UoJGV2ZW50KVxcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLSBSb3cgRGV0YWlsIFRlbXBsYXRlIC0tPlxcclxcbiAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLXJvdy1kZXRhaWwgW3Jvd0hlaWdodF09XFxcIjYwXFxcIiAjbXlEZXRhaWxSb3cgKHRvZ2dsZSk9XFxcIm9uRGV0YWlsVG9nZ2xlKCRldmVudClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLXJvdy1kZXRhaWwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6MzVweDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHN0cm9uZz5Db21wYW55PC9zdHJvbmc+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57e3Jvdy5jb21wYW55fX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1yb3ctZGV0YWlsPlxcclxcbiAgICAgICAgICAgIDwhLS0gQ29sdW1uIFRlbXBsYXRlcyAtLT5cXHJcXG4gICAgICAgICAgICA8bmd4LWRhdGF0YWJsZS1jb2x1bW4gW3dpZHRoXT1cXFwiNTBcXFwiIFtyZXNpemVhYmxlXT1cXFwiZmFsc2VcXFwiIFtzb3J0YWJsZV09XFxcImZhbHNlXFxcIiBbZHJhZ2dhYmxlXT1cXFwiZmFsc2VcXFwiIFtjYW5BdXRvUmVzaXplXT1cXFwiZmFsc2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBbY2xhc3MuZGF0YXRhYmxlLWljb24tcmlnaHRdPVxcXCIhcm93LiQkZXhwYW5kZWRcXFwiIFtjbGFzcy5kYXRhdGFibGUtaWNvbi1kb3duXT1cXFwicm93LiQkZXhwYW5kZWRcXFwiIHRpdGxlPVxcXCJFeHBhbmQvQ29sbGFwc2UgUm93XFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVFeHBhbmRSb3cocm93KVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIG5hbWU9XFxcIkluZGV4XFxcIiB3aWR0aD1cXFwiODBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7cm93LiQkaW5kZXh9fTwvc3Ryb25nPlxcclxcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIG5hbWU9XFxcIkV4cGFuZGVkXFxcIiB3aWR0aD1cXFwiODBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7cm93LiQkZXhwYW5kZWQgPT09IDF9fTwvc3Ryb25nPlxcclxcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICAgICAgPG5neC1kYXRhdGFibGUtY29sdW1uIG5hbWU9XFxcIk5hbWVcXFwiIHdpZHRoPVxcXCIyMDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXZhbHVlPVxcXCJ2YWx1ZVxcXCIgbmd4LWRhdGF0YWJsZS1jZWxsLXRlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57e3ZhbHVlfX08L3N0cm9uZz5cXHJcXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBuYW1lPVxcXCJHZW5kZXJcXFwiIHdpZHRoPVxcXCIzMDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LXJvdz1cXFwicm93XFxcIiBsZXQtdmFsdWU9XFxcInZhbHVlXFxcIiBuZ3gtZGF0YXRhYmxlLWNlbGwtdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aSBbaW5uZXJIVE1MXT1cXFwicm93WyduYW1lJ11cXFwiPjwvaT4gYW5kIDxpPnt7dmFsdWV9fTwvaT5cXHJcXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8L25neC1kYXRhdGFibGUtY29sdW1uPlxcclxcbiAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlLWNvbHVtbiBuYW1lPVxcXCJBZ2VcXFwiPjwvbmd4LWRhdGF0YWJsZS1jb2x1bW4+XFxyXFxuICAgICAgICA8L25neC1kYXRhdGFibGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+Q2xpZW50LXNpZGUgU29ydGluZzwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgIDxuZ3gtZGF0YXRhYmxlIGNsYXNzPVxcXCJib290c3RyYXBcXFwiIFtyb3dzXT1cXFwicm93c1NvcnRcXFwiIFtjb2x1bW5zXT1cXFwiY29sdW1uc1NvcnRcXFwiIFtzb3J0VHlwZV09XFxcIidtdWx0aSdcXFwiIFtjb2x1bW5Nb2RlXT1cXFwiJ2ZvcmNlJ1xcXCIgW2hlYWRlckhlaWdodF09XFxcIjUwXFxcIiBbZm9vdGVySGVpZ2h0XT1cXFwiNTBcXFwiIFtyb3dIZWlnaHRdPVxcXCI1MFxcXCIgW3Njcm9sbGJhclZdPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgIDwvbmd4LWRhdGF0YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWRlZmF1bHRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5Sb3cgU2VsZWN0aW9uPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctOFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxuZ3gtZGF0YXRhYmxlIGNsYXNzPVxcXCJib290c3RyYXBcXFwiIFtyb3dzXT1cXFwicm93c1NlbFxcXCIgW2NvbHVtbk1vZGVdPVxcXCInZm9yY2UnXFxcIiBbY29sdW1uc109XFxcImNvbHVtbnNcXFwiIFtoZWFkZXJIZWlnaHRdPVxcXCI1MFxcXCIgW2Zvb3RlckhlaWdodF09XFxcIjUwXFxcIiBbcm93SGVpZ2h0XT1cXFwiJ2F1dG8nXFxcIiBbbGltaXRdPVxcXCIxNVxcXCIgW3NlbGVjdGVkXT1cXFwic2VsZWN0ZWRcXFwiIFtzZWxlY3Rpb25UeXBlXT1cXFwiJ211bHRpQ2xpY2snXFxcIiAoYWN0aXZhdGUpPVxcXCJvbkFjdGl2YXRlKCRldmVudClcXFwiIChzZWxlY3QpPSdvblNlbGVjdCgkZXZlbnQpJz5cXHJcXG4gICAgICAgICAgICAgICAgPC9uZ3gtZGF0YXRhYmxlPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2VsZWN0ZWQtY29sdW1uJz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND5TZWxlY3Rpb25zPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPSdsZXQgc2VsIG9mIHNlbGVjdGVkJz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzZWwubmFtZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XFxcIiFzZWxlY3RlZC5sZW5ndGhcXFwiPk5vIFNlbGVjdGlvbnM8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCIiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbmd4ZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XHJcblxyXG5jb25zdCBfY2xvbmUgPSAoZCkgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkKSk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLW5neGRhdGF0YWJsZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uZ3hkYXRhdGFibGUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmd4ZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzJyldLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4ZGF0YXRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBlZGl0aW5nID0ge307XHJcbiAgICByb3dzID0gW107XHJcbiAgICByb3dzRmlsdGVyID0gW107XHJcbiAgICByb3dzRXhwID0gW107XHJcbiAgICByb3dzU29ydCA9IFtdO1xyXG4gICAgdGVtcCA9IFtdO1xyXG4gICAgZXhwYW5kZWQ6IGFueSA9IHt9O1xyXG4gICAgdGltZW91dDogYW55O1xyXG5cclxuICAgIHJvd3NTZWwgPSBbXTtcclxuICAgIHNlbGVjdGVkID0gW107XHJcblxyXG4gICAgY29sdW1ucyA9IFtcclxuICAgICAgICB7IHByb3A6ICduYW1lJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0NvbXBhbnknIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR2VuZGVyJyB9XHJcbiAgICBdO1xyXG4gICAgY29sdW1uc1NvcnQgPSBbXHJcbiAgICAgICAgeyBwcm9wOiAnbmFtZScgfSxcclxuICAgICAgICB7IG5hbWU6ICdDb21wYW55JyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dlbmRlcicgfVxyXG4gICAgXTtcclxuICAgIEBWaWV3Q2hpbGQoRGF0YXRhYmxlQ29tcG9uZW50KSB0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZCgnbXlUYWJsZScpIHRhYmxlRXhwOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZmV0Y2goKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy8gY2FjaGUgb3VyIGxpc3RcclxuICAgICAgICAgICAgdGhpcy50ZW1wID0gX2Nsb25lKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yb3dzID0gX2Nsb25lKGRhdGEpOztcclxuICAgICAgICAgICAgdGhpcy5yb3dzRmlsdGVyID0gX2Nsb25lKGRhdGEpOztcclxuICAgICAgICAgICAgdGhpcy5yb3dzRXhwID0gX2Nsb25lKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnJvd3NTb3J0ID0gX2Nsb25lKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnJvd3NTZWwgPSBfY2xvbmUoZGF0YSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblBhZ2UoZXZlbnQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhZ2VkIScsIGV2ZW50KTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlRXhwYW5kUm93KHJvdykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2dnbGVkIEV4cGFuZCBSb3chJywgcm93KTtcclxuICAgICAgICB0aGlzLnRhYmxlRXhwLnJvd0RldGFpbC50b2dnbGVFeHBhbmRSb3cocm93KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRldGFpbFRvZ2dsZShldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEZXRhaWwgVG9nZ2xlZCcsIGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChjYikge1xyXG4gICAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcS5vcGVuKCdHRVQnLCBgYXNzZXRzL2NvbXBhbnkuanNvbmApO1xyXG5cclxuICAgICAgICByZXEub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjYihKU09OLnBhcnNlKHJlcS5yZXNwb25zZSkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlcS5zZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQsIGNlbGwsIHJvd0luZGV4KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lubGluZSBlZGl0aW5nIHJvd0luZGV4Jywgcm93SW5kZXgpXHJcbiAgICAgICAgdGhpcy5lZGl0aW5nW3Jvd0luZGV4ICsgJy0nICsgY2VsbF0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJvd3Nbcm93SW5kZXhdW2NlbGxdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMucm93cyA9IFsuLi50aGlzLnJvd3NdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVUERBVEVEIScsIHRoaXMucm93c1tyb3dJbmRleF1bY2VsbF0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVGaWx0ZXIoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB2YWwgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gZmlsdGVyIG91ciBkYXRhXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IHRoaXMudGVtcC5maWx0ZXIoZnVuY3Rpb24oZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwpICE9PSAtMSB8fCAhdmFsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHJvd3NcclxuICAgICAgICB0aGlzLnJvd3NGaWx0ZXIgPSB0ZW1wO1xyXG4gICAgICAgIC8vIFdoZW5ldmVyIHRoZSBmaWx0ZXIgY2hhbmdlcywgYWx3YXlzIGdvIGJhY2sgdG8gdGhlIGZpcnN0IHBhZ2VcclxuICAgICAgICB0aGlzLnRhYmxlLm9mZnNldCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VsZWN0aW9uXHJcblxyXG5cclxuICAgIG9uU2VsZWN0KHsgc2VsZWN0ZWQgfSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3QgRXZlbnQnLCBzZWxlY3RlZCwgdGhpcy5zZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKDAsIHRoaXMuc2VsZWN0ZWQubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkLnB1c2goLi4uc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWN0aXZhdGUoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWN0aXZhdGUgRXZlbnQnLCBldmVudCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50LWhlYWRpbmdcXFwiPlxcclxcbiAgICA8ZGl2PlRhYmxlc1xcclxcbiAgICAgICA8c21hbGw+Qm9vdHN0cmFwIFJlc3BvbnNpdmUgdGFibGVzPC9zbWFsbD48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48IS0tIFNUQVJUIHJvdy0tPlxcclxcbjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTZcXFwiPlxcclxcbiAgICAgIDwhLS0gU1RBUlQgY2FyZC0tPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+S2l0Y2hlbiBTaW5rPC9kaXY+XFxyXFxuICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tIFNUQVJUIHRhYmxlLXJlc3BvbnNpdmUtLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBOYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBOYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VXNlcm5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TWFyazwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk90dG88L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5AbWRvPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkphY29iPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGhvcm50b248L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5AZmF0PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkxhcnJ5PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+dGhlIEJpcmQ8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5AdHdpdHRlcjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPCEtLSBFTkQgdGFibGUtcmVzcG9uc2l2ZS0tPlxcclxcbiAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwhLS0gRU5EIGNhcmQtLT5cXHJcXG4gICA8L2Rpdj5cXHJcXG4gICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNlxcXCI+XFxyXFxuICAgICAgPCEtLSBTVEFSVCBjYXJkLS0+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5CYXNpYyBUYWJsZTwvZGl2PlxcclxcbiAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLSBTVEFSVCB0YWJsZS1yZXNwb25zaXZlLS0+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZpcnN0IE5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MYXN0IE5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Vc2VybmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NYXJrPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+T3R0bzwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkBtZG88L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SmFjb2I8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UaG9ybnRvbjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkBmYXQ8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TGFycnk8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD50aGUgQmlyZDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkB0d2l0dGVyPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8IS0tIEVORCB0YWJsZS1yZXNwb25zaXZlLS0+XFxyXFxuICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPCEtLSBFTkQgY2FyZC0tPlxcclxcbiAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjwhLS0gRU5EIHJvdy0tPlxcclxcbjwhLS0gU1RBUlQgcm93LS0+XFxyXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNlxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5TdHJpcGVkIFJvd3M8L2Rpdj5cXHJcXG4gICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZpcnN0IE5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MYXN0IE5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Vc2VybmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NYXJrPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+T3R0bzwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkBtZG88L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SmFjb2I8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UaG9ybnRvbjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkBmYXQ8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TGFycnk8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD50aGUgQmlyZDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkB0d2l0dGVyPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICA8L2Rpdj5cXHJcXG4gICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNlxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLWRlZmF1bHRcXFwiPlxcclxcbiAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIj5Cb3JkZXJlZCBUYWJsZTwvZGl2PlxcclxcbiAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZSB0YWJsZS1ib3JkZXJlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZpcnN0IE5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MYXN0IE5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Vc2VybmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NYXJrPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+T3R0bzwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkBtZG88L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SmFjb2I8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UaG9ybnRvbjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkBmYXQ8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TGFycnk8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD50aGUgQmlyZDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkB0d2l0dGVyPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48IS0tIEVORCByb3ctLT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkIGNhcmQtZGVmYXVsdFxcXCI+XFxyXFxuICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPkRhcmsgVGFibGU8L2Rpdj5cXHJcXG4gICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWRhcmtcXFwiPlxcclxcbiAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgPHRoIHNjb3BlPVxcXCJjb2xcXFwiPiM8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aCBzY29wZT1cXFwiY29sXFxcIj5GaXJzdDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoIHNjb3BlPVxcXCJjb2xcXFwiPkxhc3Q8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aCBzY29wZT1cXFwiY29sXFxcIj5IYW5kbGU8L3RoPlxcclxcbiAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgPC90aGVhZD5cXHJcXG4gICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgIDx0aCBzY29wZT1cXFwicm93XFxcIj4xPC90aD5cXHJcXG4gICAgICAgICAgICA8dGQ+TWFyazwvdGQ+XFxyXFxuICAgICAgICAgICAgPHRkPk90dG88L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5AbWRvPC90ZD5cXHJcXG4gICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGggc2NvcGU9XFxcInJvd1xcXCI+MjwvdGg+XFxyXFxuICAgICAgICAgICAgPHRkPkphY29iPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+VGhvcm50b248L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5AZmF0PC90ZD5cXHJcXG4gICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGggc2NvcGU9XFxcInJvd1xcXCI+MzwvdGg+XFxyXFxuICAgICAgICAgICAgPHRkPkxhcnJ5PC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+dGhlIEJpcmQ8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5AdHdpdHRlcjwvdGQ+XFxyXFxuICAgICAgICAgPC90cj5cXHJcXG4gICAgICA8L3Rib2R5PlxcclxcbiAgIDwvdGFibGU+XFxyXFxuPC9kaXY+XFxyXFxuPCEtLSBTVEFSVCByb3ctLT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC02XFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGNhcmQtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiPkhvdmVyIFJvd3M8L2Rpdj5cXHJcXG4gICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtaG92ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBOYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBOYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VXNlcm5hbWU8L3RoPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TWFyazwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk90dG88L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5AbWRvPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkphY29iPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGhvcm50b248L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5AZmF0PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkxhcnJ5PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+dGhlIEJpcmQ8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5AdHdpdHRlcjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgPC9kaXY+XFxyXFxuICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTZcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgY2FyZC1kZWZhdWx0XFxcIj5cXHJcXG4gICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCI+Q29udGV4dCBDbGFzc2VzPC9kaXY+XFxyXFxuICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Rmlyc3QgTmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxhc3QgTmFtZTwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlVzZXJuYW1lPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cXFwidGFibGUtc3VjY2Vzc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NYXJrPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+T3R0bzwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkBtZG88L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVxcXCJ0YWJsZS1pbmZvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkphY29iPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGhvcm50b248L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5AZmF0PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cXFwidGFibGUtd2FybmluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5MYXJyeTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnRoZSBCaXJkPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QHR3aXR0ZXI8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVxcXCJ0YWJsZS1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD40PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Sm9objwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlNtaXRoPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QGpzbWl0aDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPCEtLSBFTkQgcm93LS0+XCIiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3RhbmRhcmQuY29tcG9uZW50LnNjc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zdGFuZGFyZCcsXHJcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc3RhbmRhcmQuY29tcG9uZW50Lmh0bWwnKSxcclxuICBzdHlsZXM6IFtyZXF1aXJlKCcuL3N0YW5kYXJkLmNvbXBvbmVudC5zY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGFuZGFyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZzJUYWJsZU1vZHVsZSB9IGZyb20gJ25nMi10YWJsZS9uZzItdGFibGUnO1xyXG5pbXBvcnQgeyBBZ0dyaWRNb2R1bGUgfSBmcm9tICdhZy1ncmlkLWFuZ3VsYXIvbWFpbic7XHJcbmltcG9ydCB7IE5neERhdGF0YWJsZU1vZHVsZSB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgU3RhbmRhcmRDb21wb25lbnQgfSBmcm9tICcuL3N0YW5kYXJkL3N0YW5kYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4dGVuZGVkQ29tcG9uZW50IH0gZnJvbSAnLi9leHRlbmRlZC9leHRlbmRlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRhdGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGF0YWJsZS9kYXRhdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQW5ndWxhcmdyaWRDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXJncmlkL2FuZ3VsYXJncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neGRhdGF0YWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4ZGF0YXRhYmxlL25neGRhdGF0YWJsZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6ICdzdGFuZGFyZCcsIGNvbXBvbmVudDogU3RhbmRhcmRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ2V4dGVuZGVkJywgY29tcG9uZW50OiBFeHRlbmRlZENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnZGF0YXRhYmxlJywgY29tcG9uZW50OiBEYXRhdGFibGVDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ2FnZ3JpZCcsIGNvbXBvbmVudDogQW5ndWxhcmdyaWRDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ25neGRhdGF0YWJsZScsIGNvbXBvbmVudDogTmd4ZGF0YXRhYmxlQ29tcG9uZW50IH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxyXG4gICAgICAgIE5nMlRhYmxlTW9kdWxlLFxyXG4gICAgICAgIEFnR3JpZE1vZHVsZS53aXRoQ29tcG9uZW50cyhbQW5ndWxhcmdyaWRDb21wb25lbnRdKSxcclxuICAgICAgICBOZ3hEYXRhdGFibGVNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBTdGFuZGFyZENvbXBvbmVudCxcclxuICAgICAgICBFeHRlbmRlZENvbXBvbmVudCxcclxuICAgICAgICBEYXRhdGFibGVDb21wb25lbnQsXHJcbiAgICAgICAgQW5ndWxhcmdyaWRDb21wb25lbnQsXHJcbiAgICAgICAgTmd4ZGF0YXRhYmxlQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVzTW9kdWxlIHsgfVxyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyFAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9yZWxlYXNlL2luZGV4LmNzc1wiKSwgXCJcIik7XG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhQHN3aW1sYW5lL25neC1kYXRhdGFibGUvcmVsZWFzZS90aGVtZXMvYm9vdHN0cmFwLmNzc1wiKSwgXCJcIik7XG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhQHN3aW1sYW5lL25neC1kYXRhdGFibGUvcmVsZWFzZS9hc3NldHMvaWNvbnMuY3NzXCIpLCBcIlwiKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiAwIDAgMCAjMDAwOyB9XFxuXFxuLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsIHtcXG4gIGhlaWdodDogMzAwcHg7IH1cXG5cXG4ubm8tZGV0YWlsLXJvdyAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLnNpbmdsZS1zZWxlY3Rpb24gLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUsIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlLCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAubXVsdGktc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwLCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlLCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAubXVsdGktY2xpY2stc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwLFxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyLCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ5Y2VjICFpbXBvcnRhbnQ7IH1cXG4gIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIC5kYXRhdGFibGUtYm9keS1jZWxsLCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCAuZGF0YXRhYmxlLWJvZHktY2VsbCwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLWJvZHktY2VsbCwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCAuZGF0YXRhYmxlLWJvZHktY2VsbCwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLWJvZHktY2VsbCwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCAuZGF0YXRhYmxlLWJvZHktY2VsbCxcXG4gIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5zaW5nbGUtc2VsZWN0aW9uIC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtYm9keS1jZWxsLCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAuc2luZ2xlLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCAuZGF0YXRhYmxlLWJvZHktY2VsbCwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLWJvZHktY2VsbCwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLm11bHRpLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCAuZGF0YXRhYmxlLWJvZHktY2VsbCwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLWJvZHktY2VsbCwgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLm11bHRpLWNsaWNrLXNlbGVjdGlvbiAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmRhdGF0YWJsZS1pY29uLXJpZ2h0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5lbXB0eS1yb3cge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxcblxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjNjU2NTY1OyB9XFxuXFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgYSB7XFxuICBjb2xvcjogIzAwN2JmZjsgfVxcblxcbi5wYWdlciBsaSA+IGEsIC5wYWdlciBsaSA+IHNwYW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2OyB9XFxuXFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIGEsIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpOmhvdmVyIGEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkOWNlYztcXG4gIGJvcmRlci1jb2xvcjogIzVkOWNlYztcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IHtcXG4gIGJvcmRlcjogMDsgfVxcblxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdy5kYXRhdGFibGUtcm93LWV2ZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyNSk7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJzb3VyY2VSb290IjoiIn0=