import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherConfigDashboardComponent } from './config-dashboard.component';

const routes: Routes = [{path: '', component: TeacherConfigDashboardComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigDashboardRoutingModule { }
