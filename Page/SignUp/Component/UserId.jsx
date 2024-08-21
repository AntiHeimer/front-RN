import {useEffect} from 'react';
import InputBox from './InputBox';

function UserId({userId, setUserId, setIsUserIdFilled}) {
  /*
  userId -> string: 현재 입력된 사용자 id 값
  setUserId -> function: 사용자 id 업데이트 함수
  setIsUserIdFilled -> function: 사용자 ID 입력 필드가 채워졌는지 여부를 설정하는 함수 (boolean -> void)
  */
  useEffect(() => {
    // userId input 칸 상태에 따라 setIsUserIdFilled 값 변경
    if (userId == null || userId == '' || userId.length < 8) {
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
