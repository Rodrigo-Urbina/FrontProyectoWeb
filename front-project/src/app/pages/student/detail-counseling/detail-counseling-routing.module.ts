import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCounselingComponent } from './detail-counseling.component';

const routes: Routes = [{path: '', component: DetailCounselingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailCounselingRoutingModule { }
