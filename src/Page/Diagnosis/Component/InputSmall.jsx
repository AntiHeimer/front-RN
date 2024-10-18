import {StyleSheet, Text, TextInput, View, Keyboard} from 'react-native';

/**
 * 스몰 메인 입력 필드 컴포넌트
 *
 * 이 컴포넌트는 사용자가 텍스트를 입력할 수 있는 필드를 렌더링
 * 비밀번호와 같은 보안 정보를 입력할 때 사용할 수 있도록 보안 입력 모드를 지원하며,
 * placeholder를 지원하여 필드의 현재 값이 없을 때 안내 텍스트를 표시
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.placeholder - 입력 필드 위에 나타날 placeholder 텍스트
 * @param {string} props.value - 입력 필드의 현재 값
 * @param {function} props.onChange - 사용자가 입력 필드의 텍스트를 변경할 때 호출되는 콜백 함수
 * @param {boolean} props.security - 비밀번호 등 보안 정보 입력 시 보안 입력 모드 적용 여부
 *
 * @returns {JSX.Element} - 입력 필드를 렌더링하는 React Native 컴포넌트
 */
function InputSmall({placeholder, value, onChange, security}) {
  const handleDonePress = () => {
    Keyboard.dismiss(); // 키보드 숨김
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="transparent"
        style={styles.input}
        value={value}
        onChangeText={onChange}
        secureTextEntry={security}
        autoCapitalize="none"
        keyboardType="numeric"
        returnKeyType="done"
        onSubmitEditing={handleDonePress}
      />
      <View pointerEvents="none" style={styles.placeholderContainer}>
        <Text
          style={
            !value || value === '' ? styles.placeholder : styles.transparent
          }>
          {placeholder}
        </Text>
      </View>
    </View>
  );
}

export default InputSmall;

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  input: {
    height: 35,
    width: 60,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.2,
    borderRadius: 7,
    paddingHorizontal: 10,
    marginBottom: 15,
    paddingLeft: 15,
  },
  placeholderContainer: {
    position: 'absolute',
    left: 16,
    top: 18,
  },
  placeholder: {
    color: '#717171',
    fontSize: 16,
  },
  transparent: {
    color: 'transparent',
  },
});
