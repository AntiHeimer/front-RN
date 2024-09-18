import {Storage} from '../../../Utils/Function/Storage';

export default async function SaveWardFunction({
  notificationUuid,
  guardianUuid,
}) {
  const userState = await Storage.getItem('userState');
  const uuid = userState.uuid;
  const token = userState.jwtToken;

  const result = await fetch(`${process.env.API}/save-relation/ward`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      notificationUuid: notificationUuid,
      guardianUuid: guardianUuid,
      wardUuid: uuid,
    }),
  });

  const res = await result.json();

  return res;
}