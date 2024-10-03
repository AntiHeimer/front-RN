import {Storage} from '../../../Utils/Function/Storage';

export default async function RegisterFunction({userId, requestType}) {
  const userState = await Storage.getItem('userState');

  const uuid = userState.uuid;
  const token = userState.jwtToken;

  const result = await fetch(`${process.env.API}/relation/request`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      fromMemberUuid: uuid,
      toMemberId: userId,
      requestType: requestType,
    }),
  });

  const res = await result.json();
  console.log(res);

  return res;
}
