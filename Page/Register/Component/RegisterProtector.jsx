import {Alert, StyleSheet, Text, View} from 'react-native';
import Input from '../../../Utils/Component/Input';
import MainButton from '../../../Utils/Component/MainButton/MainButton';

function RegisterProtector({navigation, value, onChange}) {
  function AlertFunction() {
    Alert.alert('요청 전송 완료', '보호자 요청이\n성공적으로 전송되었습니다.', [
      {
        text: '확인',
        onPress: () => {
          navigation.navigate('Location');
        },
        style: 'cancel',
      },
    ]);

    return;
  }

  return (
    <View>
      <Text style={styles.text}>보호자 등록</Text>
      <View style={styles.inputBox}>
        <Input
          placeholder="보호자 아이디를 입력하세요"
          value={value}
          onChange={onChange}
          security={false}
        />
      </View>
      <MainButton text="보호자 등록" onPress={AlertFunction} />
    </View>
  );
}

export default RegisterProtector;

const styles = StyleSheet.create({
  text: {
    width: 308,
    textAlign: 'center',
    fontSize: 17,
    marginBottom: 10,
  },
  inputBox: {
    marginBottom: 10,
  },
});
