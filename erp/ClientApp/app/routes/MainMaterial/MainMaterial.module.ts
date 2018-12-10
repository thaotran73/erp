import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgGridModule } from 'ag-grid-angular/main';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextMaskModule } from 'angular2-text-mask';

import { SharedModule } from '../../shared/shared.module';
import { MainMaterialComponent } from './MainMaterial/MainMaterial.component';

const routes: Routes = [
    { path: 'MainMaterial', component: MainMaterialComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AgGridModule.withComponents([MainMaterialComponent]),
        NgSelectModule,
        TextMaskModule       
   ],

    declarations: [MainMaterialComponent],

    exports: [
        RouterModule
    ]
})
export class MainMaterialModule { }