import {StyleSheet, Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

// 날짜를 MM.DD 형식으로 변환하는 함수
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

function WalkChart({walkData}) {
  // walkData의 날짜 형식을 YYYY-MM-DD로 통일
  const formattedWalkData = walkData.map(item => ({
    ...item,
    date: new Date(item.date).toISOString().split('T')[0], // 날짜 형식을 YYYY-MM-DD로 변환
  }));

  // 오늘부터 일주일간의 날짜 목록 생성
  const lastWeekDates = getLastWeekDates();

  // 이번 주 날짜를 기준으로 walkData가 없으면 0으로 채워주는 로직
  const completeData = lastWeekDates.map(date => {
    const foundData = formattedWalkData.find(item => item.date === date);

    return {
      date,
      value: foundData ? foundData.value : 0, // 값이 없으면 0
    };
  });

  // 날짜순으로 walkData를 정렬하고 stackData 형식으로 변환
  const stackData = completeData.map(item => ({
    stacks: [{value: item.value, color: '#4ABFF4'}],
    label: getFormattedDateLabel(item.date), // 날짜를 MM.DD 형식으로 표시
  }));

  return (
    <View style={styles.container}>
      <BarChart
        maxValue={20}
        noOfSections={5}
        hideYAxisText={false}
        yAxisLabelTexts={['0', '5', '10', '15', '20']}
        stackData={stackData.map(item => ({
          ...item,
          stacks: item.stacks.map(stack => ({
            ...stack,
            value: stack.value / 1000,
          })),
        }))}
        width={250}
        spacing={23}
        initialSpacing={30}
        barWidth={10}
        barBorderRadius={6}
        renderTooltip={item => {
          return (
            <View style={styles.label}>
              <Text style={styles.labelText}>
                {item.stacks[0].value * 1000}
              </Text>
            </View>
          );
        }}
      />
      <View style={styles.legend}>
        <View style={styles.bar1} />
        <Text>걸음</Text>
      </View>
    </View>
  );
}

export default WalkChart;

const styles = StyleSheet.create({
  container: {
    marginLeft: -20,
    marginTop: 30,
    position: 'static',
    zIndex: 1,
  },
  label: {
    marginBottom: 20,
    marginLeft: -20,
    width: 50,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  labelText: {
    fontSize: 12,
  },
  legend: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 35,
  },
  bar1: {
    borderWidth: 1,
    width: 20,
    height: 7,
    backgroundColor: '#4ABFF4',
    borderColor: '#4ABFF4',
    borderRadius: 90,
    marginTop: 4,
    marginRight: 4,
  },
});
