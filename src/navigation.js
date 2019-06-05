import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Home from  './Home'
import Detail from  './Detail'
import Login from './Login'

const stackConfig = {
  headerLayoutPreset: 'left',
  headerMode: 'none',
}

const AppNavigator = createStackNavigator({
    Home,
    Detail,
  },
  stackConfig
)

const AuthNavigator = createStackNavigator({
    Login,
  },
  stackConfig
)

const Router = (token: string) =>
  createAppContainer(
    createSwitchNavigator(
      {
        AuthNavigator,
        AppNavigator,
      },
      {
        headerMode: 'none',
        initialRouteName: token ? 'AppNavigator' : 'AuthNavigator',
      },
    ),
  )

export default Router