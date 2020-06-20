import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/Components';
import ListComponentScreen from './src/screens/ListScreen';
import ButtonAndTouchableOpacityScreen from './src/screens/ButtonAndTouchableOpacity';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListComponentScreen,
    ButtonAndTO: ButtonAndTouchableOpacityScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "React First App"
    }
  }
);

export default createAppContainer(navigator);
