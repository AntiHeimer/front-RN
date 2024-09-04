import moment from 'moment';

import GetLatestHealthDateFunction from '../../../Health/GetLatestHealthDateFunction';
import {PostActiveFunction} from '../../../Health/PostHealthDataFunction';

async function PostActiveDataFunction() {
  try {
    const latestActiveData = await GetLatestHealthDateFunction({
      data: 'active',
    });
    const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');

    if (latestActiveData.date === null || latestActiveData.date === 'null') {
      // 최신 10일치의 active 데이터를 전송하는 함수
      await sendRecentActiveData();
    } else if (latestActiveData.date !== yesterday) {
      // 누적된 날짜부터 현재까지의 active 데이터를 전송하는 함수
      await sendCumulativeActiveData({latestDate: latestActiveData.date});
    }
  } catch (error) {
    console.error('Error in PostActiveDataFunction:', error);
  }
}

// 최신 10일치의 active 데이터를 전송하는 함수
async function sendRecentActiveData() {
  const today = moment();
  const requests = [];

  for (let i = 1; i <= 10; i++) {
    const startDate = today.clone().subtract(i, 'days').format('YYYY-MM-DD');

    requests.push(
      PostActiveFunction({startDate: startDate}).catch(error =>
        console.error(`Error fetching data for ${startDate}:`, error),
      ),
    );
  }

  if (requests.length > 0) await Promise.all(requests);
}

// 누적된 날짜부터 현재까지의 active 데이터를 전송하는 함수
async function sendCumulativeActiveData({latestDate}) {
  const startDate = moment(latestDate).add(1, 'days');
  const endDate = moment().subtract(1, 'days');
  const totalDaysDifference = endDate.diff(startDate, 'days');

  const requests = [];

  for (let i = 0; i <= totalDaysDifference; i++) {
    const currentDate = startDate.clone().add(i, 'days');
    const formattedStartDate = currentDate.format('YYYY-MM-DD');

    requests.push(
      PostActiveFunction({startDate: formattedStartDate}).catch(error =>
        console.error(
          `Error fetching data for ${formattedStartDate} }:`,
          error,
        ),
      ),
    );
  }

  if (requests.length > 0) await Promise.all(requests);
}

export default PostActiveDataFunction;
