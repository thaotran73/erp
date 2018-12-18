import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { HttpClient } from '@angular/common/http';
import { GlobalsService } from '../../../core/globals.service';

@Component({
  selector: 'app-ScreenManagerEdit',
  templateUrl: './ScreenManagerEdit.component.html',
  styleUrls: ['./ScreenManagerEdit.component.css']
})

export class ScreenManagerEditComponent implements OnInit, OnDestroy {

    resizeEvent = 'resize.ag-grid';
    $win = $(window);  

    public main: any = {
        screen: null,
        tilte: null,
    }

    public screen = {
        columnHeader: <any> null,
        datagrid: <any> null,
        gridOptions: <GridOptions> {
            headerHeight: 40,
            enableFilter: true,
            singleClickEdit: true,
            enableSorting: true,
            enableColResize: true,
            rowSelection: 'single',
            rowDeselection: true,
        },
        components: {
        },
    }

    public zone = {
        columnHeader: <any> null,
        datagrid: <any> null,
        gridOptions: <GridOptions> {
            headerHeight: 40,
            enableFilter: true,
            singleClickEdit: true,
            enableSorting: true,
            enableColResize: true,
            rowSelection: 'single',
            rowDeselection: true,           
        },
        components: {
        },
    }

    public widget = {
        columnHeader: <any> null,
        datagrid: <any> null,
        gridOptions: <GridOptions> {
            headerHeight: 40,
            enableFilter: true,
            singleClickEdit: true,
            enableSorting: true,
            enableColResize: true,
            rowSelection: 'single',
            rowDeselection: true,           
        },
        components: {
        },
    }

    public event = {
        columnHeader: <any> null,
        datagrid: <any> null,
        gridOptions: <GridOptions> {
            headerHeight: 40,
            enableFilter: true,
            singleClickEdit: true,
            enableSorting: true,
            enableColResize: true,
            rowSelection: 'single',
            rowDeselection: true,           
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
        this.screen.columnHeader = [{
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

        this.zone.columnHeader = [{
            headerName: 'ID',
            field: 'id',
            width: 150,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Màn hình',
            field: 'screen',
            width: 0,
            hide: true,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Tên vùng',
            field: 'zone',
            width: 150,
            editable: true,
        }, {
            headerName: 'Loại vùng',
            field: 'type',
            width: 150,
            editable: true,
        }, {
            headerName: 'Thứ tự',
            field: 'orderInScreen',
            width: 100,
            editable: true,
        }];

        this.widget.columnHeader = [{
            headerName: 'ID',
            field: 'id',
            width: 150,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Màn hình',
            field: 'screen',
            width: 0,
            hide: true,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Tên vùng',
            field: 'zone',
            width: 0,
            hide: true,
            editable: true,
        }, {
            headerName: 'Widget',
            field: 'widget',
            width: 200,
            editable: true,
        }, {
            headerName: 'Loại widget',
            field: 'type',
            width: 200,
            editable: true,
        }, {
            headerName: 'Mask',
            field: 'mask',
            width: 200,
            editable: true,
        }, {
            headerName: 'Vị trí row',
            field: 'row',
            width: 100,
            editable: true,
        }, {
            headerName: 'Vị trị col',
            field: 'col',
            width: 100,
            editable: true,
        }, {
            headerName: 'Độ rộng',
            field: 'width',
            width: 100,
            editable: true,
        }, {
            headerName: 'Tiều đề col',
            field: 'tilte',
            width: 300,
            editable: true,
        }];

        this.event.columnHeader = [{
            headerName: 'ID',
            field: 'id',
            width: 150,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Sự kiện',
            field: 'eventID',
            width: 200,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Màn hình',
            field: 'screen',
            width: 0,
            hide: true,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Tên vùng',
            field: 'zone',
            width: 0,
            hide: true,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Widget',
            field: 'widget',
            width: 0,
            hide: true,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Hành động',
            field: 'event',
            width: 200,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Thứ tự',
            field: 'orderEvent',
            width: 100,
            editable: true,
        }, {
            headerName: 'Diễn giải',
            field: 'description',
            width: 300,
            editable: true,
        }, {
            headerName: 'dataPost',
            field: 'dataPost',
            width: 150,
            editable: true,
        }, {
            headerName: 'CMD thực hiện',
            field: 'executeCMD',
            width: 150,
            editable: true,
        }, {
            headerName: 'CMD tham số',
            field: 'paramCMD',
            width: 200,
            editable: true,
        }, {
            headerName: 'Loại CMD',
            field: 'typeCMD',
            width: 200,
            editable: true,
        }, {
            headerName: 'Biến nhận dữ liệu',
            field: 'retVariable',
            width: 200,
            editable: true,
        }, {
            headerName: 'Loại GT trả về',
            field: 'typeRetValue',
            width: 200,
            editable: true,
        }, {
            headerName: 'Kiểu thông báo',
            field: 'typeMessage',
            width: 150,
            editable: true,
        }];
    }

    ngOnDestroy() {
        this.$win.off(this.resizeEvent);
    }

    gridReady_screen(params) {
    	params.api.setColumnDefs(this.screen.columnHeader);
        params.api.sizeColumnsToFit();

        this.$win.on(this.resizeEvent, () => {
            setTimeout(() => { 
            	params.api.setColumnDefs(this.screen.columnHeader);
                params.api.sizeColumnsToFit();
            });
        });
    }

    gridReady_zone(params) {
        params.api.setColumnDefs(this.zone.columnHeader);
        params.api.sizeColumnsToFit();

        this.$win.on(this.resizeEvent, () => {
            setTimeout(() => { 
                params.api.setColumnDefs(this.zone.columnHeader);
                params.api.sizeColumnsToFit();
            });
        });
    }

    gridReady_widget(params) {
        params.api.setColumnDefs(this.widget.columnHeader);
        params.api.sizeColumnsToFit();

        this.$win.on(this.resizeEvent, () => {
            setTimeout(() => { 
                params.api.setColumnDefs(this.widget.columnHeader);
                params.api.sizeColumnsToFit();
            });
        });
    }

    gridReady_event(params) {
        params.api.setColumnDefs(this.event.columnHeader);
        //params.api.sizeColumnsToFit();

        this.$win.on(this.resizeEvent, () => {
            setTimeout(() => { 
                params.api.setColumnDefs(this.event.columnHeader);
                //params.api.sizeColumnsToFit();
            });
        });
    }

    gridGetAllRows(gridGet) {
  		let rowData = [];
  		gridGet.forEachNode(node => rowData.push(node.data));
  		return rowData;
	}

    async loc_click() {
        var eventID = '4750a84feb05d55bfbf07ecbe8df5eec';
        var params = {eventID: eventID, param: {main__screen: this.main.screen, main__title: this.main.title}, dataPost: {main: this.main}};
        console.log(params);
        await this.http.post('api/exeEvent', params, this.varGlobals.globalRef.httpOptions)
            .toPromise()
            .then(data => {
                console.log(data);
                this.screen.datagrid = data;
                this.screen.gridOptions.api.setRowData(this.screen.datagrid);
                this.screen.gridOptions.api.sizeColumnsToFit();
            });
    }
}
