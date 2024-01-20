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
// import updateGlobalVariables from './globalVariables/GlobalVariables';
// import { getVariables } from './globalVariables/GlobalVariables';

function GetUserCredentials() {

  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const lastPage = () => {
    navigation.navigate('Welcome');
  };

  const nextPage = () => {
    // updateGlobalVariables("username", username);
    // updateGlobalVariables("password", password);
    // console.log(getVariables());

    navigation.navigate('CreateAcc');
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
    <Steps count={1} directions={"User Credentials"} style={{alignItems: 'left'}}/>
    <HorizontalIconLine count={1}  />
    <View>
      <Text style={styles.info}><Ionicons name="ios-information-circle-outline" size={20} color="black" /> Password must be 10 or more characters</Text>
    </View>

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
    marginBottom: '10%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: 20, 
    marginBottom: 60, 
    marginLeft: '10%',
    marginRight: '10%',
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
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.45)',
    borderRadius: 5,
    marginBottom: '5%',
    width: '80%'
  },
  iconContainer: {
    paddingLeft: 10,
    paddingRight: 5,
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

export default GetUserCredentials;
