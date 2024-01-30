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

var totalConsumedWidth = 0;
function renderMusicText(music, index) {
    // simple conversion: 390 = 41, so we need about 10 per letter
    totalConsumedWidth += music.length
    if(music.length != 0){
        var musicCap = music.charAt(0).toUpperCase() + music.slice(1);
        return <Text key={index} style={styles.music}>{musicCap}</Text>
    }
    totalConsumedWidth = 0;
}

const PersonsProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { personName, personAge, personGoals, personBio, personJob, verified, interests, music, job} = route.params;
  let verifiedIcon;
  let bioSpace;
  let userWants;
  let interestsIcon;
  let jobIcon;
  let jobText;

  if(job == ""){
    jobIcon = "";
    jobText = "";
  }
  else{
    jobIcon = <FontAwesome name="briefcase" size={22} color={expandedIconColor} />;
    jobText = <Text style={styles.music}>{job}</Text>;
  }

  if(interests[0] == ""){
    interestsIcon = "";
  }
  else{
    interestsIcon = <MaterialCommunityIcons name="clover" size={22} color={expandedIconColor} />;
  }

  if(music[0] == ""){
    musicIcon = "";
  }
  else{
    musicIcon = <Fontisto name="applemusic" size={22} color={expandedIconColor} />;
  }

  for(var i = 0; i < interests.length; i++){
    console.log(interests[i])
  }

  if(verified === 1){
      verifiedIcon = <Text><MaterialIcons name="verified" size={21} color="#30ADA7"/></Text>
  }
  else{
    verifiedIcon = ""
  }
  if(personBio != ""){
    bioSpace = <View style={styles.additionalInfoBio}><View style={styles.iconContainer}><Foundation name="quote" size={22} color={expandedIconColor} /></View><View style={styles.textContainer}><Text style={styles.otherInfo}>{personBio}</Text></View></View>
  }
  else{
    bioSpace = ""
  }

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
                    <View style={styles.additionalInfo}>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="magnify" size={22} color={expandedIconColor} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.otherInfo}>{userWants}</Text>
                        </View>
                    </View>


                    {/* BIO */}
                    <View>
                        {bioSpace}
                    </View>
                    {/* <View style={styles.additionalInfoBio}>
                        <View style={styles.iconContainer}>
                            <Foundation name="quote" size={22} color={expandedIconColor} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.otherInfo}>{personBio}</Text>
                        </View>
                    </View> */}


                    {/* INTERESTS */}
                    <View style={styles.additionalInfo}>
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
                    <View style={styles.additionalInfo}>
                        <View style={styles.iconContainer}>
                            {musicIcon}
                        </View>
                        <View style={styles.interestsContainer}>
                            {/* <Text style={styles.otherInfo}>{interests}</Text> */}
                            {music.map((Music, index) => (
                                renderMusicText(Music, index)
                            ))}
                        </View>
                    </View>


                    {/* JOB */}
                    <View style={styles.additionalInfo}>
                        <View style={styles.iconContainer}>
                            {jobIcon}
                        </View>
                        <View style={styles.interestsContainer}>
                            {jobText}
                        </View>
                    </View>


                </View>

            </View>



        </ScrollView>


    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    music: {
        fontSize: 18,
        backgroundColor: 'transparent',
        padding: 4,
        height: 30,
        alignSelf: "flex-start",
        color: iconColors,
        marginRight: '1.75%'
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
    additionalInfo: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: '2%'
    },
    additionalInfoBio: {
        flexDirection: 'row', 
        marginBottom: '2%',
        width: '90%'
    },
    title: {
        borderBottomWidth: 0.5,
        borderColor: lineColor,
        paddingBottom: '3%',
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
        borderRadius: 5
    },
    interestsContainer:{
        marginTop: '1%',
        // marginLeft: '2%',
        marginRight: '2%',
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