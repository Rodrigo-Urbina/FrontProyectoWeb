import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { // ------------------------- STUDENT PATHS -------------------------
    path: 'login',
    loadChildren: () => import('./pages/student/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/student/register/register.module').then( m => m.RegisterModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/student/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'catalog-teachers',
    loadChildren: () => import('./pages/student/catalog-teachers/catalog-teachers.module').then( m => m.CatalogTeachersModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/student/catalog-teachers/catalog-teachers.module').then( m => m.CatalogTeachersModule)
  },
  {
    path: 'config-dashboard',
    loadChildren: () => import('./pages/student/config-dashboard/config-dashboard.module').then( m => m.ConfigDashboardModule)
  },
  {
    path: 'counseling',
    loadChildren: () => import('./pages/student/counseling/counseling.module').then( m => m.CounselingModule)
  },
  {
    path: 'detail-counseling',
    loadChildren: () => import('./pages/student/detail-counseling/detail-counseling.module').then( m => m.DetailCounselingModule)
  },
  {
    path: 'detail-teacher',
    loadChildren: () => import('./pages/student/detail-teacher/detail-teacher.module').then( m => m.DetailTeacherModule)
  },
  {
    path: 'payment-methods',
    loadChildren: () => import('./pages/student/payment-methods/payment-methods.module').then( m => m.PaymentMethodsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/student/profile/profile.module').then( m => m.ProfileModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./pages/student/recover-password/recover-password.module').then( m => m.RecoverPasswordModule)
  },
  {
    path: 'suscription',
    loadChildren: () => import('./pages/student/suscription/suscription.module').then( m => m.SuscriptionModule)
  },
  { // ------------------------- ADMIN PATHS -------------------------
    path: 'admin/dashboard',
    loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'admin/list-teachers',
    loadChildren: () => import('./pages/admin/list-teachers/list-teachers.module').then( m => m.ListTeachersModule)
  },
  {
    path: 'admin/list-users',
    loadChildren: () => import('./pages/admin/list-users/list-users.module').then( m => m.ListUsersModule)
  },
  {
    path: 'admin/login',
    loadChildren: () => import('./pages/admin/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'admin/profile',
    loadChildren: () => import('./pages/admin/profile/profile.module').then( m => m.ProfileModule)
  },
  {
    path: 'admin/transactions',
    loadChildren: () => import('./pages/admin/transactions/transactions.module').then( m => m.TransactionsModule)
  },
  { // ------------------------- TEACHER PATHS -------------------------
    path: 'teacher/change-password',
    loadChildren: () => import('./pages/teacher/change-password/change-password.module').then( m => m.ChangePasswordModule)
  },
  {
    path: 'teacher/config-dashboard',
    loadChildren: () => import('./pages/teacher/config-dashboard/config-dashboard.module').then( m => m.ConfigDashboardModule)
  },
  {
    path: 'teacher/counseling',
    loadChildren: () => import('./pages/teacher/counseling/counseling.module').then( m => m.CounselingModule)
  },
  {
    path: 'teacher/dashboard',
    loadChildren: () => import('./pages/teacher/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'teacher/detail-counseling',
    loadChildren: () => import('./pages/teacher/detail-counseling/detail-counseling.module').then( m => m.DetailCounselingModule)
  },
  {
    path: 'teacher/login',
    loadChildren: () => import('./pages/teacher/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'teacher/payment-methods',
    loadChildren: () => import('./pages/teacher/payment-methods/payment-methods.module').then( m => m.PaymentMethodsModule)
  },
  {
    path: 'teacher/profile',
    loadChildren: () => import('./pages/teacher/profile/profile.module').then( m => m.ProfileModule)
  },
  {
    path: 'teacher/recover-password',
    loadChildren: () => import('./pages/teacher/recover-password/recover-password.module').then( m => m.RecoverPasswordModule)
  },
  {
    path: 'teacher/register',
    loadChildren: () => import('./pages/teacher/register/register.module').then( m => m.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
