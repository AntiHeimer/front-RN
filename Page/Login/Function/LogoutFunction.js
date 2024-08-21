import EncryptFunction from '../../../Utils/Function/EncryptFunction';

/**
 * 로그아웃 요청을 처리하는 함수
 *
 * 이 함수는 사용자의 UUID를 암호화한 후, 로그아웃 API에 GET 요청을 보냄
 * 요청 시 사용자의 인증 토큰을 헤더에 포함
 *
 * 서버의 응답을 JSON 형식으로 반환
 *
 * @param {Object} params - 함수에 전달되는 매개변수
 * @param {string} params.uuid - 사용자의 UUID (문자열)
 * @param {string} params.token - 사용자의 인증 토큰 (문자열)
 *
 * @returns {Promise<Object>} - 서버의 응답을 포함하는 JSON 객체
 */

export default async function LogoutFunction({uuid, token}) {
  // UUID를 암호화
  const encryptedUuid = EncryptFunction({data: uuid});

  // 로그아웃 API 요청 보내기
  const result = await fetch(`${process.env.API_URL}/logout/${encryptedUuid}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`, // 인증 토큰을 헤더에 포함
    },
  });

  // 서버 응답을 JSON 형식으로 파싱
  const res = await result.json();

  return res;
}
