import appleHealthKit from 'react-native-health';

export const HealthKitService = {
  async initialize() {
    return new Promise((resolve, reject) => {
      const permissions = {
        permissions: {
          read: [
            appleHealthKit.Constants.Permissions.SleepAnalysis,
            appleHealthKit.Constants.Permissions.ActivitySummary,
            appleHealthKit.Constants.Permissions.StepCount,
            appleHealthKit.Constants.Permissions.DistanceWalkingRunning,
            appleHealthKit.Constants.Permissions.BiologicalSex,
            appleHealthKit.Constants.Permissions.DateOfBirth,
            appleHealthKit.Constants.Permissions.Weight,
          ],
        },
      };

      appleHealthKit.initHealthKit(permissions, error => {
        if (error) {
          console.error('[Error] Cannot grant permissions!');
          reject(error);
        } else {
          resolve();
        }
      });
    });
  },

  async getSleepData(startDate, endDate) {
    return new Promise((resolve, reject) => {
      const sleepOptions = {
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
      };

      appleHealthKit.getSleepSamples(sleepOptions, (error, result) => {
        if (error) {
          console.error('[Error] Failed to load Sleep Data');
          reject(error);
        } else {
          console.log('sleep data', result);
          resolve(result);
        }
      });
    });
  },

  async getActivitySummary(startDate, endDate) {
    return new Promise((resolve, reject) => {
      const activityOptions = {
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
      };

      appleHealthKit.getActivitySummary(activityOptions, (error, result) => {
        if (error) {
          console.error('[Error] Failed to load Activity Data');
          reject(error);
        } else {
          console.log('activity data', result);
          resolve(result);
        }
      });
    });
  },

  async getStepCount(startDate, endDate) {
    return new Promise((resolve, reject) => {
      const stepCountOptions = {
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
      };

      appleHealthKit.getDailyStepCountSamples(
        stepCountOptions,
        (error, result) => {
          if (error) {
            console.error('[Error] Failed to load StepCount Data');
            reject(error);
          } else {
            console.log('step count data', result);
            resolve(result);
          }
        },
      );
    });
  },

  async getBiologicalSex() {
    return new Promise((resolve, reject) => {
      appleHealthKit.getBiologicalSex(null, (error, result) => {
        if (error) {
          console.error('[Error] Failed to load Biological Sex');
          reject(error);
        } else {
          console.log('biological sex', result);
          resolve(result);
        }
      });
    });
  },

  async getDateOfBirth() {
    return new Promise((resolve, reject) => {
      appleHealthKit.getDateOfBirth(null, (error, result) => {
        if (error) {
          console.error('[Error] Failed to load Date of Birth');
          reject(error);
        } else {
          console.log('date of birth', result);
          resolve(result);
        }
      });
    });
  },

  async getLatestWeight() {
    return new Promise((resolve, reject) => {
      const weightOptions = {
        unit: 'kg',
      };

      appleHealthKit.getLatestWeight(weightOptions, (error, result) => {
        if (error) {
          console.error('[Error] Failed to get weight data');
          reject(error);
        } else {
          console.log('latest weight', result);
          resolve(result);
        }
      });
    });
  },

  async getDailyDistanceWalkingRunning(startDate, endDate) {
    return new Promise((resolve, reject) => {
      const distanceWalkingRunningOptions = {
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
        ascending: false,
        unit: 'meter',
      };

      appleHealthKit.getDailyDistanceWalkingRunningSamples(
        distanceWalkingRunningOptions,
        (error, result) => {
          if (error) {
            console.error(
              '[Error] Failed to get daily distance walking and running data',
            );
            reject(error);
          } else {
            console.log('daily distance walking and running', result);
            resolve(result);
          }
        },
      );
    });
  },
};

export default HealthKitService;
