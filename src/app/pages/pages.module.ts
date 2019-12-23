import { NgModule } from "@angular/core";
import {Graficas1Component} from './graficas1/graficas1.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import{PagesComponent} from './pages.component';
import { SharedModule } from "../shared/shared.module";
@NgModule({
    declarations:[
    PagesComponent,
    DashboardComponent,
    Graficas1Component
    ],
    exports:[
    //PagesComponent,
    DashboardComponent,
    Graficas1Component
    ],
    imports:[
        SharedModule
    ]
})
export class PagesModule{}