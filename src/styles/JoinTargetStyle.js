import styled from "styled-components";
import palette from "@lib/colorPalette";

export const TitleText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.54px;

  color: ${palette.duksungBurgundy.ex4};

  margin-top: 44.7px;
`;

export const ItemWrapper = styled.div`
  width: 342px;
  padding: 10px 0px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  border-radius: 16px;
  background: ${palette.boldBlack.ex9};

  margin-top: 20px;
`;

export const ItemText = styled.p`
  padding: 12px 20px;

  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.48px;

  color: ${palette.boldBlack.ex2};
`;

export const ItemLine = styled.div`
  width: 302px;
  height: 0.5px;

  background: ${palette.boldBlack.ex8};

  align-self: center;
`;
