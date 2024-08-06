import {StyleSheet, Text, View} from 'react-native';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Chart from './Chart';

function Graph() {
  return (
    <View style={styles.graphContainer}>
      <Text style={styles.title}>수면 및 걸음걸이 차트</Text>
      <View style={styles.dropdownContainer}>
        <Dropdown1 />
        <Dropdown2 />
      </View>
      <Chart />
    </View>
  );
}

export default Graph;

const styles = StyleSheet.create({
  graphContainer: {
    marginTop: -30,
    position: 'relative',
  },
  title: {
    width: 308,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
  },
  dropdownContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 26,
    gap: 120,
    width: 308,
    position: 'relative',
    zIndex: 100,
  },
});
