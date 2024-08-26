import moment from 'moment';

export default function DateFormattingFunction2(data) {
  function convertToLocalDateTime(dateString) {
    return moment(dateString).format('YYYY-MM-DDTHH:mm:ss');
  }

  return data.map(item => ({
    endDateTime: convertToLocalDateTime(item.endDate),
    startDateTime: convertToLocalDateTime(item.startDate),
    value: item.value,
  }));
}
