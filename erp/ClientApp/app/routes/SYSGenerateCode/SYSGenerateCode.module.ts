import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgGridModule } from 'ag-grid-angular/main';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextMaskModule } from 'angular2-text-mask';

import { SharedModule } from '../../shared/shared.module';

import { ScreenManagerViewComponent }  from './ScreenManagerView/ScreenManagerView.component';
import { ScreenManagerEditComponent }  from './ScreenManagerEdit/ScreenManagerEdit.component';

const routes: Routes = [
    { path: 'ScreenManagerView',  component: ScreenManagerViewComponent },
    { path: 'ScreenManagerEdit',  component: ScreenManagerEditComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AgGridModule.withComponents([ScreenManagerViewComponent, ScreenManagerEditComponent]),
        NgSelectModule,
        TextMaskModule
    ],

    declarations: [ScreenManagerViewComponent, ScreenManagerEditComponent],

    exports: [
        RouterModule
    ]
})
export class SYSGenerateCodeModule { }
