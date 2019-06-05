/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage, Alert} from 'react-native';
import twitter, { TWLoginButton } from 'react-native-simple-twitter'
import Home from './src/Home';
import Navigator from './src/navigation';
import { SafeAreaView } from 'react-navigation';

type Props = {};
export default class App extends Component<Props> {

  async componentDidMount() {
    await twitter.setConsumerKey('gAyAOBXxQ3AV8GVTIkaU9zkrJ', 'F0eEaImflKVRfAjxdxtByivlz6GjMRGXiMBWmsh645PHTZp1JR')
    /* check AsyncStorage */
    try {
      const userData = await AsyncStorage.getItem("user");

      if (userData !== null) {
        const user = JSON.parse(userData);

        twitter.setAccessToken(user.token, user.tokenSecret);

        try {
          const user = await twitter.get('account/verify_credentials.json', { include_entities: false, skip_status: true, include_email: true });

          // this.props.navigation.replace('Home', { user });
        } catch (err) {
          console.log(err);
        }
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  onGetAccessToken = ({ oauth_token, oauth_token_secret }) => {
    // this.props.dispatch({ type: "TOKEN_SET", token: oauth_token, token_secret: oauth_token_secret })
    console.log('oauth_token', oauth_token);
    console.log('oauth_token_secret', oauth_token_secret);
    return twitter.setAccessToken(oauth_token, oauth_token_secret)
  }

  onSuccess = (user) => {
    console.log('onSuccess user', user);

    Alert.alert(
      "Success",
      "ログインできました",
      [
        {
          text: 'Go HomeScreen',
          onPress: () => {
            console.log('press')
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
    const Launch = Navigator();
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <Launch />
        <SafeAreaView />
      </View>
    )

    return (
      <View style={styles.container}>
        <TWLoginButton headerColor={'white'}
          onGetAccessToken={this.onGetAccessToken}
          onSuccess={this.onSuccess}
          closeText="閉じる"
          closeTextStyle={styles.loginCloseText}
          onClose={this.onClose}
          onError={this.onError}><Text>Connect twitter</Text></TWLoginButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    flex: 1,
    padding: 64
  },
  titleText: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold"
  },
  loginContainer: {
    paddingHorizontal: 32,
    marginBottom: 64,
    backgroundColor: "transparent"
  },
  loginButton: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 64,
    overflow: "hidden"
  },
  loginButtonText: {
    color: 'black',//Constants.manifest.primaryColor,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  loginCloseText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
