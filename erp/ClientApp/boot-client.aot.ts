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

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import './modernizr.js'; // 'npm run modernizr' to create this file

enableProdMode();

let a = platformBrowserDynamic().bootstrapModule(AppModule);
a.then(() => { (<any>window).appBootstrap && (<any>window).appBootstrap(); })
