import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function SignUpButton({navigation, setUserId, setPassword}) {
  function pressSignUpButton() {
    setUserId(null);
    setPassword(null);
    navigation.navigate('Sign Up');

    return;
  }

  return (
    <TouchableOpacity
      onPress={() => pressSignUpButton()}
      style={styles.container}>
      <Text style={styles.text}>회원가입</Text>
    </TouchableOpacity>
  );
}

export default SignUpButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    color: '#717171',
    fontSize: 15,
  },
});
