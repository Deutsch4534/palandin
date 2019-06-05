import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import buildingImage from "./assets/Logo.png";
import colors from "./styles";
// import * as blockstack from "blockstack";

export default function Main(props) {
/*  useEffect(() => {
    window.scroll(0, 40);
    const checkSign = async () => {
      // const isSignInPending = await blockstack.isSignInPending();
      console.log("checkSign isSignInPending", isSignInPending);

      if (isSignInPending) {
        // const profile = await blockstack.handlePendingSignIn();
        console.log("profile", profile);
      }
    };
    checkSign();
  }, []);*/

  const handleButtonPress = async () => {
    console.log("handleButtonPress");

    props.navigation.navigate('AppNavigator')
    // await blockstack.redirectToSignIn();
    // const isSignInPending = await blockstack.isSignInPending();
    /*if (isSignInPending) {
      const profile = await blockstack.handlePendingSignIn();
      console.log("profile", profile);
    }*/

    // await localStorage.setItem('token', token);
  };

  return (
      <Wrapper>
        <TitleContainer>
          <Title>Welcome</Title>
          <Subtitle>We live for privacy</Subtitle>
        </TitleContainer>
        <TitleContainer>
          <Logo source={buildingImage} style={{width: 350, height: 350}} />
        </TitleContainer>
        <LogoContainer>
          {/*<Logo source={buildingImage} />*/}
        </LogoContainer>
        <ButtonContainer>
          <Button text="Sign in with Blockstack" onPress={handleButtonPress} />
        </ButtonContainer>
      </Wrapper>
  );
}

const Wrapper = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${colors.secundary};
  padding-left: 20px;
  padding-right: 20px;
`;

const TitleContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background: ${colors.secundary};
`;

const LogoContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

const Logo = styled.Image`
  width: 375px;
`;

const Title = styled.Text`
  font-size: 60px;
  font-weight: bold;
  color: ${colors.primary};
`;

const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 30px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;
