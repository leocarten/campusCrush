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
import MovingIcon from './src/components/movingIcon';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <SafeAreaView>
    <View style={{marginTop:'3%', marginBottom: '3%', alignSelf: 'center'}}>
      <MovingIcon/>
    </View>
    <ScrollView>
    <Steps count={2} directions={"Build your profile"} style={{alignItems: 'left'}}/>
    <HorizontalIconLine count={2}  />
    <View>
      <Text style={styles.info}><Ionicons name="ios-information-circle-outline" size={20} color="black" /> Only the Name, Gender, and Birthday fields are <Text style={{fontWeight:'bold'}}>required</Text>, the rest will help other users get to know you better!</Text>
    </View>
      {/* <Text style={styles.welcome}>Let's start by getting some basic information!</Text> */}
      <UserInputAccCreation initMessage={"My first name is ..."} icon="new-message" field={"firstname"} typeOfChange={'creation'}/>

      {/* <UserInputAccCreation initMessage={"My birthday is ..."} icon="calendar" field={"birthday"}/> */}
      <CustomDatePicker/>

      <UserInputAccCreation initMessage={"Create a short bio ..."} icon="quote" field={"bio"} typeOfChange={"creation"}/>
      <DropdownComponent initMessage="I identify as a ..." options={[{ label: 'Male', value: '1' },{ label: 'Female', value: '2' },{ label: 'Other', value: '3' },]} icon={<Ionicons name="person" size={20} color="black" style={{ marginRight: 5 }}/>} field={"gender"} typeOfChange={"creation"}/>
      <UserInputAccCreation initMessage={"One thing on my bucket-list ..."} icon="bucket" field={"bucket_list"} typeOfChange={"creation"}/>
      <UserInputAccCreation initMessage={"To unlock my heart, you need ..."} icon="lock-open" field={"win_my_heart"} typeOfChange={"creation"}/>
      <MultiSelectComponent initMessage={"My interests and hobbies are ..."} options={interestAndHobbies} icon={<MaterialIcons name="lightbulb" size={20} color="black" style={{ marginRight: 9 }}/>} field={"interests_hobbies"} typeOfChange={"creation"}/>
      <MultiSelectComponent initMessage={"I listen to ..."} options={musicChoices} icon={<Entypo name="folder-music" size={22} color="black" style={{ marginRight: 9 }}/>} field={"music_preference"} typeOfChange={"creation"}/>
      <UserInputAccCreation initMessage={"My job title is ..."} icon="briefcase" field={"job"} typeOfChange={"creation"}/>

      <DropdownComponent initMessage="I have tattoos ..." options={[{ label: 'Yes', value: '1' },{ label: 'No, but I want some in the future', value: '2' }, { label: 'No', value: '3' }]} icon={<MaterialCommunityIcons name="needle" size={22} color="black" style={{ marginRight: 6 }}/> } field={"has_tattoos"} typeOfChange={"creation"}/>
      <DropdownComponent initMessage="I am a ..." options={[{ label: 'Morning person', value: '1' },{ label: 'Night owl', value: '2' }, { label: 'Both', value: '3' }, { label: 'Neither', value: '4' }]} icon={<MaterialCommunityIcons name="sleep" size={22} color="black" style={{ marginRight: 6 }}/> } field={"sleep_schedule"} typeOfChange={"creation"}/>
     
      <DropdownComponent initMessage="I exercise ..." options={[{ label: 'Daily', value: '1' },{ label: 'Every other day', value: '2' }, { label: 'Weekly', value: '3' }, { label: "I don't exercise", value: '4' }]} icon={<MaterialCommunityIcons name="dumbbell" size={22} color="black" style={{ marginRight: 6 }}/> } field={"workout"} typeOfChange={"creation"}/>
      <DropdownComponent initMessage="I prefer communication via ..." options={[{ label: 'In person', value: '1' },{ label: 'Texting', value: '2' }, { label: 'Phone calls', value: '3' }, { label: "Video chats", value: '4' }]} icon={<Ionicons name="chatbubbles-sharp" size={22} color="black" style={{ marginRight: 6 }}/> } field={"communication_style"} typeOfChange={"creation"}/>
      
      <DropdownComponent
        initMessage="An ideal first meet-up would be ..."
        options={[
          { label: 'Video chat', value: '1' },
          { label: 'A chill night at home', value: '2' },
          { label: 'Play a board game', value: '3' },
          { label: 'Go stargazing', value: '4' },
          { label: 'Go to a coffee shop', value: '5' },
          { label: 'Grab a bite of food', value: '6' },
          { label: 'Catch a movie', value: '7' },
          { label: 'Go for a walk', value: '8' },
          { label: 'Go on a hike', value: '9' },
          { label: 'Go to a trivia night', value: '10' },
          { label: 'Visit a karaoke bar', value: '11' },
        ]}
        icon={<FontAwesome5 name="people-arrows" size={19} color="black" style={{ marginRight: 6 }}/> }
        field={"ideal_first_meetup"}
        typeOfChange={"creation"}
      />

      <DropdownComponent initMessage="I'd prefer a ..." options={[{ label: 'Dog', value: '1' },{ label: 'Cat', value: '2' },{ label: "Fish", value: '3' },{ label: "Lizard", value: '4' },{ label: "Other", value: '5' }]} icon={<MaterialIcons name="pets" size={20} color="black" style={{ marginRight: 6 }} /> } field={"pet_preference"} typeOfChange={"creation"}/>
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
    marginBottom: '2%',
    marginRight: '3%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: '10%', 
    marginBottom: '40%', 
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
