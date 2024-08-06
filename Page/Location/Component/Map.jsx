import {StyleSheet, Text, View} from 'react-native';
import DropDown from './DropDown';

function Map() {
  return (
    <View>
      <Text style={styles.description}>피보호자 위치 추적</Text>
      <DropDown />

      <View style={styles.map}></View>
    </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    marginTop: 35,
    marginBottom: 10,
    textAlign: 'center',
  },
  dropdown: {
    width: 308,
    height: 55,
    borderWidth: 0.2,
  },
  map: {
    width: 308,
    height: 315,
    borderWidth: 0.2,
    marginTop: 12,
  },
});
