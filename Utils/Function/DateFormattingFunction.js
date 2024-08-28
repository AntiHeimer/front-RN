import moment from 'moment';

/**
 * 주어진 건강 데이터를 포맷팅하는 함수
 *
 * @param {Array} 포맷팅할 원본 건강 데이터 배열
 * @returns {Array} 포맷팅 된 건강 데이터 배열
 *
 * startDateTime, endDateTime: YYYY-MM-DDTHH:mm:ss로 포맷팅되는 날짜값
 * value: 소수점 이하를 버리는 int값
 */
function DateFormattingFunction1(data) {
  function convertToLocalDateTime(dateString) {
    return moment(dateString).format('YYYY-MM-DDTHH:mm:ss');
  }

  return data.map(item => ({
    startDateTime: convertToLocalDateTime(item.startDate),
    endDateTime: convertToLocalDateTime(item.endDate),
    value: Math.floor(item.value),
  }));
}

/**
 * 주어진 건강 데이터를 포맷팅하는 함수
 *
 * @param {Array} 포맷팅할 원본 건강 데이터 배열
 * @returns {Array} 포맷팅 된 건강 데이터 배열
 *
 * startDateTime, endDateTime: YYYY-MM-DDTHH:mm:ss로 포맷팅되는 날짜값
 * value: item의 value값을 그대로 가져오는 string 값
 */
function DateFormattingFunction2(data) {
  function convertToLocalDateTime(dateString) {
    return moment(dateString).format('YYYY-MM-DDTHH:mm:ss');
  }

  return data.map(item => ({
    startDateTime: convertToLocalDateTime(item.startDate),
    endDateTime: convertToLocalDateTime(item.endDate),
    value: item.value,
  }));
}

export {DateFormattingFunction1, DateFormattingFunction2};
