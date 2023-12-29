import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GradientText from './src/styles/gradientText';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

export default function HomePage(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return(
    <LinearGradient
    colors={['#ef9d9d', '#ef78a8', '#9d5594']}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <Text style={styles.firstText}>[Icon]</Text>
    <View style={styles.icon} />
    <Text style={styles.welcome}>Welcome to </Text>
    <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
      CampusCrush
    </GradientText>
    <Text style={styles.missionStatement}>
      The app that <Text style={styles.supercharge}>supercharges</Text> how you meet, chat, and interact with others!
    </Text>

      {/* <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="black" 
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black" 
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      /> */}


    <TouchableOpacity style={styles.login} onPress={() => console.log('login')}>
      <Text style={styles.buttonFont}>Login <AntDesign name="login" size={22} color="black" /></Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.create} onPress={() => console.log('create')}>
      <Text style={styles.buttonFont}>Create Account <AntDesign name="adduser" size={22} color="black" /></Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Text style={styles.info}><Ionicons name="ios-information-circle-outline" size={20} color="black" /> Learn about CampusCrush</Text>
    </TouchableOpacity>

  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  info: {
    fontSize: 18,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'transparent', // Slightly transparent white background
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    // backgroundColor: '#fff'
  },
  buttonText1: {
    textAlign: 'center',
    color: '#4C64FF',
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198
},
  firstText: {
    marginTop: '35%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  campusCrush: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    marginBottom: '10%',
  },
  missionStatement: {
    marginTop: '5%',
    fontSize: 24,
    color: 'black',
    marginHorizontal: '3%',
    marginBottom: '40%',
  },
  supercharge: {
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3,
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.55)',
    width: '70%',
    marginBottom: '5%'
  },
  create: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.55)',
    width: '70%',
    marginBottom: '10%'
  },
  buttonFont: {
    fontSize: 22,
    fontWeight: '400',
  }
});