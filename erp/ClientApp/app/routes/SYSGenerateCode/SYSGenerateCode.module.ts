import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgGridModule } from 'ag-grid-angular/main';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextMaskModule } from 'angular2-text-mask';

import { SharedModule } from '../../shared/shared.module';

import { ControlManagerComponent } from './ControlManager/ControlManager.component';

const routes: Routes = [
    { path: 'ControlManager', component: ControlManagerComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AgGridModule.withComponents([ControlManagerComponent]),
        NgSelectModule,
        TextMaskModule
    ],

    declarations: [ControlManagerComponent],

    exports: [
        RouterModule
    ]
})
export class SYSGenerateCodeModule { }