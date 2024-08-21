import HealthKitService from '../../../Utils/Function/HealthkitService';

export default async function GetBirthFunction() {
  const dateOfBirth = await HealthKitService.getDateOfBirth();
  const dateString = dateOfBirth.value;
  const date = new Date(dateString);
  const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
  const localDateOnly = date.toLocaleDateString('en-CA', options);

  return localDateOnly;
}
