import {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import RegisterProtector from '../Component/RegisterProtector';
import RegisterWard from '../Component/RegisterWard';

function RegisterPage({navigation}) {
  const [protectorId, setProtectorId] = useState(null);
  const [wardId, setWardId] = useState(null);

  return (
    <View style={styles.container}>
      <RegisterProtector
        navigation={navigation}
        value={protectorId}
        onChange={setProtectorId}
      />
      <View style={styles.hr} />
      <RegisterWard
        navigation={navigation}
        value={wardId}
        onChange={setWardId}
      />
    </View>
  );
}

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: -200,
  },
  hr: {
    borderTopWidth: 0.2,
    width: 308,
    height: 1,
    marginTop: 35,
    marginBottom: 35,
  },
});
