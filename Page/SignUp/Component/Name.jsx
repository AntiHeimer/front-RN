import {useEffect} from 'react';
import InputBox from './InputBox';

/**
 * 사용자 이름 입력 컴포넌트
 *
 * 이 컴포넌트는 사용자 이름을 입력받는 필드를 제공하며,
 * 입력된 이름이 비어 있는지 여부에 따라 상태를 업데이트
 *
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.name - 현재 입력된 사용자 이름 값
 * @param {function} props.setName - 사용자 이름을 업데이트하는 함수
 * @param {function} props.setIsNameFilled - 사용자 이름 입력 필드가 채워졌는지 여부를 설정하는 함수
 *
 * @returns {JSX.Element} - 사용자 이름 입력 필드를 렌더링하는 React Native 컴포넌트
 */

function Name({name, setName, setIsNameFilled}) {
  useEffect(() => {
    // name 입력 필드의 상태에 따라 setIsNameFilled 상태를 업데이트
    if (name == null || name === '') {
      setIsNameFilled(false); // 이름이 비어 있거나 null일 때
    } else {
      setIsNameFilled(true); // 이름이 비어 있지 않을 때
    }
  }, [name]);

  return (
    <InputBox
      title="이름"
      placeholder="이름을 입력해주세요"
      value={name}
      onChange={setName}
      security={false}
    />
  );
}

export default Name;
