import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 
import { backgroundColor } from './src/styles/backgroundColors';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <LinearGradient
    colors={backgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <Text style={styles.firstText}>[Icon]</Text>
    <View style={styles.icon} />
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
     <TouchableOpacity style={styles.login} onPress={() => console.log("hi")}>
      <Text style={styles.loginText}>Login <AntDesign name="login" size={22} color="black" /></Text>
    </TouchableOpacity>
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
    fontSize: 24
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    height: 40,
    borderColor: 'transparent',
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
    fontStyle: 'italic',
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
