import React from "react";
import styled from "styled-components";
import colors from "../styles";

export default function CircleButton({ icon, onPress }) {
  return (
    <ButtonRadiusContainer onPress={onPress}>
      <Img icon={icon} />
    </ButtonRadiusContainer>
  );
}

const ButtonRadiusContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${colors.primary};
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-top: 10px;
  padding-right: 5px;
`;

const Img = styled.Image.attrs({
  source: p => p.icon
})``;
