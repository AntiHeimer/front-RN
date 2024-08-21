import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function MainSmallButtonBlack({text, onPress}) {
  /* 
  메인 버튼 (블랙, 스몰 사이즈)
  text -> string: 버튼 위에 나타나는 문자
  onPress -> function: 버튼 클릭 시 실행되는 함수
  */
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}> {text}</Text>
    </TouchableOpacity>
  );
}

export default MainSmallButtonBlack;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 90,
    backgroundColor: 'black',
    width: 60,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});
