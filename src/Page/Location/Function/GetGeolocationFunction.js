import {Storage} from '../../../Utils/Function/Storage';

export default async function GetGeolocationFunction({wardUuid}) {
  const userState = await Storage.getItem('userState');
  const uuid = userState.uuid;
  const token = userState.jwtToken;

  const result = await fetch(`${process.env.API}/location`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: {
      uuid: uuid,
      wardUuid: wardUuid,
    },
  });

  const res = await result.json();

  return res;
}
