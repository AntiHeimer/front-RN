import EncryptFunction from '../../../Utils/Function/EncryptFunction';
import {Storage} from '../../../Utils/Function/Storage';

export default async function DeleteNotificationFunction({notificationUuid}) {
  const userState = await Storage('userState');
  const token = userState.jwtToken;

  const encryptedUuid = EncryptFunction({data: notificationUuid});
  const encodedUuid = encodeURIComponent(encryptedUuid);

  const result = await fetch(
    `${process.env.API}/delete-notification/${encodedUuid}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const res = await result.json();
  console.log(res);
  return res;
}
