import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import Header from './src/components/feedComponents/header';
import { expandedIconColor, feedHeadingBackground } from './src/styles/feedStyles/feedColors';
import { feedBackgroundColor } from './src/styles/feedStyles/feedColors';
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { iconColors } from './src/styles/feedStyles/feedColors';
import { lineColor } from './src/styles/feedStyles/feedColors';
import { TouchableOpacity } from 'react-native';
import DropdownComponent from './src/components/dropDown';
import MultiSelectComponent from './src/components/multiSelect';
import UserInputAccCreation from './src/components/userInputAccountCreation';
import { Ionicons } from '@expo/vector-icons';
import interestAndHobbies from './src/data/userInterests';
import musicChoices from './src/data/musicChoices';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { getVariables } from './globalVariables/GlobalVariables';
import { updateUserVariables } from './globalVariables/UpdateUserAccount';
import { FontAwesome } from '@expo/vector-icons';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator';


const EditProfilePage = () => {
  const navigation = useNavigation();

  const handleEditProfilePress = async () => {
    navigation.navigate("EditProfilePage");
  };

  const handleViewProfilePress = async () => {
    // console.log("variables:\n",getVariables())
    navigation.navigate("ViewProfilePage");
  };

  const removeImage = async () => {
    try{
      await updateUserVariables('image_data', "");
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
      updateUserVariables('image_data', image_)
      
      Alert.alert('Upload successful', 'Your image has been uploaded, but you still need to save your changes.', [
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
    colors={feedBackgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
      <Header onFeedPage={7}/>
    </SafeAreaView>

    {/* Make a view that encapsulates the 'edit profile' and 'view profile' */}
    <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleEditProfilePress}>
            <View style={styles.editProfileContainer}>
                <Text style={styles.editProfileText}><FontAwesome5 name="user-edit" size={18} color="black" /> Edit Profile</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleViewProfilePress}>
            <View style={styles.viewProfileContainer}>
                <Text style={styles.viewProfileText}><MaterialCommunityIcons name="account-eye" size={22} color={iconColors} /> View Profile</Text>
            </View>
        </TouchableOpacity>
    </View>



    {/* Add in all the profile options here */}
    <ScrollView style={{marginBottom: '10%'}}>
      <View style={{marginTop: '5%', marginBottom: '15%'}}>
        <UserInputAccCreation initMessage={"Create a new bio ..."} icon="quote" field={"bio"}/>
        <UserInputAccCreation initMessage={"Change bucket list item ..."} icon="bucket" field={"bucket_list"}/>
        <UserInputAccCreation initMessage={"Change the key to your heart ..."} icon="lock-open" field={"win_my_heart"}/>
        <MultiSelectComponent initMessage={"Change interests and hobbies ..."} options={interestAndHobbies} icon={<MaterialIcons name="lightbulb" size={20} color="black" style={{ marginRight: 9 }}/>} field={"interests_hobbies"}/>
        <MultiSelectComponent initMessage={"Change your music options..."} options={musicChoices} icon={<Entypo name="folder-music" size={22} color="black" style={{ marginRight: 9 }}/>} field={"music_preference"}/>
        <UserInputAccCreation initMessage={"Change job title ..."} icon="briefcase" field={"job"}/>
        <DropdownComponent initMessage="Change tattoo status ..." options={[{ label: 'Yes', value: '1' },{ label: 'No, but I want some in the future', value: '2' }, { label: 'No', value: '3' }]} icon={<MaterialCommunityIcons name="needle" size={22} color="black" style={{ marginRight: 6 }}/> } field={"has_tattoos"}/>
        <DropdownComponent initMessage="Change sleep schedule ..." options={[{ label: 'Morning person', value: '1' },{ label: 'Night owl', value: '2' }, { label: 'Both', value: '3' }, { label: 'Neither', value: '4' }]} icon={<MaterialCommunityIcons name="sleep" size={22} color="black" style={{ marginRight: 6 }}/> } field={"sleep_schedule"}/>
        
        <DropdownComponent initMessage="Change workout routine ..." options={[{ label: 'Daily', value: '1' },{ label: 'Every other day', value: '2' }, { label: 'Weekly', value: '3' }, { label: "I don't exercise", value: '4' }]} icon={<MaterialCommunityIcons name="dumbbell" size={22} color="black" style={{ marginRight: 6 }}/> } field={"workout"}/>
        <DropdownComponent initMessage="Change communication style ..." options={[{ label: 'In person', value: '1' },{ label: 'Texting', value: '2' }, { label: 'Phone calls', value: '3' }, { label: "Video chats", value: '4' }]} icon={<Ionicons name="chatbubbles-sharp" size={22} color="black" style={{ marginRight: 6 }}/> } field={"communication_style"}/>
        
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
        />

        <DropdownComponent initMessage="I'd prefer a ..." options={[{ label: 'Dog', value: '1' },{ label: 'Cat', value: '2' },{ label: "Fish", value: '3' },{ label: "Lizard", value: '4' },{ label: "Other", value: '5' }]} icon={<MaterialIcons name="pets" size={20} color="black" style={{ marginRight: 6 }} /> } field={"pet_preference"}/>

        <Text style={{ marginLeft: '4%',fontSize: 16, marginTop: '5%', color: '#333', fontWeight: '400'}}>
          Change your profile picture
        </Text>
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


      </View>
    </ScrollView>

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
    marginTop: '5%',
    marginBottom: '1%'
  },
    editProfileText: {
        fontSize: 20,
        color: 'black'
    },
    viewProfileText: {
        fontSize: 20,
        color: iconColors
    },
    editProfileContainer:{
        marginRight: '2%',
        borderColor: 'black',
        borderRadius: 0,
        padding: 5,
        borderBottomWidth: 2
    },
    viewProfileContainer: {
        marginLeft: '2%',
        borderColor: iconColors,
        borderRadius: 0,
        padding: 5,
        borderBottomWidth: 2
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4%'
    },
    heading: {
        marginTop: '3%',
        marginBottom: '3%',
        marginLeft: '3%',
        marginRight: '3%',
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#D1D1D1'
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
    },
    filter: {
        fontSize: 22
    }
})

export default EditProfilePage;