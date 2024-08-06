import {StyleSheet, Text, View} from 'react-native';

function LocationPage() {
  return (
    <View style={styles.container}>
      <Text>location page</Text>
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
