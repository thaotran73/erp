import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
declare var $: any;

@Component({
    selector: 'app-mainmaterial',
    templateUrl: './mainmaterial.component.html',
    styleUrls: ['./mainmaterial.component.scss']
})

export class MainmaterialComponent implements OnInit, OnDestroy {

    resizeEvent = 'resize.ag-grid';
    $win = $(window);

    gridOptions: GridOptions;

    // ng2Select
    public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
        'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
        'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
        'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
        'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
        'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
        'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
        'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
        'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
        'Zagreb', 'Zaragoza', 'Łódź'];
    public value: any = {};
    public _disabledV: string = '0';
    public disabled: boolean = false;

    // Filter Example
    irishAthletes = ['John Joe Nevin', 'Katie Taylor', 'Paddy Barnes', 'Kenny Egan', 'Darren Sutherland', 'Margaret Thatcher', 'Tony Blair', 'Ronald Regan', 'Barack Obama'];

    columnDefsFilter = [{
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

    constructor(http: HttpClient) {
        // Filter example
        this.gridOptions = <GridOptions>{
            headerHeight: 40,
            columnDefs: this.columnDefsFilter,
            rowData: null,
            enableFilter: true,
        };
        // Load from JSON
        http.get<any>('assets/server/ag-owinners.json')
            .subscribe((data) => {

                this.gridOptions.api.setRowData(data);
                this.gridOptions.api.sizeColumnsToFit();

            });
    }

    onQuickFilterChanged($event) {
        this.gridOptions.api.setQuickFilter($event.target.value);
    }

    ngOnInit() { }

    gridReady(params) {
        params.api.sizeColumnsToFit();
        this.$win.on(this.resizeEvent, () => {
            setTimeout(() => { params.api.sizeColumnsToFit(); });
        });
    }

    ngOnDestroy() {
        this.$win.off(this.resizeEvent);
    }

}
