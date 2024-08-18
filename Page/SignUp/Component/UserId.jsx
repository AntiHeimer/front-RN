import {useEffect} from 'react';
import InputBox from './InputBox';

function UserId({userId, setUserId, setIsUserIdFilled}) {
  useEffect(() => {
    if (userId == null || userId == '') {
      setIsUserIdFilled(false);
    } else {
      setIsUserIdFilled(true);
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
