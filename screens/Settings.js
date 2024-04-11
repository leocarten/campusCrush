import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView, TextInput, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { backgroundColor } from './src/styles/backgroundColors';
import { Ionicons, AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { getVariables } from './globalVariables/GlobalVariables';
import ConfettiCannon from 'react-native-confetti-cannon';
import MovingIcon from './src/components/movingIcon';
import Header from './src/components/feedComponents/header';
import { feedHeadingBackground, iconColors, feedBackgroundColor } from './src/styles/feedStyles/feedColors';
import DropdownComponent from './src/components/dropDown';
import UserInputSlider from './src/components/filterComponents/Slider';
import GradientText from './src/styles/gradientText';
import { deleteConversation } from '../endpoints/DeleteConversation';
import { Alert } from 'react-native';
import { expandedIconColor } from './src/styles/feedStyles/feedColors';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { deleteAccount } from '../endpoints/DeleteAccount';
import { switchLightMode } from './globalVariables/Lightmode';
import { getCurrentMode } from './globalVariables/Lightmode';
import { getUserInfo } from '../endpoints/GetSettingsPageInfo';
import { useEffect } from 'react';
import { changePassword_ } from '../endpoints/ChangePassword';




function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const currentDate = new Date();
  
  // Get the difference in years
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Adjust age if the current date has not reached the birth month and day yet
  if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
  ) {
      age--;
  }

  return age;
}


const UserSettingsPage = () => {

    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const getUserInfo_ = async () => {
            try {
                const info = await getUserInfo();
                setUserInfo(info);
            } catch (error) {
                // Handle error here
                console.error('Error fetching user info:', error);
            } finally {
                setLoading(false); // Set loading state to false regardless of success or failure
            }
        };

        getUserInfo_();
    }, []);


    // delete account
    const handleDeleteAccount = async () => {
      Alert.alert(
        "Warning",
        `This action will delete this account permanently.\n\nAre you sure you want to permanently delete your account?`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { 
            text: "Yes, delete.", 
            onPress: async () => {
              await deleteAccount();
              navigation.navigate('Welcome');
            }
          }
        ],
        { cancelable: false }
      );
    }

    // logout
    const handleLogout = async () => {
      Alert.alert(
        "Logout",
        `Are you sure you'd like to logout?`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { 
            text: "Yes, logout.", 
            onPress: async () => {
              navigation.navigate('Welcome');
            }
          }
        ],
        { cancelable: false }
      );
    }

    // change password

    const changePassword = async () => {
      Alert.alert(
        "Change password",
        `Are you sure you'd like to change your current password?`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { 
            text: "Yes, change password.", 
            onPress: async () => {
              Alert.prompt(
                'Enter password',
                'Password must be at least 10 characters long, contain a capital letter, and contain a number.',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: async (password) => {
                      const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
                      const regex2 = /[A-Z]/;
                      if(password.length >= 10 && (regex.test(password)) && (regex2.test(password)) ){
                        Alert.prompt(
                          'Password confirmation',
                          'Please re-type your password.',
                          [
                            {
                              text: 'Cancel',
                              onPress: () => console.log('Cancel Pressed'),
                              style: 'cancel',
                            },
                            {
                              text: 'OK',
                              onPress: async (password_confirmation) => {
                                if(password === password_confirmation){
                                  const isChanged = await changePassword_(password_confirmation);
                                  if(isChanged){
                                    Alert.alert(
                                      "Password updated!",
                                      `Your password has been updated. Please make sure you keep track of your password change in a secure way.`,
                                      [
                                        {
                                          text: "OK",
                                          onPress: () => console.log("Cancel Pressed"),
                                          style: "cancel"
                                        },
                                      ],
                                      { cancelable: false }
                                    );
                                }
                                }else{
                                  Alert.alert(
                                    "Passwords didn't match",
                                    `Uh-oh, your passwords didn't match each other. Please try again.`,
                                    [
                                      {
                                        text: "OK",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                      },
                                    ],
                                    { cancelable: false }
                                  );
                                }
                              }
                            },
                          ],
                          'secure-text',
                        );
                      }else{
                        Alert.alert(
                          "Password didn't contain required characters.",
                          `Password must be at least 10 characters long, contain a capital letter, and contain a number.`,
                          [
                            {
                              text: "OK",
                              onPress: () => console.log("Cancel Pressed"),
                              style: "cancel"
                            },
                          ],
                          { cancelable: false }
                        );
                      }
                    }
                  },
                ],
                'secure-text',
              );
            }
          }
        ],
        { cancelable: false }
      );
    };


  return (
    <LinearGradient
    colors={feedBackgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
      <Header onFeedPage={13}/>
    </SafeAreaView>
    <ScrollView>

    <View style={styles.innerContainer}>

      <View style={{marginBottom: '5%'}}></View>

      {/* ACCOUNT SETTINGS */}
        <View style={styles.sectionType}>
            <Text style={styles.sectionText}>MY PROFILE</Text>
        </View>

        <View style={styles.optionContainer}>
            <Text style={styles.optionText}>
                <Ionicons name="person" size={18} color="#474747" />{' '}
                {loading ? (
                    <ActivityIndicator size="small" color="#474747" />
                ) : (
                    userInfo.first_name
                )}
            </Text>
        </View>

        <View style={styles.optionContainer}>
            <Text style={styles.optionText}>
              <Entypo name="calendar" size={18} color="#474747" /> {' '}
                {loading ? (
                    <ActivityIndicator size="small" color="#474747" />
                ) : (
                  calculateAge(userInfo.dob)
                )} y/o
            </Text>
        </View>

        <View style={styles.optionContainer}>
            <Text style={styles.optionText}>
            <FontAwesome5 name="user-check" size={16} color="#474747" /> {' '}
                {loading ? (
                    <ActivityIndicator size="small" color="#474747" />
                ) : (
                  userInfo.gender === 1 ? 'Male' : (userInfo.gender === 0 ? 'Female' : 'Other')
                )}
            </Text>
        </View>

      {/* PASSWORD STUFF */}
      <View style={styles.sectionType}>
          <Text style={styles.sectionText}>PASSWORDS AND SECURITY</Text>
      </View>

      <TouchableOpacity style={styles.optionContainer} onPress={changePassword}>
        <Text style={styles.optionText}>
          <FontAwesome5 name="user-shield" size={17} color="#474747" /> Change password 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>
        <FontAwesome5 name="user-edit" size={18} color="#474747" /> Change username 
        </Text>
      </TouchableOpacity>


      {/* FEEDBACK */}
      <View style={styles.sectionType}>
          <Text style={styles.sectionText}>FEEDBACK</Text>
      </View>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>
          <FontAwesome name="exclamation-triangle" size={19} color="#474747" /> I found a bug
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>
        <FontAwesome name="exclamation-triangle" size={19} color="#474747" /> I have a safety concern
        </Text>
      </TouchableOpacity>


      {/* POLICY INFORMATION */}
      <View style={styles.sectionType}>
          <Text style={styles.sectionText}>POLICY INFORMATION</Text>
      </View>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>
          <MaterialIcons name="policy" size={20} color="#474747" /> Terms of service
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>
          <MaterialIcons name="rule" size={20} color="#474747" /> Rules
        </Text>
      </TouchableOpacity>


      {/* DELETE ACCOUNT */}
      <View style={styles.sectionType}>
          <Text style={styles.sectionText}>ACCOUNT ACTIONS</Text>
      </View>

      <TouchableOpacity style={styles.optionContainer} onPress={handleLogout}>
        <Text style={styles.optionText}>
          <FontAwesome5 name="power-off" size={17} color="#474747" /> Logout
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer} onPress={handleDeleteAccount}>
        <Text style={styles.optionText}>
          <MaterialCommunityIcons name="account-remove" size={24} color="#474747" /> Delete account 
        </Text>
      </TouchableOpacity>
    
    </View>



      <View style={{marginBottom: '10%'}}></View>


    </ScrollView>
    
    {/* <View style={styles.footer}>
      <Footer/>
    </View> */}

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    sectionType:{
        marginBottom: '2%',
        marginLeft: '1%',
        marginTop: '5%'
    },
    sectionText:{
        fontSize: 14,
        color: '#333',
        fontWeight: '600'
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
    },
    innerContainer: {
      paddingHorizontal: '5%', 
    },
    headingContainer: {
      marginTop: '10%',
      marginBottom: '8%', 
    },
    headingText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center'
    },
    optionContainer: {
      backgroundColor: '#E1E1E1',
      borderRadius: 5,
      paddingVertical: 15,
      paddingHorizontal: 20,
      marginBottom: 7, 
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 2 },
      borderBottomColor: '#A4A3A3',
      borderBottomWidth: 1.5,
      borderLeftColor: '#A4A3A3',
      borderLeftWidth: 0.5,
      borderRightColor: '#A4A3A3',
      borderRightWidth: 0.5
    },
    optionText: {
      fontSize: 16,
      color: 'black',
    },

})

export default UserSettingsPage;