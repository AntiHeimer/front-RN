import {Storage} from '../../../Utils/Function/Storage';

export default async function GetDiagnosisSheet({num}) {
  const userState = await Storage.getItem('userState');
  const token = userState.jwtToken;

  const result = await fetch(`${process.env.API}/diagnosis/sheet?num=${num}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const res = await result.json();

  return res;
}
