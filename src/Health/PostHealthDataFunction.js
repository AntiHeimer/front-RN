import {Storage} from '../Utils/Function/Storage';
import {
  DateFormattingFunction1,
  DateFormattingFunction2,
} from './DateFormattingFunction';
import HealthKitService from './HealthkitService';

/**
 * iOS HealthKit 데이터를 가져와 서버로 전송하는 공통 함수
 *
 * @param {Object} params - 공통 파라미터
 * @param {string} params.type - 'active', 'move', 'sleep', 'walk' 중 하나
 * @param {string} params.startDate - 건강 데이터 조회 시작 날짜
 * @param {string} [params.endDate] - 건강 데이터 조회 끝 날짜 (optional)
 *
 * @returns {Promise<void>} - 전송 성공 여부를 포함하는 JSON 객체
 */
async function PostHealthDataFunction({type, startDate, endDate}) {
  let data;

  switch (type) {
    case 'active':
      // 'active' 타입의 데이터 가져오기
      data = await HealthKitService.getActivitySummary({startDate});
      if (data.length === 0) return; // 데이터가 없으면 반환
      // 'active' 타입의 경우 첫 번째 요소의 activeEnergyBurned를 추출
      data = data[0].activeEnergyBurned;
      break;

    case 'move':
      // 'move' 타입의 데이터 가져오기 및 포맷팅
      data = await HealthKitService.getDailyDistanceWalkingRunning({
        startDate,
        endDate,
      });

      if (data.length === 0) return; // 데이터가 없으면 반환
      data = DateFormattingFunction1(data); // 데이터 포맷팅
      data = data.filter(item => item.startDateTime.startsWith(startDate)); // 필터링
      break;

    case 'sleep':
      // 'sleep' 타입의 데이터 가져오기 및 포맷팅
      data = await HealthKitService.getSleepData({startDate, endDate});
      if (data.length === 0) return; // 데이터가 없으면 반환
      data = DateFormattingFunction2(data); // 데이터 포맷팅
      break;

    case 'walk':
      // 'walk' 타입의 데이터 가져오기 및 포맷팅
      data = await HealthKitService.getStepCount({startDate, endDate});
      if (data.length === 0) return; // 데이터가 없으면 반환
      data = DateFormattingFunction1(data); // 데이터 포맷팅
      break;

    default:
      // 유효하지 않은 타입 처리
      throw new Error('Invalid type provided');
  }

  const userState = await Storage.getItem('userState');
  const token = userState.jwtToken;
  const uuid = userState.uuid;

  // 서버로 데이터 전송
  const result = await fetch(`${process.env.API}/health-data/save/${type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      memberUuid: uuid,
      date: startDate,
      [`${type}Data`]: data, // 데이터 타입에 맞게 전송
    }),
  });

  const res = await result.json();

  return res;
}

// 'active' 데이터 전송 함수
export async function PostActiveFunction({startDate}) {
  return PostHealthDataFunction({type: 'active', startDate});
}

// 'move' 데이터 전송 함수
export async function PostMoveFunction({startDate, endDate}) {
  return PostHealthDataFunction({type: 'move', startDate, endDate});
}

// 'sleep' 데이터 전송 함수
export async function PostSleepFunction({startDate, endDate}) {
  return PostHealthDataFunction({type: 'sleep', startDate, endDate});
}

// 'walk' 데이터 전송 함수
export async function PostWalkFunction({startDate, endDate}) {
  return PostHealthDataFunction({type: 'walk', startDate, endDate});
}
