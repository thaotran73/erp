import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {
	public timezone: any
	public bsConfig: any

	public aaa: any;

	constructor() {
		this.timezone = 'Asia/Ho_Chi_Minh';
		this.bsConfig = {
        	containerClass: 'theme-angle',
        	dateInputFormat: 'DD/MM/YYYY'
		};
	}
}
