import {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Name from '../Component/Name';
import UserId from '../Component/UserId';
import Password from '../Component/Password';
import {ConfirmAlert} from '../../../Utils/Component/CustomAlert';
import {
  MainButtonBlack,
  MainButtonGray,
} from '../../../Utils/Component/MainButton';

import SignUpFunction from '../Function/SignUpFunction';

function SignUpPage({navigation}) {
  const [name, setName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);

  const [isNameFilled, setIsNameFilled] = useState(false); // 이름 input 칸이 비어있는지 확인
  const [isUserIdFilled, setIsUserIdFilled] = useState(false); // 아이디 input 칸이 비어있는지 확인
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false); // 패스워드, 패스워드 확인 텍스트가 같은지 확인

  async function SignUp() {
    const result = await SignUpFunction({
      name: name,
      id: userId,
      password: password,
    });

    // 회원가입 성공 시 성공 알림창 띄우고 로그인 탭으로 이동
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

    // 회원가입 실패 시 실패 경고창 띄움
    ConfirmAlert({
      title: '회원가입 실패',
      message: '회원가입에 실패하였습니다.',
      onPress: () => {},
    });

    return;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={100}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.smallContainer}>
          <Name
            name={name}
            setName={setName}
            setIsNameFilled={setIsNameFilled}
          />
          <UserId
            userId={userId}
            setUserId={setUserId}
            setIsUserIdFilled={setIsUserIdFilled}
          />
          <Password
            password={password}
            password2={password2}
            setPassword={setPassword}
            setPassword2={setPassword2}
            isPasswordCorrect={isPasswordCorrect}
            setIsPasswordCorrect={setIsPasswordCorrect}
          />

          <View style={styles.loginButtonDiv}>
            {isNameFilled && isUserIdFilled && isPasswordCorrect ? (
              <MainButtonBlack text="회원가입" onPress={() => SignUp()} />
            ) : (
              <MainButtonGray text="회원가입" onPress={() => {}} />
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
