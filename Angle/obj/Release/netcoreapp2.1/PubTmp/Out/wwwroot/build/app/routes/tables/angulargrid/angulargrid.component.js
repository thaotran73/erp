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
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var _ = require("lodash");
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
            templateUrl: './angulargrid.component.html',
            styleUrls: ['./angulargrid.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AngulargridComponent);
    return AngulargridComponent;
}());
exports.AngulargridComponent = AngulargridComponent;
//# sourceMappingURL=angulargrid.component.js.map