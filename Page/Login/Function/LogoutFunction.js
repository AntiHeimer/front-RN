import EncryptFunction from '../../../Utils/Function/EncryptFunction';

export default async function LogoutFunction({uuid}) {
  const encryptedUuid = EncryptFunction({data: uuid});

  const result = await fetch(`${process.env.API_URL}/logout/${encryptedUuid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
      auth: process.env.AUTH_KEY,
    },
  });

  const res = await result.json();

  return res;
}
