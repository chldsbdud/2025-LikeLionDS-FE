import React from "react";
import styled, { keyframes } from "styled-components";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/motions/노트북 모션/notebook.json";
import fire from "../../assets/icons/img_fire.svg";
import dsAnimation from "../../assets/logo/logo_dsAnimation.png";
import growltoworld from "../../assets/logo/logo_growlToWorld.png";

// 최상위 컨테이너 (패딩 추가)
const WrapperContainer = styled.div`
  padding: 0 20px;
`;

const LoadingScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px; /* Adjust height to fit the Lottie animation properly */
`;

const LottieContainer = styled.div`
  position: absolute;
  bottom: auto;
`;
const Magam = styled.div`
  margin-top: 200px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f78d3b;
    font-size: 20px;
    font-weight: 500;
    img {
      width: 30px;
      margin: 10px;
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 88px;
    width: 342px;
    height: 65px;
    background-color: #ff7710;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-top: 24px;
  }
`;

// 부모 컨테이너 (배경 유지)
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 200px; /* 크기 조절 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

// X자로 배치된 이미지 스타일
const XImage = styled.img`
  position: absolute;
  width: auto;
  height: 80px; /* 크기 조절 */
  opacity: 0.9; /* 살짝 투명하게 */
`;

// 첫 번째 이미지 (기울어짐 적용)
const Image1 = styled(XImage)`
  transform: rotate(-15deg);
  z-index: 2; /* 위쪽으로 배치 */
`;

// 두 번째 이미지 (반대 방향으로 기울어짐 적용)
const Image2 = styled(XImage)`
  transform: rotate(15deg);
  z-index: 1; /* 아래쪽으로 배치 */
`;

function MainThird() {
  return (
    <WrapperContainer>
      <Container>
        <Image1 src={dsAnimation} alt="dsAnimation" />
        <Image2 src={growltoworld} alt="growltoworld" />
      </Container>
      <LoadingScreenContainer>
        <LottieContainer>
          <Lottie animationData={loadingLottie} loop={true} />
        </LottieContainer>
      </LoadingScreenContainer>
      <Magam>
        <div>
          <img src={fire}></img>
          <span>지원 마감까지 D-14</span>
          <img src={fire}></img>
        </div>
        <div>
          <button>지금 지원하러 가기</button>
        </div>
      </Magam>
    </WrapperContainer>
  );
}

export default MainThird;
