import { LOGIN, REGISTER, STUDENTHOME } from './paths';

export const USERROLE = {
  'student': {
    'urls': [LOGIN, REGISTER, STUDENTHOME],
    'homePage': STUDENTHOME
  },
  'professor': {
    'urls': [LOGIN, REGISTER, STUDENTHOME],
    'homePage': STUDENTHOME
  },
  'admin': {
    'urls': [LOGIN, REGISTER, STUDENTHOME],
    'homePage': STUDENTHOME
  }
}
