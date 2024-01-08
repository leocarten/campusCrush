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

const windowHeight = Dimensions.get('window').height;

const pictureHeight = (windowHeight / 2);

const PersonsProfile = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { personName, personAge, personGoals, personBio, personJob } = route.params;
  console.log(personGoals)
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
                            <Text>Get to know <Text style={{ fontWeight: '600' }}>{personName}</Text>!</Text>
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
                            <Text style={styles.otherInfo}>{personGoals}</Text>
                        </View>
                    </View>


                    {/* BIO */}
                    <View style={styles.additionalInfoBio}>
                        <View style={styles.iconContainer}>
                            <Foundation name="quote" size={22} color={expandedIconColor} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.otherInfo}>{personBio}</Text>
                        </View>
                    </View>


                    {/* REST */}
                    <View style={styles.additionalInfo}>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="magnify" size={22} color={expandedIconColor} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.otherInfo}>The rest I need to control for!</Text>
                        </View>
                    </View>


                </View>

            </View>



        </ScrollView>


    </LinearGradient>
  );
}

const styles = StyleSheet.create({
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