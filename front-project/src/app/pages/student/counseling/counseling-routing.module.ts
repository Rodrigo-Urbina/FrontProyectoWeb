import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounselingComponent } from './counseling.component';

const routes: Routes = [{path: '', component: CounselingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounselingRoutingModule { }
