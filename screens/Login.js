import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 
import { backgroundColor } from './src/styles/backgroundColors';
import { useNavigation } from '@react-navigation/native'
import { handleLogin } from '../endpoints/LoginUser';
import { getSecureValues } from '../authentication/getValue';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { deleteKey } from '../authentication/deleteValue';
import { saveSecureValue } from '../authentication/saveValue';
import { getItemsInFeed } from '../endpoints/GetItemsForFeed';
import MovingIcon from './src/components/movingIcon';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onLoginPress = async () => {
    // const loginResult = await handleLogin(username, password);
    // if(loginResult === true){
    //   console.log("Logging the person in now!");
    //   console.log("I am testing ....");
    //   // await saveSecureValue()
    //   // console.log(await getSecureValues('access'));
    //   // getItemsInFeed()
      navigation.navigate("Feed");
    // }
    // else {
    //   // navigation.navigate("Feed");
    //   navigation.navigate("ErrorPage",{body: "INVALID CREDENTIALS", message: "We could not locate your account in our records, did you use the correct username and password?", page: 6});
    // }
  };

  return (
    <LinearGradient
    colors={backgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
      <SafeAreaView>
    <View style={{marginTop:'15%', marginBottom: '3%', alignSelf: 'center'}}>
      <MovingIcon/>
    </View>
    <Text style={styles.title}>We're happy to see you <Text style={styles.supercharge}>again</Text></Text>
    <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
        <AntDesign name="user" size={24} color="black"/>
        </View>
        <TextInput
          style={styles.inputBox}
          placeholder="Username"
          placeholderTextColor={'rgba(0,0,0,.5)'}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
    </View>

    <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <AntDesign name="lock" size={24} color="black" />
        </View>
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          placeholderTextColor={'rgba(0,0,0,.5)'}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
    </View>


     <TouchableOpacity style={styles.login} onPress={onLoginPress}>
      <Text style={styles.loginText}>Login <AntDesign name="login" size={22} color="black" /></Text>
    </TouchableOpacity>


    {/* <GetLoginEndpoint username={username} password={password}/> */}
    </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center', 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.45)',
    borderRadius: 5,
    marginBottom: '5%',
  },
  iconContainer: {
    paddingLeft: 10,
    paddingRight: 5,
  },
  input: {
    flex: 1, // Takes up remaining space
    height: 40,
    paddingHorizontal: 10,
    color: 'black',
  },
  loginText: {
    fontSize: 22,
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center'
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 5,
    height: 40,
    borderColor: 'rgba(0, 0, 0, 0.75)',
    borderWidth: 2,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,

elevation: 2,
  },
  inputBox: {
    height: 40,
    paddingHorizontal: 10,
    color: 'black',
    borderWidth: 0,
    borderColor: 'black',
    paddingVertical: 10,
    width: '75%',
    fontSize: 20,
  },
  supercharge: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
  },
  firstText: {
    marginTop: '35%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    marginBottom: '10%',
  },
});

export default Login;
