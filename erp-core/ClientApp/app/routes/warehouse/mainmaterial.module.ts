import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { MainmaterialComponent } from './mainmaterial/mainmaterial.component';

const routes: Routes = [
    { path: '', component: MainmaterialComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],

    declarations: [MainmaterialComponent],

    exports: [
        RouterModule
    ]
})
export class MainmaterialModule { }