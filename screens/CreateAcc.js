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
import CustomDatePicker from './src/components/CustomDatePicker';
import { Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function CreateAcc() {
  const navigation = useNavigation();

  const lastPage = () => {
    navigation.navigate('GetUserCredentials');
  };

  const nextPage = () => {
    // console.log(getVariables());
    const attributes = getVariables();
    if(attributes.firstname != '' && attributes.birthday != '' && attributes.gender != ''){
      navigation.navigate('CreateAcc1a');
    }
    else{
      Alert.alert('Required fields not filled in', 'CampusCrush requires the first name, gender, and birthday field to be filled in.', [
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
    <Text style={styles.firstText}>[Icon]</Text>
    <View style={styles.icon} />
    <ScrollView>
    <Steps count={2} directions={"Build your profile"} style={{alignItems: 'left'}}/>
    <HorizontalIconLine count={2}  />
    <View>
      <Text style={styles.info}><Ionicons name="ios-information-circle-outline" size={20} color="black" /> Only the Name, Gender, and Birthday fields are <Text style={{fontWeight:'bold'}}>required</Text>, the rest will help other users get to know you better!</Text>
    </View>
      {/* <Text style={styles.welcome}>Let's start by getting some basic information!</Text> */}
      <UserInputAccCreation initMessage={"My first name is ..."} icon="new-message" field={"firstname"}/>

      {/* <UserInputAccCreation initMessage={"My birthday is ..."} icon="calendar" field={"birthday"}/> */}
      <CustomDatePicker/>

      <UserInputAccCreation initMessage={"Create a short bio ..."} icon="quote" field={"bio"}/>
      <DropdownComponent initMessage="I identify as a ..." options={[{ label: 'Male', value: '1' },{ label: 'Female', value: '2' },{ label: 'Other', value: '3' },]} icon={<Ionicons name="person" size={20} color="black" style={{ marginRight: 5 }}/>} field={"gender"}/>
      <UserInputAccCreation initMessage={"One thing on my bucket-list ..."} icon="bucket" field={"bucket_list"}/>
      <UserInputAccCreation initMessage={"To unlock my heart, you need ..."} icon="lock-open" field={"win_my_heart"}/>
      <MultiSelectComponent initMessage={"My interests and hobbies are ..."} options={interestAndHobbies} icon={<MaterialIcons name="lightbulb" size={20} color="black" style={{ marginRight: 9 }}/>} field={"interests_hobbies"}/>
      <MultiSelectComponent initMessage={"I listen to ..."} options={musicChoices} icon={<Entypo name="folder-music" size={22} color="black" style={{ marginRight: 9 }}/>} field={"music_preference"}/>
      <UserInputAccCreation initMessage={"My job title is ..."} icon="briefcase" field={"job"}/>

      <DropdownComponent initMessage="I have tattoos ..." options={[{ label: 'Yes', value: '1' },{ label: 'No, but I want some in the future', value: '2' }, { label: 'No', value: '3' }]} icon={<MaterialCommunityIcons name="needle" size={22} color="black" style={{ marginRight: 6 }}/> } field={"has_tattoos"}/>
      <DropdownComponent initMessage="I am a ..." options={[{ label: 'Morning person', value: '1' },{ label: 'Night owl', value: '2' }, { label: 'Both', value: '3' }, { label: 'Neither', value: '4' }]} icon={<MaterialCommunityIcons name="sleep" size={22} color="black" style={{ marginRight: 6 }}/> } field={"sleep_schedule"}/>
      <DropdownComponent initMessage="I exercise ..." options={[{ label: 'Daily', value: '1' },{ label: 'Every other day', value: '2' }, { label: 'Weekly', value: '3' }, { label: "I don't exercise", value: '4' }]} icon={<MaterialCommunityIcons name="dumbbell" size={22} color="black" style={{ marginRight: 6 }}/> } field={"workout"}/>

      <DropdownComponent initMessage="I'd prefer a ..." options={[{ label: 'Dog', value: '1' },{ label: 'Cat', value: '2' },{ label: "Fish", value: '3' },{ label: "Lizard", value: '4' },{ label: "Other", value: '5' }]} icon={<MaterialIcons name="pets" size={20} color="black" style={{ marginRight: 6 }} /> } field={"pet_preference"}/>
    <View style={styles.buttonContainer}>
      <Text style={styles.next} onPress={lastPage}>
        <Text style={styles.buttonFont}><Entypo name="arrow-with-circle-left" size={24} color="black" /> Back </Text>
      </Text>

      <TouchableOpacity style={styles.next} onPress={nextPage}>
        <Text style={styles.buttonFont}>Next <Entypo name="arrow-with-circle-right" size={24} color="black" /></Text>
      </TouchableOpacity>
    </View>

    </ScrollView>

    </LinearGradient>
  );
  }

const styles = StyleSheet.create({
  info: {
    fontSize: 16,
    marginLeft: '3%',
    marginBottom: '2%',
    marginRight: '3%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: '10%', 
    marginBottom: '20%', 
    marginLeft: '10%',
    marginRight: '10%'
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
      },
      datePicker: {
        textAlign:'left',
      }
})

export default CreateAcc;
