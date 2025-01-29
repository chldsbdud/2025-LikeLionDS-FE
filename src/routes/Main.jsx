import React from "react";
import * as M from "@styles/MainStyle";
import MainPage from "../components/Main/MainPage";
import MainThird from "../components/Main/MainThird";
import MainLast from "../components/Main/MainLast";

function Main() {
  return (
    <>
      <M.Main>
        <MainPage></MainPage>
        <MainThird></MainThird>
        <MainLast></MainLast>
      </M.Main>
    </>
  );
}

export default Main;
