import EncryptFunction from '../../../Utils/Function/EncryptFunction';

export default async function LoginFunction({id, password}) {
  const data = {
    id: id,
    password: password,
  };

  const encryptedData = EncryptFunction({data: data});

  const result = await fetch(`${process.env.API_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      auth: process.env.AUTH_KEY,
    },
    body: encryptedData,
  });

  const res = await result.json();

  return res;
}
