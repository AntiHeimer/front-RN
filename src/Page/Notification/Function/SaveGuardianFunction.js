import {Storage} from '../../../Utils/Function/Storage';

export default async function SaveGuardianFunction({
  notificationUuid,
  wardUuid,
}) {
  const userState = await Storage.getItem('userState');
  const uuid = userState.uuid;
  const token = userState.jwtToken;

  const result = await fetch(`${process.env.API}/save-relation/guardian`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      notificationUuid: notificationUuid,
      guardianUuid: uuid,
      wardUuid: wardUuid,
    }),
  });

  const res = await result.json();

  console.log(res);

  return res;
}
