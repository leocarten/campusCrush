import HomePageComponent from './HomePage';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <HomePageComponent/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
