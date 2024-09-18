import EncryptFunction from '../../../Utils/Function/EncryptFunction';

/**
 * 로그인 요청을 처리하는 함수
 *
 * 이 함수는 사용자 ID와 비밀번호를 받아 JSON 형식으로 변환한 후, 암호화하여 서버에 로그인 요청을 보냄
 *
 * 서버의 응답을 JSON 형식으로 반환
 *
 * @param {Object} params - 함수에 전달되는 매개변수
 * @param {string} params.id - 사용자의 ID
 * @param {string} params.password - 사용자의 비밀번호
 *
 * @returns {Promise<Object>} - 로그인 성공 여부를 포함하는 JSON 객체
 */

export default async function LoginFunction({id, password}) {
  // 사용자 ID와 비밀번호를 JSON 문자열로 변환
  const data = JSON.stringify({
    id: id,
    pw: password,
  });

  // JSON 문자열을 암호화
  const encryptedData = EncryptFunction({data: data});

  // 로그인 API 요청 보내기
  const result = await fetch(`${process.env.API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain', // 요청 본문은 텍스트 형식으로 전송
      auth: process.env.AUTH_KEY, // 인증 키 헤더
    },
    body: encryptedData, // 암호화된 데이터를 요청 본문으로 사용
  });

  // 서버 응답을 JSON 형식으로 파싱
  const res = await result.json();

  return res;
}
