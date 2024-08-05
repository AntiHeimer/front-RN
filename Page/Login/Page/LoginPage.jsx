import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';

import {useState} from 'react';

import Input from '../../../\bUtils/Component/Input';
import MainButton from '../../../\bUtils/Component/MainButton';

function LoginPage({navigation}) {
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardview}>
        <Input
          placeholder="아이디를 입력하세요"
          value={userId}
          onChange={setUserId}
          security={false}
        />
        <Input
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={setPassword}
          security={true}
        />
        <MainButton />
      </KeyboardAvoidingView>
    </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  keyboardview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
