import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import dsBack from "../../assets/logo/logo_ds_background.svg";
import underLineDS from "../../assets/icons/icon_underlineDS.svg";
import four1 from "../../assets/projects/사개절_1.png";
import four2 from "../../assets/projects/사개절_2.png";
import four3 from "../../assets/projects/사개절_3.png";
import four4 from "../../assets/projects/사개절_4.png";
import ideathon1 from "../../assets/projects/아이디어톤_1.jpg";
import ideathon2 from "../../assets/projects/아이디어톤_2.jpg";
import ideathon3 from "../../assets/projects/아이디어톤_3.jpg";
import ideathon4 from "../../assets/projects/아이디어톤_4.jpg";
import ideathon5 from "../../assets/projects/아이디어톤_5.png";
import pioneer1 from "../../assets/projects/중앙해커톤_1.png";
import pioneer2 from "../../assets/projects/중앙해커톤_2.png";
import pioneer3 from "../../assets/projects/중앙해커톤_3.png";
import pioneer4 from "../../assets/projects/중앙해커톤_4.png";
import pioneer5 from "../../assets/projects/중앙해커톤_5.png";
import pioneer6 from "../../assets/projects/중앙해커톤_6.png";
import Instagram from "../../assets/icons/icon_instagram.svg";

// 최상위 컨테이너 (패딩 추가)
const WrapperContainer = styled.div`
  padding: 0 20px;
`;

// 스크롤에 따라 이동하는 배경 이미지
const DSBack = styled.img`
  height: 208px;
  display: block;
  position: absolute;
  left: 0%;
  top: 120%;
  transform: translateX(${(props) => props.$translateX}px);
  transition: transform 0.1s ease-out;
`;

const WhatisDSdiv = styled.div`
  font-size: 28px;
  margin-top: 270px;

  span {
    font-size: 18px;
    font-weight: 200;
    margin-bottom: 58px;
    margin-top: 20px;
    display: block;
  }

  strong {
    font-weight: bold;
  }
`;

const UnderLine = styled.img`
  width: 160px;
  display: block;
`;

const Projects12th = styled.div`
  display: block;
  margin-bottom: 58px;
  span {
    font-weight: 200;
    font-size: 18px;
  }
`;

const ProjectsSlide1 = styled.div`
  display: flex;
  margin-top: 12px;
  overflow: hidden;
  white-space: nowrap;
  img {
    width: 224px;
    height: 126px;
    margin-right: 10px;
    animation: ${keyframes`
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    `} 20s linear infinite;
  }
`;

const ProjectsSlide2 = styled.div`
  display: flex;
  margin-top: 12px;
  overflow: hidden;
  white-space: nowrap;
  img {
    width: 224px;
    height: 126px;
    margin-right: 10px;
    animation: ${keyframes`
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    `} 20s linear infinite;
  }
`;

const SessionInfo = styled.section`
  display: block;
  justify-items: center;
  align-items: center;
  div {
    margin-bottom: 50px;
    display: block;
    justify-items: center;
    align-items: center;
  }
  span {
    font-size: 20px;
    color: #c93d6c;
  }
  p {
    color: #fff;
    font-size: 26px;
  }
  strong {
    font-size: 42px;
    margin: 10px;
  }
`;

const InstaLink = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-top: 110px;
  /* margin-bottom: 400px; */
  div {
    display: flex;
    align-items: center;

    img {
      width: 200px;
      height: 40px;
      margin-top: 10px;
    }
  }
  span {
    margin: 10px;
  }
`;

function MainLast() {
  const [translateX, setTranslateX] = useState(150); // 초기 위치 (오른쪽에서 시작)
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
      <WhatisDSdiv>
        {/* 🔹 스크롤 시 왼쪽으로 이동하는 배경 이미지 */}
        <DSBack src={dsBack} alt="dsBackground" $translateX={translateX} />
        <div>덕성여대</div>
        <div>멋쟁이사자처럼은?</div>
        <UnderLine src={underLineDS} />
        <span>
          매주 세션 1회, 팀별 스터디 1회 총 2번의 대면 만남을 통해 서로 상호교류하며 프로그래밍을 함께 공부합니다.
        </span>
      </WhatisDSdiv>
      <Projects12th>
        <span>작년 12기에는...</span>
        <ProjectsSlide1>
          <img src={four1} alt="project1" />
          <img src={four2} alt="project2" />
          <img src={four3} alt="project3" />
          <img src={four4} alt="project4" />
          <img src={ideathon1} alt="ideathon1" />
          <img src={ideathon2} alt="ideathon2" />
          <img src={ideathon3} alt="ideathon3" />
        </ProjectsSlide1>
        <ProjectsSlide2>
          <img src={ideathon4} alt="ideathon4" />
          <img src={ideathon5} alt="ideathon5" />
          <img src={pioneer1} alt="pioneer1" />
          <img src={pioneer2} alt="pioneer2" />
          <img src={pioneer3} alt="pioneer3" />
          <img src={pioneer4} alt="pioneer4" />
          <img src={pioneer5} alt="pioneer5" />
          <img src={pioneer6} alt="pioneer6" />
        </ProjectsSlide2>
      </Projects12th>
      <SessionInfo>
        <div>
          <span>세션</span>
          <p>
            <strong>7</strong>회
          </p>
        </div>
        <div>
          <span>파트별 스터디</span>
          <p>
            <strong>9</strong>회
          </p>
        </div>
        <div>
          <span>해커톤 및 프로젝트</span>
          <p>
            <strong>5</strong>+
          </p>
        </div>
      </SessionInfo>
      <InstaLink>
        <span>더 자세한 활동이 궁금하다면?</span>
        <div>
          <img src={Instagram} alt="instagram" />
          <span>을 확인해주세요.</span>
        </div>
      </InstaLink>
    </WrapperContainer>
  );
}

export default MainLast;
