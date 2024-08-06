import {StyleSheet, Text, View} from 'react-native';
import Row from '../Component/Row';

function AccountPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>나의 정보</Text>
      <Row name="강민재" id="minijae011030" />
      <View style={styles.hr} />

      <Text style={styles.text}>나의 보호자 정보</Text>
      <Row name="홍길동" id="gildong1122" />
      <View style={styles.hr} />

      <Text style={styles.text}>나의 피보호자 정보</Text>
      <Row name="강민숙" id="minsook0627" />
      <View style={styles.hr} />
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
    marginTop: -160,
  },
  text: {
    width: 308,
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 18,
    marginTop: 30,
    marginBottom: 20,
  },
  hr: {
    width: 308,
    height: 1,
    borderTopWidth: 0.2,
    marginTop: 20,
  },
});
