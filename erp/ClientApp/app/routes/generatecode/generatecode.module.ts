import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular/main';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextMaskModule } from 'angular2-text-mask';

import { SharedModule } from '../../shared/shared.module';
import { GeneratecodeComponent } from './generatecode.component';

const routes: Routes = [
    { path: '', component: GeneratecodeComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AgGridModule.withComponents([GeneratecodeComponent]),
        NgSelectModule,
        TextMaskModule
    ],

    declarations: [GeneratecodeComponent],

    exports: [
        RouterModule
    ]
})
export class GeneratecodeModule { }