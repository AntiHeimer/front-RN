import HealthKitService from './HealthkitService';
import {Storage} from '../Storage';

/**
 * iOS HealthKit 활동 데이터를 가져와 서버로 전송하는 함수
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.startDate - 건강 데이터 조회 시작 날짜
 * @param {string} props.endDate - 건강 데이터 조회 끝 날짜
 *
 * @returns {Promise<void>} - 서버에서 반환되는 전송 완료 여부를 포함하는 JSON 객체
 */
export default async function PostActiveFunction({startDate, endDate}) {
  const activeData = await HealthKitService.getActivitySummary(
    startDate,
    endDate,
  );

  const userState = await Storage.getItem('userState');

  const uuid = userState.uuid;
  const token = userState.jwtToken;

  const result = await fetch(`${process.env.API}/save/active`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      memberUuid: uuid,
      date: startDate,
      activeData: activeData,
    }),
  });

  const res = await result.json();
  console.log(res);
}
