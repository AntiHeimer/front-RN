import HealthKitService from '../HealthkitService';
import {Storage} from '../Storage';

function transformData(data) {
  function convertToLocalDateTime(dateString) {
    const date = new Date(dateString);
    return date.toISOString().replace('T', ' ').split('.')[0];
  }

  return data.map(item => ({
    endDateTime: convertToLocalDateTime(item.endDate),
    startDateTime: convertToLocalDateTime(item.startDate),
    value: Math.floor(item.value),
  }));
}

export default async function PostMoveFunction() {
  const moveData = await HealthKitService.getDailyDistanceWalkingRunning(
    '2024-08-21',
    '2024-08-22',
  );

  const formattedMoveData = transformData(moveData);
  //   console.log(formattedMoveData);
  const userState = await Storage.getItem('userState');

  const uuid = userState.uuid;
  const token = userState.jwtToken;

  const result = await fetch(`${process.env.API}/save/move`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      memberUuid: uuid,
      date: '2024-08-21',
      moveData: formattedMoveData,
    }),
  });

  const res = await result.json();
  console.log(res);
}
