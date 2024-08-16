import {StyleSheet, Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

function SleepChart() {
  const stackData = [
    {
      stacks: [
        {value: 3, color: '#4ABFF4'},
        {value: 10, color: 'orange', marginBottom: 2},
        {value: 20, color: '#28B2B3', marginBottom: 2},
      ],
      label: 'S',
    },
    {
      stacks: [
        {value: 10, color: '#4ABFF4'},
        {value: 11, color: 'orange', marginBottom: 2},
        {value: 15, color: '#28B2B3', marginBottom: 2},
      ],
      label: 'M',
    },
    {
      stacks: [
        {value: 14, color: '#4ABFF4'},
        {value: 14, color: 'orange', marginBottom: 2},
        {value: 18, color: '#28B2B3', marginBottom: 2},
      ],
      label: 'T',
    },
    {
      stacks: [
        {value: 7, color: '#4ABFF4'},
        {value: 11, color: 'orange', marginBottom: 2},
        {value: 10, color: '#28B2B3', marginBottom: 2},
      ],
      label: 'W',
    },
    {
      stacks: [
        {value: 2, color: '#4ABFF4'},
        {value: 11, color: 'orange', marginBottom: 2},
        {value: 15, color: '#28B2B3', marginBottom: 2},
      ],
      label: 'T',
    },
    {
      stacks: [
        {value: 20, color: '#4ABFF4'},
        {value: 14, color: 'orange', marginBottom: 2},
        {value: 18, color: '#28B2B3', marginBottom: 2},
      ],
      label: 'F',
    },
    {
      stacks: [
        {value: 23, color: '#4ABFF4'},
        {value: 11, color: 'orange', marginBottom: 2},
        {value: 10, color: '#28B2B3', marginBottom: 2},
      ],
      label: 'S',
    },
  ];

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
        isAnimated
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
