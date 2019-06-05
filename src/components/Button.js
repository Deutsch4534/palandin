import React from "react";
import styled from "styled-components";
import colors from "../styles";

export default function Button({ text, ...rest }) {
  return (
    <ButtonContainer {...rest}>
      <Text>{text}</Text>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  height: 45px;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  width: 100%;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;
