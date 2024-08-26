import {Storage} from '../../../Utils/Function/Storage';

export default async function RegisterWardFunction({userId}) {
  const userState = await Storage.getItem('userState');

  const uuid = userState.uuid;
  const token = userState.jwtToken;

  const result = await fetch(`${process.env.API}/register/ward`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      Autorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ward: userId,
      uuid: uuid,
    }),
  });

  const res = await result.json();
  console.log('Register Ward result: %o', res);

  return res;
}
