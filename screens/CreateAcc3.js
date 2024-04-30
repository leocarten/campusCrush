import { LinearGradient } from 'expo-linear-gradient';
import { Alert, StyleSheet } from 'react-native';
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
import MovingIcon from './src/components/movingIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker'
import { Modal } from 'react-native';
import { Button } from 'react-native';
import { updateGlobalVariables } from './globalVariables/GlobalVariables';
import { getVariables } from './globalVariables/GlobalVariables';
import * as ImageManipulator from 'expo-image-manipulator';

function CreateAcc() {

  const navigation = useNavigation();
  const [image, setImage] = useState();

  const lastPage = () => {
    navigation.navigate('CreateAcc1a');
  };
  const nextPage = () => {
    // console.log(image)
    const attributes = getVariables();
    if(attributes.base64 != '' && attributes.base64 != undefined && attributes.base64 != null){
      navigation.navigate('CreateAcc4');
    }
    else{
      Alert.alert('Picture required', 'CampusCrush requires a picture to be uploaded. Show the world what you look like!', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
    }
  };

  const removeImage = async () => {
    try{
      await updateGlobalVariables('base64', '');
      Alert.alert('Photo has been removed.');
    }
    catch(e){

    }
  }

  const uploadImage = async (mode) => {
    try{
      if(mode === 'gallery'){
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        let result =  await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          // base64: true,
          allowsEditing: true,
          aspect: [1,1],
          allowsMultipleSelection: false,
          quality: 0.1
        })
        if(!result.canceled){
          let resizedImage = await ImageManipulator.manipulateAsync(
            result.assets[0].uri,
            [{ resize: { width: 180, height: 180 } }],
            { compress: 0.8, format: 'jpeg', base64: true }
          );
          
          await saveImage(resizedImage.base64)
        }
      }


      else{
        await ImagePicker.requestCameraPermissionsAsync();
        let result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1,1],
          quality: 0.1,
          // base64: true
        });
        if(!result.canceled){
          let resizedImage = await ImageManipulator.manipulateAsync(
            result.assets[0].uri,
            [{ resize: { width: 180, height: 180 } }],
            { compress: 0.8, format: 'jpeg', base64: true }
          );
          await saveImage(resizedImage.base64)
        }
      }
    }
    catch(error){
      Alert.alert(
        "You need to give CampusCrush access to your camera roll."
      )
      console.log(error);
    }

  }

  const saveImage = async (image_) => {
    try{
      // setImage(image_)

      // console.log(image_.length)
      updateGlobalVariables('base64', image_)
      
      Alert.alert('Upload successful', 'Your image has been uploaded!', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
    }
    catch(e){
      console.log(e)
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
    <Steps count={4} directions={"Upload Pictures"} style={{alignItems: 'left'}}/>
    <HorizontalIconLine count={4}  />


    <View>
      <Text style={styles.info}><Ionicons name="ios-information-circle-outline" size={20} color="black" /> Learn how to become a verified user</Text>
    </View>

  <View style={styles.imageSelector}>
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() => uploadImage('camera')}>
        {/* <FontAwesome5 name="camera" size={30} color="black" style={styles.imageIcon}/> */}
          <MaterialIcons name="add-a-photo" size={30} color="rgba(0,0,0,0.8)" style={styles.imageIcon}/>
          <Text style={styles.iconText}>Camera</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => uploadImage('gallery')}>
          <FontAwesome name="photo" size={30} color="rgba(0,0,0,0.8)" style={styles.imageIcon} />
          <Text style={styles.iconText}>Photo Gallery</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={removeImage}>
          <Ionicons name="trash-bin" size={30} color="rgba(0,0,0,0.8)" style={styles.imageIcon} />
          <Text style={styles.iconText}>Remove Image</Text>
        </TouchableOpacity>
      </View>
    </View>


    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.next} onPress={lastPage}>
        <Text style={styles.buttonFont}><Entypo name="arrow-with-circle-left" size={24} color="black"/> Back</Text>
      </TouchableOpacity>

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
  iconText:{
    fontSize: 12,
    color: '#333',
    fontWeight: '600'
  },
  imageIcon:{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5%'
  },
  info: {
    fontSize: 16,
    marginLeft: '3%',
    marginBottom: '2%'
  },
  imageContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 1,
    marginLeft: '2%',
    marginRight: '2%',
    borderRadius: 8,
    padding: 5,
  },
  imageSelector:{
    flexDirection: 'row',
    marginTop: '10%',
    marginBottom: '10%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop: '75%', 
    marginBottom: '10%', 
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
