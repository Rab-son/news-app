import 'react-native-reanimated';
import { StyleSheet, Text, View } from 'react-native';
import { SplashScreen } from './screens/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/HomeScreen';
import { CategoryScreen } from './screens/CategoryScreen';

export default function App() {

  const Stack = createStackNavigator();

  const Drawer = createDrawerNavigator();

  const MainStack = () => (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name = 'Splash' component={SplashScreen} />
          <Stack.Screen name = 'Home' component={DrawerNavigator} />
        </Stack.Navigator>
  )

  const DrawerNavigator = () => (
    <Drawer.Navigator initialRouteName='Home' screenOptions={{ headerTitleAlign: 'center'}}>
      <Drawer.Screen name='Home' component={HomeScreen}/>
      <Drawer.Screen name='Sports' component={CategoryScreen}  initialParams={{category: 'sports'}} />
      <Drawer.Screen name='Business' component={CategoryScreen}  initialParams={{category: "business"}} />
      <Drawer.Screen name='Technology' component={CategoryScreen}  initialParams={{category: "technology"}} />
      <Drawer.Screen name='Science' component={CategoryScreen}  initialParams={{category: "science"}} />
      <Drawer.Screen name='Health' component={CategoryScreen}  initialParams={{category: "health"}} />
      <Drawer.Screen name='Entertainment' component={CategoryScreen}  initialParams={{category: "entertainment"}} />
    </Drawer.Navigator>
  )

  return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
