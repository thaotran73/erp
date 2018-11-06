import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular/main';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';
import { NgSelectModule } from '@ng-select/ng-select';


import { SharedModule } from '../../shared/shared.module';
import { MainmaterialComponent } from './mainmaterial/mainmaterial.component';

const routes: Routes = [
    { path: '', component: MainmaterialComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AgGridModule.withComponents([MainmaterialComponent]),
        NgxSelectModule,
        NgSelectModule
    ],

    declarations: [MainmaterialComponent],

    exports: [
        RouterModule
    ]
})
export class MainmaterialModule { }