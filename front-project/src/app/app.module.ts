import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/student/login/login.component';
import { RegisterComponent } from './pages/student/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RecoverPasswordComponent } from './pages/student/recover-password/recover-password.component';
import { ChangePasswordComponent } from './pages/teacher/change-password/change-password.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CatalogTeachersComponent } from './pages/student/catalog-teachers/catalog-teachers.component';
import { DetailTeacherComponent } from './pages/student/detail-teacher/detail-teacher.component';
import { CounselingComponent } from './pages/student/counseling/counseling.component';
import { ProfileComponent } from './pages/student/profile/profile.component';
import { ConfigDashboardComponent } from './pages/student/config-dashboard/config-dashboard.component';
import { DetailCounselingComponent } from './pages/student/detail-counseling/detail-counseling.component';
import { PaymentMethodsComponent } from './pages/student/payment-methods/payment-methods.component';
import { SuscriptionComponent } from './pages/student/suscription/suscription.component';

import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    RecoverPasswordComponent,
    ChangePasswordComponent,
    DashboardComponent,
    CatalogTeachersComponent,
    DetailTeacherComponent,
    CounselingComponent,
    ProfileComponent,
    ConfigDashboardComponent,
    DetailCounselingComponent,
    PaymentMethodsComponent,
    SuscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
