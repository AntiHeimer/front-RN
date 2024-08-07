import appleHealthKit from 'react-native-health';
export default function GetPermissionFunction() {
  const permissions = {
    permissions: {
      read: [
        appleHealthKit.Constants.Permissions.SleepAnalysis,
        appleHealthKit.Constants.Permissions.ActivitySummary,
        appleHealthKit.Constants.Permissions.StepCount,
      ],
    },
  };

  appleHealthKit.initHealthKit(permissions, error => {
    if (error) {
      console.log('[Error] Cannot grant permissions!');
    }

    const options = {
      startDate: new Date(2024, 5, 27).toISOString(),
    };

    const stepCountOptions = {
      startDate: new Date(2024, 7, 1).toISOString(),
      endDate: new Date(2024, 7, 30).toISOString(),
    };

    appleHealthKit.getSleepSamples(options, (error, result) => {
      if (error) {
        console.log('[Error] Failed to load Sleep Data');
      }

      console.log('sleep data', result);
    });

    appleHealthKit.getActivitySummary(options, (error, result) => {
      if (error) {
        console.log('[Error] Failed to load Activity Data');
      }

      console.log('activity data', result);
    });

    appleHealthKit.getDailyStepCountSamples(
      stepCountOptions,
      (error, result) => {
        if (error) {
          console.log('[Error] Failed to load StepCount Data');
        }

        console.log('stepcount data', result);
      },
    );
  });
}
