import {Alert} from 'react-native';

function ConfirmAlert({title, message, onPress}) {
  /*
  기본 알림창
  title -> string: 알림창 제목
  message -> string: 알림창 설명
  onPress -> function: 확인 버튼을 눌렀을 때 실행할 함수
  */
  function showAlert() {
    Alert.alert(
      title,
      message,
      [{text: '확인', onPress: onPress, style: 'cancel'}],
      {cancelable: true},
    );
  }

  return showAlert();
}

export default ConfirmAlert;
