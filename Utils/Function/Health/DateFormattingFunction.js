export default function DateFormattingFunction(data) {
  function convertToLocalDateTime(dateString) {
    // "2024-08-22T09:00:00.000+0900" -> "2024-08-22T09:00:00"
    return dateString.split('.')[0];
  }

  return data.map(item => ({
    endDateTime: convertToLocalDateTime(item.endDate),
    startDateTime: convertToLocalDateTime(item.startDate),
    value: Math.floor(item.value),
  }));
}
