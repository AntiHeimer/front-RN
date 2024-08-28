import {Storage} from '../Storage';
import HealthKitService from '../HealthkitService';

import {DateFormattingFunction2} from '../DateFormattingFunction';

/**
 * iOS HealthKit 수면 데이터를 가져와 서버로 전송하는 함수
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.startDate - 건강 데이터 조회 시작 날짜
 * @param {string} props.endDate - 건강 데이터 조회 끝 날짜
 *
 * @returns {Promise<void>} - 전송 성공 여부를 포함하는 JSON 객체
 */
export default async function PostSleepFunction({startDate, endDate}) {
  const sleepData = await HealthKitService.getSleepData({startDate, endDate});

  if (sleepData.length == 0) return;

  const formattedSleepData = DateFormattingFunction2(sleepData);

  const userState = await Storage.getItem('userState');
  const token = userState.jwtToken;
  const uuid = userState.uuid;

  const result = await fetch(`${process.env.API}/save/sleep`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      memberUuid: uuid,
      date: startDate,
      sleepData: formattedSleepData,
    }),
  });

  const res = await result.json();
  console.log(res);

  return res;
}
