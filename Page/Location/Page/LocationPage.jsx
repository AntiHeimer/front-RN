import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RegisterButton from '../Component/RegisterButton';

function LocationPage({navigation}) {
  return (
    <View style={styles.container}>
      <RegisterButton navigation={navigation} />
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
