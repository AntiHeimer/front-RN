import {StyleSheet, Text, View} from 'react-native';

function MainPage() {
  return (
    <View style={styles.container}>
      <Text>main page</Text>
    </View>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
