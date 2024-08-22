import {Storage} from '../Storage';
import HealthKitService from './HealthkitService';

import DateFormattingFunction from './DateFormattingFunction';

export default async function PostWalkFunction() {
  const walkData = await HealthKitService.getStepCount(
    '2024-08-21',
    '2024-08-22',
  );

  const formattedWalkData = DateFormattingFunction(walkData);
  console.log(formattedWalkData);
  const userState = await Storage.getItem('userState');

  const uuid = userState.uuid;
  const token = userState.jwtToken;

  const result = await fetch(`${process.env.API}/save/walk`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      memberUuid: uuid,
      date: '2024-08-21',
      walkData: formattedWalkData,
    }),
  });

  const res = await result.json();
  console.log(res);
}
