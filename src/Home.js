import React, { useEffect, useState, Fragment } from "react";
import { AsyncStorage } from 'react-native';
import styled from "styled-components";
// import * as blockstack from "blockstack";
import SessionRow from "./components/SessionRow";
import Card from "./components/Card";
import TwitterLogo from "./assets/twitter.png";
import InstagramLogo from "./assets/instagram.png";
import TinderLogo from "./assets/tinder.png";
import FacebookLogo from "./assets/facebook.png";
import GoogleLogo from "./assets/google.png";
import colors from "./styles";
import Button from "./components/Button";
import twitter from 'react-native-simple-twitter';
import RNtwitter, {auth} from 'react-native-twitter';

const twitterDescriptions = [
  {title: 'Delete old photos from twitter'}
]

export default class Home extends React.Component {
  state = {
    isSetted: false,
    twitterTokens: false,
    isLoading: false,
  }

  async componentDidMount() {
    // await AsyncStorage.clear();
    const oauth_token = await AsyncStorage.getItem('oauth_token');
    const oauth_token_secret = await AsyncStorage.getItem('oauth_token_secret');
    const active = await AsyncStorage.getItem('active');

    await twitter.setConsumerKey('gAyAOBXxQ3AV8GVTIkaU9zkrJ', 'F0eEaImflKVRfAjxdxtByivlz6GjMRGXiMBWmsh645PHTZp1JR')

    this.setState({ oauth_token, oauth_token_secret, active })

    this.props.navigation.addListener('didFocus', async () => {
      const oauth_token = await AsyncStorage.getItem('oauth_token');
      const oauth_token_secret = await AsyncStorage.getItem('oauth_token_secret');
      const active = await AsyncStorage.getItem('active');

      await twitter.setConsumerKey('gAyAOBXxQ3AV8GVTIkaU9zkrJ', 'F0eEaImflKVRfAjxdxtByivlz6GjMRGXiMBWmsh645PHTZp1JR')

      this.setState({ oauth_token, oauth_token_secret, active })
    });
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('didFocus');
  }



  handleTwitterClean = async () => {
    this.setState({ isLoading: true })
    const { oauth_token, oauth_token_secret, active } = this.state;
    // twitter.setAccessToken(twitterTokens.oauth_token, twitterTokens.oauth_token_secret)
    const tokens = {
      consumerKey: 'gAyAOBXxQ3AV8GVTIkaU9zkrJ',
      consumerSecret: 'F0eEaImflKVRfAjxdxtByivlz6GjMRGXiMBWmsh645PHTZp1JR',
      accessToken: oauth_token,
      accessTokenSecret: oauth_token_secret,
    }


    const { rest } = RNtwitter(tokens);


    /*const data = await rest.post('statuses/destroy/:id', {
      id: "1136094464039182336"
    });*/

    const user_id = await AsyncStorage.getItem('user');


    const data = await rest.get('statuses/user_timeline', {
      user_id,
      count: active,
      include_entities: true,
      result_type: "recent"
    });


    Promise.all(
      data.map(async tweet => {
        await rest.post('statuses/destroy/:id', {
          id: tweet.id_str,
        });
      })
    )
    this.setState({ isLoading: false })

  }

  render() {
    const { oauth_token, isLoading } = this.state;

    console.log('oauth_token', oauth_token);
    return (
      <Wrapper>
      <ScrollWrapper>
        {!oauth_token ? (
            <Fragment>
            <SessionRow title="Apps" />
            <Card
              title={'Wise Cleaner for Twitter'}
              img={TwitterLogo}
              text={twitterDescriptions}
              buttonText={'Set up 🚀'}
              onPress={() => this.props.navigation.navigate('Detail')}
            />
            </Fragment>
            ) : (
            <Fragment>
            <SessionRow title="Todo" />
            <Card
              title={'Wise Cleaner for Twitter'}
              img={TwitterLogo}
              text={twitterDescriptions}
              buttonText={'Clean 🚀'}
              onPress={this.handleTwitterClean}
              isLoading={isLoading}
            />
            </Fragment>

            )}
        <SessionRow title="Comming Soon" />
        {CommingSoon.map((data, index) => (
          <Card
            key={`Card_${index}`}
            title={data.title}
            img={data.logo}
            text={data.descriptions}
            buttonText={data.buttonText}
          />
        ))}
        </ScrollWrapper>
      </Wrapper>
    );
  }
}


const CommingSoon = [
  {
    title: "Smart Privacy for Twitter",
    descriptions: [
      {
        title: "Disable personalized Ads"
      },
      {
        title: "OFF let others find you by your email address or phone Number"
      },
      {
        title: "OFF track where you see Twitter content across the web"
      },
      {
        title: "OFF Share your data with Twitter's business partners"
      }
    ],
    logo: TwitterLogo
  },
  {
    title: "Cleaner for Instagram",
    descriptions: [
      {
        title: "Delete old photos from instagram"
      }
    ],
    logo: InstagramLogo
  },
  {
    title: "Cleaner for Tinder",
    descriptions: [
      {
        title: "Delete old chat messages from tinder"
      }
    ],
    logo: TinderLogo
  },
  {
    title: "Delete Google searches",
    descriptions: [
      {
        title: "Delete your Google Search history"
      }
    ],
    logo: GoogleLogo
  }
];

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${colors.secundary};
  height: 100%;
`;


const ScrollWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  }
})`
`;



const TitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.secundary};
`;

const LogoContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${colors.primary};
`;

const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 30px;
`;

const ButtonContainer = styled.Text`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;







/*
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchUserInfo = async () => {
      //@TODO uncomment

      // const result = await blockstack.loadUserData();
      console.log("fetch result", result);
      setState(result.data);
    };

    fetchUserInfo();
  }, []);

  const handleLogout = () => {
    // blockstack.signUserOut();
  };
*/