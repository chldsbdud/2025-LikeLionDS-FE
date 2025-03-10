import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@styles/SplashStyle";

import SplashLogo from "@assets/logo/splash.svg";
import ArrowMotion from "@components/Splash/ArrowMotion";
import AppButton from "@components/Splash/AppButton";

function Splash() {
  const navigate = useNavigate();
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [appText, setAppText] = useState("합격자 조회하기");
  const [appDate, setAppDate] = useState(false);

  // 터치 시작 지점 기록
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  // 터치 끝 지점 기록
  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientY);

    // 스와이프 감지
    if (touchStart && touchStart - e.changedTouches[0].clientY > 50) {
      // 위로 스와이프 - main 페이지로 이동
      startTransition();
      console.log("Upward swipe detected");
    } else if (touchStart && e.changedTouches[0].clientY - touchStart > 50) {
      // 아래로 스와이프 - main 페이지로 이동
      startTransition();
      console.log("Downward swipe detected");
    }
  };

  // 마우스 휠 감지
  const handleWheel = (e) => {
    if (e.deltaY > 30) {
      // 아래로 스크롤 - main 페이지로 이동
      startTransition();
    }
  };

  const startTransition = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      navigate("/main");
    }, 1000); // 1000ms 후에 페이지 이동
  };

  const handleNavLinkClick = (path) => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      navigate(path);
    }, 1000); // 1000ms 후에 페이지 이동
  };

  // 날짜 조건 체크
  useEffect(() => {
    const today = new Date();
    const startDate1 = new Date(2025, 1, 26, 12, 0, 0); // 2월 26일 12시
    const endDate1 = new Date(2025, 2, 8, 0, 0, 0); // 3월 8일 00시
    const midDate = new Date(2025, 2, 8, 12, 0, 0); // 3월 8일 12시
    const startDate2 = new Date(2025, 2, 8, 12, 0, 0); // 3월 8일 12시 이후
    const finalEndDate = new Date(2025, 2, 11, 0, 0, 0); // 3월 11일 00시

    if (today >= finalEndDate) {
      setAppDate(false); // 3월 11일 00시 이후부터 비활성화
    } else if (today >= startDate2) {
      setAppText("최종 합격자 조회하기");
      setAppDate(true);
    } else if (today >= startDate1 && today < endDate1) {
      setAppText("1차 합격자 조회하기");
      setAppDate(true);
    } else if (today >= endDate1 && today < midDate) {
      setAppDate(false); // 3월 8일 00시 ~ 3월 8일 12시
    } else {
      setAppDate(false);
    }
  }, []);

  return (
    <>
      <S.Background />
      <S.Splash onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onWheel={handleWheel} $appDate={appDate}>
        {appDate ? (
          <>
            <S.LogoApp src={SplashLogo} alt="덕성 멋사 13기" $isAnimating={isAnimating} />
            <AppButton text={appText} onClick={() => handleNavLinkClick("/input")} isAnimating={isAnimating} />
          </>
        ) : (
          <>
            <S.Logo src={SplashLogo} alt="덕성 멋사 13기" $isAnimating={isAnimating} />
          </>
        )}
        <ArrowMotion isAnimating={isAnimating} onClick={() => startTransition()} />
      </S.Splash>
    </>
  );
}

export default Splash;
