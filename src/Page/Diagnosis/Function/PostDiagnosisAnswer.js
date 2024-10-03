import {Storage} from '../../../Utils/Function/Storage';

export default async function PostDiagnosisAnswer({diagnosisAnswer}) {
  const userState = await Storage.getItem('userState');

  const uuid = userState.uuid;
  const token = userState.jwtToken;

  const result = await fetch(`${process.env.API}/diagnosis/finish`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      memberUuid: uuid,
      map: diagnosisAnswer,
    }),
  });

  const res = await result.json();
  console.log('diagnosis result parse:', res);

  return res;
}
