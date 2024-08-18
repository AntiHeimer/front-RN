import {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import InputBox from '../Component/InputBox';
import MainButton from '../../../Utils/Component/MainButton/MainButton';

import SignUpFunction from '../Function/SignUpFunction';
import ConfirmAlert from '../../../Utils/Component/\bAlert/ConfirmAlert';

function SignUpPage({navigation}) {
  const [name, setName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);

  async function SignUp() {
    const result = await SignUpFunction({
      name: name,
      id: userId,
      password: password,
    });

    console.log(result);

    if (result.statusCode === '200') {
      ConfirmAlert({
        title: '회원가입 성공',
        message: '로그인 창으로 이동합니다.',
        onPress: () => {
          navigation.navigate('Login');
        },
      });

      return;
    }

    ConfirmAlert({
      title: '회원가입 실패',
      message: '회원가입을 실패하였습니다.',
      onPress: () => {},
    });

    return;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.smallContainer}>
          <InputBox
            title="이름"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={setName}
            security={false}
          />
          <InputBox
            title="아이디"
            placeholder="아이디를 입력해주세요"
            value={userId}
            onChange={setUserId}
            security={false}
            comment="영어, 숫자 포함 8~20자리를 입력해주세요."
          />
          <InputBox
            title="비밀번호"
            placeholder="비밀번호 입력해주세요"
            value={password}
            onChange={setPassword}
            security={true}
            comment="영어, 숫자, 특수문자 포함 12~24자리를 입력해주세요."
          />
          <InputBox
            title="비밀번호 확인"
            placeholder="한번 더 비밀번호 입력해주세요"
            value={password2}
            onChange={setPassword2}
            security={true}
            comment="비밀번호가 일치하지 않습니다."
          />
          <View style={styles.loginButtonDiv}>
            <MainButton text="회원가입" onPress={() => SignUp()} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  smallContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  loginButtonDiv: {
    marginTop: 37,
  },
});
