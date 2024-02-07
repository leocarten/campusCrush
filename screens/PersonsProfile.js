import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import Header from './src/components/feedComponents/header';
import { feedHeadingBackground, expandedIconColor } from './src/styles/feedStyles/feedColors';
import { feedBackgroundColor } from './src/styles/feedStyles/feedColors';
import MessagesComponent from './src/components/messagingComponents/message';
import { useRoute } from '@react-navigation/native';
import { lineColor } from './src/styles/feedStyles/feedColors';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { aboutPersonBackground } from './src/styles/feedStyles/feedColors';
import { textColor } from './src/styles/feedStyles/feedColors';
import { MaterialIcons } from '@expo/vector-icons';
import { iconColors } from './src/styles/feedStyles/feedColors';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { sectionInExpandedProfile } from './src/styles/feedStyles/feedColors';
import { AntDesign } from '@expo/vector-icons';
import SectionInProfile from './src/components/personsProfile/ProfileSection';
import { FontAwesome5 } from '@expo/vector-icons';
import Section3 from './src/components/personsProfile/Section3';
import { bigIconInSectionColor } from './src/styles/feedStyles/feedColors';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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

const PersonsProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { personName, personAge, personGoals, personBio, personJob, verified, interests, music, job, KeyToHeart, BucketList, has_tattoos, workout, sleep_schedule} = route.params;
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

  // TATTOOS
  if(has_tattoos == 0){
    tattosIcon = "";
    tattooText = "";
    tattosSection3 = "";
  }
  else if(has_tattoos == 1){
    tattosIcon = <MaterialCommunityIcons name="needle" size={22} color={expandedIconColor} />;
    tattooText = <Text style={styles.music}>Yes</Text>;
    tattosSection3 = <Section3 jobIcon={tattosIcon} jobText={tattooText}/>;
  }
  else if(has_tattoos == 2){
    tattosIcon = <MaterialCommunityIcons name="needle" size={22} color={expandedIconColor} />;
    tattooText = <Text style={styles.music}>No, but I want some!</Text>;
    tattosSection3 = <Section3 jobIcon={tattosIcon} jobText={tattooText}/>;
  }
  else if(has_tattoos == 3){
    tattosIcon = <MaterialCommunityIcons name="needle" size={22} color={expandedIconColor} />;
    tattooText = <Text style={styles.music}>No</Text>;
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
    userWants = <Text>A long-term partner &#10084;</Text>;
    }
    else if(personGoals === 2){
        userWants = <Text>A short-term partner &#128520;</Text>;
    }
    else if(personGoals === 3){
        userWants = <Text>To meet new people &#127760;</Text>;
    }
    else if(personGoals === 4){
        userWants = <Text>I'm not sure &#129304;</Text>;
    }
    else{
        userWants = <Text>I DON'T KNOW</Text>;
    }

  return (
    <LinearGradient
    colors={feedBackgroundColor}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}>
        <SafeAreaView style={{backgroundColor: feedHeadingBackground}}>
        <Header onFeedPage={5}/>
        </SafeAreaView>
        
        <ScrollView style={{marginBottom: '10%'}}>

            <View style={styles.profileContainer}>

                <View style={styles.pictureContainer}>
                    <Text></Text>
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
                    </View>


                </View>

            </View>



        </ScrollView>


    </LinearGradient>
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
        backgroundColor: lineColor,
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
        marginTop: '3%',
        borderColor: lineColor,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    },
})

export default PersonsProfile;