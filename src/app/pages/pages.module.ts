import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
      ],
      exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
      ],
      imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule,
        ComponentsModule
      ]
})

export class PagesModule{ }
