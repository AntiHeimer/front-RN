import {StyleSheet, View} from 'react-native';
import RegisterButton from '../Component/RegisterButton';
import Map from '../Component/Map';

function LocationPage({navigation}) {
  return (
    <View style={styles.container}>
      <RegisterButton navigation={navigation} />
      <Map />
    </View>
  );
}

export default LocationPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
