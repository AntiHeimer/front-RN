import BackgroundFetch from 'react-native-background-fetch';
import GetGeoLocationFromDeviceFunction from './GetGeolocationFromDeviceFunction';
import PostGeolocationFunction from '../Page/Location/Function/PostGeolocationFunction';
import {Storage} from '../Utils/Function/Storage';

async function PostLocationBackgroundTask() {
  const userState = await Storage.getItem('userState');
  const uuid = userState?.uuid;
  if (!uuid) {
    return;
  }

  try {
    const location = await GetGeoLocationFromDeviceFunction();
    await PostGeolocationFunction({location});
    console.log('Location posted:', location);
  } catch (error) {
    console.error('Failed to fetch location:', error);
  }
}

// Background Fetch 설정
BackgroundFetch.configure(
  {
    minimumFetchInterval: 1, // 백그라운드 작업 실행 간격 (분 단위)
    stopOnTerminate: false, // 앱이 종료되었을 때 작업 중지 여부
    startOnBoot: true, // 디바이스 재시작 시 자동 실행 여부
    requiredNetworkType: BackgroundFetch.NETWORK_TYPE_ANY, // 네트워크 필요 조건 추가
    enableHeadless: true, // 헤드리스 모드 활성화 (백그라운드에서 실행 가능)
  },
  async taskId => {
    console.log('[BackgroundFetch] task start:', taskId);

    // 실제 백그라운드 작업 수행
    // await PostLocationBackgroundTask();
    console.log('backgrohnd');

    // 작업이 끝난 후 시스템에 완료 알림
    BackgroundFetch.finish(taskId);
  },
  error => {
    console.error('[BackgroundFetch] failed to start:', error);
  },
);

// 백그라운드 서비스 강제로 시작 (필요한 경우)
BackgroundFetch.start(() => {
  console.log('[BackgroundFetch] Service started');
});

// BackgroundFetch.stop(() => {
//   console.log('[BackgroundFetch] Stopped service');
//   // 서비스가 중지된 후 다시 시작
//   BackgroundFetch.start(() => {
//     console.log('[BackgroundFetch] Restarted service');
//   });
// });
export default PostLocationBackgroundTask;
