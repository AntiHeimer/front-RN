import EncryptFunction from '../../../Utils/Function/EncryptFunction';
import GetBirthFunction from './GetBirthFunction';
import GetGenderFunction from './GetGenderFunction';

export default async function SignUpFunction({name, id, password}) {
  const gender = await GetGenderFunction(); // healthkit에서 성별 불러오기
  const birth = await GetBirthFunction(); // healthkit에서 생년월일 불러오기

  // 데이터 객체에 담기
  const data = JSON.stringify({
    name: name,
    id: id,
    pw: password,
    gender: gender,
    birth: birth,
  });

  // 데이터 암호화
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
