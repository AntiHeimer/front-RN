import EncryptFunction from '../../../Utils/Function/EncryptFunction';
import {Storage} from '../../../Utils/Function/Storage';

export default async function GetRecentLocationFunction({memberUuid}) {
  const userState = await Storage.getItem('userState');
  const token = userState.jwtToken;

  const encryptedUuid = EncryptFunction({data: memberUuid});
  const encodedUuid = encodeURIComponent(encryptedUuid);

  const result = await fetch(
    `${process.env.API}/location/recent?memberUuid=${encodedUuid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const res = await result.json();
  // console.log(res);

  return res;
}
