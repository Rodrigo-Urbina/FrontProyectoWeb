import { LOGIN, REGISTER, DASHBOARD, CATALOG_TEACHERS, CHANGE_PASSWORD, CONFIG_DASHBOARD, COUNSELING, DETAIL_COUNSELING, DETAIL_TEACHER, PAYMENT_METHODS, PROFILE, RECOVER_PASSWORD, SUSCRIPTION, TEACHER_CHANGE_PASSWORD, TEACHER_CONFIG_DASHBOARD, TEACHER_COUNSELING, TEACHER_DASHBOARD, TEACHER_DETAIL_COUNSELING, TEACHER_LOGIN, TEACHER_PAYMENT_METHODS, TEACHER_PROFILE, TEACHER_RECOVER_PASSWORD, TEACHER_REGISTER, ADMIN_DASHBOARD, ADMIN_LIST_TEACHERS, ADMIN_LIST_USERS, ADMIN_LOGIN, ADMIN_PROFILE, ADMIN_TRANSACTIONS, COUNSELINGS, ADMIN_LIST_ADMINS, TEACHER_WEEK_SCHEDULE } from './paths';
import { TRoles } from './roles';

export const USERROLE/*: Record<TRoles, object>*/ = {
  'student': {
    'urls': [
      LOGIN,
      REGISTER,
      DASHBOARD,
      CATALOG_TEACHERS,
      CHANGE_PASSWORD,
      CONFIG_DASHBOARD,
      COUNSELING,
      COUNSELINGS,
      DETAIL_COUNSELING,
      DETAIL_TEACHER,
      PAYMENT_METHODS,
      PROFILE,
      RECOVER_PASSWORD,
      SUSCRIPTION
    ],
    'homePage': DASHBOARD,
    'login': LOGIN,
    'config': CONFIG_DASHBOARD,
  },
  'teacher': {
    'urls': [
      TEACHER_CHANGE_PASSWORD,
      TEACHER_CONFIG_DASHBOARD,
      TEACHER_COUNSELING,
      TEACHER_DASHBOARD,
      TEACHER_DETAIL_COUNSELING,
      TEACHER_LOGIN,
      TEACHER_PAYMENT_METHODS,
      TEACHER_PROFILE,
      TEACHER_RECOVER_PASSWORD,
      TEACHER_REGISTER,
      TEACHER_WEEK_SCHEDULE
    ],
    'homePage': TEACHER_DASHBOARD,
    'login': TEACHER_LOGIN,
    'config': TEACHER_CONFIG_DASHBOARD,
  },
  'admin': {
    'urls': [
      ADMIN_DASHBOARD,
      ADMIN_LIST_TEACHERS,
      ADMIN_LIST_USERS,
      ADMIN_LIST_ADMINS,
      ADMIN_LOGIN,
      ADMIN_PROFILE,
      ADMIN_TRANSACTIONS
    ],
    'homePage': ADMIN_DASHBOARD,
    'login': ADMIN_LOGIN,
    'config': ADMIN_DASHBOARD
  }
}

export function getUrls(role: number) {
  switch (role) {
    case 1: return USERROLE.admin.urls
      break;
    case 2: return USERROLE.teacher.urls
      break;
    case 3: return USERROLE.student.urls
      break;
    default: return USERROLE.student.urls
      break;
  }
}
