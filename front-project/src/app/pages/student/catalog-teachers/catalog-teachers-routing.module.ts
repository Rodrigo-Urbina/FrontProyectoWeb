import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogTeachersComponent } from './catalog-teachers.component';

const routes: Routes = [{path: '', component: CatalogTeachersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogTeachersRoutingModule { }
