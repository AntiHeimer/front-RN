import EncryptFunction from '../../../Utils/Function/EncryptFunction';

export default async function SignUpFunction({name, id, password}) {
  const data = {
    name: name,
    id: id,
    password: password,
  };

  const encryptedData = EncryptFunction({data: data});

  const result = await fetch(`${process.env.API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      auth: process.env.AHTU_KEY,
    },
    body: encryptedData,
  });

  const res = await result.json();

  return res;
}
