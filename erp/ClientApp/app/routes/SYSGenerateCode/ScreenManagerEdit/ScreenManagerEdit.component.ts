import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { GlobalsService } from '../../../core/globals.service';

@Component({
  selector: 'app-ScreenManagerEdit',
  templateUrl: './ScreenManagerEdit.component.html',
  styleUrls: ['./ScreenManagerEdit.component.css']
})

export class ScreenManagerEditComponent implements OnInit, OnDestroy {

    resizeEvent = 'resize.ag-grid';
    $win = $(window);  

    public gridOrderSelect = [];
    public actGrid: any;

    public varGlobals: GlobalsService;

    public main: any = {
        screen: null,
        title: null,
    }

    public screen = {
        columnHeader: <any> null,
        dataGrid: <any> null,
        dataSelect: <any> null,
        dataRow: <any> null,
        gridApi: <any> null,
        gridOptions: <GridOptions> {
            headerHeight: 40,
            enableFilter: true,
            singleClickEdit: true,
            enableSorting: true,
            enableColResize: true,
            rowSelection: 'single',
            rowDeselection: true,
            onSelectionChanged: onSelectionChanged_screen,
        },
        components: {
        },
    }

    public region = {
        columnHeader: <any> null,
        dataGrid: <any> null,
        dataSelect: <any> null,
        dataRow: <any> null,
        gridApi: <any> null,
        gridOptions: <GridOptions> {
            headerHeight: 40,
            enableFilter: true,
            singleClickEdit: true,
            enableSorting: true,
            enableColResize: true,
            rowSelection: 'single',
            rowDeselection: true,
            onSelectionChanged: onSelectionChanged_region,
        },
        components: {
        },
    }

    public widget = {
        columnHeader: <any> null,
        dataGrid: <any> null,
        dataSelect: <any> null,
        dataRow: <any> null,
        gridApi: <any> null,
        gridOptions: <GridOptions> {
            headerHeight: 40,
            enableFilter: true,
            singleClickEdit: true,
            enableSorting: true,
            enableColResize: true,
            rowSelection: 'single',
            rowDeselection: true,
            onSelectionChanged: onSelectionChanged_widget,
        },
        components: {
        },
    }

    public binds = {
        columnHeader: <any> null,
        dataGrid: <any> null,
        dataSelect: <any> null,
        dataRow: <any> null,
        gridApi: <any> null,
        gridOptions: <GridOptions> {
            headerHeight: 40,
            enableFilter: true,
            singleClickEdit: true,
            enableSorting: true,
            enableColResize: true,
            rowSelection: 'single',
            rowDeselection: true,
            onSelectionChanged: onSelectionChanged_binds,
        },
        components: {
        },
    }

    public constructor() {
        console.log('End constructor');
    }

    async ngOnInit() {

        this.varGlobals = new GlobalsService();
        this.varGlobals._ref.currentScreen = this;

        this.screen.columnHeader = [{
            headerName: 'ID',
            field: 'id',
            width: 150,
            pinned: 'left',
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

        this.region.columnHeader = [{
            headerName: 'ID',
            field: 'id',
            width: 150,
            pinned: 'left',
        }, {
            headerName: 'Màn hình',
            field: 'screen',
            width: 0,
            hide: true,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Tên vùng',
            field: 'region',
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
        }, {
            headerName: 'Màn hình',
            field: 'screen',
            width: 0,
            hide: true,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Tên vùng',
            field: 'region',
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

        this.binds.columnHeader = [{
            headerName: 'ID',
            field: 'id',
            width: 150,
            pinned: 'left',
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
            field: 'region',
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
            field: 'binds',
            width: 200,
            pinned: 'left',
            editable: true,
        }, {
            headerName: 'Thứ tự',
            field: 'orderBinds',
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
            field: 'skinMessage',
            width: 150,
            editable: true,
        }, {
            headerName: 'Hành động khi lỗi',
            field: 'errorIsStop',
            width: 100,
            editable: true,
        }];
    }

    ngOnDestroy() {
        this.$win.off(this.resizeEvent);
    }

    gridReady_screen(params) {
        this.screen.gridApi = params.api;
    	params.api.setColumnDefs(this.screen.columnHeader);
        //params.api.sizeColumnsToFit();

        this.$win.on(this.resizeEvent, () => {
            setTimeout(() => { 
            	params.api.setColumnDefs(this.screen.columnHeader);
          //      params.api.sizeColumnsToFit();
            });
        });
    }

    gridReady_region(params) {
        this.region.gridApi = params.api;
        params.api.setColumnDefs(this.region.columnHeader);
        params.api.sizeColumnsToFit();

        this.$win.on(this.resizeEvent, () => {
            setTimeout(() => { 
                params.api.setColumnDefs(this.region.columnHeader);
                params.api.sizeColumnsToFit();
            });
        });
    }

    gridReady_widget(params) {
        this.widget.gridApi = params.api;
        params.api.setColumnDefs(this.widget.columnHeader);
        params.api.sizeColumnsToFit();

        this.$win.on(this.resizeEvent, () => {
            setTimeout(() => { 
                params.api.setColumnDefs(this.widget.columnHeader);
                params.api.sizeColumnsToFit();
            });
        });
    }

    gridReady_binds(params) {
        this.binds.gridApi = params.api;
        params.api.setColumnDefs(this.binds.columnHeader);
        params.api.sizeColumnsToFit();

        this.$win.on(this.resizeEvent, () => {
            setTimeout(() => { 
                params.api.setColumnDefs(this.binds.columnHeader);
                params.api.sizeColumnsToFit();
            });
        });
    }

    gridGetAllRows(gridGet) {
  		let rowData = [];
  		gridGet.forEachNode(node => rowData.push(node.data));
  		return rowData;
	}

    async loc_click() {
        var retError = this.varGlobals._ref.retError;
        if (retError['number'] == 0) {
            console.log(this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click') + '_10');
            var eventID = this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click') + '_10';       
            var params_10 = {eventID: eventID, param: {_screen: this.main.screen, _title: this.main.title}, dataPost: {}};
            console.log(params_10);
            await this.varGlobals._ref.httpClient.post('api/getValueEvent', params_10, this.varGlobals._ref.httpOptions)
                .toPromise()
                .then(retData => {
                    retError = retData['error'];
                    this.screen.dataGrid = retData['data'];
                });
        }

        if (retError['number'] == 0) {
            console.log(this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click') + '_15');
            var eventID = this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click') + '_15';
            var params_15 = {eventID: eventID, param: {_screen: this.main.screen, _title: this.main.title}, dataPost: {}};
            console.log(params_15);
            await this.varGlobals._ref.httpClient.post('api/getValueEvent', params_15, this.varGlobals._ref.httpOptions)
                .toPromise()
                .then(retData => {
                    retError = retData['error'];
                    this.region.dataGrid = retData['data'];
                });
        }

        if (retError['number'] == 0) {
            console.log(this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click') + '_20');            
            var eventID = this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click') + '_20';
            var params_20 = {eventID: eventID, param: {_screen: this.main.screen, _title: this.main.title}, dataPost: {}};
            console.log(params_20);
            await this.varGlobals._ref.httpClient.post('api/getValueEvent', params_20, this.varGlobals._ref.httpOptions)
                .toPromise()
                .then(retData => {
                    retError = retData['error'];
                    this.widget.dataGrid = retData['data'];
                });
        }

        if (retError['number'] == 0) {
            console.log(this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click') + '_25');
            var eventID = this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click') + '_25';
            var params_25 = {eventID: eventID, param: {_screen: this.main.screen, _title: this.main.title}, dataPost: {}};
            console.log(params_25);
            await this.varGlobals._ref.httpClient.post('api/getValueEvent', params_25, this.varGlobals._ref.httpOptions)
                .toPromise()
                .then(retData => {
                    retError = retData['error'];
                    this.binds.dataGrid = retData['data'];
                });
        }

        if (retError['number'] == 0) {
            this.screen.gridOptions.api.setRowData(this.screen.dataGrid);
            this.screen.gridOptions.api.sizeColumnsToFit();
            this.region.gridOptions.api.setRowData(this.region.dataGrid);
            this.region.gridOptions.api.sizeColumnsToFit();
            this.widget.gridOptions.api.setRowData(this.widget.dataGrid);
            this.widget.gridOptions.api.sizeColumnsToFit();
            this.binds.gridOptions.api.setRowData(this.binds.dataGrid);
            this.binds.gridOptions.api.sizeColumnsToFit();
        }

        this.varGlobals.showMessage(retError);
    }

    async ghi_click() {
        this.screen.dataSelect = this.varGlobals.getRowSelect(this.screen);
        this.screen.dataRow = this.varGlobals.getRowData(this.screen);
        this.widget.dataRow = this.varGlobals.getRowData(this.widget);
        var retError = this.varGlobals._ref.retError;
        if (retError['number'] == 0) {
            console.log(this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_ghi__click') + '_10');
            var eventID = this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_ghi__click') + '_10';
            var params = {eventID: eventID, param: {}, dataPost: {screen__dataSelect: this.screen.dataSelect, screen__dataRow: this.screen.dataRow, widget__dataRow: this.widget.dataRow}};
            console.log(params);
            await this.varGlobals._ref.httpClient.post('api/getValueEvent', params, this.varGlobals._ref.httpOptions)
                .toPromise()
                .then(retData => {
                    retError = retData['error'];
                    this.screen.dataGrid = retData['data'];
                });
        }
        
        this.varGlobals.showMessage(retError);
    }
}

function onSelectionChanged_screen() {
    var varGlobals = new GlobalsService();
    var filtered = varGlobals._ref.currentScreen.gridOrderSelect.filter(function(value, index, arr) {
        return value != 'screen';
    });

    filtered.push('screen');
    varGlobals._ref.currentScreen.gridOrderSelect = filtered; 
    varGlobals._ref.currentScreen.actGrid = varGlobals._ref.currentScreen.screen;
    console.log(varGlobals._ref.currentScreen.gridOrderSelect);
}

function onSelectionChanged_region() {
    var varGlobals = new GlobalsService();
    var filtered = varGlobals._ref.currentScreen.gridOrderSelect.filter(function(value, index, arr) {
        return value != 'region';
    });

    filtered.push('region');
    varGlobals._ref.currentScreen.gridOrderSelect = filtered; 
    varGlobals._ref.currentScreen.actGrid = varGlobals._ref.currentScreen.region;
    console.log(varGlobals._ref.currentScreen.gridOrderSelect);
}

function onSelectionChanged_widget() {
    var varGlobals = new GlobalsService();
    var filtered = varGlobals._ref.currentScreen.gridOrderSelect.filter(function(value, index, arr) {
        return value != 'widget';
    });

    filtered.push('widget');
    varGlobals._ref.currentScreen.gridOrderSelect = filtered; 
    varGlobals._ref.currentScreen.actGrid = varGlobals._ref.currentScreen.widget;
    console.log(varGlobals._ref.currentScreen.gridOrderSelect);   
}

function onSelectionChanged_binds() {
    var varGlobals = new GlobalsService();
    var filtered = varGlobals._ref.currentScreen.gridOrderSelect.filter(function(value, index, arr) {
        return value != 'binds';
    });

    filtered.push('binds');
    varGlobals._ref.currentScreen.gridOrderSelect = filtered; 
    varGlobals._ref.currentScreen.actGrid = varGlobals._ref.currentScreen.binds;
    console.log(varGlobals._ref.currentScreen.gridOrderSelect); 
}

