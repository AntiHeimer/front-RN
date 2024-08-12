import EncryptFunction from '../../../Utils/Function/EncryptFunction';

export default async function LogoutFunction({uuid, token}) {
  const encryptedUuid = EncryptFunction({data: uuid});

  const result = await fetch(`${process.env.API_URL}/logout/${encryptedUuid}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const res = await result.json();

  return res;
}
