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
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import AcceptTOS_Button from './endpointStuff/CreateUser';
import * as Location from 'expo-location';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { updateGlobalVariables } from './globalVariables/GlobalVariables';
import MovingIcon from './src/components/movingIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { iconColors } from './src/styles/feedStyles/feedColors';

function CreateAcc() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const lastPage = () => {
    navigation.navigate('CreateAcc3');
  };

  const [address, setAddress] = useState();

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Please grant location permissions");
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      // setLocation(currentLocation);
      console.log("Location:");
      const lat = (currentLocation['coords']['latitude']);
      const long_ = (currentLocation['coords']['longitude']);

      console.log(lat);
      console.log(long_);

      // HARD-CODED VALUES FOR NOW
      updateGlobalVariables('lat',43.7570);
      updateGlobalVariables('long_',71.6882);

    };
    getPermissions();
  }, []);
  
  const [username, setUsername] = useState('');

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
    <Steps count={5} directions={"Terms and Services"} style={{alignItems: 'left'}}/>
    <HorizontalIconLine count={5}  />

    <View style={{marginLeft: '2%', marginRight: '2%'}}>
      <Text style={styles.firstSectionHeading}>CampusCrush Rules</Text>
      <Text style={styles.body}>
      At CampusCrush, our mission is to foster a safe and welcoming community where all users can connect and have fun. We want everyone to enjoy their experience on our platform. To ensure this, we ask all users to adhere to the following guidelines:                    </Text>
      <Text style={styles.bulletPoint}>
          <Text style={{fontWeight: '700', color: '#333' }}>1. Respect Others: </Text>Treat fellow users with kindness and respect. Harassment, hate speech, bullying, or any form of discriminatory behavior will not be tolerated.
      </Text>
      <Text style={styles.bulletPoint}>
          <Text style={{fontWeight: '700', color: '#333' }}>2. Keep it Clean: </Text> Help us maintain a friendly environment by refraining from posting inappropriate content, including but not limited to nudity, violence, or graphic imagery.
      </Text>
      <Text style={styles.bulletPoint}>
          <Text style={{fontWeight: '700', color: '#333' }}>3. Be Honest: </Text> Represent yourself truthfully and accurately. Do not impersonate others or engage in deceptive practices.
      </Text>
      <Text style={styles.bulletPoint}>
          <Text style={{fontWeight: '700', color: '#333' }}>4. Respect Privacy: </Text> Protect the privacy of yourself and others. Do not share personal information.
      </Text>
      <Text style={styles.bulletPoint}>
          <Text style={{fontWeight: '700', color: '#333' }}>5. Report Concerns: </Text> If you encounter any behavior that violates our guidelines or makes you feel uncomfortable, please report it to us immediately.
      </Text>

      <Text style={styles.sectionHeading}>What if I break CampusCrush rules?</Text>
      <Text style={styles.body}>
      At CampusCrush, we prioritize the safety and well-being of our community members. Violating our app guidelines undermines this commitment and can result in account termination and/or account banishment.                    
      </Text>
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.next} onPress={lastPage}>
        <Text style={styles.buttonFont}><Entypo name="arrow-with-circle-left" size={24} color="black"/> Back</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.next} onPress={nextPage}>
        <Text style={styles.buttonFont}>Accept <AntDesign name="checkcircleo" size={26} color="black" /></Text>
      </TouchableOpacity> */}

      <AcceptTOS_Button/>
    </View>


    </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 20, 
    // marginBottom: 60, 
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '40%'
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
      body:{
        fontSize: 20,
        marginBottom: '1%',
        color: '#333'
    },
    bulletPoint: {
        marginLeft: '5%',
        fontSize: 20,
        marginBottom: '1%',
        color:'#333',
        marginTop: '1%'
    },
    firstSectionHeading:{
        fontSize: 22,
        marginBottom: '1%',
        marginTop: '1%',
        fontWeight: 'bold',
        color:'black',
        fontFamily: 'Arial Rounded MT Bold'
    },
    sectionHeading:{
        fontSize: 22,
        marginBottom: '1%',
        marginTop: '5%',
        fontWeight: 'bold',
        color:'black',
        fontFamily: 'Arial Rounded MT Bold'
    },
})

export default CreateAcc;
