import HealthKitService from '../../../Utils/Function/HealthkitService';

export default async function GetBirthFunction() {
  const dateOfBirth = await HealthKitService.getDateOfBirth(); // healthkit에서 생년월일 불러옴

  // 생년월일 포맷팅
  const dateString = dateOfBirth.value;
  const date = new Date(dateString);
  const options = {year: 'numeric', month: '2-digit', day: '2-digit'};

  // ex) 2001-10-30
  const localDateOnly = date.toLocaleDateString('en-CA', options);

  return localDateOnly;
}
