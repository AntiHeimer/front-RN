import HealthKitService from './HealthkitService';
import {Storage} from '../Storage';

/**
 * iOS HealthKit 활동 데이터를 가져와 서버로 전송하는 함수
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.startDate - 건강 데이터 조회 시작 날짜
 *
 * @returns {Promise<void>} - 전송 성공 여부를 포함하는 JSON 객체
 */
export default async function PostActiveFunction({startDate}) {
  const activeData = await HealthKitService.getActivitySummary({
    startDate,
  });

  if (activeData.length == 0) return;

  const userState = await Storage.getItem('userState');
  const uuid = userState.uuid;

  const result = await fetch(`${process.env.API}/save/active`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      auth: process.env.AUTH_KEY,
    },
    body: JSON.stringify({
      memberUuid: uuid,
      date: startDate,
      activeData: activeData[0].activeEnergyBurned,
    }),
  });

  const res = await result.json();
  console.log(res);
}
