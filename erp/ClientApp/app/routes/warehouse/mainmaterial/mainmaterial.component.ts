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
    // ng2Select
    public items: Person[] = [];

    public value: any = {};
    public _disabledV: string = '0';
    public disabled: boolean = false;

    static COUNTRY_CODES = {
        Ireland: "ie",
        Spain: "es",
        "United Kingdom": "gb",
        France: "fr",
        Germany: "de",
        Sweden: "se",
        Italy: "it",
        Greece: "gr",
        Iceland: "is",
        Portugal: "pt",
        Malta: "mt",
        Norway: "no",
        Brazil: "br",
        Argentina: "ar",
        Colombia: "co",
        Peru: "pe",
        Venezuela: "ve",
        Uruguay: "uy"
    };

    columnHeader = 
        [{
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
        }];

    constructor(http: HttpClient) {

        // Load from JSON
        http.get<any>('assets/server/people.json')
            .subscribe((data) => {
                this.items = data;
            });

        // Filter example
        this.gridOptions = <GridOptions>{
            headerHeight: 40,
            columnDefs: this.columnHeader,
            rowData: null,
            enableFilter: true,
            defaultColDef: { editable: true },
            singleClickEdit: true
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
function countryCellRenderer(params) {
    const flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='https://www.ag-grid.com/images/flags/" + MainmaterialComponent.COUNTRY_CODES[params.value] + ".png'>";
    return flag + " " + params.value;
}
