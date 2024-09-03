import EncryptFunction from '../../../Utils/Function/EncryptFunction';
import {Storage} from '../../../Utils/Function/Storage';

export default async function GetRecentLocationFunction({uuid}) {
  const userState = await Storage.getItem('userState');
  const token = userState.jwtToken;

  const encryptedUuid = EncryptFunction({data: uuid});
  const encodedUuid = encodeURIComponent(encryptedUuid);

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
