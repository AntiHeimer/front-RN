import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function RegisterButton({navigation}) {
  return (
    <>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Register')}>
        <View style={styles.circle}>
          <Text style={styles.text}>+</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.description}>피보호자 및 보호자 등록</Text>
    </>
  );
}

export default RegisterButton;

const styles = StyleSheet.create({
  registerButton: {
    borderWidth: 0.2,
    borderRadius: 5,
    width: 300,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderWidth: 0.2,
    borderRadius: 100,
    width: 55,
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
});
