import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigDashboardComponent } from './config-dashboard.component';

const routes: Routes = [{path: '', component: ConfigDashboardComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigDashboardRoutingModule { }
