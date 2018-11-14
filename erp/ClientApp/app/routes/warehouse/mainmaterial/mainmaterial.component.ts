import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { HttpClient } from '@angular/common/http';

interface Person {
    id: string;
    isActive: boolean;
    age: number;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    disabled?: boolean;
}

@Component({
    selector: 'app-mainmaterial',
    templateUrl: './mainmaterial.component.html',
    styleUrls: ['./mainmaterial.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class MainmaterialComponent implements OnInit, OnDestroy {

    resizeEvent = 'resize.ag-grid';
    $win = $(window);

    gridOptions: GridOptions;

    // Datepicker
    bsConfig = {
        containerClass: 'theme-angle',
        dateInputFormat: 'DD/MM/YYYY'
    }

    maskDate = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/];

    public people: Person[] = [];
    public country: any = [];

    public value: any = {};
    public _disabledV: string = '0';
    public disabled: boolean = false;

    columnHeader = 
        [{
            headerName: 'Athlete',
            field: 'athlete',
            width: 150,
            pinned: 'left'
        }, {
            headerName: 'Age',
            field: 'age',
            width: 90,
            pinned: 'left'
        }, {
            headerName: 'Country',
            field: 'country',
            width: 120,
            cellEditor: 'countrySelect',
        }, {
            headerName: 'Year',
            field: 'year',
            width: 90
        }, {
            headerName: 'Date',
            field: 'date',
            width: 110, 
            cellEditor: 'datePicker',
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
            width: 100,
            pinned: 'right'
        }];

    components = {
        datePicker: getDatePicker(),
        countrySelect: getCountrySelect()
    };

    constructor(http: HttpClient) {

        http.get<any>('assets/server/country.json')
            .subscribe((data) => {
                this.country = data;
            });

        // Load from JSON
        http.get<any>('assets/server/people.json')
            .subscribe((data) => {
                this.people = data;
            });

        // Filter example
        this.gridOptions = <GridOptions>{
            headerHeight: 40,
            columnDefs: this.columnHeader,
            rowData: null,
            enableFilter: true,
            defaultColDef: { editable: true },
            singleClickEdit: true,
            enableSorting: true,
            enableColResize: true,
        };

        // Load from JSON
        http.get<any>('assets/server/ag-owinners.json')
            .subscribe((data) => {
                this.gridOptions.api.setRowData(data);
                this.gridOptions.api.sizeColumnsToFit();
            });
    }

    ngOnInit() { }

    gridReady(params) {
        params.api.sizeColumnsToFit();
        this.$win.on(this.resizeEvent, () => {
            setTimeout(() => { 
                params.api.sizeColumnsToFit();
            });
        });
    }

    ngOnDestroy() {
        this.$win.off(this.resizeEvent);
    }

}

function getDatePicker() {
    function DatePicker() {}

    DatePicker.prototype.init = function(params) {
        this.eInput = document.createElement("INPUT");
        this.eInput = document.getElementById('col_template_date');

        this.eInput.value = params.value;
    };

    DatePicker.prototype.getGui = function() {
        return this.eInput;
    };

    DatePicker.prototype.afterGuiAttached = function() {
        this.eInput.focus();
        this.eInput.select();
    };

    DatePicker.prototype.getValue = function() {
        return this.eInput.value;
    };

    DatePicker.prototype.destroy = function() {
        var col_template = document.querySelector('#col_template');
        col_template.appendChild(this.eInput);
        return true;
    };

    DatePicker.prototype.isPopup = function() {
        return false;
    };

    return DatePicker;
}

function getCountrySelect() {
    function CountrySelect() {}

    CountrySelect.prototype.init = function(params) {
        this.eInput = document.createElement("ng-select");
        this.eInput = document.getElementById('col_template_country');

        this.eInput.value = params.value;
    };

    CountrySelect.prototype.getGui = function() {
        return this.eInput;
    };

    CountrySelect.prototype.afterGuiAttached = function() {
        this.eInput.focus();
        this.eInput.select();
    };

    CountrySelect.prototype.getValue = function() {
        return this.eInput.value;
    };

    CountrySelect.prototype.destroy = function() {
        var col_template = document.querySelector('#col_template');
        col_template.appendChild(this.eInput);
        return true;
    };

    CountrySelect.prototype.isPopup = function() {
        return false;
    };

    return CountrySelect;
}
