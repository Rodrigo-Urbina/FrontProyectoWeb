import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounselingsComponent } from './counselings.component';

const routes: Routes = [{path: '', component: CounselingsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounselingsRoutingModule { }
