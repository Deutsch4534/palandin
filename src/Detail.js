import React, { useState } from "react";
import { StyleSheet, Alert, AsyncStorage } from 'react-native';

import styled from "styled-components";
import BlackButton from "./components/BlackButton";
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import CircleButton from "./components/CircleButton";
import Twitter from "./assets/twitter.png";
import ArrowIcon from "./assets/arrowLeft.png";
import colors from "./styles";
import twitter, { TWLoginButton } from 'react-native-simple-twitter'

export default class SocialLogin extends React.Component {
  // const [state, setState] = useState(null);
  state = {
    active: 5,
  }

  onGetAccessToken = async ({ oauth_token, oauth_token_secret }) => {
    const { active } = this.state;

    console.log('oauth_token', oauth_token);
    console.log('oauth_token_secret', oauth_token_secret);

    await AsyncStorage.setItem('oauth_token', oauth_token)
    await AsyncStorage.setItem('oauth_token_secret', oauth_token_secret)
    await AsyncStorage.setItem('active', active)
    return twitter.setAccessToken(oauth_token, oauth_token_secret)
  }

  onSuccess = async (user) => {
    await AsyncStorage.setItem('user', user.screen_name)

    return Alert.alert(
      "Success",
      "Your app is authorized to twitter",
      [
        {
          text: 'Go HomeScreen',
          onPress: () => {
            this.props.navigation.goBack();
          }
        }
      ]
    )
  }

  onClose = (e) => {
    console.log("press close button")
  }

  onError = (err) => {
    console.log(err)
  }


  render() {
    const { active } = this.state;
    return (
      <SocialLoginWrapper>
        <TitleContainer>
          <Subtitle>Clean.</Subtitle>
        </TitleContainer>
        <ButtonContainer>
          <BlackButton text="Last tweet" onPress={() => this.setState({ active: 1 })} active={active === 1} />
          <Divider />
          <BlackButton text="Last 5 tweets" onPress={() => this.setState({ active: 5 })} active={active === 5} />
          <Divider />
          <BlackButton text="Last 15 tweets" onPress={() => this.setState({ active: 15 })} active={active === 15} />
          <Divider />
          <BlackButton text="Last 20 tweets" onPress={() => this.setState({ active: 20 })} active={active === 20} />
          <Divider />
          <Text>We will clean up to 20 per day</Text>
        </ButtonContainer>
        <BottomContainer>
          <CircleButton icon={ArrowIcon} onPress={() => this.props.navigation.goBack()}/>
          <TWLoginButton headerColor={'white'}
            onGetAccessToken={this.onGetAccessToken}
            onSuccess={this.onSuccess}
            closeText="close"
            closeTextStyle={styles.loginCloseText}
            onClose={this.onClose}
            onError={this.onError}
          >
            <IconButton icon={Twitter} text="Log in with Twitter" />
          </TWLoginButton>
        </BottomContainer>
      </SocialLoginWrapper>
    );
  }
}

const SocialLoginWrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${colors.secundary};
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
`;

const TitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.secundary};
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const BottomContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Subtitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 30px;
`;

const Text = styled.Text`
  font-size: 14px;
  color: ${colors.primary};
  color: rgba(255, 255, 255, 0.5);
`;

const Divider = styled.View`
  width: 100%;
  height: 40px;
`;



const styles = StyleSheet.create({
  loginCloseText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
