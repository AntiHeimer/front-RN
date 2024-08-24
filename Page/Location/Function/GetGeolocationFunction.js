import moment from 'moment';
import Geolocation from 'react-native-geolocation-service';

/**
 * 사용자의 현재 위치와 해당 위치를 가져온 시간을 반환하는 함수.
 *
 * @returns {Promise<Object>} - 위치 정보(위도, 경도)와 타임스탬프(날짜 및 시간)를 포함한 객체를 반환하는 Promise.
 */

export default async function GetGeoLocationFunction() {
  // 위치 권한 요청
  const permission = await Geolocation.requestAuthorization('always');

  // 권한이 부여된 경우 위치를 가져옴
  if (permission === 'granted') {
    return await new Promise((res, rej) => {
      // 현재 위치를 가져옴
      Geolocation.getCurrentPosition(
        position => {
          // 위치 정보에서 위도와 경도 및 타임스탬프를 추출
          const {latitude, longitude} = position.coords;
          const timestamp = position.timestamp;

          // 타임스탬프를 Date 객체로 변환
          const date = new Date(timestamp);
          const formattedDate = moment(date).format('YYYY-MM-DDTHH:mm:ss');

          // 위치와 포맷된 날짜를 포함하는 객체를 생성
          const location = {latitude, longitude};
          const locationData = {location, formattedDate};
          console.log(locationData);
          // Promise를 성공으로 처리
          res(locationData);
        },
        error => {
          // 위치를 가져오는 중 오류가 발생한 경우
          console.log(error);
          rej(error); // Promise를 실패로 처리
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}, // 위치 요청 옵션
      );
    });
  } else {
    // 위치 권한이 부여되지 않은 경우 오류를 발생
    throw new Error('Location permission not granted');
  }
}
