import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../../../core/globals.service';

@Component({
  selector: 'app-ScreenManager',
  templateUrl: './ScreenManager.component.html',
  styleUrls: ['./ScreenManager.component.css']
})

export class ScreenManagerComponent implements OnInit, OnDestroy {

    resizeEvent = 'resize.ag-grid';
    $win = $(window);  

    public main: any = {
        screen: null,
        tilte: null,
    }

    public grid01 = {
        columnHeader: <any> null,
        datagrid: <any> null,
        gridOptions: <GridOptions> {
            headerHeight: 40,
            enableFilter: true,
            singleClickEdit: true,
            enableSorting: true,
            enableColResize: true,
        },
        components: {
        },
    }

    public constructor(private http: HttpClient, public varGlobals: GlobalsService) {
        console.log(varGlobals);
        console.log('End constructor');
    }

    async ngOnInit() {
        console.log('Goto ngOnInit');
        this.grid01.columnHeader = [{
            headerName: 'ID',
            field: 'id',
            width: 150,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Màn hình',
            field: 'screen',
            width: 150,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Tiều đề',
            field: 'tilte',
            width: 1000,
            editable: true,
        }, {
            headerName: 'Nhóm màn hình',
            field: 'groupScreen',
            width: 200,
            editable: true,
        }];
    }

    ngOnDestroy() {
        this.$win.off(this.resizeEvent);
    }

    gridReady(params) {
    	params.api.setColumnDefs(this.grid01.columnHeader);
        params.api.sizeColumnsToFit();

        this.$win.on(this.resizeEvent, () => {
            setTimeout(() => { 
            	params.api.setColumnDefs(this.grid01.columnHeader);
                params.api.sizeColumnsToFit();
            });
        });
    }

    gridGetAllRows(gridGet) {
  		let rowData = [];
  		gridGet.forEachNode(node => rowData.push(node.data));
  		return rowData;
	}
}
