import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/Components';
import ListComponentScreen from './src/screens/ListScreen';
import ButtonAndTouchableOpacityScreen from './src/screens/ButtonAndTouchableOpacity';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareColorScreen from './src/screens/SquareColorScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		List: ListComponentScreen,
		ButtonAndTO: ButtonAndTouchableOpacityScreen,
		Image: ImageScreen,
		Counter: CounterScreen,
		Color: ColorScreen,
		SquareColor: SquareColorScreen,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'React First App',
		},
	}
);

export default createAppContainer(navigator);
