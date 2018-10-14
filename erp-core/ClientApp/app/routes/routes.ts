import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';

export const routes : Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'mainmaterial', loadChildren: './warehouse/mainmaterial.module#MainmaterialModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
        ]
    },

    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },

    // Not found
    { path: '**', redirectTo: 'home' }

];
