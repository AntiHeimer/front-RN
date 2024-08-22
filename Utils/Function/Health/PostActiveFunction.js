import HealthKitService from '../HealthkitService';
import {Storage} from '../Storage';

export default async function PostActiveFunction() {
  const activityResult = await HealthKitService.getActivitySummary(
    '2024-08-11',
    '2024-08-12',
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
      date: '2024-08-11',
      activeData: activityResult,
    }),
  });

  const res = await result.json();
  console.log(res);
}
