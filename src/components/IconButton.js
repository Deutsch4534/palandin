import React from "react";
import styled from "styled-components";
import colors from "../styles";

export default function IconButton({ icon, text }) {
  return (
    <ButtonRadiusContainer>
      <Img icon={icon} />
      <TextButtonRadius>{text}</TextButtonRadius>
    </ButtonRadiusContainer>
  );
}

const ButtonRadiusContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: ${colors.primary};
  height: 50px;
  border-radius: 25px;
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

const TextButtonRadius = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-left: 10px;
`;

const Img = styled.Image.attrs({
  source: p => p.icon
})``;
