import EncryptFunction from '../../../Utils/Function/EncryptFunction';
import {Storage} from '../../../Utils/Function/Storage';

export default async function GetRecentLocationFunction() {
  const userState = await Storage.getItem('userState');
  const token = userState.jwtToken;
  const uuid = userState.uuid;

  const encryptedUuid = EncryptFunction({data: uuid});
  console.log(encryptedUuid);

  const encodedUuid = encodeURIComponent(encryptedUuid);
  console.log(encodedUuid);
  return;

  const result = await fetch(
    `${process.env.API}/recent/location?memberUuid=${encodedUuid}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const res = await result.json();

  return res;
}
