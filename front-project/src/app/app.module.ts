import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

//App Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Admin Modules
import { AdminDashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ListUsersComponent } from './pages/admin/list-users/list-users.component';
import { ListTeachersComponent } from './pages/admin/list-teachers/list-teachers.component';
import { TransactionsComponent } from './pages/admin/transactions/transactions.component';
import { AdminLoginComponent } from './pages/admin/login/login.component';

//Student Modules
import { LoginComponent } from './pages/student/login/login.component';
import { RegisterComponent } from './pages/student/register/register.component';
import { RecoverPasswordComponent } from './pages/student/recover-password/recover-password.component';
import { DashboardComponent } from './pages/student/dashboard/dashboard.component';
import { CatalogTeachersComponent } from './pages/student/catalog-teachers/catalog-teachers.component';
import { DetailTeacherComponent } from './pages/student/detail-teacher/detail-teacher.component';
import { CounselingComponent } from './pages/student/counseling/counseling.component';
import { ProfileComponent } from './pages/student/profile/profile.component';
import { ConfigDashboardComponent } from './pages/student/config-dashboard/config-dashboard.component';
import { DetailCounselingComponent } from './pages/student/detail-counseling/detail-counseling.component';
import { PaymentMethodsComponent } from './pages/student/payment-methods/payment-methods.component';
import { SuscriptionComponent } from './pages/student/suscription/suscription.component';


//Teacher Modules
import { ChangePasswordComponent } from './pages/teacher/change-password/change-password.component';


//Shared Modules
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

//Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    RecoverPasswordComponent,
    ChangePasswordComponent,
    AdminDashboardComponent,
    CatalogTeachersComponent,
    DetailTeacherComponent,
    CounselingComponent,
    ProfileComponent,
    ConfigDashboardComponent,
    DetailCounselingComponent,
    PaymentMethodsComponent,
    SuscriptionComponent,
    ListUsersComponent,
    ListTeachersComponent,
    TransactionsComponent,
    DashboardComponent,
    FooterComponent,
    AdminLoginComponent,
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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
