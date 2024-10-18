import {StyleSheet, Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

// 날짜에서 일(day)만 반환하는 함수
function getFormattedDateLabel(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate());
  return day; // 일(day)만 반환
}

// 오늘부터 일주일 전까지의 날짜 리스트를 생성하는 함수
function getLastWeekDates() {
  const today = new Date();
  const dates = [];

  for (let i = 6; i >= 0; i--) {
    // 오늘부터 과거 6일 전까지의 날짜 계산
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD 형식
    dates.push(formattedDate);
  }

  return dates;
}

function SleepChart({sleepData}) {
  // sleepData의 날짜 형식을 YYYY-MM-DD로 통일
  const formattedSleepData = sleepData.map(item => ({
    ...item,
    date: new Date(item.date).toISOString().split('T')[0], // 날짜 형식을 YYYY-MM-DD로 변환
  }));

  // 오늘부터 일주일간의 날짜 목록 생성
  const lastWeekDates = getLastWeekDates();

  // 이번 주 날짜를 기준으로 sleepData가 없으면 0으로 채워주는 로직
  const completeData = lastWeekDates.map(date => {
    const foundData = formattedSleepData.find(item => item.date === date);

    if (foundData) {
      const {core, deep, rem, sleepTime} = foundData;
      if (core === 0 && deep === 0 && rem === 0) {
        // core, deep, rem이 모두 0이면 sleepTime만 red로 표시
        return {
          date,
          stacks: [{value: sleepTime / 3600, color: 'red'}], // 초 단위 시간 -> 시간으로 변환
        };
      } else {
        // core, deep, rem 데이터가 있으면 각각 다른 색상으로 표시
        return {
          date,
          stacks: [
            {value: deep / 3600, color: '#4ABFF4', marginBottom: 2},
            {value: core / 3600, color: 'orange', marginBottom: 2},
            {value: rem / 3600, color: '#28B2B3', marginBottom: 2},
          ],
        };
      }
    } else {
      // 해당 날짜에 데이터가 없으면 0으로 표시
      return {
        date,
        stacks: [{value: 0, color: '#ccc'}],
      };
    }
  });

  // 날짜순으로 sleepData를 정렬하고 stackData 형식으로 변환
  const stackData = completeData.map(item => ({
    stacks: item.stacks,
    label: getFormattedDateLabel(item.date), // 날짜의 일(day)만 표시
  }));

  return (
    <View style={styles.container}>
      <BarChart
        noOfSections={4}
        stackData={stackData}
        width={250}
        spacing={23}
        initialSpacing={30}
        barWidth={10}
        barBorderRadius={6}
        maxValue={15}
      />
      <View style={styles.legend}>
        <View style={styles.bar1} />
        <Text>렘수면</Text>
        <View style={styles.bar2} />
        <Text>코어수면</Text>
        <View style={styles.bar3} />
        <Text>깊은수면</Text>
      </View>
    </View>
  );
}

export default SleepChart;

const styles = StyleSheet.create({
  container: {
    marginLeft: -20,
    marginTop: 30,
    position: 'static',
    zIndex: 1,
  },
  legend: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  bar1: {
    borderWidth: 1,
    width: 20,
    height: 7,
    backgroundColor: '#28B2B3',
    borderColor: '#28B2B3',
    borderRadius: 90,
    marginTop: 4,
    marginRight: 4,
    marginLeft: 30,
  },
  bar2: {
    borderWidth: 1,
    width: 20,
    height: 7,
    backgroundColor: 'orange',
    borderColor: 'orange',
    borderRadius: 90,
    marginTop: 4,
    marginRight: 4,
    marginLeft: 30,
  },
  bar3: {
    borderWidth: 1,
    width: 20,
    height: 7,
    backgroundColor: '#4ABFF4',
    borderColor: '#4ABFF4',
    borderRadius: 90,
    marginTop: 4,
    marginRight: 4,
    marginLeft: 30,
  },
});
