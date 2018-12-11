import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgGridModule } from 'ag-grid-angular/main';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextMaskModule } from 'angular2-text-mask';

import { SharedModule } from '../../shared/shared.module';
import { MainMaterialTestComponent } from './MainMaterialTest/MainMaterialTest.component';

const routes: Routes = [
    { path: 'MainMaterialTest', component: MainMaterialTestComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AgGridModule.withComponents([MainMaterialTestComponent]),
        NgSelectModule,
        TextMaskModule       
   ],

    declarations: [MainMaterialTestComponent],

    exports: [
        RouterModule
    ]
})
export class WHMainMaterialModule { }