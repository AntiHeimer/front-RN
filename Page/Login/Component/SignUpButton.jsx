import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function SignUpButton({navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Sign Up')}
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
