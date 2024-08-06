import {StyleSheet, Text, View} from 'react-native';

function AccountPage() {
  return (
    <View style={styles.container}>
      <Text>account page</Text>
    </View>
  );
}

export default AccountPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
