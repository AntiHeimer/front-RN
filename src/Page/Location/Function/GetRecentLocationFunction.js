import EncryptFunction from '../../../Utils/Function/EncryptFunction';
import {Storage} from '../../../Utils/Function/Storage';

export default async function GetRecentLocationFunction({memberUuid}) {
  console.log(memberUuid);
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
  console.log('get recent location function status:', result.status);
  const res = await result.json();
  console.log(res);

  return res;
}
