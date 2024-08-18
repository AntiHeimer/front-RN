import CryptoJS from 'react-native-crypto-js';

export default function EncryptFunction({data}) {
  const secretKey = process.env.SECRET_KEY;
  const initVector = process.env.AES_IV;

  console.log('secretkey: %o, initvector: %o', secretKey, initVector);

  const encodedData = CryptoJS.enc.Utf8.parse(data);
  const encodedKey = CryptoJS.enc.Utf8.parse(secretKey);
  const encodedIV = CryptoJS.enc.Utf8.parse(initVector);

  const options = {
    iv: encodedIV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  };

  const encryptedData = CryptoJS.AES.encrypt(
    encodedData,
    encodedKey,
    options,
  ).toString();

  return encryptedData;
}
