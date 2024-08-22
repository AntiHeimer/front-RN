export default function DateFormattingFunction(data) {
  function convertToLocalDateTime(dateString) {
    const date = new Date(dateString);
    return date.toISOString().replace('T', ' ').split('.')[0];
  }

  return data.map(item => ({
    endDateTime: convertToLocalDateTime(item.endDate),
    startDateTime: convertToLocalDateTime(item.startDate),
    value: Math.floor(item.value),
  }));
}
