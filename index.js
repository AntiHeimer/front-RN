import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BackgroundGeolocation from 'react-native-background-geolocation';

// // BackgroundGeolocation 초기화 함수
// const initializeBackgroundGeolocation = () => {
//   BackgroundGeolocation.ready({
//     desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
//     distanceFilter: 10,
//     stopOnTerminate: false,
//     startOnBoot: true,
//     debug: true, // 디버그 모드 활성화
//   })
//     .then(state => {
//       console.log('[BackgroundGeolocation] is ready', state);

//       // 위치 추적이 활성화되지 않은 경우, 시작
//       if (!state.enabled) {
//         console.log('[BackgroundGeolocation] is not enabled, starting...');
//         BackgroundGeolocation.start();
//       }

//       // 위치 업데이트 이벤트 리스너 등록
//       BackgroundGeolocation.onLocation(location => {
//         console.log('[onLocation] -', location);
//       });

//       // 에러 핸들러 등록
//       BackgroundGeolocation.onError(error => {
//         console.error('[onError] -', error);
//       });
//     })
//     .catch(error => {
//       console.error('[BackgroundGeolocation] Error:', error);
//     });
// };

// // BackgroundGeolocation 초기화
// initializeBackgroundGeolocation();

// 앱 등록
AppRegistry.registerComponent(appName, () => App);
