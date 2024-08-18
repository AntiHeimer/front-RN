import EncryptFunction from '../../../Utils/Function/EncryptFunction';

export default async function LoginFunction({id, password}) {
  const data = JSON.stringify({
    id: id,
    pw: password,
  });

  const encryptedData = EncryptFunction({data: data});

  const result = await fetch(`${process.env.API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      auth: process.env.AUTH_KEY,
    },
    body: encryptedData,
  });

  const res = await result.json();
  console.log('Login Function: %o', res);

  return res;
}
