import moment from 'moment';
import GetLatestHealthDateFunction from './GetLatestHealthDateFunction';
import PostSleepFunction from '../../../Utils/Function/Health/PostSleepFunction';

async function PostSleepDataFunction() {
  try {
    const latestSleepeData = await GetLatestHealthDateFunction({
      data: 'sleep',
    });

    if (latestSleepeData.date === null || latestSleepeData.date === 'null') {
      // 최신 10일치의 sleep 데이터를 전송하는 함수
      await sendRecentSleepData();
    } else {
      // 누적된 날짜부터 현재까지의 sleep 데이터를 전송하는 함수
      await sendCumulativeSleepData({latestData: latestSleepeData.date});
    }
  } catch (error) {
    console.error('Error in PostActiveDataFunction:', error);
  }
}

async function sendRecentSleepData() {
  const today = moment();
  const requests = [];

  for (let i = 60; i <= 70; i++) {
    const startDate = today.clone().subtract(i, 'days').format('YYYY-MM-DD');
    const endDate = today
      .clone()
      .subtract(i - 1, 'days')
      .format('YYYY-MM-DD');

    requests.push(
      PostSleepFunction({startDate, endDate}).catch(error =>
        console.error(
          `Error fetching data for ${startDate} to ${endDate}:`,
          error,
        ),
      ),
    );
  }

  await Promise.all(requests);
}

async function sendCumulativeSleepData({latestDate}) {
  const startDate = moment(latestDate).add(1, 'days'); // 시작 날짜
  const endDate = moment().subtract(1, 'days'); // 오늘 날짜에서 하루를 뺀 날짜
  const totalDaysDifference = endDate.diff(startDate, 'days'); // 날짜 차이 계산

  const requests = [];

  for (let i = 0; i <= totalDaysDifference; i++) {
    const currentDate = startDate.clone().add(i, 'days');
    const formattedStartDate = currentDate.format('YYYY-MM-DD');
    const formattedEndDate = currentDate
      .clone()
      .add(1, 'days')
      .format('YYYY-MM-DD');

    // 비동기 요청을 배열에 저장
    requests.push(
      PostSleepFunction({
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      }).catch(error =>
        console.error(
          `Error fetching data for ${formattedStartDate} to ${formattedEndDate}:`,
          error,
        ),
      ),
    );
  }

  await Promise.all(requests);
}

export default PostSleepDataFunction;
