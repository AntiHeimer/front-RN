import {StyleSheet, Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

function WalkChart() {
  const stackData = [
    {
      stacks: [{value: 10244, color: '#4ABFF4'}],
      label: 'S',
    },
    {
      stacks: [{value: 7239, color: '#4ABFF4'}],
      label: 'M',
    },
    {
      stacks: [{value: 8110, color: '#4ABFF4'}],
      label: 'T',
    },
    {
      stacks: [{value: 14872, color: '#4ABFF4'}],
      label: 'W',
    },
    {
      stacks: [{value: 14022, color: '#4ABFF4'}],
      label: 'T',
    },
    {
      stacks: [{value: 350, color: '#4ABFF4'}],
      label: 'F',
    },
    {
      stacks: [{value: 193, color: '#4ABFF4'}],
      label: 'S',
    },
  ];

  return (
    <View style={styles.container}>
      <BarChart
        maxValue={20000}
        noOfSections={5}
        stackData={stackData}
        width={250}
        spacing={23}
        initialSpacing={30}
        barWidth={10}
        yAxisLabelWidth={50}
        barBorderRadius={6}
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
  legend: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
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
