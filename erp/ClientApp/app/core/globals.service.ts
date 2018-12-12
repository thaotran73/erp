import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

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
	public static httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'my-auth-token'
        })
    };
    public static maskInputDate = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/];
    public static maskInputNumberF0;
    public static maskInputNumberF1;
    public static maskInputNumberF2;

    public globalRef = GlobalsService;

	constructor() {
	 	this.globalRef.moment = require('moment-timezone');
		this.globalRef.timezone = this.globalRef.moment.tz.guess();
		this.globalRef.bsConfig.dateInputFormat = this.globalRef.dateInputFormat;
		if (this.globalRef.dateInputFormat == 'DD/MM/YYYY') {
			this.globalRef.maskInputDate = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /[1-2]/, /\d/, /\d/, /\d/];
		}
	}
}
