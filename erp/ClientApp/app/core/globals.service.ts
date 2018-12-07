import { Injectable } from '@angular/core';

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

    public globalRef = GlobalsService;

	constructor() {
	 	this.globalRef.moment = require('moment-timezone');
		this.globalRef.timezone = this.globalRef.moment.tz.guess();
		this.globalRef.bsConfig.dateInputFormat = this.globalRef.dateInputFormat;
	}
}
