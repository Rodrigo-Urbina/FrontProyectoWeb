import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDetailCounselingComponent } from './detail-counseling.component';

const routes: Routes = [{path: '', component: TeacherDetailCounselingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailCounselingRoutingModule { }
