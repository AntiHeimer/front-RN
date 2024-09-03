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

export default PostLocationBackgroundTask;
