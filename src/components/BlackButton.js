import React from "react";
import styled from "styled-components";
import colors from "../styles";

export default function BlackButton({ text, active, ...rest }) {
  return (
    <BlackButtonContainer {...rest} active={active}>
      <Text active={active}>{text}</Text>
    </BlackButtonContainer>
  );
}

const BlackButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  height: 45px;
  align-items: center;
  justify-content: center;
  background: ${p => p.active ? colors.white : colors.dark};
  padding: 10px;
  margin: 10px;
  width: 100%;
  border-radius: 3px;
  border-width: 1px;
  border-color: ${colors.primary};
`;

const Text = styled.Text`
  font-size: 15px;
  color: ${p => p.active ? colors.dark : colors.white};
`;
