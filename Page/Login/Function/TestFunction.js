import EncryptFunction from '../../../Utils/Function/EncryptFunction';

export default function TestFunction() {
  const data = JSON.stringify({
    id: 'sejongsejongse',
    pw: 'qwer1234qwer1234',
    name: 'kwon',
    gender: 'female',
    birth: '2001-10-03',
  });

  const encryptedData = EncryptFunction({data: data});
  console.log(encryptedData);
}
