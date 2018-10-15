/*!
 *
 * ERP - Bootstrap Admin Template
 *
 * Version: 4.0
 * Author: Thai Tran
 * Website: http://www.thaithao.net
 * License: https://www.thaithao.net/help/licenses
 *
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import './modernizr.js'; // 'npm run modernizr' to create this file

// Enable Hot Module Reloading
/* tslint:disable */
if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => { });
}

let a = platformBrowserDynamic().bootstrapModule(AppModule);
a.then(() => { (<any>window).appBootstrap && (<any>window).appBootstrap(); })
