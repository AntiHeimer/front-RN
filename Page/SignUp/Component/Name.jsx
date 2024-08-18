import {useEffect} from 'react';
import InputBox from './InputBox';

function Name({name, setName, setIsNameFilled}) {
  useEffect(() => {
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
