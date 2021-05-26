import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherCounselingComponent } from './counseling.component';

const routes: Routes = [{path: '', component: TeacherCounselingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounselingRoutingModule { }
