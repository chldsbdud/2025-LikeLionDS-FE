import React from "react";
import * as Q from "@styles/QuestionStyle";
// import { isAdminLoggedIn } from "@utils/auth";

function Question() {
  // utils/Admin 파일 내의 isAdminLoggedIn 함수를 가져와서 로그인된 상태인지 확인
  // 어드민 로그인 상태이면 true를 반환하니까 그에 맞게 조건문을 사용해서 어드민 전용 답변할 수 있는 input 박스 렌더링하기
  // 조건부 렌더링은 NoticeList나 NoticeDetial 참고하기
  return (
    <>
      <Q.Question>Q&A 페이지</Q.Question>
    </>
  );
}

export default Question;
