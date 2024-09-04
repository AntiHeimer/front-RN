import {Storage} from './Storage';

export default async function isTokenValidFunction() {
  const userState = Storage.getItem('userState');
  const token = userState.token;

  const result = await fetch(`${process.env.API}/check-token`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const res = result.json();

  if (res.statusCode == '200') {
    return true;
  }

  return false;
}
