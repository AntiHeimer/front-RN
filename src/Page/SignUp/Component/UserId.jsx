import {useEffect} from 'react';
import InputBox from './InputBox';

/**
 * 사용자 ID 입력 필드 컴포넌트
 *
 * 이 컴포넌트는 사용자의 ID를 입력받고, ID의 유효성을 검증하여 입력 필드의 상태를 업데이트
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.userId - 현재 입력된 사용자 ID 값
 * @param {function} props.setUserId - 사용자 ID를 업데이트하는 함수
 * @param {function} props.setIsUserIdFilled - 사용자 ID 입력 필드가 채워졌는지 여부를 설정하는 함수
 *
 * @returns {JSX.Element} - 사용자 ID 입력 필드를 렌더링하는 React Native 컴포넌트
 */

function UserId({userId, setUserId, setIsUserIdFilled}) {
  useEffect(() => {
    // userId의 값에 따라 setIsUserIdFilled 상태를 업데이트
    if (userId == null || userId === '' || userId.length < 8) {
      setIsUserIdFilled(false); // ID가 비어있거나 길이가 8자 미만일 때
    } else {
      setIsUserIdFilled(true); // ID가 적절하게 입력되었을 때
    }
  }, [userId]);

  return (
    <InputBox
      title="아이디"
      placeholder="아이디를 입력해주세요"
      value={userId}
      onChange={setUserId}
      security={false}
      comment="영어, 숫자 포함 8~20자리를 입력해주세요."
    />
  );
}

export default UserId;
