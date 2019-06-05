import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Home from  './Home'
import Detail from  './Detail'
// import Auth from './AuthRouter'

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

const Router = (token: string) =>
  createAppContainer(
    createSwitchNavigator(
      {
        AppNavigator,
      },
      {
        headerMode: 'none',
        initialRouteName: !token ? 'AppNavigator' : 'AppNavigator',
      },
    ),
  )

export default Router