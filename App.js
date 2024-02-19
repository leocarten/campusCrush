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
import CreateAcc1a from './screens/CreateAcc1a';
import FilterPage from './screens/FilterPage';
import Messages from './screens/Messages'
import Store from './screens/Store'
import PersonsProfile from './screens/PersonsProfile'
import ErrorPage from './screens/errorFiles/Error';
import FlashMessage from 'react-native-flash-message';
import Footer from './screens/src/components/feedComponents/footer';
import EditProfilePage from './screens/EditUserProfile';
import ViewProfilePage from './screens/ViewUserProfile';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <HomePageComponent/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Feed" component={Feed} /> */}
      <Stack.Screen name="Welcome" component={HomePage} />
      <Stack.Screen name="Feed" component={Feed} options={{ gestureEnabled: false }}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="GetUserCredentials" component={GetUserCredentials} />
        <Stack.Screen name="AboutCampusCrush" component={AboutCampusCrush} />
        <Stack.Screen name="CreateAcc" component={CreateAcc} />
        <Stack.Screen name="CreateAcc1a" component={CreateAcc1a} />
        <Stack.Screen name="CreateAcc2" component={CreateAcc2} />
        <Stack.Screen name="CreateAcc3" component={CreateAcc3} />
        <Stack.Screen name="CreateAcc4" component={CreateAcc4} />
        {/* <Stack.Screen name="Thankyou" component={Thankyou} options={{ gestureEnabled: false }}/> */}
        <Stack.Screen name="Thankyou" component={Thankyou} options={{ gestureEnabled: false }}/>
        <Stack.Screen name="FilterPage" component={FilterPage} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="PersonsProfile" component={PersonsProfile} />
        <Stack.Screen name="ErrorPage" component={ErrorPage} />
        <Stack.Screen name="EditProfilePage" component={EditProfilePage} options={{ animation:'fade' }}/>
        <Stack.Screen name="ViewProfilePage" component={ViewProfilePage} options={{ animation:'fade' }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

