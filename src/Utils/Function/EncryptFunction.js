import CryptoJS from 'react-native-crypto-js';

/**
 * AES 암호화 알고리즘을 사용하여 주어진 데이터를 암호화하는 함수
 *
 * @param {Object} params - 함수에 전달되는 매개변수 객체
 * @param {string} params.data - 암호화할 문자열 데이터
 * @returns {string} 암호화된 데이터 문자열
 */
export default function EncryptFunction({data}) {
  // 비밀 키와 초기화 벡터를 환경 변수에서 가져옴
  const secretKey = process.env.SECRET_KEY; // 문자열 형태의 비밀 키
  const initVector = process.env.AES_IV; // 문자열 형태의 초기화 벡터

  // 입력 데이터를 UTF-8로 인코딩하여 암호화에 사용할 형식으로 변환
  const encodedData = CryptoJS.enc.Utf8.parse(data); // 암호화할 데이터
  const encodedKey = CryptoJS.enc.Utf8.parse(secretKey); // 비밀 키를 암호화에 사용할 형식으로 변환
  const encodedIV = CryptoJS.enc.Utf8.parse(initVector); // 초기화 벡터를 암호화에 사용할 형식으로 변환

  // 암호화 옵션을 설정
  const options = {
    iv: encodedIV, // 초기화 벡터
    mode: CryptoJS.mode.CBC, // CBC (Cipher Block Chaining) 모드
    padding: CryptoJS.pad.Pkcs7, // PKCS7 패딩
  };

  // AES 암호화 알고리즘을 사용하여 데이터를 암호화
  const encryptedData = CryptoJS.AES.encrypt(
    encodedData, // 암호화할 데이터
    encodedKey, // 비밀 키
    options, // 암호화 옵션
  ).toString(); // 암호화된 데이터를 문자열로 변환

  // 암호화된 데이터를 반환
  return encryptedData;
}
