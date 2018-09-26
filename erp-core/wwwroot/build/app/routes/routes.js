"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layout_component_1 = require("../layout/layout.component");
exports.routes = [
    {
        path: '',
        component: layout_component_1.LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' }
        ]
    },
    // Not found
    { path: '**', redirectTo: 'home' }
];
//# sourceMappingURL=routes.js.map