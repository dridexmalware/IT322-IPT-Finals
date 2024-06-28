// app/root/appnav.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../index'; // Adjust the import according to your file structure
import RegisterPage from '../RegisterPage';
import LoginPage from '../LoginPage';
import Profile from '../profile/Profile'; // Import Profile component

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Profile" component={Profile} /> {/* Ensure Profile screen is registered */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
