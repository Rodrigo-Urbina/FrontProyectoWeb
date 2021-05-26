import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherPaymentMethodsComponent } from './payment-methods.component';

const routes: Routes = [{path: '', component: TeacherPaymentMethodsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentMethodsRoutingModule { }
