import HealthKitService from '../../../Utils/Function/HealthkitService';

export default async function GetGenderFunction() {
  const gender = await HealthKitService.getBiologicalSex();

  return gender.value;
}
