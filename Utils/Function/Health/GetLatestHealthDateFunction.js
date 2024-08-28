import EncryptFunction from '../../../Utils/Function/EncryptFunction';
import {Storage} from '../../../Utils/Function/Storage';

/**
 * 저장된 헬스 데이터의 마지막 날짜를 리턴하는 함수
 *
 * 데이터 종류와 암호화된 사용자 uuid를 url 파라미터로 넣고 요청 전송
 *
 * @param {Object} params - 함수에 전달되는 매개변수
 * @param {string} params.data - 데이터 종류(active, move, sleep)
 *
 * @returns {Promise<Object>} - DB에 저장된 데이터의 가장 마지막 날짜를 포함하는 JSON 객체
 */
export default async function GetLatestHealthDateFunction({data}) {
  const userState = await Storage.getItem('userState');
  const uuid = userState.uuid;
  const token = userState.jwtToken;

  const encryptedUuid = EncryptFunction({data: uuid});
  const encodedUuid = encodeURIComponent(encryptedUuid);

  const result = await fetch(
    `${process.env.API}/recent?data=${data}&uuid=${encodedUuid}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const res = await result.json();

  return res;
}
