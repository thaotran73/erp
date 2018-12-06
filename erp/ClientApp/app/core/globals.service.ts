import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {
    public static timezone: any = 'Asia/Ho_Chi_Minh';
    public static bsConfig: any = {
		containerClass: 'theme-angle',
        dateInputFormat: 'DD/MM/YYYY'
	};

    public globalRef = GlobalsService;

	constructor() {
		var moment = require('moment-timezone');
		this.globalRef.timezone = moment.tz.guess();
	}
}
