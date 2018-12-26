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

    public gridOrderSelect: any = [];

    public varGlobals: GlobalsService;

    public main: any = {
        screen: null,
        title: null,
    }

    public screen = {
        columnHeader: <any> null,
        datagrid: <any> null,
        dataselect: <any> null,
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
        datagrid: <any> null,
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
        datagrid: <any> null,
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
        datagrid: <any> null,
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
        console.log(this.varGlobals);

        console.log('Goto ngOnInit');
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
        console.log(this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click_10'));
        var eventID = this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click_10');       
        var params = {eventID: eventID, param: {main__screen: this.main.screen, main__title: this.main.title}, dataPost: {main: this.main}};
        console.log(params);
        await this.varGlobals._ref.httpClient.post('api/getValueEvent', params, this.varGlobals._ref.httpOptions)
            .toPromise()
            .then(retData => {
                console.log(retData);
                retData['error']['skin'] = 'dialog';
                retData['error']['type'] = 'none';
                this.varGlobals.showMessage(retData['error']);
                this.screen.datagrid = retData['data'];
                this.screen.gridOptions.api.setRowData(this.screen.datagrid);
                this.screen.gridOptions.api.sizeColumnsToFit();
            });

        console.log(this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click_15'));
        var eventID = this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click_15');       
        var params = {eventID: eventID, param: {main__screen: this.main.screen, main__title: this.main.title}, dataPost: {main: this.main}};
        console.log(params);
        await this.varGlobals._ref.httpClient.post('api/getValueEvent', params, this.varGlobals._ref.httpOptions)
            .toPromise()
            .then(retData => {
                console.log(retData);                
                this.varGlobals.showMessage(retData['error']);
                this.region.datagrid = retData['data'];
                this.region.gridOptions.api.setRowData(this.region.datagrid);
                this.region.gridOptions.api.sizeColumnsToFit();
            });

        console.log(this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click_20'));
        var eventID = this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click_20');       
        var params = {eventID: eventID, param: {main__screen: this.main.screen, main__title: this.main.title}, dataPost: {main: this.main}};
        console.log(params);
        await this.varGlobals._ref.httpClient.post('api/getValueEvent', params, this.varGlobals._ref.httpOptions)
            .toPromise()
            .then(retData => {
                console.log(retData);
                this.varGlobals.showMessage(retData['error']);
                this.widget.datagrid = retData['data'];
                this.widget.gridOptions.api.setRowData(this.widget.datagrid);
                this.widget.gridOptions.api.sizeColumnsToFit();
            });

        console.log(this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click_25'));
        var eventID = this.varGlobals.hashMD5('ScreenManagerEdit__main__cmd_loc__click_25');       
        var params = {eventID: eventID, param: {main__screen: this.main.screen, main__title: this.main.title}, dataPost: {main: this.main}};
        console.log(params);
        await this.varGlobals._ref.httpClient.post('api/getValueEvent', params, this.varGlobals._ref.httpOptions)
            .toPromise()
            .then(retData => {
                console.log(retData);
                this.varGlobals.showMessage(retData['error']);
                this.binds.datagrid = retData['data'];
                this.binds.gridOptions.api.setRowData(this.binds.datagrid);
                this.binds.gridOptions.api.sizeColumnsToFit();
            });

    }
    async ghi_click() {

    }
}

function onSelectionChanged_screen() {
    var filtered = this.gridOrderSelect.filter(function(value, index, arr){
        return value = 'screen';
    });

    filtered.push('screen');
    this.gridOrderSelect = filtered; 
}

function onSelectionChanged_region() {
    var filtered = this.gridOrderSelect.filter(function(value, index, arr){
        return value = 'region';
    });

    filtered.push('region');
    this.gridOrderSelect = filtered; 
}

function onSelectionChanged_widget() {
    var filtered = this.gridOrderSelect.filter(function(value, index, arr){
        return value = 'widget';
    });

    filtered.push('widget');
    this.gridOrderSelect = filtered; 
}

function onSelectionChanged_binds() {
    var filtered = this.gridOrderSelect.filter(function(value, index, arr){
        return value = 'binds';
    });

    filtered.push('binds');
    this.gridOrderSelect = filtered; 
}
