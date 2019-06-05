import React from "react";
import { ActivityIndicator } from 'react-native'
import styled from "styled-components";
import colors from "../styles";

export default function ButtonRadius({ text, onPress, isLoading }) {
  return (
    <ButtonRadiusContainer onPress={onPress}>
      {isLoading ? (<ActivityIndicator size="small" color="#000" />) : (<TextButtonRadius>{text}</TextButtonRadius>)}
    </ButtonRadiusContainer>
  );
}

const ButtonRadiusContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
  width: 100%;
  margin: 10px;
  height: 35px;
  border-radius: 30px;
  margin-top: 10px;
`;

const TextButtonRadius = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;
