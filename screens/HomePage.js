import { ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GradientText from './src/styles/gradientText';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { backgroundColor } from "./src/styles/backgroundColors";
import { homePageColors } from "./src/styles/colors";
import { FontAwesome5 } from '@expo/vector-icons';
import MovingIcon from "./src/components/movingIcon";

export default function HomePage(){
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };
  const handleCreatePress = () => {
    navigation.navigate('GetUserCredentials');
  };
  const handleAbout = () => {
    navigation.navigate('AboutCampusCrush');
  };
  return(

    <LinearGradient
    colors={backgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <ScrollView>
      <View style={styles.container}>
    <Text style={styles.firstText}></Text>
    {/* <View style={styles.icon}>
    <FontAwesome5 name="hand-holding-heart" size={60} color="black" />
    </View> */}
    <MovingIcon/>
    <Text style={styles.welcome}>Welcome to </Text> 
    <GradientText colors={['#cc2b5e', '#753a88']} style={styles.campusCrush}>
    {/* <GradientText colors={['#5151e1', '#1e1e91']} style={styles.campusCrush}>  */}
      CampusCrush
    </GradientText>
    <Text style={styles.missionStatement}>
      The app that <Text style={styles.supercharge}>supercharges</Text> how you meet, chat, and interact with others!
    </Text>

    {/* <Text>
      Add self typing here... maybe?
    </Text> */}




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


    <TouchableOpacity style={styles.login} onPress={handleLoginPress}>
      <Text style={styles.buttonFont}>Login <AntDesign name="login" size={22} color="black" /></Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.create} onPress={handleCreatePress}>
      <Text style={styles.buttonFont}>Create Account <AntDesign name="adduser" size={22} color="black" /></Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={handleAbout}>
      <Text style={styles.info}><Ionicons name="ios-information-circle-outline" size={20} color="black" /> Learn about CampusCrush</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
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
    marginTop: '25%',
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
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3,
  },
  icon: {
    // width: 50,
    // height: 50,
    // backgroundColor: 'black',
    marginBottom: '10%',
  },
  missionStatement: {
    marginTop: '5%',
    fontSize: 26,
    color: homePageColors.primary,
    marginHorizontal: '3%',
    marginBottom: '55%',
  },
  supercharge: {
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.6)',
    width: '81%',
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
    borderColor: 'rgba(0, 0, 0, 0.6)',
    width: '81%',
    marginBottom: '10%'
  },
  buttonFont: {
    fontSize: 22,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.65)',
  }
});