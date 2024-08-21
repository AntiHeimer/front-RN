import EncryptFunction from '../../../Utils/Function/EncryptFunction';
import GetBirthFunction from './GetBirthFunction';
import GetGenderFunction from './GetGenderFunction';

export default async function SignUpFunction({name, id, password}) {
  const gender = await GetGenderFunction();
  const birth = await GetBirthFunction();

  const data = JSON.stringify({
    name: name,
    id: id,
    pw: password,
    gender: gender,
    birth: birth,
  });

  const encryptedData = EncryptFunction({data: data});

  const result = await fetch(`${process.env.API}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      auth: process.env.AUTH_KEY,
    },
    body: encryptedData,
  });

  const res = await result.json();
  console.log('Sign Up Function: %o', res);

  return res;
}
