import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/Components';
import ListComponentScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    ListComponents: ListComponentScreen
  },
  {
    initialRouteName: "ListComponents",
    defaultNavigationOptions: {
      title: "React First App"
    }
  }
);

export default createAppContainer(navigator);
