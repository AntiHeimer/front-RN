import {Alert} from 'react-native';

function ConfirmAlert({title, message, onPress}) {
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
