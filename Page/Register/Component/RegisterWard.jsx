import {StyleSheet, Text, View} from 'react-native';

import Input from '../../../Utils/Component/Input';
import {MainButtonBlack} from '../../../Utils/Component/MainButton';
import {ConfirmAlert} from '../../../Utils/Component/CustomAlert';
import RegisterWardFunction from '../Function/RegisterWardFunction';

/**
 * 피보호자 등록 화면 컴포넌트
 *
 * 이 컴포넌트는 사용자가 피보호자 아이디를 입력하고 피보호자 등록 요청을 보내는 화면을 렌더링합니다.
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {Object} props.navigation - 네비게이션 객체 (React Navigation)
 * @param {string} props.value - 입력 필드의 현재 값
 * @param {function} props.onChange - 입력 필드 값 변경 시 호출되는 함수
 *
 * @returns {JSX.Element} - 피보호자 등록 화면을 렌더링하는 React Native 컴포넌트
 */

function RegisterWard({navigation, value, onChange}) {
  /**
   * 요청 전송 완료 후 알림을 표시하고, 'Location' 화면으로 네비게이션합니다.
   */
  async function RegisterFunction() {
    const result = await RegisterWardFunction({userId: value});
    if (result.statusCode == '200') {
      ConfirmAlert({
        title: '요청 전송 완료',
        message: '피보호자 요청이\n성공적으로 전송되었습니다.',
        onPress: () => {
          navigation.navigate('Location Tab');
        },
      });

      onChange(null);
      return;
    }

    ConfirmAlert({
      title: '요청 전송 실패',
      message: '피보호자 요청 전송이\n실패되었습니다.',
      onPress: () => {},
    });

    return;
  }

  return (
    <View>
      <Text style={styles.text}>피보호자 등록</Text>
      <View style={styles.inputBox}>
        <Input
          placeholder="피보호자 아이디를 입력하세요"
          value={value}
          onChange={onChange}
          security={false}
        />
      </View>
      <MainButtonBlack text="피보호자 등록" onPress={RegisterFunction} />
    </View>
  );
}

export default RegisterWard;

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
