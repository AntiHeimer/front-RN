import EncryptFunction from '../../../Utils/Function/EncryptFunction';
import {Storage} from '../../../Utils/Function/Storage';

export default async function GetWardsFunction() {
  const userState = await Storage.getItem('userState');
  const uuid = userState.uuid;
  const token = userState.jwtToken;

  const encryptedUuid = EncryptFunction({data: uuid});

  const result = await fetch(`${process.env.API}/get/ward/${encryptedUuid}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const res = await result.json();
}
