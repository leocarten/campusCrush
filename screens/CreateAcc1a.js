import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, TextInput } from 'react-native';
import React from 'react';
import GradientText from './src/styles/gradientText';
import HorizontalIconLine from './ProcessBar';
import Steps from './steps';
import MultiSelectComponent from './src/components/multiSelect';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import interestAndHobbies from './src/data/userInterests';
import musicChoices from './src/data/musicChoices';
import DropdownComponent from './src/components/dropDown';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import UserInputAccCreation from './src/components/userInputAccountCreation';
import { backgroundColor } from './src/styles/backgroundColors';
import { getVariables } from './globalVariables/GlobalVariables';
import { Alert } from 'react-native';
import MovingIcon from './src/components/movingIcon';
import { SafeAreaView } from 'react-native-safe-area-context';

function CreateAcc1a() {
  const navigation = useNavigation();

  const lastPage = () => {
    navigation.navigate('CreateAcc');
  };

  const nextPage = () => {
    const attributes = getVariables();
    if(attributes.app_purpose != '' && attributes.wants_to_be_shown != ''){
      navigation.navigate('CreateAcc3');
    }
    else{
      Alert.alert('Required fields not filled in', 'CampusCrush requires both of these fields to be filled in, you can change your settings afterwards!', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
    }
  }

  
  return (
    <LinearGradient
    colors={backgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
      <SafeAreaView>
    <View style={{marginTop:'3%', marginBottom: '3%', alignSelf: 'center'}}>
      <MovingIcon/>
    </View>
    <ScrollView>
    <Steps count={3} directions={"Customize your feed"} style={{alignItems: 'left'}}/>
    <HorizontalIconLine count={3}  />
    <View>
      <Text style={styles.info}><Ionicons name="ios-information-circle-outline" size={20} color="black" /> How does this impact my feed?</Text>
    </View>
      {/* <Text style={styles.welcome}>Let's start by getting some basic information!</Text> */}
      <DropdownComponent initMessage="I am using this app to find..." options={[{ label: 'Nothing serious', value: '1' },{ label: 'A lasting relationship', value: '2' },{ label: "New experiences", value: '3' },{ label: "New friendships", value: '4' },{ label: "I'm not sure yet", value: '5' }]} icon={<FontAwesome5 name="user-friends" size={20} color="black" style={{ marginRight: 5 }}/>} field={"app_purpose"} typeOfChange={"creation"}/>

      {/* <DropdownComponent initMessage="I am using this app to ..." options={[{ label: 'Find a short-term partner', value: '1' },{ label: 'Find a long-term parter', value: '2' },{ label: "Meet new people", value: '3' },{ label: "Find new friends", value: '4' },{ label: "I'm not sure yet", value: '5' }]} icon={<FontAwesome5 name="user-friends" size={20} color="black" style={{ marginRight: 5 }}/>} field={"app_purpose"} typeOfChange={"creation"}/> */}
      <DropdownComponent initMessage="I want to be shown ..." options={[{ label: 'Males only', value: '1' },{ label: 'Females only', value: '2' },{ label: "Everyone", value: '3' },]} icon={<MaterialIcons name="person-search" size={28} color="black" style={{ marginRight: 4 }}/>} field={"wants_to_be_shown"} typeOfChange={"creation"}/>

     

    <View style={styles.buttonContainer}>
      <Text style={styles.next} onPress={lastPage}>
        <Text style={styles.buttonFont}><Entypo name="arrow-with-circle-left" size={24} color="black" /> Back </Text>
      </Text>

      <TouchableOpacity style={styles.next} onPress={nextPage}>
        <Text style={styles.buttonFont}>Next <Entypo name="arrow-with-circle-right" size={24} color="black" /></Text>
      </TouchableOpacity>
    </View>

    </ScrollView>
    </SafeAreaView>

    </LinearGradient>
  );
  }

const styles = StyleSheet.create({
  info: {
    fontSize: 16,
    marginLeft: '3%',
    marginBottom: '2%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 20, 
    marginBottom: 60, 
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '70%'
  },
  next: {
    backgroundColor: 'transparent',
    padding: 7,
    height: 40,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
  },
    center: {
        alignContent: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
    //   alignItems: 'center', 
    },
    firstText: {
        marginTop: '25%',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center'
      },
      welcome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'left',
        marginLeft: '2%',
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
        alignSelf: 'center'
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
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: '5%',
      },
      
      iconContainer: {
        paddingLeft: 10,
        paddingRight: 5,
      },
      buttonFont: {
        fontSize: 22,
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 0.8)',
      }
})

export default CreateAcc1a;
