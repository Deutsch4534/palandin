import React from "react";
import colors from "../styles";
import styled from "styled-components";
import check from "../assets/check.png";
import ButtonRadius from "./ButtonRadius";

export default function Card({ title, img, text, buttonText, onPress, isLoading }) {
  return (
    <CardWrapper>
      <Header>
        <Img source={img} />
        <Title numberOfLines={1}>{title}</Title>
      </Header>
      <Line />
      {text.map(text => (
        <TextContainer>
          <Img source={check} />
          <Text numberOfLines={1}>{text.title}</Text>
        </TextContainer>
      ))}
      {buttonText && <ButtonRadius text={buttonText} onPress={onPress} isLoading={isLoading}/>}
    </CardWrapper>
  );
}

const CardWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content space;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  background: ${colors.linghBlack};
  border-radius: 10px;
  padding: 10px;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 15px;
  color: ${colors.white};
  font-weight: bold;
  margin-left: 10px;
`;

const Line = styled.View`
  height: 1px;
  width: 78%;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
`;

const TextContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20px;
  width: 100%;
  margin-bottom: 10px;
`;

const Text = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  margin-left: 10px;
`;

const Img = styled.Image.attrs({
  source: p => p.source
})``;
