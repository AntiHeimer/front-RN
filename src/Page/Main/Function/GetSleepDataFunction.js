import {Storage} from '../../../Utils/Function/Storage';

export default async function GetSleepDataFunction({uuid, date}) {
  const userState = await Storage.getItem('userState');
  const token = userState.jwtToken;

  const result = await fetch(`${process.env.API}/health-data/find/sleep`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      memberUuid: uuid,
      date: date,
    }),
  });

  const res = await result.json();
  console.log('get sleep data function:', res);

  return res;
}
