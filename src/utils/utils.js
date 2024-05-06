import RNZoomUsBridge from 'react-native-zoom-us-bridge';
import { ZOOM_APP_KEY, ZOOM_APP_SECRET } from 'react-native-dotenv';

const utils = {
  initializeZoomSDK: () => {
    if (!ZOOM_APP_KEY || !ZOOM_APP_SECRET) return false;
    RNZoomUsBridge.initialize(ZOOM_APP_KEY, ZOOM_APP_SECRET)
      .then((data) => console.log('INITIZE', data))
      .catch((err) => console.log(err));
  },
  joinMeeting: async (meetingId, userName, meetingPassword, linkVirtual) => {
    if (!meetingId || !userName || !meetingPassword)
      return utils._openLinkVirutal(linkVirtual);
    RNZoomUsBridge.joinMeeting(String(meetingId), userName, meetingPassword)
      .then()
      .catch((err) => {
        utils.initializeZoomSDK();
      });
  },
  _openLinkVirutal: (courseSessionVirtualClassUrl) => {
    Linking.canOpenURL(courseSessionVirtualClassUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(courseSessionVirtualClassUrl).finally(() => {});
        } else {
          console.log(
            "Don't know how to open URI: " + courseSessionVirtualClassUrl,
          );
        }
      })
      .catch((err) => {
        console.log('Openlink Error', err);
      });
  },
};

export default utils;
