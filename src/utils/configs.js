import get from 'lodash/get';
import { Platform } from 'react-native';
import VersionCheck from 'react-native-version-check';
import { store } from '../redux/store';

export const turnOffBuyCourseIos = () =>
  !!(
    get(
      store.getState(),
      'home.schoolInfo.conf.turn_off_buy_course_ios',
      true,
    ) &&
    Platform.OS === 'ios' &&
    get(store.getState(), 'home.schoolInfo.conf.build_number_for_review_ios') ==
      VersionCheck.getCurrentBuildNumber()
  );
