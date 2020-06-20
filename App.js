import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/Components';
import ListComponentScreen from './src/screens/ListScreen';
import ButtonAndTouchableOpacityScreen from './src/screens/ButtonAndTouchableOpacity';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListComponentScreen,
    ButtonAndTO: ButtonAndTouchableOpacityScreen
  },
  {
    initialRouteName: "ButtonAndTO",
    defaultNavigationOptions: {
      title: "React First App"
    }
  }
);

export default createAppContainer(navigator);
