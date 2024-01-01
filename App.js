import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage'
import Login from './screens/Login'
import CreateAcc from './screens/CreateAcc';
import CreateAcc2 from './screens/CreateAcc2';
import CreateAcc3 from './screens/CreateAcc3';
import CreateAcc4 from './screens/CreateAcc4';
import GetUserCredentials from './screens/GetUserCredentials';
import AboutCampusCrush from './screens/Learn/AboutCampusCrush';
import Thankyou from './screens/Thankyou';
import Feed from './screens/Feed';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <HomePageComponent/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
      <Stack.Screen name="Welcome" component={HomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="GetUserCredentials" component={GetUserCredentials} />
        <Stack.Screen name="AboutCampusCrush" component={AboutCampusCrush} />
        <Stack.Screen name="CreateAcc" component={CreateAcc} />
        <Stack.Screen name="CreateAcc2" component={CreateAcc2} />
        <Stack.Screen name="CreateAcc3" component={CreateAcc3} />
        <Stack.Screen name="CreateAcc4" component={CreateAcc4} />
        <Stack.Screen name="Thankyou" component={Thankyou} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

