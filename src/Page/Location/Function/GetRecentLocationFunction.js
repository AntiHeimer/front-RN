import EncryptFunction from '../../../Utils/Function/EncryptFunction';
import {Storage} from '../../../Utils/Function/Storage';

export default async function GetRecentLocationFunction() {
  const userState = await Storage.getItem('userState');
  const token = userState.jwtToken;
  const uuid = userState.uuid;

  const encryptedUuid = EncryptFunction({data: uuid});
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

  return res;
}
