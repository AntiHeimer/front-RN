import {useState} from 'react';

import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SignUpButton from '../Component/SignUpButton';
import Input from '../../../Utils/Component/Input';
import MainButton from '../../../Utils/Component/MainButton/MainButton';

import LoginFunction from '../Function/LoginFunction';

function LoginPage({navigation}) {
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);

  async function Login() {
    const result = await LoginFunction({id: userId, password: password});

    if (result.statusCode === '200') {
      navigation.navigate('Main');
      return;
    }

    Alert.alert('로그인 실패', [
      {
        text: '확인',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
    return;
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardview}>
        <Text style={styles.logo}>AntiHeimer</Text>
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
        <View style={styles.buttondiv}>
          <MainButton text="로그인" onPress={() => Login()} />
        </View>
        <SignUpButton navigation={navigation} />
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
  logo: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 70,
    marginTop: -100,
  },
  buttondiv: {
    marginTop: 28,
  },
});
