import {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import MainButton from '../../../Utils/Component/MainButton/MainButton';
import ConfirmAlert from '../../../Utils/Component/Alert/ConfirmAlert';
import MainButtonGray from '../../../Utils/Component/MainButton/MainButtonGray';

import Name from '../Component/Name';
import UserId from '../Component/UserId';
import Password from '../Component/Password';

import SignUpFunction from '../Function/SignUpFunction';

function SignUpPage({navigation}) {
  const [name, setName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);

  const [isNameFilled, setIsNameFilled] = useState(false);
  const [isUserIdFilled, setIsUserIdFilled] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

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
              <MainButton text="회원가입" onPress={() => SignUp()} />
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
