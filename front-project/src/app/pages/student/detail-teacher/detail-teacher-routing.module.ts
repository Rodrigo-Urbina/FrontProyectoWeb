import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailTeacherComponent } from './detail-teacher.component';

const routes: Routes = [{path: '', component: DetailTeacherComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailTeacherRoutingModule { }
