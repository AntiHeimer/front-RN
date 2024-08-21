import {StyleSheet, Text, View} from 'react-native';

import Input from '../../../Utils/Component/Input';
import {MainButtonBlack} from '../../../Utils/Component/MainButton';
import {ConfirmAlert} from '../../../Utils/Component/CustomAlert';

/**
 * 보호자 등록 화면 컴포넌트
 *
 * 이 컴포넌트는 사용자가 보호자 아이디를 입력하고 보호자 등록 요청을 보내는 화면을 렌더링합니다.
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {Object} props.navigation - 네비게이션 객체 (React Navigation)
 * @param {string} props.value - 입력 필드의 현재 값
 * @param {function} props.onChange - 입력 필드 값 변경 시 호출되는 함수
 *
 * @returns {JSX.Element} - 보호자 등록 화면을 렌더링하는 React Native 컴포넌트
 */

function RegisterProtector({navigation, value, onChange}) {
  /**
   * 요청 전송 완료 후 알림을 표시하고, 'Location' 화면으로 네비게이션합니다.
   */
  function AlertFunction() {
    ConfirmAlert({
      title: '요청 전송 완료',
      message: '보호자 요청이\n성공적으로 전송되었습니다.',
      onPress: () => {
        navigation.navigate('Location');
      },
    });
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
      <MainButtonBlack text="보호자 등록" onPress={AlertFunction} />
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
