import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import YinYogaScreen from './screens/YinYogaScreen';
import HathaYogaScreen from './screens/HathaYogaScreen';
import RestoratifYogaScreen from './screens/RestoratifYogaScreen';
import VinyasaYogaScreen from './screens/VinyasaYogaScreen';
import İyengarYogaScreen from './screens/İyengarYogaScreen';
import AshtangaYogaScreen from './screens/AshtangaYogaScreen';
import PowerYogaScreen from './screens/PowerYogaScreen';
import BikramYogaScreen from './screens/BikramYogaScreen';
import AdvancedAshtangaYogaScreen from './screens/AdvancedAshtangaYogaScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewsScreen from './screens/NewsScreen';
import MyWorkoutsScreen from './screens/MyWorkoutsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="YinYoga" component={YinYogaScreen} />
        <Stack.Screen name ="HathaYoga" component={HathaYogaScreen} />
        <Stack.Screen name="RestoratifYoga" component={RestoratifYogaScreen} />
        <Stack.Screen name="VinyasaYoga" component={VinyasaYogaScreen} />
        <Stack.Screen name="İyengarYoga" component={İyengarYogaScreen} />
        <Stack.Screen name="AshtangaYoga" component={AshtangaYogaScreen} />
        <Stack.Screen name="PowerYoga" component={PowerYogaScreen} />
        <Stack.Screen name="BikramYoga" component={BikramYogaScreen} />
        <Stack.Screen name="AdvancedAshtangaYoga" component={AdvancedAshtangaYogaScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} /> 
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="MyWorkouts" component={MyWorkoutsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
