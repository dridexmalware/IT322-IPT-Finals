// app/root/appnav.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../index'; // Adjust the import according to your file structure
import RegisterPage from '../RegisterPage';
import LoginPage from '../LoginPage';
import Profile from '../profile/Profile'; // Import Profile component
import HomeScreen from '../home/HomeScreen';
import Alerts from '../home/Alerts';
import AlertsDetails from '../';
import Reports from '../home/Reports';
import SOS from '../home/SOS';
import ForgotPassword from '../password/ForgotPassword';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Alerts" component={Alerts} /> 
        <Stack.Screen name="AlertsDetails" component={AlertsDetails} /> 
        <Stack.Screen name="Reports" component={Reports} /> 
        <Stack.Screen name="Profile" component={Profile} /> 
        <Stack.Screen name="SOS" component={SOS} /> 
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="EmailCode" component={ForgotPassword} />
        <Stack.Screen name="PasswordConfirmation" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;