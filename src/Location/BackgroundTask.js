import BackgroundFetch from 'react-native-background-fetch';
import GetGeoLocationFunction from '../Page/Location/Function/GetGeolocationFunction';
import PostGeolocationFunction from '../Page/Location/Function/PostGeolocationFunction';

async function BackgroundTask() {
  const location = await GetGeoLocationFunction();
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

export default BackgroundTask;
