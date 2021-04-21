import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherRecoverPasswordComponent } from './recover-password.component';

const routes: Routes = [{path: '', component: TeacherRecoverPasswordComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoverPasswordRoutingModule { }
