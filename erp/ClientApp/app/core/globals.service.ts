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

    public static maskInputDate = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/];
    public static maskInputNumberF0;
    public static maskInputNumberF1;
    public static maskInputNumberF2;

    public globalRef = GlobalsService;

	constructor() {
        console.log('GlobalsService End constructor');
	 	this.globalRef.moment = require('moment-timezone');
		this.globalRef.timezone = this.globalRef.moment.tz.guess();
		this.globalRef.bsConfig.dateInputFormat = this.globalRef.dateInputFormat;
		if (this.globalRef.dateInputFormat == 'DD/MM/YYYY') {
			this.globalRef.maskInputDate = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/];
		}
	}

	public hashMD5(message) {
        var crypto = require("crypto");
        var md5 = crypto.createHash("md5");        
        return md5.update(new Buffer(message, 'ucs-2')).digest('hex');
    }

    public showMessage(type, title, message) {
        switch (type) {
            case 'error':
                this.globalRef.toastrService.error(message, title, this.globalRef.toastrConfig);
                break;

            case 'warning':
                this.globalRef.toastrService.warning(message, title, this.globalRef.toastrConfig);
                break;

            case 'info':
                this.globalRef.toastrService.info(message, title, this.globalRef.toastrConfig);
                break;

            default:
                this.globalRef.toastrService.success(message, title, this.globalRef.toastrConfig);
        }
    }
}
