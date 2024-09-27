import {Storage} from '../../../Utils/Function/Storage';

export default async function GetWalkDataFunction({uuid, date}) {
  const userState = await Storage.getItem('userState');
  const token = userState.jwtToken;

  const result = await fetch(`${process.env.API}/health-data/find/walk`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      memberUuid: uuid,
      date: date,
    }),
  });

  const res = await result.json();
  console.log('get walk data function:', res);

  return res;
}
