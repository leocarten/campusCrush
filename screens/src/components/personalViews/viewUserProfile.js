import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { feedHeadingBackground, expandedIconColor } from '../../styles/feedStyles/feedColors';
import { useRoute } from '@react-navigation/native';
import { lineColor } from '../../styles/feedStyles/feedColors';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { textColor } from '../../styles/feedStyles/feedColors';
import { MaterialIcons } from '@expo/vector-icons';
import { iconColors } from '../../styles/feedStyles/feedColors';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { sectionInExpandedProfile } from '../../styles/feedStyles/feedColors';
import { AntDesign } from '@expo/vector-icons';
import SectionInProfile from '../personsProfile/ProfileSection';
import { FontAwesome5 } from '@expo/vector-icons';
import Section3 from '../personsProfile/Section3';
import { bigIconInSectionColor } from '../../styles/feedStyles/feedColors';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { getUserProfileInformation } from '../../../../endpoints/ViewUserProfile';
import { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import ErrorPage from '../../../errorFiles/Error';
import { Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const pictureHeight = (windowHeight / 2);

var totalConsumedWidth = 0;
function renderInterestText(interest, index) {
    // simple conversion: 390 = 41, so we need about 10 per letter
    totalConsumedWidth += interest.length
    if(interest.length != 0){
        var interestCap = interest.charAt(0).toUpperCase() + interest.slice(1);
        return <Text key={index} style={styles.interest}>{interestCap}</Text>
    }
    totalConsumedWidth = 0;
}

function renderMusicText(music, index, lengthOfArray) {
    if(music.length != 0){
        if(index == lengthOfArray-1){
            var musicCap = music.charAt(0).toUpperCase() + music.slice(1);
            return <Text key={index} style={styles.music}>{musicCap}</Text>
        }
        else{
            var musicCap = music.charAt(0).toUpperCase() + music.slice(1);
            return <Text key={index} style={styles.music}>{musicCap}<Entypo name="dot-single" size={17} color={expandedIconColor} /></Text>
        }
    }
}

// This file to do list:
// Make a request with the JWT, get response from server, parse it, handle the logic below!
// Extras: loading icon for server request

function calculateAge(birthdate) {
  const birthDateObject = new Date(birthdate);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDateObject.getFullYear();

  const hasBirthdayOccurred = (
    currentDate.getMonth() > birthDateObject.getMonth() ||
    (currentDate.getMonth() === birthDateObject.getMonth() &&
     currentDate.getDate() >= birthDateObject.getDate())
  );

  return hasBirthdayOccurred ? age : age - 1;
}


const ViewUserProfile = () => {

  const navigation = useNavigation();


  const [userProfileAttributes, setuserProfileAttributes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserProfileInformation();
        setuserProfileAttributes(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data!! Error:", error);
        setuserProfileAttributes(false);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    // Render a loading indicator or message while data is being fetched
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '70%' }}>
        <ActivityIndicator size="large" color="#3A3A3A"/>
      </View>
    ); 
  }

  var personName = "Error";
  var personAge = "Error";
  var personGoals = 1;
  var personBio = "Error";
  var personJob = "Error";
  var verified = 1;
  var interests = [
    ""
  ];
  var music = [
    ""
  ];
  var job = "Error";
  var KeyToHeart = "Error";
  var BucketList = "Error";
  var has_tattoos = 1;
  var workout = 3;
  var sleep_schedule = 2;
  var Communication_style = 2;
  var Ideal_first_meetup = 2;
  let pfp;

  if(userProfileAttributes != false){
    // LOG  [{"app_purpose": 1, "bio": "I want to see new things and expierence new things", "bitmoji_type": 1, "bucket_list": "", "communication_style": null, "dob": "2002-01-06T00:00:00.000Z", "first_name": "Emma", "has_tattoos": 0, "ideal_first_meetup": null, "interests": "Writing,Reading", "is_verified": 0, "job": "Retail Assistant", "music_preference": "Rap,Rock", "pet_preference": 0, "pictures": "Pictures", "sleep_schedule": 1, "win_my_heart": "Have $1,000,000.", "workout": 1}]
      personName = userProfileAttributes[0]['first_name'];
      personAge = calculateAge(userProfileAttributes[0]['dob']);
      personGoals = userProfileAttributes[0]['app_purpose'];
      personBio = userProfileAttributes[0]['bio'];;
      personJob = userProfileAttributes[0]['job'];
      verified = userProfileAttributes[0]['is_verified'];

      pfp = userProfileAttributes[0]['image_data'];

      if(userProfileAttributes[0]['interests'] != "" && userProfileAttributes[0]['interests'] != null){
        interests = userProfileAttributes[0]['interests'].split(',');
      }
      else{
        interests = [""];
      }
      if(userProfileAttributes[0]['music_preference'] != "" && userProfileAttributes[0]['music_preference'] != null){
        music = userProfileAttributes[0]['music_preference'].split(',');
      }
      else{
        music = [""];
      }
      job = userProfileAttributes[0]['job'];
      KeyToHeart = userProfileAttributes[0]["win_my_heart"];
      BucketList = userProfileAttributes[0]["bucket_list"];
      has_tattoos = userProfileAttributes[0]["has_tattoos"];
      workout = userProfileAttributes[0]["workout"];
      sleep_schedule = userProfileAttributes[0]["sleep_schedule"];
      Communication_style = userProfileAttributes[0]["communication_style"];
      Ideal_first_meetup = userProfileAttributes[0]["ideal_first_meetup"];
    // personName = userProfileAttributes[0]['first_name'];
    // personAge = calculateAge(userProfileAttributes[0]['dob']);
    // personGoals = userProfileAttributes[0]['app_purpose'];
    // personBio = userProfileAttributes[0]['bio'];;
    // personJob = userProfileAttributes[0]['job'];
    // verified = userProfileAttributes[0]['is_verified'];
    // if(userProfileAttributes[0]['interests'] != "" && userProfileAttributes[0]['interests'] != null){
    //   interests = userProfileAttributes[0]['interests'].split(',');
    // }
    // else{
    //   interests = [""];
    // }
    // if(userProfileAttributes[0]['music_preference'] != "" && userProfileAttributes[0]['music_preference'] != null){
    //   music = userProfileAttributes[0]['music_preference'].split(',');
    // }
    // else{
    //   music = [""];
    // }
    // job = userProfileAttributes[0]['job'];
    // KeyToHeart = userProfileAttributes[0]["win_my_heart"];
    // BucketList = userProfileAttributes[0]["bucket_list"];
    // has_tattoos = userProfileAttributes[0]["has_tattoos"];
    // workout = userProfileAttributes[0]["workout"];
    // sleep_schedule = userProfileAttributes[0]["sleep_schedule"];
    // Communication_style = userProfileAttributes[0]["communication_style"];
    // Ideal_first_meetup = userProfileAttributes[0]["ideal_first_meetup"];
    // console.log('ATTRIBUTES:\n',userProfileAttributes[0]['first_name']);
  }
  else{
    navigation.navigate("ErrorPage",{body: "CONNECTION ERROR", message: "We had an issue trying to fulfil this request. Please try again soon!", page: 3});
  }
  

  
  let verifiedIcon;
  let bioSpace;
  let userWants;
  let interestsIcon;
  let jobIcon;
  let tattosIcon;
  let tattooText;
  let tattosSection3;
  let sleepIcon;
  let sleepText;
  let sleepSection3;
  let jobText;
  let bioMargin;
  let unloockHeartSection;
  let bucketListSection;
  let jobSection3;
  let workoutIcon;
  let workoutText;
  let workoutSection3;
  let communication_style_Icon;
  let communicationStyleText;
  let communicationStyleSection3;
  let idealFirstMeetup_Icon;
  let idealFirstMeetupText;
  let idealFirstMeetupSection3;

  //  image data logic
  if(pfp == "" || pfp == null){
    pfp = "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"
  }

  // IDEAL FIRST MEETUP :()
      if(Ideal_first_meetup == 0 || Ideal_first_meetup == null){
        idealFirstMeetup_Icon = "";
        idealFirstMeetupText = "";
        idealFirstMeetupSection3 = "";
      }
      else if(Ideal_first_meetup == 1){
        idealFirstMeetup_Icon = <FontAwesome5 name="people-arrows" size={19} color={expandedIconColor} />;
        idealFirstMeetupText = <Text style={styles.music}>Video chat</Text>;
        idealFirstMeetupSection3 = <Section3 jobIcon={idealFirstMeetup_Icon} jobText={idealFirstMeetupText}/>;
      }
      else if(Ideal_first_meetup == 2){
        idealFirstMeetup_Icon = <FontAwesome5 name="people-arrows" size={19} color={expandedIconColor} />;
        idealFirstMeetupText = <Text style={styles.music}>A chill night at home</Text>;
        idealFirstMeetupSection3 = <Section3 jobIcon={idealFirstMeetup_Icon} jobText={idealFirstMeetupText}/>;
      }
      else if(Ideal_first_meetup == 3){
        idealFirstMeetup_Icon = <FontAwesome5 name="people-arrows" size={19} color={expandedIconColor} />;
        idealFirstMeetupText = <Text style={styles.music}>Play a board game</Text>;
        idealFirstMeetupSection3 = <Section3 jobIcon={idealFirstMeetup_Icon} jobText={idealFirstMeetupText}/>;
      }
      else if(Ideal_first_meetup == 4){
        idealFirstMeetup_Icon = <FontAwesome5 name="people-arrows" size={19} color={expandedIconColor} />;
        idealFirstMeetupText = <Text style={styles.music}>Go stargazing</Text>;
        idealFirstMeetupSection3 = <Section3 jobIcon={idealFirstMeetup_Icon} jobText={idealFirstMeetupText}/>;
      }
      else if(Ideal_first_meetup == 5){
        idealFirstMeetup_Icon = <FontAwesome5 name="people-arrows" size={19} color={expandedIconColor} />;
        idealFirstMeetupText = <Text style={styles.music}>Go to a coffee shop</Text>;
        idealFirstMeetupSection3 = <Section3 jobIcon={idealFirstMeetup_Icon} jobText={idealFirstMeetupText}/>;
      }
      else if(Ideal_first_meetup == 6){
        idealFirstMeetup_Icon = <FontAwesome5 name="people-arrows" size={19} color={expandedIconColor} />;
        idealFirstMeetupText = <Text style={styles.music}>Grab a bite of food</Text>;
        idealFirstMeetupSection3 = <Section3 jobIcon={idealFirstMeetup_Icon} jobText={idealFirstMeetupText}/>;
      }
      else if(Ideal_first_meetup == 7){
        idealFirstMeetup_Icon = <FontAwesome5 name="people-arrows" size={19} color={expandedIconColor} />;
        idealFirstMeetupText = <Text style={styles.music}>Catch a movie</Text>;
        idealFirstMeetupSection3 = <Section3 jobIcon={idealFirstMeetup_Icon} jobText={idealFirstMeetupText}/>;
      }
      else if(Ideal_first_meetup == 8){
        idealFirstMeetup_Icon = <FontAwesome5 name="people-arrows" size={19} color={expandedIconColor} />;
        idealFirstMeetupText = <Text style={styles.music}>Go for a walk</Text>;
        idealFirstMeetupSection3 = <Section3 jobIcon={idealFirstMeetup_Icon} jobText={idealFirstMeetupText}/>;
      }
      else if(Ideal_first_meetup == 9){
        idealFirstMeetup_Icon = <FontAwesome5 name="people-arrows" size={19} color={expandedIconColor} />;
        idealFirstMeetupText = <Text style={styles.music}>Go on a hike</Text>;
        idealFirstMeetupSection3 = <Section3 jobIcon={idealFirstMeetup_Icon} jobText={idealFirstMeetupText}/>;
      }
      else if(Ideal_first_meetup == 10){
        idealFirstMeetup_Icon = <FontAwesome5 name="people-arrows" size={19} color={expandedIconColor} />;
        idealFirstMeetupText = <Text style={styles.music}>Go to a trivia night</Text>;
        idealFirstMeetupSection3 = <Section3 jobIcon={idealFirstMeetup_Icon} jobText={idealFirstMeetupText}/>;
      }
      else if(Ideal_first_meetup == 11){
        idealFirstMeetup_Icon = <FontAwesome5 name="people-arrows" size={19} color={expandedIconColor} />;
        idealFirstMeetupText = <Text style={styles.music}>Visit a karaoke bar</Text>;
        idealFirstMeetupSection3 = <Section3 jobIcon={idealFirstMeetup_Icon} jobText={idealFirstMeetupText}/>;
      }

    // COMMUNICATION STYLE
    if(Communication_style == 0 || Communication_style == null){
      communication_style_Icon = "";
      communicationStyleText = "";
      communicationStyleSection3 = "";
    }
    else if(Communication_style == 1){
      communication_style_Icon = <Ionicons name="chatbubbles-sharp" size={22} color={expandedIconColor} />;
      communicationStyleText = <Text style={styles.music}>In person</Text>;
      communicationStyleSection3 = <Section3 jobIcon={communication_style_Icon} jobText={communicationStyleText}/>;
    }
    else if(Communication_style == 2){
      communication_style_Icon = <Ionicons name="chatbubbles-sharp" size={22} color={expandedIconColor} />;
      communicationStyleText = <Text style={styles.music}>Texting</Text>;
      communicationStyleSection3 = <Section3 jobIcon={communication_style_Icon} jobText={communicationStyleText}/>;
    }
    else if(Communication_style == 3){
      communication_style_Icon = <Ionicons name="chatbubbles-sharp" size={22} color={expandedIconColor} />;
      communicationStyleText = <Text style={styles.music}>Phone calls</Text>;
      communicationStyleSection3 = <Section3 jobIcon={communication_style_Icon} jobText={communicationStyleText}/>;
    }
    else if(Communication_style == 4){
      communication_style_Icon = <Ionicons name="chatbubbles-sharp" size={22} color={expandedIconColor} />;
      communicationStyleText = <Text style={styles.music}>Video chats</Text>;
      communicationStyleSection3 = <Section3 jobIcon={communication_style_Icon} jobText={communicationStyleText}/>;
    }

  // TATTOOS
  if(has_tattoos == 0){
    tattosIcon = "";
    tattooText = "";
    tattosSection3 = "";
  }
  else if(has_tattoos == 1){
    tattosIcon = <MaterialCommunityIcons name="needle" size={22} color={expandedIconColor} />;
    tattooText = <Text style={styles.music}>I have tattoos</Text>;
    tattosSection3 = <Section3 jobIcon={tattosIcon} jobText={tattooText}/>;
  }
  else if(has_tattoos == 2){
    tattosIcon = <MaterialCommunityIcons name="needle" size={22} color={expandedIconColor} />;
    tattooText = <Text style={styles.music}>No tattoos, but I want some!</Text>;
    tattosSection3 = <Section3 jobIcon={tattosIcon} jobText={tattooText}/>;
  }
  else if(has_tattoos == 3){
    tattosIcon = <MaterialCommunityIcons name="needle" size={22} color={expandedIconColor} />;
    tattooText = <Text style={styles.music}>No tattoos</Text>;
    tattosSection3 = <Section3 jobIcon={tattosIcon} jobText={tattooText}/>;
  }

    // SLEEP SCHEDULE
    if(sleep_schedule == 0){
        sleepIcon = "";
        sleepText = "";
        sleepSection3 = "";
    }
    else if(sleep_schedule == 1){ // morning
        sleepIcon = <Feather name="sunrise" size={22} color={expandedIconColor} />;
        sleepText = <Text style={styles.music}>Morning person</Text>;
        sleepSection3 = <Section3 jobIcon={sleepIcon} jobText={sleepText}/>;
    }
    else if(sleep_schedule == 2){ // night owl
        sleepIcon = <Ionicons name="moon" size={22} color={expandedIconColor} />;
        sleepText = <Text style={styles.music}>Night owl</Text>;
        sleepSection3 = <Section3 jobIcon={sleepIcon} jobText={sleepText}/>;
    }
    else if(sleep_schedule == 3){ // night and morning
        sleepIcon = <MaterialCommunityIcons name="sleep-off" size={22} color={expandedIconColor} />;
        sleepText = <Text style={styles.music}>Morning and night person</Text>;
        sleepSection3 = <Section3 jobIcon={sleepIcon} jobText={sleepText}/>;
    }
    else if(sleep_schedule == 4){ // night and morning
        sleepIcon = <MaterialCommunityIcons name="sleep" size={22} color={expandedIconColor} />;
        sleepText = <Text style={styles.music}>Neither morning nor night</Text>;
        sleepSection3 = <Section3 jobIcon={sleepIcon} jobText={sleepText}/>;
    }

// WORKOUT
  if(workout == 0){
    workoutIcon = "";
    workoutText = "";
    workoutSection3 = "";
  }
  else if(workout == 1){
    workoutIcon = <MaterialCommunityIcons name="dumbbell" size={22} color={expandedIconColor} />;
    workoutText = <Text style={styles.music}>Daily</Text>;
    workoutSection3 = <Section3 jobIcon={workoutIcon} jobText={workoutText}/>;
  }
  else if(workout == 2){
    workoutIcon = <MaterialCommunityIcons name="dumbbell" size={22} color={expandedIconColor} />;
    workoutText = <Text style={styles.music}>Every other day</Text>;
    workoutSection3 = <Section3 jobIcon={workoutIcon} jobText={workoutText}/>;
  }
  else if(workout == 3){
    workoutIcon = <MaterialCommunityIcons name="dumbbell" size={22} color={expandedIconColor} />;
    workoutText = <Text style={styles.music}>Weekly</Text>;
    workoutSection3 = <Section3 jobIcon={workoutIcon} jobText={workoutText}/>;
  }
  else if(workout == 4){
    workoutIcon = <MaterialCommunityIcons name="dumbbell" size={22} color={expandedIconColor} />;
    workoutText = <Text style={styles.music}>I don't exercise often</Text>;
    workoutSection3 = <Section3 jobIcon={workoutIcon} jobText={workoutText}/>;
  }

// BUCKET LIST
  if(BucketList == "" || BucketList == null){
    bucketListSection = "";
  }
  else{
    bucketListSection = <SectionInProfile icon={<FontAwesome name="list-ol" size={38} color={bigIconInSectionColor}/>} title={"One thing on my bucket list is..."} body={BucketList}/>;
  }

//   KEY TO HEART
  if(KeyToHeart == "" || KeyToHeart == null){
    unloockHeartSection = "";
  }
  else{
    unloockHeartSection = <SectionInProfile icon={<AntDesign name="unlock" size={40} color={bigIconInSectionColor}/>} title={"To unlock my heart, you need..."} body={KeyToHeart}/>;
  }


//   JOB
  if(job == ""){
    jobIcon = "";
    jobText = "";
    jobSection3 = "";
  }
  else{
    jobIcon = <FontAwesome name="briefcase" size={22} color={expandedIconColor} />;
    jobText = <Text style={styles.music}>{job}</Text>;
    jobSection3 = <Section3 jobIcon={jobIcon} jobText={jobText}/>;
  }

//   INTERESTS
  if(interests[0] == ""){
    interestsIcon = "";
  }
  else{
    interestsIcon = <MaterialCommunityIcons name="clover" size={22} color={expandedIconColor} />;
  }

//   MUSIC
  if(music[0] == ""){
    musicIcon = "";
  }
  else{
    musicIcon = <Fontisto name="applemusic" size={22} color={expandedIconColor} />;
  }

// VERIFIED
  if(verified === 1){
      verifiedIcon = <Text><MaterialIcons name="verified" size={21} color="#30ADA7"/></Text>
  }
  else{
    verifiedIcon = ""
  }

//   BIO
  if(personBio != ""){
    bioSpace = <View style={styles.additionalInfoBio}><View style={styles.iconContainer}><Foundation name="quote" size={22} color={expandedIconColor} /></View><View style={styles.textContainer}><Text style={styles.otherInfo}>{personBio}</Text></View></View>
    bioMargin = <View style={{marginTop:'1%'}}></View> ;
}
  else{
    bioSpace = ""
    bioMargin = ""
  }

//   APP PURPOSE AND GOALS

  if(personGoals === 1){
    userWants = <Text>Nothing serious &#128524;</Text>;
  }
  else if(personGoals === 2){
    userWants = <Text>A lasting relationship &#10084;</Text>;
  }
  else if(personGoals === 3){
    userWants = <Text>New experiences &#127760;</Text>;
  }
  else if(personGoals === 4){
    userWants = <Text>New friendships &#128100;</Text>;
  }
  else if(personGoals === 5){
    userWants = <Text>I'm not sure yet &#129300;</Text>;
  }
  else{
    userWants = <Text>Suprise me! &#127880;</Text>;
  }

  return (


    <View style={styles.profileContainer}>

        <View style={styles.pictureContainer}>
          <Image
            source={{ uri: `data:image/png;base64,${pfp}`}}
            style={{width: '100%',height: '100%', marginTop:'auto',marginBottom:'auto',marginLeft:'auto',marginRight:'auto'}}
          />
        </View>

        <View style={styles.moreInformationContainer}>
            <View style={styles.title}>
                <Text style={styles.getToKnow}>
                    <Text>Get to know <Text style={{ fontWeight: '600' }}>{personName}</Text>! <Text>{verifiedIcon}</Text> </Text>
                </Text>
            </View>

            <View style={styles.section}>

                {/* AGE */}
                <View style={{paddingTop: '3%'}}></View>

                <View style={styles.additionalInfo}>
                    <View style={styles.iconContainer}>
                        <Entypo name="calendar" size={22} color={expandedIconColor} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.otherInfo}>{personAge} y/o</Text>
                    </View>
                </View>


                {/* GOALS */}
                <View style={{marginTop:'1%'}}></View>
                <View style={styles.additionalInfo}>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="magnify" size={22} color={expandedIconColor} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.otherInfo}>{userWants}</Text>
                    </View>
                </View>



                {bioMargin}
                {/* BIO */}
                <View>
                    {bioSpace}
                </View>


                {/* INTERESTS */}
                <View style={styles.additionalInfoMusic}>
                    <View style={styles.iconContainer}>
                        {interestsIcon}
                    </View>
                    <View style={styles.interestsContainer}>
                        {/* <Text style={styles.otherInfo}>{interests}</Text> */}
                        {interests.map((interest, index) => (
                            renderInterestText(interest, index)
                        ))}
                    </View>
                </View>

                {/* MUSIC */}
                <View style={styles.additionalInfoMusic}>
                    <View style={styles.iconContainer}>
                        {musicIcon}
                    </View>
                    <View style={styles.interestsContainer}>
                        {/* <Text style={styles.otherInfo}>{interests}</Text> */}
                        {music.map((Music, index) => (
                            renderMusicText(Music, index, music.length)
                        ))}
                    </View>
                </View>


            </View>

            {/* UNLOCK MY HEART! */}
            {unloockHeartSection}

            {/* BUCKET LIST */}
            {bucketListSection}

            {/* THE EXTRAS SECTION */}
            <View style={styles.section3}>
                {/* <Section3 jobIcon={jobIcon} jobText={jobText}/> */}
                {/* <Section3 jobIcon={jobIcon} jobText={jobText}/>
                <Section3 jobIcon={jobIcon} jobText={jobText}/> */}
                {jobSection3}
                {tattosSection3}
                {sleepSection3}
                {workoutSection3}
                {communicationStyleSection3}
                {idealFirstMeetupSection3}
            </View>


        </View>

    </View>

  );
}

const styles = StyleSheet.create({
    sectionIcon: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: '2%',
        marginBottom: '2%'
    },
    section3: {
        marginTop: '4%',
        padding: 2,
        backgroundColor: sectionInExpandedProfile,
        borderRadius: 5,
        shadowColor: 'white',
        shadowRadius: 2.5,
        shadowOpacity: 0.5,
        shadowOffset: 10,
        paddingLeft: '2%'
    },
    section: {
        marginTop: '2%',
        padding: 2,
        backgroundColor: sectionInExpandedProfile,
        borderRadius: 5,
        shadowColor: 'white',
        shadowRadius: 2.5,
        shadowOpacity: 0.5,
        shadowOffset: 10,
        paddingLeft: '2%'
    },
    section2: {
        marginTop: '4%',
        padding: 2,
        backgroundColor: sectionInExpandedProfile,
        borderRadius: 5
    },
    music: {
        fontSize: 18,
        backgroundColor: 'transparent',
        padding: 4,
        height: 30,
        alignSelf: "flex-start",
        color: iconColors,
        // marginRight: '1.75%'
    },
    interest:{
        fontSize: 18,
        backgroundColor: 'transparent',
        padding: 4,
        height: 30,
        alignSelf: "flex-start",
        borderColor: iconColors,
        borderWidth: 0.5,
        borderRadius: 10,
        color: iconColors,
        marginBottom: '2%',
        marginRight: '2%'
    },
    textContainer: {
        alignItems: 'center', 
    },
    iconContainer: {
        marginRight: 6, 
    },
    otherInfo: {
        color: textColor,
        // color: feedHeadingBackground,
        fontSize: 20,
    },
    sectionText: {
        color: textColor,
        // color: feedHeadingBackground,
        fontSize: 18,
        marginLeft: '2%'
    },
    sectionTextCenter: {
        color: textColor,
        // color: feedHeadingBackground,
        fontSize: 18,
        marginLeft: '2%',
        textAlign: 'center',
        marginBottom: '2%'
    },
    additionalInfo: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: '2%'
    },
    additionalInfoMusic: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: '0%'
    },
    additionalInfoBio: {
        flexDirection: 'row', 
        marginBottom: '2%',
        width: '90%'
    },
    title: {
        // borderBottomWidth: 0.5,
        // borderColor: lineColor,
        paddingBottom: '1%',
    },
    getToKnow: {
        fontSize: 22,
        fontWeight: '400',
        color: textColor,
        // color: feedHeadingBackground,
    },
    moreInformationContainer: {
        // backgroundColor: 'transparent',
        backgroundColor: feedHeadingBackground,
        padding: 10,
        borderRadius: 5,
    },
    interestsContainer:{
        marginTop: '1%',
        // marginLeft: '2%',
        marginRight: '7%',
        flexDirection: 'row',
        justifyContent: "flex-start",
        flexWrap: 'wrap'
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
    nameContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
    },
    pictureContainer: {
        // backgroundColor: lineColor,
        width: '100%',
        height: pictureHeight,
        alignSelf: 'center', // Center horizontally
        marginBottom: '3%',
        borderColor: lineColor,
        borderWidth: 1,
    },
    profileContainer: {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '0%',
        borderColor: lineColor,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    },
})

export default ViewUserProfile;