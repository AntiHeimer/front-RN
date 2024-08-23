import moment from 'moment';
import HealthKitService from '../../../Utils/Function/Health/HealthkitService';

export default async function GetBirthFunction() {
  const dateOfBirth = await HealthKitService.getDateOfBirth(); // healthkit에서 생년월일 불러옴

  const formattedDate = moment(dateOfBirth.value).format('YYYY-MM-DD');

  return formattedDate;
}
