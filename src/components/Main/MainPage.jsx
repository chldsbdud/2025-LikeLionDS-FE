import React, { useState, useEffect } from "react";
import styled from "styled-components";
import splash from "../../assets/logo/splash.svg";
import whiteLine from "../../assets/icons/icon_whiteLine.png";
import likelionBack from "../../assets/logo/logo_likelion_background.svg";
import underLine from "../../assets/icons/icon_underline.svg";

// 최상위 컨테이너 (패딩 추가)
const WrapperContainer = styled.div`
  padding: 0 20px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 48px;
  margin-bottom: 100px; /* 공백 최소화 */
`;

const ChartText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  p {
    font-size: 16px;
    font-weight: 300;
    text-align: right;
  }
`;

const WhiteLine = styled.img`
  height: 145px;
  width: 2px;
  margin-left: 20px;
`;

// 스크롤에 따라 부드럽게 이동하는 이미지
const LikelionBack = styled.img`
  height: 208px;
  display: block;
  position: absolute;
  top: 67%;
  left: 0;
  transform: translateX(${(props) => props.$translateX}px);
  transition: transform 0.1s ease-out;
`;

const WhatisLLdiv = styled.div`
  font-size: 28px;
  font-weight: 400;
  margin-top: 20px;

  span {
    font-size: 18px;
    margin-top: 20px;
    font-weight: 200;
    display: block;
  }

  strong {
    font-weight: bold;
  }
`;

// 페이지 전체 레이아웃 (공백 최소화)
const PageContainer = styled.div`
  min-height: 100vh; /* 공백 줄이기 */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UnderLine = styled.img`
  width: 160px;
  display: block;
`;

function MainPage() {
  const [translateX, setTranslateX] = useState(150); // 초기값 (공백 최소화)
  const [scrollY, setScrollY] = useState(0); // 현재 스크롤 위치 저장

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      // 스크롤 값에 따라 X 좌표 조정 (속도 조절 가능)
      const newTranslateX = Math.max(0, 150 - newScrollY * 0.3); // 속도 조정 가능

      // 애니메이션 프레임 최적화
      animationFrameId = requestAnimationFrame(() => setTranslateX(newTranslateX));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <WrapperContainer>
      <PageContainer>
        <img src={splash} alt="splash logo" />
        <FlexBox>
          <ChartText>
            <p>멋쟁이사자처럼이란?</p>
            <p>파트별 소개</p>
            <p>덕성 멋사는</p>
            <p>아기사자 모집 안내</p>
            <p>자주 묻는 질문</p>
          </ChartText>
          <WhiteLine src={whiteLine} alt="white line" />
        </FlexBox>
        <WhatisLLdiv>
          <LikelionBack
            id="likelionBackLogo"
            src={likelionBack}
            alt="likelionBackLogo"
            $translateX={translateX} // styled-components에서 사용
          />
          <div>멋쟁이사자처럼이란?</div>
          <UnderLine src={underLine} alt="underline" />
          <span>
            멋쟁이사자처럼은 테크 기반의 아이디어 실현을 위해 국내 61개 대학이 모여 이루어진 국내 최대 규모{" "}
            <strong>IT 창업 동아리</strong>입니다.
          </span>
          <span>각 대학별로 세션 및 스터디가 진행되며, 중앙 해커톤 및 연합 해커톤 등을 함께 하게 됩니다.</span>
        </WhatisLLdiv>
      </PageContainer>
    </WrapperContainer>
  );
}

export default MainPage;
