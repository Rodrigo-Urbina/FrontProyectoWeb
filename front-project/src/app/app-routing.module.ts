import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADMIN_DASHBOARD, ADMIN_LIST_ADMINS, ADMIN_LIST_TEACHERS, ADMIN_LIST_USERS, ADMIN_LOGIN, ADMIN_PROFILE, ADMIN_TRANSACTIONS, CATALOG_TEACHERS, CHANGE_PASSWORD, CONFIG_DASHBOARD, COUNSELING, COUNSELINGS, DASHBOARD, DETAIL_COUNSELING, DETAIL_TEACHER, LOGIN, PAYMENT_METHODS, PROFILE, RECOVER_PASSWORD, REGISTER, SUSCRIPTION, TEACHER_CHANGE_PASSWORD, TEACHER_CONFIG_DASHBOARD, TEACHER_COUNSELING, TEACHER_DASHBOARD, TEACHER_DETAIL_COUNSELING, TEACHER_LOGIN, TEACHER_PAYMENT_METHODS, TEACHER_PROFILE, TEACHER_RECOVER_PASSWORD, TEACHER_REGISTER, TEACHER_WEEK_SCHEDULE } from './constants/paths';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: LOGIN,
    pathMatch: 'full'
  },
  { // ------------------------- STUDENT PATHS -------------------------
    path: LOGIN,
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./pages/student/login/login.module').then( m => m.LoginModule)
  },
  {
    path: REGISTER,
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./pages/student/register/register.module').then( m => m.RegisterModule)
  },
  {
    path: DASHBOARD,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: CATALOG_TEACHERS,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/catalog-teachers/catalog-teachers.module').then( m => m.CatalogTeachersModule)
  },
  {
    path: CHANGE_PASSWORD,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/catalog-teachers/catalog-teachers.module').then( m => m.CatalogTeachersModule)
  },
  {
    path: CONFIG_DASHBOARD,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/config-dashboard/config-dashboard.module').then( m => m.ConfigDashboardModule)
  },
  {
    path: COUNSELING,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/counseling/counseling.module').then( m => m.CounselingModule)
  },
  {
    path: COUNSELINGS,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/counselings/counselings.module').then( m => m.CounselingsModule)
  },
  {
    path: DETAIL_COUNSELING,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/detail-counseling/detail-counseling.module').then( m => m.DetailCounselingModule)
  },
  {
    path: DETAIL_TEACHER,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/detail-teacher/detail-teacher.module').then( m => m.DetailTeacherModule)
  },
  {
    path: PAYMENT_METHODS,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/payment-methods/payment-methods.module').then( m => m.PaymentMethodsModule)
  },
  {
    path: PROFILE,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/profile/profile.module').then( m => m.ProfileModule)
  },
  {
    path: RECOVER_PASSWORD,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/recover-password/recover-password.module').then( m => m.RecoverPasswordModule)
  },
  {
    path: SUSCRIPTION,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/student/suscription/suscription.module').then( m => m.SuscriptionModule)
  },
  { // ------------------------- ADMIN PATHS -------------------------
    path: ADMIN_DASHBOARD,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: ADMIN_LIST_TEACHERS,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/list-teachers/list-teachers.module').then( m => m.ListTeachersModule)
  },
  {
    path: ADMIN_LIST_USERS,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/list-users/list-users.module').then( m => m.ListUsersModule)
  },
  {
    path: ADMIN_LIST_ADMINS,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/list-admins/list-admins.module').then( m => m.ListAdminsModule)
  },
  {
    path: ADMIN_LOGIN,
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./pages/admin/login/login.module').then( m => m.LoginModule)
  },
  {
    path: ADMIN_PROFILE,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/profile/profile.module').then( m => m.ProfileModule)
  },
  {
    path: ADMIN_TRANSACTIONS,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/admin/transactions/transactions.module').then( m => m.TransactionsModule)
  },
  { // ------------------------- TEACHER PATHS -------------------------
    path: TEACHER_CHANGE_PASSWORD,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/teacher/change-password/change-password.module').then( m => m.ChangePasswordModule)
  },
  {
    path: TEACHER_CONFIG_DASHBOARD,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/teacher/config-dashboard/config-dashboard.module').then( m => m.ConfigDashboardModule)
  },
  {
    path: TEACHER_COUNSELING,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/teacher/counseling/counseling.module').then( m => m.CounselingModule)
  },
  {
    path: TEACHER_DASHBOARD,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/teacher/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: TEACHER_DETAIL_COUNSELING,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/teacher/detail-counseling/detail-counseling.module').then( m => m.DetailCounselingModule)
  },
  {
    path: TEACHER_LOGIN,
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./pages/teacher/login/login.module').then( m => m.LoginModule)
  },
  {
    path: TEACHER_PAYMENT_METHODS,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/teacher/payment-methods/payment-methods.module').then( m => m.PaymentMethodsModule)
  },
  {
    path: TEACHER_PROFILE,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/teacher/profile/profile.module').then( m => m.ProfileModule)
  },
  {
    path: TEACHER_RECOVER_PASSWORD,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/teacher/recover-password/recover-password.module').then( m => m.RecoverPasswordModule)
  },
  {
    path: TEACHER_REGISTER,
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./pages/teacher/register/register.module').then( m => m.RegisterModule)
  },
  {
    path: TEACHER_WEEK_SCHEDULE,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/teacher/week-schedule/week-schedule.module').then( m => m.WeekScheduleModule)
  },
  { // Prevent Random Routes
    path: '**',
    redirectTo: LOGIN,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
