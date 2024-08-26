import appleHealthKit from 'react-native-health';

export const HealthKitService = {
  /**
   * HealthKit을 초기화하고 필요한 권한을 요청
   * @returns {Promise<void>} 초기화 완료 시 `resolve`, 오류 발생 시 `reject`
   */
  async initialize() {
    return new Promise((resolve, reject) => {
      // 요청할 권한 설정
      const permissions = {
        permissions: {
          read: [
            appleHealthKit.Constants.Permissions.SleepAnalysis,
            appleHealthKit.Constants.Permissions.ActivitySummary,
            appleHealthKit.Constants.Permissions.EnergyConsumed,
            appleHealthKit.Constants.Permissions.StepCount,
            appleHealthKit.Constants.Permissions.DistanceWalkingRunning,
            appleHealthKit.Constants.Permissions.BiologicalSex,
            appleHealthKit.Constants.Permissions.DateOfBirth,
            appleHealthKit.Constants.Permissions.Weight,
          ],
        },
      };

      // HealthKit 초기화 및 권한 요청
      appleHealthKit.initHealthKit(permissions, error => {
        if (error) {
          reject(error); // 권한 요청 실패 시 Promise를 실패로 처리
        } else {
          resolve(); // 초기화 성공 시 Promise를 성공으로 처리
        }
      });
    });
  },

  /**
   * 지정된 날짜 범위의 수면 데이터를 가져옴
   * @param {string} startDate - 데이터 검색 시작 날짜 (ISO 8601 형식)
   * @param {string} endDate - 데이터 검색 종료 날짜 (ISO 8601 형식)
   * @returns {Promise<object>} 수면 데이터 객체를 포함하는 Promise
   */
  async getSleepData({startDate, endDate}) {
    return new Promise((resolve, reject) => {
      // 수면 데이터 옵션 설정
      const sleepOptions = {
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
      };

      // 수면 데이터 요청
      appleHealthKit.getSleepSamples(sleepOptions, (error, result) => {
        if (error) {
          reject(error); // 데이터 로드 실패 시 Promise를 실패로 처리
        } else {
          console.log('sleep data', result); // 수면 데이터 로깅
          resolve(result); // 수면 데이터 반환
        }
      });
    });
  },

  /**
   * 지정된 날짜 범위의 활동 요약 데이터를 가져옴
   * @param {string} startDate - 데이터 검색 시작 날짜 (ISO 8601 형식)
   * @param {string} endDate - 데이터 검색 종료 날짜 (ISO 8601 형식)
   * @returns {Promise<object>} 활동 요약 데이터 객체를 포함하는 Promise
   */
  async getActivitySummary({startDate, endDate}) {
    return new Promise((resolve, reject) => {
      // 활동 요약 데이터 옵션 설정
      const activityOptions = {
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
        ascending: true, // optional
        includeManuallyAdded: true,
      };

      // 활동 요약 데이터 요청
      appleHealthKit.getActiveEnergyBurned(activityOptions, (error, result) => {
        if (error) {
          reject(error); // 데이터 로드 실패 시 Promise를 실패로 처리
        } else {
          console.log(result);
          resolve(result); // 활동 데이터 반환
        }
      });
    });
  },

  /**
   * 지정된 날짜 범위의 일일 걸음 수 데이터를 가져옴
   * @param {string} startDate - 데이터 검색 시작 날짜 (ISO 8601 형식)
   * @param {string} endDate - 데이터 검색 종료 날짜 (ISO 8601 형식)
   * @returns {Promise<object>} 일일 걸음 수 데이터 객체를 포함하는 Promise
   */
  async getStepCount({startDate, endDate}) {
    return new Promise((resolve, reject) => {
      // 걸음 수 데이터 옵션 설정
      const stepCountOptions = {
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
      };

      // 일일 걸음 수 데이터 요청
      appleHealthKit.getDailyStepCountSamples(
        stepCountOptions,
        (error, result) => {
          if (error) {
            reject(error); // 데이터 로드 실패 시 Promise를 실패로 처리
          } else {
            resolve(result); // 걸음 수 데이터 반환
          }
        },
      );
    });
  },

  /**
   * 지정된 날짜 범위의 일일 걷기 및 달리기 거리 데이터를 가져옴
   * @param {string} startDate - 데이터 검색 시작 날짜 (ISO 8601 형식)
   * @param {string} endDate - 데이터 검색 종료 날짜 (ISO 8601 형식)
   * @returns {Promise<object>} 일일 걷기 및 달리기 거리 데이터 객체를 포함하는 Promise
   */
  async getDailyDistanceWalkingRunning({startDate, endDate}) {
    return new Promise((resolve, reject) => {
      // 걷기 및 달리기 거리 데이터 옵션 설정
      const distanceWalkingRunningOptions = {
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
        ascending: false, // 내림차순 정렬
        unit: 'meter', // 거리 단위 설정 (미터)
      };

      // 일일 걷기 및 달리기 거리 데이터 요청
      appleHealthKit.getDailyDistanceWalkingRunningSamples(
        distanceWalkingRunningOptions,
        (error, result) => {
          if (error) {
            reject(error); // 데이터 로드 실패 시 Promise를 실패로 처리
          } else {
            resolve(result); // 거리 데이터 반환
          }
        },
      );
    });
  },

  /**
   * 생물학적 성별 데이터를 가져옴
   * @returns {Promise<object>} 생물학적 성별 데이터 객체를 포함하는 Promise
   */
  async getBiologicalSex() {
    return new Promise((resolve, reject) => {
      // 생물학적 성별 데이터 요청
      appleHealthKit.getBiologicalSex(null, (error, result) => {
        if (error) {
          reject(error); // 데이터 로드 실패 시 Promise를 실패로 처리
        } else {
          console.log('biological sex', result); // 생물학적 성별 데이터 로깅
          resolve(result); // 생물학적 성별 데이터 반환
        }
      });
    });
  },

  /**
   * 생년월일 데이터를 가져옴
   * @returns {Promise<object>} 생년월일 데이터 객체를 포함하는 Promise
   */
  async getDateOfBirth() {
    return new Promise((resolve, reject) => {
      // 생년월일 데이터 요청
      appleHealthKit.getDateOfBirth(null, (error, result) => {
        if (error) {
          reject(error); // 데이터 로드 실패 시 Promise를 실패로 처리
        } else {
          console.log('date of birth', result); // 생년월일 데이터 로깅
          resolve(result); // 생년월일 데이터 반환
        }
      });
    });
  },

  /**
   * 최신 체중 데이터를 가져옴
   * @returns {Promise<object>} 최신 체중 데이터 객체를 포함하는 Promise
   */
  async getLatestWeight() {
    return new Promise((resolve, reject) => {
      // 체중 데이터 옵션 설정
      const weightOptions = {
        unit: 'kg', // 체중 단위 설정 (킬로그램)
      };

      // 최신 체중 데이터 요청
      appleHealthKit.getLatestWeight(weightOptions, (error, result) => {
        if (error) {
          reject(error); // 데이터 로드 실패 시 Promise를 실패로 처리
        } else {
          console.log('latest weight', result); // 체중 데이터 로깅
          resolve(result); // 체중 데이터 반환
        }
      });
    });
  },
};

export default HealthKitService;
