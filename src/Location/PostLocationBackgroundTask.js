import BackgroundGeolocation from 'react-native-background-geolocation';
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
// // Background Geolocation 설정 및 초기화
// BackgroundGeolocation.ready(
//   {
//     desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
//     distanceFilter: 0, // 시간 기반 업데이트를 위해 거리 필터를 0으로 설정
//     stopOnTerminate: false, // 앱이 종료되어도 위치 추적 유지
//     startOnBoot: true, // 디바이스 재부팅 시에도 위치 추적 시작
//     enableHeadless: true, // 헤드리스 모드 활성화
//     interval: 30 * 60 * 1000, // 30분 간격 (밀리초 단위)
//     fastestInterval: 15 * 60 * 1000, // 가장 빠른 간격 (밀리초 단위)
//     stationaryRadius: 50, // 정지 상태로 간주되는 반경
//   },
//   state => {
//     console.log('[BackgroundGeolocation] Ready:', state);
//     if (!state.enabled) {
//       BackgroundGeolocation.start(); // 위치 추적 시작
//     }
//   },
// );

// // 위치 이벤트 처리
// BackgroundGeolocation.onLocation(
//   location => {
//     console.log('[BackgroundGeolocation] Location:', location);
//     PostLocationBackgroundTask(location);
//   },
//   error => {
//     console.warn('[BackgroundGeolocation] Error:', error);
//   },
// );

export default PostLocationBackgroundTask;
