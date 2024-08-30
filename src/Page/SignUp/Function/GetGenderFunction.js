import HealthKitService from '../../../Health/HealthkitService';

export default async function GetGenderFunction() {
  const gender = await HealthKitService.getBiologicalSex(); // healthkit에서 성별 불러옴

  // male, female
  return gender.value;
}
