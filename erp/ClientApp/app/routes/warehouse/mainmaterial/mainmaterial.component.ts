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
    public sport: any = [];
    public columnHeader: any = [];

    public value: any = {};
    public _disabledV: string = '0';
    public disabled: boolean = false;

    public selectedCountry: any;

    components = {
        datePicker: getDatePicker(),
        countrySelect: getCountrySelect()
    };

    constructor(http: HttpClient) {

        http.get<any>('assets/server/sport.json')
            .subscribe((data) => {
                console.log(data);
                this.sport = data;
            });

        http.get<any>('assets/server/country.json')
            .subscribe((data) => {
                this.country = data;
            });

        // Load from JSON
        http.get<any>('assets/server/people.json')
            .subscribe((data) => {
                this.people = data;
            });

console.log(this.sport);

        this.columnHeader = 
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
            width: 110,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {values: ["Swimming", "Gymnastics", "Speed Skating", "Cross Country Skiing", "Short-Track Speed Skating", "Diving", "Cycling", "Biathlon", "Alpine Skiing", "Ski Jumping", "Nordic Combined", "Athletics", "Table Tennis", "Tennis", "Synchronized Swimming", "Shooting", "Rowing", "Fencing", "Equestrian", "Canoeing", "Bobsleigh", "Badminton", "Archery", "Wrestling", "Weightlifting", "Waterpolo", "Volleyball", "Triathlon", "Trampoline", "Taekwondo"]},
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

        console.log(this.columnHeader);

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

        $('#col_template_date').width($('.ag-cell-focus').width() - 4);
        $('#col_template_date').height($('.ag-cell-focus').height() - 4);

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
        return true;
    };

    return DatePicker;
}

function getCountrySelect() {
    function CountrySelect() {}

    CountrySelect.prototype.init = function(params) {
    console.log("CountrySelect.prototype.init");
console.log(params.value);    
        this.eInput = document.createElement("ng-select");
        this.eInput = document.getElementById('col_template_country');

        $('#col_template_country').width($('.ag-cell-focus').width());
        $('#col_template_country').height($('.ag-cell-focus').height());
        
        this.selectedCountry = params.value;
console.log(this.selectedCountry);
    };

    CountrySelect.prototype.getGui = function() {
        console.log("CountrySelect.prototype.getGui");
        return this.eInput;
    };

    CountrySelect.prototype.afterGuiAttached = function() {
        console.log("CountrySelect.prototype.afterGuiAttached");
        $('#col_template_country').focus();
        $('#col_template_country').select();
    };

    CountrySelect.prototype.getValue = function() {
        console.log("CountrySelect.prototype.getValue");
        console.log(this.eInput);
        console.log(this.selectedCountry);
        return this.selectedCountry;
    };

    CountrySelect.prototype.destroy = function() {
        console.log("CountrySelect.prototype.destroy");
        var col_template = document.querySelector('#col_template');
        col_template.appendChild(this.eInput);
        return true;
    };

    CountrySelect.prototype.isPopup = function() {
        console.log("CountrySelect.prototype.isPopup");    
        return true;
    };

    return CountrySelect;
}
