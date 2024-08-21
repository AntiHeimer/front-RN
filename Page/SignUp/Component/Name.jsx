import {useEffect} from 'react';
import InputBox from './InputBox';

function Name({name, setName, setIsNameFilled}) {
  /*
  name -> string: 현재 입력된 사용자 이름 값
  setName -> function: 사용자 이름 업데이트 함수
  setIsNameFilled -> function: 사용자 이름 입력 필드가 채워졌는지 여부를 설정하는 함수 (boolean -> void)
  */
  useEffect(() => {
    // name input 칸 상태에 따라 setIsNameFilled 값 결정
    if (name == null || name == '') {
      setIsNameFilled(false);
    } else {
      setIsNameFilled(true);
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
