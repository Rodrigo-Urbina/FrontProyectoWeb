import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { CalendarWeekHoursViewModule } from 'angular-calendar-week-hours-view';

//App Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Admin Modules
import { AdminDashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ListUsersComponent } from './pages/admin/list-users/list-users.component';
import { ListTeachersComponent } from './pages/admin/list-teachers/list-teachers.component';
import { ListAdminsComponent } from './pages/admin/list-admins/list-admins.component';
import { TransactionsComponent } from './pages/admin/transactions/transactions.component';
import { AdminLoginComponent } from './pages/admin/login/login.component';
import { AdminProfileComponent } from './pages/admin/profile/profile.component';

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
import { ChangePasswordComponent } from './pages/student/change-password/change-password.component';

//Teacher Modules
import { TeacherChangePasswordComponent } from './pages/teacher/change-password/change-password.component';
import { TeacherConfigDashboardComponent } from './pages/teacher/config-dashboard/config-dashboard.component';
import { TeacherCounselingComponent } from './pages/teacher/counseling/counseling.component';
import { TeacherDashboardComponent } from './pages/teacher/dashboard/dashboard.component';
import { TeacherDetailCounselingComponent } from './pages/teacher/detail-counseling/detail-counseling.component';
import { TeacherLoginComponent } from './pages/teacher/login/login.component';
import { TeacherPaymentMethodsComponent } from './pages/teacher/payment-methods/payment-methods.component';
import { TeacherProfileComponent } from './pages/teacher/profile/profile.component';
import { TeacherRecoverPasswordComponent } from './pages/teacher/recover-password/recover-password.component';
import { TeacherRegisterComponent } from './pages/teacher/register/register.component';

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
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    //App Components
    AppComponent,
    //Admin Components
    AdminDashboardComponent,
    ListUsersComponent,
    ListTeachersComponent,
    ListAdminsComponent,
    TransactionsComponent,
    AdminLoginComponent,
    AdminProfileComponent,
    //Student Components
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    DashboardComponent,
    CatalogTeachersComponent,
    DetailTeacherComponent,
    CounselingComponent,
    ProfileComponent,
    ConfigDashboardComponent,
    DetailCounselingComponent,
    PaymentMethodsComponent,
    SuscriptionComponent,
    ChangePasswordComponent,
    //Teacher
    TeacherChangePasswordComponent,
    TeacherConfigDashboardComponent,
    TeacherCounselingComponent,
    TeacherDashboardComponent,
    TeacherDetailCounselingComponent,
    TeacherLoginComponent,
    TeacherPaymentMethodsComponent,
    TeacherProfileComponent,
    TeacherRecoverPasswordComponent,
    TeacherRegisterComponent,
    //Shared
    NavbarComponent,
    FooterComponent,
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
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    //CalendarWeekHoursViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
