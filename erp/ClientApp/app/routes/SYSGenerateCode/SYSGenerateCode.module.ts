import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgGridModule } from 'ag-grid-angular/main';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextMaskModule } from 'angular2-text-mask';

import { SharedModule } from '../../shared/shared.module';

import { ScreenManagerComponent }  from './ScreenManager/ScreenManager.component';
import { ZoneManagerComponent }    from './ZoneManager/ZoneManager.component';
import { WidgetManagerComponent }  from './WidgetManager/WidgetManager.component';
import { EventManagerComponent }   from './EventManager/EventManager.component';

const routes: Routes = [
    { path: 'ScreenManager',  component: ScreenManagerComponent },
    { path: 'ZoneManager',    component: ZoneManagerComponent },
    { path: 'WidgetManager',  component: WidgetManagerComponent },
    { path: 'EventManager',   component: EventManagerComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AgGridModule.withComponents([ScreenManagerComponent, ZoneManagerComponent, WidgetManagerComponent, EventManagerComponent]),
        NgSelectModule,
        TextMaskModule
    ],

    declarations: [ScreenManagerComponent, ZoneManagerComponent, WidgetManagerComponent, EventManagerComponent],

    exports: [
        RouterModule
    ]
})
export class SYSGenerateCodeModule { }
