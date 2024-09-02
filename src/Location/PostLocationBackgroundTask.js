import BackgroundFetch from 'react-native-background-fetch';
import GetGeoLocationFromDeviceFunction from './GetGeolocationFromDeviceFunction';
import PostGeolocationFunction from '../Page/Location/Function/PostGeolocationFunction';
import {Storage} from '../Utils/Function/Storage';

async function PostLocationBackgroundTask() {
  const userState = await Storage.getItem('userState');
  const uuid = userState.uuid;
  if (uuid == undefined || uuid == null) {
    return;
  }

  const location = await GetGeoLocationFromDeviceFunction();
  PostGeolocationFunction({location: location});

  return;
}

BackgroundFetch.configure(
  {
    minimumFetchInterval: 30,
    stopOnTerminate: false,
    startOnBoot: true,
  },
  async taskId => {
    console.log('[BackgroundFetch] task start', taskId);
    await BackgroundTask();
  },
  error => {
    console.error('[BackgroundFetch] failed to start', error);
  },
);

export default PostLocationBackgroundTask;
