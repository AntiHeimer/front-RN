import moment from 'moment';

export default function DateFormattingFunction(data) {
  function convertToLocalDateTime(dateString) {
    return moment(dateString).format('YYYY-MM-DDTHH:mm:ss');
  }

  return data.map(item => ({
    endDateTime: convertToLocalDateTime(item.endDate),
    startDateTime: convertToLocalDateTime(item.startDate),
    value: Math.floor(item.value),
  }));
}
