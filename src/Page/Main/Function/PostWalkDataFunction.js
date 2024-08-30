import moment from 'moment';

import GetLatestHealthDateFunction from '../../../Health/GetLatestHealthDateFunction';
import {PostWalkFunction} from '../../../Utils/Function/PostHealthDataFunction';

async function PostWalkDataFunction() {
  try {
    const latestWalkData = await GetLatestHealthDateFunction({data: 'walk'});
    const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');

    if (latestWalkData.date === null || latestWalkData.date === 'null') {
      // 최신 10일치의 walk 데이터를 전송하는 함수
      await sendRecentWalkData();
    } else if (latestWalkData.date !== yesterday) {
      // 누적된 날짜부터 현재까지의 walk 데이터를 전송하는 함수
      await sendCumulativeWalkData({latestDate: latestWalkData.date});
    }
  } catch (error) {
    console.error('Error in PostWalkDataFunction:', error);
  }

  await Promise.all(requests);
}

async function sendRecentWalkData() {
  const today = moment();
  const requests = [];

  for (let i = 1; i <= 10; i++) {
    const startDate = today.clone().subtract(i, 'days').format('YYYY-MM-DD');
    const endDate = today
      .clone()
      .subtract(i - 1, 'days')
      .format('YYYY-MM-DD');

    // 비동기 요청을 배열에 저장
    requests.push(
      PostWalkFunction({startDate, endDate}).catch(error =>
        console.error(
          `Error fetching data for ${startDate} to ${endDate}:`,
          error,
        ),
      ),
    );
  }

  // 모든 요청이 완료될 때까지 대기
  await Promise.all(requests);
}

async function sendCumulativeWalkData({latestDate}) {
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
      PostWalkFunction({
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

  // 모든 요청이 완료될 때까지 대기
  await Promise.all(requests);
}

export default PostWalkDataFunction;
