import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-mainmaterial',
    templateUrl: './mainmaterial.component.html',
    styleUrls: ['./mainmaterial.component.scss'],
    encapsulation: ViewEncapsulation.None
}) 

export class MainmaterialComponent implements OnInit, OnDestroy {

    resizeEvent = 'resize.ag-grid';
    $win = $(window);

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
        })
    }

    // Datepicker
    bsConfig = {
        containerClass: 'theme-angle',
        dateInputFormat: 'DD/MM/YYYY'
    }

    maskDate = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/];

    public value_test_main: any = {
        tungay: null,
        denngay: null,
    }

    public selectPeople: any = [];

    gridOptions: GridOptions = 
        {
            headerHeight: 40,
            columnDefs: null,
            rowData: null,
            enableFilter: true,
            singleClickEdit: true,
            enableSorting: true,
            enableColResize: true,
        };

    public people: any = [];
    public country: any = [];
    public sport: any = [];
    public columnHeader: any = [];


    public value: any = {};
    public _disabledV: string = '0';
    public disabled: boolean = false;

    public selectedCountry: any = {};

    components = {
        datePicker: getDatePicker(),
        countrySelect: getCountrySelect(this)
    };

    myAppUrl: string = '';

    constructor(private http: HttpClient) {
        console.log('End constructor');
    }

    async ngOnInit() {
        console.log('Goto ngOnInit');
        await this.http.get('assets/server/country.json')
            .toPromise()
            .then(data => {
                console.log(data);
                this.country = data;
            });

        await this.http.get<any>('assets/server/sport.json')
            .toPromise()
            .then(data => {
                console.log(data);
                this.columnHeader = 
                [{
                    headerName: 'Athlete',
                    field: 'athlete',
                    width: 150,
                    pinned: 'left',
                    editable: true,
                }, {
                    headerName: 'Age',
                    field: 'age',
                    width: 90,
                    pinned: 'left',
                    editable: true,
                }, {
                    headerName: 'Country ID',
                    field: 'country_id',
                    width: 80,
                    editable: true,
                }, {
                    headerName: 'Country',
                    field: 'country',
                    width: 120,
                    cellEditor: 'countrySelect',
                    editable: true,
                }, {
                    headerName: 'Year',
                    field: 'year',
                    width: 90,
                    editable: true,
                }, {
                    headerName: 'Date',
                    field: 'date',
                    width: 110, 
                    cellEditor: 'datePicker',
                    editable: true,
                }, {
                    headerName: 'Sport',
                    field: 'sport',
                    width: 110,
                    cellEditor: 'agSelectCellEditor',
                    cellEditorParams: data,
                    editable: true,
                }, {
                    headerName: 'Gold',
                    field: 'gold',
                    width: 100,
                    editable: true,
                }, {
                    headerName: 'Silver',
                    field: 'silver',
                    width: 100,
                    editable: true,
                }, {
                    headerName: 'Bronze',
                    field: 'bronze',
                    width: 100,
                    editable: true,
                }, {
                    headerName: 'Total',
                    field: 'total',
                    width: 100,
                    pinned: 'right',
                    editable: true,
                }];                
            });

        await this.http.get<any>('assets/server/people.json')
            .toPromise()
            .then(data => {
                console.log(data);
                this.people = data;
            });

        console.log(this.columnHeader);
        await this.http.get<any>('assets/server/ag-owinners.json')
            .toPromise()
            .then(data => {
                this.gridOptions.api.setColumnDefs(this.columnHeader);            
                this.gridOptions.api.setRowData(data);
                this.gridOptions.api.sizeColumnsToFit();
              });
    }

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

    async loc_click() {
        var eventID = 10;
        var params = {eventID: eventID, dataPost: {value_test_main_tungay: this.value_test_main.tungay, value_test_main_denngay: this.value_test_main.denngay, selectPeople: this.selectPeople}};
        console.log(params);
        await this.http.post('api/exeEvent', params, this.httpOptions)
            .toPromise()
            .then(data => {
                console.log(data);
/*                
                this.gridOptions.api.setRowData(data);
                this.gridOptions.api.sizeColumnsToFit();
*/                
            });
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

function getCountrySelect(screen: any) {
    var paramsRecord: any;

    function CountrySelect() {
    }

    CountrySelect.prototype.init = function(params) {
        console.log("CountrySelect.prototype.init");
        screen.selectedCountry = {
            countryCode: params.node.data['country_id'],
            countryName: params.node.data['country']
        }
        paramsRecord = params;
        console.log(screen.selectedCountry);
        this.eInput = document.createElement("ng-select");
        this.eInput = document.getElementById('col_template_country');

        $('#col_template_country').width($('.ag-cell-focus').width());
        $('#col_template_country').height($('.ag-cell-focus').height());
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
        if (screen.selectedCountry == null)
            return '';
        return screen.selectedCountry.countryName;
    };

    CountrySelect.prototype.destroy = function() {
        console.log("CountrySelect.prototype.destroy");
        var col_template = document.querySelector('#col_template');
        col_template.appendChild(this.eInput);
        if (screen.selectedCountry == null)
            paramsRecord.node.data['country_id'] = '';
        else
            paramsRecord.node.data['country_id'] = screen.selectedCountry.countryCode;
        return true;
    };

    CountrySelect.prototype.isPopup = function() {
        console.log("CountrySelect.prototype.isPopup");    
        return true;
    };

    return CountrySelect;
}
