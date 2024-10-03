import {Storage} from '../../../Utils/Function/Storage';

export default async function GetDementialCenterFunction({page}) {
  const userState = await Storage.getItem('userState');
  const token = userState.jwtToken;

  const result = await fetch(`${process.env.API}/dementia-center?page=1`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const res = await result.json();

  return res;
}
