import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import Header from './src/components/feedComponents/header';
import { feedHeadingBackground } from './src/styles/feedStyles/feedColors';
import { feedBackgroundColor } from './src/styles/feedStyles/feedColors';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { iconColors } from './src/styles/feedStyles/feedColors';
import { lineColor } from './src/styles/feedStyles/feedColors';
import { TouchableOpacity } from 'react-native';
import ItemInFeed from './src/components/feedComponents/itemInFeed';
import ViewUserProfile from './src/components/personalViews/viewUserProfile';

const ViewProfilePage = () => {
  const navigation = useNavigation();

  const handleEditProfilePress = async () => {
    navigation.navigate("EditProfilePage");
  };

  const handleViewProfilePress = async () => {
    navigation.navigate("ViewProfilePage");
  };

  return (
    <LinearGradient
    colors={feedBackgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
    <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
      <Header onFeedPage={3}/>
    </SafeAreaView>

    {/* Make a view that encapsulates the 'edit profile' and 'view profile' */}
    <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleEditProfilePress}>
            <View style={styles.editProfileContainer}>
                <Text style={styles.editProfileText}><FontAwesome5 name="user-edit" size={18} color={iconColors} /> Edit Profile</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleViewProfilePress}>
            <View style={styles.viewProfileContainer}>
                <Text style={styles.viewProfileText}><MaterialCommunityIcons name="account-eye" size={22} color='black' /> View Profile</Text>
            </View>
        </TouchableOpacity>
    </View>


    {/* Add in the display user information here here */}
    {/* personName, personAge, personGoals, personBio, personJob, verified, interests, music, job, KeyToHeart, BucketList, has_tattoos, workout, sleep_schedule, Communication_style, Ideal_first_meetup = route.params;*/}
    <ScrollView style={{marginBottom: '10%', marginTop: '3%'}}>
        <ViewUserProfile/>
    </ScrollView>


    
    {/* <View style={styles.footer}>
      <Footer/>
    </View> */}

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    editProfileText: {
        fontSize: 20,
        color: iconColors
    },
    viewProfileText: {
        fontSize: 20,
        color: 'black'
    },
    editProfileContainer:{
        marginRight: '2%',
        borderColor: iconColors,
        borderRadius: 0,
        padding: 5,
        borderBottomWidth: 2
    },
    viewProfileContainer: {
        marginLeft: '2%',
        borderColor: 'black',
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

export default ViewProfilePage;