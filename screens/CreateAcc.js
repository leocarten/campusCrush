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

function CreateAcc() {
  const navigation = useNavigation();

  const lastPage = () => {
    navigation.navigate('GetUserCredentials');
  };

  const nextPage = () => {
    navigation.navigate('CreateAcc1a');
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
      <Text style={styles.info}><Ionicons name="ios-information-circle-outline" size={20} color="black" /> Only the Name and Birthday field is required, the rest will help others get to know you better!</Text>
    </View>
      {/* <Text style={styles.welcome}>Let's start by getting some basic information!</Text> */}
      <UserInputAccCreation initMessage={"My first name is ..."} icon="person" />
      <UserInputAccCreation initMessage={"My birthday is ..."} icon="person" />
      <UserInputAccCreation initMessage={"Create a short bio ..."} icon="person" />
      <DropdownComponent initMessage="I am a ..." options={[{ label: 'Male', value: '1' },{ label: 'Female', value: '2' },{ label: 'Other', value: '3' },]} icon={<Ionicons name="person" size={20} color="black" style={{ marginRight: 5 }}/>} />
      <UserInputAccCreation initMessage={"One thing on my bucket-list ..."} icon="bucket"/>

      <MultiSelectComponent initMessage={"My interests and hobbies are ..."} options={interestAndHobbies} icon={<MaterialIcons name="lightbulb" size={20} color="black" style={{ marginRight: 9 }}/>} />

      <MultiSelectComponent initMessage={"I listen to ..."} options={musicChoices} icon={<Entypo name="folder-music" size={22} color="black" style={{ marginRight: 9 }}/>} />
      <DropdownComponent initMessage="I'd rather have a ..." options={[{ label: 'Dog', value: '1' },{ label: 'Cat', value: '2' },{ label: "Fish", value: '3' },{ label: "Lizard", value: '4' },{ label: "Other", value: '5' }]} icon={<MaterialIcons name="pets" size={20} color="black" style={{ marginRight: 4 }}/>}/>


    <View style={styles.buttonContainer}>
      <Text style={styles.next} onPress={lastPage}>
        <Text style={styles.buttonFont}><Entypo name="arrow-with-circle-left" size={26} color="black" /> Back </Text>
      </Text>

      <TouchableOpacity style={styles.next} onPress={nextPage}>
        <Text style={styles.buttonFont}>Next <Entypo name="arrow-with-circle-right" size={26} color="black" /></Text>
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
    marginBottom: '2%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 30, 
    marginBottom: 60, 
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
      }
})

export default CreateAcc;
