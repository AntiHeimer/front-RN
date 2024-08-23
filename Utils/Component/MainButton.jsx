import {StyleSheet, Text, TouchableOpacity} from 'react-native';

/**
 * 큰 블랙 버튼 컴포넌트
 * 버튼의 텍스트와 클릭 시 실행되는 함수를 props로 받아 렌더링
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.text - 버튼에 표시될 텍스트
 * @param {function} props.onPress - 버튼 클릭 시 호출될 함수
 *
 * @returns {JSX.Element} - 버튼을 렌더링하는 React Native 컴포넌트
 */
function MainButtonBlack({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer, // 공통 버튼 스타일
        styles.bigButtonContainer, // 큰 버튼 크기
        styles.blackButtonContainer, // 블랙 배경
      ]}>
      <Text style={[styles.bigButtonText, styles.blackButtonText]}>{text}</Text>
    </TouchableOpacity>
  );
}

/**
 * 큰 회색 버튼 컴포넌트
 * 버튼의 텍스트와 클릭 시 실행되는 함수를 props로 받아 렌더링
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.text - 버튼에 표시될 텍스트
 * @param {function} props.onPress - 버튼 클릭 시 호출될 함수
 *
 * @returns {JSX.Element} - 버튼을 렌더링하는 React Native 컴포넌트
 */
function MainButtonGray({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer, // 공통 버튼 스타일
        styles.bigButtonContainer, // 큰 버튼 크기
        styles.grayButtonContainer, // 회색 배경
      ]}>
      <Text style={[styles.bigButtonText, styles.grayButtonText]}>{text}</Text>
    </TouchableOpacity>
  );
}

/**
 * 중간 크기 블랙 버튼 컴포넌트
 * 버튼의 텍스트와 클릭 시 실행되는 함수를 props로 받아 렌더링
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.text - 버튼에 표시될 텍스트
 * @param {function} props.onPress - 버튼 클릭 시 호출될 함수
 *
 * @returns {JSX.Element} - 버튼을 렌더링하는 React Native 컴포넌트
 */
function MainMediumButtonBlack({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer, // 공통 버튼 스타일
        styles.mediumButtonContainer, // 중간 버튼 크기
        styles.blackButtonContainer, // 블랙 배경
      ]}>
      <Text style={[styles.mediumButtonText, styles.blackButtonText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

/**
 * 중간 크기 회색 버튼 컴포넌트
 * 버튼의 텍스트와 클릭 시 실행되는 함수를 props로 받아 렌더링
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.text - 버튼에 표시될 텍스트
 * @param {function} props.onPress - 버튼 클릭 시 호출될 함수
 *
 * @returns {JSX.Element} - 버튼을 렌더링하는 React Native 컴포넌트
 */
function MainMediumButtonGray({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer, // 공통 버튼 스타일
        styles.mediumButtonContainer, // 중간 버튼 크기
        styles.grayButtonContainer, // 회색 배경
      ]}>
      <Text style={[styles.mediumButtonText, styles.grayButtonText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

/**
 * 작은 블랙 버튼 컴포넌트
 * 버튼의 텍스트와 클릭 시 실행되는 함수를 props로 받아 렌더링
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.text - 버튼에 표시될 텍스트
 * @param {function} props.onPress - 버튼 클릭 시 호출될 함수
 *
 * @returns {JSX.Element} - 버튼을 렌더링하는 React Native 컴포넌트
 */
function MainSmallButtonBlack({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer, // 공통 버튼 스타일
        styles.smallButtonContainer, // 작은 버튼 크기
        styles.blackButtonContainer, // 블랙 배경
      ]}>
      <Text style={[styles.smallButtonText, styles.blackButtonText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

/**
 * 작은 회색 버튼 컴포넌트
 * 버튼의 텍스트와 클릭 시 실행되는 함수를 props로 받아 렌더링
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.text - 버튼에 표시될 텍스트
 * @param {function} props.onPress - 버튼 클릭 시 호출될 함수
 *
 * @returns {JSX.Element} - 버튼을 렌더링하는 React Native 컴포넌트
 */
function MainSmallButtonGray({text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer, // 공통 버튼 스타일
        styles.smallButtonContainer, // 작은 버튼 크기
        styles.grayButtonContainer, // 회색 배경
      ]}>
      <Text style={[styles.smallButtonText, styles.grayButtonText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

// 각 버튼 컴포넌트를 외부에서 사용할 수 있도록 내보내기
export {
  MainButtonBlack,
  MainButtonGray,
  MainMediumButtonBlack,
  MainMediumButtonGray,
  MainSmallButtonBlack,
  MainSmallButtonGray,
};

// 버튼 스타일 정의
const styles = StyleSheet.create({
  // 블랙 버튼 배경 스타일
  blackButtonContainer: {
    backgroundColor: 'black',
  },
  // 회색 버튼 배경 스타일
  grayButtonContainer: {
    borderColor: '#F2F2F2',
    backgroundColor: '#F2F2F2',
  },
  // 블랙 버튼 텍스트 색상
  blackButtonText: {
    color: 'white',
  },
  // 회색 버튼 텍스트 색상
  grayButtonText: {
    color: 'black',
  },
  // 공통 버튼 스타일 (테두리, 둥근 모서리)
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // 큰 버튼 크기
  bigButtonContainer: {
    width: 308,
    height: 55,
  },
  // 중간 버튼 크기
  mediumButtonContainer: {
    width: 159,
    height: 55,
  },
  // 작은 버튼 크기
  smallButtonContainer: {
    width: 60,
    height: 34,
  },
  // 큰 버튼 텍스트 크기
  bigButtonText: {
    fontSize: 20,
  },
  // 중간 버튼 텍스트 크기
  mediumButtonText: {
    fontSize: 20,
  },
  // 작은 버튼 텍스트 크기
  smallButtonText: {
    fontSize: 12,
  },
});
