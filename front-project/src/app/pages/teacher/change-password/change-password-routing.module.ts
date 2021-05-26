import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherChangePasswordComponent } from './change-password.component';

const routes: Routes = [{path: '', component: TeacherChangePasswordComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangePasswordRoutingModule { }
