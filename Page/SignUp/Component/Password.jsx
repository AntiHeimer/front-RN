import {useEffect} from 'react';
import InputBox from './InputBox';

/**
 * 비밀번호 입력 및 확인 컴포넌트
 *
 * 이 컴포넌트는 비밀번호와 비밀번호 확인 입력 필드를 제공하며,
 * 두 필드의 값이 일치하는지 확인하여 상태를 업데이트
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.password - 현재 입력된 비밀번호 값
 * @param {string} props.password2 - 현재 입력된 비밀번호 확인 값
 * @param {function} props.setPassword - 비밀번호 입력 필드의 값을 업데이트하는 함수
 * @param {function} props.setPassword2 - 비밀번호 확인 입력 필드의 값을 업데이트하는 함수
 * @param {boolean} props.isPasswordCorrect - 비밀번호와 비밀번호 확인 값이 일치하는지 여부
 * @param {function} props.setIsPasswordCorrect - `isPasswordCorrect` 상태를 변경하는 함수
 *
 * @returns {JSX.Element} - 비밀번호와 비밀번호 확인 입력 필드를 렌더링하는 React Native 컴포넌트
 */

function Password({
  password,
  password2,
  setPassword,
  setPassword2,
  isPasswordCorrect,
  setIsPasswordCorrect,
}) {
  useEffect(() => {
    // password와 password2 입력 값에 따라 isPasswordCorrect 상태를 업데이트
    if (
      password2 == null ||
      password2 === '' ||
      password !== password2 ||
      password.length < 12 ||
      password.length > 24
    ) {
      setIsPasswordCorrect(false); // 비밀번호가 일치하지 않거나 길이가 올바르지 않을 때
    } else {
      setIsPasswordCorrect(true); // 비밀번호가 일치하고 길이가 올바를 때
    }
  }, [password, password2]);

  return (
    <>
      <InputBox
        title="비밀번호"
        placeholder="비밀번호 입력해주세요"
        value={password}
        onChange={setPassword}
        security={true}
        comment="영어, 숫자 포함 12~24자리를 입력해주세요."
      />
      <InputBox
        title="비밀번호 확인"
        placeholder="한번 더 비밀번호 입력해주세요"
        value={password2}
        onChange={setPassword2}
        security={true}
        comment={isPasswordCorrect ? '' : '비밀번호가 일치하지 않습니다.'}
      />
    </>
  );
}

export default Password;
