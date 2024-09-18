import EncryptFunction from '../../../Utils/Function/EncryptFunction';
import GetBirthFunction from './GetBirthFunction';
import GetGenderFunction from './GetGenderFunction';

/**
 * 사용자가 입력필드로 입력한 정보를 서버로 전송회 회원가입을 수행하는 함수
 *
 * 이 함수는 사용자 이름, ID와 비밀번호를 받아 JSON 형식으로 변환한 후, 암호화하여 서버에 로그인 요청을 보냄
 *
 * 서버의 응답을 JSON 형식으로 반환
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.name - 사용자가 입력 필드에 입력한 사용자 이름
 * @param {string} props.id  - 사용자가 입력 필드에 입력한 아이디
 * @param {string} props.password - 사용자가 입력 필드에 입력한 비밀번호
 *
 * @returns {Promise<void>} - 서버의 응답을 포함하는 Promise
 */

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

  return res;
}
