import {Alert} from 'react-native';

/**
 * 확인 버튼이 있는 기본 알림창 컴포넌트
 *
 * 이 컴포넌트는 제목과 메시지를 포함하는 알림창을 생성하고, 확인 버튼을 클릭했을 때 지정된 함수가 실행
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.title - 알림창의 제목
 * @param {string} props.message - 알림창의 설명 메시지
 * @param {function} props.onPress - 확인 버튼을 눌렀을 때 호출되는 함수
 *
 * @returns {void} - 알림창을 화면에 표시하며, 함수 호출로 알림창을 표시
 */
function ConfirmAlert({title, message, onPress}) {
  function showAlert() {
    Alert.alert(
      title, // 알림창 제목
      message, // 알림창 설명
      [
        {
          text: '확인', // 확인 버튼 텍스트
          onPress: onPress, // 확인 버튼 클릭 시 호출될 함수
          style: 'cancel', // 확인 버튼 스타일
        },
      ],
      {cancelable: true}, // 알림창 외부 클릭 시 취소 가능
    );
  }

  // 알림창 표시
  return showAlert();
}

/**
 * 확인 및 취소 버튼이 있는 기본 알림창 컴포넌트
 *
 * 이 컴포넌트는 제목과 메시지를 포함하는 알림창을 생성하고, 확인 및 취소 버튼을 클릭했을 때 각각 지정된 함수가 실행
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.title - 알림창의 제목
 * @param {string} props.message - 알림창의 설명 메시지
 * @param {function} props.onPressConfirm - 확인 버튼을 눌렀을 때 호출되는 함수
 * @param {function} props.onPressCancel - 취소 버튼을 눌렀을 때 호출되는 함수
 *
 * @returns {void} - 알림창을 화면에 표시하며, 함수 호출로 알림창을 표시
 */
function CancelAlert({title, message, onPressConfirm, onPressCancel}) {
  function showAlert() {
    Alert.alert(
      title, // 알림창 제목
      message, // 알림창 설명
      [
        {
          text: '취소', // 취소 버튼 텍스트
          onPress: onPressCancel, // 취소 버튼 클릭 시 호출될 함수
          style: 'cancel', // 취소 버튼 스타일
        },
        {
          text: '확인', // 확인 버튼 텍스트
          onPress: onPressConfirm, // 확인 버튼 클릭 시 호출될 함수
        },
      ],
      {cancelable: true}, // 알림창 외부 클릭 시 취소 가능
    );
  }

  // 알림창 표시
  return showAlert();
}

export {ConfirmAlert, CancelAlert};
