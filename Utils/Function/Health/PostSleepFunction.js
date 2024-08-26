import {Storage} from '../Storage';
import DateFormattingFunction2 from './DateFormattingFunction2';
import HealthKitService from './HealthkitService';

export default async function PostSleepFunction({startDate, endDate}) {
  const sleepData = await HealthKitService.getSleepData({startDate, endDate});

  if (sleepData.length == 0) return;

  const formattedSleepData = DateFormattingFunction2(sleepData);

  const userState = await Storage.getItem('userState');
  const uuid = userState.uuid;

  const result = await fetch(`${process.env.API}/save/sleep`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      auth: process.env.AUTH_KEY,
    },
    body: JSON.stringify({
      memberUuid: uuid,
      date: startDate,
      sleepData: formattedSleepData,
    }),
  });

  const res = await result.json();
}
