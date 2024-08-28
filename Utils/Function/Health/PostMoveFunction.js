import {Storage} from '../Storage';
import HealthKitService from './HealthkitService';

import DateFormattingFunction from '../DateFormattingFunction';

/**
 * iOS HealthKit 거리 데이터를 가져와 서버로 전송하는 함수
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.startDate - 건강 데이터 조회 시작 날짜
 * @param {string} props.endDate - 건강 데이터 조회 끝 날짜
 *
 * @returns {Promise<void>} - 데이터 전송이 완료되면 완료되는 Promise
 */
export default async function PostMoveFunction({startDate, endDate}) {
  const moveData = await HealthKitService.getDailyDistanceWalkingRunning({
    startDate,
    endDate,
  });

  const formattedMoveData = DateFormattingFunction(moveData);
  const filteredData = formattedMoveData.filter(item =>
    item.startDateTime.startsWith(startDate),
  );

  const userState = await Storage.getItem('userState');
  const token = userState.jwtToken;
  const uuid = userState.uuid;

  const result = await fetch(`${process.env.API}/save/move`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      memberUuid: uuid,
      date: startDate,
      moveData: filteredData,
    }),
  });

  const res = await result.json();
  console.log(res);

  return res;
}
