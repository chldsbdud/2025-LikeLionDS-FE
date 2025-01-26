import React from "react";
import * as N from "@styles/NoticeFormStyle";

function NoticeForm({ type }) {
  // props로 type를 받아서 조건별로 새로운 작성/수정 렌더링
  // type이 new이면 작성, edit이면 수정
  return (
    <>
      <N.NoticeForm>공지사항 작성/수정 페이지</N.NoticeForm>
    </>
  );
}

export default NoticeForm;
