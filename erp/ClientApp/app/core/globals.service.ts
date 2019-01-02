import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConfig } from 'ngx-toastr';

@Injectable()
export class GlobalsService {
    public static timezone: any = 'Asia/Ho_Chi_Minh';
    public static bsConfig: any = {
		containerClass: 'theme-angle',
        dateInputFormat: 'DD/MM/YYYY'
	};
	public static dateInputFormat = 'DD/MM/YYYY';
	public static dateSaveFormat = 'YYYY-MM-DD';
	public static moment;

    public static retError = {
        number: 0,
        skin: 'none',
        type: 'none',
        title: '',
        message: ''
    };

    public static httpClient: HttpClient;
	public static httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    public static toastrService;
    public static toastrConfig = <GlobalConfig> {
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
        closeButton: true,
        progressBar: true,
        progressAnimation: 'decreasing',
    }

    public static swAlert;
    
    public static maskInputDate = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/];
    public static maskInputNumberF0;
    public static maskInputNumberF1;
    public static maskInputNumberF2;

    public static currentScreen;
    public _ref = GlobalsService;

	constructor() {
        console.log('GlobalsService End constructor');
	 	this._ref.moment = require('moment-timezone');
		this._ref.timezone = this._ref.moment.tz.guess();
		this._ref.bsConfig.dateInputFormat = this._ref.dateInputFormat;
		if (this._ref.dateInputFormat == 'DD/MM/YYYY') {
			this._ref.maskInputDate = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/];
		}
        this._ref.swAlert = require('sweetalert');
	}

	public hashMD5(message) {
        var crypto = require("crypto");
        var md5 = crypto.createHash("md5");        
        return md5.update(new Buffer(message, 'ucs-2')).digest('hex');
    }

    public showMessage(error) {
        console.log(error);
        switch (error['skin']) {
            case 'toast':
                switch (error['type']) {
                    case 'error':
                        this._ref.toastrService.error(error['message'], error['title'], this._ref.toastrConfig);
                        break;

                    case 'warning':
                        this._ref.toastrService.warning(error['message'], error['title'], this._ref.toastrConfig);
                        break;

                    case 'info':
                        this._ref.toastrService.info(error['message'], error['title'], this._ref.toastrConfig);
                        break;

                    case 'success':
                        this._ref.toastrService.info(error['message'], error['title'], this._ref.toastrConfig);
                        break;

                    default:
                        this._ref.toastrService.success(error['message'], error['title'], this._ref.toastrConfig);
                }
                break;

            case 'dialog':
                switch (error['type']) {
                    case 'error':
                    case 'warning':
                    case 'info':
                    case 'success':
                        this._ref.swAlert('', error['message'], error['type']);
                        break;
                    default:
                        this._ref.swAlert('', error['message']);
                }
                break;

            case 'none':
                break;
        }
    }

    public getRowSelect(gridRegion) {
        return gridRegion.gridApi.getSelectedRows();
    }

    public getRowData(gridRegion) {
        let rowData = [];
        gridRegion.gridApi.forEachNode(node => rowData.push(node.data));
        return rowData;
    }    
}
