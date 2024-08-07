import appleHealthKit from 'react-native-health';

export default function GetHelthKitInfoFunction() {
  const permissions = {
    permissions: {
      read: [
        appleHealthKit.Constants.Permissions.SleepAnalysis,
        appleHealthKit.Constants.Permissions.ActivitySummary,
        appleHealthKit.Constants.Permissions.StepCount,
        appleHealthKit.Constants.Permissions.BiologicalSex,
        appleHealthKit.Constants.Permissions.DateOfBirth,
        appleHealthKit.Constants.Permissions.Weight,
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

    const weightOptions = {
      unit: 'kg',
    };
    appleHealthKit.getSleepSamples(options, (error, result) => {
      if (error) {
        console.log('[Error] Failed to load Sleep Data');

        return;
      }

      console.log('sleep data', result);

      return;
    });

    appleHealthKit.getActivitySummary(options, (error, result) => {
      if (error) {
        console.log('[Error] Failed to load Activity Data');

        return;
      }

      console.log('activity data', result);

      return;
    });

    appleHealthKit.getDailyStepCountSamples(
      stepCountOptions,
      (error, result) => {
        if (error) {
          console.log('[Error] Failed to load StepCount Data');

          return;
        }

        console.log('step count data', result);

        return;
      },
    );

    appleHealthKit.getBiologicalSex(null, (error, result) => {
      if (error) {
        console.log('[Error] Failed to lad Biological Sex');

        return;
      }

      console.log('biological sex', result);

      return;
    });

    appleHealthKit.getDateOfBirth(null, (error, result) => {
      if (error) {
        console.log('[Error] Failed to load Date of Birth');

        return;
      }

      console.log('date of birth', result);

      return;
    });

    appleHealthKit.getLatestWeight(weightOptions, (error, result) => {
      if (error) {
        console.log('[Error] Failed to get weight data');

        return;
      }

      console.log('latest wieght', result);

      return;
    });
  });
}
