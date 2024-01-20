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

function CreateAcc() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const lastPage = () => {
    navigation.navigate('CreateAcc3');
  };

  // const nextPage = async () => {
  //   setIsLoading(true);

  // }

  // const nextPage = () => {
  //   // navigation.navigate('Thankyou');
  //   // console.log(getVariables());
  //   const [loading, setLoading] = useState(false);
  //   setLoading(true);

  //   fetch('http://18.188.112.190:5001/createUser', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(getVariables()),
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle the response data
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       // Handle errors
  //       console.error('Error:', error);
  //     })
  //     .finally( () => {
  //       setLoading(false);
  //     });
  // };

  const [username, setUsername] = useState('');

  return (
    <LinearGradient
    colors={backgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <Text style={styles.firstText}>[Icon]</Text>
    <View style={styles.icon} />
    <ScrollView>
    <Steps count={6} directions={"Terms and Services"} style={{alignItems: 'left'}}/>
    <HorizontalIconLine count={6}  />


    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.next} onPress={lastPage}>
        <Text style={styles.buttonFont}><Entypo name="arrow-with-circle-left" size={26} color="black"/> Back</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.next} onPress={nextPage}>
        <Text style={styles.buttonFont}>Accept <AntDesign name="checkcircleo" size={26} color="black" /></Text>
      </TouchableOpacity> */}

      <AcceptTOS_Button/>



    </View>


    </ScrollView>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 20, 
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
