import React from "react";
import colors from "../styles";
import styled from "styled-components";

export default function SessionRow({ title }) {
  return (
    <Wrapper>
      <SessionRowTitle>{title}</SessionRowTitle>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content flex-start;
  margin-top: 40px;
  margin-bottom: -10px;
  width: 100%;
`;

const SessionRowTitle = styled.Text`
  font-size: 30px;
  color: ${colors.white};
  font-weight: bold;
`;
